from pathlib import Path

import dash_core_components as dcc
import dash_html_components as html

from ...api_doc import ApiDoc
from ...metadata import get_component_metadata

HERE = Path(__file__).parent

content = [
    html.H2("ValueBox", className="display-4"),
    html.P(
        dcc.Markdown(
            "Documentation and examples for how to use "
            "ValueBox with *dash-admin-components*."
        ),
        className="lead",
    ),
    ApiDoc(get_component_metadata("src/lib/components/ValueBox.react.js")),
]
