import * as React from "react";

import "../styles/main.scss";

import * as Logos from "../images/svgs.js";
import FlyingFlamePNG from "../images/FlyingFlame.png"
import HideAndSeekPNG from "../images/HideAndSeek.png"
import WaterRenderingPNG from "../images/panorama.png"
import Project from "./project.js";

import Portrait from "../images/mona.jpg";

const projects = [
  {
    text: "Water Rendering",
    embedId: "vMgEDpx1GXg",
	image: WaterRenderingPNG,
    description: "Water Rendering aimed to create a scene for rendering realistically looking water in real time based on Jerry Tessendorf's paper Simulating Ocean Water (2001).",
    keywords: "C++, OpenGL, CUDA, Fourier transforms",
  },
  {
    text: "Hide and Seek",
	image: HideAndSeekPNG,
    description: "Hide and seek is a small 3D game created as part of a university project in tcp-sockets programmig. The game allows multiple players to connect to a server to play a game of capture the flag in a procedurally generated maze.",
		keywords: "C++, Network programming (sockets), OpenGL, Blender" 
  },
  {
    text: "Flying Flame",
	image: FlyingFlamePNG,
	description: "A 2D survival helicopter game where your mission is to drop bombs on enemy blobs before they create too many dangerous turrets and shoot you down with homing missiles.",
    keywords: "Java, 2D Animation system, Hand-drawn sprite-animations",
  }
]


const experiences = [
	{
		title: "B.A in Computer Science, KTH",
		dateRange: "2017-2020",
	},
	{
		title: "Digpro Technologies",
		dateRange: "2017-2020",
		description: "Full stack Java EE development for GIS application with Swing, OracleSQL and PostgreSQL"
	}
]

const tools = [
	{
		title: "Languages",
		types: "C++, Java, Python, Javascript, Rust, SQL",
	},
	{
		title: "Graphics APIs",
		types: "OpenGL, Direct3D 12"
	},
	{
		title: "Platform development (C++)",
		types: "Linux, Win32",
	},
]

const IndexPage = () => {
  return (
    <main>
      	<title>Oliver Eriksson</title>
		<div className="content-panel dark flex-column">
			<div className="head-panel dark flex-row">
				<div className="head-text flex-column dark">
					<h1>Hi, I'm Oliver!</h1>
					<p className="dark">Computer scientist, rendering enthusiast and incurable adventure seeker.</p>
				</div>
				<img className="head-image" src={Portrait} alt="Me" />
			</div>
		</div>

		<div className="content-panel flex-column">
			<div className="panel-separator"></div>
			<h2>About</h2>
			<p> 
				I am Oliver Eriksson and I live in Stockholm, Sweden. I study computer science at <a href="https://www.kth.se/">KTH</a> (Royal Institute of Technology),
				and I did my BSc from 2017-2020.I am currently doing the last year of my MSc with focus on computer graphics, which will be done in June 2022. 
				I have spent most of my credits in courses related to computer graphics, followed by parallelization and High Performance Computing (HPC).
			</p>
			<p>
				My interest in computer graphics has been with me since I was young. I have always had an been weak for captivating graphical effects whether it be 
				particles, post processing effects or physically accurate simulations. As a kid I played quite a lot of video games, mainly on console, and I have
				always been a great fan of platformers such as Jak and Daxter, Rachet and Clank, Uncharted, Halo and Sly Cooper.				
			</p>

			<p>
				The goal of my career is to contribute to development and research in computer graphics. I want to ensure that the film and games industries 
				continue to grow, and do so by giving artists the best tools they can have to create mesmerizing art.
			</p>
			<img className="floating-img" alt="Me"/>
			<div className="panel-separator"></div>
		</div>

		<div className="content-panel flex-column">
			<h2>Projects</h2>
			<div className="projects-container flex-row">
				{projects.map(project => (
					<Project key={project.text} project={project}/>
				))
				}
			</div>
			<div className="panel-separator"></div>
		</div>
		<div className="content-panel flex-column">
			<div className="flex-row">
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

		<div className="side-panel flex-column">
			<h3>Contact</h3>
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
		</div>
    </main>
  )
}

export default IndexPage
