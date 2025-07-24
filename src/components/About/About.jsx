import mo from '../../assets/mo.jpg';
import "./About.scss";

function AboutMe() {
    return (
        
        <div className="about" id="about" >
            <div className="about__content">
                <h1>Hello, I’m <span>Mo Arbash</span></h1>
                <h2>A Passionate Full Stack Web Developer with a Teaching Background 🚀</h2>
                <p>
                    I bring <strong>6+ years of experience</strong> working with
                    <strong> JavaScript</strong> and its modern frameworks like
                    <strong> React.js</strong>, <strong> Vuejs</strong>, <strong> Angular</strong> along with core web technologies
                    (<strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Node.js</strong>, and
                    <strong> MongoDB</strong>). I craft elegant, scalable, and high-performing web applications.
                </p>
                <p>
                    I also have <strong>mid-level expertise</strong> in <strong>C#</strong>,
                    <strong> .NET Core / ASP.NET</strong>, and <strong>PHP/Symfony</strong>,
                    plus <strong>hands-on experience</strong> with <strong>Java</strong>,
                    <strong>Spring Boot</strong>, and <strong>Hibernate</strong>.
                </p>
                <p>
                    With a problem-solving mindset and a love for clean architecture, I don’t just write code —
                    <strong> I craft solutions</strong> that deliver exceptional user experiences.
                </p>
                <button className="hire-btn">  <a href='#contact'>Let’s Work Together</a></button>
            </div>
            <div className="about__image">
                <img src={mo} alt="Muafak Arbash" />
            </div>
        </div>
    );
}

export default AboutMe;
