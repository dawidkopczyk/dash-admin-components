# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Navbar(Component):
    """A Navbar component.
Create a Boostrap 4 dashboard navbar.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component.
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- className (string; optional): Often used with CSS to style elements with common properties.
- text (string; optional): Text to display next to sidebar toogle.
- skin (string; optional): Navbar skin, options dark or light. Default: light.
- color (string; optional): A color for the navbar, options: primary, secondary, success, info, 
warning, danger, white or light-grey. Default: white.
- border (boolean; optional): Whether to separate the navbar and body by a border. Default: True.
- sidebar_icon (string; optional): Icon of the sidebar toggle. Default: bars.
- controlbar_icon (string; optional): Icon to toggle the controlbar. Default: th.
- fixed (boolean; optional): Whether the navbar is fixed to the top. Default: False.
- loading_state (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, text=Component.UNDEFINED, skin=Component.UNDEFINED, color=Component.UNDEFINED, border=Component.UNDEFINED, sidebar_icon=Component.UNDEFINED, controlbar_icon=Component.UNDEFINED, fixed=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'text', 'skin', 'color', 'border', 'sidebar_icon', 'controlbar_icon', 'fixed', 'loading_state']
        self._type = 'Navbar'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'text', 'skin', 'color', 'border', 'sidebar_icon', 'controlbar_icon', 'fixed', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Navbar, self).__init__(children=children, **args)
