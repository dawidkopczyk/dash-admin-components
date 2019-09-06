from pathlib import Path

import dash_core_components as dcc
import dash_html_components as html

from ...api_doc import ApiDoc
from ...metadata import get_component_metadata

HERE = Path(__file__).parent

content = [
    html.H2("Sidebar", className="display-4"),
    html.P(
        dcc.Markdown(
            "Documentation and examples for how to use "
            "Sidebar with *dash-admin-components*."
        ),
        className="lead",
    ),
    ApiDoc(get_component_metadata("src/lib/components/sidebar/Sidebar.react.js"),
           component_name="Sidebar",),
    ApiDoc(get_component_metadata("src/lib/components/sidebar/SidebarMenu.react.js"),
           component_name="SidebarMenu",),
    ApiDoc(get_component_metadata("src/lib/components/sidebar/SidebarMenuItem.react.js"),
           component_name="SidebarMenuItem",),
    ApiDoc(get_component_metadata("src/lib/components/sidebar/SidebarHeader.react.js"),
           component_name="SidebarHeader", ),
    ApiDoc(get_component_metadata("src/lib/components/sidebar/SidebarButton.react.js"),
           component_name="SidebarButton", ),
]
