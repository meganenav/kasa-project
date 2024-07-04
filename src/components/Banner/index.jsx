//Création du composant réutilisable de la bannière avec ses propriétés titre et page pour créer une class personnalisée
function Banner(props) {
    const page = props.page
    const title = props.title
    return (
        <div className={ `banner-block page-${page}` }>
            { title && <h1>{ title }</h1> }
        </div>
    )
}
export default Banner