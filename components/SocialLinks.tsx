import Link from "next/link"
import { useRouter } from "next/router"
import { FunctionComponent } from "react"
import styles from "../styles/SocialLinks.module.scss"
import Aperii from "./icons/Aperii"
import Discord from "./icons/Discord"
import Github from "./icons/Github"
import Twitter from "./icons/Twitter"

const SocialLinks: FunctionComponent = () => {
    const router = useRouter()

    return (<div className={styles.socials}>
        <a href="https://aperii.com/@wing" target="_blank">
            <Aperii />
        </a>
        <a href="https://github.com/wingio" target="_blank">
            <Github />
        </a>
        <a href="https://discord.gg/c3dJ2t7KRW" target="_blank">
            <Discord />
        </a>
        <a href="https://twitter.com/WingCanTalk" target="_blank">
            <Twitter />
        </a>
    </div>)
}

export default SocialLinks