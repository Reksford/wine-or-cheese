import styles from "./info.module.css";

const InfoBox = () => {
  const hatFilms = <a href="https://www.youtube.com/hatfilms" target="_blank">Hat Films</a>;
  const wineOrCheese = <a href="https://youtu.be/DlrPdfHuhsw" target="_blank">video</a>;

  return (
  <div className={styles.box}>
    <span>X</span>
    <p>This is a meme site dedicated to an old {hatFilms} joke. <br/>
    For more context watch this {wineOrCheese}. <br/> <br/>
    I know it's an old meme but it sticks with me through the years and I hope you get a quick laugh from it.
    </p>
  </div>
  )
}

export default InfoBox;
