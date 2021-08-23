import react from 'react';
import styles from './button.module.css';

const button = (props) => {
  return (
    <button>{props.children}</button>
  )
}

export default button;
