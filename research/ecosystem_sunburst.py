import plotly.express as px
import pandas as pd


# Example hierarchical data
df = pd.DataFrame({
    "Level1": [
        "Humans in need","Humans in need","Humans in need","Humans in need","Humans in need","Humans in need"
    ],
    "Level2": [
        "Aid Agencies", "Aid Agencies", "Low-Income Individuals","Low-Income Individuals",
          "Disaster-Affected Persons", "Disaster-Affected Persons",
    ],
    "Level3": [
        "Robotics", "Manufacturing", "Controls",
        "Mechanics", "Ecology", "Genetics"
    ],
    "Level3": [
        "Logistics and Supply Chain","Logistics and Supply Chain","Logistics and Supply Chain",
        "Logistics and Supply Chain","Logistics and Supply Chain","Logistics and Supply Chain"
    ],
    "Value": [30, 20, 25, 15, 18, 12]
})


fig = px.sunburst(
    df,
    path=["Level1", "Level2", "Level3"],
    # values="Value",
    title="Example Sunburst Plot"
)


fig.update_traces(
    textinfo="label+percent parent"
)


fig.update_layout(
    margin=dict(t=50, l=10, r=10, b=10)
)


fig.show()
