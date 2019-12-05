# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class InfoBox(Component):
    """A InfoBox component.
Boostrap 4 info box.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component.
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- className (string; optional): Often used with CSS to style elements with common properties.
- width (number; optional): The width of the box, using the Bootstrap grid system. This is
used for row-based layouts. The overall width of a region is 12, so the
default width of 4 occupies 1/3 of that width. Default: 4.
- title (string; optional): Box title.
- icon (string; optional): An icon tag. Default: star.
- value (string | number; optional): The value to display in the box. Usually a number or short text.
- color (string; optional): A color for the info box, options: primary, secondary, success, info, warning, danger or NULL.
Default: NULL.
- icon_color (string; optional): A color for the info box icon, options: primary, secondary, success, info, warning, danger or NULL.
Default: NULL.
- gradient_color (string; optional): A color for the box, options: primary, secondary, success, info, warning, danger or NULL.
Default: NULL.
- elevation (number; optional): Box elevation.
- icon_elevation (number; optional): Icon elevation compared to the main content. Default: 3.
- loading_state (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, width=Component.UNDEFINED, title=Component.UNDEFINED, icon=Component.UNDEFINED, value=Component.UNDEFINED, color=Component.UNDEFINED, icon_color=Component.UNDEFINED, gradient_color=Component.UNDEFINED, elevation=Component.UNDEFINED, icon_elevation=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'style', 'className', 'width', 'title', 'icon', 'value', 'color', 'icon_color', 'gradient_color', 'elevation', 'icon_elevation', 'loading_state']
        self._type = 'InfoBox'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'style', 'className', 'width', 'title', 'icon', 'value', 'color', 'icon_color', 'gradient_color', 'elevation', 'icon_elevation', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(InfoBox, self).__init__(children=children, **args)
