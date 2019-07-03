import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * AdminLTE3 widget user card.
 */
export default class UserCard extends Component {
	
	constructor(props) {
        super(props);
    }
	
	render() {
		const {
			children, 
			type, 
			src, 
			elevation, 
			image_elevation, 
			status, 
			title, 
			subtitle, 
			width, 
			loading_state, 
			setProps, 
			...otherProps
		} = this.props;
		var UserCardCl, HeaderCl, HeaderImageTag, HeaderTag, FooterTag
		
		UserCardCl = "card card-widget"
		if(type!=null) {
			UserCardCl += ' widget-user-'+type
		}else{
			UserCardCl += ' widget-user'
		}
		if(elevation!=null) {
			UserCardCl += ' elevation-'+elevation	
		}

		HeaderCl = "widget-user-header"
		if(status!=null) {
			HeaderCl += ' bg-'+status
		}
		
		HeaderImageTag = <div className="widget-user-image">
			<img className={image_elevation!=null ? "img-circle elevation-"+image_elevation : "img-circle"} src={src}></img>
		</div>
		
		if(type==null) {
			HeaderTag=<React.Fragment>
				<div className={HeaderCl}>
					<h3 className="widget-user-username">{title}</h3>
					<h5 className="widget-user-desc">{subtitle}</h5>
				</div>
				{HeaderImageTag}
			</React.Fragment>
		}else{
			HeaderTag=<div className={HeaderCl}>
				{HeaderImageTag}
				<h3 className="widget-user-username">{title}</h3>
				<h5 className="widget-user-desc">{subtitle}</h5>
			</div>
		}
  
		FooterTag=<div className="card-footer" style={{overflowY: 'auto', maxHeight: '500px'}}>{children}</div>
		
		return(
			<div className = {"col-sm-"+width}>
				<div 
					className={UserCardCl}
					{...otherProps}         
					data-dash-is-loading={
						(loading_state && loading_state.is_loading) || undefined
					}				
				>
					{HeaderTag}
					{FooterTag}
				</div>
			</div>	
		)             
	} 
}
		
UserCard.defaultProps = {
	width: 6,
};

UserCard.propTypes = {
	
	/**
	* The ID of this component, used to identify dash components
	* in callbacks. The ID needs to be unique across all of the
	* components in an app.
	*/
	id: PropTypes.string,

	/**
	* Defines CSS styles which will override styles previously set.
	*/
	children: PropTypes.node,
	
	/**
	* Defines CSS styles which will override styles previously set.
	*/
	style: PropTypes.object,
  
	/**
	* User card type options 2 or NULL.
	*/
	type: PropTypes.number,

	/**
	* User image url or path.
	*/
	src: PropTypes.string,
	
	/**
	* User card elevation. 
	*/
	elevation: PropTypes.number,

	/**
	* User card image elevation (numeric).
	*/
	image_elevation : PropTypes.number,
  
	/**
	* A color for the user card, options: primary, secondary, success, info, warning, danger or NULL.
    * Default: NULL. 
	*/
	status : PropTypes.string,

	/**
	* User card title. 
	*/
	title : PropTypes.string,

	/**
	* Subtitle text. 
	*/
	subtitle : PropTypes.string,

	/**
	* The width of the box, using the Bootstrap grid system. This is
    * used for row-based layouts. The overall width of a region is 12, so the
    * default width of 4 occupies 1/3 of that width. Default: 6.
	*/
	width : PropTypes.number,

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