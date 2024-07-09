function Members(props){
    return(
        <div className="card">
            <img className="card-img" src={props.img} alt=""style={{ width: '500px', height: 'auto' }}/>
            <h2>{props.name}</h2>
            <p>{props.pos}</p>
            <p>{props.def}</p>
      
        </div>
    );
}

export default Members

