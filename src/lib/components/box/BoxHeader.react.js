import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Create a Boostrap 4 box header.
 */
export default class BoxHeader extends Component {
	
	constructor(props) {
		super(props);
	}
  
	render() {
		const {
			children, 
			header_border, 
			title,			
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		return (
			<div 
				className={header_border ? "card-header" : "card-header no-border"} 
				{...otherProps}         
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				<h3 className="card-title">{title}</h3>
				<div className="card-tools">
					{children}
				</div>
			</div>
		)       
	} 	
}

BoxHeader.defaultProps = {
	title: "\u200C",
	header_border: true
};

BoxHeader.propTypes = {
	
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
	* Box title.
	*/
	title: PropTypes.string,
	
	/**
	* Whether to display a border between the header and body. Default: True. 
	*/
	header_border: PropTypes.bool,

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