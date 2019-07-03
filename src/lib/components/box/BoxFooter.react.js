import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Create a Boostrap 4 box footer.
 */
export default class BoxFooter extends Component {
	
	constructor(props) {
		super(props);
	}
  
	render() {
		const {
			children, 
			overflow,  
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		return (
			<div 
				className="card-footer" 				
				style={overflow ? {overflowY: 'auto', maxHeight: '500px'} : null} 
				{...otherProps}         
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				{this.props.children}
			</div>
		)       
	} 	
}

BoxFooter.defaultProps = {
	overflow: false
};

BoxFooter.propTypes = {
	
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
	* Whether to enable overflow in the card body and footer. Default: False.
	*/
	overflow: PropTypes.bool,

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