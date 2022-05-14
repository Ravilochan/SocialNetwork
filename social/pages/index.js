import styles from "../styles/footer.module.css";

export default function Home() {
  return (
    <footer className={styles.footer}>
      <a
        href='https://www.linkedin.com/in/ravilochan-balla/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Made with ❤️
        <span style={{ fontWeight: "bold" }}>&nbsp;Ravilochan</span>
      </a>
    </footer>
  );
}
