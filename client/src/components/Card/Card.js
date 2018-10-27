import React from "react";
import './card.css';


export const Card = (props) => (
  <main>
  <div className="card">
    <div className="card-header bg-info" style={{color: '#fff'}}>
      <h5>{props.title}</h5>
    </div>
    <div className="card-body">
      {props.children}
    </div>
  </div>
  </main>
);
