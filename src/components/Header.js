import React, { Component } from 'react'
import Emoji from './Emoji'

class Header extends Component {
    state = {
        experience: false,
        projects: false
    }

    toggleExperience() {
        this.props.experience(this.state.experience)
        this.setState({
            experience: !this.state.experience
        })
    }

    toggleProjects() {
        this.props.projects(this.state.projects)
        this.setState({
            projects: !this.state.projects
        })
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
                        <button type="button" aria-label={this.state.experience === true ? "My work experience is currently on the page. Click this button to hide it" : "My eork experience is not currently on the page. Click this button to make it visible"} onClick={() => this.toggleExperience()}>{this.state.experience === true ? "Hide experience" : "View experience"}</button>
                        <button type="button" aria-label={this.state.projects === true ? "My projects are currently on the page. Click this button to hide them" : "My projects are not currently on the page. Click this button to make them visible"} onClick={() => this.toggleProjects()}>{this.state.projects === true ? "Hide projects" : "View projects"}</button>
                    </nav>
                </header>
            </>
        )
    }
}


export default Header