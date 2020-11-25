import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({handleSearch}) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          onChange={e=>handleSearch(e)}
          type="search"
          className="form-control"
          placeholder="Type in employee to begin"
          id="employee"
        />
      </form>
    </div>
  );
}

export default SearchForm;
