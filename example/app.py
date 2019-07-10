import dash
from dash.dependencies import Input, Output

import dash_html_components as html
import dash_core_components as dcc
import dash_admin_components as dac

from dash.exceptions import PreventUpdate

from apps.cards import cards_tab
from apps.social_cards import social_cards_tab
from apps.tab_cards import tab_cards_tab
from apps.basic_boxes import basic_boxes_tab
from apps.value_boxes import value_boxes_tab

from example_plots import plot_scatter
from apps.tab_cards import text_1, text_2, text_3

# =============================================================================
# Dash App and Flask Server
# =============================================================================
app = dash.Dash(__name__)
server = app.server 

# =============================================================================
# Dash Admin Components
# =============================================================================
# Navbar
right_ui = dac.NavbarDropdown(
	badge_label = "!",
    badge_color= "danger",
    src = "https://quantee.ai",
	header_text="2 Items",
    children= [
		dac.NavbarDropdownItem(
			children = "message 1",
			date = "today"
		),
		dac.NavbarDropdownItem(
			children = "message 2",
			date = "yesterday"
		),
	]
)
                              
navbar = dac.Navbar(color = "white", 
                    text="I can write text in the navbar!", 
                    children=right_ui)

# Sidebar
subitems = [dac.SidebarMenuSubItem(id='tab_gallery_1', 
                            label='Gallery 1', 
                            icon='arrow-circle-right', 
                            badge_label='Soon',
                            badge_color='success'), 
			dac.SidebarMenuSubItem(id='tab_gallery_2', 
                            label='Gallery 2', 
                            icon='arrow-circle-right', 
                            badge_label='Soon', 
                            badge_color='success')
            ]

sidebar = dac.Sidebar(
	dac.SidebarMenu(
		[
			dac.SidebarHeader(children="Cards"),
			dac.SidebarMenuItem(id='tab_cards', label='Basic cards', icon='box'),
            dac.SidebarMenuItem(id='tab_social_cards', label='Social cards', icon='id-card'),
            dac.SidebarMenuItem(id='tab_tab_cards', label='Tab cards', icon='image'),
			dac.SidebarHeader(children="Boxes"),
			dac.SidebarMenuItem(id='tab_basic_boxes', label='Basic boxes', icon='desktop'),
			dac.SidebarMenuItem(id='tab_value_boxes', label='Value/Info boxes', icon='suitcase'),
			dac.SidebarHeader(children="Gallery"),
			dac.SidebarMenuItem(label='Galleries', icon='cubes', children=subitems),
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
body = dac.Body(
    dac.TabItems([
        cards_tab,
        social_cards_tab,
        tab_cards_tab,
        basic_boxes_tab,
        value_boxes_tab,
        dac.TabItem(html.P('Gallery 1 (You can add Dash Bootstrap Components!)'), 
                    id='content_gallery_1'),
        dac.TabItem(html.P('Gallery 2 (You can add Dash Bootstrap Components!)'), 
                    id='content_gallery_2'),
    ])
)

# Controlbar
controlbar = dac.Controlbar(
    [
        html.Br(),
        html.P("Slide to change graph in Basic Boxes"),
        dcc.Slider(
            id='controlbar-slider',
            min=10,
            max=50,
            step=1,
            value=20
        )
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
app.layout = dac.Page([navbar, sidebar, body, controlbar, footer])

# =============================================================================
# Callbacks
# =============================================================================
def activate(input_id, 
             n_cards, n_social_cards, n_tab_cards, n_basic_boxes,
             n_value_boxes, n_gallery_1, n_gallery_2):
    
    # Depending on tab which triggered a callback, show/hide contents of app
    if input_id == 'tab_cards' and n_cards:
        return True, False, False, False, False, False, False
    elif input_id == 'tab_social_cards' and n_social_cards:
        return False, True, False, False, False, False, False
    elif input_id == 'tab_tab_cards' and n_tab_cards:
        return False, False, True, False, False, False, False
    elif input_id == 'tab_basic_boxes' and n_basic_boxes:
        return False, False, False, True, False, False, False
    elif input_id == 'tab_value_boxes' and n_value_boxes:
        return False, False, False, False, True, False, False
    elif input_id == 'tab_gallery_1' and n_gallery_1:
        return False, False, False, False, False, True, False
    elif input_id == 'tab_gallery_2' and n_gallery_2:
        return False, False, False, False, False, False, True
    else:
        return True, False, False, False, False, False, False # App init
    
@app.callback([Output('content_cards', 'active'),
               Output('content_social_cards', 'active'),
               Output('content_tab_cards', 'active'),
               Output('content_basic_boxes', 'active'),
               Output('content_value_boxes', 'active'),
               Output('content_gallery_1', 'active'),
               Output('content_gallery_2', 'active')],
               [Input('tab_cards', 'n_clicks'),
                Input('tab_social_cards', 'n_clicks'),
                Input('tab_tab_cards', 'n_clicks'),
                Input('tab_basic_boxes', 'n_clicks'),
                Input('tab_value_boxes', 'n_clicks'),
                Input('tab_gallery_1', 'n_clicks'),
                Input('tab_gallery_2', 'n_clicks')]
)
def display_tab(n_cards, n_social_cards, n_tab_cards, n_basic_boxes, 
                n_value_boxes, n_gallery_1, n_gallery_2):
    
    ctx = dash.callback_context # Callback context to recognize which input has been triggered

    # Get id of input which triggered callback  
    if not ctx.triggered:
        raise PreventUpdate
    else:
        input_id = ctx.triggered[0]['prop_id'].split('.')[0]   

    return activate(input_id, 
                    n_cards, n_social_cards, n_tab_cards, n_basic_boxes, 
                    n_value_boxes, n_gallery_1, n_gallery_2)

@app.callback([Output('tab_cards', 'active'),
               Output('tab_social_cards', 'active'),
               Output('tab_tab_cards', 'active'),
               Output('tab_basic_boxes', 'active'),
               Output('tab_value_boxes', 'active'),
               Output('tab_gallery_1', 'active'),
               Output('tab_gallery_2', 'active')],
               [Input('tab_cards', 'n_clicks'),
                Input('tab_social_cards', 'n_clicks'),
                Input('tab_tab_cards', 'n_clicks'),
                Input('tab_basic_boxes', 'n_clicks'),
                Input('tab_value_boxes', 'n_clicks'),
                Input('tab_gallery_1', 'n_clicks'),
                Input('tab_gallery_2', 'n_clicks')]
)
def activate_tab(n_cards, n_social_cards, n_tab_cards, n_basic_boxes, 
                n_value_boxes, n_gallery_1, n_gallery_2):
    
    ctx = dash.callback_context # Callback context to recognize which input has been triggered

    # Get id of input which triggered callback  
    if not ctx.triggered:
        raise PreventUpdate
    else:
        input_id = ctx.triggered[0]['prop_id'].split('.')[0]   

    return activate(input_id, 
                    n_cards, n_social_cards, n_tab_cards, n_basic_boxes, 
                    n_value_boxes, n_gallery_1, n_gallery_2)
    
@app.callback(Output('tab_box_1', 'children'),
              [Input('tab_box_1_menu', 'active_tab')]
)
def display_tabbox1(active_tab):

    # Depending on tab which triggered a callback, show/hide contents of app
    if active_tab == 'tab_box_1_tab1':
        return text_1
    elif active_tab == 'tab_box_1_tab2':
        return text_2
    elif active_tab == 'tab_box_1_tab3':
        return text_3

@app.callback(Output('tab_box_2', 'children'),
              [Input('tab_box_2_menu', 'active_tab')]
)
def display_tabbox2(active_tab):

    # Depending on tab which triggered a callback, show/hide contents of app
    if active_tab == 'tab_box_2_tab1':
        return text_1
    elif active_tab == 'tab_box_2_tab2':
        return text_2
    elif active_tab == 'tab_box_2_tab3':
        return text_3
    
# Update figure on slider change
@app.callback(
    Output('box-graph', 'figure'),
    [Input('controlbar-slider', 'value')])
def update_box_graph(value):
    return plot_scatter(value)

# =============================================================================
# Run app    
# =============================================================================
if __name__ == '__main__':
    app.run_server(debug=False)
