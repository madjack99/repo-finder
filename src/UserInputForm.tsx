import React from 'react';

const UserInputForm = () => {
  return (
    <form>
      <label htmlFor='userName'>Please type a user name</label>
      <input type='text' name='userName' id='userName' />
    </form>
  );
};

export default UserInputForm;
