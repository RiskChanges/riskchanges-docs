Methodology
=====================

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
