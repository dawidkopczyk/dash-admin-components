import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {isNil} from 'ramda';

function resolveChildProps(child) {
  // This may need to change in the future if https://github.com/plotly/dash-renderer/issues/84 is addressed
  if (
    // disabled is a defaultProp (so it's always set)
    // meaning that if it's not set on child.props, the actual
    // props we want are lying a bit deeper - which means they
    // are coming from Dash
	isNil(child.props.disabled) &&
    child.props._dashprivate_layout &&
    child.props._dashprivate_layout.props
  ) {
    // props are coming from Dash
    return child.props._dashprivate_layout.props;
  } else {
    // else props are coming from React (e.g. Demo.js, or Tabs.test.js)
    return child.props;
  }
}

/**
 * Create a Boostrap 4 dashboard tab box menu.
 */
export default class TabBoxMenu extends Component {
	
	constructor(props) {
        super(props);
		
		this.toggle = this.toggle.bind(this);
		this.parseChildrenToArray = this.parseChildrenToArray.bind(this);

		const MenuItems = this.parseChildrenToArray();

		if (!this.props.active_tab) {
			const activeTab = resolveChildProps(MenuItems[0]).tab_id || 'tab-0';
			this.state = {
				activeTab: activeTab
			};
			if (this.props.setProps) {
				this.props.setProps({
					active_tab: activeTab
				});
			}
		} else {
			this.state = {
				activeTab: this.props.active_tab
			};
		}
	}
  
	parseChildrenToArray() {
		if (this.props.children && !Array.isArray(this.props.children)) {
			return [this.props.children];
		}
		return this.props.children;
	}

	toggle(tab) {
		if (this.props.setProps) {
			if (this.props.active_tab !== tab) {
				this.props.setProps({active_tab: tab});
			}
		} else {
			if (this.state.activeTab !== tab) {
				this.setState({activeTab: tab});
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.active_tab !== this.props.active_tab) {
			this.setState({activeTab: nextProps.active_tab});
		}
	}
  
	render() {

		// ensure children is array of children
		const MenuItems = this.parseChildrenToArray();
		
		// create tab links by extracting labels from children		
		const EnhancedMenuItems = React.Children.map(MenuItems, (child, idx) => {
			const {
				label,
				tab_id,
				color,
				className,
				loading_state,
				setProps,			
				...otherProps
			} = resolveChildProps(child);

			const tabId = tab_id || 'tab-' + idx;
			
			return (
				<li 
					className={classnames(
						'nav-item',
						color!=null ? `bg-${color}` : false,
						className,
					)}
				>
					<a 
						className={classnames(
							'nav-link',
							{'active show': this.state.activeTab === tabId},
							{disabled: otherProps.disabled}
						)}
						href='#'
						onClick={() => {
							if (!otherProps.disabled) {
								this.toggle(tabId);
							}
						}}
						{...otherProps}
						data-dash-is-loading={
							(loading_state && loading_state.is_loading) || undefined
						}
					>
						{label}
					</a>
				</li>
			)
		});

		const {
			children, 
			className, 
			active_tab,				
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
			
		return (
			<ul 
				className={classnames(
					"nav nav-pills p-2",
					className
				)}
				{...otherProps}
				data-dash-is-loading={
					(loading_state && loading_state.is_loading) || undefined
				}
			>
				{EnhancedMenuItems}
			</ul>
		)              
	} 
}
		
TabBoxMenu.defaultProps = {};

TabBoxMenu.propTypes = {
	
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
	* ID of currently active tab. Must be consistent with IDs of children elements.
	*/
	active_tab: PropTypes.any,
	
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