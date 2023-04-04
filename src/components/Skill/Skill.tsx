
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiJest, SiMui, SiNextdotjs } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import styles from "./Skill.module.scss"
import { Skills } from "../../types";

export type SkillProps = {
    skill: string
    id: string;
    index: number;
}

export const Skill = ({skill, id, index}: SkillProps) => {
   return ( 
    <p className={styles.card__skill} key={id + skill + index}>
        {determineIcon(skill)}
    </p>
   )
}

function determineIcon(icon: string): JSX.Element {
    switch (icon) {
        case Skills.HTML:
            return <FaHtml5 />
        case Skills.TYPESCRIPT:
            return <SiTypescript />
        case Skills.GO:
            return <TbBrandGolang />
        case Skills.EXPRESS:
            return <SiExpress />
        case Skills.REACT:
            return <FaReact />
        case Skills.PSQL:
            return <SiPostgresql />
        case Skills.NEXTJS:
            return <SiNextdotjs />
        case Skills.SASS:
            return <FaSass />
        case Skills.FIGMA:
            return <FiFigma />
        case Skills.MUI:
            return <SiMui />
        case Skills.FIREBASE:
            return <IoLogoFirebase />
        case Skills.JEST:
            return <SiJest />
        case Skills.CYPRESS:
            return <SiCypress />
        case Skills.JAVASCRIPT:
            return <FaJsSquare />
        default: 
            return <></>    
    }
}