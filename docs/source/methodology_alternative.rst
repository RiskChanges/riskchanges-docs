Alternative Module
==========================

The Alternative module in RiskChanges provides a structured framework for defining future conditions, interventions, and planning assumptions used throughout the risk assessment workflow.

Together with the Scenario module, these modules support the organization and documentation of different project configurations that may influence hazard, exposure, vulnerability, loss, and risk calculations.

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

.. figure:: /images/method_alternative.png
   :width: 100%
   :align: center

Alternative Configuration
----------------------------------------

Users can define multiple Alternatives for a single project. Users are required to specify which risk components are expected to change under the defined condition.

These components may include changes related to:

- Hazard characteristics (including type, intensity, and frequency);
- Elements-at-risk distribution (including type, location, value, and population);
- Vulnerability conditions (including physical and population);

This information helps document the intended purpose and scope of each Alternative within the project.

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