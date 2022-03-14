import React from "react";

const Vegetables=()=>{
        const [tomato, tomatoState]=React.useState(10);
        const [potato, potatoState]=React.useState(8);
        const [carrot, carrotState]=React.useState(5);
        const [onion, onionState]=React.useState(7);

        function quant_t(value){
            tomatoState(tomato+value);
        }
        function quant_c(value){
            carrotState(carrot+value);
        }
        function quant_o(value){
            onionState(onion+value);
        }
        function quant_p(value){
            potatoState(potato+value);
        }
    return (
        <>
        <h3>Tomatoes - {tomato}KGs</h3>
        <button onClick={()=>quant_t(-1)}>-</button><button onClick={()=>quant_t(1)}>+</button>
        <h3>Potatoes - {potato}KGs</h3>
        <button onClick={()=>quant_p(-1)}>-</button><button onClick={()=>quant_p(1)}>+</button>
        <h3>Carrots - {carrot}KGs</h3>
        <button onClick={()=>quant_c(-1)}>-</button><button onClick={()=>quant_c(1)}>+</button>
        <h3>Onions - {onion}KGs</h3>
        <button onClick={()=>quant_o(-1)}>-</button><button onClick={()=>quant_o(1)}>+</button>
        </>
    )
}
export default Vegetables;