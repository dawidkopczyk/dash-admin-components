# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ValueBox(Component):
    """A ValueBox component.
Boostrap 4 value box.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- className (string; optional): Often used with CSS to style elements with common properties.
- value (string | number; optional): The value to display in the box. Usually a number or short text.
- width (number; optional): The width of the box, using the Bootstrap grid system. This is
used for row-based layouts. The overall width of a region is 12, so the
default width of 4 occupies 1/3 of that width. Default: 3.
- color (string; optional): A color for the value box, options: primary, secondary, success, info, warning, danger or NULL.
Default: NULL.
- icon (string; optional): An icon tag. Default: user.
- subtitle (string; optional): Subtitle text.
- href (string; optional): An optional URL to link to.
- footer_text (string; optional): Text displayed in footer.
- elevation (number; optional): Box elevation.
- loading_state (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, value=Component.UNDEFINED, width=Component.UNDEFINED, color=Component.UNDEFINED, icon=Component.UNDEFINED, subtitle=Component.UNDEFINED, href=Component.UNDEFINED, footer_text=Component.UNDEFINED, elevation=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'style', 'className', 'value', 'width', 'color', 'icon', 'subtitle', 'href', 'footer_text', 'elevation', 'loading_state']
        self._type = 'ValueBox'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'style', 'className', 'value', 'width', 'color', 'icon', 'subtitle', 'href', 'footer_text', 'elevation', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ValueBox, self).__init__(**args)
