import React, { Component } from 'react'
import Header from './components/Header'
// import Footer from './components/Footer'
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
            <div role="presentation none" className="tech">
              <h2>Technical Skills</h2>
              <ul>
                <p className="green-underline">Confident using...</p>
                <li>HTML</li>
                <li>CSS (+ Bootstrap, Flexbox, Grid, SASS)</li>
                <li>Javascript</li>
                <p className="orange-underline">Feel quite comfortable with...</p>
                <li>React.js (+ Gatsby.js)</li>
                <li>Node.js</li>
                <p className="red-underline">Just starting out with...</p>
                <li>PHP</li>
                <li>Python</li>
              </ul>
            </div>
            <div role="presentation none" className="other">
              <h2>Other skills</h2>
              <h3 className="purple-underline">Foreign languages (ordered by fluency)</h3>
              <ul>
                <li>Japanese</li>
                <li>German</li>
                <li>Spanish</li>
                <li>Korean</li>
                <h4 className="purple-underline">Languages in progress:</h4>
                <ul>
                  <li>French</li>
                  <li>Hindi</li>
                  <li>Arabic (Egyptian)</li>
                </ul>
              </ul>
              <h3>Miscellaneous</h3>
              <ul>
                <li>Research skills</li>
                <li>Blogging</li>
                <li>Translation skills</li>
                <li>Make pretty great brownies and jam tarts <Emoji symbol="🍰" label="" /></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

