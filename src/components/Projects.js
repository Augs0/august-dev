import React from 'react'
import AccessibilityGuide from '../assets/images/accessibilityguide.png'
import GitGuide from '../assets/images/gitguide.png'
import Wiki from '../assets/images/dldwiki.png'
import JsonConverter from '../assets/images/attemptretriever.png'

function Projects() {
    return (
        <section className="experience-wrapper">
            <h2 className="black-underline">Projects</h2>
            <h3 className="green-underline">Personal projects</h3>
            <p>Here's a small selection, but <a href="https://github.com/Augs0">you can explore more on my Github.</a></p>
            <div className="projects-grid">
                <div className="project-card">
                    <h4>Travel map</h4>
                    <a href="https://codepen.io/augs0/pen/pKzKwQ">Travel map (Codepen)</a>
                    <p>Tech: HTML,CSS,JS</p>
                </div>
                <div className="project-card">
                    <h4>Revision checklist for CYF syllabus</h4>
                    <a href="https://cyf-course-checklist.netlify.app/">Revision checklist (Netlify)</a>
                    <p>Tech: HTML,SASS,JS,Parcel.js</p>
                </div>
                <div className="project-card">
                    <h4>Multilingual site for mock translation company </h4>
                    <a href="https://voyager-translations.netlify.app/">Mock site in English, Spanish and Japanese (Netlify)</a>
                    <p>Tech: React.js</p>
                </div>
                <div className="project-card">
                    <h4>Mock NGO site (mobile-first) </h4>
                    <a href="https://github.com/Augs0/mock-ngo">Mock NGO site (GitHub repo)</a>
                    <p>Tech: HTML, CSS</p>
                </div>
                <div className="project-card">
                    <h4>Daily horoscope and compatability </h4>
                    <a href="https://astro-react.netlify.app/">Horoscope and compatability(Netlify)</a>
                    <p>Tech: React.js</p>
                </div>
                <div className="project-card">
                    <h4>Explore tech jobs </h4>
                    <a href="https://explore-tech.netlify.app/">Explore jobs in tech (Netlify)</a>
                    <p>Tech: HTML, CSS, JS</p>
                </div>
                <div className="project-card">
                    <h4>Language badge maker </h4>
                    <a href="https://codepen.io/augs0/pen/zYrJeGj?editors=0010">Make your own language badge (Codepen)</a>
                    <p>Tech: HTML, CSS, JS</p>
                </div>
                <div className="project-card">
                    <h4>Classy tribute page </h4>
                    <a href="https://codepen.io/augs0/pen/QWbGwJw">Responsive grayscale tribute page for Lee Pace  (Codepen)</a>
                    <p>Tech: HTML, CSS</p>
                </div>
                <div className="project-card">
                    <h4>CSS testimonials </h4>
                    <a href="https://codepen.io/augs0/pen/NQWamE">Animated testimonials with CSS (Codepen)</a>
                    <p>Tech: HTML, CSS</p>
                </div>
                <div className="project-card">
                    <h4>Ghibli film list</h4>
                    <a href="https://codepen.io/augs0/pen/mdJZXaK">Studio Ghibli film list (Codepen)</a>
                    <p>Tech: HTML, Bootstrap, Ghibli API</p>
                </div>
            </div>
            <h3 className="red-underline">Private projects</h3>
            <p>Unfortunately I cannot share the code for these projects, but I am happy to discuss my processes and the content in an appropriate setting.</p>
            <div className="projects-grid">
                <div className="project-card">
                    <h4>Accessibility guide</h4>
                    <img className="project-pic" src={AccessibilityGuide} alt="accessibility guide" />
                    <p>Tech: HTML, CSS, JS</p>
                </div>
                <div className="project-card">
                    <h4>Git guide</h4>
                    <img className="project-pic" src={GitGuide} alt="guide on how to use git" />
                    <p>Tech: React.js</p>
                </div>
                <div className="project-card">
                    <h4>Department wiki</h4>
                    <img className="project-pic" src={Wiki} alt="team wiki in React.js/Gatsby.js" />
                    <p>Tech: React.js, Gatsby.js</p>
                </div>
                <div className="project-card">
                    <h4>URI data to HTML converter</h4>
                    <img className="project-pic" src={JsonConverter} alt="json to table converter" />
                    <p>Tech: HTML, CSS, JS</p>
                </div>
            </div>
        </section>
    )
}

export default Projects