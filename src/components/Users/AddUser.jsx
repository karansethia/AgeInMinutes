import React from 'react'

const AddUser = props => {

    const addUserHandler = event => {
        event.preventDefault();
    }

  return (
    <div>
        <h2>Age In Minutes Calculator</h2>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age (in years)</label>
            <input type="number" id="age" />
            <button type="submit">Calculate</button>
        </form>
    </div>
  )
}

export default AddUser;