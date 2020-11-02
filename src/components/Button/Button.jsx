import React from "react";
import { Link } from "react-router-dom";

function ActionButton() {
    return (
        <div className="button">
        <Link to="/pledges">
        <button type="button" className="btn btn-info">Pledge to this Project!</button>
        </Link>
        </div>
    )
}

export default ActionButton;

