import React from 'react';
import ReactTemplate from 'react-template';
import $ from 'jquery';

var People = ReactTemplate.create({
  render: function() {
  	var chara = this.props.datas,
  		tplHW, HWUrl;
  	//N'arrive pas a rendre ca.. hmm..	
  	setTimeout(function(){
  		// tplHW = chara.homeworld.split('/');
  		// HWUrl = tplHW[tplHW.length - 3] +'/'+tplHW[tplHW.length - 2];  	
  	},500);


    return (
     	<div className="detailInfos">
     		<h2>{chara.name}</h2>
     		<ul>
			    <li>height : {chara.height}</li>
			    <li>mass : {chara.mass}</li>
			    <li>hair_color :{chara.hair_color}</li>
			    <li>skin_color : {chara.skin_color}</li>
			    <li>eye_color : {chara.eye_color}</li>
			    <li>birth_year : {chara.birth_year}</li>
			    <li>gender : {chara.gender}</li>
			    <li>homeworld : <a href={'/'+HWUrl}>{chara.homeworld}</a></li>	
			</ul>
     	</div>
    );
  }
});

export default People;