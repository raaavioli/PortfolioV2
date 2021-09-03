import * as React from "react"
import PropTypes from "prop-types";

import "../styles/main.scss"

const projects = [
  {
    text: "Water Rendering",
    embedId: "vMgEDpx1GXg",
    description: "Water Rendering aimed to create a scene for rendering realistically looking water in real time based on Jerry Tessendorf's paper Simulating Ocean Water (2001).",
    keywords: "C++, OpenGL, CUDA, Fourier transforms",
  },
  {
    text: "Hide and seek",
    description: "Hide and seek is a small game created as part of a university project in tcp-sockets programmig. The game allows multiple players to connect to a server to play a game of capture the flag in a procedurally generated maze.",
		keywords: "C++, Network programming (sockets), OpenGL, Blender" 
  },
  {
    text: "Flying Flame",
	  description: "2D survival helicopter where your mission is to drop bombs on enemies before they create too many dangerous turrets and shoot you down.",
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

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
		<iframe
			width="560" height="315"
			src={`https://www.youtube.com/embed/${embedId}`}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen>
		</iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

const IndexPage = () => {
  return (
    <main>
      <title>Oliver Eriksson</title>
      <h1>
        Hi, I'm Oliver!
				<span>Computer scientist, rendering enthusiast and incurable adventure seeker.
				</span>
				</h1>
			<div class="content-panel">
				<h2>Projects</h2>
				{projects.map(project => (
					<div class="project-box">
						{project.embedId && <YoutubeEmbed embedId={project.embedId} />}
						<h3>{project.text}</h3>
						<p>{project.keywords}</p>
						<p>{project.description}</p>
					</div>
				))}
			</div>
			<div class="content-panel">
				<div class="content-sub-panel">	
					<h2>Experience</h2>
					<ul>
						{experiences.map(experience => (
							<li>
								<h3>{experience.title}<span>{experience.dateRange}</span></h3>
								<p>{experience.description && experience.description}</p>
							</li>
						))}
					</ul>
				</div>
				<div class="content-sub-panel">
					<h2>Tools</h2>
					<ul>
						{tools.map(tool => (
							<li>
								<h3>{tool.title}</h3>
								<p>{tool.types}</p>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div class="content-panel">
				<h2>About</h2>
				<p>Vad är Lorem Ipsum?
					Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker. Varför använder vi det? Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde, till skillnad från "Text här, Text här", och ger intryck av att vara läsbar text. Många publiseringprogram och webbutvecklare använder Lorem Ipsum som test-text, och en sökning efter "Lorem Ipsum" avslöjar många webbsidor under uteckling. Olika versioner har dykt upp under åren, ibland av olyckshändelse, ibland med flit (mer eller mindre Var kommer det I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord. Det har sina rötter i ett stycke klassiskt litteratur på latin från 45 år före år 0, och är alltså över 2000 år gammalt. Richard McClintock, en professor i latin på Hampden-Sydney College i Virginia, översatte ett av de mer ovanliga orden, consectetur, från ett stycke Lorem Ipsum och fann dess ursprung genom att studera användningen av dessa ord i klassisk litteratur. Lorem Ipsum kommer från styckena 1.10.32 och 1.10.33 av "de Finibus Bonorum et Malorum" (Ytterligheterna av ont och gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i teorier om etik, och var väldigt populär under renäsanssen. Den inledande meningen i Lorem Ipsum, "Lorem Ipsum dolor sit amet...", kommer från stycke 1.10.32.
					<img class="floating"/>
			</p>
			</div>

			<div class="content-panel">
				<h2>Contact</h2>
			</div>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
