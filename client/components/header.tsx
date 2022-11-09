import React from 'react'
import Logo from '../components/logo'
import Link from 'next/link'
import styles from '../styles/header.module.css'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <ul className={styles.headerMenu}>
        <li>
          <Link className={styles.headerMenuLink} href="/">Cá nhân</Link>
        </li>
        <li>
          <Link className={styles.headerMenuLink} href="/doanhnghiep">Doanh nghiệp</Link>
        </li>
        <li>
          <Link className={styles.headerMenuLink} href="/">Ngân hàng ưu tiên</Link>
        </li>
        <li>
          <Link className={styles.headerMenuLink} href="/">Nhà đầu tư</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header 
