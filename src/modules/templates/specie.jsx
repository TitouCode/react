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
          <li>hair_color :{specie.hair_colors}</li>
          <li>skin_color : {specie.skin_colors}</li>
          <li>eye_color : {specie.eye_colors}</li>
          <li>average_lifespan : {specie.average_lifespan}</li>
          <li>language : {specie.language}</li>
			   </ul>
     	</div>
    );
  }
});

export default Specie;