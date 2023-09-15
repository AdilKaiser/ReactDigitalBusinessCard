import profileImg from '../assets/img/laura-smith.webp'
import emailIcon from '../assets/img/email-icon.webp'
import linkedIcon from '../assets/img/linkedin-icon.webp'

function Info() {
    return (
        <div className="info-section">
            <div className="profile-img-div">
                <img className="profile-img" src={profileImg}/>
            </div>
            <div className="info-text bg-darkgray">
                <div className="name">
                    <h1 className="text-white">Laura Smith</h1>
                </div>
                <div className="designation">
                    <h2 className="text-beige">Frontend Developer</h2>
                </div>
                <div className="website">
                    <p className="text-lightergray">laurasmith.website</p>
                </div>
                <div className="buttons-div d-flex justify-content-center">
                    <div className="email-button-div">
                        <button className="info-button text-darkerblue d-flex justify-content-center align-items-center">
                            <img className="btn-icon-img" src={emailIcon}/>Email
                        </button>
                    </div>
                    <div className="linkedin-button-div">
                        <button className="info-button bg-blue text-white d-flex justify-content-center align-items-center">
                            <img className="btn-icon-img" src={linkedIcon}/>LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info