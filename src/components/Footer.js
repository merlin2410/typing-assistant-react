import React from "react";
import { FaGithub, FaMailBulk, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ()=>{

    return (
        <div className="Footer">
            <div className="left-footer">
                <FaGithub/>
                <FaLinkedin/>
                <FaMailBulk/>
                <FaInstagram/>

            </div>
            <div right-footer>
                <select name="color">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="lightGrey">Light Grey</option>
                </select>
            </div>
        </div>
    )
}

export default Footer;