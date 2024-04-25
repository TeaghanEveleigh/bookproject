import React from "react";
import "./HoverableLink.css";

function HoverableLink(props) {
    const linkStyle = {
        color: props.color, // Set color from props
        textDecoration: "none",
        fontSize: props.fontSize,
        fontWeight: props.font, // Optionally remove underline
        zIndex: props.zIndex
    };

    return (
        <a
            href={props.to}
            className={props.prefersDark ? "hoverable-link" : "hoverable-link white"}
            style={linkStyle} // Apply inline style
        >
           <div className="align">{props.text}{props.svg}</div> 
        </a>
    );
}

export default HoverableLink;
