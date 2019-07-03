import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Boostrap 4 info box.
 */
export default class Icon extends Component {
	
	constructor(props) {
        super(props);
    }
	
	render() {
		const {
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		return (
			<FontAwesomeIcon 
				{...otherProps}
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			/>
		)               
	} 
}
		
Icon.defaultProps = {
	border: false,
	className: '',
	fixedWidth: false,
	inverse: false,
	listItem: false,
	pulse: false,
	spin: false,
	symbol: false,
	title: ''
};

Icon.propTypes = {
	
	/**
	* The ID of this component, used to identify dash components
	* in callbacks. The ID needs to be unique across all of the
	* components in an app.
	*/
	id: PropTypes.string,

	/**
	* FontAwesome setting: border. Default: False.
	*/
	border: PropTypes.bool,

	/**
	* FontAwesome setting: additional class.
	*/
	className: PropTypes.string,

	/**
	* FontAwesome setting: mask.
	*/
	mask: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
		PropTypes.string
	]),

	/**
	* FontAwesome setting: fixed witdh. Default: False.
	*/
	fixedWidth: PropTypes.bool,

	/**
	* FontAwesome setting: inverse. Default: False.
	*/
	inverse: PropTypes.bool,

	/**
	* FontAwesome setting: flip.
	*/
	flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),

	/**
	* FontAwesome setting: icon name.
	*/
	icon: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
		PropTypes.string
	]),

	/**
	* FontAwesome setting: list item. Default: False.
	*/
	listItem: PropTypes.bool,

	/**
	* FontAwesome setting: pull. Options: right, left.
	*/
	pull: PropTypes.oneOf(['right', 'left']),

	/**
	* FontAwesome setting: pulse. Default: False.
	*/
	pulse: PropTypes.bool,

	/**
	* FontAwesome setting: rotation. Options: 90, 180, 270.
	*/
	rotation: PropTypes.oneOf([90, 180, 270]),

	/**
	* FontAwesome setting: size. Options: lg, xs, sm, 1x-10x.
	*/
	size: PropTypes.oneOf([
		'lg',
		'xs',
		'sm',
		'1x',
		'2x',
		'3x',
		'4x',
		'5x',
		'6x',
		'7x',
		'8x',
		'9x',
		'10x'
	]),

	/**
	* FontAwesome setting: spin. Default: False.
	*/
	spin: PropTypes.bool,

	/**
	* FontAwesome setting: symbol. Default: False.
	*/
	symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	/**
	* FontAwesome setting: title.
	*/
	title: PropTypes.string,

	/**
	* FontAwesome setting: transform.
	*/
	transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

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