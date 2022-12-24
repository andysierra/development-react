import { NavLink } from 'react-router-dom';

export const Navbar = ({ links = [], className = "" }) => {

  const setActive = isActive => isActive? 'text-decoration-underline':''

  if(!links || links.length<1) return <></> // empty
  return (
    <>
      <nav className={`nav ${className}`}>
        {
          links.map (
            link => 
              <NavLink
                className = { ({isActive})=>setActive(isActive)+' nav-link ' }
                to        = { link.to }
                end       = { true }
                key       = { link.id || links.indexOf(link) }>
                  
                {link.label}
              </NavLink>
          )
        }
      </nav>
    </>
  );
}