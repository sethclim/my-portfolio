
import { HStack, VStack, Grid, GridItem } from "../../LayoutComponents";
import Text from "../../../styles/text.module.scss"

import styles from "./skills.module.scss"

export const Skills = () => {
    return (
        <div className={styles.skills}>
            <p className={Text.Title}>Skills</p>
            <div className={styles.grid}>
                <div className={styles.GridItem}>
                    <p className={Text.med}>Languages</p>
                </div>
                <div className={styles.GridItem}>
                    <p className={Text.small}>Python, Typescript, C++, C#, Kotlin, Swift</p>
                </div>
                <div className={styles.GridItem}>
                    <p  className={Text.med}>Databases</p>
                </div>
                <div className={styles.GridItem}>
                    <p className={Text.small}>SQL, MongoDB, Room, CoreData</p>
                </div>
                <div className={styles.GridItem}>
                    <p className={Text.med}>Technology</p>
                </div>
                <div className={styles.GridItem}>
                    <p className={Text.small}>React, AWS, Kafka, Node, Unity, PyTorch, TensorFlow, Apache Airflow</p>
                </div>
                <div className={styles.GridItem}>
                    <p className={Text.med}>Tools</p>
                </div>
                <div className={styles.GridItem}>
                    <p className={Text.small}>Git, Jira, Docker, VSCode, IntelliJ IDEA, Sagemaker</p>
                </div>
            </div>
        </div>
    )
}