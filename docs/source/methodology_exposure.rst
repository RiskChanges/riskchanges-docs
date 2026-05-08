Exposure Calculation
=======================

The Exposure module in RiskChanges identifies which Elements-at-Risk (EaR) are affected by a hazard layer and quantifies the degree of exposure. The calculation approach depends on:

- The hazard data type (raster or vector)
- The Elements-at-Risk geometry type (point, line, polygon, or raster)
- The hazard classification settings
- The additional attributes assigned to the EaR layer (e.g., population, asset value, area)

This page explains how RiskChanges performs exposure calculations under different data combinations and how layer settings influence the final results.

Raster Hazard Layer with Point Elements-at-Risk
------------------------------------------------

Using point datasets as Elements-at-Risk is the simplest exposure calculation scenario because each feature is represented by a single coordinate location.

RiskChanges calculates exposure by extracting the hazard pixel value at the location of each point feature. The extracted hazard value determines the hazard class assigned to the point.

In some cases, a point may intersect multiple pixels (for example, when located exactly on a pixel boundary). In this situation, the selected ``Intensity`` option from the *Add Exposure* menu determines which hazard value is used for visualization and classification.

Although one intensity option is selected for visualization, RiskChanges still computes all available intensity statistics internally. These results are stored in the final exposure layer attributes, allowing users to switch visualization fields later from the ``Detail`` menu without recalculating the exposure analysis.

For point datasets:

- The ``Exposed Fraction`` is always ``1`` (100%) because the entire feature is represented by a single point location.
- Exposure is assigned directly to the hazard class intersecting the point.

Raster Hazard Layer with Line, Polygon, and Raster Elements-at-Risk
--------------------------------------------------------------------

For line, polygon, and raster/grid EaR datasets, a single feature may overlap multiple hazard pixels with different hazard intensities. To address this, RiskChanges applies a fraction-based exposure approach.

The system calculates how much of an EaR feature overlaps each hazard class while preserving the original geometry and attributes of the EaR dataset.

The exposed fraction unit depends on the geometry type:

+----------------------+------------------+
| EaR Geometry Type    | Exposure Unit    |
+======================+==================+
| Line                 | Length           |
+----------------------+------------------+
| Polygon              | Area             |
+----------------------+------------------+
| Raster/Grid          | Area             |
+----------------------+------------------+

Line Elements-at-Risk
^^^^^^^^^^^^^^^^^^^^^^

For line datasets (e.g., roads, pipelines, transmission lines), the Exposed Fraction represents:

    The proportion of the total feature length exposed to a certain hazard class.

Example:

- Total road length = 10 km
- Portion exposed to High Flood Hazard = 4 km

Then:

- Exposed Fraction = 0.4 (40%)

Polygon Elements-at-Risk
^^^^^^^^^^^^^^^^^^^^^^^^^

For polygon datasets (e.g., land parcels, administrative areas, building footprints), the Exposed Fraction represents:

    The proportion of the total feature area exposed to a certain hazard class.

Example:

- Total building area = 1,000 m²
- Area exposed to landslide hazard = 250 m²

Then:

- Exposed Fraction = 0.25 (25%)

Raster/Grid Elements-at-Risk
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Raster EaR datasets are treated similarly to polygon data where the exposed portion is calculated based on overlapping area.

This approach is commonly used for:

- Population grids
- Land cover rasters
- Agricultural production rasters
- Economic raster datasets

Exposure Result Representation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Although the exposure calculation internally uses fractions, RiskChanges preserves the original EaR features and summarizes the results in exposure tables.

The results are presented in two forms:

Detail Table
"""""""""""""

Contains exposure information for each individual EaR feature.

Typical fields include:

- Hazard class
- Exposed fraction
- Exposed area/length
- Additional exposure metrics

Summary Table
""""""""""""""

Aggregates exposure statistics by EaR category or class.

Typical summary outputs include:

- Number of exposed features
- Total exposed area
- Total exposed population
- Total exposed asset value

Vector Hazard Layer with Elements-at-Risk
------------------------------------------

Although raster hazard layers are the most common format in risk assessment, some hazard datasets are provided as vector polygons.

Examples include:

- Landslide susceptibility zones
- Flood zoning maps
- Coastal setback zones
- Hazard planning maps

These vector hazard layers commonly contain categorical hazard classes such as:

- Very High
- High
- Medium
- Low
- Very Low

In this case, RiskChanges performs exposure calculations using spatial intersection between the hazard polygons and EaR layers.

The exposure workflow is similar for all EaR geometry types (point, line, polygon, and raster), but with several important differences:

- Hazard classes are typically categorical (non-numerical) rather than continuous values.
- The hazard classification shown in the results follows the original vector hazard categories.
- Exposure results use the ``Automatic Classes`` mode by default.
- Numerical hazard reclassification methods (e.g., Equal Interval, Quantile) are generally not applicable.

The Effect of Layer Settings on Exposure Calculation
-----------------------------------------------------

The Exposure module is highly dependent on the settings defined in both the Hazard and Elements-at-Risk modules. Proper layer preparation is therefore essential to produce meaningful exposure results.

Hazard Layer Settings
----------------------

Hazard Classification
^^^^^^^^^^^^^^^^^^^^^^

Hazard classification controls how hazard intensity values are grouped into classes and directly affects the exposure results.

For raster hazard layers, users can select different ``Class Modes``:

+----------------------+---------------------------------------------------+
| Class Mode           | Description                                       |
+======================+===================================================+
| Single Class         | Entire hazard layer treated as one class          |
+----------------------+---------------------------------------------------+
| User Defined Classes | Users manually define class ranges                |
+----------------------+---------------------------------------------------+
| Automatic Classes    | Hazard already contains categorical classes       |
+----------------------+---------------------------------------------------+

Important Notes
^^^^^^^^^^^^^^^^

- ``Single Class`` is suitable for binary hazard maps (hazard/no hazard).
- ``Automatic Classes`` is mainly used for vector hazard datasets with predefined categories.
- ``User Defined Classes`` provides the most flexibility and is recommended for continuous raster hazard datasets.

Field Column
^^^^^^^^^^^^^

The ``Field`` column specifies which hazard attribute or raster band is used for the exposure calculation.

RiskChanges automatically detects:

- Minimum value
- Maximum value

Users may modify these thresholds to:

- Exclude outliers
- Ignore background/noise values
- Focus only on relevant hazard intensities

Values outside the selected range are excluded from the exposure analysis.

Hazard Classification Methods
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The selected classification method strongly influences how hazard severity is interpreted. Different methods are appropriate for different dataset characteristics.

+----------------------+--------------------------------------------------------------+--------------------------------------------------------------------------+
| Classification       | Definition                                                   | Best Use Case                                                            |
| Method               |                                                              |                                                                          |
+======================+==============================================================+==========================================================================+
| User Defined         | Users manually specify class thresholds                      | Recommended when using official hazard standards, engineering            |
|                      |                                                              | thresholds, regulatory criteria, or datasets with large gaps/outliers    |
+----------------------+--------------------------------------------------------------+--------------------------------------------------------------------------+
| Equal Interval       | Divides the value range into equal-sized intervals           | Suitable for evenly distributed datasets with relatively uniform ranges  |
+----------------------+--------------------------------------------------------------+--------------------------------------------------------------------------+
| Quantile             | Places an equal number of pixels/features into each class    | Useful when balanced class sizes or relative ranking are desired         |
+----------------------+--------------------------------------------------------------+--------------------------------------------------------------------------+
| Natural Breaks       | Minimizes variance within classes and maximizes variance     | Best for skewed or naturally clustered datasets                          |
| (Jenks)              | between classes                                              |                                                                          |
+----------------------+--------------------------------------------------------------+--------------------------------------------------------------------------+
| Standard Deviation   | Classes are based on deviation from the mean                 | Useful for identifying anomalies or areas above/below average hazard     |
+----------------------+--------------------------------------------------------------+--------------------------------------------------------------------------+
| Geometric Interval   | Uses geometric progression to create classes                 | Appropriate for moderately skewed continuous datasets                    |
+----------------------+--------------------------------------------------------------+--------------------------------------------------------------------------+
| Logarithmic Scale    | Applies logarithmic transformation before classification     | Recommended for highly skewed datasets with extreme values               |
+----------------------+--------------------------------------------------------------+--------------------------------------------------------------------------+
| Percentile           | Classification based on percentile thresholds                | Useful for prioritization or identifying top-risk percentages            |
+----------------------+--------------------------------------------------------------+--------------------------------------------------------------------------+

Elements-at-Risk Layer Settings
--------------------------------

For Elements-at-Risk datasets, the most commonly used Class Mode is ``Automatic Classes``.

This allows RiskChanges to categorize assets based on an attribute field such as:

- Building type
- Road type
- Land use type
- Infrastructure category

The selected ``Field`` column becomes the primary EaR category used in the Summary Table.

Additional EaR Fields
^^^^^^^^^^^^^^^^^^^^^^

RiskChanges also allows users to include additional numerical fields for derivative exposure calculations.

+----------------------+---------------------------------------------------+
| Field Type           | Description                                       |
+======================+===================================================+
| Area Field           | Area-related attribute                            |
+----------------------+---------------------------------------------------+
| Value Field          | Economic or replacement value                     |
+----------------------+---------------------------------------------------+
| Population Field     | Population count                                  |
+----------------------+---------------------------------------------------+
| Other Field          | Any additional numerical variable                 |
+----------------------+---------------------------------------------------+

.. warning::

   The ``Other Field`` must contain numerical values. Non-numerical fields cannot be used for exposure calculations.

Exposure Result Fields
-----------------------

The main outputs from the Exposure module include:

+----------------------+---------------------------------------------------+
| Output Field         | Description                                       |
+======================+===================================================+
| Exposed Fraction     | Portion of the feature exposed to a hazard class  |
+----------------------+---------------------------------------------------+
| Exposed Count        | Number of exposed features                        |
+----------------------+---------------------------------------------------+
| Exposed Area         | Area exposed based on fraction calculation        |
+----------------------+---------------------------------------------------+
| Exposed Value        | Economic value exposed                            |
+----------------------+---------------------------------------------------+
| Exposed Population   | Population exposed                                |
+----------------------+---------------------------------------------------+
| Exposed Other        | Exposure value derived from the Other Field       |
+----------------------+---------------------------------------------------+

Exposure Fraction
------------------

The ``Exposed Fraction`` represents the proportion of an EaR feature exposed to a hazard class.

This is applicable for:

- Line datasets
- Polygon datasets
- Raster/grid datasets

For point datasets, the ``Exposed Fraction`` is always ``1`` (100%) because the entire feature is represented by a single point.

Exposed Count
--------------

The ``Exposed Count`` represents:

    The number of EaR features exposed to the hazard in general.

This value is not separated by hazard class unless users explicitly summarize the results by hazard category.

Additional Exposure Metrics
----------------------------

If additional EaR fields are included, RiskChanges calculates derivative exposure metrics using:

.. code-block:: text

   Exposed Metric = Exposed Fraction × EaR Field Value

Examples include:

- Exposed Population
- Exposed Asset Value
- Exposed Agricultural Area
- Exposed Infrastructure Capacity

Example:

- Building value = USD 100,000
- Exposed Fraction = 0.3

Then:

- Exposed Value = USD 30,000

This approach allows RiskChanges to estimate proportional exposure without modifying the original EaR dataset.