import React, { Component } from 'react'
import Emoji from './Emoji'

class Header extends Component {
    state = {
        experience: false,
        projects: false
    }

    toggleExperience() {
        this.props.experience(this.state.experience)
    }

    toggleProjects() {
        this.props.projects(this.state.projects)
    }

    render() {
        return (
            <>
                <header className="page-selector">
                    <h1> August || Multilingual Web Developer <br />
                        <Emoji symbol="📚" label="studying" />
                        <Emoji symbol="✈️" label="travelling" />
                        <Emoji symbol="👩‍💻" label="coding" />
                    </h1>
                    <nav>
                        <button type="button" onClick={() => this.toggleExperience()}>{this.state.experience === true ? "Hide experience" : "View experience"}</button>
                        <button type="button" onClick={() => this.toggleProjects()}>{this.state.experience === true ? "Hide projects" : "View projects"}</button>
                    </nav>
                </header>
            </>
        )
    }
}


export default Header