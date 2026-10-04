import { Link } from 'react-router'
<Link to="/about" className="button-link">
  Learn more about me
</Link>
function Home() {
  return (
    <main>
      <h1>Emir Berke’s Portfolio</h1>
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