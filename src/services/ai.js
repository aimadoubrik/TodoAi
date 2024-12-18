import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCAeHwyGA0NWqXOswJDsFgVxjAzWAJIHig");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function getAISuggestions(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("AI Error:", error);
    return "Sorry, I couldn't generate suggestions at this time.";
  }
}

export async function generateTasks() {
  const prompt = `Generate a list of 5 productive daily tasks that would help someone be more productive and organized. 
  Return ONLY a JSON array of strings, for example: ["task 1", "task 2", "task 3", "task 4", "task 5"]
  The response should be valid JSON and nothing else.`;
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean up the response to ensure valid JSON
    const cleanedText = text.trim()
      .replace(/^```json\s*/, '') // Remove JSON code block markers if present
      .replace(/```$/, '')        // Remove ending code block marker if present
      .trim();
    
    try {
      const tasks = JSON.parse(cleanedText);
      
      // Validate that we got an array of strings
      if (!Array.isArray(tasks)) {
        throw new Error('Response is not an array');
      }
      
      // Ensure we have exactly 5 string tasks
      const validTasks = tasks
        .filter(task => typeof task === 'string')
        .slice(0, 5);
        
      if (validTasks.length === 0) {
        throw new Error('No valid tasks found');
      }
      
      return validTasks;
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      // Fallback tasks if parsing fails
      return [
        "Review and prioritize today's tasks",
        "Clean and organize your workspace",
        "Update your calendar and schedule",
        "Take regular breaks for better productivity",
        "Review and reflect on daily achievements"
      ];
    }
  } catch (error) {
    console.error("AI Task Generation Error:", error);
    // Return default tasks if AI fails
    return [
      "Review and prioritize today's tasks",
      "Clean and organize your workspace",
      "Update your calendar and schedule",
      "Take regular breaks for better productivity",
      "Review and reflect on daily achievements"
    ];
  }
}