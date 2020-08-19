import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Create a Boostrap 4 dashboard dropdown menu item.
 */
export default class NavbarDropdownItem extends Component {

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
			className,
			date,
			icon,
			loading_state,
			setProps,
			...otherProps
		} = this.props;
		var icon_tag, date_tag
		if (icon) {
			icon_tag=<FontAwesomeIcon icon={icon}/>
		}
		if (date) {
			date_tag =<span className="float-right text-muted text-sm">
							{date}
							<span className="time">{icon_tag}</span>
					</span>
		}

		return(
			<React.Fragment>
				<a
					className={classnames(
						'dropdown-item',
						className
					)}
					{...otherProps}
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					<span className="text-dark">
						{icon_tag}
						{children}
					</span>
					{date_tag}
				</a>
				<div className="dropdown-divider"></div>
			</React.Fragment>
		)
	}
}

NavbarDropdownItem.defaultProps = {
	icon: '',
	n_clicks: 0,
	n_clicks_timestamp: -1
};

NavbarDropdownItem.propTypes = {

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