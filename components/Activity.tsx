import { FunctionComponent } from "react"
import styles from "../styles/BioCard.module.scss"
import { Activity, Spotify } from "react-use-lanyard/dist"

type ActivityProps = {
    largeImage?: string,
    largeImageText?: string,
    smallImage?: string,
    smallImageText?: string,
    title: string,
    details?: string,
    state: string,
    music: boolean
}

const Activity: FunctionComponent<ActivityProps> = ({largeImage, largeImageText, smallImage, smallImageText, title, details, state, music}) => {
    return (
        <div className={styles.activity}>
            <img className={`${styles.largeImage} ${music ? styles.spin : ''}`} src={largeImage} alt={largeImageText || ""}/>
            {smallImage && !music ? <img src={smallImage} className={styles.smallImage} alt={smallImageText || ""}/> : <></>}
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
        largeImageText: spotify.album,
        title: spotify.song,
        details: `by ${spotify.artist}`,
        state: `on ${spotify.album}`,
        music: true
    }) : Activity({
        largeImage: activity.assets?.large_image ? `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png` : undefined,
        largeImageText: activity.assets?.large_text,
        smallImage: activity.assets?.small_image ? `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png` : undefined,
        smallImageText: activity.assets?.small_text,
        title: activity.name,
        details: activity.details,
        state: activity.state,
        music: activity.type == 2
    })
}

export default CurrentActivity