import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Create a Boostrap 4 box dropdown button. 
 */
export default class BoxDropdown extends Component {
	
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

		if (!this.boxDropdown.contains(event.target)) {

			this.setState({ showMenu: false }, () => {
				document.removeEventListener('click', this.closeMenu);
			}); 

		}
	}

	render() {
		const {
			children, 
			className,
			dropdown_icon,			
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		return (
			<div className="btn-group">
				<button 
					type="button"
					className={classnames(
						'btn btn-tool dropdown-toggle',
						className
					)}	
					onClick={this.showMenu}
					{...otherProps}         
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					<FontAwesomeIcon icon={dropdown_icon}/>
				</button>
				<div
					className={classnames(
						'dropdown-menu dropdown-menu-right',
						{'show': this.state.showMenu}
					)}
					ref={(element) => {
						this.boxDropdown = element;
					}}
				>
					{children}
				</div>
			</div>
		);
	}
}

BoxDropdown.defaultProps = {
	dropdown_icon: "wrench",
};

BoxDropdown.propTypes = {
	
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