import React from 'react';
import ReactTemplate from 'react-template';
import $ from 'jquery';

var Starship = ReactTemplate.create({
  render: function() {
  	var starship = this.props.datas;

    return (
     	<div className="detailInfos">
     		<h2>{starship.name}</h2>
     		<ul>
			    <li>model : {starship.model}</li>
          <li>passengers :{starship.passengers}</li>
          <li>cost_in_credits : {starship.cost_in_credits}</li>
			  </ul>
     	</div>
    );
  }
});

export default Starship;