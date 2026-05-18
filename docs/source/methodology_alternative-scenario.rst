Alternative and Scenario
==========================

The Alternative and Scenario modules in RiskChanges provide a structured framework for defining future conditions, interventions, and planning assumptions used throughout the risk assessment workflow.

These modules support the organization and documentation of different project configurations that may influence hazard, exposure, vulnerability, loss, and risk calculations.

Users can define Alternatives and Scenarios from the **Project Settings** section available on the Dashboard page.

Alternative Concept
---------------------

The Alternative module represents risk reduction or risk management interventions evaluated within the project.

Alternatives typically represent actions intended to reduce disaster impacts, vulnerability, or exposure. Examples may include:

- Engineering protection measures;
- Ecological or nature-based solutions;
- Building retrofitting;
- Relocation or resettlement programs;
- Early warning systems;
- Infrastructure upgrades;
- Flood mitigation structures;
- Climate adaptation interventions.

The Alternative definition provides descriptive and economic information that can later be used within the Cost-Benefit Analysis (CBA) module.

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

Alternative and Scenario Configuration
----------------------------------------

Users can define multiple Alternatives and Scenarios for a single project.

For both Alternatives and Scenarios, users are required to specify which risk components are expected to change under the defined condition.

These components may include changes related to:

- Hazard characteristics;
- Exposure distribution;
- Vulnerability conditions;
- Risk reduction measures;
- Administrative planning assumptions.

This information helps document the intended purpose and scope of each Alternative or Scenario within the project.

Alternative Economic Parameters
---------------------------------

In addition to descriptive information, Alternatives also include economic parameters used in the Cost-Benefit Analysis workflow.

The required parameters include:

Baseline Alternative
^^^^^^^^^^^^^^^^^^^^^^

Defines whether the alternative represents the baseline condition used for comparison in the CBA process.

Project Timeline
^^^^^^^^^^^^^^^^^^

Defines the implementation and operational duration of the alternative intervention.

Total Initial Investment Cost
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Represents the total capital investment required to implement the alternative.

Initial Investment Period (Years)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Defines the number of years over which the initial investment is distributed.

Annual Maintenance Cost
^^^^^^^^^^^^^^^^^^^^^^^^^

Represents the recurring yearly operational or maintenance costs associated with the alternative.

Project Documentation
^^^^^^^^^^^^^^^^^^^^^^^

Users may upload supporting project documents related to the defined alternative, such as:

- Feasibility studies;
- Technical reports;
- Planning documents;
- Design documents;
- Supporting datasets.

These uploaded files serve as project references and documentation within the platform.

Scenario Parameters
---------------------

Unlike Alternatives, Scenarios do not require economic parameters because they are intended to represent future conditions rather than direct investment interventions.

Scenario definitions primarily focus on describing the expected changes in risk-related components and planning assumptions.

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