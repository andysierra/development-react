import React, { Children } from 'react'
import { Routes } from 'react-router-dom';
import { NavItem } from './NavItems/dto';

export const NORMAL = 'NORMAL';
export const HOME = 'HOME';
export const DISABLED = 'DISABLED';

interface props {
  children: NavItem|NavItem[]
}

export const Navbar = ({children = []}:props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Routes>
        <div className="container-fluid">
          {children.length>0? }
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </Routes>
    </nav>
  )
}
