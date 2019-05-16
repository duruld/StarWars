import React from "react"
import "./Menu.css"

export const Menu = (props) => {
    return(
        <div className="container">
            <ul>
                <li onClick={() => props.click("Home")}>Home</li>
                <li onClick={() => props.click("People")}>People</li>
                <li onClick={() => props.click("About")}>About</li>
            </ul>
        </div>
    )

}