from pathlib import Path

import dash_core_components as dcc
import dash_html_components as html

from ...api_doc import ApiDoc
from ...metadata import get_component_metadata

HERE = Path(__file__).parent

content = [
    html.H2("TabBox", className="display-4"),
    html.P(
        dcc.Markdown(
            "Documentation and examples for how to use "
            "TabBox with *dash-admin-components*."
        ),
        className="lead",
    ),
    ApiDoc(get_component_metadata("src/lib/components/tabbox/TabBox.react.js"),
           component_name="TabBox",),
    ApiDoc(get_component_metadata("src/lib/components/tabbox/TabBoxHeader.react.js"),
           component_name="TabBoxHeader",),
    ApiDoc(get_component_metadata("src/lib/components/tabbox/TabBoxBody.react.js"),
           component_name="BoxBody",),
    ApiDoc(get_component_metadata("src/lib/components/tabbox/TabBoxMenu.react.js"),
           component_name="TabBoxMenu",),
    ApiDoc(get_component_metadata("src/lib/components/tabbox/TabBoxMenuItem.react.js"),
           component_name="TabBoxMenuItem",),
]
