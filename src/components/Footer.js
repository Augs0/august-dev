import React from 'react'
import Emoji from './Emoji'
import { FaLinkedin, FaGithubSquare, FaCodepen } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <footer>
                <p>Designed with <Emoji symbol="🖤" label="love" /> by August</p>
                <p><a href="https://linkedin.com/in/august-a-66894784" aria-label="Visit my LinkedIn profile"><FaLinkedin aria-hidden="true" /></a></p>
                <p><a href="https://github.com/Augs0" aria-label="Visit my Github profile"><FaGithubSquare aria-hidden="true" /></a></p>
                <p><a href="https://codepen.io/augs0" aria-label="Visit my Codepen profile"><FaCodepen aria-hidden="true" /></a></p>
            </footer>
        </>
    )
}

export default Footer