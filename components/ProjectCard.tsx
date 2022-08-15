import Link from "next/link"
import { type } from "os"
import { FunctionComponent } from "react"
import styles from "../styles/ProjectCard.module.scss"
import Github from "./icons/Github"
import LinkIcon from "./icons/Link"

type ProjectCardProps = {
    name: string,
    description: string,
    github: string,
    url?: string,
    imageUrl?: string
}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.imageUrl || `/images/${props.name.toLowerCase()}.png`}  className={styles.logo}/>
            <h2>{props.name}</h2>
            <p>
                {props.description}
            </p>
            <div className={styles.links}>
                {props.url ? <Link href={props.url}>
                    <LinkIcon style={{padding: "5px"}} />
                </Link> : <></>}
                <Link href={`https://github.com/${props.github}`} target="_blank">
                    <Github />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard

//width="127px" height="127px"