Tutorials (Nocera Demo Dataset)
==================

.. contents::
   :local:
   :depth: 2

This section provides step-by-step instructions on how to use the RiskChanges platform. 
Each section has a detailed video tutorial for better understanding.

About the Demo Dataset
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

For this tutorial, we'll be using a **demo dataset** modeled after the city of *Nocera Inferiore, Italy*. Please note that the data does not represent real-world conditions and is purely for demonstration purposes within the RiskChanges platform.

Here’s an overview of what’s included in the dataset:

+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
| **Category**            | **Sub-category**         | **Details**                                                                                            |
+=========================+==========================+========================================================================================================+
| Administrative          | Boundary Data            | Consists of 19 administrative units and number of buildings.                                           |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
|| Hazards                || Debris Flow             || Impact Pressure for four return periods (20, 50, 100, 200).                                           |
||                        || Flood                   || Flood depth for four return periods (20, 50, 100, 200).                                               |
||                        || Landslide               || Susceptibility classes (1, 2, 3, 4, 5) for four return periods (20, 50, 100, 200).                    |
||                        || Landslide index         || Spatial probability for four return periods (20, 50, 100, 200).                                       |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
|| Elements-at-Risk (EaR) || Buildings               || Building points and footprint layers with occupancy, material, value, area, and population data.      |
||                        || Land parcels            || Parcel polygons with land use type, value, people, and area.                                          |
||                        || Roads                   || Road networks including road type information.                                                        |
||                        || Other objects           || Points of interest by object type.                                                                    |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
| Alternatives            | EaR & Hazards            | 1. Three Building Footprint and Land Parcel layers for three alternatives.                             |
|                         |                          | 2. Three alternatives applied for each return period (total 12 layers per hazard type).                |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
| Scenarios               | Land parcel              | Scenarios A0–A3 applied to land parcel layers across different alternatives (total 8 layers).         |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
| Vulnerability           | Buildings & Land Parcels | Physical and Population vulnerability for debris flow, flood, landslide, and tsunami.                  |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+

👉 Please refer `here <https://drive.google.com/file/d/1TQLap-5mFQLud0GsC09-vcdL2F5u4gW6/view?usp=drive_link>`_ to access the dataset for this tutorial.

👉 Check `this document <https://drive.google.com/file/d/1l_ZontZRzCn3FU8yQpnKGHYrnXbKJIxB/view?usp=drive_link>`_ for Input Data tutorial, `this document <https://drive.google.com/file/d/13Bo3M5tq51xqciPI6A_feHlZTjB2AhA3/view?usp=drive_link>`_ for Exposure and Loss Calculation tutorial, and `this document <https://drive.google.com/file/d/1DvtEM9ZB0m-VYjsyOdTzxBorclMA-z_z/view?usp=drive_link>`_ for Scenario, Alternative, and CBA Module.

👉 For more details about the dataset structure and use of Alternatives and Scenarios, refer to the `dataset document <https://drive.google.com/file/d/1pk6OeKmuUwA5oCiVSshZQ4y0SEZ-l0S9/view?usp=drive_link>`_.

Step-by-step Walkthrough
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Let’s now go through the core tasks you’ll typically perform on the RiskChanges platform.

1. Register an Account and Setup the Profile
-----------------------------------------

Start by visiting the official RiskChanges website: http://riskchanges.org/.
Follow `this guide <https://sdss-documentation.readthedocs.io/en/latest/userguide_inputdata.html#register-an-account-and-setup-the-profile>`_ to create your account and set up your profile.

2. Create a Project
----------------

To begin working, click the **New Project** button on the Project Dashboard. This opens the project configuration page which consists of five tabs: **General**, **Team**, **Share to Public**, **Alternatives**, and **Scenarios**.

Only the **General** section is required to create a project. Let's fill the required fields with our demo dataset information:

   - **Project Name**: Risk City
   - **Study Area**: Boundary Dataset: geoBoundaries (Open), Country: Italy, Admin Level 1: Salerno, Admin Level 2: Nocera Inferiore
   - **Description**: This is a demonstration dataset based on Nocera Inferiore, Italy. The information presented does not reflect the actual conditions of the area and is intended solely for demonstration purposes within the RiskChanges platform.

.. figure:: /images/tutorials/new_project.png
   :width: 100%
   :align: center

   *Filling General section*

If you want to work collaboratively, go to the **Team** tab and invite your team members. You can skip Alternatives and Scenarios for now or set them later.

Your project will now appear on the dashboard as a card. Use filters to quickly search or sort through multiple projects.

3. Upload and Visualize Data
-------------------------

As mentioned in :doc:`the user guide <userguide_inputdata.rst>`, there are several data inputs required for RiskChanges. These include Administrative Boundaries, Hazard Data, Elements-at-Risk (EaR) Data, and Vulnerability Data. You can upload data in various formats including shapefiles, GeoTIFFs, CSVs, and OGC services.

From your Project Dashboard, click into the project you want to work on. You will see the modules menu on the left side bar. 

Administrative Boundary
""""""""""""""""""""""""""""

Choose the **Admin Level** option and click **Add Admin Level**. Under the **General** tab:

   - Upload a zipped shapefile.
   - Enter a **Name**: `Admin_Unit`
   - Save.

RiskChanges automatically displays the boundary on the map with default symbology. You can customize visualization under the **Detail** section:

   - **Label Field**: `Admin unit`
   - **Color Scale**: `aliceblue`

.. figure:: /images/tutorials/admin_unit.png
   :width: 100%
   :align: center

   *Uploading Administrative Boundary data*

Hazard Data
"""""""""""""""""
Head over to **Hazard > Add Hazard**. Upload hazard data in **GeoTIFF or zipped shapefile** format.

Fill in required fields:

   - **Layer Name**, **Hazard Type**, **Hazard Sub Type**, **Hazard Intensity Type**, **Hazard Intensity Unit**
   - **Return Periods**, **Representation Year**, optional **Alternative** and **Scenario**
   - Click **Save** to apply.

+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+
| **Hazard Name** | **Layer Name** | **Hazard Type** | **Sub Type**  | **Intensity Type** | **Intensity Unit** | **Representation Year** |
+=================+================+=================+===============+====================+====================+=========================+
| Debris Flow     | DF_20          | Mass Movements  | Debris Flows  | Impact Pressure    | kpa                | 2020                    |
+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+
| Flood           | FL_20          | Flood           | Fluvial Flood | Height             | meters             | 2020                    |
+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+
| Landslide       | LS_20_Class    | Mass Movements  | Landslides    | Susceptibility     | classes            | 2020                    |
+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+
| Landslide Index | LS_20_Prob     | Mass Movements  | Landslides    | Susceptibility     | probability        | 2020                    |
+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+

.. note::
   Return periods should be adjusted according to the layers uploaded.

For visualization, adjust settings in the **Detail** section and click **Save**:

+----------------------------------------------+----------------------+-----------+---------------+---------------+---------------------------+---------------+
| **Hazard Name**                              | **Class Mode**       | **Field** | **Min Value** | **Max Value** | **Classification Method** | **Color Map** |
+==============================================+======================+===========+===============+===============+===========================+===============+
| Debris Flow                                  | User Defined Classes | VALUE     | 0.001         | 12.5          | Quantile                  | YlOrBr        |
+----------------------------------------------+----------------------+-----------+---------------+---------------+---------------------------+---------------+

.. figure:: /images/tutorials/hazards.png
   :width: 100%
   :align: center

   *Hazard Visualization*

Element-at-Risk (EaR) Data
""""""""""""""""""""""""""""""""

Go to **EaR > Add EaR** to upload buildings, roads, or land parcels in **GeoTIFF** or **zipped shapefile** format. Then define:

   - **Layer Name**
   - **Element at Risk Type / Element at Risk Sub Type**
   - **Representation Year**, optional: **Alternative**, **Scenario**
 
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+
| **EaR Name**        | **Layer Name**        | **EaR Type**           | **EaR Sub Type**                         | **Representation Year** |
+================-----+-----------------------+------------------------+------------------------------------------+------------------------+
| Building Point      | Building_Points       | Points                 | Buildings                                | 2020                   |
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+
| Building Footprints | Building_Footprint    | Buildings              | Classified by nr floors and materials    | 2020                   |
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+
| Roads               | Roads                 | Lines                  | Roads                                    | 2020                   |
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+
| Land Parcel         | Land_Parcel           | Polygons               | Land use                                 | 2020                   |
+---------------------+-----------------------+------------------------+------------------------------------------+------------------------+

Similarly, use the **Detail** section to adjust visualization settings:

+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| **EaR Name**        | **Style Mode**       | **Field**                | **Area Field** | **Area Unit** | **Value Field** | **Value Unit** | **People Field** | **People Unit** | **Color Map**  |
+=====================+======================+==========================+================+===============+=================+================+==================+=================+================+
| Building Point      | Automatic Classes    | [TYPE]                   | [AREA]         | sq.m          | [VALUE]         | USD            | [PEOPLE]         | number          | brg_r          |
+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Building Footprints | Automatic Classes    | [USE]                    | [AREA_N]       | sq.m          | [VALUE]         | USD            | [PEOPLE]         | number          | brg_r          |
+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Roads               | User Defined Classes | [CALCULATED_AREA_LENGTH] | –              | –             | –               | –              | –                | –               | autumn_r       |
+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Land Parcel         | Automatic Classes    | [TYPE]                   | [AREA_N]       | sq.m          | [VALUE]         | USD            | [PEOPLE]         | number          | brg            |
+---------------------+----------------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+

.. figure:: /images/tutorials/ear.png
   :width: 100%
   :align: center

   *Element-at-Risk Visualization*

4. Vulnerability Table
---------------------------

In the **Vulnerability** tab, you can add a vulnerability curve either by uploading a **CSV** file or filling in data manually under the **Data** tab. CSV files require `Hazard Intensity` and `Average Vulnerability` column headers.

Fill out metadata under **General**:

- Vulnerability Region and Vulnerability Type
- Hazard Type and Hazard Sub Type
- Hazard Intensity Class Mode, Hazard Intensity, and Hazard Intensity Unit
- EaR Type, EaR Sub Type, and EaR Class
- Source, Description
- Public/Private visibility (**Is Public**): If set to **Yes**, the record is stored under **All Vulnerability** after administrator validation; otherwise, under **My Vulnerability**.

.. figure:: /images/tutorials/vul_input.png
   :width: 100%
   :align: center

   *Vulnerability Table Input*

.. figure:: /images/tutorials/vul_curve.png
   :width: 100%
   :align: center

   *Vulnerability Curve*

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

- **Individual** (feature-based): Calculates exposure for each elements-at-risk feature.
- **Aggregated** (admin unit-based): Calculates exposure aggregated by administrative boundaries.

In the General section, enter:

- **Layer Name**: `Flood20_Building`
- **Hazard**: `FL_20`
- **EaR**: `Building_Footprint`
- **Intensity**: Select `Average Intensity` (options include Minimum, Average, Maximum).

(This setting calculates 20-year return period flood exposure to building footprints — **Individual Exposure**)

.. figure:: /images/tutorials/exposure.png
   :width: 100%
   :align: center

   *Individual Exposure Calculation*

For **Aggregated Exposure**, calculate an associated Individual Exposure beforehand:

- **Layer Name**: `Flood20_Building_Agg`
- **Exposure**: `Flood20_Building`
- **Admin Level**: `Admin_Unit`
- **Intensity**: `Average Intensity`

.. figure:: /images/tutorials/exposure_agg.png
   :width: 100%
   :align: center

   *Aggregated Exposure Calculation*

Once calculated, two tables are obtained: **Summary Table** and **Detail Table**. The Summary Table summarizes exposed Elements-at-Risk counts and areas per class. The Detail Table shows feature-level values including Minimum, Average, and Maximum hazard intensity.

Summary and detail tables report metrics such as:

- Exposed fraction
- Exposed area / length
- Exposed Population and Value
- Minimum, average, and maximum intensity (Detail Table)

.. figure:: /images/tutorials/exposure_table.png
   :width: 100%
   :align: center

   *Exposure Table Result (Summary Table)*

.. figure:: /images/tutorials/exposure_table_detail.png
   :width: 100%
   :align: center

   *Exposure Table Result (Detail Table)*

Aggregated Exposure generates summary metrics (Area, Value in USD, Population) per administrative boundary and can be exported as XLSX or displayed as charts.

.. figure:: /images/tutorials/exposure_chart.png
   :width: 100%
   :align: center

   *Exposure Summary Chart*

.. figure:: /images/tutorials/exposure_agg_chart.png
   :width: 100%
   :align: center

   *Aggregated Exposure Chart*

.. note::
  Layer visualization affects subsequent Exposure, Loss, and Risk calculations. Re-calculate Exposure if class ranges or styles are changed before computing Loss or Risk.

6. Running a Loss Analysis
------------------------------------

Go to **Loss > Add Loss**. Choose between:

- **Individual** (feature-based): Calculates loss for each elements-at-risk feature.
- **Aggregated** (admin unit-based): Calculates loss aggregated by administrative boundaries.

In the General section, enter:

- **Layer Name**: `Flood20_Building_Loss`
- **Exposure**: `Flood20_Building`

Click **Save & Next**.

Link each EaR class to its associated vulnerability curve in the General tab (from **My Vulnerability** or **All Vulnerability**) and click **Save**.

.. figure:: /images/tutorials/loss_vul.png
   :width: 100%
   :align: center

   *Linking Vulnerability for Loss Calculation*

For **Aggregated Loss**, calculate individual loss beforehand:

- **Layer Name**: `Flood20_Building_Loss_Agg`
- **Loss**: `Flood20_Building_Loss`
- **Admin Level**: `Admin_Unit`
- **Intensity**: `Average Intensity`

.. figure:: /images/tutorials/loss.png
   :width: 100%
   :align: center

   *Loss Calculation*

Loss calculations output **Summary Table** and **Detail Table** detailing Damage Ratio, Loss Count, Loss Area, Loss Population, and Loss Value.

.. figure:: /images/tutorials/loss_table.png
   :width: 100%
   :align: center

   *Loss Table Result (Summary Table)*

.. figure:: /images/tutorials/loss_table_detail.png
   :width: 100%
   :align: center

   *Loss Table Result (Detail Table)*

Repeat all steps from Exposure through Aggregated Loss for all return periods (20, 50, 100, 200).

7. Running a Risk Analysis
------------------------------------

Go to **Risk > Add Risk**. In the General section, enter:

- **Name**: `Flood_Building_Risk`
- **Admin Level**: `Admin_Unit`
- **Hazard Type**: `Flood`
- **Hazard Sub Type**: `Fluvial flood`
- **EaR**: `Building_Footprint`
- **Select Aggregated Losses**: Select multiple return period aggregated loss layers (`Flood20_Building_Loss_Agg`, `Flood50_Building_Loss_Agg`, `Flood100_Building_Loss_Agg`, `Flood200_Building_Loss_Agg`).
- Click **Save & Next**.

.. figure:: /images/tutorials/risk.png
   :width: 100%
   :align: center

   *Risk Calculation*

Once computed, a risk map is rendered. The summary table shows Average Annual Loss (AAL) in terms of Count, Area, Value (USD), and Population per administrative unit.

.. figure:: /images/tutorials/risk_table.png
   :width: 100%
   :align: center

   *Risk Table Result*

Scenario, Alternative, and Cost-Benefit Analysis
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This section introduces the **Scenario**, **Alternative**, and **Cost-Benefit Analysis (CBA)** modules in RiskChanges.

.. note::
   This tutorial assumes that all hazards, elements-at-risk (EAR), and vulnerability data have already been uploaded.

- **Scenarios** represent possible future developments (e.g., climate change, land use, population growth).
- **Alternatives** represent risk reduction measures (e.g., engineering solution, ecological solution, relocation).
- **CBA** compares alternatives to identify the most optimal solution.

Scenario Module
---------------

The Scenario module allows users to define future conditions and assess their impact on hazard, exposure, and risk.
In this tutorial, four scenarios are used:

.. list-table::
   :header-rows: 1

   * - Name
     - Land Use Change
     - Climate Change
   * - Scenario 1 (Business as usual)
     - Rapid growth without taking into account risk information
     - Limited change in climate expected
   * - Scenario 2 (Risk informed planning)
     - Rapid growth taking into account risk information and extending alternatives in planning
     - Limited change in climate expected
   * - Scenario 3 (Worst case)
     - Rapid growth without taking into account risk information
     - Climate change expected, leading to more frequent extreme events
   * - Scenario 4 (Climate change adaptation)
     - Rapid growth taking into account risk information and extending alternatives in planning
     - Climate change expected, leading to more frequent extreme events

.. note::
   Only two land parcel maps and two hazard maps are required overall:
   
   - Scenario 1 & 2 share the same hazard map.
   - Scenario 2 & 4 share the same land parcel map.

To define a Scenario:

1. Go to **Project Dashboard → Project Settings**.
2. Select **Scenarios** and click **Add Scenarios**.
3. Fill in **Scenario Name** and tick the **Risk Component** which changes due to the scenario.
4. Input description and upload supporting files if applicable.

.. figure:: /images/tutorials/scenario_add.png
   :width: 100%
   :align: center
   :alt: Add Scenario Interface

Scenario component matrix settings used in this tutorial:

.. list-table::
   :header-rows: 1

   * - Scenario
     - Hazard Intensity
     - Hazard Frequency
     - EaR Type
     - EaR Location
     - EaR Value
     - EaR Population
   * - Current
     - No
     - No
     - No
     - No
     - No
     - No
   * - Business as Usual
     - No
     - No
     - Yes
     - Yes
     - Yes
     - Yes
   * - Risk Informed Planning
     - No
     - No
     - Yes
     - Yes
     - Yes
     - Yes
   * - Worst Case
     - Yes
     - Yes
     - Yes
     - Yes
     - Yes
     - Yes
   * - Climate Change Adaptation
     - Yes
     - Yes
     - Yes
     - Yes
     - Yes
     - Yes

Submitted scenarios will appear in the Scenario Table and can be chosen when uploading Hazard or Elements-at-Risk layers.

Alternative Module
-----------------

Alternatives represent risk reduction strategies evaluated in RiskChanges.
The three alternatives used in this tutorial:

.. list-table::
   :header-rows: 1

   * - Alternative
     - Details
   * - 1: Engineering Solutions
     - Active and passive control works: soil removal in landslide areas, storage basins, water channels, and slope monitoring systems.
   * - 2: Ecological Solutions
     - Active and passive control works: soil removal, soil nailing, water tanks, water channels, oak tree barriers, and natural park establishment.
   * - 3: Relocation
     - Relocating residential population from endangered units by compensation or providing new housing.

.. note::
   Alternatives 1 and 2 require new land parcel and hazard intensity maps. Alternative 3 uses existing hazard maps.

To define an Alternative:

1. Go to **Project Dashboard → Project Settings**.
2. Select **Alternatives** and click **Add Alternatives**.
3. Fill in **Alternative Name**, tick changed **Risk Components**, and enter economic parameters:

   - **Project Lifetime (years)**: Duration for cost-benefit evaluation.
   - **Total Initial Investment Cost**: Total cost of implementation.
   - **Initial Investment Period (years)**: Time before benefit is achieved.
   - **Annual Maintenance Cost**: Annual cost to maintain the alternative.

.. figure:: /images/tutorials/alternative_add.png
   :width: 100%
   :align: center
   :alt: Add Alternative Interface

Cost parameters summary for this tutorial:

.. list-table::
   :header-rows: 1

   * - Parameter
     - Alternative 1: Engineering solutions
     - Alternative 2: Ecological solutions
     - Alternative 3: Relocation
   * - Benefit Start Year
     - 4
     - 6
     - 3
   * - Total Investment Cost
     - $9,801,016.00
     - $17,158,442.00
     - $4,493,700.00
   * - Annual Maintenance Cost
     - $294,030.48
     - $343,168.84
     - $0.00
   * - Discount Percent Rate
     - 3%
     - 3%
     - 3%
   * - Project Lifetime
     - 40 years
     - 40 years
     - 40 years

Submitted alternatives will appear in the Alternative Table and can be selected when uploading Hazard or Elements-at-Risk layers.

Upload Associated Data & Layer Combinations
--------------------------------------------

When uploading hazard or elements-at-risk datasets representing specific scenarios or alternatives, select the applicable Scenario or Alternative option during upload.

Layer combinations used for analysis:

.. list-table::
   :header-rows: 1

   * - Scenarios
     - Land Parcel Layer
     - Flood Layer
   * - Current
     - LP_2020_A0_S0
     - FL_DE_2020_A0 (20, 50, 100, 200 RP)
   * - Business as Usual
     - LP_2050_BAU
     - FL_DE_2050 (20, 50, 100 RP)
   * - Risk Informed Planning
     - LP_2025_RiskInformedPlanning
     - FL_DE_2050 (20, 50, 100 RP)
   * - Worst Case
     - LP_2050_BAU
     - FL_DE_2100 (20, 50 RP)
   * - Climate Change Adaptation
     - LP_2025_RiskInformedPlanning
     - FL_DE_2100 (20, 50 RP)

.. list-table::
   :header-rows: 1

   * - Alternatives
     - Layers Combination
   * - 0: No DRR
     - Same as Current Scenario layers combination.
   * - 1: Engineering Solutions
     - LP_2020_Engineering & FL_DE_Engineering (20, 50, 100, 200 RP)
   * - 2: Ecological Solutions
     - LP_2020_Ecological & FL_DE_Ecological (20, 50, 100, 200 RP)
   * - 3: Relocation
     - LP_2020_Relocation & FL_DE_Relocation (20, 50, 100, 200 RP)

Calculate Exposure, Loss, and Risk for Alternatives
---------------------------------------------------

Repeat the Exposure, Loss, and Risk calculation workflow for each alternative/scenario layer combination to derive Baseline Risk and Alternative Risk layers for Cost-Benefit Analysis.

Cost-Benefit Analysis (CBA) Module
----------------------------------

The CBA module calculates cost-efficiency by comparing baseline risk with alternative risk.

1. Go to **CBA** and click **Add CBA**.
2. Under the **General** section, fill in:

   - **Name**: `LP_Current_Engineering`
   - **Admin Level**: `Admin_Unit`
   - **Baseline Risk**: `FL_LP_Current_NoDRR`
   - **Alternative Risk**: `FL_LP_Current_Engineering`
   - **CBA Region**: Select `Entire Region` or `Each Admin Unit`.

.. note::
   Selecting **Entire Region** computes CBA for the entire project region. Selecting **Each Admin Unit** computes CBA for individual administrative units.

3. Fill in the **CBA Form** parameters:

   - **Base Year**: `2020`
   - **Project Starting Year**: `2020`
   - **Project Lifetime in Years**: `40`
   - **Currency**: `USD`
   - **Total Investment Cost**: `9801016.00`
   - **Initial Investment Period in Years**: `4`
   - **Annual Operation and Maintenance Cost**: `294030.48`
   - **Discount Rate Percentage**: `5`

4. Click **Save & Next**.

Upon calculation, a CBA map is rendered on the map canvas.

CBA Output Tables & Comparison
-----------------------------

* **Summary Table & Chart:** Displays key economic indicators including **NPV** (Net Present Value), **BCR** (Benefit-Cost Ratio), and **IRR** (Internal Rate of Return). Downloadable in XLSX format.
* **Detail Table & Chart:** Shows annual benefit calculations including Annual Cost, Present Value of Cost, Benefit, Present Value of Benefit, Net Benefit, and Discounted Net Benefit over the project lifetime.
* **CBA Comparison:** When multiple CBA result layers are activated, click **Compare** to compare alternatives by IRR, NPV, and BCR in both tabular and graphical charts to select the optimal risk reduction intervention.