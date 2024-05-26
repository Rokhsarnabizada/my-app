import React from 'react'

export default function Menu({MenuOpen}) {
    const linkNames=[
        {name : 'Clock', route : '/clock'},
        {name : 'Gallery', route : '/Gallery'},
        {name : 'Calculator', route : '/Calculator'},
    ]

  return (
      <ul className={`menu ${MenuOpen && 'menu-open'}`}>
        {linkNames.map((link, i)=>(
            <li className='navLink' key={i}>
<a href={link.route}> {link.name}  </a>
            </li>
        )
        )}
      </ul>
  )
}
