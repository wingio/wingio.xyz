import { FunctionComponent } from "react"
import styles from "../styles/BioCard.module.scss"
import { useLanyard } from "react-use-lanyard/dist"
import Card from "./Card"
import Activity from "./Activity"
import About from "./icons/About"

const BioCard: FunctionComponent = () => {
    const lanyard = useLanyard({
        userId: "298295889720770563",
        socket: true
    })

    return (
        <Card>
            <About className={styles.icon} color="black"/>
            <p className={styles.bio}>
                I'm a 19 year old developer that specializes in TS/JS, Java, and Kotlin.
            </p>
            {lanyard.status && lanyard.status.activities.filter(a => a.type != 4).length > 0 ? <>
                <Activity activity={lanyard.status.activities.filter(a => a.type != 4)[0]} spotify={lanyard.status?.spotify}/>
            </> : <></>}
            
        </Card>
    )
}

export default BioCard

