
import divineroImg from '../../images/divinero.png'
import comingSoonImg from '../../images/comingsoon.avif'

import './Work.css'


const Work = ({ setSeeDivinero }) => {

    const seeWorkHandler = () => {
        setSeeDivinero(true)
        window.scrollTo(0,0)
    }
    

    return <>
        <section>
            <h2>My Work</h2>
            <div className="row">
                <article className="col-6 col-12-xsmall work-item">
                    <div className="image fit thumb" onClick={seeWorkHandler} ><img src={divineroImg} alt="" /></div>
                    <h3>FOOD ORDERING APP</h3>
                    <p>Fully functional React App for ordering food online.</p>
                </article>
                <article className="col-6 col-12-xsmall work-item">
                    <div className="image fit"><img src={comingSoonImg} alt="" /></div>
                    <h3>COMING SOON</h3>
                    <p>Web3 NFT & crypto application in React</p>
                </article>
            </div>
            <h3>More things to come!</h3>
            <p> I successfully completed my very first fully functional React application. Prior to this, I had completed a full-stack app with NodeJS and Express, but I decided to switch to React as it's more efficient tool. In addition to this project, I've also developed several smaller apps, including Expense Tracker, Todo App, and Netflix Movie Search, which I hovewer decided not to include here. These projects allowed me to practice and refine my React skills, as well as gain experience in different areas of web development. I'm thrilled with my progress and excited to continue building new projects and improving my skills as a developer!</p>
        </section>

    </>
}


export default Work