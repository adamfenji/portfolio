import "../styles/skills.css"
import 'animate.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Skills() {

    useEffect(() => {
        const skillCards = document.querySelectorAll('.skillCard');
        const duration = 0.7;

        skillCards.forEach((card) => {
            gsap.set(card, { opacity: 0, y: 50 });

            ScrollTrigger.create({
                trigger: card,
                start: 'top 80%',
                onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration }),
                onLeave: () => gsap.to(card, { opacity: 0, y: 50, duration }),
                onEnterBack: () => gsap.to(card, { opacity: 1, y: 0, duration }),
                onLeaveBack: () => gsap.to(card, { opacity: 0, y: 50, duration }),
            });
        });
    }, []);

    return (
        <div id="skillsSection" className="skillsContainer">
            <div className="skillsDescription">
                <h3>Skills</h3>
                <p>Welcome to my skills arsenal, where my greatest asset lies in the ability to swiftly pick up new technologies and concepts.</p>
            </div>

            <div className="skillsCardContainer">

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/html-icon.png?raw=true" />
                    <p>HTML</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/css-icon.png?raw=true" />
                    <p>CSS</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/js-icon.png?raw=true" />
                    <p>JavaScript</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" id="ts-icon" src="https://github.com/adamfenji/portfolio/blob/main/img/ts-icon.png?raw=true" />
                    <p>TypeScript</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/react-icon.png?raw=true" />
                    <p>ReactJS</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/java-icon.png?raw=true" />
                    <p>Java</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/python-icon.png?raw=true" />
                    <p>Python</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/csharp-icon.png?raw=true" />
                    <p>C #</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/mysql-icon.png?raw=true" />
                    <p>SQL</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/git-icon.png?raw=true" />
                    <p>Git</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/github-icon.png?raw=true" />
                    <p>GitHub</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/chatgpt-icon.png?raw=true" />
                    <p>ChatGPT</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/intellij-icon.png?raw=true" />
                    <p>IntelliJ</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/pycharm-icon.png?raw=true" />
                    <p>PyCharm</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/vscode-icon.png?raw=true" />
                    <p>VS Code</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="https://github.com/adamfenji/portfolio/blob/main/img/visualstudio-icon.png?raw=true" />
                    <p>Visual Studio</p>
                </div>

            </div>
        </div>
    );
}

export default Skills;