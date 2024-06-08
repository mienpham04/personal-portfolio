import styles from "./App.module.css";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Pro5 from "./components/Pro5/Pro5";
import Activity from "./components/Activity/Activity";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Pro5 />
      <About />
      <Education />
      <Experience />
      <Project />
      {/* <Activity /> */}
      <Contact />
    </div>
  );
}

export default App;
