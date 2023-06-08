// CSS imports
import "./avatar.scss"
// Assets imports
import avatarImg from "../../../assets/img/avatar/default-male-dark-avatar.svg";

const employerTest = {
    firstName: "Wilmer",
    lastName: "Blanco",
    job: "Software Engineer III",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    photo: '../../assets/img/avatar.jpeg'
}

function Avatar() {
    return (
        <div className="avatar-content">
            <div className="avatar-description">
                <div className="avatar-img">
                    <img src={employerTest.photo}
                         alt={employerTest.fullName()}
                         onError={(e) => {
                             e.currentTarget.src = avatarImg;
                         }}
                    />
                </div>
                <h2 className="avatar-title">{employerTest.fullName()}</h2>
                <p className="avatar-subtitle">{employerTest.job}</p>
            </div>
        </div>
    );
}

export default Avatar;
