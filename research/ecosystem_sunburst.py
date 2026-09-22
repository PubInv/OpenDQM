import numpy as np
import matplotlib.pyplot as plt


# ============================================================
# OPEN DQM RADIAL ECOSYSTEM MAP
#
# ANGLE = ecosystem actor
# RADIUS = interaction layer
# ============================================================


# ------------------------------------------------------------
# 1. ECOSYSTEM ACTORS
# ------------------------------------------------------------


actors = [
    "Researchers /\nEngineers",
    "Design\nNetworks",
    "IoPA",
    "GOSQAS",
    "Standards\nBodies",
    "Test\nDevelopers",
    "Proprietary\nProducers",
    "Open-Source\nProducers",
    "Hobby\nMakers",
    "Mass\nProducers",
    "Bespoke\nProducers",
    "Curators",
    "Donors &\nFunders",
    "International\nOrgs",
    "NGOs /\nFoundations",
    "Governments",
    "The Public",
    "Humanitarian\nAid Agencies",
    "Low-Resource\nPersons",
    "Disaster-Affected\nPersons",
    "Legal"
]


# ------------------------------------------------------------
# 2. UNIFIED INTERACTION LAYERS
# ------------------------------------------------------------


layers = [
    "Goods",
    "Infrastructure",
    "Deliverables",
    "Dollars",
    "Trust"
]


N = len(actors)


# Equal angular sector for every actor
angles = np.linspace(0, 2*np.pi, N, endpoint=False)


sector_width = (2*np.pi / N) * 0.96




# ------------------------------------------------------------
# 3. CREATE FIGURE
# ------------------------------------------------------------


fig, ax = plt.subplots(
    figsize=(14, 14),
    subplot_kw={"projection": "polar"}
)


# Put first actor at top
ax.set_theta_offset(np.pi / 2)


# Go clockwise
ax.set_theta_direction(-1)




# ------------------------------------------------------------
# 4. CENTRAL OPENDQM REGION
# ------------------------------------------------------------


center_radius = 1.5


ax.bar(
    0,
    center_radius,
    width=2*np.pi,
    bottom=0,
    align="edge",
    alpha=0.15,
    edgecolor="black",
    linewidth=1.5
)


ax.text(
    0,
    0,
    "OpenDQM",
    ha="center",
    va="center",
    fontsize=18,
    fontweight="bold"
)




# ------------------------------------------------------------
# 5. ACTOR RING
# ------------------------------------------------------------


actor_bottom = center_radius
actor_height = 1.3


for angle, actor in zip(angles, actors):


    ax.bar(
        angle,
        actor_height,
        width=sector_width,
        bottom=actor_bottom,
        align="edge",
        alpha=0.30,
        edgecolor="white",
        linewidth=1
    )


    text_angle = angle + sector_width / 2


    ax.text(
        text_angle,
        actor_bottom + actor_height / 2,
        actor,
        ha="center",
        va="center",
        fontsize=7,
        rotation=np.degrees(np.pi/2 - text_angle),
        rotation_mode="anchor"
    )




# ------------------------------------------------------------
# 6. UNIFIED INTERACTION RINGS
# ------------------------------------------------------------


layer_height = 1.0


layer_start = actor_bottom + actor_height


for i, layer in enumerate(layers):


    bottom = layer_start + i * layer_height


    # ONE continuous 360-degree ring
    ax.bar(
        0,
        layer_height,
        width=2*np.pi,
        bottom=bottom,
        align="edge",
        alpha=0.12 + i * 0.025,
        edgecolor="black",
        linewidth=1
    )


    # Ring label
    ax.text(
        np.radians(2),
        bottom + layer_height / 2,
        layer,
        ha="left",
        va="center",
        fontsize=11,
        fontweight="bold"
    )




# ------------------------------------------------------------
# 7. OPTIONAL: HIGHLIGHT WHICH ACTORS PARTICIPATE
#    IN EACH INTERACTION LAYER
#
# Replace these examples with your real OpenDQM relationships.
# ------------------------------------------------------------


participation = {


    "Goods": [
        "Proprietary\nProducers",
        "Open-Source\nProducers",
        "Mass\nProducers",
        "Bespoke\nProducers",
        "Humanitarian\nAid Agencies",
        "Low-Resource\nPersons",
        "Disaster-Affected\nPersons"
    ],


    "Infrastructure": [
        "Design\nNetworks",
        "IoPA",
        "GOSQAS",
        "Curators"
    ],


    "Deliverables": [
        "Researchers /\nEngineers",
        "Standards\nBodies",
        "Test\nDevelopers",
        "Proprietary\nProducers",
        "Open-Source\nProducers"
    ],


    "Dollars": [
        "Donors &\nFunders",
        "International\nOrgs",
        "NGOs /\nFoundations",
        "Governments",
        "Proprietary\nProducers",
        "Open-Source\nProducers"
    ],


    "Trust": [
        "Researchers /\nEngineers",
        "Design\nNetworks",
        "Standards\nBodies",
        "Test\nDevelopers",
        "Legal",
        "Humanitarian\nAid Agencies"
    ]
}




# ------------------------------------------------------------
# 8. DRAW PARTICIPATION CELLS
#
# These sit ON TOP of the unified rings.
# ------------------------------------------------------------


for layer_index, layer in enumerate(layers):


    bottom = layer_start + layer_index * layer_height


    for actor_index, actor in enumerate(actors):


        if actor in participation[layer]:


            ax.bar(
                angles[actor_index],
                layer_height,
                width=sector_width,
                bottom=bottom,
                align="edge",
                alpha=0.65,
                edgecolor="white",
                linewidth=0.8
            )




# ------------------------------------------------------------
# 9. CLEAN UP
# ------------------------------------------------------------


max_radius = (
    center_radius
    + actor_height
    + len(layers) * layer_height
)


ax.set_ylim(0, max_radius)


ax.set_xticks([])
ax.set_yticks([])


ax.spines["polar"].set_visible(False)


ax.set_title(
    "OpenDQM Ecosystem Interaction Map",
    fontsize=20,
    pad=30
)


plt.tight_layout()
plt.show()
