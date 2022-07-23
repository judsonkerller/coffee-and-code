import Image from 'next/image'
import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

const Navbar = ({username = null, cart}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image 
          src="/assets/logo.png"
          width="110"
          height="70"
          alt="Coffee and Code - Logo"
        />
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;