import "../styles/navbar.css"

function NavBar(){
    return(
        <div className="navBarContainer">
            <div className="links">
                <ul>
                    <li><a href="#aboutSection">ABOUT</a></li>
                    <li><a href="#skillsSection">SKILLS</a></li>
                    <li><a href="#careerSection">CAREER</a></li>
                    <li><a href="#projectsSection">PROJECTS</a></li>
                    <li><a href="#connectSection">CONNECT</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;