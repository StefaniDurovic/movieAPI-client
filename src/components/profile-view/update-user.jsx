import React from 'react';

export function UpdateUser(setUsername, setPassword, setEmail, setBirthday, editUser) {
    return (
        <form>
            <h4>Want to change some info?</h4>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Birthday:
          <input type="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </label>
        <button variant="success" type="submit" onClick={editUser}>Update</button>
      </form>
    );
  }

    
