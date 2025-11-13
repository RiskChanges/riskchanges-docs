Tutorials
==================

.. contents::
   :local:
   :depth: 2

This section provides step-by-step instructions on how to use the RiskChanges platform. 
Each section has a detailed video tutorial for better understanding.

About the Demo Dataset
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

For this tutorial, we'll be using a **demo dataset** modeled after the city of *Nocera Inferiore, Italy*. Please note that the data does not represent real-world conditions and is purely for demonstration purposes within the RiskChanges environment.

Here’s an overview of what’s included in the dataset:

+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
| **Category**            | **Sub-category**         | **Details**                                                                                            |
+=========================+==========================+========================================================================================================+
| Administrative          | Boundary Data            | Consists of 19 administrative units and number of buildings.                                           |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
|| Hazards                || Debris Flow             || Impact Pressure for four return periods (20, 50, 100, 200).                                           |
||                        || Flood                   || Flood depth for four return periods (20, 50, 100, 200).                                               |
||                        || Landslide               || Susceptibility classes (1, 2, 3, 4, 5) for four return periods.                                       |
||                        || Landslide index         || Spatial probability for four return periods.                                                          |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
|| Elements-at-Risk (EaR) || Buildings               || Building points and footprints with occupancy, material, value, area, and population data.            |
||                        || Land parcels            || Parcel polygons with land use type, value, people, and area.                                          |
||                        || Roads                   || Road networks including road type information.                                                        |
||                        || Other objects           || Points of interest by object type.                                                                    |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
| Alternatives            | EaR & Hazards            | Variations for Building Footprints, Land Parcels, and each hazard type across multiple return periods. |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
| Scenarios               | Land parcel              | Scenarios A0–A3, applied to land parcel layers across different alternatives.                          |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+
| Vulnerability           | Buildings & Land Parcels | Includes both physical and population vulnerability for debris flow, flood, and landslide.    |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+

👉 Please refer `here <https://drive.google.com/file/d/17lfUpEKDHe2kHByeA4EawkUQFjgGtb7e/view?usp=drive_link>`_ to access the dataset for this tutorial.

👉 Check `this document <https://drive.google.com/file/d/1IsfH36Rf8FNpH6BKvznamGa7G5lAkXqj/view?usp=drive_link>`_ for Input Data tutorial and `this document <https://drive.google.com/file/d/1uEzD2gpP1F74lgw0qXaFjzTViHLP3TwG/view?usp=drive_link>`_ for Exposure and Loss Calculation tutorial.

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

To begin working, click the **New Project** button on the Project Dashboard. This opens a form divided into four sections: |General|, |Staff|, |Alternatives|, and |Scenarios|.

Only the **General** section is required. Let's fill the required fields with our demo dataset information:

   - **Project Name**: Risk City
   - **Study Area**: Nocera
   - **Description**: This is a demonstration dataset based on Nocera Inferiore, Italy.

.. figure:: /images/tutorials/new_project.png
   :scale: 80%
   :align: center

   *Filling General section*

.. |General| image:: /images/tutorials/general.png
           :scale: 80% 

.. |Staff| image:: /images/tutorials/staff.png
           :scale: 80% 

.. |Alternatives| image:: /images/tutorials/alternatives.png
           :scale: 80% 

.. |Scenarios| image:: /images/tutorials/scenarios.png
           :scale: 80% 

If you want to work collaboratively, go to the **Staff** tab and invite your team members. You can skip the Alternatives and Scenarios for now or set them later.

Your project will now appear on the dashboard as a card. Use filters to quickly search or sort through multiple projects.

3. Upload and Visualize Data
-------------------------

As mentioned in :doc:`the user guide <userguide_inputdata.rst>`, there are several data inputs required for RiskChanges.These include Administrative Boundaries, Hazard Data, Elements-at-Risk (EaR) Data, and Vulnerability Data. You can upload data in various formats including shapefiles, GeoTIFFs, CSVs, and OGC services, depending on each data input.

From your Project Dashboard, click into the project you want to work on. You will see the modules menu on the left side bar. 

Administrative Boundary
""""""""""""""""""""""""""""

Choose the **Admin Level** option and click **Add Admin Level**. Under the **General** tab:

   - Upload a zipped shapefile.
   - Enter a **Name**: `Admin_Unit`
   - Save.

RiskChanges automatically displays the boundary on the map with default symbology. However, you can customize the visualization by going to the **Style** tab.

   - Label Field: `[ADMIN UNIT]`
   - Color Map: `antiquewhite`
   - Label: *Administrative Unit*

.. figure:: /images/tutorials/admin_unit.png
   :scale: 80%
   :align: center

   *Uploading Administrative Boundary data*

Hazard Data
"""""""""""""""""
Head over to **Hazard > Add Hazard**. Upload hazard data in **GeoTIFF or zipped shapefile** format. Future support will include OGC Service and Global Dataset.

Fill in required fields:

   - **Layer Name**, **Hazard Type**, **Sub Type**, **Intensity Type**, **Intensity Unit**
   - **Return Period**, **Representation Year**, optional **Alternative** and **Scenario**
   - Click **Save** to apply.

+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+
| **Hazard Name** | **Layer Name** | **Hazard Type** | **Sub Type**  | **Intensity Type** | **Intensity Unit** | **Representation Year** |
+=================+================+=================+===============+====================+====================+=========================+
| Debris Flow     | DF_20          | Mass Movements  | Debris Flows  | Impact Pressure    | kPa                | 2020                    |
+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+
| Flood           | FL_20          | Flood           | Fluvial Flood | Height             | meters             | 2020                    |
+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+
| Landslide       | LS_20_Class    | Mass Movements  | Landslides    | Susceptibility     | classes            | 2020                    |
+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+
| Landslide Index | LS_20_Prob     | Mass Movements  | Landslides    | Susceptibility     | probability        | 2020                    |
+-----------------+----------------+-----------------+---------------+--------------------+--------------------+-------------------------+

.. note::
   Return periods should be adjusted according to the layers uploaded.

For visualization, RiskChanges supports different visual styles. You can adjust it according to your needs. Use the **Style** section to adjust the visualization. After adjusting, click **Save** to apply the changes.

+----------------------------------------------+----------------------+-----------+---------------+---------------+---------------------------+---------------+
| **Hazard Name**                              | **Style Mode**       | **Field** | **Min Value** | **Max Value** | **Classification Method** | **Color Map** |
+==============================================+======================+===========+===============+===============+===========================+===============+
| Debris Flow                                  | User Defined Classes | [VALUE]   | 0.1           | 12.5          | Quantile                  | YlOrBr        |
+----------------------------------------------+----------------------+-----------+---------------+---------------+---------------------------+---------------+
| Flood                                        | User Defined Classes | [VALUE]   | 0.1           | 5.3           | Quantile                  | Blues         |
+----------------------------------------------+----------------------+-----------+---------------+---------------+---------------------------+---------------+
| Landslide (Susceptibility Classes)           | Automated Classes    | [VALUE]   | 0.1           | 5.3           | Quantile                  | autumn_r      |
+----------------------------------------------+----------------------+-----------+---------------+---------------+---------------------------+---------------+
| Landslide Index (Susceptibility Probability) | User Defined Classes | [VALUE]   | 0.1           | 5.3           | Quantile                  | Wistia        |
+----------------------------------------------+----------------------+-----------+---------------+---------------+---------------------------+---------------+

.. figure:: /images/tutorials/hazards.png
   :scale: 80%
   :align: center

   *Hazard Visualization*

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

4. Vulnerability Table
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

Once the analysis is complete, we can download the results into either Geopackage (.gpkg), GeoJSON (.geojson), or Shapefile (.zip) formats for further examination in GIS software. In this section, we will demonstrate how to interpret the results, as well as observing the difference in the outcomes when varying intensity selections are selected.

1. Input Settings Influence to the Calculation
-----------------------------------------

2. Visualization Settings and Its Limitation
-----------------------------------------

3. Effect of the Intensity Choice
-----------------------------------------

4. Exposure Results Observation
---------------------------------

5. Loss Result Observation
---------------------------------

6. Risk Result Observation
---------------------------------


