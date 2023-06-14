import {FC} from "react";
import './container.scss'

function Container({children}: FC | any) {
    return (
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export default Container;