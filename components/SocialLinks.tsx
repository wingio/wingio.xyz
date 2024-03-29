import Link from "next/link"
import { useRouter } from "next/router"
import { FunctionComponent } from "react"
import styles from "../styles/SocialLinks.module.scss"
import Aperii from "./icons/Aperii"
import Discord from "./icons/Discord"
import Github from "./icons/Github"
import Twitter from "./icons/Twitter"
import Mastodon from "./icons/Mastodon"

const SocialLinks: FunctionComponent = () => {
    const router = useRouter()

    return (<div className={styles.socials}>
        <a href="https://aperii.com/@wing" target="_blank" rel="me noreferrer">
            <Aperii />
        </a>
        <a href="https://github.com/wingio" target="_blank" rel="me noreferrer">
            <Github />
        </a>
        <a href="https://discord.gg/c3dJ2t7KRW" target="_blank" rel="me noreferrer">
            <Discord />
        </a>
        <a href="https://twitter.com/WingCanTalk" target="_blank" rel="me noreferrer">
            <Twitter />
        </a>
        <a href="https://androiddev.social/@wing" target="_blank" rel="me noreferrer">
            <Mastodon />
        </a>
    </div>)
}

export default SocialLinks