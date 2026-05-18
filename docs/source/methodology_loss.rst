Loss Estimation
==================

The Loss Estimation module in RiskChanges calculates the potential impacts of hazards on exposed elements-at-risk (EaR) by applying vulnerability information to previously generated Exposure results. The module supports the estimation of physical damage, economic loss, and affected population depending on the selected exposure and vulnerability type.

Vulnerability Tables
----------------------

Loss calculation in RiskChanges requires vulnerability tables. Vulnerability represents the degree of damage or loss experienced by a specific asset type when subjected to a certain hazard intensity. Each vulnerability record defines the relationship between hazard intensity and damage ratio, which is generally represented as a vulnerability curve.

Vulnerability values range from:

- ``0`` = no damage or no vulnerability
- ``1`` = complete destruction or total loss

The vulnerability tables are managed through the **Vulnerability** menu. Users may:

- Upload their own vulnerability tables;
- Use the global vulnerability tables provided within the platform.

Each vulnerability table is associated with:

- Hazard type;
- Elements-at-risk type;
- Vulnerability category (e.g., physical, economic, or population vulnerability);
- Hazard intensity ranges and corresponding damage ratios.

This structure enables users to link appropriate vulnerability functions to specific EaR classes during the Loss calculation process.

.. note::

   The quality and appropriateness of the selected vulnerability tables strongly influence the reliability of the Loss results. Users are encouraged to use locally calibrated vulnerability functions whenever available.

Loss Calculation Workflow
----------------------------

The Loss module uses previously generated Exposure results as the primary input for the calculation. During setup, users must select the desired Exposure result layer.

If a previous Loss calculation already exists for the same hazard and elements-at-risk combination, users can copy the vulnerability link configuration from the existing Loss result. This feature simplifies repetitive workflows and avoids manually reassigning vulnerability tables for identical layer combinations.

After the initial Loss calculation is created, the platform automatically assigns the default **All Zero** vulnerability table to all EaR classes. This default vulnerability contains only zero values and therefore produces zero damage results. It serves as a placeholder until users assign appropriate vulnerability tables.

To generate meaningful Loss results, users must link suitable vulnerability tables to each elements-at-risk class from the **General** tab.

Linking Vulnerabilities to Elements-at-Risk
---------------------------------------------

Within the **General** tab, users can assign vulnerability tables to specific EaR classes. The vulnerability records available for selection are automatically filtered based on the:

- Hazard type;
- Elements-at-risk type;
- Vulnerability category compatibility.

This filtering mechanism reduces the need to manually browse large vulnerability databases and helps users identify relevant records more efficiently.

Users can additionally:

- Search vulnerability records using the Vulnerability ID;
- Review vulnerability metadata;
- Inspect the vulnerability curve graph before assigning the record.

This verification process helps ensure that the selected vulnerability function appropriately represents the expected damage behavior for the selected asset type and hazard.

Loss Calculation Method
-------------------------

The Loss module calculates losses by multiplying the Exposure result values with the associated vulnerability values for each feature.

The calculation generally follows:

.. math::

   Loss = Exposure \times Vulnerability

Where:

- ``Exposure`` represents the exposed quantity or value;
- ``Vulnerability`` represents the damage ratio corresponding to the hazard intensity.

For example:

- Exposure results such as ``Area``, ``Value``, or ``Fraction`` are multiplied by **Physical** or **Economic Vulnerability** values;
- Exposure results such as ``Population`` are multiplied by **Population Vulnerability** values.

Additionally, the Loss result includes damage ratio fields for each feature, such as:

- ``Damage Ratio (Physical/Economic)``
- ``Damage Ratio (Population)``

These fields store the vulnerability values applied during the calculation and allow users to inspect the assigned damage ratios spatially.

Result Visualization and Field Selection
------------------------------------------

In the **Detail** tab, users can visualize specific Loss result fields on the map. Similar to the Exposure module, users may configure:

- Displayed field columns;
- Classification methods;
- Color schemes and visualization settings.

The selected field is important because subsequent Risk calculations will use this chosen Loss field as the primary input.

Aggregated Loss Calculation
-----------------------------

Before performing Risk assessment, users must execute the **Aggregated Calculation** for the Loss result.

The aggregation process summarizes feature-level Loss values into administrative boundary units. This step is required because the Risk module operates at an aggregated administrative level rather than individual feature geometries.

The aggregation process enables:

- Comparison of losses between administrative regions;
- Statistical summaries of impacts;
- Generation of regional Risk indicators.

Further explanation regarding aggregation procedures is provided in the dedicated **Aggregated Calculations** section below.