import React, {useState} from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./HomePage.css"


const HomePage = () => {
    const [selected, setSelected] = useState(true)

    return (
        <div className="container home">
            <div className="container-left">
                <h2 style={{marginBottom: 20}}>Vladyslav Yaromiy</h2>
                <p>Hello , im a full stack web developer from Ukraine</p>
                <ul>
                    <div className="tabs">
                        <li className="one" onClick={() => setSelected(true)}><p className="tab">Skills</p></li>
                        <li className="two" onClick={() => setSelected(false)}><p className="tab">Projects</p></li>
                    </div>
                    <hr className={selected ? "selected" : "unselected"}/>
                </ul>
                {selected
                    ? <div>
                        <p style={{fontSize: 16, fontWeight: "bold"}}>My tech skills: </p>
                        <p>Frontend stack:</p>
                        <p>-- Main: React/Redux, JavaScript, HTML & CSS,</p>
                        <p>-- Additional: MaterialUI, Bootstrap</p>

                        <p>Backend stack:</p>
                        <p>-- NodeJS, Express</p>

                        <p>Database layer:</p>
                        <p>-- MongoDB</p>

                        <p>Version Control System:</p>
                        <p>-- Git</p>
                    </div>
                    : <div>
                        <p>Online shop website: <a href="https://yva.com.ua/" target="_blank">yva.com.ua</a></p>
                    </div>
                }
            </div>
            <div className="container-right">
                <div className="medias">
                    <h4>My media: </h4>
                    <div className="links">
                        <a href="https://www.instagram.com/ulceora/?hl=en" target="_blank"><InstagramIcon
                            style={{fontSize: 28}}/></a>
                        <a href="https://www.linkedin.com/in/vladyslav-yaromiy-48b4b7198/" target="_blank"><LinkedInIcon
                            style={{fontSize: 28}}/></a>
                        <a href="https://github.com/karaka-code" target="_blank"><GitHubIcon
                            style={{fontSize: 28}}/></a>
                    </div>
                </div>
                <div className="contact">
                    <h4>Contact me: </h4>
                    <span style={{marginLeft: 5}}> vlad.yaromiy@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default HomePage