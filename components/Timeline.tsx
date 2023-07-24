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

            <br/>

            <VerticalTimeline layout='1-column-left' lineColor='white' className='line'>

                <VerticalTimelineElement
                    className="verticalElement"
                    contentStyle={{ color: 'black', textAlign: 'left' }} //Style the inside
                    contentArrowStyle={{ borderRight: '5px solid  white' }} //Style the arrow 
                    date=" May 2022 - June 2022"
                    iconStyle={{ background: 'white', color: 'black', height: '40px', width: '40px' }}
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
                    iconStyle={{ background: 'white', color: 'black', height: '40px', width: '40px' }}
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
                    iconStyle={{ background: 'white', color: 'black', height: '40px', width: '40px' }}
                    icon={<FaCode />}
                >

                    <div className="workStack">
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/html-icon.png?raw=true' />
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/css-icon.png?raw=true' />
                        <img className='stackImg' id='tsImg' src='https://github.com/adamfenji/portfolio/blob/main/img/ts-icon.png?raw=true' />
                        <img className='stackImg' src='https://github.com/adamfenji/portfolio/blob/main/img/react-icon.png?raw=true' />
                    </div>

                    <h3 className="workTitle">Front-End Research Inten, MTU</h3>
                    <h4 className="workLocation">Houghton, MI, USA</h4>

                    <ul className='workDescription'>
                        <li>Created a database that contains traveler's data using SQL Server Management Studio and linked the database to a C# application that I developed to edit traveler's data. </li>
                        <li>Unit tested the methods as well as the accessibility to the SQL database to ensure that all my code was working.</li>
                    </ul>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default Timeline;