import React from 'react'
import Emoji from './Emoji'
import { FaLinkedin, FaGithubSquare, FaCodepen } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <footer>
                <p>Designed with <Emoji symbol="🖤" label="love" /> by August</p>
                <p><a href="https://www.linkedin.com/in/%E2%9C%A8-august-a-66894784/"><FaLinkedin aria-label="Visit my LinkedIn profile" /></a></p>
                <p><a href="https://github.com/Augs0"><FaGithubSquare aria-label="Visit my Github profile" /></a></p>
                <p><a href="https://codepen.io/augs0"><FaCodepen aria-label="Visit my Codepen profile" /></a></p>
            </footer>
        </>
    )
}

export default Footer