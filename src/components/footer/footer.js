import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Some text for footer {"\u{A9}"}</p>
    </footer>
  )
}

export default Footer;
