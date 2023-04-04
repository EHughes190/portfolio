export enum Skills  {
    HTML = "html",
    TYPESCRIPT = "typescript",
    GO = "go",
    EXPRESS = "express",
    REACT = "react",
    PSQL = "postgres",
    NEXTJS = "nextjs",
    SASS = "sass",
    FIGMA = "figma",
    MUI = "mui",
    FIREBASE = "firebase",
    JEST = "jest",
    CYPRESS = "cypress",
    JAVASCRIPT = "javascript"

}

export type Project = {
    title: string;
    img: string;
    description: string;
    skills: string[]
    githubUrl: string;
    hostedUrl?: string;
    id: string;
}