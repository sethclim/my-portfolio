import { HStack, VStack, Grid, GridItem } from "../../LayoutComponents";
import Copy from "../../Copy";
import Text from "../../../styles/text.module.scss"
import Styles from "./About.module.scss"
import { useEffect } from "react";

export type AboutProps ={
  bio : any
}

const About = (props : AboutProps) =>  {

  useEffect(()=>{
    console.log("HELLO")
   console.log(JSON.stringify(props.bio))
  },[props])

  return(
      <VStack id="about">
        <VStack p="1em 0">
          <p className={Text.Title}>About</p>
          {/* <hr className="new4"></hr> */}
            <p className={Text.small}>{props.bio[0].frontmatter.bio}</p>
            <br></br>
            <p className={Text.small}>{props.bio[0].frontmatter.point1}</p>
            <p className={Text.small}>{props.bio[0].frontmatter.point2}</p>
            <p className={Text.small}>{props.bio[0].frontmatter.point3}</p>
        </VStack>
        <VStack p="1em 0">
          <p className={Text.Title}>Work Experience</p>
          <Work
           company="SpeakSynk Technology" 
           role="Algorithm Developer" 
           date="May 2023 - Present" 
           points={[
            "Built initial product MVP to demonstrate to investor",
            "Deployed scalable version of product to AWS",
            "Improved ML models, and computer vision algorithms",
            "Developed backend infrastructure components to serve customers"
           ]}
           />
          <Work
           company="Artful Enrichment" 
           role="Mobile Developer" 
           date="Sept. 2023 - Present" 
           points={[
            "Developed mobile app in React Native",
            "Implemented intuitive UI for seniors",
            "Interfaced with backend APIs for business logic"
           ]}
           />
          <Work
           company="Sheridan Center For Mobile Innovation" 
           role="VR Developer" 
           date="May 2022 - May 2023" 
           points={[
            "Developed VR interaction to simulate pharmaceutical factory",
            "3D modeled pharmaceutical factory equipment",
            "Designed simulation software architecture"
           ]}
           />
          <Work
           company="The Commons XR" 
           role="Unity Developer" 
           date="April 2022 - Nov. 2022" 
           points={[
            "Implemented data collection solutions",
            "Interfaced Between Data and Unity Team",
            "Designed custom solutions for data collection from Unity"
           ]}
           />
          <Work
           company="SampleHouse" 
           role="Full Stack Developer" 
           date="Aug 2021 - Dec. 2021" 
           points={[
            "Implemented waveform player to preview audio samples and tooling to generate the waveform data.",
            "Worked on payment system and analytics integrations.",
            "Redesigned frontend written in React to a modern clean design to present to investors."
           ]}
           />
        </VStack>


        <VStack p="1em 0">
          <p className={Text.Title}>Skills</p>
          <VStack align="top" pt="5" justifyContent="flex-bottom" >
            <Grid templateColumns='200px 1fr' gap={10}>
              <GridItem w='100%' h='100%' justifyContent="center" >
                <p className={Text.med}>Languages</p>
              </GridItem>
              <GridItem w='100%' h='100%' justifyContent="center"   >
                <p className={Text.small}>Python, Kotlin, Swift, JavaScript/Typescript, C#, C++</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center" >
                <p  className={Text.med}>Databases</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center"  >
                <p className={Text.small}>SQL, MongoDB, Room, CoreData</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center"  >
                <p className={Text.med}>Technology</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center" >
                <p className={Text.small}>React, AWS, Kafka, Node, Docker, Unity, PyTorch, TensorFlow</p>
              </GridItem>
              <GridItem w='100%' h='100%' justifyContent="center" >
                <p className={Text.med}>Tools</p>
              </GridItem>
              <GridItem w='100%' h='100%'  justifyContent="center"  >
                <p className={Text.small}>Git, Jira, VSCode, IntelliJ IDEA</p>
              </GridItem>
            </Grid>
          </VStack>
        </VStack>

        <HStack align="top" p="1em 0" alignItems="center">
          <p className={Text.Title}>Connect:</p>
          <Copy />     
        </HStack>
      
      </VStack>
    );
}

export type WorkProps =  {
  company : string,
  role : string,
  date : string,
  points: Array<string>
}

const Work = (props : WorkProps) => {
  return(
    <VStack w="100%" p="20px 0 0 0">
      <VStack className={Styles.workTitleWrap} p="0" h="100%">
        <VStack className={Styles.workWrap}  w="100%" p="0" m="0" justifyContent="flex-start">
            <p className={Styles.name}>{props.role}</p>
            <p className={Styles.cn}>{props.company}</p> 
        </VStack>
        <HStack className={Styles.dateWrap} w="100%" justifyContent="flex-start">
          <p className={Styles.cn}>{props.date}</p>
        </HStack>
      </VStack>
      <ul className={Styles.desc}>
        {
          props.points.map((point, index) =>{
            return (
              <li key={index}>{point}</li>
            )
          })
        }
      </ul>
    </VStack>
  )
}

export default About;