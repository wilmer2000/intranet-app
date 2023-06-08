// CSS Import
import "./slide.scss";
// Assets import
import slideAvatar from '../../assets/img/welcome-slide.svg'

function Slide() {
    return (
        <div className="slide-content">
            <h2 className="slide-title">
                Welcome to the Intranet,
                <br/>
                <span>Wilmer Blanco</span>
            </h2>
            <img className="slide-avatar" src={slideAvatar}/>
        </div>
    );
}

export default Slide;
