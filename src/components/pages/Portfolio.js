import React from "react";
import ProjectCard from "./Project";

const projects = [
    {
        name: "React-Profile-20",
        description: "",
        url: ""
    },
    {
        name: "React-Profile-20",
        description: "",
        url: ""
    },
    {
        name: "React-Profile-20",
        description: "",
        url: ""
    },
    {
        name: "React-Profile-20",
        description: "",
        url: ""
    }   
];

export default function Portfolio() {
    return (
        <div>
            <ProjectCard Projects={projects} />
        </div>
    )
};