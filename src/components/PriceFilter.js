import React, { useState } from 'react';
import "../styles/PriceFilter.css"

const PriceFilter = (props) => {  
    const {_handleFilterButton} = props;
    const [values, setValues] = useState({
        from: 0,
        to: 1000
    })
    const handleFilterButton = () => {
        if(values.from > values.to )
            alert("Value 'from' has to be smaller than 'to'.")
        _handleFilterButton(values);
    }
    return (
        <div className="priceFilter">
            <form className="formPrice">
                <div className="form-control">
                    <label>From: </label>
                    <input 
                        type="number"
                        value={values.from}
                        onChange={(e)=>{setValues({
                            from: parseInt(e.target.value),
                            to: values.to})}}
                    />
                </div>
                <div className="form-control">
                    <label>To: </label>
                    <input 
                        type="number"
                        value={values.to}
                        onChange={(e)=>{setValues({
                            from: values.from,
                            to: parseInt(e.target.value)})}}
                    />
                </div>
            </form>
            <button className="btnSort" onClick={()=>{handleFilterButton()}}>Filter by Price</button>
        </div>
    )
};

export default PriceFilter;
