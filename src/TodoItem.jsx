function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={onToggle}>✅</button>
      <button onClick={onDelete}>🗑️</button>
    </li>
  );
}

export default TodoItem;
