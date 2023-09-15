import twitterIcon from '../assets/img/twitter-icon.webp'
import facebookIcon from '../assets/img/facebook-icon.webp'
import instagramIcon from '../assets/img/instagram-icon.webp'
import githubIcon from '../assets/img/github-icon.webp'

function Footer() {
    return(
        <footer className="card-footer bg-darkergray">
            <div className="icons d-flex justify-content-center">
                <div className="twitter-icon footer-icons-pe">
                    <img className="twitter-icon-img" src={twitterIcon}/>
                </div>
                <div className="facebook-icon footer-icons-pe">
                    <img className="facebook-icon-img" src={facebookIcon}/>
                </div>
                <div className="instagram-icon footer-icons-pe">
                    <img className="instagram-icon-img" src={instagramIcon}/>
                </div>
                <div className="github-icon">
                    <img className="github-icon-img" src={githubIcon}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer