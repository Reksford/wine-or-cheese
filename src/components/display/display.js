import styles from './display.module.css';

const Display = (props) => {
  let titleStyle = props.type === 'title' ? styles.title : null;
  return(
    <div className={styles.container}>
      <h1  className={[styles.fade, titleStyle].join(' ')}>{props.children}</h1>
    </div>
  )
}

export default Display;
