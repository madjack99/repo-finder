import React from 'react';

const UserInputForm = () => {
  let [user, setUser] = React.useState('');
  let [repo, setRepo] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const { value } = e.target;

    if (name === 'userName') {
      setUser(value);
    } else {
      setRepo(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`https://api.github.com/repos/${user}/${repo}/pulls?state=all`)
      .then((res) => res.json())
      .then((data) => console.log(data));
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
      <label htmlFor='repoe'>Please type a repo title</label>
      <input
        type='text'
        name='repo'
        id='repo'
        value={repo}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserInputForm;
