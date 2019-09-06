import dash_html_components as html
import dash_admin_components as dac


# =============================================================================
# Dash Admin Components
# =============================================================================
# Navbar
right_ui = dac.NavbarDropdown(
    badge_label="!",
    badge_color="danger",
    src="https://quantee.ai",
    header_text="2 Items",
    children=[
    dac.NavbarDropdownItem(
        children="message 1",
        date="today"
    ),
    dac.NavbarDropdownItem(
        children="message 2",
        date="yesterday"
    ),
    ]
)
                              
navbar = dac.Navbar(color = "white", 
                    text="I can write text in the navbar!", 
                    children=right_ui)

# Sidebar
sidebar = dac.Sidebar(
	dac.SidebarMenu(
		[
			dac.SidebarHeader(children="Cards"),
			dac.SidebarMenuItem(id='tab_cards', label='Basic cards', icon='box'),
            dac.SidebarMenuItem(id='tab_social_cards', label='Social cards', icon='id-card'),
            dac.SidebarMenuItem(id='tab_tab_cards', label='Tab cards', icon='image'),
			dac.SidebarHeader(children="Boxes"),
			dac.SidebarMenuItem(id='tab_basic_boxes', label='Basic boxes', icon='desktop'),
			dac.SidebarMenuItem(id='tab_value_boxes', label='Value/Info boxes', icon='suitcase')
		]
	),
    title='Dash Admin',
	skin="light",
    color="primary",
	brand_color="primary",
    url="https://quantee.ai",
    src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg",
    elevation=3,
    opacity=0.8
)

# Body
body = dac.Body(None)

# Controlbar
controlbar = dac.Controlbar(
    [
        html.Br(),
        html.P("Put different components here!"),
    ],
    title = "My right sidebar",
    skin = "light"
)

# Footer
footer = dac.Footer(
	html.A("@DawidKopczyk, Quantee",
		href = "https://twitter.com/quanteeai", 
		target = "_blank", 
	),
	right_text = "2019"
)

# =============================================================================
# App Layout
# =============================================================================
_layout = dac.Page([navbar, sidebar, body, controlbar, footer])

class DemoLayoutPage:
    def for_path(self, component):
        return _layout

