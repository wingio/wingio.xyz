import Link from "next/link"
import { type } from "os"
import { FunctionComponent } from "react"
import styles from "../styles/ProjectCard.module.scss"
import Card from "./Card"
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
        <Card>
            <img src={props.imageUrl || `/images/${props.name.toLowerCase()}.png`}  className={styles.logo} alt={props.name}/>
            <h2 className={styles.title}>{props.name}</h2>
            <p className={styles.body}>
                {props.description}
            </p>
            <div className={styles.links}>
                {props.url ? <a href={props.url} target="_blank" rel="noreferrer">
                    <LinkIcon style={{padding: "5px"}} color="black"/>
                </a> : <></>}
                <a href={`https://github.com/${props.github}`} target="_blank" rel="noreferrer">
                    <Github color="black"/>
                </a>
            </div>
        </Card>
    )
}

export default ProjectCard