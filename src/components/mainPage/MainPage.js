import Footer from '../Footer/Footer'
import './MainPage.css'
import portraitPic from '../../images/77.jpg'


const MainPage = () => {
	return <>

		{/* <!-- Header --> */}
		<header id="header">
			<div className="inner">
				<img src={portraitPic} alt="" className="image avatar" />
				<h1><strong>Hi, I am Petr! </strong><br />
				A lifelong learner and explorer, passionate about staying fit and mastering the art of coding.</h1>
			</div>
			<Footer />
		</header>

	</>
}


export default MainPage