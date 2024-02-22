import React from "react";

export const links=[
    {
        name: "Home",
        hash: "#home"
        
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name:"Projects", 
        hash: "#projects"
    },
    {
        name: "Skills",
        hash:"#skills"
    },
    {
        name:"Experience",
        hash: "#experience"
    },
    {
        name:"Contact",
        hash:"#contact"
    }
] as const;

export const experiencesData=[
    {
        title: "Fullstack developer, Henry Bootcamp",
        location: "Argentina- Remote",
        description: "Graduated with 800 hours of theoretical-practical study",
        date: "2023-2024"
    },
    {
        title: "Python3 Diploma- Universidad Tecnologica Nacional",
        location: "Argentina-Remote",
        description: "Learnt python from scratch",
        date: "2022-2023"
    },
    {
        title: "UX design course- Universidad Tecnologica Nacional",
        location: "Argentina- Remote",
        description: "small course on UX design and investigation",
        date: "2022"
    },
] as const

export const projectsData=[
    {
        title: "Trip In Sight",
        description: "I worked as a Front-End Engineer, developing the web app using React.js for the user interface, Integrated Paypal api to the App",
        tags:["React", "JavaScript", "Redux-Toolkit", "Tailwind", "PayPal Api"]

    },
    {
        title: "K9's",
        description: "Designed and developed the app, both server side and client side, a simple SPA that gives the user information about different dog breeds",
        tags:["React", "JavaScript", "Redux", "CSS", "Express", "Sequelize"]

    },
    {
        title: "KTR dealer App",
        description: "simple database management app, created with Python, Tkinter and SQLite",
        tags: ["Python", "Tkinter", "SQLite"]
    }
] as const;
export const skillsData =[
    "HTML", "CSS", "JaVaScript", "React", "Node.JS", "Git", "Redux", "Express", "Python", "PostgreSQL"]



