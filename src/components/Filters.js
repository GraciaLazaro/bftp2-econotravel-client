import React from "react";
import { useState } from 'react';
import "../Styles/App.css";
import "../Styles/FiltersStyle.css";

function Filters(){


    return(
            <div className="filters-list">
                <label className="btn btn-filters filter"><input type="checkbox"/>Bike</label>
                <label className="btn btn-filters filter"><input type="checkbox"/>A pie</label>
                <label className="btn btn-filters filter"><input type="checkbox"/>Montaña</label>
                <label className="btn btn-filters filter"><input type="checkbox"/>Bike</label>
                <label className="btn btn-filters filter"><input type="checkbox"/>A pie</label>
                <label className="btn btn-filters filter"><input type="checkbox"/>Montaña</label>
                <label className="btn btn-filters filter"><input type="checkbox"/>Bike</label>
                <label className="btn btn-filters filter"><input type="checkbox"/>A pie</label>
                <label className="btn btn-filters filter"><input type="checkbox"/>Montaña</label>
            </div>
    );
}

export default Filters