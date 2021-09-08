import styles from './button.module.css';

const Button = (props) => {
  return (
    <button onClick={() => {props.clicked(props.option)}}
            className={styles.botan} >
      {props.children}
    </button>
  )
}

export default Button;
//
