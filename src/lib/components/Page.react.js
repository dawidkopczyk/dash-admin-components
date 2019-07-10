import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './js/adminlte.js';
import $ from 'jquery';

/**
 * Create a Boostrap 4 dashboard page. 
 * The children of this component are: Navbar, Sidebar, Body, Controlbar and Footer.
 */
export default class Page extends Component {
	
	constructor(props) {
        super(props);		
	}
	
	componentDidMount() {
		this.$el = $(this.el);
		this.$el.Layout();
	}
	
	componentWillUnmount() {
		this.$el.Layout('destroy');
	}	
	
	render() {  
		const {
			children, 
			className, 
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		return(
			<div 
				className={classnames(
					'wrapper',
					className,
				)} 
				ref={el => this.el = el}
				{...otherProps}         
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				{children}
			</div>
		)              
	} 
}
		
Page.defaultProps = {};

Page.propTypes = {
	
	/**
	* The ID of this component, used to identify dash components
	* in callbacks. The ID needs to be unique across all of the
	* components in an app.
	*/
	id: PropTypes.string,

	/**
	* The children of this component.
	*/
	children: PropTypes.node,

	/**
	* Defines CSS styles which will override styles previously set.
	*/
	style: PropTypes.object,

	/**
	* Often used with CSS to style elements with common properties.
	*/
	className: PropTypes.string,
	
	/**
	* Object that holds the loading state object coming from dash-renderer
	*/
	loading_state: PropTypes.shape({
		/**
		* Determines if the component is loading or not
		*/
		is_loading: PropTypes.bool,
		/**
		* Holds which property is loading
		*/
		prop_name: PropTypes.string,
		/**
		* Holds the name of the component that is loading
		*/
		component_name: PropTypes.string
	}),
	
    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
	
};