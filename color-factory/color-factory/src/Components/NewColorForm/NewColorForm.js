import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const [form, setForm] = useState({ name: '', hex: '#000000' });

  function handleChange(e) {
    setForm((formData) => ({ ...formData, [e.target.name]: e.target.value }));
  }

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (form.name && form.hex) {
      addColor({ [form.name]: form.hex });

      history.push('/colors');

      //   return <Redirect to="/colors" />;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={form.hex}
          />
        </div>
        <input type="submit" value="Add A Color" />
      </form>
    </div>
  );
};

export default NewColorForm;
