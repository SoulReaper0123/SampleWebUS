function Student(props){
    return(
        <>
        <p>Name: {props.name}</p>
        <p>Section: {props.section}</p>
        <p>Age: {props.age}</p>
        <p>Gwapo ba?: {props.isgwapo ? "YES" : "NO"}</p>
        </>

    );
}

export default Student