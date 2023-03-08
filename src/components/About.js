import React,{Fragment,useState} from 'react'
import "../components/About.css"

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>

    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Skills</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Experience</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>My Story</h2>
      <p>Am a computer and technology addict, wanting to always do normal things in a margically technological way possible.
        All I do is to watch how it was done, and minutes after I am practising on my own. There is always something I don't know...and that is my motivation.
        Most of all I can do was self-taught in all my years.<br/> You will Love me.
      </p>
       <h3>I Am Web Designer And Developer Having TWO Year Of Experience and counting</h3>
       <p>I also do basic computer hardware repairs and system administration as well. I WILL SAY AM THERE GUY FOR ALL "IT" CONSULTATIONS TOO.</p>
    </div>

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>Skills</h2>
      <p>"A winner is someone who recognizes his God-given talents, 
        works his tail off to develop them into skills,
         and uses these skills to accomplish his goals."<br/>
          ~ Larry Bird<br/>
          "Practice is just as valuable as a sale. 
          The sale will make you a living; the skill will make you a fortune."<br/>
           ~ Jim Rohn</p>

       <div className="skills-row">

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>General Coding</h3>
          <div className="progress">
            <div className="progress-bar">
              <span>80%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>React JS</h3>
          <div className="progress">
            <div className="progress-bar React">
              <span>90%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Javascript</h3>
          <div className="progress">
            <div className="progress-bar Javascript">
              <span>85%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>PYTHON</h3>
          <div className="progress">
            <div className="progress-bar Python">
              <span>88%</span>
            </div>
          </div>
        </div>
       </div>

       </div>

    </div>

       {/* Experience Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <div className="exp-column">
      <h3>Web Developer</h3>
      <span>2021-2023</span>
      <p>Began with the knowledge from school and obssesion to Java then moved into raw HTML & CSS with Javascript. Picked up intelligence with WORDPRESS then currently REACT.JS</p>
    </div>

    <div className="exp-column">
      <h3>Hardware & Software repairs</h3>
      <span>2022</span>
      <p>Worked in a big educational Insitution and encounted a couple of basic repairs and so was moved to dedicate my time also to study the computer systems and this made me able to repair a couple of breakdowns and faults in printers and photocopy machines as well.</p>
    </div>

    <div className="exp-column">
      <h3>Microsoft Office</h3>
      <span>2017-2023</span>
      <p>As it may look easy to a couple poeple in the beginning but office is very complied with alot of things to explore and make use of.</p>
    </div>

    <div className="exp-column">
      <h3>Data Science</h3>
      <span>2023</span>
      <p>Due to the increase of Data Analyst on the Job market and my obssesion to technology, I now study PYTHON which is mostly used for Big Data and others by Data Scientist.</p>
    </div>
    
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    </Fragment>
  )
}

export default About