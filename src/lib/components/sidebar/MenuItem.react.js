import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Create a Boostrap 4 dashboard main sidebar menu item.
 */
export default class MenuItem extends Component {
	
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
			active, 
			text, 
			icon, 
			start_expanded,
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		var TabContent, SubItems, NavItemCl, NavLinkCl
		
		NavItemCl = 'nav-item'
		NavLinkCl = 'nav-link'
		if(active) {
			NavLinkCl += ' active'
		}
		if(otherProps.disabled) {
			NavLinkCl += ' disabled'
		}
		
		if(children){
			NavItemCl += ' has-treeview'
			if(start_expanded) {
				NavItemCl += ' menu-open'
			}
			TabContent = <React.Fragment>
				<FontAwesomeIcon icon={icon} className="nav-icon"/>
				<p>
					{text}
					<FontAwesomeIcon icon="angle-left" className="right"/>
				</p> 
			</React.Fragment>
			SubItems = <ul className="nav nav-treeview">{children}</ul>
		}else{
			TabContent = <React.Fragment>
				<FontAwesomeIcon icon={icon} className="nav-icon"/>
				<p>{text}</p>
			</React.Fragment>			
		}

		return(
			<li className={NavItemCl}>
				<a 
					className={NavLinkCl} 
					onClick={this.incrementClicks}
					{...otherProps} 
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					{TabContent}
				</a>
				{SubItems}
			</li>								
		)               
	} 
}
		
MenuItem.defaultProps = {
	start_expanded: false,
	active: false,
	disabled: false,
	n_clicks: 0,
	n_clicks_timestamp: -1
};

MenuItem.propTypes = {
	
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
	* Menu item name.
	*/
	text: PropTypes.string,
	
	/**
	* Apply 'active' style to this component. Default: False.
	*/
	active: PropTypes.bool,

	/**
	* Disable the link. Default: False.
	*/
	disabled: PropTypes.bool,
  
	/**
	* Menu item icon.
	*/
	icon: PropTypes.string,

	/**
	* Whether to expand the manu item at start. Works only if menu item contains children.
	*/
	start_expanded: PropTypes.bool,

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