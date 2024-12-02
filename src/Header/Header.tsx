import { FC } from "react"
import styles from "./Header.module.css"

export interface HeaderProps {
  text?: string
}

export const Header: FC<HeaderProps> = ({ text = "React" }) => (
  <header>
    <div className={styles.wrapper}>
      <div>
        <img
          className={styles.logo}
          src="https://www.bitovi.com/hubfs/limbo-generated/imgs/logos/bitovi-logo-red-1.svg"
        />
      </div>
      <h1 className={styles.logo}>{text}</h1>
    </div>
  </header>
)
