import React from 'react';
import $ from 'jquery';
import People from './templates/people.jsx';
import Film from './templates/film.jsx';
import Specie from './templates/specie.jsx';
import Planet from './templates/planet.jsx';
import Vehicle from './templates/vehicle.jsx';
import Starship from './templates/starship.jsx';


var SWDetails = React.createClass({
	render: function(){
		return (
			<div className="swDetails">
				<h1>Voici les information liées à {this.props.params.itemName}</h1>
				<DetailBox itemType={this.props.params.itemType} url={"http://swapi.co/api/" + this.props.params.itemType + "/" + this.props.params.itemName+"/"}/>
			</div>
		);
	}
});

var DetailBox = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadDatas();
	},
	loadDatas: function(){
		$.ajax({
		  url: this.props.url,
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
				<DetailsList data={this.state.data} itemType={this.props.itemType }/>
			</div>
		);
	}
});

var DetailsList = React.createClass({
	chooseTpl : function(datas){
		var tplNames = ["planets","people","species","starships","films", "vehicles"],
			tpl = [
				<Planet datas={datas}></Planet>,
				<People datas={datas}></People>,
				<Specie datas={datas}></Specie>,
				<Starship datas={datas}></Starship>,
				<Film datas={datas}></Film>,
				<Vehicle datas={datas}></Vehicle>
			]
		return tpl[tplNames.indexOf(this.props.itemType)];
		
	},
	render: function(){
		var tplToRender = this.chooseTpl(this.props.data);
		return (
			<div className="detailsList">
				{tplToRender}
			</div>
		);
	}
});


export default SWDetails;