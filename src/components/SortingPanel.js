import React from 'react';
import "../styles/SortingPanel.css"

const SortingPanel = (props) => {
    const keys = ["title", "author", "price", "year", "genre"]
    const {_handleSortButton} = props;
    const handleSortButton = () => {
        _handleSortButton(document.getElementById("selectElement").value);
    }
    return (
        <div className="sortingPanel">
            <div className="selectPanel">
                <p>Sort by: </p>
                <select id="selectElement" className="select">
                    {keys.map((key) => {
                        return <option>{key}</option>
                    })}
                </select>
            </div>
            <button className="btnSort" onClick={()=>{handleSortButton()}}>Sort</button>
        </div>
    )
};

export default SortingPanel;
