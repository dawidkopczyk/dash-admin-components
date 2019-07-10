import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
			className, 
			header_border, 
			title,
			collapsible,
			collapsed,
			closable,			
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;

		var CloseButton, CollapseButton
		
		if(closable) {
			CloseButton = <button 
				type="button" 
				className="btn btn-tool" 
				data-widget="remove" 
			>
				<FontAwesomeIcon icon='times'/>
			</button> 
		}

		if(collapsible) {
			CollapseButton = <button 
				type="button" 
				className="btn btn-tool" 
				data-widget="collapse" 
			>
				<FontAwesomeIcon icon={collapsed ? "plus" : "minus"}/>
			</button>
		}
				
		return (
			<div 
				className={classnames(
					'card-header',
					{'no-border': !header_border},
					className
				)}
				{...otherProps}         
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				<h3 className="card-title">{title}</h3>
				<div className="card-tools">
					{children}
					{CollapseButton}
					{CloseButton}
				</div>
			</div>
		)       
	} 	
}

BoxHeader.defaultProps = {
	title: "\u200C",
	header_border: true,
	collapsible: true,
	closable: false
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
	* Often used with CSS to style elements with common properties.
	*/
	className: PropTypes.string,
	
	/**
	* Box title.
	*/
	title: PropTypes.string,
	
	/**
	* Whether to display a border between the header and body. Default: True. 
	*/
	header_border: PropTypes.bool,

	/**
	* If True, display a button in the upper right that allows
	* the user to collapse the box. Default: True.
	*/
	collapsible: PropTypes.bool,

	/**
	* Whether to start collapsed. Default: False.
	*/
	collapsed: PropTypes.bool,
	
	/**
	* If True, display a button in the upper right that allows the user to close the box.
	* Default: False.
	*/
	closable: PropTypes.bool,
	
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