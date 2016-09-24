import React from 'react';
import ReactTemplate from 'react-template';
import $ from 'jquery';

var Vehicle = ReactTemplate.create({
  render: function() {
  	var vehicle = this.props.datas;

    return (
     	<div className="detailInfos">
     		<h2>{vehicle.name}</h2>
     		<ul>
			    <li>model : {vehicle.model}</li>
          <li>passengers :{vehicle.passengers}</li>
          <li>cost_in_credits : {vehicle.cost_in_credits}</li>
			  </ul>
     	</div>
    );
  }
});

export default Vehicle;