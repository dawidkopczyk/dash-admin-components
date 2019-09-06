from pathlib import Path

import dash_bootstrap_components as dbc

from .components.page import content as page_content
from .components.navbar import content as navbar_content
from .components.sidebar import content as sidebar_content
from .components.body import content as body_content
from .components.controlbar import content as controlbar_content
from .components.footer import content as footer_content
from .components.tabitems import content as tabitems_content
from .components.box import content as box_content
from .components.simplebox import content as simplebox_content
from .components.tabbox import content as tabbox_content
from .components.valuebox import content as valuebox_content
from .components.infobox import content as infobox_content
from .components.usercard import content as usercard_content
from .components.icon import content as icon_content

from .sidebar import Sidebar, SidebarEntry

HERE = Path(__file__).parent
COMPONENTS = HERE / "components"

GITHUB_LINK = "https://github.com/quanteeai/dash-admin-components"

NAVBAR = dbc.NavbarSimple(
    brand="Dash Admin Components",
    brand_href="/",
    brand_external_link=True,
    sticky="top",
    children=[dbc.NavItem(dbc.NavLink("GitHub", href=GITHUB_LINK))],
)


sidebar_entries = [
    SidebarEntry("page", "Page"),
    SidebarEntry("navbar", "Navbar"),
    SidebarEntry("sidebar", "Sidebar"),
    SidebarEntry("body", "Body"),
    SidebarEntry("controlbar", "Controlbar"),
    SidebarEntry("footer", "Footer"),
    SidebarEntry("tabitems", "TabItems"),
    SidebarEntry("box", "Box"),
    SidebarEntry("simplebox", "SimpleBox"),
    SidebarEntry("tabbox", "TabBox"),
    SidebarEntry("valuebox", "ValueBox"),
    SidebarEntry("infobox", "InfoBox"),
    SidebarEntry("usercard", "UserCard"),
    SidebarEntry("icon", "Icon"),
]


def component_page(body_elements, active_item):
    sidebar_contents = Sidebar(sidebar_entries, active_item)
    body_column = dbc.Col(body_elements, md=9)
    sidebar_column = dbc.Col(sidebar_contents, md=3, className="docs-sidebar")
    page_body = dbc.Container(
        dbc.Row([body_column, sidebar_column]), className="docs-content"
    )
    return [NAVBAR, page_body]


class ComponentsPage:
    def __init__(self, app):
        self._app = app
        self._component_bodies = {
            "page": page_content,
            "navbar": navbar_content,
            "sidebar": sidebar_content,
            "body": body_content,
            "controlbar": controlbar_content,
            "footer": footer_content,
            "tabitems": tabitems_content,
            "box": box_content,
            "simplebox": simplebox_content,
            "tabbox": tabbox_content,
            "valuebox": valuebox_content,
            "infobox": infobox_content,
            "usercard": usercard_content,
            "icon": icon_content,
        }

    def for_path(self, path_components):
        try:
            component_name = path_components[0]
            component_body = self._component_bodies[component_name]
            return component_page(component_body, component_name)
        except IndexError:
            return self.for_path(["page"])
