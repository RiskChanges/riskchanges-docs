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

.. figure:: /images/conceptual-design.jpg
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
   :scale: 80%
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

.. figure:: /images/components-users.jpg
   :scale: 80%
   :align: center

   *RiskChanges system components and the envisaged users*

The following figure illustrates on the workflow of the system.

.. figure:: /images/workflow.jpg
   :scale: 80%
   :align: center

   *RiskChanges workflow illustration*

