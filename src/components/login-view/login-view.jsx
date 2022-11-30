import React, { useState } from 'react'; //useState hook
import PropTypes from 'prop-types';

//function component
export function LoginView(props) {
  //useState hook
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    props.onLoggedIn(username);
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <button type="button">Register</button>
    </form>
  );
}

LoginView.PropTypes = {
    onLoggedIn: PropTypes.func.isRequired
};