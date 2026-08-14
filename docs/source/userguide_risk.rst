Calculating Risk
================

This section explains how to calculate **Risk** in the RiskChanges platform using previously calculated Loss results. Risk calculation combines loss estimates across different hazard return periods to estimate the expected annual loss.

Risk calculation can be performed for individual elements-at-risk or aggregated by administrative boundaries, depending on the available Loss results.

Overview
^^^^^^^^

The **Risk** module combines loss results from multiple hazard return periods to estimate the expected annual economic loss associated with a hazard.

The main output of the Risk calculation is the **Average Annual Loss (AAL)**, which represents the expected yearly loss considering both the frequency and severity of hazard events.

Risk calculation requires:

- Calculated Loss results for multiple return periods.
- Comparable hazard and elements-at-risk datasets.
- The relevant administrative boundary layer when aggregated Risk is required.

Instructions
^^^^^^^^^^^^

1. **Open the Risk Module**

   - Go to the **Project Page**.
   - Click on the **Risk** tab in the sidebar.
   - Click **Add Risk** to begin.

2. **Select the Calculation Type**

   Select the appropriate calculation type based on the required output:

   - **Individual:** calculates risk for individual elements-at-risk.
   - **Aggregated:** summarizes risk by administrative boundaries.

3. **Fill in General Information**

   Enter the required information:

   - **Layer Name:** provide a name for the Risk result.
   - **Hazard:** select the relevant hazard.
   - **Loss Layers:** select the Loss results corresponding to the available return periods.
   - **Administrative Level:** select the administrative boundary when an aggregated Risk calculation is required.

4. **Run the Calculation**

   - Review the selected inputs.
   - Click **Save** to start the Risk calculation.
   - Once the calculation is completed, the Risk results will be available for visualization and analysis.

Results and Output
^^^^^^^^^^^^^^^^^

The Risk calculation produces results that summarize expected losses across the selected return periods.

Key outputs may include:

- **Average Annual Loss (AAL):** expected annual loss based on the hazard frequency and loss estimates.
- **Risk values:** calculated loss values associated with the selected elements-at-risk or administrative units.
- **Summary statistics:** aggregated information describing the calculated Risk.

The Risk results can be used as inputs for further analysis, including **Cost-Benefit Analysis (CBA)**.

Map Visualization
^^^^^^^^^^^^^^^^^

Once Risk has been calculated, the results can be displayed on the **Map Panel**.

Users can use the available map tools to:

- Zoom in and out.
- Reset the map view.
- Toggle layer visibility.
- Adjust layer opacity.
- Reorder layers.
- View feature attributes.
- Adjust the map style and classification.

The map allows users to identify areas with relatively higher or lower levels of risk.

Risk Result Observation
^^^^^^^^^^^^^^^^^^^^^^^

Risk results can be interpreted by:

- **Identifying hotspots:** locate administrative units or elements-at-risk with high AAL.
- **Comparing areas:** identify areas with relatively higher expected annual losses.
- **Comparing scenarios:** compare Risk results generated under different hazard, exposure, or vulnerability conditions.
- **Supporting mitigation decisions:** use Risk results to identify areas where risk reduction measures may provide the greatest benefit.