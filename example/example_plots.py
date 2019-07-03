import numpy as np
import pandas as pd

import plotly.graph_objs as go

def plot_pie():
    
    labels = ['Oxygen','Hydrogen','Carbon_Dioxide','Nitrogen']
    values = [4500,2500,1053,500]
    colors = ['#FEBFB3', '#E1396C', '#96D38C', '#D0F9B1']
    
    trace = go.Pie(labels=labels, values=values,
                   hoverinfo='label+percent', textinfo='value', 
                   textfont=dict(size=20),
                   marker=dict(colors=colors, 
                               line=dict(color='#000000', width=2)))
                                         
    return dict(data=[trace]) 
   
def plot_scatter(N=50):
    
    trace1 = go.Scatter(
        y = np.random.randn(N),
        mode='markers',
        marker=dict(
            size=16,
            color = np.random.randn(N), #set color equal to a variable
            colorscale='Viridis',
            showscale=True
        )
    )
        
    return dict(data=[trace1])

def plot_surface():
    z_data = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv')
    
    data = [
        go.Surface(
            z=z_data.values,
            contours=go.surface.Contours(
                z=go.surface.contours.Z(
                  show=True,
                  usecolormap=True,
                  highlightcolor="#42f462",
                  project=dict(z=True)
                )
            )
        )
    ]
    layout = go.Layout(
        title='Mt Bruno Elevation',
        scene=dict(camera=dict(eye=dict(x=1.87, y=0.88, z=-0.64))),
        paper_bgcolor='rgba(0,0,0,0)',
        plot_bgcolor='rgba(0,0,0,0)',
        margin=dict(
            l=35,
            r=20,
            b=35,
            t=45
        )
    )
    return go.Figure(data=data, layout=layout)