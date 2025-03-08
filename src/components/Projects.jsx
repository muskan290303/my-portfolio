const Projects = () => {
  const project1 = { title: "Gyansetu", img: "/assets/gyansetu.jpg", desc: "Built using Flask & React" };
  const project2 = { title: "Land 2 Lavish", img: "/assets/land2lavish.jpg", desc: "Real estate based project" };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <img src={project1.img} alt={project1.title} />
          <div className="Awesome">
          <h3 >{project1.title}</h3>
          <p >{project1.desc}</p>
          </div>
        </div>

        <div className="project">
          <img src={project2.img} alt={project2.title} />
          <div className="Awesome">
          <h3 >{project2.title}</h3>
          <p >{project2.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
