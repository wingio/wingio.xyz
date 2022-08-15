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
        <Link href="https://aperii.com/@wing" target="_blank">
            <Aperii />
        </Link>
        <Link href="https://github.com/wingio" target="_blank">
            <Github />
        </Link>
        <Link href="https://discord.gg/c3dJ2t7KRW" target="_blank">
            <Discord />
        </Link>
        <Link href="https://twitter.com/WingCanTalk" target="_blank">
            <Twitter />
        </Link>
    </div>)
}

export default SocialLinks