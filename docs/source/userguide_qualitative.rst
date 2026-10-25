Calculating Qualitative Risk (Indicator-based Assessment)
========================================================

Overview
--------

The **Qualitative (Indicator-based Assessment)** option in the **Risk** module calculates administrative-unit risk scores using a configurable INFORM-inspired indicator network. It is separate from the quantitative Risk workflow that calculates **Average Annual Loss (AAL)**; see :doc:`userguide_risk` for that procedure.

Before starting, prepare an administrative boundary layer, an indicator table (XLSX or CSV), and a planned hierarchy of dimensions, groups, indicators, scoring settings, and weights. A reusable network can also be imported from JSON.

Instructions
------------

1. Open the Qualitative Risk calculation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Open the project in RiskChanges.
#. In the sidebar, open **Risk**, then **Qualitative (Indicator-based Assessment)**.
#. Click **Add Risk**. The calculation dialog contains five tabs: **General**, **Admin Units**, **Indicators Network**, **Indicators Data**, and **Calculate**.

.. figure:: /images/qualitative/qualitative_01.png
   :width: 65%
   :align: center

   *Qualitative risk assessment entry point (screenshot from the draft tutorial).*

2. General
^^^^^^^^^^

Enter the **Name** of the calculation and its **Reporting Year**. Use a name that identifies the study area and version or scenario, especially when comparing multiple calculations.

3. Admin Units
^^^^^^^^^^^^^^

Select the administrative boundary layer previously uploaded through the **Admin Level** module. Set the **Label Field** (human-readable administrative-unit name) and **Key Field** (stable administrative-unit identifier). These fields are used when matching indicator data to geographic units.

4. Indicators Network
^^^^^^^^^^^^^^^^^^^^^

Configure the hierarchical network under **Overall Risk**. The three INFORM-inspired dimensions are **Hazard & Exposure**, **Vulnerability**, and **Lack of Coping Capacity**. Add nested **Groups** or **Indicators** as needed.

For each parent node:

#. Confirm the node **Name**.
#. Select **Aggregation**: weighted arithmetic average, weighted geometric average, minimum, maximum, or legacy INFORM transformed geometric.
#. Assign **Child Weights**, ensuring the total is **100%** for that parent.

For **Hazard & Exposure**, choose the input mode:

* **XLSX/CSV Indicator Data** to supply its indicators in the uploaded table.
* **Admin Level Exposure** to reuse an **Aggregated Exposure Layer** and **Exposure Field** from a previous Exposure calculation; complete this source selection under **Indicators Data**.

The network panel includes **Fit graph**, **Zoom in**, **Zoom out**, **Expand all**, **Collapse groups**, **Download XLSX template**, **Undo**, **Redo**, **Export reusable network**, **Import network file**, and **Network Help**. The XLSX template can guide data-table preparation, while exported JSON preserves the network configuration for reuse.

.. figure:: /images/qualitative/qualitative_06.png
   :width: 90%
   :align: center

   *Example of the indicator-network configuration interface.*

.. tip::

   When a validated network JSON file is available, import it rather than rebuilding a large hierarchy manually. Review node weights, scoring settings, and source selections after import.

5. Indicators Data
^^^^^^^^^^^^^^^^^^

Complete the data preparation steps in order:

**Upload Data**

Upload an **XLSX** or **CSV** file containing administrative-unit identifiers and indicator values. Choose the correct **Worksheet** (for Excel) and **Header** row. Raw values do not need to be pre-standardized if an appropriate scoring method will be configured.

**Indicator Columns & Scoring**

Map each network indicator to the corresponding uploaded data column. For every indicator, configure:

* **Scoring Method:** Already normalized 0–10, Linear, Logarithmic, Exponential, Gaussian, Sigmoid, or Categorical scores.
* **Direction:** Increasing or Decreasing.
* **Scoring Bounds:** Dataset min/max or Fixed Reference Bound.

Inspect the **Scoring Preview** and verify that higher and lower values have the intended interpretation.

**Admin Unit Links**

Choose the indicator dataset's **Key Column** and **Label Column**. Confirm that the uploaded keys correspond to the boundary layer's selected **Key Field**. If keys match, the platform can automatically detect links. Otherwise, use **Suggest Matches**, review the proposed name matches, and correct them as necessary.

**Hazard & Exposure** (conditional)

If **Admin Level Exposure** was selected in the network, complete the additional Hazard & Exposure step by choosing the relevant **Aggregated Exposure Layer** and **Exposure Field**.

.. figure:: /images/qualitative/qualitative_13.png
   :width: 100%
   :align: center

   *Example of the Indicators Data interface in the supplied draft.*

6. Calculate
^^^^^^^^^^^^

Review the **Import Preview** and **Calculation Preview**. These report linked units, imported values, overwrites, administrative units, readiness to score, insufficient data, and clipped values. Inspect the administrative-unit/indicator data table; the interface also allows manual edits. Resolve unexpected matches or missing values before running the calculation.

Click **Calculate** to generate the qualitative risk results.

.. figure:: /images/qualitative/qualitative_18.png
   :width: 90%
   :align: center

   *Calculation and input-review interface.*

Results and Output
------------------

**Map visualization**

Open the calculated result on the map. Use **Edit** settings to adjust its visualization and classification. Map symbology changes the display of scores, not the underlying indicator calculations.

**Summary Table**

Review overall scores and component summaries across administrative units.

**Detail Table**

Inspect a selected administrative unit's risk calculation and its underlying dimensions, groups, and indicators. The breakdown includes node information, aggregation, children, and **weight sensitivity** at indicator nodes.

**Compare**

Compare results from different calculations or recalculations, checking that the underlying indicators and scoring configurations are comparable before drawing conclusions.

.. figure:: /images/qualitative/qualitative_23.png
   :width: 90%
   :align: center

   *Example qualitative risk results from the draft tutorial.*

.. note::

   Qualitative risk scores are not **AAL** values. To interpret results, record the indicator network version, scoring directions and bounds, aggregation settings, weights, reporting year, and administrative level.

See :doc:`methodology_qualitative` for the underlying framework and :doc:`tutorials-bangladesh` for a Bangladesh example.
