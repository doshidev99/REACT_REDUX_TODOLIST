import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useInput } from '../hooks';

const EditTodo = ({ completed, text, onSave }) => {
  const { value, onChange } = useInput(text);
  const [isEdit, setEdit] = useState(false);
  const handleSubmit = e => {
    const newText = e.target.value.trim();
    if (e.which === 13) {
      setEdit(false);
      onSave(newText);
    }
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
          onChange={onChange}
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
