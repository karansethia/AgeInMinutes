import React from 'react';
import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <div>
    <div className={styles.backdrop} onClick={props.onHandleError}/>
    <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.desc}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onHandleError}>Okay</Button>
        </footer>
    </Card>
    </div>
  )
}

export default ErrorModal