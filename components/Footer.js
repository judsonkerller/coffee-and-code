import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>Coffee and Code</span> &copy; 2022
      </p>
      <a href="https://www.buymeacoffee.com/judin" target="_blank" rel="noopener noreferrer">Contribua</a>
    </footer>
  )
}