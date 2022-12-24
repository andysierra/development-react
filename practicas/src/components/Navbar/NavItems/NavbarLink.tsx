import { NavItem, NavItemProps } from './dto'
import { NavLink, useMatch } from 'react-router-dom';

export const NavbarLink = ({
  className = '', 
  label     = '', 
  path      = '', 
  key       = undefined
}:NavItemProps) => {

  return (
    <NavLink
      className = { className }
      to        = { useMatch({path:path})! }
      end       = { true }
      key       = { key? key : label} >

      {label}

    </NavLink>
  )
}
