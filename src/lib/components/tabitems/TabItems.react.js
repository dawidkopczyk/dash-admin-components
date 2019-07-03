import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A container for tab items.
 */
export default class TabItems extends Component {
	
	constructor(props) {
        super(props);
	}
  
	render() {	
		const {
			children, 
			setProps, 
			loading_state, 
			...otherProps
		} = this.props;
		
		return(
			<div 
				className="tab-content"
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
		
TabItems.defaultProps = {};

TabItems.propTypes = {
	
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