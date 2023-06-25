import './App.css';
import gwen from './gwen.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nikoloz Katsadze</h1>
        <div>
          <img src={gwen} className='gwen' alt="gwenmmm"/>
        </div>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">About</a></li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Projects</a></li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Contact</a></li>
          </ul>
      </header>
      <section id="about">
    <h2>About Me</h2>
    <p>Future web developer.</p>
  </section>
  
  <section id="projects">
    <h2>Projects</h2>
    <div class="project">
      <h3>Project 1</h3>
      <p>This is an example project description.</p>
    </div>
    <div class="project">
      <h3>Project 2</h3>
      <p>This is another example project description.</p>
    </div>
  </section>
  
  <section id="contact">
    <h2>Contact Me</h2>
    <p>Email: n.kats@example.com</p>
    <p>Phone: 123-456-7890</p>
  </section>
    </div>
  );
}

export default App;
