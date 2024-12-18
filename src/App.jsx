import { useState } from "react";
import { getAISuggestions, generateTasks } from "./services/ai";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import AISuggestion from "./components/AISuggestion";

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [aiSuggestion, setAiSuggestion] = useState("");

    const addTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                completed: false,
            },
        ]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const getSuggestions = async (id) => {
        setLoading(true);
        const todo = todos.find((t) => t.id === id);
        const prompt = `Give me a quick suggestion (max 2 sentences) on how to accomplish this task: "${todo.text}"`;

        try {
            const suggestion = await getAISuggestions(prompt);
            setAiSuggestion(suggestion);
        } catch (error) {
            console.error("Error getting suggestions:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateTasks = async () => {
        setLoading(true);
        try {
            const tasks = await generateTasks();
            tasks.forEach((task) => {
                addTodo(task);
            });
        } catch (error) {
            console.error("Error generating tasks:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-300 p-6">
            <div className="max-w-2xl mx-auto space-y-8">
                <Header />

                <TodoForm
                    onAdd={addTodo}
                    onGenerateTasks={handleGenerateTasks}
                    loading={loading}
                />

                <AISuggestion
                    suggestion={aiSuggestion}
                    onClose={() => setAiSuggestion("")}
                />

                <TodoList
                    todos={todos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onGetSuggestions={getSuggestions}
                />
            </div>
        </div>
    );
}

export default App;
