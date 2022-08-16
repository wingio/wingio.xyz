import { FunctionComponent, PropsWithChildren } from "react"
import styles from "../styles/Card.module.scss"

const Card: FunctionComponent<PropsWithChildren> = (props) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export default Card