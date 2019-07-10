# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Sidebar(Component):
    """A Sidebar component.
Create a Boostrap 4 dashboard main sidebar.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The children of this component.
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- className (string; optional): Often used with CSS to style elements with common properties.
- disable (boolean; optional): Whether sidebar and sidebar toogle should be visible. Default: True.
- title (string; optional): Sidebar title.
- skin (string; optional): Sidebar skin, options dark or light. Default: dark.
- color (string; optional): A color for the sidebar, options: primary, secondary, success, info, 
warning, danger. Default: primary.
- brand_color (string; optional): A color for the brand, options: primary, secondary, success, info, 
warning, danger, white or light-grey. Default: NULL.
- url (string; optional): Sidebar brand link.
- src (string; optional): Sidebar brand image.
- opacity (number; optional): Sidebar opacity. From 0 to 1. Default: 0.8.
- elevation (number; optional): Sidebar elevation. Default: 4."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, disable=Component.UNDEFINED, title=Component.UNDEFINED, skin=Component.UNDEFINED, color=Component.UNDEFINED, brand_color=Component.UNDEFINED, url=Component.UNDEFINED, src=Component.UNDEFINED, opacity=Component.UNDEFINED, elevation=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'style', 'className', 'disable', 'title', 'skin', 'color', 'brand_color', 'url', 'src', 'opacity', 'elevation']
        self._type = 'Sidebar'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'style', 'className', 'disable', 'title', 'skin', 'color', 'brand_color', 'url', 'src', 'opacity', 'elevation']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Sidebar, self).__init__(children=children, **args)
