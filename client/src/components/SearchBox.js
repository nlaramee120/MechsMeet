import React, { useState } from 'react'
import './SearchBox.css'
import { Link } from 'react-router-dom';

function SearchBox({ placeholder, data }) {
    const [filteredData, SetFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.firstName.toLowerCase().includes(searchWord.toLowerCase())
        })
        if (searchWord === "") {
            SetFilteredData([])
        } else {
            SetFilteredData(newFilter);
        }
    }
    return (
        <div className='search'>
             <h3>Search for a mechanic! </h3>   
            <div className="searchInputs">
                <input type="text" placeholder={placeholder}
                    onChange={handleFilter} />
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 5).map((value, key) =>  {
                        return  < div key={value._id} className="dataItem">
                            <Link className="searchLinks"

                                to={`/profiles/${value._id}`} style={{ textDecoration: 'none', color: ' #FFFF' }}
                            >
                                {value.firstName}
                            </Link> 
                        </div>;

                    })}
                </div>
            )}
        </div>
    )

}
export default SearchBox;