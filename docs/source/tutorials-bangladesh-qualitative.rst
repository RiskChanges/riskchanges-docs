Bangladesh Case Study: Qualitative Risk Assessment
==================================================

Overview
--------

This tutorial demonstrates how to create a **Qualitative (Indicator-based Assessment)** calculation for Bangladesh using the INFORM-inspired framework in RiskChanges. Unlike the existing Bangladesh quantitative workflow, which calculates exposure, losses, and **Average Annual Loss (AAL)**, this example generates indicator-based risk scores for **districts (administrative level 2)**.

The example uses the indicator tables and network supplied with the tutorial draft. These are demonstration materials; resulting scores should not be presented as an official JRC INFORM assessment or an official assessment of Bangladesh.

Required data
-------------

.. list-table:: Bangladesh qualitative assessment inputs
   :header-rows: 1
   :widths: 28 24 48

   * - File / dataset
     - Purpose
     - Notes
   * - ``Bangladesh_INFORM_Indicators.xlsx``
     - District indicator data
     - ``Standardized Indicators`` worksheet; includes district names, P-Codes, and indicator columns.
   * - ``Indicators_at_province level_Standardized.xlsx``
     - Alternative indicator workbook
     - Includes ``Standardized Indicators`` and ``Original Data`` worksheets. Despite its filename, the records identify Bangladesh **districts**, not provinces.
   * - ``inform-network.json``
     - Reusable indicator network
     - Contains the configured hierarchical indicator structure and aggregation settings.
   * - Bangladesh district boundary layer
     - Administrative geography
     - Must already be uploaded to the **Admin Level** module and have a district label and stable identifier that can be matched to the spreadsheet.

.. important::

   The two Excel workbooks are alternatives for this exercise; do not upload both as though they were separate sets of administrative units. Choose the worksheet and scoring configuration appropriate to the data you use. In particular, do not assume that every field in a sheet named ``Standardized Indicators`` is already a valid 0–10 score without checking its values and network settings.

Step-by-step walkthrough
-----------------------

1. Prepare the Bangladesh project and district boundaries
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Open the Bangladesh demonstration project, or a project containing the relevant Bangladesh data. Confirm that the district administrative boundary layer is available in **Admin Level**. The supplied indicator tables contain **64 district records** and identify districts using a **P-Code** field; verify that your boundary dataset uses matching codes or can be reliably matched by district name.

The existing Bangladesh tutorial describes the broader project setup and administrative data: :doc:`tutorials-bangladesh`.

2. Create a qualitative calculation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Go to **Risk** → **Qualitative (Indicator-based Assessment)**.
#. Click **Add Risk**.
#. In **General**, enter a descriptive **Name** (for example, ``Bangladesh District INFORM-inspired Risk``) and select the **Reporting Year** appropriate to the source data. Do not assign a year that the datasets do not support.
#. In **Admin Units**, select the district layer and choose the correct **Label Field** and **Key Field**.

.. figure:: /images/qualitative/qualitative_02.png
   :width: 90%
   :align: center

   *Qualitative calculation setup in RiskChanges.*

3. Import and inspect the indicator network
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Open **Indicators Network**.
#. Use **Import network file** and select ``inform-network.json``.
#. Check the **Overall Risk** node and the three dimensions: **Hazard & Exposure**, **Vulnerability**, and **Lack of Coping Capacity**.
#. Expand the groups and indicators to verify the imported hierarchy and configuration.
#. Check each parent's **Aggregation** method and **Child Weights**. The network example uses geometric aggregation at the root and arithmetic aggregation for the three principal dimensions.
#. Confirm that the **Hazard & Exposure Mode** is **XLSX/CSV Indicator Data** if its indicators will be supplied from the workbook. Use **Admin Level Exposure** only when an appropriate aggregated Exposure result exists and that is the intended input.

.. figure:: /images/qualitative/qualitative_07.png
   :width: 90%
   :align: center

   *Indicator network editor from the draft tutorial.*

.. tip::

   Use **Export reusable network** to save any adjusted configuration. The network can be shared or reused in another project. Use **Download XLSX template** if you need a spreadsheet matching a newly edited network.

4. Upload district indicators and configure scoring
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Open **Indicators Data** → **Upload Data**.
#. Upload ``Bangladesh_INFORM_Indicators.xlsx`` and select **Standardized Indicators** as the worksheet; confirm the header row in the preview.
#. Under **Indicator Columns & Scoring**, map each imported network indicator to the correct workbook column.
#. Review each indicator's **Scoring Method**, **Direction**, and **Scoring Bounds**. Use **Already normalized 0–10** only for fields that genuinely satisfy that definition; otherwise use the appropriate transformation and reference bounds.
#. Inspect the scoring preview for unexpected reversed direction, compressed ranges, or clipping.

.. figure:: /images/qualitative/qualitative_14.png
   :width: 90%
   :align: center

   *Indicator-column mapping and scoring configuration.*

.. warning::

   The provided network is an example configuration, not proof that all indicator-to-column mappings or fixed scoring bounds are valid for every workbook. Verify imported scoring settings against the actual data before calculating. In particular, fixed lower and upper bounds that are equal or nearly equal require correction or an appropriate alternative scoring configuration.

5. Link indicator rows to Bangladesh districts
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. In **Indicators Data** → **Admin Unit Links**, select the spreadsheet's **P-Code** as the **Key Column**, if it matches the boundary layer's district identifier.
#. Select the district name as the **Label Column**.
#. Review automatically detected matches and the number of linked districts.
#. If identifiers do not match, click **Suggest Matches**, inspect the suggested district-name pairs, and manually resolve mismatches.
#. If the network instead uses **Admin Level Exposure**, select the corresponding **Aggregated Exposure Layer** and **Exposure Field** in the additional Hazard & Exposure step.

.. figure:: /images/qualitative/qualitative_16.png
   :width: 90%
   :align: center

   *Administrative-unit matching interface.*

6. Preview and calculate risk scores
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Open **Calculate**.
#. Check **Import Preview** and **Calculation Preview** for linked units, overwritten values, missing or insufficient data, and clipped scores.
#. Review the district-by-indicator values in the editable table. Correct input errors or configuration problems before proceeding.
#. Click **Calculate**.

.. figure:: /images/qualitative/qualitative_18.png
   :width: 90%
   :align: center

   *Input and calculation preview.*

7. Visualize and interpret the results
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

After calculation, open the district-level results on the **Map Panel**. Use the **Edit** settings to style the qualitative risk layer and examine the geographic distribution of scores. Inspect the **Summary Table** for district and component results and the **Detail Table** for each district's hierarchy of nodes, aggregation, children, and **weight sensitivity**. Use **Compare** when multiple calculation versions are available.

.. figure:: /images/qualitative/qualitative_23.png
   :width: 90%
   :align: center

   *Example qualitative risk results.*

When interpreting the map, consider which dimensions contribute most to high scores and whether the patterns remain stable under reasonable changes in scoring bounds or weights. A high indicator-based risk score does **not** imply a specific monetary loss or annual probability. Avoid comparing scores across runs with substantially different network structures or normalization rules.

Further reading
---------------

* :doc:`methodology_qualitative` — indicator-based assessment concepts, scoring, and aggregation.
* :doc:`userguide_qualitative` — complete interface instructions for the five tabs.
* `JRC INFORM Risk methodology <https://drmkc.jrc.ec.europa.eu/inform-index/INFORM-Risk/Methodology>`_ — external methodological reference.
