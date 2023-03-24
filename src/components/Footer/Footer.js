import './Footer.css'
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsGithub } from 'react-icons/bs'
import { FaMediumM } from 'react-icons/fa'



const Footer = () => {

	return <>

		<footer id="footer">
			<div className="inner">
				<ul className="icons">
					<li><a href='https://www.facebook.com/profile.php?id=1775273260' target="_blank" rel="noreferrer" className="icon brands"><BsFacebook className="label icon-1" /></a></li>
					<li><a href='https://www.instagram.com/ourr.travels/?hl=cs' target="_blank" rel="noreferrer"  className="icon brands"><BsInstagram className="label icon-2" /></a></li>
					<li><a href='https://twitter.com/PetrPospisil17' target="_blank" rel="noreferrer" className="icon brands"><BsTwitter className="label icon-3" /></a></li>
					<li><a href="https://github.com/ShamzTrish" className="icon brands" target="_blank" rel="noreferrer"><BsGithub className="label icon-4" /></a></li>
					<li><a href="https://medium.com/@posp.petrr/story-about-me-who-i-was-and-where-im-going-356e2efd0a2c" className="icon brands" target="_blank" rel="noreferrer" ><FaMediumM className="label icon-4" /></a></li>
				</ul>
				<ul className="copyright">
					<li>&copy; 2023 Petr Pospisil. All Rights Reserved.</li>
				</ul>
			</div>
		</footer>
	</>
}

export default Footer