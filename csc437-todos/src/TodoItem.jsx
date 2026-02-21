import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ id, name, isComplete, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={() => onToggle(id)}
        />{" "}
        {name}
      </label>
      <button className="text-gray-600" onClick={() => onDelete(id)}>
        <FontAwesomeIcon icon={faTrashCan} title="Delete task" />
      </button>
    </li>
  );
}

export default TodoItem;
