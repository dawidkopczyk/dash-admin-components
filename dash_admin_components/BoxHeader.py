# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BoxHeader(Component):
    """A BoxHeader component.
Create a Boostrap 4 box header.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component.
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- className (string; optional): Often used with CSS to style elements with common properties.
- title (string; optional): Box title.
- header_border (boolean; optional): Whether to display a border between the header and body. Default: True.
- collapsible (boolean; optional): If True, display a button in the upper right that allows
the user to collapse the box. Default: True.
- collapsed (boolean; optional): Whether to start collapsed. Default: False.
- closable (boolean; optional): If True, display a button in the upper right that allows the user to close the box.
Default: False.
- loading_state (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, title=Component.UNDEFINED, header_border=Component.UNDEFINED, collapsible=Component.UNDEFINED, collapsed=Component.UNDEFINED, closable=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'style', 'className', 'title', 'header_border', 'collapsible', 'collapsed', 'closable', 'loading_state']
        self._type = 'BoxHeader'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'style', 'className', 'title', 'header_border', 'collapsible', 'collapsed', 'closable', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BoxHeader, self).__init__(children=children, **args)
