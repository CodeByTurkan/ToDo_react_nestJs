import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import { useState } from "react";

export function ToDo() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    setTodos([...todos, {id:Date.now(), text: input }]);
    // Date.now() is a placeholder for “the database will handle this later”
    setInput("");
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleEdit = (id: number) => {
    const newText = prompt("Edit todo: ");
    if (!newText) return;
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };
  return (
    <div className="flex flex-col items-center  min-h-screen">
      <h1 className="text-xl my-5">Full Stack To Do App</h1>
      <div className="w-80 ">
        <div className="flex justify-between">
          <Input
            type="text"
            placeholder="buy grocies.."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Button onClick={handleAdd} variant="outline" className="ml-3 ">
            Add
          </Button>
        </div>
        <ul className="mt-3">
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mt-3"
            >
              <div> {item.text}</div>
              <div>
                <Button
                  onClick={() => handleEdit(item.id)}
                  variant="outline"
                  className="ml-3"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(item.id)}
                  variant="outline"
                  className="ml-3"
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
