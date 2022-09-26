import styles from '#/styles/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <div className="left"></div>
        <div className="right">
          <a href="#" className={styles.button}>
            Login
          </a>
        </div>
      </div>
    </header>
  )
}