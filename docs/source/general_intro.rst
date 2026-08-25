General Introduction
=====================
RiskChanges was developed with the aim to analyse the effect of risk reduction planning alternatives on reducing the risk now and in the future, and support decision makers in selecting the best alternatives. This page presents the documentation of RiskChanges.

Background of RiskChanges
--------------------------
RiskChanges aim to analyses multi-hazard risk in risk prone area. The tool includes several major features: **multi-hazard**, **multiple assets**, **vulnerability database**, **multi-user**, **compare risk** and **spatial analysis**.

* The multi-hazard feature performs the risk assessment for multiple natural and manmade hazards. 
* Multiple assets feature allows to analyze the risk of multiple asset type with different spatial characteristics.
* The vulnerability database feature, give an access to the user to use and share physical vulnerability curve. 
* The multiuser feature has the capacity to perform the risk assessment by multiple users, who can access the tool at the same time and the input data can be provided by different users for the same project.
* Compare risk feature conducts a comparison between current risk and future risk also different planning alternatives can be compared using this feature.
* Spatial analysis feature allows users to analyse the risk spatially through the web-based map interface. 

In general, the tool has three main components to conduct the multi-hazard risk assessment: data management, analysis, and visualization component. 

Concept of the Platform
--------------------------
RiskChanges is built upon the concept of SDSS (Spatial Decision Support System). Stakeholders are the central component of RiskChanges. The envisaged users of the platform are organizations involved in planning of risk reduction measures. 

.. figure:: /images/conceptual-design.png
   :width: 100%
   :align: center

   *Conceptual design of RiskChanges (adapted from: CHANGES platform)*

RiskChanges can be used in different ways:

* Analyze the risk of the current situation
* Analyze the risk of the current situation for different alternatives of risk reduction
* Analyze the different scenarios through time, in order to evaluate the effect of changes
* Analyze the change in hazards for different scenarios through time
* Analyze the change in assets for different scenarios through time
* Analyze the change in risk for different scenarios through time
* Analyze the effect of different alternatives in risk reduction for different scenarios through time

.. figure:: /images/analysis-riskchanges.jpg
   :width: 100%
   :align: center

   *The various types of analysis that could be carried out with the platform*

Components, Users, and Workflow of RiskChanges
----------------------------
RiskChanges system is composed of a number of modules, which can be subdivided into:

1. **Data input:** this module prepares the input data required for the loss estimation
2. **Exposure calculation:** this module quantifies the extent to which elements-at-risk are exposed to a specific hazard.
3. **Loss estimation:** this module calculates the losses for specific combinations of exposure calculation results and vulnerability curves.
4. **Risk analysis:** in this module the user can select specific combinations of losses (calculated in the loss estimation module for specific combinations of hazards and elements-at-risk).
5. **Alternative definition:** a user interface aims to define risk reduction alternatives for a given study area. 
6. **Cost-Benefit Analysis:** this module calculates the Internal Rate of Return for the cost-benefit analysis of risk reduction measures.
7. **Cost-Effectiveness Analysis:** this module evaluates the cost of different risk reduction alternatives in relation to their effectiveness, partiularly when the benefits are intangible or cannot be easily expressed in monetary terms.
8. **Multi-Criteria Evaluation:** this module aims at providing support for decision makers in choosing the optimal risk reduction alternative.
9. **Scenario definition:** this module is comarable with the alternative definition module. This is casically a user interface which aims at the defiition of one or more future development scenarios for a given study area.
10. **Visualization:** this module is integrated in almost all the components above, as visualization is required in most of those.

.. figure:: /images/components-users.png
   :width: 100%
   :align: center

   *RiskChanges system components and the envisaged users*

The following figure illustrates on the workflow of the system.

.. figure:: /images/workflow.png
   :width: 100%
   :align: center

   *RiskChanges workflow illustration*

Concept of Dynamic Multi-Hazard Risk Assessment
----------------------------

**RiskChanges**: Multi-hazard risk is not static. It changes as a consequence of variations in hazard conditions, changes in the location and characteristics of exposed aseets, evolving vulnerability and capacity, implementatin of risk reduction measures, and longer-term developments such as climate change, land-use change and population growth. A dynamic multi-hazard risk assessment therefore needs to evaluate not only the exisitng risk, but also how this risk may change under alternative risk reduction strategies and under different future scenarios.

.. figure:: /images/0_generalflowchart.png
   :width: 100%
   :align: center

   *General Flowchart of RiskChanges*

Risk Components
^^^^^^^^^^^^^^^

The assessment starts ith the three fundamental components of quantitative risk analysis: **hazard, assets or elements-at-risk, and vulnerability**.

* The **hazard component** describes the potentially damaging events that may affect the area of interest. For each hazard type, information is required on its spatial extent, intensity and frequency or probability of occurrence. Depending on the hazard, intensity may be expressed through parameters such as flood depth and velocity, ground-shaking intensity, landslide velocity or depth, wind speed, wildfire intensity, or other hazard-specific metrics. A probabilistic analysis normally uses multiple hazard scenarios with different intensities and associated frequencies or return periods. In a multi-hazard assessment, these scenarios may additionally account for interactions between hazards, including independent, triggering, cascading, coupled or preconditioned events, as well as their temporal and spatial relationships.
* The **assets**, or **elements-at-risk**, represent the people, buildings, infrastructure, land use, economic activities and other valued elements that may be affected. Asset information describes their spatial location or extent, their type and relevant characteristics, and their quantification. Quantification depends on the objective of the analysis and may include, for example, the number of people or buildings, length of roads or pipelines, area of agricultural land, replacement value of structures, or economic value of production.

Exposure
^^^^^^^^^^^^^^^

* **Exposure** is determined by combining the hazard and asset information spatially. Hazard maps are overlaid with the elements-at-risk to identify which assets are located within potentially affected areas and the hazard intensity to which each asset is subjected.
* Exposure can be analysed at the level of individual assets. For example, each building, road segment, school or hospital may be assigned the flood depth, ground-shaking intensity or landslide intensity associated with each hazard scenario. Alternatively, exposure can be aggregated by administrative unit by calculating, for example, the number of exposed buildings, exposed population, road length or asset value within each unit and within different hazard-intensity classes. The resulting exposure information therefore provides the link between the physical hazard and the potential consequences.

Vulnerability, Losses, and Risk
^^^^^^^^^^^^^^^^^^^^^^^

* Exposure alone does not indicate the severity of the consequences. This requires information on **vulnerability**, which expresses the degree to which an exposed element may be damaged or lost when subjected to a particular hazard intensity.
* For physical assets, vulnerability is commonly represented by **vulnerability curves**. These curves relate hazard intensity on the horizontal axis to the expected degree of loss or vulnerability on the vertical axis. Vulnerability relationships are specific both to the **hazard type** and to the **asset class**. For example, masonry buildings, reinforced-concrete buildings and informal structures may have very different vulnerability relationships for the same flood depth or earthquake intensity. Similarly, vulnerability functions developed for floods cannot be applied directly to landslides or earthquakes.
* For each hazard scenario, the hazard intensity associated with an exposed asset is translated through the appropriate vulnerability curve into an expected degree of loss. Combining this vulnerability with the quantity or value of the exposed asset produces the corresponding **loss**. This procedure is repeated for the large number of hazard scenarios included in the analysis.
* Risk is subsequently derived by combining these loss scenarios with their associated occurrence frequencies or probabilities. Instead of relying on a single deterministic event, probabilistic risk analysis considers the complete range of possible losses and their likelihood of occurrence. This allows the calculation of indicators such as **Average Annual Loss (AAL)**, as well as loss-exceedance relationships showing the probability that specified levels of loss will be exceeded.

.. figure:: /images/1_quantitativerisk.png
   :width: 100%
   :align: center

   *Analysing Risk Quantitatively*

Qualitative Risk and Vulnerability Indicators
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Not all relevant dimensions of risk can be represented adequately by physical vulnerability curves and direct economic or population losses. **Social, economic and environmental vulnerability and capacity indicators** can therefore be incorporated alongside quantitative information on exposure, loss and risk.
* These indicators may describe, for example, poverty, age structure, access to services, livelihood dependency, environmental sensitivity, intitutional capacity or coping capacity. Through **Spatial Multi-Criteria Evaluation (SMCE)**, these indicators can be standardised, weighted and combined with information on hazard, exposure, losses and risk. The result is a set of qualitative or semi-quantitative risk classifications, particularly suitable for comparison between administrative units and for identifying areas where high physical risk coincides with high social vulnerability or limited coping capacity.

.. figure:: /images/2_qualitativerisk.png
   :width: 100%
   :align: center

   *Analysing Risk Qualitatively*

Evaluating Risk Reduction Alternatives
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Once the existing risk has been quantified and classified, different **risk reduction alternatives** can be formulated and evaluated. An alternative may consist of a single intervention or, more commonly, a combination of measures. These may include nature-based solutions, structural engineering works, spatial planning and land-use regulation, strengthening or retrofitting of exposed assets, evacuation planning, preparedness measures and multi-hazard early warning systems.
* An important principle is that a risk reduction measure does not simply reduce a final risk value. It acts by modifying one or more of the underlying risk components. For example, an engineering measure may reduce hazard intensity or frequency; spatial planning may prevent new development in hazard-prone areas and thereby reduce exposure; retrofitting may reduce physical vulnerability; and early warning and evacuation may substantially reduce population vulnerability and mortality without necessarily changing physical damage.
* For each risk reduction alternative, the relevant hazard, asset and/or vulnerability information therefore needs to be updated. Exposure, losses and risk are then recalculated to represent the situation after implementation of the alternative. Comparison with the existing-risk situation provides a quantitative measure of the risk reduction achieved.
* For economic losses, the reduction in **Average Annual Loss** or another appropriate risk metric can be compared with the investment and maintenance costs through **Cost-Benefit Analysis (CBA)**. Where the principal objective is to reduce mortality or affected population rather than monetary loss, **Cost-Effectiveness Analysis (CEA)** can be applied. Since decisions normally involve objectives that cannot all be expressed in monetary terms, the different alternatives can subsequently be compared through **Multi-Criteria Evaluation**, incorporating criteria such as economic efficiency, reduction in casualties, environmental impacts, social acceptability, implementation feasibility and co-benefits.

.. figure:: /images/3_optimalalternatives.png
   :width: 100%
   :align: center

   *Analysing Optimal Risk Reduction Alternatives*

Future Changes in Multi-Hazard Risk
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* The same framework can be extended to analyse how risk may evolve through time. **Climate change, land-use change and population change** can modify all major components of risk.
* Climate change may alter the type, intensity and frequency of hazardous events. Land-use and population change can modify the spatial distribution, number and value of exposed assets, while socio-economic development, construction practices and adaptation may alter vulnerability and capacity. Consequently, future risk cannot generally be assessed by changing only the hazard component while leaving exposure and vulnerability unchanged.
* Future scenarios are therefore defined for selected **reference years**, for example 2030, 2050 or 2100, and for specified combinations of climatic and socio-economic assumptions. Updated hazard maps, asset maps, asset characteristics and, where appropriate, vulnerability information are provided for each scenario. Exposure, loss and risk are then recalculated using the same analytical framework as for the existing situation. This makes it possible to quantify not only the future level of risk, but also the contribution of changes in hazard, exposure and vulnerability to that change.

.. figure:: /images/4_futurerisk.png
   :width: 100%
   :align: center

   *Analysing How Risk might Change in the Future*

Combining Future Scenarios and Risk Reduction
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* The most comprehensive application combines the two dimensions of change: **future scenarios and risk reduction alternatives**. Risk reduction measures that perform well under current conditions may become less effective under substantially different future hazard, land-use or population conditions. Each proposed alternative can therefore be evaluated again under selected future scenarios.
* This produces a matrix of risk results in which the existing situation is compared with different risk reduction alternatives, different future scenarios, and combinations of both. The analysis can identify measures that provide substantial benefits today while remaining effective across a range of uncertain future conditions. In this way, dynamic multi-hazard risk assessment supports the selection of **robust and change-resilient risk reduction strategies**, rather than measures optimised only for present-day conditions.
* The overall framework therefore treats multi-hazard risk assessment as an iterative decision-support process: **characterise hazards and assets → determine exposure → analyse vulnerability → calculate losses → quantify risk → evaluate risk reduction alternatives → analyse future changes → test the alternatives under future scenarios**. This allows risk information to move beyond a static representation of present-day conditions and become a tool for comparing alternative development and risk-reduction pathways through time.

.. figure:: /images/5_optimalfuturerisk.png
   :width: 100%
   :align: center

   *Analysing Optimal Future Proof Risk Reduction*