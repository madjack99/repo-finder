import React from 'react';

const UserInputForm = () => {
  let [user, setUser] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setUser(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='userName'>Please type a user name</label>
      <input
        type='text'
        name='userName'
        id='userName'
        value={user}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserInputForm;
