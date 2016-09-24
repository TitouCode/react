import React from 'react';
import ReactTemplate from 'react-template';
import $ from 'jquery';

var Film = ReactTemplate.create({
  render: function() {
  	var film = this.props.datas,
  		tplHW, HWUrl;

  	//N'arrive pas a rendre ca.. hmm..	
  	setTimeout(function(){
  		tplHW = tpl.homeworld.split('/');
  		HWUrl = tplHW[tplHW.length - 3] +'/'+tplHW[tplHW.length - 2];  	
  	},500);


    return (
     	<div className="detailInfos">
     		<h2>{film.title}</h2>
     		<ul>
			    <li>n° : {film.episode_id}</li>
			    <li>Carton début : {film.opening_crawl}</li>
			    <li>director :{film.director}</li>
			    <li>producer : {film.producer}</li>
			    <li>sortie le : {film.release_date}</li>
			   </ul>
     	</div>
    );
  }
});

export default Film;