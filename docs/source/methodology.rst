Methodology
=====================

This page provides the methodology used and modules provided in RiskChanges.

.. toctree::
   :maxdepth: 10
   :caption: Methodology:

   methodology_inputdata
   methodology_exposure
   methodology_loss
   methodology_risk
   methodology_alternative
   methodology_scenario
   methodology_visualization

Input Data
^^^^^^^^^^^^^
The system supports various types of input data required for risk assessment. These include spatial data (raster and vector formats) and non-spatial tables (e.g., vulnerability and cost information). All input data must be organized properly to ensure accurate risk calculations.

.. list-table:: **Overview of Input Data**
   :widths: 20 20 20 40
   :header-rows: 1

   * - **Data Type**
     - **Format**
     - **Attributes**
     - **Notes**
   * - Hazard maps
     - Raster / Vector
     - No (Raster), Yes (Vector)
     - Represent hazard intensity or susceptibility for different return periods.
   * - Building footprints
     - Vector
     - Yes
     - Includes type, use, value, and population attributes.
   * - Points, Lines, Polygons
     - Vector
     - Yes
     - Represents various elements-at-risk such as infrastructure, land parcels, etc.
   * - Grid maps
     - Raster
     - No
     - Often used to represent exposure or hazard intensity in grid format.
   * - Vulnerability tables
     - Table (non-spatial)
     - Yes
     - Defines vulnerability per hazard intensity class.
   * - Administrative units
     - Vector
     - Yes
     - Defines zones for aggregating results and decision-making.
   * - Cost / Score information
     - Table (non-spatial)
     - Yes
     - Contains alternative construction costs and performance scoring.


Hazard Maps
--------------
Hazard maps show intensity or susceptibility values for different hazards and return periods (e.g., flood depth for 5, 10, 100 years). The data can be in raster (e.g., flood depth grids) or vector format (e.g., susceptibility polygons). 

Each hazard map must inclued:

* Hazard type and subtype (e.g., river flood)
* Intensity type and unit (e.g., water depth, cm)
* Return period (e.g., 10, 50, 100 years)
* Representation year (e.g., current or future)
* Optional: associated scenario and risk reduction alternative

*Note: susceptibility maps cannot be used for risk calculation unless they include intensity values.*

Elements-at-Risk
-------------------
Elements-at-risk are spatial objects (buildings, roads, land use, etc) exposed to hazards. These can be vector or raster and must include attributes such as type, population, and value.

Types of elements-at-risk:

* Building footprints: must include subtype, population, and value attributes.
* Point features (e.g., hospitals, shelters).
* Linear features (e.g., roads, powerlines).
* Polygon features (e.g., land use parcels).
* Grid layers (raster): used for general exposure analysis.

Required attributes:

* Subtype (e.g., masonry, residential, road type).
* Year, alternative, and scenario (for scenario-based analysis).
* Value (min/max), population (day/night), area/length.
* Optional: content value and additional demographic data.

*Note: buildings without subtype classificaton cannot be used for loss analysis.*

Administrative Units
-----------------------
Vector polygons used to define zones for aggregation (e.g., neighborhoods). This data can be used in result reporting and desicion support. There are no specific attributes required for this data.

Vulnerability Tables
-----------------------
Vulnerability tables define how much damage (physical or population-related) occurs at different hazard intensifies.

Types:

* **Physical vulnerability:** represented in values between 0 (no damage) to 1 (complete destruction). It is defined per element subtype and hazard type.
* **Population vulnerability:** probabilities of injury or death. It is used for population at risk inside buildings, outdoors, in vehicle, etc.

*Note: Each element-at-risk type must be linked to a vunerability table for correct loss and casualty estimation.*
*If a required vulnerability table is missing, the system can apply a default value (e.g., 1 = total loss) to proceed with analysis. This ensures the calculations are still possible, albeit with reduced precision.*

**Vulnerability Table Structure Example**

+-------------------+--------------+--------------+--------------+
| **Intensity (m)** | **V_P_T_AVG**| **V_P_S_AVG**| **V_P_C_AVG**|
+===================+==============+==============+==============+
| 0–1               | 0.15         | 0.10         | 0.40         |
+-------------------+--------------+--------------+--------------+
| 1–2               | 0.35         | 0.30         | 0.60         |
+-------------------+--------------+--------------+--------------+
| 2–3               | 0.84         | 0.80         | 0.80         |
+-------------------+--------------+--------------+--------------+
| 3–4               | 1.00         | 1.00         | 1.00         |
+-------------------+--------------+--------------+--------------+


Exposure Calculation
^^^^^^^^^^^^^^^^^^^^^^^

Loss Estimation
^^^^^^^^^^^^^^^^^^

Risk Assessment
^^^^^^^^^^^^^^^^^^

Alternatives
^^^^^^^^^^^^^^^

Scenarios
^^^^^^^^^^^^

Data Visualization
^^^^^^^^^^^^^^^^^^^^^
Overview and User Needs
--------------------------
In RiskChanges, data visualization plays a key role in helping users understand the results of risk assessments. The platform allows users to view maps, charts, and tables based on exposure, loss, and risk calculations.

Visualization tools are tailored to different user groups. Each user interacts with the system differently based on their role and technical expertise.

.. list-table:: **User Categories to Visualization Needs**
   :widths: 20 20 20 40
   :header-rows: 1

   * - **User Category**
     - **Role Description**
     - **Visualization Objectives**
   * - General Public
     - Community members interested in local risk information.
     - Use simple map tools (e.g., zoom, pan). View exposure, loss, risk, and scenarios.
   * - Data Providers
     - Experts providing hazard, vulnerability, or exposure data.
     - Check uploaded data layers. Run basic queries and ensure data quality.
   * - GIS / Technical Experts
     - Specialists performing technical analysis (exposure, loss, risk).
     - Run queries, compare data layers, perform advanced visualization.
   * - Decision Makers
     - Authorities or organizations making risk-related decisions.
     - Compare outputs, define and review alternatives, use multi-criteria tools.

Map Visualizaton Options
---------------------------
RiskChanges provides a set of map tools to explore and compare spatial data. Users can view and and overlay multiple layers, including hazard, vulnerability, and exposure maps.

Style and Symbology
----------------------
Each layer uploaded to the platform has default styling based on its type:

1. **Administrative boundaries:** single symbol.
2. **Hazard or EaR layers:**
   
   a. Raster: single symbol.
   b. Vector (e.g., susceptiblity): categorized.

Users can change how layers look using the Style section:

* Style modes: single symbol, graduated, categorized.
* Choose a data field for classification.
* Set minimum / maximum values, number of classes, and color ramp.
* Choose classification method: equal interval, quantile, natural breaks, etc.
* For vector layers: define area, population, or value fields to support analysis.
* Enable stroke and adjust label settings as needed.

This flexibility allows users to create meaningful visualizations suited for each module (e.g., exposure or risk).

Basic Map Tools
------------------
Users can interact with the map using:

* Zoom and pan
* Reset bearing to North
* Center map on current location
* Full-screen view
* Switch between basemaps (OSM or satellite)
* Reset map to default

Active Layer and Legend
--------------------------
Each layer appears in the Active Layer Panel, where users can:

* View the map legend
* Change layer order (drag and drop)
* Adjust layer opacity
* Toggle visibility
* Zoom to flexibilityRemove the layer

Information on Click
-----------------------
Clicking on the map allows users to view information at a specific location. For instance:

* Element-at-risk details (e.g., population, value)
* Hazard intensity value
* Vulnerability data for selected combinations

This helps users explore detailed results and understand the spatial context.

Map Download
---------------
Users can download maps for offline use or reports. Options include:

* Default download
* Custom settings: page size, resolution, orientation, format.

Visualization for Vulnerability Data
---------------------------------------
Vulnerability data can be visualized through the same module used to enter it. Users can:

* Run queries to view vulnerability values
* Inspect and compare results
* Edit values directly on the interface (if needed)

This simplifies data validation and supports continnuous refinement

Visualization for Exposure, Loss, and Risk Results
-----------------------------------------------------
After running calculations in Exposure, Loss, or Risk modules, users can:

* View values in filterable tables (e.g., exposed population, loss area, damage ratio)
* See automatically generated charts for comparisons

Exporting Results
--------------------
Results from exposure, loss, and risk modules can be exported for further use. 
Supported formats are GeoPackage (.gpkg), GeoJSON (.geojson), and Shapefile (.shp).
Both spatial layers and attribute data are included, allowing offline analysis or sharing.
