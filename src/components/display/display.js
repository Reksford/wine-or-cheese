import styles from './display.module.css';

const Display = (props) => {
  if (!props.children) {
    return <h1 style={styles} className="fade">Wine or Cheese</h1>
  } else {
  return <h3 style={styles} className="fade">{props.children}</h3>
  }
}

export default Display;
