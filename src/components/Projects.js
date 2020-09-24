import React from 'react'
import AccessibilityGuide from '../assets/images/accessibilityguide.png'
import GitGuide from '../assets/images/gitguide.png'
import Wiki from '../assets/images/dldwiki.png'
import JsonConverter from '../assets/images/attemptretriever.png'

function Projects() {
    return (
        <section className="experience-wrapper">
            <h2 className="black-underline">Projects</h2>
            <h3 className="red-underline">Private projects</h3>
            <p>Unfortunately I cannot share the code for these projects, but I am happy to discuss my processes and the content in an appropriate setting.</p>
            <ul className="projects-ul">
                <li><span>Accessibility guide</span><img className="project-pic" src={AccessibilityGuide} alt="accessibility guide" /></li>
                <li><span>Git guide</span><img className="project-pic" src={GitGuide} alt="guide on how to use git" /></li>
                <li><span>Wiki in React</span><img className="project-pic" src={Wiki} alt="team wiki in React.js/Gatsby.js" /></li>
                <li><span>JSON to HTML table converter</span><img className="project-pic" src={JsonConverter} alt="json to table converter" /></li>
            </ul>
            <h3 className="green-underline">Personal projects</h3>
            <p>Here's a small selection, but <a href="https://github.com/Augs0">you can explore more on my Github.</a></p>
            <ul>
                <li><a href="https://codepen.io/augs0/pen/pKzKwQ">Travel map (HTML,CSS,JS)</a> This was one of my first ever projects before even becoming a developer!</li>
                <li><a href="https://cyf-course-checklist.netlify.app/">Revision checklist for CYF coding course (HTML,SASS,JS,Parcel.js)</a></li>
                <li><a href="https://github.com/Augs0/mock-ngo">Mock NGO site [mobile-first] (HTML, CSS)</a></li>
                <li><a href="https://astro-react.netlify.app/">Horoscope and compatability (React.js)</a></li>
                <li><a href="https://explore-tech.netlify.app/">Simple site to help people explore jobs in tech (HTML, CSS, JS)</a></li>
                <li><a href="https://codepen.io/augs0/pen/zYrJeGj?editors=0010">Language badge maker (HTML, CSS, JS)</a></li>
                <li><a href="https://codepen.io/augs0/pen/QWbGwJw">Classy tribute page (HTML, CSS)</a></li>
                <li><a href="https://codepen.io/augs0/pen/NQWamE">CSS testimonials (HTML, CSS)</a></li>
                <li><a href="https://codepen.io/augs0/pen/mdJZXaK">Ghibli film list (HTML, Bootstrap, JS)</a></li>
            </ul>
        </section>
    )
}

export default Projects