
import NavButton from "./NavButton";


export default function NavBar({topic, changeTopic}) {

  return (
    <>
      <nav id="navbar">
        <NavButton isActive={topic === "home"} onClick = {() => changeTopic("home")}>Úvod</NavButton>
        <NavButton isActive={topic === "about"} onClick = {() => changeTopic("about")}>O festivalu</NavButton>
        <NavButton isActive={topic === "links"} onClick = {() => changeTopic("links")}>Rozcestník</NavButton>
        <NavButton isActive={topic === "competition"} onClick = {() => changeTopic("competition")}>Stavební soutěž</NavButton>
        <NavButton isActive={topic === "contacts"} onClick = {() => changeTopic("contacts")}>Kontakty</NavButton>
      </nav>
    </>
  );
}
