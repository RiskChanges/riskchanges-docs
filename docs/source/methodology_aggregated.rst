Aggregated Calculations
=========================

The Aggregated Calculation functionality is available for both the Exposure and Loss modules in RiskChanges. This process summarizes feature-level calculation results into administrative boundary units, enabling regional analysis and comparison of impacts.

Aggregated calculations are particularly important for the Risk Assessment workflow, as the Risk module requires aggregated Loss results as its primary input.

Purpose of Aggregation
------------------------

The individual Exposure and Loss calculations are generated at the feature level, meaning that results are attached directly to each elements-at-risk geometry or spatial feature.

The aggregation process combines these feature-level results into larger administrative units such as:

- Provinces;
- Districts;
- Municipalities;
- Custom administrative boundaries.

This allows users to:

- Compare impacts between regions;
- Generate statistical summaries;
- Support regional planning and decision making;
- Produce inputs for Risk Assessment calculations.

Aggregated Exposure Calculation
---------------------------------

The Aggregated Exposure calculation summarizes Exposure results within the selected administrative boundary layer.

The required inputs include:

- Previously calculated Exposure result;
- Administrative boundary layer;
- Hazard intensity selection.

During the calculation, the platform spatially intersects the Exposure result with the selected administrative units and summarizes the exposure values according to the selected intensity level.

Each administrative unit is then assigned aggregated exposure values corresponding to the selected Exposure result fields.

Depending on the Exposure calculation type, aggregated outputs may include:

- Total exposed area;
- Total exposed asset count;
- Total exposed population;
- Total exposed economic value;
- Other exposure indicators.

.. note::

   The selected hazard intensity determines which Exposure values are included in the aggregation process.

Aggregated Loss Calculation
-----------------------------

The Aggregated Loss calculation follows the same workflow and concept as the Aggregated Exposure calculation, but uses Loss results as the input dataset.

The calculation summarizes Loss values from individual features into administrative boundary units.

The required inputs include:

- Previously calculated Loss result;
- Administrative boundary layer;
- Hazard intensity selection.

The resulting aggregated Loss outputs may include:

- Total physical damage;
- Total economic loss;
- Affected population;
- Aggregated damage ratios;
- Other calculated Loss indicators.

These aggregated Loss results are required for subsequent Risk Assessment calculations because the Risk module operates at the administrative boundary level rather than the individual feature level.

Result Outputs and Visualization
----------------------------------

The aggregated calculation outputs are stored as new result layers and can be visualized directly within the platform.

Users can:

- Display aggregated fields on the map;
- Apply classification methods;
- Configure map symbology and visualization settings;
- Compare results across administrative regions.

The aggregated datasets can also be exported for external analysis and reporting workflows.