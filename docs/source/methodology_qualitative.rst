Qualitative Risk Assessment (Indicator-based Assessment)
========================================================

Overview
--------

RiskChanges supports **Qualitative Risk Assessment** through a configurable, indicator-based framework informed by the `INFORM Risk methodology <https://drmkc.jrc.ec.europa.eu/inform-index/INFORM-Risk/Methodology>`_ of the European Commission Joint Research Centre (JRC). It combines indicator values for administrative units into component and overall risk scores. This assessment complements, but is distinct from, the quantitative **Average Annual Loss (AAL)** calculations described in :doc:`methodology_risk`.

An indicator-based score is a relative, dimensionless assessment measure; it is **not** a monetary loss estimate or an annual probability of loss. Scores should be compared only when the indicator definitions, scoring rules, weights, administrative scale, and reporting period are sufficiently consistent.

Conceptual framework
--------------------

The INFORM-inspired framework is organized into three principal dimensions:

* **Hazard & Exposure:** conditions associated with hazards and the exposure of people, assets, or systems.
* **Vulnerability:** characteristics that increase the potential for adverse impacts.
* **Lack of Coping Capacity:** limitations in the ability to manage, respond to, or recover from adverse events.

Each dimension can contain nested **groups** and **indicators**. The network has an **Overall Risk** root node, whose children are the three dimensions. Individual indicator values are transformed into scores and aggregated upward through the hierarchy.

.. note::

   RiskChanges offers configurable scoring methods, weights, and aggregation operators. Consequently, a RiskChanges assessment that uses a modified indicator hierarchy or aggregation configuration should be described as **INFORM-inspired**, rather than assumed to reproduce the official INFORM Risk Index.

Indicators network and weights
------------------------------

Users define a parent-child hierarchy containing dimension, group, and indicator nodes. For each parent, users select an aggregation method and assign **child weights totaling 100%**. Weights determine the relative contribution of child scores to the parent score; they do not by themselves describe statistical confidence or causal importance.

The network editor supports these aggregation choices:

* **Weighted arithmetic average**
* **Weighted geometric average**
* **Minimum**
* **Maximum**
* **Legacy INFORM transformed geometric**

For illustration, when normalized child weights :math:`w_i` sum to one, the weighted arithmetic mean is:

.. math::

   S_{\mathrm{parent}} = \sum_{i=1}^{n} w_i S_i, \qquad \sum_{i=1}^{n} w_i = 1.

For positive child scores, a conventional weighted geometric mean is:

.. math::

   S_{\mathrm{parent}} = \prod_{i=1}^{n} S_i^{w_i}.

The selected operator controls how child scores are combined. In particular, minimum and maximum aggregation emphasize the lowest or highest child score rather than an average. The **legacy INFORM transformed geometric** option is a separate application setting and should not be assumed to be identical to the conventional geometric formula shown above.

The exported example network supplied for the Bangladesh case study uses a geometric aggregation setting at the overall root and arithmetic aggregation for its three main dimension nodes. Users should inspect imported settings rather than assume that all networks have identical weights and operators.

Indicator scoring and normalization
-----------------------------------

Indicator columns may contain values in different units or scales. The **Indicator Columns & Scoring** step converts those inputs into comparable scores. Available scoring methods are:

* **Already normalized 0–10**
* **Linear**
* **Logarithmic**
* **Exponential**
* **Gaussian**
* **Sigmoid**
* **Categorical scores**

Each indicator also has a **Direction** (**Increasing** or **Decreasing**) and scoring bounds (**Dataset min/max** or **Fixed Reference Bound**). A scoring preview helps users inspect the selected transformation.

For a basic *linear* increasing-direction transformation with lower and upper bounds :math:`a` and :math:`b`, the conceptual rescaling is:

.. math::

   S(x) = 10\,\frac{x-a}{b-a}, \qquad b>a.

For a decreasing-direction linear transformation, the orientation is reversed:

.. math::

   S(x) = 10\,\frac{b-x}{b-a}, \qquad b>a.

These expressions illustrate linear normalization only; they do not specify the internal implementation of the other scoring methods or the platform's handling of out-of-range values. The calculation preview reports **clipped values** where applicable. Users should choose directions so that the interpretation of higher and lower scores remains consistent throughout the network.

.. warning::

   Check indicator units, score directions, missing data, and reference bounds before calculation. Fixed lower and upper bounds should be meaningfully different; otherwise a normalization can become unstable or undefined. A score that is already normalized to 0–10 should not be normalized again unintentionally.

Administrative units and data linkage
-------------------------------------

Results are calculated for the administrative units selected in the **Admin Units** tab. The administrative boundary layer must already be available in the project's **Admin Level** module. The **Label Field** identifies the displayed unit name, while the **Key Field** provides an identifier used to link indicator rows to the corresponding geographic features.

In **Indicators Data**, the uploaded spreadsheet or CSV contains a row for each administrative unit and columns for its indicators. Users choose a worksheet and header row, map indicator columns, and link the dataset's **Key Column** and **Label Column** to the administrative boundary attributes. Exact key matches can be detected automatically; **Suggest Matches** assists with name-based matching, subject to user verification.

Hazard & Exposure input modes
-----------------------------

The **Hazard & Exposure** dimension has two supported input modes:

* **XLSX/CSV Indicator Data:** define Hazard & Exposure indicators and groups in the network, then upload and score their values alongside the other dimensions.
* **Admin Level Exposure:** use a previously generated **Aggregated Exposure Layer** and select an **Exposure Field** from the RiskChanges Exposure results. The associated source is configured in the **Indicators Data** tab.

The second mode connects the indicator-based assessment to existing Exposure module outputs; it does not turn the qualitative risk score into an AAL estimate.

Calculation and interpretation
------------------------------

Before calculation, RiskChanges displays an **Import Preview** and **Calculation Preview**, including linked units, values, overwrites, administrative units, units ready to score, insufficient data, and clipped values. Users can inspect and edit the displayed indicator data table before running the assessment.

Calculated results can be inspected on the map and through **Summary**, **Detail**, and **Compare** tables. The detail view provides node-level information, including the aggregation, children, and **weight sensitivity** for indicator nodes. These tools help identify which dimensions and indicators contribute to differences between administrative units and how sensitive results are to weighting choices.

.. note::

   Maps and scores should be interpreted as results of the selected indicator framework and data vintage. They do not establish the probability of a specific disaster, predict exact damage, or substitute for the quantitative risk calculations described in :doc:`methodology_risk`.

For practical instructions, see :doc:`userguide_qualitative` and the Bangladesh case study in :doc:`tutorials-bangladesh`.
