import { Link, useLocation } from 'react-router'

function Home() {
  const location = useLocation()
  const submission = location.state?.contactSubmission

  return (
    <main>
      <h1>Emir Berke’s Portfolio</h1>

      {submission && (
        <p role="status">
          Thanks, {submission.firstName}! Your form entries were
          captured for this demo. No email was sent.
        </p>
      )}

      <p>Welcome! I am learning web development.</p>
      <p>I am excited to share my projects and skills with you.</p>
      <p>I am hoping to create something amazing!</p>

      <Link to="/about" className="button-link">
        Learn more about me
      </Link>
    </main>
  )
}

export default Home