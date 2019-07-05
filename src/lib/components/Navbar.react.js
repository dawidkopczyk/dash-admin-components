import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './js/adminlte.js';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Create a Boostrap 4 dashboard navbar.
 */
export default class Navbar extends Component {
	
	constructor(props) {
        super(props);
	}

	componentDidMount() {
		this.$el = $(this.el);
		this.$el.PushMenu();
	}
	
	componentWillUnmount() {
		this.$el.PushMenu('destroy');
	}
			
	render() {
		const {
			children, 
			text,
			skin,
			status,
			border,
			sidebar_icon,
			controlbar_icon,
			fixed,
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		var BorderCl='', FixedCl='', HideSidebarCl, HideControlbarCl
		
		if(border) {
			BorderCl = " border-bottom"
		}

		if(fixed) {
			FixedCl = " fixed-top"
		}
		
		return(
			<nav 
				className={"main-header navbar navbar-expand bg-" + status + " navbar-" + skin + BorderCl + FixedCl} 
				ref={el => this.el = el}
				{...otherProps}         
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a href="#" className="nav-link" data-widget="pushmenu">
							<FontAwesomeIcon icon={sidebar_icon}/>
						</a>					
					</li>
				</ul>
				{text}
				<ul className="navbar-nav ml-auto">
				    {children}
					<li className="nav-item">
						<a id = "controlbar-toggle" href="#" className="nav-link" data-widget="control-sidebar" data-slide="true">
							<FontAwesomeIcon icon={controlbar_icon}/>
						</a>					
					</li>
				</ul>
			</nav>
		)              
	} 
}
		
Navbar.defaultProps = {
	skin: "light", 
	status: "white", 
	border: true,
    sidebar_icon: "bars",
    controlbar_icon: "th",
	fixed: false
};

Navbar.propTypes = {
	
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
	* Text to display next to sidebar toogle.
	*/
	text: PropTypes.string,

	/**
	* Navbar skin, options dark or light. Default: light.
	*/
	skin: PropTypes.string,

	/**
	* A color for the navbar, options: primary, secondary, success, info, 
	* warning, danger, white or light-grey. Default: white.
	*/
	status: PropTypes.string,
	
	/**
	* Whether to separate the navbar and body by a border. Default: True.
	*/
	border: PropTypes.bool,

	/**
	* Icon of the sidebar toggle. Default: bars.
	*/
	sidebar_icon: PropTypes.string,

	/**
	* Icon to toggle the controlbar. Default: th.
	*/
	controlbar_icon: PropTypes.string,
	
	/**
	* Whether the navbar is fixed to the top. Default: False.
	*/
	fixed: PropTypes.bool,
	
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