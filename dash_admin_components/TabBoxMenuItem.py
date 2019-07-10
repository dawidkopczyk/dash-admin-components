# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TabBoxMenuItem(Component):
    """A TabBoxMenuItem component.
Create a Boostrap 4 dashboard tab box menu item.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- style (dict; optional): Defines CSS styles which will override styles previously set. The styles
set here apply to the content of the Tab
- className (string; optional): Often used with CSS to style elements with common properties.
- color (string; optional): A color for the menu item, options: primary, secondary, success, info, warning, danger or NULL.
Default: NULL.
- label (string; optional): The tab's label, displayed in the tab itself.
- tab_id (string; optional): Optional identifier for MenuItem used for determining which MenuItem is visible
if not specified, and MenuItem is being used inside Menu component, the tabId
will be set to "tab-i" where i is (zero indexed) position of tab in list
items pased to Menu component.
- disabled (boolean; optional): Determines if tab is disabled or not - defaults to false
- loading_state (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, label=Component.UNDEFINED, tab_id=Component.UNDEFINED, disabled=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'style', 'className', 'color', 'label', 'tab_id', 'disabled', 'loading_state']
        self._type = 'TabBoxMenuItem'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'style', 'className', 'color', 'label', 'tab_id', 'disabled', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TabBoxMenuItem, self).__init__(**args)
