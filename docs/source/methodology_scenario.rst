Scenario Module
==========================

The Scenario module in RiskChanges provides a structured framework for defining future conditions, interventions, and planning assumptions used throughout the risk assessment workflow.

Together with the Alternative module, these modules support the organization and documentation of different project configurations that may influence hazard, exposure, vulnerability, loss, and risk calculations.

Users can define Alternatives and Scenarios from the **Project Settings** section available on the Dashboard page.

Scenario Concept
------------------

The Scenario module represents possible future conditions that may influence hazard, exposure, or risk within the study area.

Scenarios are generally used to assess how changing environmental, social, or development conditions may affect future disaster risk.

Examples of scenarios include:

- Climate change projections;
- Population growth;
- Land-use change;
- Urban expansion;
- Risk-informed spatial planning;
- Socioeconomic development pathways;
- Future infrastructure development.

Scenarios allow users to organize and compare different future assumptions within the RiskChanges workflow.

.. figure:: /images/method_scenario.png
   :width: 100%
   :align: center

Scenario Configuration
----------------------------------------

Users can define multiple Scenarios for a single project. Users are required to specify which risk components are expected to change under the defined condition.

These components may include changes related to:

- Hazard characteristics (including type, intensity, and frequency);
- Elements-at-risk distribution (including type, location, value, and population);
- Vulnerability conditions (including physical and population);

This information helps document the intended purpose and scope of each Scenario within the project.

Scenarios do not require economic parameters because they are intended to represent future conditions rather than direct investment interventions. Scenario definitions primarily focus on describing the expected changes in risk-related components and planning assumptions.

Project Documentation
^^^^^^^^^^^^^^^^^^^^^^^

Users may upload supporting project documents related to the defined scenario, such as:

- Feasibility studies;
- Technical reports;
- Planning documents;
- Design documents;
- Supporting datasets.

These uploaded files serve as project references and documentation within the platform.

Relationship with Calculations
--------------------------------

It is important to note that the Alternative and Scenario definitions themselves do not automatically modify calculation results within RiskChanges.

The definitions are descriptive and organizational in nature. They serve as metadata and project documentation that help users:

- Organize workflows;
- Differentiate project conditions;
- Track assumptions;
- Compare multiple planning options;
- Support interpretation of results.

To reflect Alternative or Scenario conditions in the actual calculations, users must separately prepare and calculate the corresponding hazard, exposure, vulnerability, loss, or risk datasets associated with those conditions.

.. note::

   Defining an Alternative or Scenario alone does not change any hazard, exposure, Loss, or Risk result. Users must explicitly create and calculate the corresponding datasets representing the defined condition.