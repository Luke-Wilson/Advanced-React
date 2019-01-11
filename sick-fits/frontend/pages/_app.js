import React from 'react';
import App, { Container } from 'next/app';
import Page from '../components/Page';

// Note that we extend the App class instead of the usual Component class here
class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<Container>
				<Page>
					
					< Component / > 
					{ /* this is the Component prop that is passed to the App component by Next */ }
					{/* It will usually be one of the page components that are stored in the /pages directory. Next automatically handles the routing. */}
					{/* This, in turn, is passed to our Page component as a child, and Page renders it using this.props.children */}

				</Page>
			</Container>
		)
	}
}

export default MyApp;


{/* Example From the docs 
export default class MyApp extends App {
	static async getInitialProps({
		Component,
		ctx
	}) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return {
			pageProps
		}
	}

	render() {
		const {
			Component,
			pageProps
		} = this.props

		return ( 
			<Container>
				<Component { ...pageProps} /> 
			</Container>
		)
	}
} 
*/}