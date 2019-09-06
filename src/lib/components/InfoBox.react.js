import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Boostrap 4 info box.
 */
export default class InfoBox extends Component {
	
	constructor(props) {
        super(props);
    }
	
	render() {	
		const {
			children, 
			className, 
			value, 
			title, 
			elevation, 
			color, 
			gradient_color, 
			icon, 
			icon_elevation, 
			width, 
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		var IconTag, ContentTag
		
		IconTag = <span 
			className={classnames(
				'info-box-icon',
				icon_elevation!=null ? `elevation-${icon_elevation}` : false
			)}
		>
			<FontAwesomeIcon icon={icon}/>
		</span>
		
		ContentTag = <div className="info-box-content">
			<span className="info-box-text">
				{title}
			</span>		
			<span className="info-box-number">
				{value}
			</span>	
			{children}
		</div>
		
		return (
			<div 
				className = {"col-sm-"+width}
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				<div 
					className={classnames(
						'info-box',
						gradient_color!=null ? `bg-${gradient_color}-gradient` : false,
						gradient_color==null && color!=null ? `bg-${color}` : false,
						elevation!=null ? `elevation-${elevation}` : false,
						className
					)}
					{...otherProps}         
				>
					{IconTag}
					{ContentTag}
				</div>
			</div>
		)               
	} 
}
		
InfoBox.defaultProps = {
	icon: 'star',
    icon_elevation: 3,
	width: 4
};

InfoBox.propTypes = {
	
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
	* The width of the box, using the Bootstrap grid system. This is
    * used for row-based layouts. The overall width of a region is 12, so the
    * default width of 4 occupies 1/3 of that width. Default: 4.
	*/
	width: PropTypes.number,
	
	/**
	* Box title. 
	*/
	title: PropTypes.string,

	/**
	* An icon tag. Default: star.
	*/
	icon: PropTypes.string,

	/**
	* The value to display in the box. Usually a number or short text.
	*/
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),

	/**
	* A color for the info box, options: primary, secondary, success, info, warning, danger or NULL.
    * Default: NULL. 
	*/
	color: PropTypes.string,

	/**
	* A color for the box, options: primary, secondary, success, info, warning, danger or NULL.
    * Default: NULL. 
	*/
	gradient_color: PropTypes.string,

	/**
	* Box elevation. 
	*/
	elevation: PropTypes.number,
	
	/**
	* Icon elevation compared to the main content. Default: 3.
	*/
	icon_elevation: PropTypes.number,

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