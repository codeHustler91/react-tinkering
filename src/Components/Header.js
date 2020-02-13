import React from 'react'

function Header(props) {
    const sections = ['Home', 'About', 'Platform', 'History', 'Merchandice', 'AOC']
    const buttons = sections.map((section, index)=> 
        <div onClick={props.handleClick}
            key={index}
            className='section-heading' >
            {section}
        </div>
        )

    return(
        <header>{buttons}</header>
    )
}

export default Header;