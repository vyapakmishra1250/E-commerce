import React from "react";
import { NavLink } from "react-router-dom";
import '../Styles/footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
  return (<>
         <section>
		<div className="footer bg-dark">
			<div className="footer-content">
				<div className="footer-refs-content-1">
					<h5>About</h5>
	                <ul>
	                	<li><NavLink to="">Contact Us</NavLink></li>
	                	<li><NavLink to="">About Us</NavLink></li>
	                	<li><NavLink to="">Careers</NavLink></li>
	                	<li><NavLink to="">E-kart</NavLink></li>
	                	<li><NavLink to="">Wholesale</NavLink></li>
	            	</ul>
				</div>
        <div className="footer-refs-content-2">
					<h5>POLICY</h5>
	                <ul>
	                	<li><NavLink to="">Return Policy</NavLink></li>
	                	<li><NavLink to="">Term Of Use</NavLink></li>
	                	<li><NavLink to="">Security</NavLink></li>
	                	<li><NavLink to="">Privacy</NavLink></li>
	                	<li><NavLink to="">Sitemap</NavLink></li>
	            	</ul>
				</div>
        <div className="footer-refs-content-3">
					<h5>HELP</h5>
	                <ul>
	                	<li><NavLink to="">Payments</NavLink></li>
	                	<li><NavLink to="">Shipping</NavLink></li>
	                	<li><NavLink to="">Return</NavLink></li>
	                	<li><NavLink to="">FAQ</NavLink></li>
	                	<li><NavLink to="">Report</NavLink></li>
	            	</ul>
				</div>
        <div className="footer-refs-content-4">
					<h5>SOCIAL</h5>
	                <ul>
	                	<li><NavLink to="">Facebook</NavLink></li>
	                	<li><NavLink to="">Twitter</NavLink></li>
	                	<li><NavLink to="">Youyube</NavLink></li>
	                	<li><NavLink to="">Instagram</NavLink></li>
                    <li><NavLink to="">Instagram</NavLink></li>
	            	</ul>
				</div>
				<div className="footer-refs-content-5">
					<h5>Mail Us</h5>
		            <ul>
		                <li><NavLink to="">Mail: vyapakmishra25@gmail.com</NavLink></li>
                    <li><NavLink to="">Telephone: +91-63388394238</NavLink></li>
		            </ul>
				</div>
			</div>
			<div className="lower-footer">
				<div className="lower-footer-content">
					<div id="footer-align-left" className="text-center">
						All Rights Reserved. © 2021 Mishra & E-kart pvt.ltd
					</div>
					<div id="footer-align-right">
						<NavLink to=""><FacebookIcon style={{ color: 'red[500]' }}/></NavLink>
						<NavLink to=""><TwitterIcon/></NavLink>
						<NavLink to=""><InstagramIcon/></NavLink>
						<NavLink to=""><YouTubeIcon/></NavLink>
					</div>
				</div>
			</div>
		</div>
	</section>
  </>);
};

export default Footer;