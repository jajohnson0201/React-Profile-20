import React from "react";
import ProjectCard from "./Project";

const projects = [
    {
        name: "React-Profile-20",
        description: "",
        url: "https://jajohnson0201.github.io/React-Profile-20/"
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
            <ProjectCard projects={projects} />
        </div>
    )
};