
import { HStack, VStack, Grid, GridItem } from "../../LayoutComponents";
import Text from "../../../styles/text.module.scss"

export const Skills = () => {
    return (
        <VStack p="1em 0" className="overflow-hidden">
            <p className={Text.Title}>Skills</p>
            <VStack align="top" pt="5" h={120} justifyContent="flex-bottom" >
                <Grid templateColumns='200px 1fr' gap={10}>
                    <GridItem w='100%' h='100%' justifyContent="center"  >
                        <p className={Text.med}>Languages</p>
                    </GridItem>
                    <GridItem w='100%' h='100%' justifyContent="center"    >
                        <p className={Text.small}>Python, Typescript, C++, C#, Kotlin, Swift</p>
                    </GridItem>
                    <GridItem w='100%' h='100%'  justifyContent="center"  >
                        <p  className={Text.med}>Databases</p>
                    </GridItem>
                    <GridItem w='100%' h='100%'  justifyContent="center"  >
                        <p className={Text.small}>SQL, MongoDB, Room, CoreData</p>
                    </GridItem>
                    <GridItem w='100%' h='100%'  justifyContent="center"   >
                        <p className={Text.med}>Technology</p>
                    </GridItem>
                    <GridItem w='100%' h='100%'  justifyContent="center"  >
                        <p className={Text.small}>React, AWS, Kafka, Node, Unity, PyTorch, TensorFlow, Apache Airflow</p>
                    </GridItem>
                    <GridItem w='100%' h='100%' justifyContent="center"  >
                        <p className={Text.med}>Tools</p>
                    </GridItem>
                    <GridItem w='100%' h='100%'  justifyContent="center"   >
                        <p className={Text.small}>Git, Jira, Docker, VSCode, IntelliJ IDEA, Sagemaker</p>
                    </GridItem>
                </Grid>
            </VStack>
        </VStack>
    )
}