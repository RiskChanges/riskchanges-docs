Data Visualization
=====================

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
