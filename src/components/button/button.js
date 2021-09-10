import styles from './button.module.css';

const Button = (props) => {
  return (
    <button onClick={() => {props.clicked(props.option)}}
            className={styles.button} >
      {props.children}
    </button>
  )
}

export default Button;
//
