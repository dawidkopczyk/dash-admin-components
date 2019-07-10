# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NavbarDropdown(Component):
    """A NavbarDropdown component.
Create a Boostrap 4 dashboard navbar dropdown menu.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component.
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- className (string; optional): Often used with CSS to style elements with common properties.
- menu_icon (string; optional): An icon tag. Default: bell.
- badge_color (string; optional): A color for the badge, options: primary, secondary, success, info, warning, danger or NULL.
Default: NULL.
- badge_label (string; optional): A text to display in menu icon badge.
- align (string; optional): Menu alignment. Default: right.
- header_text (string; optional): A text to display in menu header.
- footer_text (string; optional): A text to display in menu footer.
- src (string; optional): Dropdown link to an external resource placed in menu footer.
- loading_state (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, menu_icon=Component.UNDEFINED, badge_color=Component.UNDEFINED, badge_label=Component.UNDEFINED, align=Component.UNDEFINED, header_text=Component.UNDEFINED, footer_text=Component.UNDEFINED, src=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'style', 'className', 'menu_icon', 'badge_color', 'badge_label', 'align', 'header_text', 'footer_text', 'src', 'loading_state']
        self._type = 'NavbarDropdown'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'style', 'className', 'menu_icon', 'badge_color', 'badge_label', 'align', 'header_text', 'footer_text', 'src', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NavbarDropdown, self).__init__(children=children, **args)
