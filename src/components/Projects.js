import React from 'react'

function Projects() {
    return (
        <div role="none presentation" className="experience-wrapper">
            <h2 className="black-underline">Projects</h2>
            <h3 className="red-underline">Private projects</h3>
            <p>Unfortunately I cannot share the code for these projects, but I am happy to discuss my processes and the content in an appropriate setting.</p>
            <ul>
                <li>Accessibility guide</li>
                <li>Git guide</li>
                <li>Team wiki in React.js/Gatsby.js</li>
            </ul>
            <h3 className="green-underline">Personal projects</h3>
            <ul>
                <li><a href="https://codepen.io/augs0/pen/mdJeWOe">Interactive mood calendar</a></li>
                <li><a href="https://codepen.io/augs0/pen/QWbGwJw">Classy tribute page</a></li>
                <li><a href="https://codepen.io/augs0/pen/NQWamE">CSS testimonials</a></li>
                <li><a href="https://codepen.io/augs0/pen/mdJZXaK">Bootstrap and API Ghibli films list</a></li>
            </ul>
        </div>
    )
}

export default Projects