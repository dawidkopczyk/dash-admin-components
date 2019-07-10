import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../js/adminlte.js';
import $ from 'jquery';

/**
 * Create a Boostrap 4 tab box. 
 * The children of this component are: BoxHeader, BoxBody, BoxFooter.
 */
export default class TabBox extends Component {
	
	constructor(props) {
		super(props);
	}	
		
 	componentDidMount() {
		this.$el = $(this.el);
		this.$el.Widget();
	}
	
	componentWillUnmount() {
		this.$el.Widget('destroy');
	}	
	
	render() {
		const {
			children,
			className,			
			gradient_color, 
			color, 
			solid_header, 
			collapsed, 
			elevation, 
			width,  
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		
		return (
			<div className = {"col-sm-"+width}>
				<div 
					className={classnames(
						'card',
						gradient_color!=null ? `bg-${gradient_color}-gradient` : false,
						gradient_color==null && color==null ? 'card-default' : false,
						gradient_color==null && color!=null && solid_header ? 'card-outline' : false,
						gradient_color==null && color!=null ? `card-${color}` : false,
						elevation!=null ? `elevation-${elevation}` : false,
						{'collapsed-card': collapsed},
						className
					)} 
					ref={el => this.el = el}
					{...otherProps}         
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}
				>
					{children}
				</div>
			</div>
		)       
	} 	
}

TabBox.defaultProps = {
	solid_header: false, 
	width: 6, 
	collapsed: false, 
};

TabBox.propTypes = {
	
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
	* A color for the box header, options: primary, secondary, success, info, warning, danger or NULL.
    * Default: NULL. 
	*/
	color: PropTypes.string,
	
	/**
	* Box elevation. 
	*/
	elevation: PropTypes.number,

	/**
	* Should the header be shown with a solid color background. Default: False.
	*/
	solid_header: PropTypes.bool,
	
	/**
	* A color for the box, options: primary, secondary, success, info, warning, danger or NULL.
    * Default: NULL. 
	*/
	gradient_color: PropTypes.string,
	
	/**
	* The width of the box, using the Bootstrap grid system. This is
    * used for row-based layouts. The overall width of a region is 12, so the
    * default width of 4 occupies 1/3 of that width. Default: 6.
	*/
	width: PropTypes.number,

	/**
	* Whether to start collapsed. Default: False.
	*/
	collapsed: PropTypes.bool,

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