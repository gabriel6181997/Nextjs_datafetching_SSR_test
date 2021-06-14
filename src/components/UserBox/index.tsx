import { VFC } from "react"
import styles from "src/components/UserBox/index.module.scss"

type Props = {
  name: string
  username: string
  email: string
}

export const UserBox: VFC<Props> = (props) => {
  return(
    <div className={styles.box}>
      <h2>{props.name}</h2>
      <p>{props.username}</p>
      <p>{props.email}</p>
    </div>
  )
}
