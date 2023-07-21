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
        <div className="skillsContainer">
            <div className="skillsDescription">
                <h3>Skills</h3>
                <p>Welcome to my skills arsenal, where my greatest asset lies in the ability to swiftly pick up new technologies and concepts.</p>
            </div>

            <div className="skillsCardContainer">

                <div className="skillCard">
                    <img className="skillIcon" src="https://adamfenji.github.io/portfolio/img/html-icon.png" />
                    <p>HTML</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/css-icon.png" />
                    <p>CSS</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/js-icon.png" />
                    <p>JavaScript</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" id="ts-icon" src="../img/ts-icon.png" />
                    <p>TypeScript</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/react-icon.png" />
                    <p>ReactJS</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/java-icon.png" />
                    <p>Java</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/python-icon.png" />
                    <p>Python</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/csharp-icon.png" />
                    <p>C #</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/mysql-icon.png" />
                    <p>SQL</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/git-icon.png" />
                    <p>Git</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/github-icon.png" />
                    <p>GitHub</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/chatgpt-icon.png" />
                    <p>ChatGPT</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/intellij-icon.png" />
                    <p>IntelliJ</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/pycharm-icon.png" />
                    <p>PyCharm</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/vscode-icon.png" />
                    <p>VS Code</p>
                </div>

                <div className="skillCard">
                    <img className="skillIcon" src="../img/visualstudio-icon.png" />
                    <p>Visual Studio</p>
                </div>

            </div>
        </div>
    );
}

export default Skills;