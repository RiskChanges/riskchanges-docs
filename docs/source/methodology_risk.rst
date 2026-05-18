Risk Assessment
==================

The Risk Assessment module in RiskChanges calculates the expected annual impacts of hazards based on previously generated aggregated Loss results. The module adopts the quantitative risk assessment approach commonly referred to as the Dutch Method, as described in the `CHARIM methodology <https://charim.net/methodology/55>`_.

The method estimates risk by combining:

- Hazard probability of occurrence;
- Loss values associated with different hazard return periods.

The resulting calculation produces the **Average Annual Loss (AAL)**, which represents the expected average loss per year for a given hazard and elements-at-risk combination.

Risk Assessment Concept
-------------------------

RiskChanges calculates risk using multiple hazard scenarios with different return periods. Each return period represents a different probability of occurrence for the hazard event.

For example:

- A 10-year return period event has a higher probability of occurrence;
- A 100-year return period event has a lower probability of occurrence but may generate larger losses.

The method plots the relationship between:

- Probability of occurrence;
- Calculated aggregated Loss values.

The area under the probability-loss curve is then calculated to estimate the Average Annual Loss.

.. note::

   At least two different return period scenarios are required to perform Risk calculation. However, using more return periods generally improves the reliability and smoothness of the resulting risk curve.

Risk Calculation Workflow
---------------------------

The Risk module uses previously calculated **Aggregated Loss** results as the primary input.

During setup, users must define:

- Hazard type;
- Elements-at-risk type;
- Administrative boundary layer.

After selecting the required combination, the platform automatically filters and displays all compatible aggregated Loss results available in the project.

Users then select the Loss results corresponding to different hazard return periods. These Loss results must originate from:

1. Hazard layers with different return periods;
2. Exposure calculations based on those hazard layers;
3. Loss calculations derived from the Exposure results.

The selected Loss datasets are then combined to generate the probability-loss relationship required for Risk calculation.

Risk Calculation Method
-------------------------

The Risk module estimates the expected annualized loss by integrating the probability-loss curve derived from the selected return periods.

Conceptually, the calculation follows:

.. math::

   Risk = \int Loss(P) \, dP

Where:

- ``Loss(P)`` represents the loss associated with a certain probability of occurrence;
- ``P`` represents the annual probability of exceedance derived from the hazard return period.

The resulting value represents the **Average Annual Loss (AAL)**.

Risk Result Outputs
---------------------

The Risk module produces Average Annual Loss values for each available Loss component, including for example:

- Area;
- Asset count;
- Economic value;
- Population;
- Other aggregated exposure or loss indicators.

The output is generated at the selected administrative boundary level and can be visualized spatially within the platform.

Similar to the Loss module, the Risk module inherits the elements-at-risk categories from the Loss calculation results. This ensures consistency between Exposure, Loss, and Risk workflows.

Result Visualization
----------------------

Within the Risk results, users can visualize different Average Annual Loss fields and apply map styling options similar to the Exposure and Loss modules.

Users may configure:

- Displayed result fields;
- Classification methods;
- Visualization settings and symbology.

These outputs support spatial comparison of expected annual impacts across administrative regions.

Integration with Cost-Benefit Analysis
----------------------------------------

The Risk results generated in this module can be further used within the Cost-Benefit Analysis (CBA) module.

To enable subsequent CBA calculations, users must define the appropriate Risk elements-at-risk type within the Risk module configuration.