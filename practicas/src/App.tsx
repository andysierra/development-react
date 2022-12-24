import { Navbar } from "./components/Navbar/Navbar";
import { NavbarLink } from "./components/Navbar/NavItems/NavbarLink";

const App = () => {

  return (
    <>
      <Navbar /*orientation*/>
        <NavbarLink path="/"      label="Practicas"       kind="brand"/>
        <NavbarLink path="/toDo"  label="ToDo"            kind="navLink"/>
        <NavbarLink path="/"      label="Future projects" kind="disabled"/>
      </Navbar>
    </>
  );
}

export default App;