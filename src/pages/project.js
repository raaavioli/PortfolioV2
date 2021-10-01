import * as React from "react";
import PropTypes from "prop-types";

import * as Logos from "../images/svgs.js";

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
       <iframe
           width="560" height="315"
           src={`https://www.youtube.com/embed/${embedId}`}
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen>
       </iframe>
     </div>
);

YoutubeEmbed.propTypes = {
 embedId: PropTypes.string.isRequired
};

class Project extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			index: 0,
		}
	}

    getSelected(selectedIndex) {
        if (selectedIndex === this.state.index)
            return "selected";
        return "";  
    }
		
	render () {
		return <div className="outer-project-box flex-column">
            <h3>{this.props.text}</h3>
			<div className="flex-row">
				<div className="tabs right light flex-row">
					{this.props.embedId && 
					<button className={`${this.getSelected(2)}`} 
						onClick={() => this.setState({index: 2})} 
						onKeyDown={() => this.setState({index: 2})}>
						{Logos.YoutubeLogo()}
					</button>
					}
					<button className={`${this.getSelected(1)}`} 
						onClick={() => this.setState({index: 1})} 
						onKeyDown={() => this.setState({index: 1})}>
						About
					</button>
                    <button className={`${this.getSelected(0)}`} 
						onClick={() => this.setState({index: 0})} 
						onKeyDown={() => this.setState({index: 0})}>
						{Logos.ImageLogo()}
					</button>
				</div>
			</div>
				
			<div className="inner-project-box">
				{this.props.embedId && 
				<div className={`project-content ${this.getSelected(2)}`}> 
					<YoutubeEmbed embedId={this.props.embedId} />
				</div>
				}
				<div className={`project-content light flex-column ${this.getSelected(1)}`}>
					<p>{this.props.description}</p>
					<p>{this.props.keywords}</p>
				</div>
                <div className={`project-content light flex-column ${this.getSelected(0)}`}>
                    <img src={this.props.image} alt={this.props.text}/>
				</div>
			</div>
		</div>;
	}
}

export default Project;