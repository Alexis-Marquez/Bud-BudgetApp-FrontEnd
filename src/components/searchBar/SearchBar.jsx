import React from "react";
import"../home/Home.css"
import SearchIcon from '@mui/icons-material/Search';

function searchIcon(){
    return(
        <SearchIcon />
    )
}
const SearchBar = () => {
    return(
        <div className="search-bar">
            <form className="search-bar-form">
                <button type="submit" className="search-bar-button">
                    <SearchIcon></SearchIcon>
                </button>
                <input className="search-bar-input" type="text" placeholder="Search"/>
            </form>
        </div>
    )
}
export default SearchBar;