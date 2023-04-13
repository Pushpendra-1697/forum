import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const links = [
    { to: '/project', title: "Project" },
    { to: '/task', title: "Task" }
  ]
  return (
    <div>
      <NavLink style={{display: "flex", justifyContent: "space-evenly"}}>
        {links && links.map((ele) =>
          <Link to={ele.to}>{ele.title}</Link>
        )}
      </NavLink>
    </div>
  )
}

export default Navbar