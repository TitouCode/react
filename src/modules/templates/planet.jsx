import React from 'react';
import ReactTemplate from 'react-template';
import $ from 'jquery';

var Planet = ReactTemplate.create({
  render: function() {
  	var planet = this.props.datas;

    return (
     	<div className="detailInfos">
     		<h2>{planet.name}</h2>
     		<ul>
			    <li>population : {planet.population}</li>
			    <li>diametre : {planet.diameter}</li>
			    <li>orbital_period :{planet.orbital_period}</li>
			   </ul>
     	</div>
    );
  }
});

export default Planet;