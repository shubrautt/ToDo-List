import Dropdown from 'rc-dropdown';
import "rc-dropdown/assets/index.css";
import { useState } from 'react';

const { v4: uuidv4 } = require('uuid');

const categories = ["first", "second", "third"];

const CategoryDropdown = ({ category, setCategory}) => {

    function chooseOption(e) {
        setCategory(e.target.value)
    }

    return (<Dropdown
        trigger={["click"]}
        overlay={
            <div className="dropdownList">
                {categories.map(c => {
                    const id = uuidv4()
                    return <button id = {id} value={c} className="dropdownOption" onClick={chooseOption}>{c}</button>
                })}
          </div>
        }>
        <button className="dropdownBtn">{category}</button>
      </Dropdown>
    )
};

export default CategoryDropdown;