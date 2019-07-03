# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Icon(Component):
    """A Icon component.
Boostrap 4 info box.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- border (boolean; optional): FontAwesome setting: border. Default: False.
- className (string; optional): FontAwesome setting: additional class.
- mask (dict | list | string; optional): FontAwesome setting: mask.
- fixedWidth (boolean; optional): FontAwesome setting: fixed witdh. Default: False.
- inverse (boolean; optional): FontAwesome setting: inverse. Default: False.
- flip (a value equal to: 'horizontal', 'vertical', 'both'; optional): FontAwesome setting: flip.
- icon (dict | list | string; optional): FontAwesome setting: icon name.
- listItem (boolean; optional): FontAwesome setting: list item. Default: False.
- pull (a value equal to: 'right', 'left'; optional): FontAwesome setting: pull. Options: right, left.
- pulse (boolean; optional): FontAwesome setting: pulse. Default: False.
- rotation (a value equal to: 90, 180, 270; optional): FontAwesome setting: rotation. Options: 90, 180, 270.
- size (a value equal to: 'lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'; optional): FontAwesome setting: size. Options: lg, xs, sm, 1x-10x.
- spin (boolean; optional): FontAwesome setting: spin. Default: False.
- symbol (boolean | string; optional): FontAwesome setting: symbol. Default: False.
- title (string; optional): FontAwesome setting: title.
- transform (string | dict; optional): FontAwesome setting: transform.
- loading_state (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, border=Component.UNDEFINED, className=Component.UNDEFINED, mask=Component.UNDEFINED, fixedWidth=Component.UNDEFINED, inverse=Component.UNDEFINED, flip=Component.UNDEFINED, icon=Component.UNDEFINED, listItem=Component.UNDEFINED, pull=Component.UNDEFINED, pulse=Component.UNDEFINED, rotation=Component.UNDEFINED, size=Component.UNDEFINED, spin=Component.UNDEFINED, symbol=Component.UNDEFINED, title=Component.UNDEFINED, transform=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'border', 'className', 'mask', 'fixedWidth', 'inverse', 'flip', 'icon', 'listItem', 'pull', 'pulse', 'rotation', 'size', 'spin', 'symbol', 'title', 'transform', 'loading_state']
        self._type = 'Icon'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'border', 'className', 'mask', 'fixedWidth', 'inverse', 'flip', 'icon', 'listItem', 'pull', 'pulse', 'rotation', 'size', 'spin', 'symbol', 'title', 'transform', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Icon, self).__init__(**args)
