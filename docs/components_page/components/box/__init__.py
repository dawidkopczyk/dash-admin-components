from pathlib import Path

import dash_core_components as dcc
import dash_html_components as html

from ...api_doc import ApiDoc
from ...metadata import get_component_metadata

HERE = Path(__file__).parent

content = [
    html.H2("Box", className="display-4"),
    html.P(
        dcc.Markdown(
            "Documentation and examples for how to use "
            "Box with *dash-admin-components*."
        ),
        className="lead",
    ),
    ApiDoc(get_component_metadata("src/lib/components/box/Box.react.js"),
           component_name="Box",),
    ApiDoc(get_component_metadata("src/lib/components/box/BoxHeader.react.js"),
           component_name="BoxHeader",),
    ApiDoc(get_component_metadata("src/lib/components/box/BoxBody.react.js"),
           component_name="BoxBody",),
    ApiDoc(get_component_metadata("src/lib/components/box/BoxFooter.react.js"),
           component_name="BoxFooter",),
    ApiDoc(get_component_metadata("src/lib/components/box/BoxDropdown.react.js"),
           component_name="BoxDropdown",),
    ApiDoc(get_component_metadata("src/lib/components/box/BoxDropdownItem.react.js"),
           component_name="BoxDropdownItem",),
    ApiDoc(get_component_metadata("src/lib/components/box/BoxDropdownDivider.react.js"),
           component_name="BoxDropdownDivider",),
]
