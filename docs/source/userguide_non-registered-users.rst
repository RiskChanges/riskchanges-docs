Beginner's Guide
=====================

RiskChanges can be accessed by users without registering or logging in. Registered users can make selected parts of their projects publicly available, allowing other users to explore the data without requiring an account.

This page explains how non-registered users can access and explore public RiskChanges projects using a **smartphone, tablet, or computer**.

.. note::

The functions available to public users depend on what the project owner has made publicly available.

Make Projects Publicly Available
^^^^^^^^^^^^^^^^^^^^^^^^^

To make existing projects publicly available, the registered user (the owner of the project) can activate it in the **Project Settings**. Go to the **Share to Public** section and activate the `Public Project` button. 
The registered user must also define which layers can be available to public. Otherwise, the public will be available without any layers in it. This includes the analysis results (e.g., Exposure, Loss, Risk, CBA). As for the Vulnerability, only the `Public Vulnerability` will be available to public.

.. figure:: /images/non-regis/project-settings.png
   :width: 100%
   :align: center

   *Project Settings to Activate Public Share*

Once this settings is applied, any visitors (non-registered users) of RiskChanges can view the project and the layers, as described in below sections.

Accessing Public Projects
^^^^^^^^^^^^^^^^^^^^^^^^^

Public projects can be explored without creating a RiskChanges account. Users can access available projects through the public project interface. 

Go to the RiskChanges landing page and click the top-right button **Explore RiskChanges**.

Projects can be viewed either as **cards** or through a **map view**, allowing users to find projects based on their location or topic.

.. figure:: /images/non-regis/card-view.png
   :width: 100%
   :align: center

   *Public Projects in Card View*

The project card view provides an overview of available public projects.

A project card may provide information such as:

- Project name.
- Project location.
- Hazards included in this project.
- Project members (only the initials are shown).

.. figure:: /images/non-regis/project-card.png
   :width: 100%
   :align: center

   *Public Card*

Select a project card to open the project and explore its publicly available datasets.

Map View
~~~~~~~~

The map view allows users to explore available public projects spatially.

Users can:

- Navigate around the map.
- Zoom in and out.
- Identify available public projects.
- Select a project from the map.
- Open a project to explore its available datasets.

This provides a convenient way to find projects based on their geographic location.

.. figure:: /images/non-regis/map-view.png
   :width: 100%
   :align: center

   *Public Projects in Map View*

Exploring a Public Project
^^^^^^^^^^^^^^^^^^^^^^^^^^^

After opening a public project, users can explore the datasets and visualizations made available by the project owner.

The available information can be explored directly through the map interface without requiring the user to log in.

Depending on the project configuration, users can use the following visualization tools:

- Standard 2D map visualization.
- 3D visualization.
- Split-screen map comparison.
- Location-based exploration.

.. figure:: /images/non-regis/explore.png
   :width: 100%
   :align: center

   *Exploring Public Project*

3D Visualization
^^^^^^^^^^^^^^^^

RiskChanges provides a **3D visualization** option for exploring spatial datasets in three dimensions. The 3D view can help users understand the relationship between datasets and the surrounding terrain.

To explore a dataset in 3D, users can activate the **3D** button at the top of the map canvas. Then, users can navigate around the 3D scene to explore the dataset.

Users can navigate the 3D scene by:

- Zooming in and out.
- Moving around the scene.
- Rotating the view.
- Changing the viewing angle.
- Exploring different areas of the dataset.

.. figure:: /images/non-regis/3d-viz.png
   :width: 100%
   :align: center

   *3D visualization of a public dataset.*

Comparing Two Maps
^^^^^^^^^^^^^^^^^^

RiskChanges provides a **split-screen visualization** that allows users to compare two maps or datasets side by side. The two map views can be explored together, allowing users to identify differences in the same geographic area.

This can be useful for identifying spatial differences between two datasets, such as:

- Two different scenarios.
- Different time periods.
- Baseline and alternative conditions.
- Different hazard datasets.
- Other comparable spatial datasets.

To compare two maps, users must activate the **Compare** button at the top of the map canvas. Then on the map layer list on the left panel, users will see options to make each layer to be either on `left`, `right`, or `both` sides of the screen. This would define the map layers to be compared.

After both maps are settled, users can adjust the map view as needed, and navigate across the map to compare the two datasets spatially.

.. figure:: /images/non-regis/compare.png
   :width: 100%
   :align: center

*Split-screen visualization for comparing two maps.*

Users can also do the comparison in **3D Visualization**.

.. figure:: /images/non-regis/compare-3d.png
   :width: 100%
   :align: center

*Split-screen visualization for comparing two maps (in 3D Visualization).*

Using My Location
^^^^^^^^^^^^^^^^^

The **Use My Location** function allows users to navigate directly to their current geographic location and explore the available RiskChanges data in the surrounding area. This function can be particularly useful when exploring a public project from a smartphone or tablet while in the field. However, users must allow the browser to access your location if prompted.

.. figure:: /images/non-regis/my-loc.png
   :width: 100%
   :align: center

   *Using My Location to explore nearby data.*

Additionally, users can also input a coordinate location (longitude and latitude) to the platform so it will navigate to a designated location of your choice.

Once set, the map will zoom to the defined location. Explore the available datasets and information around the location.

.. figure:: /images/non-regis/input-coord.png
   :width: 100%
   :align: center

   *Using a defined coordinate set to explore nearby data.*

.. note::

   Location access must be enabled in the browser or device settings for
   the **Use My Location** function to work. The accuracy of the displayed
   location depends on the device and its available positioning services.


Understanding the RiskChanges Analysis Modules
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

RiskChanges provides several analysis modules that support different stages of
disaster risk assessment and decision-making. As a first-time user, it is
helpful to understand what each module produces and what data are needed before
starting an analysis.

Registered users can use these modules to perform their own analyses and save
the resulting layers in their projects. Non-registered users cannot create or
run new analyses, but they can explore the analysis results that a project
owner has chosen to make public.

The four main modules are:

* **Exposure** — identifies and quantifies the elements at risk that may be
  affected by a hazard.
* **Loss** — estimates potential physical or economic damage resulting from
  hazard intensity and vulnerability.
* **Risk** — combines potential losses with the probability or frequency of
  hazard events to characterize expected risk.
* **Cost-Benefit Analysis (CBA)** — compares the benefits of a risk-reduction
  measure with its investment and maintenance costs to support decision-making.

The modules can be used as a workflow, where the output of one stage provides
information for the next. However, the exact workflow depends on the project
and the data available.

.. list-table:: Overview of RiskChanges analysis modules
   :widths: 18 30 30 22
   :header-rows: 1

   * - Module
     - What can you do?
     - What do you get?
     - Main input data
   * - **Exposure**
     - Identify elements at risk and determine how much of them is exposed to
       the hazard.
     - Spatial exposure information and exposure quantities, such as affected
       buildings, population, land use, or other assets.
     - **Admin**, **Hazard**, **EAR**
   * - **Loss**
     - Estimate potential damage or economic loss by combining hazard
       intensity, exposed assets, and vulnerability.
     - Estimated damage or monetary loss for the selected hazard scenario,
       intensity, asset type, and vulnerability relationship.
     - **Admin**, **Hazard**, **EAR**, **Vulnerability**
   * - **Risk**
     - Assess potential losses while considering the probability or frequency
       of hazardous events, allowing comparison across hazard scenarios or
       return periods.
     - Risk metrics such as expected or aggregated loss and spatial risk
       results, depending on the selected analysis.
     - **Admin**, **Hazard**, **EAR**, **Vulnerability** and the required
       hazard frequency/return-period information
   * - **CBA**
     - Compare a baseline situation with one or more risk-reduction
       alternatives and assess whether the expected benefits justify the
       costs.
     - Economic indicators and comparison results showing avoided losses,
       benefits, costs, and the economic performance of an alternative.
     - **Risk/Loss results**, **alternative measures**, and **economic cost
       and project parameters**

Data Types Used by the Analysis Modules
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Before running an analysis, users should understand the main data types used
by RiskChanges.

**Admin (Administrative data)**
   Defines the geographic or administrative context of the analysis, such as
   administrative boundaries or other areas used to organize and summarize
   results.

**Hazard**
   Describes the hazard being analysed and its spatial intensity or scenario.
   Depending on the hazard, this may include flood depth, flood extent,
   earthquake intensity, landslide information, or other hazard-specific
   datasets.

**EAR (Elements at Risk)**
   Represents the people, buildings, infrastructure, land use, or other
   assets that could be affected by a hazard. EAR data provide the information
   needed to identify what is exposed and, where applicable, to assign values
   to exposed assets.

**Vulnerability**
   Describes how an element at risk is expected to respond to a particular
   hazard intensity. Vulnerability information can be represented by
   vulnerability or damage functions/curves that relate hazard intensity to
   damage or loss.

   RiskChanges can provide **public vulnerability datasets** that registered
   users can use when suitable project-specific vulnerability information is
   not available. Users should select a vulnerability relationship that is
   appropriate for the hazard and the relevant EAR class.

.. note::

   The availability and suitability of vulnerability data can vary by hazard,
   asset type, location, and analysis. Public vulnerability data are provided
   to support analysis, but users should check that the selected vulnerability
   relationship is appropriate for their application.

Exposure Module
~~~~~~~~~~~~~~~

The **Exposure** module answers a fundamental question:

   **What is located in the area affected by the hazard, and how much is
   exposed?**

Registered users can use the Exposure module to overlay hazard information
with elements at risk and quantify the affected assets or population. The
analysis can help users understand the spatial distribution of exposure and
identify which types of assets are most affected.

Typical analyses may include:

* Identifying EAR located within a hazard extent.
* Quantifying exposed buildings, population, infrastructure, land use, or
  other assets.
* Summarizing exposure by administrative area or asset category.
* Visualizing the spatial distribution of exposed assets.

**Required data:** Admin, Hazard, and EAR.

The Exposure module does **not** require vulnerability curves because it
describes what is exposed rather than estimating the damage that will occur.

Loss Module
~~~~~~~~~~~

The **Loss** module moves from exposure to potential consequences. It answers:

   **Given the hazard intensity and the vulnerability of the exposed assets,
   how much damage or economic loss could occur?**

Registered users can combine hazard intensity, EAR information, and
vulnerability data to estimate potential losses. Depending on the available
data and project configuration, the results can be mapped spatially and
summarized by asset type or administrative area.

Typical analyses may include:

* Estimating damage or loss for a selected hazard scenario.
* Comparing losses between different hazard intensities or scenarios.
* Summarizing losses by asset type or geographic area.
* Examining how different vulnerability relationships affect estimated loss.

**Required data:** Admin, Hazard, EAR, and Vulnerability.

RiskChanges also provides **public vulnerability data** that can be selected
when appropriate. This allows users to perform loss analysis even when they do
not have their own project-specific vulnerability curves, provided that a
suitable public vulnerability relationship is available.

Risk Module
~~~~~~~~~~~

The **Risk** module extends loss analysis by considering the likelihood or
frequency of hazardous events. It answers:

   **How much loss can be expected when both the magnitude of potential loss
   and the probability of hazardous events are considered?**

Registered users can use the Risk module to evaluate losses across multiple
hazard scenarios or return periods and derive risk information for spatial or
administrative comparison.

Typical analyses may include:

* Comparing potential losses across different return periods.
* Estimating risk measures from scenario-based loss results.
* Identifying areas or asset classes with higher levels of risk.
* Comparing risk between different scenarios or project conditions.

**Required data:** Admin, Hazard, EAR, and Vulnerability, together with the
hazard frequency or return-period information required by the selected risk
calculation.

The Risk module therefore builds on the information needed for exposure and
loss analysis. The exact risk indicators available depend on the selected
hazard and project configuration.

Cost-Benefit Analysis (CBA) Module
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **Cost-Benefit Analysis (CBA)** module supports decisions about whether a
risk-reduction measure is economically worthwhile. It answers:

   **Do the expected benefits of an intervention outweigh its investment and
   ongoing costs?**

Registered users can compare a **Baseline** situation with one or more
**Alternatives**, such as flood protection infrastructure, building
retrofitting, nature-based solutions, land-use measures, or early warning
systems.

The CBA can use loss or risk information to estimate the benefits of an
alternative through **avoided losses**. These benefits can then be compared
with the costs of implementing and maintaining the intervention.

Typical analyses may include:

* Comparing baseline and alternative risk or loss.
* Estimating avoided losses as the benefit of an intervention.
* Accounting for investment (CAPEX) and maintenance costs.
* Considering project lifetime and the timing of investments and benefits.
* Comparing alternative measures using economic indicators.

**Required data:** Existing loss/risk results or the information needed to
derive them, together with the definition of the alternative and its economic
parameters. Typical economic inputs include the base year, project start,
project lifetime, initial investment, maintenance costs, and other applicable
cost assumptions.

.. note::

   CBA is different from the Exposure, Loss, and Risk modules because it is
   primarily a **decision-support and economic evaluation** step. It uses the
   results of risk assessment together with intervention costs rather than
   requiring a new vulnerability dataset as its primary input.

How the Modules Fit Together
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For a new user, the modules can be understood as a progression from describing
what is exposed to evaluating whether an intervention is worthwhile:

.. code-block:: text

   Hazard + EAR
        |
        v
   +-------------+
   |  EXPOSURE   |
   | What is     |
   | exposed?    |
   +-------------+
        |
        | + Vulnerability
        v
   +-------------+
   |    LOSS     |
   | How much    |
   | damage/loss?|
   +-------------+
        |
        | + Event probability/
        |   return periods
        v
   +-------------+
   |    RISK     |
   | How much    |
   | risk over   |
   | time?       |
   +-------------+
        |
        | + Intervention
        |   costs
        v
   +-------------+
   |     CBA     |
   | Is the       |
   | intervention |
   | worthwhile?  |
   +-------------+

This progression is a useful way to understand the role of each module, but
users do not necessarily need to run every module in every project. The
appropriate analysis depends on the project's objectives, available datasets,
and the questions that need to be answered.

What to Expect as a New User
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you are visiting RiskChanges for the first time, you can start by exploring
a **public project** without registering. This allows you to see how hazard,
exposure, loss, risk, and CBA results can be presented in a real project.

When exploring a public project, look for:

* Which **hazards** are included.
* Which **EAR classes or assets** are analysed.
* Which **vulnerability** relationships are used or made available.
* Whether **Exposure, Loss, Risk, or CBA** results have been published.
* How the results are displayed on the map and, where available, in 3D or
  comparison views.

If you later register as a user, you can create and configure your own
projects, prepare or upload the required datasets, run the available analyses,
and save the resulting outputs for further exploration and comparison.

Using RiskChanges on Different Devices
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The public RiskChanges interface can be accessed from different types of devices.

Smartphones
~~~~~~~~~~~

On smartphones, the interface can be used to:

- Browse public projects.
- Explore map data.
- Use **My Location** to explore nearby information.
- Navigate 3D visualizations.
- Compare maps using split-screen visualization.

Tablets
~~~~~~~

On tablets, users can explore public projects and datasets using the larger screen to interact with maps, 3D scenes, and comparison views.

Computers
~~~~~~~~~

On computers, users can use the full available screen area to explore public projects, datasets, 3D visualizations, and split-screen comparisons.

Video Tutorial
^^^^^^^^^^^^^^

A short video tutorial can be provided to demonstrate how non-registered users can explore public RiskChanges projects.

The video demonstrates:

1. Opening a public RiskChanges project.
2. Browsing available projects using cards and the map view.
3. Opening a dataset.
4. Using the 3D visualization.
5. Comparing two maps using split-screen visualization.
6. Using **My Location** to explore data around the current location.

.. raw:: html

   <div style="text-align: center; margin: 20px 0;">
      <video controls width="80%">
         <source src="/videos/public-user-guide.mp4" type="video/mp4">
         Your browser does not support the video tag.
      </video>
   </div>
