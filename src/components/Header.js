import React from "react"

function Header({whichMode, onDarkModeClick}){
    return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {whichMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header