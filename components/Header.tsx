import '../styles/header.css'

function Header() {
    return (
        <div className='headerContainer'>

            <div className="headshotHeading">
                <img className="imageHeading" src="https://github.com/adamfenji/portfolio/blob/main/img/af-img.JPEG?raw=true" />
                <div className="greetingHeading">
                    <h1>Nice to meet you!</h1>
                    <h1>I'm <strong className='afName'>Adam Fenjiro</strong>.</h1>
                </div>

                <br />

                <div className="descriptionHeading">
                    <p>
                        Born and raised in Rabat, Morocco.
                        <br/><br/>
                        I am a third-year student-athlete at Michigan Technological University pursuing a double major in Computer Science and Management Information Systems. 
                    </p>
                </div>

            </div>



        </div>
    );
}

export default Header;