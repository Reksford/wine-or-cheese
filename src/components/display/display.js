import styles from './display.module.css';

const Display = (props) => {
  return(
    <div className={styles.container}>
      <h1  className={styles.fade}>{props.children}</h1>
    </div>
  )
}

export default Display;
