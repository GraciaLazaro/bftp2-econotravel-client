import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/PageHeaderStyle.css";
import "../Styles/FiltersStyle.css";

function PageHeader(props){
    return(
        <div className="page-name">
            <h1 className="h1">Experiences</h1>
            <div className="align-right">
                <button className="btn btn-filters"  >
                    Select Filters
                </button>
            </div>
        </div>
    );
}

export default PageHeader