import { useState } from "react";

function Mycomponent(){

    const[name, setName] = useState('');
    const[quantity, setQuantity] = useState(0);
    const[comment, setComment] = useState();
    const[payment, setPayment] = useState();

    function handleNameChange(event){
        setName(event.target.value)
    }
    
    const incrementQuantity=()=>(
        setQuantity(quantity +1)
    )

    const descrementQuantity=()=>(
        setQuantity(quantity -1)
    )

    function handleComment(event){
        setComment(event.target.value)

    }

    function handlepayment(){
        setPayment(event.target.value)
    }


    return(
        <div>
        <p>Name</p>
        <input value={name} onChange={handleNameChange} placeholder="Enter Name"/>
        <p>Quantity</p>
        <p>{quantity}</p>
        <button onClick={descrementQuantity}>-</button>
        <button onClick={incrementQuantity}>+</button>
       
        <br></br>
        <br></br>
        <p>Comment</p>
        <textarea value={comment} onChange={handleComment} placeholder="Enter Comment"></textarea>
        <p>{comment}</p>
        <p>Payment Method</p>
        <select value={payment} onChange={handlepayment}>
        <option value="">Select Method</option>
        <option value="gcash">Gcash</option>
        <option value="paymaya">Paymaya</option>
        <option value="cod">COD</option>
        </select>
        </div>
    );
}

export default Mycomponent