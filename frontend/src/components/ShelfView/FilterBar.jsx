import React from "react";
import "./FilterBar.css";

function FilterBar({ isDarkMode, shelfTitle }) {
  return (
    <div className={`container top-things ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className="titleofpage">{shelfTitle}</h1>
      <div className="sort-container">
        <form id="sort-form" method="post" action="/sort">
          <select id="sort-options" name="sort-option" onChange={() => document.getElementById('sort-form').submit()}>
            <option value="">Sort By...</option>
            <option value="title-reverse">Title A-Z</option>
            <option value="date-oldest">Last edited</option>
            <option value="title">Title Z-A</option>
            <option value="date">Oldest edited</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default FilterBar;