import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Boostrap 4 value box.
 */
export default class ValueBox extends Component {
	
	constructor(props) {
        super(props);
    }

	render() {
		const {
			value, 
			className, 
			subtitle, 
			elevation, 
			color, 
			icon, 
			href, 
			width, 
			footer_text,
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		var InnerTag, IconTag, FooterTag
		
		InnerTag = <div className='inner'>
			{value}
			<p>{subtitle}</p>
		</div>

		IconTag = <div className='icon'>
			<FontAwesomeIcon icon={icon}/>
		</div>

		if(href!=null) {
			FooterTag = <a href={href} target="_blank" className='small-box-footer'>
				{footer_text}
				<FontAwesomeIcon icon="arrow-circle-right"/>
			</a>
		}else{
			FooterTag = <a href={href} target="_blank" className='small-box-footer' style={{'z-index': 0}}>
				<br></br>
			</a>
		}
  
		return(
			<div 
				className = {"col-sm-"+width}
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				<div 
					className={classnames(
						'small-box',
						color!=null ? `bg-${color}` : false,
						elevation!=null ? `elevation-${elevation}` : false,
						className,
					)}
					{...otherProps}         
				>
					{InnerTag} 
					{IconTag} 
					{FooterTag}
				</div>
			</div>
		)              
	} 
}
		
ValueBox.defaultProps = {
	icon: 'user',
	width: 3,
	footer_text: 'See more '
};

ValueBox.propTypes = {
	
	/**
	* The ID of this component, used to identify dash components
	* in callbacks. The ID needs to be unique across all of the
	* components in an app.
	*/
	id: PropTypes.string,
	
	/**
	* Defines CSS styles which will override styles previously set.
	*/
	style: PropTypes.object,

	/**
	* Often used with CSS to style elements with common properties.
	*/
	className: PropTypes.string,

	/**
	* The value to display in the box. Usually a number or short text.
	*/
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	
	/**
	* The width of the box, using the Bootstrap grid system. This is
    * used for row-based layouts. The overall width of a region is 12, so the
    * default width of 4 occupies 1/3 of that width. Default: 3.
	*/
	width: PropTypes.number,
	
	/**
	* A color for the value box, options: primary, secondary, success, info, warning, danger or NULL.
    * Default: NULL. 
	*/
	color: PropTypes.string,

	/**
	* An icon tag. Default: user.
	*/
	icon: PropTypes.string,
	
	/**
	* Subtitle text.
	*/
	subtitle: PropTypes.string,

	/**
	* An optional URL to link to.
	*/
	href: PropTypes.string,

	/**
	* Text displayed in footer.
	*/
	footer_text: PropTypes.string,
	
	/**
	* Box elevation. 
	*/
	elevation: PropTypes.number,

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