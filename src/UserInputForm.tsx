import React from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  margin: auto;
`;

const Button = styled.button`
  border: none;
  background: darkblue;
  color: white;
  padding: 5px;
  &:hover {
    background: blue;
    cursor: pointer;
  }
`;

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
    <Form onSubmit={handleSubmit}>
      <label htmlFor='userName'>Please type a user name</label>
      <input
        type='text'
        name='userName'
        id='userName'
        placeholder='user name'
        value={user}
        onChange={handleChange}
      />
      <label htmlFor='repoe'>Please type a repo title</label>
      <input
        type='text'
        name='repo'
        id='repo'
        placeholder='repo title'
        value={repo}
        onChange={handleChange}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default UserInputForm;
