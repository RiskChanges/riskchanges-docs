Tutorials
==================

This section provides step-by-step instructions on how to use the RiskChanges platform. 
Each section has a detailed video tutorial for better understanding.

About the Demo Dataset
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this tutorial, we will use a demo dataset based on Nocera Inferiore, Italy. The information presented does not reflect the actual conditions of the area and is intended solely for demonstration purposes within the RiskChanges platform.

The dataset consists of:

+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| **Category**           | **Sub-category** | **Details**                                                                                                                                         |
+========================+==================+=====================================================================================================================================================+
| Administrative         | [Boundary Data](https://drive.google.com/file/d/1b2vpE4v1Qt3oLQ570ZZKLquAHfQDeYDH/view?usp=drive_link)    | Consists of 19 administrative units and number of buildings.                                                                                        |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| Hazards                | Debris Flow      | Impact Pressure for four return periods (20, 50, 100, 200).                                                                                         |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                        | Flood            | Flood depth for four return periods (20, 50, 100, 200).                                                                                             |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                        | Landslide        | Susceptibility classes (1, 2, 3, 4, 5) for four return periods (20, 50, 100, 200).                                                                  |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                        | Landslide index  | Spatial probability for four return periods (20, 50, 100,200).                                                                                      |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| Elements-at-Risk (EaR) | Buildings        | Building points and building footprints with information on the occupancy and material type, as well as building value, area, and number of people. |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                        | Land parcels     | Land parcel polygons with information on the type, value, number of people, and area.                                                               |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                        | Roads            | Road networks with information on the road type.                                                                                                    |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                        | Other objects    | Point of interest with information of the object type.                                                                                              |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| Alternatives           | Elements-at-Risk | Three Building Footprint and three Land Parcel layers for three alternatives.                                                                       |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                        | Hazard           | Three alternatives apploed for each return period (total 12 layers for each Debris Flow, Flood, and Landslide).                                     |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| Scenarios              | Land parcel      | Two scenarios applied for each of the alternatives for land parcel layer (A0, A1, A2, A3 - total 8 layers).                                         |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| Vulnerability          | Buildings        | Physical and Population vulnerability for each debris flow, flood, landslide, and tsunami.                                                          |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                        | Land parcel      | Physical and Population vulnerability for each debris flow, flood, landslide, and tsunami.                                                          |
+------------------------+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
For Alternative and Scenario, please refer to `this document <https://drive.google.com/file/d/1pk6OeKmuUwA5oCiVSshZQ4y0SEZ-l0S9/view?usp=drive_link>`_ for further details.

Step-by-step
^^^^^^^^^^^^^^^^^

Tutorials
=========

.. contents::
   :local:
   :depth: 2

Register an Account and Setup the Profile
-----------------------------------------

To register an account, go to the RiskChanges website: http://riskchanges.org/.

1. Click **Explore RiskChanges** at the top-right corner.
2. Click **Register Here** below the login form.
3. Fill in the registration form (name, email, password), then click **Register**.
4. Verify your account via the confirmation email (check spam if not received).
5. Login to your new account. You will land on the **Project Dashboard**.
6. Click your name to access:
   - **Update Profile**
   - **Change Password**
   - **Logout**

Create a Project
----------------

On the **Project Dashboard**, you can see a list of projects you created or are assigned to. Projects can be filtered or searched by name, study type, hazard type, or sorting options.

1. Click **New Project** to start.
2. Fill in the required fields on the **General** page (this page is mandatory):
   - **Project Name**: Risk City
   - **Study Area**: Nocera
   - **Description**: This is a demonstration dataset based on Nocera Inferiore, Italy.

3. The remaining pages are:
   - **Staff**: Invite team members.
   - **Alternatives** and **Scenarios**: Optional.

Uploaded or assigned projects appear as cards on the dashboard and are filterable.

Upload and Visualize Data
-------------------------

### Administrative Boundary

1. Open a project and click **Add Admin Level**.
2. Under **General**:
   - Upload a zipped shapefile.
   - Enter a **Name**: `Admin_Unit`
   - Save.

**Visualization:**
- Label Field: `[ADMIN UNIT]`
- Color Map: `antiquewhite`
- Label: *Administrative Unit*

### Hazard Data

1. Go to **Hazard > Add Hazard**.
2. Upload data (GeoTIFF or zipped shapefile). Future support: OGC Service, Global Dataset.
3. Fill in required fields:
   - **Layer Name**, **Hazard Type**, **Sub Type**, **Intensity Type**, **Intensity Unit**
   - **Return Period**, **Representation Year**, optional **Alternative** and **Scenario**

**Examples**:

- **Debris Flow (RP 20)**
  - Layer Name: `DF_20`
  - Type: Mass Movements → Debris Flows
  - Intensity: Impact Pressure (kpa), Return Period: 20, Year: 2020

- **Flood (RP 20)**
  - Layer Name: `FL_20`
  - Type: Flood → Fluvial Flood
  - Intensity: Height (meters), Return Period: 20, Year: 2020

**Styling**:

Use the **Style** section to define visualization.

- **Debris Flow**
  - Style: Graduated
  - Field: `[VALUE]`
  - Min: 0.1, Max: 12.5, Classes: 5
  - Method: Quantile, Color Map: `YlOrBr`

- **Flood**
  - Style: Graduated
  - Min: 0.1, Max: 5.3, Classes: 5
  - Color Map: `Blues`

- **Landslide Classes**
  - Style: Categorized, Color Map: `autumn_r`

- **Landslide Index**
  - Style: Graduated, Color Map: `Wistia`

Click **Save** to apply.

### Element-at-Risk (EaR) Data

1. Go to **EaR > Add EaR**
2. Upload a shapefile or GeoTIFF. Fill in:
   - **Layer Name**
   - **EaR Type / Subtype**
   - **Year**, optional: **Alternative**, **Scenario**

**Examples**:

- `Building_Points`: Points → Buildings
- `Building_Footprint`: Buildings → Classified by Occupancy
- `Roads`: Lines → Roads
- `Land_Parcel`: Polygons → Land Use

**Styling**:

- Choose between Single Symbol, Graduated, Categorized.
- Define:
  - Field, Area, Value, Population, Units
  - Color Map

**Examples**:

- **Building Points**
  - Style: Categorized
  - Field: `[TYPE]`, Area: `[AREA]` (sq.m)
  - Value: `[VALUE]` (USD), Population: `[PEOPLE]` (number)
  - Color Map: `brg_r`

- **Roads**
  - Style: Graduated
  - Field: `[CALCULATED_AREA_LENGTH]`, Min: 20.4, Max: 2388.2
  - Classes: 5, Method: Equal Interval
  - Color Map: `autumn_r`

### Vulnerability Data

1. Go to **Vulnerability > Add Vulnerability**
2. Upload a CSV or enter data manually.
   - Fields required in CSV:
     - `Hazard Intensity From`, `Hazard Intensity To`, `Vulnerability Value`

3. Fill out details:
   - **Vulnerability Region**
   - **Vulnerability Type**
   - **Hazard Info (Type, Subtype, Intensity, Unit)**
   - **EaR Info (Type, Subtype, Class)**
   - **Source, Description, Is Public**

**Public vs Private Records**:

- **Yes**: Appears under *All Vulnerability*
- **No**: Appears under *My Vulnerability*

Note: Vulnerability data is required for **Loss** and **Risk** calculation but not for **Exposure**.

Calculate Exposure
------------------

1. Go to **Exposure > Add Exposure**
2. Choose:
   - **Individual**: Exposure per element
   - **Aggregated**: Exposure by admin unit

3. Under **General**:
   - **Layer Name**: e.g. `Flood20_Building`
   - **Hazard Layer**: `FL_20`
   - **EaR Layer**: `Building_Footprint`
   - **Intensity**: Minimum / Average / Maximum

**Results**:

- Shows: Min, Avg, Max Hazard Intensity
- Also: Exposed Area/Length, Floors, Exposed Fraction

Visualization settings can be adjusted. Click on features in the map for detailed attributes.

Important Notes
---------------

- The **visualization and classification** (classes/ranges) affect:
  - Exposure Calculation
  - Loss Calculation

- To update calculations, recalculate Exposure before running Loss with new settings.