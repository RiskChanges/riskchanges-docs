Tutorials (Bangladesh Case Study)
==================

.. contents::
   :local:
   :depth: 2

This section provides step-by-step instructions on how to use the RiskChanges platform through a Bangladesh-based case study. 
Each section is accompanied by a detailed video walkthrough to support learning and hands-on exploration.

About the Demo Dataset
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To support learning, testing, and demonstration of the RiskChanges platform, this tutorial uses a demo dataset based on Bangladesh, with a thematic focus on the power sector.

The dataset is designed to demonstrate RiskChanges' workflow, from data ingestion and exposure calculation to loss estimation, risk analysis, and comparison of future climate scenarios, without requiring users to upload their own data at the initial stage.

Bangladesh is selected as a case study due to its high exposure to climate-related hazards, including floods, coastal flooding, and wind storms, as well as the critical role of energy infrastructure in supporting socioeconomic resilience. By using a real-world geographhic context and realistic data structures, the dataset enables users to explore how RiskChanges can be applied to infrastructure risk assessment and climate adaaptation planning.

While the dataset is simplified for tutorial purposes, it closely mirrors the data organization, formats, and metadata requirements expected when working with user-provided datasets in the RiskChanges platform.

The table below summarizes the contents of the demo dataset and their respective sources. 

+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| Category | Sub-category | Details | Data Source |
+==============================+============================+===============================================================================================================+=============================+
| Administrative | Boundary data | Four administrative levels: 8 divisions, 64 districts, 544 upazilas, and 5,160 unions. | National administrative data |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| Hazards | Coastal flood | Flood depth (m) for 500-year return period under multiple scenarios: baseline (2020) and future (2030, 2050, 2080). | Fathom |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| | Fluvial flood | Flood depth (m) for six return periods (5, 20, 50, 100, 200, 500) under baseline and SSP2-4.5 scenarios. | Fathom |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| | Wind storm | Wind speed (m/s) for 100-year return period under baseline (2018) and future (2030, 2050, 2080) scenarios. | NCAR |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| Elements at Risk (EaR) | Population density | Rural, urban, and total population density for baseline (2020) and future scenarios (2030, 2050, 2080). | Public population datasets |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| | Substations | Substation polygons with attributes including name and voltage level. | Power sector datasets |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| | Power plants | Power plant polygons with plant name and basic attributes. | Power sector datasets |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| | Critical transmission line | Points of interest representing key transmission assets and infrastructure components. | Power sector datasets |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| Vulnerability | Buildings | Physical and population vulnerability curves for flood, debris flow, landslide, and tsunami hazards. | Demonstration vulnerability |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+
| | Land parcels | Physical and population vulnerability curves for flood, debris flow, landslide, and tsunami hazards. | Demonstration vulnerability |
+------------------------------+----------------------------+---------------------------------------------------------------------------------------------------------------+-----------------------------+

.. note::
   The data provided in this tutorial is intended solely for demonstration and training purposes. While it reflects realistic structures and plausible values, it should not be interpreted as an official risk assessment for Bangladesh.

👉 Please refer `here <https://drive.google.com/file/d/1b74u6nUtmWaxMKOtcMbxp5b22cLHvt5D/view?usp=drive_link>`_ to access the dataset for this tutorial.

Step-by-step Walkthrough
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Let’s now go through the core tasks you’ll perform on the RiskChanges platform.

1. User Registration and Profile Setup
-----------------------------------------

To begin working with RiskChanges, users must first create an account and configure their profile. This step establishes user identity, access rights, and project participation, forming the foundation for collaborative workflows within the platform. 
To register an account, go to RiskChanges website: http://riskchanges.org/.

Follow `this guide <https://sdss-documentation.readthedocs.io/en/latest/userguide_inputdata.html#register-an-account-and-setup-the-profile>`_ to create your account and set up your profile.

.. figure:: /images/tutorials_inputdata/registration.png
   :scale: 60%
   :align: center

   *Register to RiskChanges*

a. Click the **Explore RiskChanges** button on the top-right corner of the website.
b. Click **Register Here** on the bottom part below the Login form.
c. Fill in the **Registration form** with your name, email address, and password, and click **Register**.
d. Check your email and verify your account. In case no email comes to your inbox from RiskChanges, please check your Spam folder.
e. Login to your new account with your email and create a password. It will take you to the main dashboard of your RiskChanges account, the Project Dashboard.
f. Click the name and three options will be shown which are **Update Profile, Change Password, and Logout**. By clicking each of those, you can update your profile, change your password, and logout.

.. figure:: /images/tutorials_inputdata/update_profile.png
   :scale: 50%
   :align: center

   *Profile and Project Dashboard*

2. Create a Project
----------------

Once registered and logged in, the next step is to create or access a project. Projcets act as containers for all datasets, analyses, and results. Every exposure, loss, and risk calculation in RiskChanges is performed within a project context, making this step essential before any data can be uploaded or processed.

The Project Dashboard consists of the list of projects that the users have created or have been assigned to. Aside from that, in this dashboard users can also filter and search a specific project by name, study type, hazard type, or sorting the project.

a. Click **New Project** to be redirecte to the **Add New Project** page.
b. There are four pages to be filled related to the project, which are: |General|, |Staff|, |Alternatives|, and |Scenarios|. Only the **General** section is required for now. 
c. In the |General| page, users need to enter related details about the project. 

   - **Project Name**: Bangladesh Power Sector Assessment
   - **Study Area**: Bangladesh
   - **Description**: Power system infrastructure risk assessment under multiple scenarios.

.. figure:: /images/bangladesh/addproject.png
   :scale: 80%
   :align: center

   *Filling General section*

d. The |Staff| page allows users to invite and design the team members in the associated project. The projects that are created or assigned to the user are displayed as cards in the **Project Dashboards** and can be filtered easily through the **filter function**.

.. figure:: /images/bangladesh/projectdashboard.png
   :scale: 60%
   :align: center

   *Project Dashboard*

e. The |Alternatives| page allows users to define different alternatives for the project. Alternatives can represent different development pathways, infrastructure designs, or policy options that may impact risk outcomes.
f. The |Scenarios| page allows users to define different scenarios for the project. Scenarios can represent various future conditions, such as climate change projections, socioeconomic developments, or hazard event characteristics.

.. |General| image:: /images/tutorials/general.png
           :scale: 80% 

.. |Staff| image:: /images/tutorials/staff.png
           :scale: 80% 

.. |Alternatives| image:: /images/tutorials/alternatives.png
           :scale: 80% 

.. |Scenarios| image:: /images/tutorials/scenarios.png
           :scale: 80% 

3. Upload and Visualize Datasets
-------------------------

After creating a project, users can begin populating it with data. RiskChanges follows a structured data input sequence to ensure consistency and traceability across analysis. In general, users start by uploading adminstrative boundaries, followwed by hazard layers, elements-at-risk datasets, and finally vulnerability data. Each dataset is immediately visualized to allow verification before proceeding to the next step.

Administrative Boundary Data
""""""""""""""""""""""""""""

Administrative boundaries provide the spatial units for aggregating exposure, loss, and risk results. Uploading these datasets early ensures that subsequent analyses can be summarized at meaningful governance or planning levels, such as districts or municipalities.

From **Project Dashboard**, choose the project you will work on and click on the project name.

a. Choose **Admin Level** and click Add Admin Level.
b. In the **General** section, upload your administrative boundary shapefile in a zipped folder.
c. Click to **Upload or Drag and Drop** the administrative boundary data to upload the file.
d. Type in **Name** and click **Save** to apply.

   - **Name**: Bangladesh Division (depending on which dataset, you can name it as Bangladesh Province, Bangladesh Districts, or Bangladesh Sub-Districts).
   - **Label Field**: [Adm1 en] for division, [Adm 2 en] for province, [Adm3 en] for districts, or [Adm4 en] for sub-districts.
   - **Color Map**: antiquewhite.
   - **Label**: Administrative Unit.

The administrative boundary will be automatically loaded in the map canvas with a single symbol styling. Users can change the visualization and symbology of the map view by going to the **Detail** tab.

.. figure:: /images/bangladesh/adminsettings.png
   :scale: 80%
   :align: center

   *Administrative Boundary Data Upload Settings*

.. figure:: /images/bangladesh/adminbangladesh.png
   :scale: 80%
   :align: center

   *Bangladesh Administrative Boundary*

Hazard Data
"""""""""""""""""

Hazard layers define the spatial extent and intensity of natural hazards and are a critical input for exposure assessment. In the demo dataset, multiple hazard types and return periods are used to demonstrate how RiskChanges supports both single-hazard and multi-scenario analysis.

a. Go to **Hazard** and click **Add Hazard**.
b. In the **General** section, upload your hazard data. The data must be in either a GeoTIFF or shapefile (in a zipped folder) format. Other options are soon to be available which are to connect to OGC Service or global datasets.
c. Click to **upload** or **drag and drop** the hazard data to upload the data.
d. Type in the **Layer Name**, **Hazard Type**, **Hazar Sub Type**, **Hazard Intensity Type**, **Hazard Intensity Unit**, **Return Period** (years), **Representation Year**, **Risk Reduction Alternative** (if applicablr), and **Scenario** (iff applicable).

+----------------------------------------------+-------------------------------+-------------+------------------+-----------------------+------------------------+---------------+----------------------+-----------+
| Hazard Name                                  | Layer Name                    | Hazard Type | Hazard Sub Type  | Hazard Intensity Type | Hazard Intensity Unit | Return Period | Representation Year | Scenario  |
+==============================================+===============================+=============+==================+=======================+========================+===============+======================+===========+
| Coastal Flood (Baseline)                     | CoastalFlood_2020             | Flood       | Coastal flood    | Height                | meters                 | 500           | 2020                 | Baseline  |
+----------------------------------------------+-------------------------------+-------------+------------------+-----------------------+------------------------+---------------+----------------------+-----------+
| Coastal Flood                                | CoastalFlood_2030             | Flood       | Coastal flood    | Height                | meters                 | 500           | 2030                 | SSP126    |
+----------------------------------------------+-------------------------------+-------------+------------------+-----------------------+------------------------+---------------+----------------------+-----------+
| Fluvial Undefended Flood (5y, Baseline)      | Baseline_Fluvial_Undefended_5y| Flood       | Fluvial flood    | Height                | meters                 | 5             | 2020                 | Baseline  |
+----------------------------------------------+-------------------------------+-------------+------------------+-----------------------+------------------------+---------------+----------------------+-----------+
| Wind Speed Gust (Baseline)                   | WindSpeed_2018                | Storm       | Cyclone          | Wind speed            | m/s                    | 100           | 2018                 | Baseline  |
+----------------------------------------------+-------------------------------+-------------+------------------+-----------------------+------------------------+---------------+----------------------+-----------+
| Wind Speed Gust                              | WindSpeed_2030                | Storm       | Cyclone          | Wind speed            | m/s                    | 100           | 2030                 | SSP126    |
+----------------------------------------------+-------------------------------+-------------+------------------+-----------------------+------------------------+---------------+----------------------+-----------+

.. note::

   - Representation years can be adjusted based on available layers (2030, 2050, 2080).
   - Multiple scenarios are supported where available: SSP126, SSP245, SSP370, SSP585.
   - Default scenario is **SSP126** unless otherwise specified.

e. Click **Save** and the hazard layer will be automatically displayed in the map canvas.
f. The default styling is a **User Defined Classes** (graduated) for raster data. Whereas for vector (shapefile) datasets, if the hazard intensity type is **Susceptibility**, the default style is **Automatic Classes** (categorized).

.. figure:: /images/bangladesh/hazardsettings.png
   :scale: 80%
   :align: center

   *Hazard Layer Settings*

The **Detail** section is used to adjust the settings for the layer's visualization. Additionally, the chosen style will also be applied as the base classes for **Exposure** calculation.

a. Select the **Class Mode** whether it is **Single Class**, **User Defined Classes**, or **Automatic Classes**.
b. For **Single Class**, users need to select the dataset's **Field** which will be used as well as the **Minimum Value** and **Maximum Value** to be displayed. Then, a **Color Map** will be selected for the visualization.
c. For **User Defined Classes**, after selecting the dataset's **Field**, **Minimum Value**, and **Maximum Value**, **Total Class** neds to be defined as well as the ** Classification Method** (options available are equal interval, quantile, natural breaks, standard deviation, geometric interval, logarithmic scale, and percentile). A **Color Map** needs to be selected as well for visualization. 

+---------------------------+---------------------------+---------+---------------+-------------+------------------------+-----------+
| Hazard Type               | Style Mode                | Field   | Minimum Value | Total Class | Classification Method | Color Map |
+===========================+===========================+=========+===============+=============+========================+===========+
| Coastal Flood             | User Defined Classes      | [VALUE] | 0.001         | 5           | Equal Interval         | Blue      |
+---------------------------+---------------------------+---------+---------------+-------------+------------------------+-----------+
| Fluvial Undefended Flood  | User Defined Classes      | [VALUE] | 0.1           | 5           | Equal Interval         | Blues     |
+---------------------------+---------------------------+---------+---------------+-------------+------------------------+-----------+
| Wind Speed Gust           | User Defined Classes      | [VALUE] | 10            | 5           | Equal Interval         | afmhot_r |
+---------------------------+---------------------------+---------+---------------+-------------+------------------------+-----------+

.. note::

   - All layers use **User Defined Classes** with equal interval classification.
   - The `[VALUE]` field is used for symbology across all hazard layers.

d. Click **Save**.

Users can also go to the **Symbology** section to adjust the layer's labels.

.. figure:: /images/bangladesh/hazardviz.png
   :scale: 80%
   :align: center

   *Bangladesh Hazard Layer Visualization*

Element-at-Risk (EaR) Data
""""""""""""""""""""""""""""""""

Go to **EaR > Add EaR** to upload buildings, roads, or land parcels. You can use either **GeoTIFF** or **shapefiles**. Then, define the following fields:

   - **Layer Name**
   - **EaR Type / Subtype**
   - **Year**, optional: **Alternative**, **Scenario**
 
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+
| **EaR Name**        | **Layer Name**        | **EaR Type**           | **EaR Sub Type**                         | **Representation Year** |
+=====================+=======================+========================+==========================================+========================+
| Building Point      | Building_Points       | Points                 | Buildings                                | 2020                   |
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+
| Building Footprints | Building_Footprint    | Buildings              | Classified by Occupancy Class            | 2020                   |
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+
| Roads               | Roads                 | Lines                  | Roads                                    | 2020                   |
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+
| Land Parcel         | Land_Parcel           | Polygons               | Land use                                 | 2020                   |
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+

Similarly, use the **Style** section to adjust the visualization. After adjusting, click **Save** to apply the changes.

- Choose between Single Class, Automated Classes, User Defined Classes.
- Define:

  - Field, Area, Value, Population, Units
  - Color Map

+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| **EaR Name**        | **Style Mode**       | **Field**                | **Area Field** | **Area Unit** | **Value Field** | **Value Unit** | **People Field** | **People Unit** | ** Color Map** |
+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Building Point      | Automated Classes    | [TYPE]                   | [AREA]         | sq.m          | [VALUE]         | USD            | [PEOPLE]         | (number)        | brg_r          |
+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Building Footprints | Automated Classes    | [USE]                    | [AREA_N]       | sq.m          | [VALUE]         | USD            | [PEOPLE]         | (number)        | brg_r          |
+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Roads               | User Defined Classes | [CALCULATED_AREA_LENGTH] | –              | –             | –               | –              | –                | -               | autumn_r       |
+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Land Parcel         | Automated Classes    | [TYPE]                   | [AREA_N]       | sq.m          | [VALUE]         | USD            | [PEOPLE]         | (number)        | brg            |
+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+

.. figure:: /images/tutorials/ear.png
   :scale: 80%
   :align: center

   *Element-at-Risk Visualization*

1. Vulnerability Table
---------------------------

In the **Vulnerability** tab, you can add a vulnerability curve either by uploading a **CSV** or filling in data manually. Each record should include: `Hazard Intensity From`, `Hazard Intensity To`, `Vulnerability Value`

Before uploading, you will be asked to provide metadata like:

- Vulnerability Region and Type
- Hazard Type/Subtype
- Intensity Mode and Unit
- EaR Type, Subtype, and Class
- Source, Description
- Public/Private visibility: If marked **Public**, others can use the record. Otherwise, it will stay under **My Vulnerability**.

.. figure:: /images/tutorials/vul_input.png
   :scale: 80%
   :align: center

   *Vulnerability Table Input*

.. figure:: /images/tutorials/vul_curve.png
   :scale: 80%
   :align: center

   *Vulnerability Curve*

The related vulnerability tables have been imported and available to the public. Users can use the tables for this exercise.

**Vulnerability IDs for Building Materials**

+-----------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| **ID**                      | **Debris Flow (Physical)** | **Flood (Physical)** | **Landslide (Physical)** | **Debris Flow (Population)** | **Flood (Population)** | **Landslide (Population)** |
+=============================+============================+======================+==========================+==============================+========================+============================+
| Masonry 1 floor             | 86                         | 78                   | 94                       | 162                          | 170                    | 182                        |
+-----------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Masonry 2 floor             | 87                         | 79                   | 95                       | 163                          | 171                    | 183                        |
+-----------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Masonry 3 floor             | 88                         | 80                   | 96                       | 164                          | 172                    | 184                        |
+-----------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Reinforced Concrete 1 floor | 89                         | 81                   | 97                       | 165                          | 173                    | 185                        |
+-----------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Reinforced Concrete 2 floor | 90                         | 82                   | 98                       | 166                          | 174                    | 186                        |
+-----------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Reinforced Concrete 3 floor | 91                         | 83                   | 99                       | 167                          | 175                    | 187                        |
+-----------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Reinforced Concrete 4 floor | 92                         | 84                   | 100                      | 168                          | 176                    | 188                        |
+-----------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Wooden                      | 93                         | 86                   | 101                      | 169                          | 177                    | 189                        |
+-----------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+


**Vulnerability IDs for Land Parcel Types**

+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| **ID**                    | **Debris Flow (Physical)** | **Flood (Physical)** | **Landslide (Physical)** | **Debris Flow (Population)** | **Flood (Population)** | **Landslide (Population)** |
+===========================+============================+======================+==========================+==============================+========================+============================+
| Agricultural Fields       | All 1                      | 132                  | 135                      | 190                          | 212                    | 234                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Animal Farm               | 102                        | 133                  | 136                      | 191                          | 213                    | 235                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Bare                      | All 0                      | All 0                | 137                      | 192                          | 214                    | 236                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Commercial                | 103                        | 134                  | 138                      | 193                          | 215                    | 237                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Cultural Heritage         | 104                        | 118                  | 143                      | 194                          | 216                    | 238                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Farm                      | 105                        | 119                  | 144                      | 195                          | 217                    | 239                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Forest Natural            | 106                        | 120                  | 145                      | 196                          | 218                    | 240                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Forest Planted Protective | 107                        | 121                  | 146                      | 197                          | 219                    | 241                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Grassland                 | All 1                      | 122                  | 147                      | 198                          | 220                    | 242                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Highway                   | 108                        | 123                  | 148                      | 199                          | 221                    | 243                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Industry                  | 109                        | 124                  | 149                      | 200                          | 222                    | 244                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Open Space                | All 0                      | All 0                | All 0                    | 201                          | 223                    | 245                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Orchard                   | 110                        | 125                  | 150                      | 202                          | 224                    | 246                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Parking Lot               | 111                        | 126                  | 151                      | 203                          | 225                    | 247                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Parkland                  | 112                        | 127                  | 152                      | 204                          | 226                    | 248                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Quarry                    | 113                        | -                    | 153                      | 205                          | 227                    | 249                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Residential               | 114                        | 128                  | 154                      | 206                          | 228                    | 250                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Shrubs                    | All 1                      | 129                  | 155                      | 207                          | 229                    | 251                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Toll Area                 | 115                        | -                    | 178                      | 208                          | 230                    | 252                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Tourist Resort            | 116                        | 130                  | 179                      | 209                          | 231                    | 253                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Vineyard                  | All 1                      | 131                  | 180                      | 210                          | 232                    | 254                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+
| Water Tank                | 117                        | -                    | 181                      | 211                          | 233                    | 255                        |
+---------------------------+----------------------------+----------------------+--------------------------+------------------------------+------------------------+----------------------------+

.. note::
   Vulnerability data is **not required** for Exposure analysis but is **essential** for Loss and Risk calculations.

5. Running an Exposure Analysis
------------------------------------

Go to **Exposure > Add Exposure**. Choose between:

- **Individual** (feature-based): Exposure is calculated for each elements-at-risk feature.
- **Aggregated** (admin unit-based): Exposure is calculated based on admnistrative boundaries.

In the General section, enter:

- **Layer Name**: `Flood20_Building`
- Select the **Hazard** and **EaR** layers
- Choose Intensity: **Minimum**, **Average**, or **Maximum**. These options will affect the layer visualization after the calculation. All intensities will still be calculated and users can change the visualization options afterwards.

(This setting is used for calculating 20-years return period flood to building footprints - **Individual Exposure**)

.. figure:: /images/tutorials/exposure.png
   :scale: 80%
   :align: center

   *Individual Exposure Calculation*

For **Aggregated Exposure**, we need to input several information which are based on the calculated individual exposure. Therefore, we must calculate an associatd Individual Exposure beforehand:

- **Layer Name**: `Flood20_Building_Agg`
-  **Hazard**: `Flood20_Building`
-  **Admin Level**: `Admin_Unit`
-  **Intensity**: `Average Intensity`

.. figure:: /images/tutorials/exposure_agg.png
   :scale: 80%
   :align: center

   *Aggregated Exposure Calculation*

Once calculated, two tables are obtained from the calculation, which are **Summary Table** and **Detail Table**. The Summary Table summarizes the number of exposed Elements-at-Risk by each defined for every hazard class. The Detail Table provides the exposure information for each Element-at-Risk feature.

Both tables will show metrics like:

- Exposed fraction
- Exposed area / length: Depends on the type of elements-at-risk (polygon / line)
- Exposed Population, Value, number of floors: Depends on the information availability in the elements-at-risk attribute data. 
- Minimum, average, maximum intensity: Only shown in Detal Table.

.. figure:: /images/tutorials/exposure_table.png
   :scale: 80%
   :align: center

   *Exposure Table Result (Summary Table)*

.. figure:: /images/tutorials/exposure_table_detail.png
   :scale: 80%
   :align: center

   *Exposure Table Result (Detail Table)*

For the Aggregated Exposure result, a summary table will be generated after the calculation, showing the total Exposure in metrics depending on available Elements-at-Risk attributes for each administrative boundary. For this exercise, we obtain Exposure in terms of Area, Value (USD) and Population (number of people).

.. figure:: /images/tutorials/exposure_agg_table.png
   :scale: 80%
   :align: center

   *Aggregated Exposure Table Result*

You can show the Summary Table into a chart and export the table as XLSX.

.. figure:: /images/tutorials/exposure_chart.png
   :scale: 80%
   :align: center

   *Exposure Summary Chart*

.. figure:: /images/tutorials/exposure_agg_chart.png
   :scale: 80%
   :align: center

   *Aggregated Exposure Chart*

You can configure how the results are visualized on the map. You can also click individual features to see their attributes.

.. figure:: /images/tutorials/exposure_viz.png
   :scale: 80%
   :align: center

   *Exposure Visualization*

.. note::
  Visualization directly affects how the calculations for Exposure, Loss, and Risk are performed. If you want to try different classes or value ranges for your analysis, you’ll need to re-run the **Exposure** module before running **Loss** or **Risk** again.

6. Running a Loss Analysis
------------------------------------

Go to **Loss > Add Loss**. Choose between:

- **Individual** (feature-based): Loss is calculated for each elements-at-risk feature.
- **Aggregated** (admin unit-based): Loss is calculated based on admnistrative boundaries.

In the General section, enter:

- **Layer Name**: `Flood20_Building_Loss`
- Select the **Exposure** layers: `Flood20_Building`.

(This setting is used for calculating building loss to 20-year return period flood, after calculating the individual exposure - **Individual Loss**)

For **Aggregated Loss**, the information needed is based on the calculated individual loss. Therefore, we must calculate an associated Individual Loss beforehand:

- **Layer Name**: `Flood20_Building_Loss_Agg`
-  **Loss**: `Flood20_Building_Loss`
-  **Admin Level**: `Admin_Unit`
-  **Intensity**: `Average Intensity`

.. figure:: /images/tutorials/loss.png
   :scale: 80%
   :align: center

   *Loss Calculation*

A series of columns for hazard, loss, and vulnerability is presented to link the elements-at-risk classes to the vulnerability tables.
Users need to choose the associated vulnerability table to each class. Users can choose the vulnerability from the **All Vulnerability** section. 
After selecting the vulnerability curve, click **Save**.
After linking each class to a particular vulnerability curve, click **Save** to store and calculate the Loss.

.. figure:: /images/tutorials/loss_vul.png
   :scale: 80%
   :align: center

   *Linking Vulnerability for Loss Calculation*

Once the loss is computed, a loss map will be displayed in the map canvas on the right.

Similar to te Exposure module, two Loss tables will be obtained after the calculation which are the **Summary Table** and the **Detail Table**.

In addition to the information obtained from the **Exposure** calculation, the **Loss** table contains information about **Damage Ratio**, **Loss Fractions**, **Loss Area / Length**, **Loss Value**, and **Loss Population**, depending on the information availability in the elements-at-risk attribute data.

.. figure:: /images/tutorials/loss_table.png
   :scale: 80%
   :align: center

   *Loss Table Result (Summary Table)*

.. figure:: /images/tutorials/loss_table_detail.png
   :scale: 80%
   :align: center

   *Loss Table Result (Detail Table)*

For the Aggregated Loss result, a summary table will be generated after the calculation, showing the total Loss in metrics depending on available Elements-at-Risk attributes for each administrative boundary. For this exercise, we obtain Loss in terms of Area, Value (USD) and Population (number of people).

.. figure:: /images/tutorials/loss_agg_table.png
   :scale: 80%
   :align: center

   *Aggregated Loss Table Result*

You can show the Summary Table into a chart and export the table as XLSX.

.. figure:: /images/tutorials/loss_chart.png
   :scale: 80%
   :align: center

   *Loss Summary Chart*

.. figure:: /images/tutorials/loss_agg_chart.png
   :scale: 80%
   :align: center

   *Aggregated Loss Chart*

You can configure how the results are visualized on the map. You can also click individual features to see their attributes.
The visualization style can be adjusted from the **Detail** and **Classes** sections.

.. figure:: /images/tutorials/loss_viz.png
   :scale: 80%
   :align: center

   *Loss Visualization*

7. Running a Risk Analysis
------------------------------------

For running a risk analysis, aggregated Loss should be calculated beforehand. Additionally, more than one return period Loss for the same Hazard - Elements at Risk combination is required.
The calculation up to Loss can follow the steps in previous sections.

Go to **Risk > Add Risk**. In the General section, enter:

- **Name**: `Flood_Building_Risk`.
- **Admin Level**: `Admin_Unit`.
- **Hazard Type**: `Flood`.
- **Hazard Sub Type**: `Flash Flood`.
- **EaR**: `Building_Footprint`.
- **Risk Reduction Alternative** and **Scenario** are optional. Users can select them if they have been defined in the project.
- **Select Aggregated Losses**: The list will be automatically filtered according to the selected Admin Level, Hazard Type/Subtype, and EaR. Select more than one return period Loss layers to be used for Risk calculation.
- For this tutorial, we will select `Flood20_Building_Loss_Agg`, `Flood50_Building_Loss_Agg`, `Flood100_Building_Loss_Agg`, and `Flood200_Building_Loss_Agg`, then click **Save**.

(This setting is used for calculating building average annual loss to flood for each administrative boundary, after calculating the aggregated loss - **Aggrgated Risk**)

.. figure:: /images/tutorials/risk.png
   :scale: 80%
   :align: center

   *Risk Calculation*

Once the risk is computed, a risk map will be displayed in the map canvas on the right. You can configure how the results are visualized on the map. You can also click individual features to see their attributes.
The visualization style can be adjusted from the **Detail** and **Classes** sections.

.. figure:: /images/tutorials/risk_viz.png
   :scale: 80%
   :align: center

   *Risk Map and Visualization Settings*

A summary table will be generated after the calculation, showing the Average Annual Loss (AAL) in metrics depending on available Elements-at-Risk attributes for each administrative boundary. For this exercise, we obtain AAL in terms of Count, Area, Value (USD) and Population (number of people).

.. figure:: /images/tutorials/risk_table.png
   :scale: 80%
   :align: center

   *Risk Table Result*

You can show the Summary Table into a chart and export the table as XLSX.

.. figure:: /images/tutorials/risk_chart.png
   :scale: 80%
   :align: center

   *Risk Summary Chart*

Observing the Results
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Once all analysis (Exposure, Loss, and Risk) are completed, the results can be visualized, compared, and exported for further exploration. RiskChanges provides options to exports outputs into Geopackage (.gpkg), GeoJSON (.geojson), or Shapefile (.zip) formats, which can be examined using GIS software or integrated into other workflows. 

In this chapter, we will discuss how to interpret the results, as well as observing the difference in the outcomes when varying intensity selections are selected.

1. Input Settings Influence on the Calculation
-----------------------------------------

The parameters configuered during data upload and setup significantly influence the computed results of Exposure, Loss, and Risk calculations. The following sections will discuss how different intensity choices affect the final outcomes.

+-----------------------------------+------------------------------------------+-----------------------------------+
| **Setting**                       | **Influence on Result**                  | **Example**                       |
+===================================+==========================================+===================================+
| Hazard Intensity (Min/Avg/Max)    | Determines the calculated exposure area  | Selecting *Max* increases exposed |
|                                   | and value for EaR features               | buildings compared to *Avg*       |
+-----------------------------------+------------------------------------------+-----------------------------------+
| Vulnerability Curve Selection     | Alters loss ratios and total loss values | Choosing higher vulnerability     |
|                                   |                                          | curves raises loss and AAL        |
+-----------------------------------+------------------------------------------+-----------------------------------+
| Aggregation Level (Admin Units)   | Defines how results are summarized       | Aggregated loss shows total USD   |
|                                   |                                          | per district rather than per site |
+-----------------------------------+------------------------------------------+-----------------------------------+

.. note::
   Small differences in the selected hazard intensity values can lead to significant variations in the calculated Exposure, Loss, and Risk metrics. It is crucial to carefully consider the intensity selection during the analysis setup.

2. Visualization Settings and Its Limitation
-----------------------------------------

Visualization plays a critical role in interpreting the results of Exposure, Loss, and Risk analyses. However, it is important to understand that visualization settings primarily affect how results are displayed on the map and do not alter the underlying calculations.

RiskChanges uses a **classification-based visualization** approach, where results are grouped into classes based on user-defined or automated schemes. This method helps in quickly identifying areas of concern but may oversimplify the data.

- **Style Mode** determines how values are grouped for map display.
- **Color Map** aids visual interpretation but does not affect numeric results.

When interpreting visualized results, consider the following:

- The map view shows only one layer at a time. Comparing multiple hazards or scenarios may require exporting results.
- Legend classificatoin depends on current visualization; swathing between *average* and *maximum* intensity requires recassification for accurate display.
- For aggregated results, overlapping polygons may make small administrative units less visible.

3. Effect of the Intensity Choice
-----------------------------------------

The Intensity parameter defines which hazard intensity field (Minimum, Average, or Maximum) is visualized and analyzed. While all intensity values are computed internally, only the selected one will be represented on the map.

Example comparison for Flood (20-year return period):

+--------------------+-------------------+-----------------------+----------------+---------------+
| **Intensity Type** | **Avg Depth (m)** | **Exposed Area (m²)** | **Loss (USD)** | **AAL (USD)** |
+====================+===================+=======================+================+===============+
| Minimum Intensity  | 0.4               | 12,350                | 48,200         | 9,800         |
+--------------------+-------------------+-----------------------+----------------+---------------+
| Average Intensity  | 0.8               | 23,600                | 92,100         | 18,500        |
+--------------------+-------------------+-----------------------+----------------+---------------+
| Maximum Intensity  | 1.5               | 41,200                | 175,600        | 34,800        |
+--------------------+-------------------+-----------------------+----------------+---------------+

As seen above, higher intensity selection results in increased exposure area, loss values, and average annual loss (AAL). This is due to more severe hazard conditions affecting a larger portion of the elements-at-risk.

When conducting analyses, it is essential to choose the intensity level that best represents the scenario being studied, as it directly impacts the risk assessment outcomes.

4. Exposure Results Observation
---------------------------------

The **Exposure** results show which elements are located within hazard zones and the extent of their exposure based on the selected intensity to quantify their potential impact. You can interpret results by:

- **Spatial distribution**: Identify clusters of high exposure along rivers or steep slopes.
- **Magnitude of impacts**: Observe which administrative units contain the most exposed population or building value.
- **Return period comparison**: Longer return periods typically show higher exposure due to larger hazard extents.

Example interpretation:

- Buildings in the *northern floodplain* show 80% exposure at 100-year flood intensity.
- Population exposure increases from 15% (20-year) to 45% (200-year).

5. Loss Result Observation
---------------------------------

The **Loss** results indicate the expected damage to elements-at-risk based on their exposure and vulnerability. The results integrate the exposure data with vulnerability curves to estimate potential losses.

- **Physical loss** represents the expected damage to structures and infrastructure in monetary terms.
- **Population loss** indicates estimated affected people based on population vulnerability.
- **Damage ratio** helps understand relative loss per unit value.

Key observation:

- Loss concentration usually follows the exposure distribution but may differ due to vulnerability differences.
- Reinforced concrete buildings generally show lower ratios than masonry structures under the same hazard intensity.
- Comparing alternatives revealrs reduction in total loss values.

6. Risk Result Observation
---------------------------------

The **Risk** module provides an aggregated view of potential annual losses, combining multiple return period loss estimates to calculate the Average Annual Loss (AAL) - the expected yearly loss accounting for hazard frequency and severity.

Interpretation steps:

1. **Identiy hotspots**: Administrative units with highest AAL indicate priority areas for mitigation.
2. **Compare hazards**: Overlay different hazard risks to identify multi-hazard zones.
3. **Evaluate reduction scenarios**: Compare baseline vs alternative scenarios to measure potential benefit.

Example findings:

- *Admin unit 5* shows the highest flood AAL, mostly driven by residential areas.
- Risk reduction scenario A2 reduces AAL by 30% compared to baseline.

7. Exporting and Reporting the Results
-----------------------------------------

After completing the analyses, users can export the results for further examination or reporting. RiskChanges supports exporting data in various formats:

- **Geopackage (.gpkg)** - recommended for GIS analysis with all attributes preserved.
- **GeoJSON (.geojson)** - suitable for web mapping or integration with dashboards.
- **Shapefile (.zip)** - for compatibility with legacy GIS tools.
- **XLSX table report** - for summary statistics or reporting.

**Pro Tip**: Combine exported exposure, loss, and risk layers in GIS software to create a multi-hazard impact map, overlaying administrative units with population densit to support risk-informed decision-making.
