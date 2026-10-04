function Projects() {
  return (
    <main>
      <h1>My Projects</h1>
      <p>A selection of projects I am building as I learn.</p>

      <article className="project-card">
        <img
          src={`${import.meta.env.BASE_URL}portfolio-project.png`}
          alt="Home page of my personal React portfolio"
          className="project-image"
        />

        <div className="project-details">
          <h2>Personal Portfolio Website</h2>

          <p>
            A six-page React website presenting my background,
            education, services, and contact information.
          </p>

          <h3>My role</h3>
          <p>
            Built and styled React components, connected pages
            with React Router, created a contact form using
            state, and deployed the website with GitHub Pages.
          </p>

          <h3>Outcome</h3>
          <p>
            Published a working portfolio with page navigation,
            a résumé link, and a demo contact form that captures
            entries and returns visitors to Home.
          </p>

          <p>
            <strong>Technologies:</strong> React, JavaScript,
            HTML, CSS, Git, and GitHub Pages.
          </p>

          <a
            href="https://github.com/Emir-berke/react-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            View source code
          </a>
        </div>
      </article>
    </main>
  )
}

export default Projects