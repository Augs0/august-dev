import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Emoji from './components/Emoji'

import './App.css'

export default class App extends Component {
  state = {
    experience: false,
    projects: false
  }

  toggleExperience() {
    this.setState({
      experience: !this.state.experience
    })
  }

  toggleProjects() {
    this.setState({
      projects: !this.state.projects
    })
  }

  render() {
    return (
      <div className="App">
        <Header experience={() => this.toggleExperience()} projects={() => this.toggleProjects()} />
        <main>
          <div className="wrapper">
            {this.state.experience === true ? <Experience /> : false}
          </div>
          <div className="wrapper">
            {this.state.projects === true ? <Projects /> : false}
          </div>
          <div className="wrapper">
            <article className="tech">
              <h2>Technical Skills</h2>
              <ul>
                <li className="subtitle green-underline">Confident using...</li>
                <li>HTML</li>
                <li>CSS (+ Bootstrap, Flexbox, Grid, SASS)</li>
                <li>Javascript</li>
                <li className="subtitle orange-underline">Feel quite comfortable with...</li>
                <li>React.js (+ Gatsby.js)</li>
                <li>Node.js</li>
                <li className="subtitle red-underline">Just starting out with...</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Python</li>
                <li className="subtitle purple-underline">Version control and project management tools I use</li>
                <li>Git (with Github and Bitbucket)</li>
                <li>Trello</li>
                <li>Jira</li>
                <li>Slack</li>
                <li>MetroRetro</li>
                <li>Gulp 4</li>
              </ul>
            </article>
            <article className="other">
              <h2>Other skills</h2>
              <p>I'm a bit of a language addict, so I'm able to speak a number of languages, with others in progress.</p>
              <p><Emoji symbol="🌍" label="" /> I'm fairly confident speaking Japanese, German, Spanish and Korean.</p>
              <p><Emoji symbol="⏳" label="" />I'm still working on French, Egyptian Arabic and Hindi.</p>
              <p>Additionally, I can demonstrate skills in the following areas:</p>
              <ul>
                <li>Academic / general research</li>
                <li>Blogging</li>
                <li>Cultural awareness and cross-cultural communication</li>
                <li>Teaching</li>
                <li>Translation and consecutive interpeting</li>
              </ul>
            </article>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
}

