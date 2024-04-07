import { useRef, useEffect } from 'react';
import './Card.css';

export const Card = ({
  id,
  title,
  onTitleChange,
  done,
  onToggle,
  onDelete,
}) => {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleTitleChange = (event) => {
    onTitleChange(id, event.target.value);
  };

  const handleCheckboxChange = () => {
    onToggle(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onToggle(id);
  };

  const handleTitleBlur = () => {
    if (title === '') {
      onDelete(id);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        className="card__done"
        type="checkbox"
        checked={done}
        onChange={handleCheckboxChange}
        tabIndex={-1}
      />

      <input
        className="card__title"
        type="text"
        ref={inputRef}
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
      />
    </form>
  );
};
