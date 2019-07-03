# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DropdownDivider(Component):
    """A DropdownDivider component.
Bootstrap 4 dropdown divider used in BoxHeaderTools dropdown.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id']
        self._type = 'DropdownDivider'
        self._namespace = 'dash_admin_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DropdownDivider, self).__init__(**args)
