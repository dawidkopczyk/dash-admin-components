import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Create a Boostrap 4 dashboard main sidebar menu sub-item.
 */
export default class SidebarMenuSubItem extends Component {
	
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
			className,
			active,
			label, 
			icon, 
			badge_label,
			badge_color,
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;

		var BadgeTag
		
		if(badge_label!=null) {
			BadgeTag= <span 
				className={classnames(
					'badge right',
					badge_color!=null ? `badge-${badge_color}` : false
				)}
			>
				{badge_label}
			</span>			
		}
		
		return(
			<li 
				className={classnames(
					'nav-item',
					className
				)}
			>
				<a 
					className={classnames(
						'nav-link',
						{'active': active},
						{disabled: otherProps.disabled}
					)}
					onClick={this.incrementClicks}
					{...otherProps}
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					<FontAwesomeIcon icon={icon} className="nav-icon"/>
					<p>
						{label}
						{BadgeTag}
					</p>
				</a>
			</li>								
		)             
	} 
}
		
SidebarMenuSubItem.defaultProps = {
	active: false,
	disabled: false,
	n_clicks: 0,
	n_clicks_timestamp: -1
};

SidebarMenuSubItem.propTypes = {
	
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
	* Menu sub-item name.
	*/
	label: PropTypes.string,

	/**
	* Whether the link is activated. Default: False.
	*/
	active: PropTypes.bool,
	
	/**
	* Disable the link. Default: False.
	*/
	disabled: PropTypes.bool,
  
	/**
	* Menu sub-item icon.
	*/
	icon: PropTypes.string,

	/**
	* A color for the badge, options: primary, secondary, success, info, warning, danger or NULL.
    * Default: NULL. 
	*/
	badge_color: PropTypes.string,
	
	/**
	* A text to display in menu icon badge. 
	*/
	badge_label: PropTypes.string,
	
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