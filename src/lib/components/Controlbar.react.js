import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './js/adminlte.js';
import $ from 'jquery';

/**
 * Create a Boostrap 4 dashboard right sidebar.
 */
export default class Controlbar extends Component {
	
	constructor(props) {
        super(props);
	}

	componentDidMount() {
		this.$el = $(this.el);
		this.$el.ControlSidebar();
	}
	
	componentWillUnmount() {
		this.$el.ControlSidebar('destroy');
	}	
	
	render() {
		const {
			children,
			disable,
			title, 
			skin, 
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		var HideCl=''
		
		if(disable) {
			HideCl = ' hide'
		}
		
		return(
			<aside 
				className={"control-sidebar control-sidebar-"+skin+HideCl} 
				ref={el => this.el = el} 
				{...otherProps}
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				<div className='p-3'>
					<h5>{title}</h5>
					{children}
				</div>
			</aside>
		)              
	} 
}
		
Controlbar.defaultProps = {
	skin: "dark",
	disable: false
};

Controlbar.propTypes = {
	
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
	* Whether controlbar and controlbar toogle should be visible. Default: True.
	*/
	disable: PropTypes.bool,
	
	/**
	* Controlbar title.
	*/
	title: PropTypes.string,
	
	/**
	* Controlbar skin, options: dark or light. Default: dark.
	*/
	skin: PropTypes.string,
	
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