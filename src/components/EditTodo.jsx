import React, { useState } from 'react';

export default function EditTodo({ completed, text, onSave }) {
  const [value, setValue] = useState(text);
  const [isEdit, setEdit] = useState(false);
  function handleSubmit(e) {
    const newText = e.target.value.trim();
    if (e.which === 13) {
      setEdit(false);
      onSave(newText);
    }
  }
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  const handleSubmitBlur = () => {
    setEdit(false);
    onSave(text);
  };

  return (
    <div>
      {!isEdit ? (
        <p
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
          onDoubleClick={() => setEdit(true)}
        >
          {value}
        </p>
      ) : (
        <input
          type="text"
          autoFocus
          value={value}
          onKeyDown={handleSubmit}
          onBlur={handleSubmitBlur}
          onChange={handleValueChange}
        />
      )}
    </div>
  );
}
