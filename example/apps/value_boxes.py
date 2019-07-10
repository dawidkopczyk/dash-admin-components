import dash_html_components as html
import dash_admin_components as dac

value_boxes_tab = dac.TabItem(id='content_value_boxes', 
                              
    children=[
        html.H4('Value Boxes'),
        html.Div([
            dac.ValueBox(
            	value=150,
                subtitle="New orders",
                color = "primary",
                icon = "shopping-cart",
                href = "#"
            ),
            dac.ValueBox(
              elevation = 4,
              value = "53%",
              subtitle = "New orders",
              color = "danger",
              icon = "cogs"
            ),
            dac.ValueBox(
              value = "44",
              subtitle = "User Registrations",
              color = "warning",
              icon = "suitcase"
            ),
            dac.ValueBox(
              value = "53%",
              subtitle = "Bounce rate",
              color = "success",
              icon = "database"
            )
        ], className='row'),
        html.H4('Info Boxes'),
        html.Div([
            dac.InfoBox(
              title = "Messages",
              value = 1410,
              icon = "envelope"
            ),
            dac.InfoBox(
              title = "Bookmarks",
              color = "info",
              value = 240,
              icon = "bookmark"
            ),
            dac.InfoBox(
              title = "Comments",
              gradient_color = "danger",
              value = 41410,
              icon = "comments"
            )
        ], className='row'),
    ]
)