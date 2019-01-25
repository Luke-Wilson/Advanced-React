// Because we import and use this component in _app.js, it will appear on every page. 

import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';


const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

// The double backtick syntax below is called tagged template literal. We're essentially 
const StyledPage = styled.div`
	background: white;
	color: ${props => props.theme.black};
`;

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
	background: ${props => props.theme.red};
`;

// Here we can set our global styles.
// injectGlobal is actually deprecated, but it is a helper method to write global CSS. It does not return a component, but adds the styles to the stylesheet directly.
injectGlobal`
	@font-face {
		font-family: 'radnika_next';
		src: url('/static/radnikanext-medium-webfont.woff2');
		format('woff2');
		font-weight: normal;
		font-style: normal;
	}}
	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
		font-family: 'radnika_next';
	}
	a {
		text-decoration: none;
		color: ${theme.black};
	}
`


export default class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta></Meta>
					<Header></Header>
					<Inner>
						{this.props.children}
					</Inner>
				</StyledPage>
			</ThemeProvider>
		)
	}
}

//  "rcc" then enter => gives a snippet of React component




// TAGGED TEMPLATE LITERALS
// From https://medium.freecodecamp.org/es6-tagged-template-literals-48a70ef3ed4d
// const myTag = (literals, name) => {
//   console.log('Literals', literals); //Output -> Literals [ 'Hello ', '!' ]
//   console.log('Interpolation', name); //Output -> Interpolation Steve
//   return 'Result from myTag';
// };

// const name = 'Steve';
// const result = myTag `Hello ${name}!`; // << this is kind of like calling a function

// console.log(result); //Output -> Result from myTag
