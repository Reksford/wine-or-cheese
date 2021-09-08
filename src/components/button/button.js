import styles from './button.module.css';

const Button = (props) => {
  return (
    <button onClick={() => {props.clicked(props.option)}}>
      {props.children}
    </button>
  )
}

export default Button;
//
