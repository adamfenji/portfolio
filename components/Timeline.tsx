import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaCode } from "react-icons/fa";
import "../styles/timeline.css";
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
        <div id='careerSection' className="timelineContainer">

            <div className="timelineDescription">
                <h3>Career</h3>
                <p>Embark on an exciting journey through my career as a computer science student, while refining my expertise through immersive work encounters, shaping me into the developer I am today.</p>
            </div>

            <br />

            <VerticalTimeline layout='1-column-left' lineColor='white' className='line'>

                <VerticalTimelineElement
                    className="verticalElement"
                    contentStyle={{ color: 'black', textAlign: 'left' }} //Style the inside
                    contentArrowStyle={{ borderRight: '5px solid  white' }} //Style the arrow 
                    date=" Expected Graduation: May 2025"
                    iconStyle={{ background: '#333d29', color: '#eff1ed', height: '40px', width: '40px' }}
                    icon={<FaCode />}
                >

                    <div className="workStack">
                        <img className='stackImg' src='https://www.mtu.edu/mtu_resources/images/download-central/logos/husky-icon/full-color.png' />
                    </div>

                    <h3 className="workTitle">Bachelor of Science: Computer Science and Management Information Systems, Minor in Mathematical Science</h3>
                    <h4 className="workLocation">Michigan Technological University — Houghton, MI</h4>

                    <ul className='workDescription'>
                        <li><b>Relevant Coursework</b>: Intro to Programming 1 and 2, Data Structure, Discrete Structures, Formal Models of Computation, Calculus 1 and 2 with Technology, Linear Algebra.</li>
                        <li><b>Honors & Awards:</b> ITA All-Academic Team, ITA Scholar-Athlete honors, MIS Alumni award, Dean's List.</li>
                        <li><b>Athletics:</b> Men's Varsity Tennis Team</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="verticalElement"
                    contentStyle={{ color: 'black', textAlign: 'left' }} //Style the inside
                    contentArrowStyle={{ borderRight: '5px solid  white' }} //Style the arrow 
                    date=" May 2022 - June 2022"
                    iconStyle={{ background: '#333d29', color: '#eff1ed', height: '40px', width: '40px' }}
                    icon={<FaCode />}
                >

                    <div className="workStack">
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/java-icon.png?raw=true' />
                    </div>

                    <h3 className="workTitle">Software Developer & WTA Official, WTA</h3>
                    <h4 className="workLocation">Rabat, Morocco</h4>

                    <ul className='workDescription'>
                        <li>Designed and developed a Java-based application to efficiently process files received from the tournament's photography team, saving hours of manual labor.</li>
                        <li>Managed the official WTA Instagram account for the tournament, increasing follower count by 90% through the creation and execution of engaging social media campaigns.</li>
                        <li>Provided exceptional customer service to WTA players, addressing inquiries, requests, court bookings, and issues in a timely, personalized, and professional manner, contributing to the smooth operation and success of the tournament.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="verticalElement"
                    contentStyle={{ color: 'black', textAlign: 'left' }} //Style the inside
                    contentArrowStyle={{ borderRight: '5px solid  white' }} //Style the arrow 
                    date=" Jul 2022 - Aug 2022"
                    dateClassName={"workDate"}
                    iconStyle={{ background: '#333d29', color: '#eff1ed', height: '40px', width: '40px' }}
                    icon={<FaCode />}
                >

                    <div className="workStack">
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/csharp-icon.png?raw=true' />
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/mysql-icon.png?raw=true' />
                    </div>

                    <h3 className="workTitle">Software Engineer Intern, ONCF</h3>
                    <h4 className="workLocation">Rabat, Morocco</h4>

                    <ul className='workDescription'>
                        <li>Designed and implemented a SQL database using SQL Server Management Studio to efficiently manage traveler's data.</li>
                        <li>Developed a C# application to edit traveler's data and successfully linked the database to the application.</li>
                        <li>Conducted unit testing of methods and confirmed the SQL database accessibility to ensure flawless functionality of the code.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="verticalElement"
                    contentStyle={{ color: 'black', textAlign: 'left' }} //Style the inside
                    contentArrowStyle={{ borderRight: '5px solid  white' }} //Style the arrow 
                    date=" May 2023 - Aug 2023"
                    iconStyle={{ background: '#333d29', color: '#eff1ed', height: '40px', width: '40px' }}
                    icon={<FaCode />}
                >

                    <div className="workStack">
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/html-icon.png?raw=true' />
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/css-icon.png?raw=true' />
                        <img className='stackImg' id='tsImg' src='https://github.com/adamfenji/portfolio/blob/main/img/ts-icon.png?raw=true' />
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/react-icon.png?raw=true' />
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/git-icon.png?raw=true' />
                    </div>

                    <h3 className="workTitle">Front-End Research Inten, MTU</h3>
                    <h4 className="workLocation">Houghton, MI, USA</h4>

                    <ul className='workDescription'>
                        <li>Designed and built a large-scale, dynamic, and interactive online book from scratch using ReactJS and TypeScript. </li>
                        <li>Implemented user-centric features that significantly improved the learning experience and reduced the learning curve for complex concepts, ensuring a more accessible and user-friendly educational platform.</li>
                    </ul>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default Timeline;