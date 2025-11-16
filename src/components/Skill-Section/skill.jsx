import './skill.css';

function Skill() {
    return (
        <div id="skill" className="cont">
            <h1 className="hu">Skills</h1>
            <p className="zx">
                Below are some of the skills I have been developing over the last three years.
            </p>

            <div className="all-card">

                {/* Frontend */}
                <div className="cardx">
                    <h2>Frontend</h2>
                    <button className="html-btn">HTML</button>
                    <button className="css-btn">CSS</button>
                    <button className="js-btn">JavaScript</button>
                    <button className="react-btn">React Js</button>
                    
                
</div>
                {/* Backend */}
                <div className="cardz1">
                    <h2>Backend</h2>
                    <button className="java-btn">Java</button>
                    
                    <button className="mysql-btn">MySQL</button>
                    <button className="mongodb-btn">MongoDB</button>
                    
                    <button className="node-btn">Node Js</button>
                   
                </div>
                

                {/* Others */}
                <div className="cardz2">
                    <h2>Others</h2>
                    <button className="git-btn">Git</button>
                    <button className="github-btn">GitHub</button>
                    <button className="netlify-btn">Netlify</button>
                </div>

            </div>
        </div>
        
    );
}

export default Skill;
