import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditTodo = ({ completed, text, onSave }) => {
  const [value, setValue] = useState(text);
  const [isEdit, setEdit] = useState(false);
  const handleSubmit = e => {
    const newText = e.target.value.trim();
    if (e.which === 13) {
      setEdit(false);
      onSave(newText);
    }
  };
  const handleValueChange = e => {
    setValue(e.target.value);
  };
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
          value={value}
          onKeyDown={handleSubmit}
          onBlur={handleSubmitBlur}
          onChange={handleValueChange}
        />
      )}
    </div>
  );
};

EditTodo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
};

export default EditTodo;
