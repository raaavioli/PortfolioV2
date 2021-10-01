import * as React from "react";


import * as Logos from "../images/svgs.js";

class SidePanel extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			hidden: false,
		}
	}

    toggleHidden() {
        this.setState({
            hidden: !this.state.hidden
        }); 
    }

    getHidden() {
        if (this.state.hidden)
            return "hidden";
        return "";
    }
		
	render () {
        return <div className={`side-panel flex-column ${this.getHidden()}`}>
            <button onClick={() => this.toggleHidden()} 
                    onKeyDown={() => this.toggleHidden()}>
                {Logos.CrossLogo()}
                {Logos.MenuLogo()}
            </button>
            <div className="panel-separator"></div>
            <h3>Contact</h3>
            <a href="mailto:oliverorobin@gmail.com">
                {Logos.EmailLogo()}
            </a>
            <a href="https://www.linkedin.com/in/olivereriksson96/">
                {Logos.LinkedInLogo()}
            </a>
            <a href="https://github.com/raaavioli/">
                {Logos.GithubLogo ()}
            </a>
            <a href="https://www.facebook.com/oliver.eriksson.161/">
                {Logos.FacebookLogo ()}
            </a>
            <a href="https://www.instagram.com/elolro/">
                {Logos.InstagramLogo ()}
            </a>
            <div className="panel-separator"></div>
        </div>;
	}
}

export default SidePanel;