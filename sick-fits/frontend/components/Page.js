// Because we import and use this component in _app.js, it will appear on every page. 

import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';

export default class Page extends Component {
	render() {
		return (
			<div>
				<Meta></Meta>
				<Header></Header>
				{this.props.children}
			</div>
		)
	}
}

//  "rcc" then enter => gives a snippet of React component