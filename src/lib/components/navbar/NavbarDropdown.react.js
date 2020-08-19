import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Create a Boostrap 4 dashboard navbar dropdown menu.
 */
export default class NavbarDropdown extends Component {

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
			className,
			menu_icon,
			badge_color,
			badge_label,
			align,
			header_text,
			footer_text,
			src,
			loading_state,
			setProps,
			...otherProps
		} = this.props;
		var footer_tag, menu_icon_tag, dropdown_divider_tag, header_text_tag
		if (footer_text && footer_text !== '') {
			footer_tag = <a className="dropdown-item dropdown-footer" href={src} target="_blank">
				<span className="text-dark">
					{footer_text}
				</span>
			</a>
		}
		if (menu_icon && menu_icon !== '') {
			menu_icon_tag = <FontAwesomeIcon icon={menu_icon}/>
		}
		if (header_text) {
			dropdown_divider_tag=<div className="dropdown-divider"></div>
			header_text_tag=<span className="dropdown-item dropdown-header">{header_text}</span>
		}
		return (
			<li
				className={classnames(
					'nav-item dropdown',
					{'show': this.state.showMenu},
					className
				)}
			>
				<a
					className="nav-link"
					onClick={this.showMenu}
					{...otherProps}
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					{menu_icon_tag}
					<span
						className={classnames(
							'badge navbar-badge',
							badge_color!=null ? `badge-${badge_color}` : false
						)}
					>
						{badge_label}
					</span>
				</a>
				<div
					className={classnames(
						'dropdown-menu dropdown-menu-lg',
						align!=null ? `dropdown-menu-${align}` : false,
						{'show': this.state.showMenu}
					)}
					ref={(element) => {
						this.dropdownMenu = element;
					}}
				>
					{header_text_tag}
					{dropdown_divider_tag}
						{children}
					{footer_tag}
				</div>
			</li>
		);
	}
}

NavbarDropdown.defaultProps = {
	menu_icon: "",
	header_text: "",
	footer_text: "",
	align: "right"
};

NavbarDropdown.propTypes = {

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
	* An icon tag. Default: bell.
	*/
	menu_icon: PropTypes.string,

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