import React from 'react'
import Emoji from './Emoji'

function Footer() {
    return (
        <>
            <footer>
                <p>Designed with <Emoji symbol="🖤" label="love" /> by August</p>
                <p><a href="#">Connect with me on LinkedIn</a></p>
                <p><a href="#">Check out my Github</a></p>
                <p><a href="#">Check out my Codepen</a></p>
            </footer>
        </>
    )
}

export default Footer