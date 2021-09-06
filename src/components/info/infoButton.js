import styles from "./info.module.css";

const InfoButton = (props) => {
  return (
    <button className={styles.graphic} onClick={props.clicked}>
      <span>i</span>
    </button>
  )
}

export default InfoButton;
