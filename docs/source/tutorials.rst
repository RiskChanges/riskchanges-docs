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
| Vulnerability           | Buildings & Land Parcels | Includes both physical and population vulnerability for debris flow, flood, landslide, and tsunami.    |
+-------------------------+--------------------------+--------------------------------------------------------------------------------------------------------+

👉 For more details about the dataset structure and use of Alternatives and Scenarios, refer to the `dataset document <https://drive.google.com/file/d/1pk6OeKmuUwA5oCiVSshZQ4y0SEZ-l0S9/view?usp=drive_link>`_.

Step-by-step Walkthrough
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Let’s now go through the core tasks you’ll typically perform on the RiskChanges platform.

1. Register an Account and Setup the Profile
-----------------------------------------

Start by visiting the official RiskChanges website: http://riskchanges.org/.
Follow :doc:`this guide <userguide.rst>` to create your account and set up your profile.

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

+----------------------------------------------+----------------+-----------+---------------+---------------+---------------------------+---------------+
| **Hazard Name**                              | **Style Mode** | **Field** | **Min Value** | **Max Value** | **Classification Method** | **Color Map** |
+==============================================+================+===========+===============+===============+===========================+===============+
| Debris Flow                                  | Graduated      | [VALUE]   | 0.1           | 12.5          | Quantile                  | YlOrBr        |
+----------------------------------------------+----------------+-----------+---------------+---------------+---------------------------+---------------+
| Flood                                        | Graduated      | [VALUE]   | 0.1           | 5.3           | Quantile                  | Blues         |
+----------------------------------------------+----------------+-----------+---------------+---------------+---------------------------+---------------+
| Landslide (Susceptibility Classes)           | Categorized    | [VALUE]   | 0.1           | 5.3           | Quantile                  | autumn_r      |
+----------------------------------------------+----------------+-----------+---------------+---------------+---------------------------+---------------+
| Landslide Index (Susceptibility Probability) | Graduated      | [VALUE]   | 0.1           | 5.3           | Quantile                  | Wistia        |
+----------------------------------------------+----------------+-----------+---------------+---------------+---------------------------+---------------+

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

- Choose between Single Symbol, Graduated, Categorized.
- Define:

  - Field, Area, Value, Population, Units
  - Color Map

+---------------------+----------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| **EaR Name**        | **Style Mode** | **Field**                | **Area Field** | **Area Unit** | **Value Field** | **Value Unit** | **People Field** | **People Unit** | ** Color Map** |
+---------------------+----------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Building Point      | Categorized    | [TYPE]                   | [AREA]         | sq.m          | [VALUE]         | USD            | [PEOPLE]         | (number)        | brg_r          |
+---------------------+----------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Building Footprints | Categorized    | [USE]                    | [AREA_N]       | sq.m          | [VALUE]         | USD            | [PEOPLE]         | (number)        | brg_r          |
+---------------------+----------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Roads               | Graduated      | [CALCULATED_AREA_LENGTH] | –              | –             | –               | –              | –                | -               | autumn_r       |
+---------------------+----------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+
| Land Parcel         | Categorized    | [TYPE]                   | [AREA_N]       | sq.m          | [VALUE]         | USD            | [PEOPLE]         | (number)        | brg            |
+---------------------+----------------+--------------------------+----------------+---------------+-----------------+----------------+------------------+-----------------+----------------+

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

.. note::
   Vulnerability data is **not required** for Exposure analysis but is **essential** for Loss and Risk calculations.

5. Running an Exposure Analysis
------------------------------------

Go to **Exposure > Add Exposure**. Choose between:

- **Individual** (feature-based)
- **Aggregated** (admin unit-based)

For this exercise, we will calculate Individual Exposure. The Aggregated calculation will be calculated for Risk module later.

In the General section, enter:

- **Layer Name**: e.g., `Flood20_Building`
- Select the **Hazard** and **EaR** layers
- Choose Intensity: **Minimum**, **Average**, or **Maximum**. These options will affect the layer visualization after the calculation. All intensities will still be calculated and users can change the visualization options afterwards.

.. figure:: /images/tutorials/exposure.png
   :scale: 80%
   :align: center

   *Exposure*

Once calculated, a table will show metrics like:

- Exposed area, floors, length
- Exposed fraction
- Minimum, average, maximum intensity

.. figure:: /images/tutorials/exposure_table.png
   :scale: 80%
   :align: center

   *Exposure Table Result*

You can configure how the results are visualized on the map. You can also click individual features to see their attributes.

.. figure:: /images/tutorials/exposure_viz.png
   :scale: 80%
   :align: center

   *Exposure Visualization*

.. note::
  Visualization directly affects how the calculations for Exposure, Loss, and Risk are performed. If you want to try different classes or value ranges for your analysis, you’ll need to re-run the **Exposure** module before running **Loss** or **Risk** again.