export default function NavButton({isActive, children, ...props}){
    return(
        <>
        <button className = {isActive ? "active" : "nb-buttons"} {...props}>{children}</button>
        </>
    )
}