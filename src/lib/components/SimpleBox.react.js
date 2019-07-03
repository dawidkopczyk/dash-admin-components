import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Boostrap 4 simple box.
 */
export default class SimpleBox extends Component {
	constructor(props) {
		super(props);
	}
  
	render() {
		const {
			children, 
			title, 
			width, 
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		var SimpleBoxHeader, SimpleBoxBody
		
		SimpleBoxHeader = <div className="card-header no-border">
			<div className="d-flex justify-content-between">
				<h3 className="card-title">{title}</h3>
			</div>
		</div>
		
		SimpleBoxBody = <div className="card-body" style={{overflowY: 'auto', maxHeight: '800px'}}>
			{children}
		</div>	
		
		return (
			<div className = {"col-sm-"+width}>
				<div 
					className="card card-box" 
					{...otherProps}         
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					{SimpleBoxHeader} 
					{SimpleBoxBody} 
				</div>
			</div>
		)       
	} 	
}

SimpleBox.defaultProps = {
	width: 6
};

SimpleBox.propTypes = {
	
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
	* The width of the box, using the Bootstrap grid system. This is
    * used for row-based layouts. The overall width of a region is 12, so the
    * default width of 4 occupies 1/3 of that width. Default: 6.
	*/
	width: PropTypes.number,
	
	/**
	* Box title. 
	*/
	title: PropTypes.string,

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