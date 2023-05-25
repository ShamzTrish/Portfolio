
import divineroImg from '../../images/divinero.png'
import sayHiLogoBlack from '../../images/sayHiLogoBlack.png'

import './Work.css'


const Work = ({ setSeeDivinero }) => {

    const seeWorkHandler = () => {
        setSeeDivinero(true)
        window.scrollTo(0, 0)
    }


    return <>
        <section>
            <h2>My Work</h2>
            <div className="row">
                <article className="col-6 col-12-xsmall work-item">
                    <div className="image fit thumb" onClick={seeWorkHandler} ><img src={divineroImg} alt="" /></div>
                    <h3>FOOD ORDERING APP</h3>
                    <p>Fully functional React App for ordering food online, utilizing powerful features like Pagination, React Context, and more, powered by Firebase's real-time database, for processesing orders in an instant.</p>
                </article>
                <article className="col-6 col-12-xsmall work-item">
                    <a href="https://say-hi-nine.vercel.app/"> <div className="image fit thumb"><img src={sayHiLogoBlack} alt="" /></div></a>
                    <h3>REAL-TIME FULL STACK MESSAGING APP</h3>
                    <p>In this project I used Next.js as well as Upstash Redis as our database, React.js and Tailwind for the user interface, and the code is written in TypeScript.</p>
                </article>
            </div>
            {/* <h3>More things to come!</h3>
            <p> I successfully completed my very first projects fully functional React application. Prior to this, I had completed a full-stack app with NodeJS and Express, but I decided to switch to React as it's more efficient tool. In addition to this project, I've also developed several smaller apps, including Expense Tracker, Todo App, and Netflix Movie Search, which I hovewer decided not to include here. These projects allowed me to practice and refine my React skills, as well as gain experience in different areas of web development. I'm thrilled with my progress and excited to continue building new projects and improving my skills as a developer!</p> */}
        </section>

    </>
}


export default Work