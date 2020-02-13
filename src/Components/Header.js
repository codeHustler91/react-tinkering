import React from 'react'

function Header(props) {
    const sections = ['Home', 'About', 'Platform', 'History', 'Merchandice', 'AOC']
    const buttons = sections.map((section, index)=> 
        <div onClick={props.handleClick}
            className='section-heading'
            key={index} >
            {section}
        </div>
        )

    return(
        <header>{buttons}</header>
    )
}

export default Header;