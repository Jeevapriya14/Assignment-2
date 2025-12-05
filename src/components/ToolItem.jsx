export default function ToolItem({ data, onToggle }) {
  const { id, name, status } = data;

  const statusStyle = {
    color: status === "Active" ? "green" : "red",
    fontWeight: "bold",
    marginLeft: "8px"
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <span>{name}</span>
      <span style={statusStyle}> — {status}</span>

      <button style={{ marginLeft: 10 }} onClick={() => onToggle(id)}>
        Toggle Status
      </button>
    </div>
  );
}
