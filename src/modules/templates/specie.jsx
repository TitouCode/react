import React from 'react';
import ReactTemplate from 'react-template';
import $ from 'jquery';

var Specie = ReactTemplate.create({
  render: function() {
  	var specie = this.props.datas;

    return (
     	<div className="detailInfos">
     		<h2>{specie.name}</h2>
     		<ul>
			    <li>height : {specie.average_height}</li>
          <li>hair_color :{specie.hair_color}</li>
          <li>skin_color : {specie.skin_color}</li>
          <li>eye_color : {specie.eye_color}</li>
          <li>birth_year : {specie.birth_year}</li>
          <li>average_lifespan : {specie.average_lifespan}</li>
          <li>language : {specie.language}</li>
			   </ul>
     	</div>
    );
  }
});

export default Specie;