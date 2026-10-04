import { Link, useLocation } from 'react-router'

function Home() {
  const location = useLocation()
  const submission = location.state?.contactSubmission

  return (
    <main className="home-page">
      {submission && (
        <p role="status">
          Thanks, {submission.firstName}! Your form entries were
          captured for this demo. No email was sent.
        </p>
      )}

      <div className="home-intro">
        <div>
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I’m Emir Berke Peker.</h1>

          <p className="home-description">
            I’m a web development student learning to build useful,
            user-friendly applications, with an interest in
            AI engineering and data analysis.
          </p>

          <p>
            My goal is to turn ideas into practical tools while
            growing my programming and problem-solving skills.
          </p>

          <div className="home-actions">
            <Link to="/about" className="button-link">
              Learn more about me
            </Link>

          </div>
        </div>

        <img
          src="/MyPhoto.jpeg"
          alt="Emir Berke Peker"
          className="home-photo"
        />
      </div>
    </main>
  )
}

export default Home