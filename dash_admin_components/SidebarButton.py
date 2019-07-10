# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SidebarButton(Component):
    """A SidebarButton component.
Create a Boostrap 4 dashboard main sidebar button.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- className (string; optional): Often used with CSS to style elements with common properties.
- label (string; optional): Button label.
- disabled (boolean; optional): Disable the link. Default: False.
- icon (string; optional): Menu item icon.
- color (string; optional): A color for the sidebar button, options: primary, secondary, success, info, warning, danger or NULL.
Default: NULL.
- download (string; optional): Indicates that the hyperlink is to be used for downloading a resource.
- href (string; optional): The URL of a linked resource.
- target (string; optional): The URL target.
- n_clicks (number; optional): An integer that represents the number of times
that this element has been clicked on.
- n_clicks_timestamp (number; optional): An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.
- loading_state (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, label=Component.UNDEFINED, disabled=Component.UNDEFINED, icon=Component.UNDEFINED, color=Component.UNDEFINED, download=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_timestamp=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'style', 'className', 'label', 'disabled', 'icon', 'color', 'download', 'href', 'target', 'n_clicks', 'n_clicks_timestamp', 'loading_state']
        self._type = 'SidebarButton'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'style', 'className', 'label', 'disabled', 'icon', 'color', 'download', 'href', 'target', 'n_clicks', 'n_clicks_timestamp', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SidebarButton, self).__init__(**args)
