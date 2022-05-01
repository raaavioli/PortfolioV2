import * as React from "react";

import "../styles/main.scss";

import FlyingFlamePNG from "../images/FlyingFlame.png"
import HideAndSeekPNG from "../images/HideAndSeek.png"
import WaterRenderingPNG from "../images/waterrendering.png"
import HobbyRenderingPNG from "../images/hobbyrenderingengine.png"
import AttackProjectPNG from "../images/attack_project.png"
import ConnectedProjectPNG from "../images/connected_project.png"
import LabReworkPNG from "../images/labrework.png"
import ThesisHeaderPNG from "../images/HeaderRibbonImage.png"
import Project from "./project.js";
import SidePanel from "./side-panel.js"

import HeadImage from "../images/hanging.jpg";
import Portrait from "../images/portrait.jpg";


const academia_projects = [
	{
		text: "Smooth Particle Ribbons Through Hardware Accelerated Tessellation (Master Thesis)",
		image: ThesisHeaderPNG,
		description: "Master thesis on generating smooth tessellated particle ribbons using traditional tessellation shaders and mesh shaders in DirectX 12. Methodology involved evaluating B-splines curves on a tessellated surface for three different hardware implementations using mesh shaders, mesh + task shaders and tessellation shaders. Culling, LOD and Gouraud shading were three suggested optimizations, which showed to be useful to keep interactive frame rates. Results show that mesh+task shaders can be used to generate and render smooth particle ribbons of arbitrary levels of tessellation, however they remain slower than traditional tessellation shaders for tessellation factors smaller than 64.",
		keywords: "Tessellation, Mesh shaders, B-splines, Particle ribbons, VFX",
		wide: "wide",
	},
	{
		text: "Water Rendering",
		embedId: "vMgEDpx1GXg",
		image: WaterRenderingPNG,
		description: "Water Rendering aimed to explore rendering of realistically looking water in real time. The project is based on Jerry Tessendorf's paper Simulating Ocean Water (2001).",
		keywords: "C++, OpenGL, CUDA, Fourier transforms",
		githubLink: "https://github.com/raaavioli/WaterRendering",
	},
	{
		text: "Course Assignment Rework",
		image: LabReworkPNG,
		description: "Reworked lab material the course DH2323: Computer graphics and interation at KTH. I took initiative to improve the labs for three reasons: To make a cross-platform easily built code skeleton. To improve the instructions and introduce questions related to the implementation. To make a unified application which could be used to implement and present all labs.",
		keywords: "Linear algebra, Ray tracing, Rasterization, C++, OpenGL",
		githubLink: "https://github.com/raaavioli/Rendering-fundamentals",
	},
]

const group_projects = [
	{
		text: "ATTACK",
		image: AttackProjectPNG,
		description: "Group project making an interactive card game played on a SUR40 touch monitor. I contributed to all parts of the project, however most of my work was graphics related as I wrote shaders for most visual effects in the game such as projectiles, UI and characters. I also mixed and added sound to the game.",
		keywords: "Unity, HLSL, OpenCV, SUR40 Touch monitor",
		githubLink: "https://github.com/raaavioli/ATTACK-AGI",
	},
	{
		text: "Connected",
		image: ConnectedProjectPNG,
		description: "Short project making an interactive VR environment for building electrical circuitry. My main contribution was related to creating interactive components, where I made a glowing lightbulb, a sound-playing radio and a container for recycling. I also programmed HLSL shaders and set up SteamVR to be able to interact with the sound-playing radio component I introduced.",
		keywords: "Unity, HLSL, SteamVR, Blender",
		githubLink: "https://github.com/raaavioli/Connected",
	},
]

const hobby_projects = [
	{
		text: "Outdoor Environment Rendering",
		image: HobbyRenderingPNG,
		description: "A hobby renderer written in OpenGL. Work has also been started to port the renderer to Metal. The renderer contains systems for simulation and rendering of millions of individual grass blades, hot-reloading and dynamic caching of glsl shaders, shadow mapping, fbx support and more.",
		keywords: "C++, OpenGL, Compute shaders, Particle systems",
		githubLink: "https://github.com/raaavioli/OutdoorEnvironmentRendering",
	},
	{
		text: "Hide and Seek",
		image: HideAndSeekPNG,
		description: "A 3D game created as part of a university project in tcp-sockets programmig. The game allows multiple players to connect to a server to play a game of capture the flag in a procedurally generated maze.",
		keywords: "C++, Network programming (sockets), OpenGL, Blender",
		githubLink: "https://github.com/raaavioli/HideAndSeekGame",
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
		title: "M.Sc in Computer Science, KTH",
		dateRange: "2020-2022",
		description: "Two year M.Sc in Computer Science. Main track in computer graphics and visualization. Sidetrack in high performance computing and computer systems architecture with focus on parallelism for GPUs and distributed systems. Thesis was conducted together with Avalanche Studios Group."
	},
	{
		title: "B.Sc in Computer Science, KTH",
		dateRange: "2017-2020",
		description: "Three year B.Sc in Computer Science program including broad knowledge in the field of CS. Includes algorithms, data structures, logic, discrete maths, calculus, algebra and geometry, statistics, operating systems, computer systems architecture and more."
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
		types: "OpenGL, Direct3D 12, Metal"
	},
	{
		title: "Platform development (C++)",
		types: "Linux, Win32, Mac OSX"
	},
	{
		title: "Software",
		types: "PIX, RenderDoc, Nvidia Nsight, Unity, Blender, Photoshop, Gimp"
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
			<h2>Academia</h2>
				<div className="projects-container flex-row">
					{academia_projects.map(project => (
						<Project key={project.text} 
							text={project.text}	
							embedId={project.embedId}
							image={project.image}
							description={project.description}
							keywords={project.keywords}
							githubLink={project.githubLink}
							wide={project.wide}/>
					))}
				</div>

			<h2>Group work</h2>
				<div className="projects-container flex-row">
					{group_projects.map(project => (
						<Project key={project.text} 
							text={project.text}	
							embedId={project.embedId}
							image={project.image}
							description={project.description}
							keywords={project.keywords}
							githubLink={project.githubLink}
							wide={project.wide}/>
					))}
				</div>	
			<h2>Hobby</h2>
				<div className="projects-container flex-row">
					{hobby_projects.map(project => (
						<Project key={project.text} 
							text={project.text}	
							embedId={project.embedId}
							image={project.image}
							description={project.description}
							keywords={project.keywords}
							githubLink={project.githubLink}
							wide={project.wide}/>
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
