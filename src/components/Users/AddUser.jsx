import React from 'react'
import styles from './AddUser.module.css'
import logo from './logo.png'

import Card from '../UI/Card'
import Button from '../UI/Button'

const AddUser = props => {

    const addUserHandler = event => {
        event.preventDefault();
    }

  return (
    <Card className={styles.input}>
        <img src={logo} alt="" />
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Name</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age (in years)</label>
            <input type="number" id="age" />
            <Button type="submit">Calculate</Button>
        </form>
    </Card>
  )
}

export default AddUser;