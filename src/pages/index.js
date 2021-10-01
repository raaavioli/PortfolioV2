import * as React from "react";

import "../styles/main.scss";

import FlyingFlamePNG from "../images/FlyingFlame.png"
import HideAndSeekPNG from "../images/HideAndSeek.png"
import WaterRenderingPNG from "../images/panorama.png"
import Project from "./project.js";
import SidePanel from "./side-panel.js"

import HeadImage from "../images/hanging.jpg";
import Portrait from "../images/portrait.jpg";

const projects = [
  {
    text: "Water Rendering",
    embedId: "vMgEDpx1GXg",
	image: WaterRenderingPNG,
    description: "Water Rendering aimed to explore rendering of realistically looking water in real time. The project is based on Jerry Tessendorf's paper Simulating Ocean Water (2001).",
    keywords: "C++, OpenGL, CUDA, Fourier transforms",
  },
  {
    text: "Hide and Seek",
	image: HideAndSeekPNG,
    description: "A 3D game created as part of a university project in tcp-sockets programmig. The game allows multiple players to connect to a server to play a game of capture the flag in a procedurally generated maze.",
		keywords: "C++, Network programming (sockets), OpenGL, Blender" 
  },
  {
    text: "Flying Flame",
	image: FlyingFlamePNG,
	description: "A 2D survival helicopter game where your mission is to drop bombs on enemy blobs before they create too many dangerous turrets and shoot you down with homing missiles.",
    keywords: "Java, 2D sprite animations, Gimp",
  }
]


const experiences = [
	{
		title: "B.S in Computer Science, KTH",
		dateRange: "2017-2020",
		description: "Three year B.S in Computer Science program including broad knowledge in the field of CS. Includes algorithms, data structures, logic, discrete maths, calculus, algebra and geometry, statistics, operating systems, computer systems architecture and more."
	},
	{
		title: "Digpro Technologies",
		dateRange: "2017-2020",
		description: "Full stack Java EE development for geographic infrastructure application (GIS) with Swing, OracleSQL and PostgreSQL"
	}
]

const tools = [
	{
		title: "Languages",
		types: "C++, C#, Java, Python, Javascript, Rust, SQL",
	},
	{
		title: "Graphics APIs",
		types: "OpenGL, Direct3D 12"
	},
	{
		title: "Platform development (C++)",
		types: "Linux, Win32",
	},
	{
		title: "Software",
		types: "Unity, Blender, Photoshop, Gimp"
	}
]

const IndexPage = () => {
  return (
    <main>
      	<title>Oliver Eriksson</title>
		<div className="content-panel dark flex-column">
			<div className="head-panel dark flex-row">
				<div className="head-text flex-column dark">
					<h1>Hi, I'm Oliver!</h1>
					<h3 className="dark">Computer scientist, rendering enthusiast and
					 adventure seeker.</h3>
				</div>
				<span className="cover">
					<img className="head-image" src={HeadImage} alt="Me"/>
				</span>
			</div>
		</div>

		<div className="content-panel flex-column">
			<div className="panel-separator"></div>
			<h2>About</h2>
			<div className="flex-row">
				<div className="flex-column">
					<img className="floating-img" src={Portrait} alt="Me"/>
					<p> 
						I am Oliver Eriksson and I live in Stockholm, Sweden. I study computer science at <a href="https://www.kth.se/">KTH</a> (Royal Institute of Technology),
						and I did my BSc at KTH from 2017-2020. I am currently doing the last year of my MSc with focus on computer graphics, which will be done in June 2022. 
						I have spent most of my credits in courses related to computer graphics, followed by parallelization and High Performance Computing (HPC).
					</p>
					<p>
						My interest in computer graphics has been with me since I was young. I have always been weak for captivating graphical effects whether it be 
						particles, post processing effects or physically accurate simulations. As a kid I played quite a lot of video games, mainly on console, and I have
						always been a great fan of platformers such as Jak and Daxter, Rachet and Clank, Uncharted, Halo and Sly Cooper.				
					</p>

					<p>
						The goal of my career is to contribute to development and research in computer graphics. I want to ensure that the film and games industries 
						continue to grow, and do so by giving artists the best tools they can have to create mesmerizing art.
					</p>
				</div>
			</div>
			<div className="panel-separator"></div>
		</div>

		<div className="content-panel flex-column">
			<h2>Projects</h2>
			<div className="projects-container flex-row">
				{projects.map(project => (
					<Project key={project.text} 
						text={project.text}	
						embedId={project.embedId}
						image={project.image}
						description={project.description}
						keywords={project.keywords}/>
				))}
			</div>
			<div className="panel-separator"></div>
		</div>
		<div className="content-panel flex-column">
			<div className="flex-row qualifications">
				<div className="qualification-box flex-column">	
					<h2>Experience</h2>
					<ul>
						{experiences.map(experience => (
							<li key={experience.title}>
								<h3>{experience.title}<span>{experience.dateRange}</span></h3>
								<p>{experience.description && experience.description}</p>
							</li>
						))}
					</ul>
				</div>
				<div className="qualification-box flex-column">
					<h2>Tools</h2>
					<ul>
						{tools.map(tool => (
							<li key={tool.title}>
								<h3>{tool.title}</h3>
								<p>{tool.types}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="panel-separator"></div>
		</div>

		<SidePanel/>
    </main>
  )
}

export default IndexPage
