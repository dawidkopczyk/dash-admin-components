import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Bootstrap 4 dropdown divider used in BoxHeaderTools dropdown.
 */
export default class DropdownDivider extends Component {
	
	constructor(props) {
        super(props);
    }
	
	render() {
		return(
			<a id={this.props.id} className="divider"></a>
		)              
	} 
}
		
DropdownDivider.defaultProps = {};

DropdownDivider.propTypes = {
	
	/**
	* The ID of this component, used to identify dash components
	* in callbacks. The ID needs to be unique across all of the
	* components in an app.
	*/
	id: PropTypes.string,
	
    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
	
};