import React from 'react';
import PropTypes from 'prop-types';

/**
 * Create a Boostrap 4 dashboard tab box menu item.
 */
const TabBoxMenuItem = props => {
	// The full definiton of TabBoxMenuItem is generated in TabBoxMenu component.
	return <React.Fragment></React.Fragment>;
};

TabBoxMenuItem.defaultProps = {
	disabled: false
}

TabBoxMenuItem.propTypes = {
	
	/**
	* The ID of this component, used to identify dash components
	* in callbacks. The ID needs to be unique across all of the
	* components in an app.
	*/
	id: PropTypes.string,

	/**
	* Defines CSS styles which will override styles previously set. The styles
	* set here apply to the content of the Tab
	*/
	style: PropTypes.object,
	
	/**
	* Often used with CSS to style elements with common properties.
	*/
	className: PropTypes.string,
	
	/**
	* A color for the menu item, options: primary, secondary, success, info, warning, danger or NULL.
	* Default: NULL. 
	*/
	color: PropTypes.string,
	
	/**
	* The tab's label, displayed in the tab itself.
	*/
	label: PropTypes.string,

	/**
	* Optional identifier for MenuItem used for determining which MenuItem is visible
	* if not specified, and MenuItem is being used inside Menu component, the tabId
	* will be set to "tab-i" where i is (zero indexed) position of tab in list
	* items pased to Menu component.
	*/
	tab_id: PropTypes.string,

	/**
	* Determines if tab is disabled or not - defaults to false
	*/
	disabled: PropTypes.bool,

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

export default TabBoxMenuItem;