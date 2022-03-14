import React from "react";

const Wishlist=()=>{
    // let arr=[];
    const [value, valueState]=React.useState("")
    const [item, itemState]=React.useState([])
    function typefn(e){
        valueState(e.target.value);
    }
    function addfn(){
        itemState([...item, value])
    }
    return(
        <>
        <h1>Wishlist</h1>
        {item.length<3 ? <><input type="text" placeholder="Enter Item" onChange={typefn}/>
        <button onClick={addfn}>ADD</button></> : <h2>You can not add more than 3 items to wishlist</h2>}
        <div>
            <h2>WIshlist Items</h2>
            {item.map((element)=>(
                <li>{element}</li>
            ))}
        </div>
        </>
    )
}
export default Wishlist;