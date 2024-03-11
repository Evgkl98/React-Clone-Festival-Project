export default function Contacts({changeTopic}){
    return(
        <div className="content" id="contacts-main">
            <a href="#date"><h2 className="partners-header" id="contacts-link" onClick={() => changeTopic("contacts")}>Kontakty</h2></a>
            <p className="info">Ředitel festivalu: Tomáš Beinhauer</p>
            </div>
    )
}