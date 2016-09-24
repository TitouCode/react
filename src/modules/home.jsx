'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var itemLoaded = 0;


var Home = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadDatas();
	},
	loadDatas: function(datasToLoad){
		$.ajax({
		  url: "http://swapi.co/api/",
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
		    this.setState({data: data});
		  }.bind(this),
		  error: function(xhr, status, err) {
		    console.error(this.props.url, status, err.toString());
		  }.bind(this)
		});
	},
	render: function(){
		return (
			<div>
				<HomeList data={this.state.data}/>
			</div>
		);
	}
});


var HomeList = React.createClass({
	render: function(){
		var items = this.props.data;
		return (
			<div className="itemList">
				<ul>
					<li><a href="#/films">{items.films}</a></li>
					<li><a href="#/starships">{items.starships}</a></li>
					<li><a href="#/people">{items.people}</a></li>
					<li><a href="#/species">{items.species}</a></li>
					<li><a href="#/vehicles">{items.vehicles}</a></li>
					<li><a href="#/planets">{items.planets}</a></li> 
				</ul>
			</div>
		);
	}
});


export default Home;