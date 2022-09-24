export const Todo = ({ text, completed, onToggleCompleted, onDeleteToDo }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        onChange={onToggleCompleted}
        checked={completed}
      />
      <p className="TodoList__text">{text}</p>
      <button className="TodoList__btn" onClick={onDeleteToDo}>
        Delete
      </button>
    </>
  );
};
