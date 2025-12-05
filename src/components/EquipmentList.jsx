import { useState } from "react";
import ToolItem from "./ToolItem";

const initialTools = [
  { id: 1, name: "Hydraulic Crane", status: "Active" },
  { id: 2, name: "Cement Mixer", status: "Inactive" },
  { id: 3, name: "Excavator", status: "Active" },
];

export default function EquipmentList() {
  const [tools, setTools] = useState(initialTools);
  const [message, setMessage] = useState("");

  const handleToggle = (id) => {
    setMessage("");

    const previousState = [...tools];

    const updatedState = tools.map((tool) => {
      if (tool.id === id) {
        return {
          ...tool,
          status: tool.status === "Active" ? "Inactive" : "Active",
        };
      }
      return tool;
    });

    setTools(updatedState);

    setTimeout(() => {
      const fail = Math.random() < 0.5;
      if (fail) {
        setTools(previousState);
        setMessage("Update failed — reverting...");
      }
    }, 2000);
  };

  return (
    <div>
      {tools.map((tool) => (
        <ToolItem key={tool.id} data={tool} onToggle={handleToggle} />
      ))}

      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}
