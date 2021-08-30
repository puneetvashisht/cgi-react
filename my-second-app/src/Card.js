import Badge from "./Badge";

function Card(props){
    console.log('Card rendering ....')
    return (
        <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Badge caption="Votes" count="0"></Badge>
            </div>
        </div>
    )
}

export default Card;