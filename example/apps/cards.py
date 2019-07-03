import dash_html_components as html
import dash_core_components as dcc
import dash_admin_components as dac

from example_plots import plot_pie, plot_surface, plot_scatter

dropdown_items = [
	dac.DropdownItem(url="https://www.google.com", children="Link to google"),
	dac.DropdownItem(url="#", children="item 2"),
	dac.DropdownDivider(),
	dac.DropdownItem(url="#", children="item 3")
]

cards_tab = dac.TabItem(id='content_cards', 
                              
    children=[
     
        html.Div(
            [
                    
                dac.Box(
                    [
                        dac.BoxHeader(
                            [
        						dac.BoxHeaderTools(dropdown_items),
                    			dac.BoxHeaderCollapseButton(),
                    			dac.BoxHeaderCloseButton()
                    		],
                            title="Closable box with dropdown"
                        ),
                    	dac.BoxBody(
                            dcc.Graph(
                                figure=plot_pie(),
                                config=dict(displayModeBar=False),
                                style={'width': '38vw'}
                            )
                        )		
                    ],
                    status='warning',
                    width=6
                ),
                        
                dac.Box(
                    [
                        dac.BoxHeader(
                            [
                    			dac.BoxHeaderCollapseButton(),
                    			dac.BoxHeaderCloseButton()
                    		],
                            title="Closable box with gradient"
                        ),
                    	dac.BoxBody(
                            dcc.Graph(
                                figure=plot_surface(),
                                config=dict(displayModeBar=False),
                                style={'width': '38vw'}
                            )
                        )		
                    ],
                    gradient_color="success",
                    width=6
                )
            ], 
            className='row'
        ),
                        
        html.Div(    
            dac.Box(
                [
                    dac.BoxHeader(
                        [
                			dac.BoxHeaderCollapseButton(),
                			dac.BoxHeaderCloseButton()
                		],
                        title="Card with solidHeader and elevation"
                    ),
                	dac.BoxBody(
                        dcc.Graph(
                            figure=plot_scatter(),
                            config=dict(displayModeBar=False),
                            style={'width': '38vw'}
                        )
                    )		
                ],
                status='primary',
                solid_header=True,
                elevation=4,
                width=6
            ),
            className='row'
        )
            
    ]
)