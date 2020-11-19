import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          onChange={props.handleSearch(e)}
          type="text"
          className="form-control"
          placeholder="Type in employee to begin"
          id="employee"
        />
      </div>
    </form>
  );
}

export default SearchForm;
