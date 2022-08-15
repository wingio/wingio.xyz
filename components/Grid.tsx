import { FunctionComponent, PropsWithChildren } from "react";
import styles from "../styles/Grid.module.scss"

const Grid: FunctionComponent<PropsWithChildren> = (props) => {
    return (<div className={styles.grid}>{props.children}</div>)
}

export default Grid