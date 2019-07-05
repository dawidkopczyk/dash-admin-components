import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Create a Boostrap 4 dashboard dropdown menu item.
 */
export default class DropdownMenuItem extends Component {
	
	constructor(props) {
        super(props);
		
		this.incrementClicks = this.incrementClicks.bind(this);
    }

	incrementClicks() {
		if (!this.props.disabled && this.props.setProps) {
			this.props.setProps({
				n_clicks: this.props.n_clicks + 1,
				n_clicks_timestamp: Date.now()
			});
		}
	}
	
	render() {
		const {
			children,	
			date,
			icon,
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		return(
			<React.Fragment>
				<a 
					className="dropdown-item" 
					href='#'
					{...otherProps}         
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					<span className="text-dark">
						<FontAwesomeIcon icon={icon}/>
						{children}
					</span>
					<span className="float-right text-muted text-sm">
						{date}
						<span className="time">
							<FontAwesomeIcon icon={icon}/>
						</span>						
					</span>	
				</a>
				<div className="dropdown-divider"></div>
			</React.Fragment>
		)              
	} 
}
		
DropdownMenuItem.defaultProps = {
	icon: 'info-circle',
	n_clicks: 0,
	n_clicks_timestamp: -1
};

DropdownMenuItem.propTypes = {
	
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
	* A date to display in menu item.
	*/
	date: PropTypes.string,
	
	/**
	* An icon tag. Default: info-circle.
	*/
	icon: PropTypes.string,

	/**
	* An integer that represents the number of times
	* that this element has been clicked on.
	*/
	n_clicks: PropTypes.number,

	/**
	* An integer that represents the time (in ms since 1970)
	* at which n_clicks changed. This can be used to tell
	* which button was changed most recently.
	*/
	n_clicks_timestamp: PropTypes.number,
	
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