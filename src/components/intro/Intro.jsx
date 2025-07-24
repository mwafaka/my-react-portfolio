import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

// Import images
import manImage from '../../assets/m.jpeg';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import jsLogo from '../../assets/js.png';
import reactLogo from '../../assets/react.png';
import nodeLogo from '../../assets/node.png';
import pythonLogo from '../../assets/python.png';
import mongoLogo from '../../assets/mongo.png';
import java from '../../assets/java.png';
import net from '../../assets/.net.png';

function Intro() {
    const textRef = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            init(textRef.current, {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Full Stack Web Developer']
            });
        }, 1000); // Delay matches the fadeIn animation

        return () => clearTimeout(timeout); // Cleanup
    }, []);

    return (
        <div className='Intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={manImage} alt="Man" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I’m</h2>
                    <h1>Mwafak (Mo) Arbash</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                </div>
            </div>

            <div className="bubbles">

                <img src={htmlLogo} alt="HTML" />
                <img src={net} alt="net" className="rounded-[24px]" />
                <img src={java} alt="java" />
                <img src={cssLogo} alt="CSS" />
                <img src={jsLogo} alt="JavaScript" />
                <img src={reactLogo} alt="React" />
                <img src={nodeLogo} alt="Node.js" />
                <img src={pythonLogo} alt="Python" />
                <img src={mongoLogo} alt="MongoDB" />
            </div>
        </div>
    );
}

export default Intro;
