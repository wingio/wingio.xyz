import { FunctionComponent } from "react"
import styles from "../styles/BioCard.module.scss"
import { Activity, Spotify } from "react-use-lanyard/dist"

type ActivityProps = {
    largeImage?: string, 
    smallImage?: string,
    title: string,
    details?: string,
    state: string,
    music: boolean
}

const Activity: FunctionComponent<ActivityProps> = ({largeImage, smallImage, title, details, state, music}) => {
    return (
        <div className={styles.activity}>
            <img className={`${styles.largeImage} ${music ? styles.spin : ''}`} src={largeImage} />
            {smallImage && !music ? <img src={smallImage} className={styles.smallImage}/> : <></>}
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.details}>{details}</p>
                <p className={styles.state}>{state}</p>
            </div>
        </div>
    );
}

const CurrentActivity: FunctionComponent<{activity: Activity, spotify?: Spotify}> = ({activity, spotify}) => {
    return spotify ? Activity({
        largeImage: spotify.album_art_url,
        title: spotify.song,
        details: `by ${spotify.artist}`,
        state: `on ${spotify.album}`,
        music: true
    }) : Activity({
        largeImage: activity.assets?.large_image ? `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png` : undefined,
        smallImage: activity.assets?.small_image ? `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png` : undefined,
        title: activity.name,
        details: activity.details,
        state: activity.state,
        music: activity.type == 2
    })
}

export default CurrentActivity