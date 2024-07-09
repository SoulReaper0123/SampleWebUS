function Cards(props){
    return(
        <div className="card">
            <img className="card-img" src={props.img} alt=""style={{ width: '500px', height: 'auto' }}/>
            <h2>Car Brand: {props.brand}</h2>
            <p>Car Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Is it Brand New? {props.isbrandnew ? "Brand New" : "Second Hand"}</p>
        </div>
    );
}

export default Cards

