import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Create a Boostrap 4 box header tools button. 
 */
export default class BoxHeaderTools extends Component {
	
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
			dropdown_icon,			
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		return (
			<div className="btn-group">
				<button 
					type="button" 
					className="btn btn-tool dropdown-toggle" 
					onClick={this.showMenu}
					{...otherProps}         
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					<FontAwesomeIcon icon={dropdown_icon}/>
				</button>
				<div
					className={this.state.showMenu ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"}
					ref={(element) => {
						this.dropdownMenu = element;
					}}
				>
					{children}
				</div>
			</div>
		);
	}
}

BoxHeaderTools.defaultProps = {
	dropdown_icon: "wrench",
};

BoxHeaderTools.propTypes = {
	
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
	* An icon tag. Default: wrench.
	*/
	dropdown_icon: PropTypes.string,
	
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