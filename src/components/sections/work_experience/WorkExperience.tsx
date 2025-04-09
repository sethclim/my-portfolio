import { HStack, VStack, Grid, GridItem } from "../../LayoutComponents";
import Copy from "../../Copy";
import Text from "../../../styles/text.module.scss"
import Styles from "./About.module.scss"
import { useEffect } from "react";

export type WorkExperienceProps ={
  bio : any
}

const WorkExperience = (props : WorkExperienceProps) =>  {

  return(
      <VStack id="about">

        <VStack p="1em 0">
          <p className={Text.Title}>Work Experience</p>
          <Work
           company="SpeakSynk Technology" 
           role="Algorithm Developer" 
           date="05/2023 – Present" 
           points={[
            "Designed and deployed an AI-powered distributed video translation and dubbing pipeline",
            "Built scalable AWS backend supporting concurrent users with Kafka, Step Functions, SageMaker, and Docker",
            "Developed new algorithms in python leveraging AI (Wav2Lip, Tencent GFPGAN, Meta Segment Anything), computer vision (OpenCV, Adrian Bulat’s FaceAlignment, Google MediaPipe), and audio libraries (Pydub, Rubberband) to enhance the realism and accuracy of the generation pipeline ",
            "Wrote Node endpoints with Jest tests to ensure robustness and built kafka consumers in Nest with Typescript"
           ]}
           />
          <Work
           company="Arbelos Interactive" 
           role="Unity Developer" 
           date="04/2024 – Present" 
           points={[
            "Implemented server-authoritative networking using Unity Netcode, enhancing game sync and stability",
            "Refactored game architecture for better separation of concerns (SoC), reducing bugs and improving maintainability through state machines",
            "Led migration of a web game from Photon/PlayFab/Fusion to Hathora with FishNet, cutting operational costs",
            "Developing a TypeScript SDK with PuerTS for dynamic runtime game scripting and content loading"
           ]}
           />
          <Work
           company="Sheridan Center For Mobile Innovation" 
           role="VR Developer" 
           date="05/2022 – 04/2023" 
           points={[
            "Conducted research and consulted with a domain expert to create an accurate and realistic simulator",
            "Developed a VR factory in Unity using XR Interaction Toolkit/OpenXR for system and machinery interaction",
            "Built reusable systems for gameplay, interaction mechanics, audio/haptics, and tutorials, enhancing scalability",
            "Engaged stakeholders through presentations, ensuring project alignment with advisory board goals"
           ]}
           />
          <Work
           company="The Commons XR" 
           role="Unity Developer" 
           date="04/2022 – 11/2022" 
           points={[
            "Developed a unified data capture system in Unity, improving efficiency, reliability, and external integrations",
            "Integrated a NoSQL Azure database alongside SQL infrastructure, enabling scalable blob data storage",
            "Enhanced system stability by resolving critical bugs and replacing legacy code with maintainable solutions",
            "Bridged Unity and data teams by attending cross-team meetings, ensuring collaboration and project alignment"
           ]}
           />
          <Work
           company="SampleHouse & Playerverse" 
           role="Full Stack Developer" 
           date="06/2021 – 01/2022" 
           points={[
            "Redesigned and updated a React-based e-commerce frontend, modernizing the UI/UX, including implementing new features to improve customer engagement and usability",
            "Developed a custom waveform playback component with audio streamed from server",
            "Extended the capabilities of a boilerplate React PWA e-commerce platform",
            "Integrated a payment system on both the front and back end with a payment processor (checkout page, payment endpoint, webhooks, etc."
           ]}
           />
        </VStack>

{/* 
        <HStack align="top" p="1em 0" alignItems="center">
          <p className={Text.Title}>Connect:</p>
          <Copy />     
        </HStack> */}
      
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
            <p className={Styles.bar}>|</p>
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
              <li className="pt-0.5" key={index}>{point}</li>
            )
          })
        }
      </ul>
    </VStack>
  )
}

export default WorkExperience;