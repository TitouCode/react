'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var itemLoaded = 0;

var Swapi = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Voici les éléments tirées de swapi</h1>
				<ItemBox url={"http://swapi.co/api/"+this.props.params.itemType+"/"}/>
			</div>
		);
	}
});


var ItemBox = React.createClass({
	oldState: [],
	getInitialState: function() {
		return {data: [], pages: {prev:null,next:null}};
	},
	componentDidMount: function() {
		//re-init array after page change else it kepts values
		this.oldState = [];
		this.loadDatas();
	},
	loadDatas: function(datasToLoad){
		$.ajax({
		  url: typeof datasToLoad == 'undefined'? this.props.url : datasToLoad ,
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
		  	//keep only result and pages
		  	this.oldState.push(data.results);
		  	let more = null,
		  		less = null;

		  	if(data.next != null) {
		  		more = this.cleanUrlForAjax(data.next);	
		  	}
		  	if(data.previous != null){
		  		less = this.cleanUrlForAjax(data.previous);	
		  	}

		  	let navs = {less:less,more:more};
		    this.setState({data: this.oldState, pages: navs});
		  }.bind(this),
		  error: function(xhr, status, err) {
		    console.error(this.props.url, status, err.toString());
		  }.bind(this)
		});
	},
	cleanUrlForAjax: function(oldUrl){
		var tmpUrl = oldUrl;
	  	tmpUrl = tmpUrl.split('?');

	  	let tmpUrlStart = tmpUrl[0],
	  		tmpEnd = tmpUrl[1].split('&'),
	  		tmpUrlEnd = tmpEnd[0].indexOf('_=') == 0 ? tmpEnd[1] : tmpEnd[0], 
	  		url = tmpUrlStart +'?'+ tmpUrlEnd;
	  	return url;
	},
	handleClick: function(e){
		var dataPage = $(e.currentTarget).attr("data-page"),
			currId = $(e.currentTarget).attr("id");

		if(typeof dataPage == "undefined") return false;

		if(currId == "less"){
			this.oldState = this.oldState.slice(0,(this.oldState.length - 1));
			
			let tmpPage = dataPage.split("&")[0];
			tmpPage = tmpPage.split("=");

			let tmpPageNumber = parseInt(tmpPage[1]),
				less = tmpPageNumber == 1 ? null : tmpPage[0] + "=" + (tmpPageNumber - 1),
				more = tmpPage[0] + "=" + (tmpPageNumber + 1),
				navs = {less:less,more:more};
			
			this.setState({data: this.oldState, pages: navs})
		}else{
			this.loadDatas(dataPage);	
		}

	},
	render: function(){
		var pages = this.state.pages,
			boundClick = this.handleClick;
		return (
			<div>
				<ItemList data={this.state.data}/>
				<Navigation pages={pages} onClick={this.handleClick}/>
			</div>
		);
	}
});


var ItemList = React.createClass({
	render: function(){
		var items = this.props.data.map(function(datas){
			var data = datas.map(function(item){
				var urlParts = item.url.split('/');
				return (
					<Item key={itemLoaded++} url={item.url} href={urlParts[4]+"/"+urlParts[5]}>
						{item.name}
					</Item>
				);
			});
			return data;
		});
		return (
			<div className="itemList">
				{items}
			</div>
		);
	}
});

var Navigation = React.createClass({
	render: function(){
		return (
			<div className="navButtons">
	    		<button id="less" data-page={this.props.pages.less} onClick={this.props.onClick}>Less</button>
				<button id="more" data-page={this.props.pages.more} onClick={this.props.onClick}>More</button>
			</div>
		);
	}
});

var Item = React.createClass({
	render: function(){
		return (
			<div className="item">
				<a href={'#/' + this.props.href}>{this.props.children}</a>
			</div>
		);
	}
});


// ReactDOM.render(<Swapi/>, document.getElementById('container'));

export default Swapi;