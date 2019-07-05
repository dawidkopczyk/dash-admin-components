import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Create a Boostrap 4 dashboard dropdown menu. 
 */
export default class DropdownMenu extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
		  showMenu: false,
		};
		
		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}
  
	showMenu(event) {
		event.preventDefault();

		this.setState({ showMenu: true }, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}
  
	closeMenu(event) {

		if (!this.dropdownMenu.contains(event.target)) {

			this.setState({ showMenu: false }, () => {
				document.removeEventListener('click', this.closeMenu);
			}); 

		}
	}

	render() {
		const {
			children,
			menu_icon,
			badge_status,
			badge_text,	
			align,
			header_text,
			footer_text,
			src,
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		return (
			<li 
				className={this.state.showMenu ? "nav-item dropdown show" : "nav-item dropdown"}
			>
				<a 
					className="nav-link" 
					href = "#" 
					onClick={this.showMenu}
					{...otherProps}         
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					<FontAwesomeIcon icon={menu_icon}/>
					<span className={"badge badge-"+badge_status+" navbar-badge"}>{badge_text}</span>
				</a>
				<div
					className={this.state.showMenu ? "dropdown-menu dropdown-menu-lg dropdown-menu-"+align+" show" : "dropdown-menu dropdown-menu-lg dropdown-menu-"+align}
					ref={(element) => {
						this.dropdownMenu = element;
					}}
				>
					<span className="dropdown-item dropdown-header">
						{header_text}
					</span>
					<div className="dropdown-divider"></div>
						{children}
					<a className="dropdown-item dropdown-footer" href={src} target="_blank">
						<span className="text-dark">
							{footer_text}
						</span>
					</a>
				</div>
			</li>
		);
	}
}

DropdownMenu.defaultProps = {
	menu_icon: "bell",
	header_text: "Items",
	footer_text: "See more",
	align: "right"
};

DropdownMenu.propTypes = {
	
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
	* An icon tag. Default: bell.
	*/
	menu_icon: PropTypes.string,

	/**
	* A color for the badge, options: primary, secondary, success, info, warning, danger or NULL.
    * Default: NULL. 
	*/
	badge_status: PropTypes.string,
	
	/**
	* A text to display in menu icon badge. 
	*/
	badge_text: PropTypes.string,
	
	/**
	* Menu alignment. Default: right.
	*/
	align: PropTypes.string,

	/**
	* A text to display in menu header. 
	*/
	header_text: PropTypes.string,

	/**
	* A text to display in menu footer. 
	*/
	footer_text: PropTypes.string,

	/**
	* Dropdown link to an external resource placed in menu footer.
	*/
	src: PropTypes.string,

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