import "../styles/navbar.css"

function NavBar(){
    return(
        <div className="navBarContainer">
            <div className="links">
                <ul>
                    <li>ABOUT</li>
                    <li>SKILLS</li>
                    <li>CAREER</li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;