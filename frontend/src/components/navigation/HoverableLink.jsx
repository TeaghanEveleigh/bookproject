import React from "react";
import "./HoverableLink.css";

function HoverableLink(props) {
    return (
        <a
            href={props.to}
            className={props.prefersDark ? "hoverable-link" : "hoverable-link white"}
        >
            {props.text}
        </a>
    );
}
export default HoverableLink;