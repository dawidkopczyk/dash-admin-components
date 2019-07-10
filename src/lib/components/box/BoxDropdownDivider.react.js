import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Bootstrap 4 box dropdown divider.
 */
export default class BoxDropdownDivider extends Component {
	
	constructor(props) {
        super(props);
    }
	
	render() {
		const {
			className,
			setProps, 
			...otherProps
		} = this.props;
		
		return(
			<a 
				className={classnames(
					'divider',
					className
				)}
				{...otherProps}
			>
			</a>
		)              
	} 
}
		
BoxDropdownDivider.defaultProps = {};

BoxDropdownDivider.propTypes = {
	
	/**
	* The ID of this component, used to identify dash components
	* in callbacks. The ID needs to be unique across all of the
	* components in an app.
	*/
	id: PropTypes.string,

	/**
	* Often used with CSS to style elements with common properties.
	*/
	className: PropTypes.string,
	
    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
	
};