User Guide
==================

Getting Started
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When you visit the risk changes `dashboard <http://riskchanges.org/>`__ as a public user, 
you will first be directed to the homepage which has the overview of the system. Even if you are not signed in, you will also be able to view all the ‘vulnerability’ dataset uploaded within the 
organization as this information is publicly available. To proceed further in using the platform, 
you will have to create an account first. If you already have an account, click on the |login| button on
the top right corner of the window and fill in your credentials.
If not, click on |signup| button.Here you will be able to create a new username and password for signing up. Once logged in, you can now access 
all the functions within this platform. You can find the details of each individual section below. 
Before performing any further step for risk calculations, you will need to first set-up your organizational 
dashboard. You can find this under your name in the top right corner.

.. |login| image:: /images/login.png
           :scale: 65% 

.. |signup| image:: /images/signup.png
           :scale: 65% 

Once logged in, you can now access all the functions within this platform. You can find the details of each individual section below. 
Before performing any further step for risk calculations, you will need to first set-up your user profile. You can find this under your name in the top right corner. 

.. figure:: /images/dashboard.png
   :scale: 80%
   :align: center

   *User profile and log out options below the username/email*

Under User profile, you need to add your **Personal Information** which includes your name, email, phone, date of birth, role in the project and address of the organization or individual.
In **Organization Information**, you need to create an organization and give details such as name of the organization, acronym, contact address and description of the organization.
If you are an individual consultant, then you can add your individual details. Once the organization is created, you can have access to add projects and staffs under organization dashboard under your name in top right corner.

.. figure:: /images/createorg.png
   :scale: 60%
   :align: center

   *Create organization interface*

You will be able to create multiple projects within the organization where different calculations can be run. Give a desirable name for the project, 
chosen study area and type of project and submit. Once created, you can even edit the project details or delete it. Please note that, if you delete the 
project, all the data and calculations associated with it will also be lost. 

.. figure:: /images/projectdash.png
   :scale: 60%
   :align: center

   *Project overview interface*

When you have an admin account, you will also have the access to assign new users to the organization. Under this section, you can add a new staff by creating necessary 
credentials such as username, email, and password. Once submitted, the user will then be added to the organization and will have access to view all the projects within 
that organization and use its data for risk calculation. However, please note that the user account will not be able to view this organizational dashboard or make any changes to it. 
That access is provided only for an admin account. 

.. figure:: /images/staffdashboard.png
   :scale: 60%
   :align: center

   *Staff overview interface*


.. _datamgmt:

Data Management
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Once the organizational dashboard has been set up, you will now be able to perform the risk calculations. 
The data management tab allows the user to define all the necessary data and parameters for calculation. 
You will need to first define the :ref:`Alternative<alter>`, :ref:`Scenario<scene>` and :ref:`Vulnerability<vuln>` before moving to :ref:`Hazard<haz>` and
:ref:`Elements at Risk<ear>`. You can find the detailed instruction video on each individual sections. Before defining the 
parameters in each section, make sure you have selected the project from the top right corner under which 
all your calculations will take place. Also note that all the fields with ‘*’ symbol are mandatory fields. 

.. figure:: /images/datamgm.png  
   :scale: 80%
   :align: center

   *Data management drop-down contents*


.. _ear:

Elements at Risk (EAR)
-----------------------------------------------------------------------------------

In this section you will be able to define the elements at risk in reference to the chosen hazards. 
Building footprints, land parcels, linear features (road, railway, powerline) and point data are the 
elements-at-risk that can be included in the tool. Before defining the parameters, you will be asked 
to first select the project within the organization where the calculation will take place. Make the 
selection of projects from the top right corner where you will see the list of projects added through 
the organizational dashboard. Also ensure that you have already defined :ref:`Alternative<alter>`, :ref:`Scenario<scene>` and :ref:`Vulnerability<vuln>` before moving forward in this section. The data on elements at risk can be added through three 
different methods: through **File Upload**, **OGC service** and **Database connection**. This section is divided into four steps: **upload data**, **metadata**, **column connection** and **vulnerability connection**.

.. figure:: /images/ear_new.jpg
   :align: center

   *Elements at risk data input interface*

**File Upload**: In **upload data** tab, you can upload the data by simply by selecting a shape file that represents 
your chosen element at risk. Make sure your file is in a zipped format. After clicking continue, you will be directed to **metadata** tab. Under *name* you will have to define a 
unique name for your uploaded element at risk data. It is recommended to maintain a naming convention which is 
easy to follow within your organization. Under the section *type*, you can select what is represented by your 
chosen EAR; *building footprints*, *land parcels*, *linear networks*, *points*. You can choose to define other details 
of the layer, *year of representation*, *risk reduction alternatives* and *future scenario*. Under the section of risk 
reduction alternatives and future scenario, you will see that by default it will select the current scenario. If 
you want to select otherwise, do it from the drop-down list. This list is based on Alternative and Scenarios defined
by the user for the specific project. You can add more than one alternative or scenario, but this section is completely 
optional. The parameters for it can be defined under the :ref:`Alternative<alter>` and :ref:`Scenario<scene>`  within the Data Management tab. The 
details of this are described in section 5 and 6. However, please note that the section on Alternative and Scenario is 
only for the purpose of documentation and does not make any changes in the risk calculation part. 

.. figure:: /images/metadata.jpg
   :align: center

   *Metadata tab where details of EAR are recorded*


Once you have all the details added, you can then click the continue button. When you do that, you will be directed to *column connection* tab.
For each of the column name you will have to define whether it represents a value, population, geometry, or class. Please note that each element at risk layer should have at least one Class. The class
column is what links the EAR with the vulnerability curve section and without this the calculation cannot be performed. If you make the selection of value or population, then you will also have to define 
the metrics and units for it. 

.. figure:: /images/col_conn.jpg
   :align: center

   *Column selection tab where attributes of EAR are connected to different columns that they represent*

Once you submit this, you are directed to **vulnerability connection** where you can define the linkage with vulnerability. First, select the hazard 
type you are working with in your project from this drop-down menu. Here in the EAR class, you will see the categories that 
have been defined in the attribute table for classes column. For each class then you will be able to select the suitable 
vulnerability function from the drop-down list. These are all the functions that have been created within the system for your 
chosen hazard type (even outside your organization). If you wish to create a new function, you must do so from the :ref:`Vulnerability<vuln>`
under the Data Management tab. While you are making the selection, you will also be able to view the details of 
that vulnerability function.  For the same element at risk, it is possible to make this connection of vulnerability function 
for multiple hazard type. For that you must simply select a different hazard and repeat the same process. 

.. figure:: /images/vuln_con.jpg
   :scale: 50%
   :align: center

   *Vulnerability connection tab for connecting vulnerability curves with EAR classes exposed to certain hazard*

**OGC service**: You can also add your elements at risk through OGC services for web map in the **upload data** tab. For this the system needs to first 
make a connection with your GeoServer. In the URL section enter the link for you server. Since our data comes from open web 
service, we are going to replace the web with ows. Now you need to enter the exact name for your EAR layer. Look for your EaR 
layer in your geoserver and make sure the data is in vector format. Then copy the name and paste it in the Layer name. Then 
click on Test Connection.  Once the connection is successful you will see a pop-up message informing that your chosen layer 
was found. With this you can then proceed with defining other parameters the same way as in **File Upload**. 


**Database connection**: You can also add you Element at risk layer from your local database. Make sure your shape file has 
been added to your database folder. Now to make a connection with it, you need to enter all these details: name of your 
database, Local host name, User and password, the port, Schema and finally the name given for your layer. You can then click 
on Test Connection. Once the connection is successful you will see a pop-up message informing that your chosen layer was 
found. With this you can then proceed with defining other parameters the same way as in **File Upload**. 

.. _haz:

Hazard
-----------------------------------------------------------------------------------

In this section you will define one or more hazard types and its parameters for risk calculation. The data can be added through 
two different methods: through **File Upload** and **OGC service**. Database connection is not possible since the layer is in raster format. 

**File Upload**: Through this section you can upload the data by simply by selecting a raster layer (Geotiff format) that represents your 
chosen element at risk. Make sure your file is in a zipped format. Under name you will have to define a unique name for your uploaded hazard data.
It is recommended to maintain a naming convention which is easy to follow within your organization. Then select the type of hazard you have uploaded 
from the drop-down list. Also select what intensity type of hazard is represented in your uploaded data and its unit. 

.. figure:: /images/hazard.png
   :align: center

   *Hazard data input interface*

A hazard map can either have an intensity value or a susceptibility value depending on its type. If your chosen hazard has intensity value, 
then you will have to define the base value and intensity interval. To get these values you can refer to the hazard layer which you have uploaded and 
open it in a GIS platform. Here the base value which is the minimum value is 0 m. Evaluate the range of values then you can define a suitable intensity 
interval. After that you have to define the average return period of your chosen hazard.

.. figure:: /images/flood.png
   :align: center

   *Flood map with intensity shown in a QGIS platform*

If your chosen hazard type has a susceptibility value (for example in case of landslide), then select susceptibility from the drop-down list in intensity. 
Then you can leave the section on return period empty. 

.. figure:: /images/landslide.png
   :align: center

   *Intensity drop-down list for various hazards*

When you submit this a pop-up will appear. Here you must define the spatial probability for each susceptibility class.

.. figure:: /images/spa_prob.png
   :align: center

   *Spatial probability value assignment interface*


Under the section of risk reduction alternatives and future scenario, you will see that by default it will select the current scenario. 
If you want to select otherwise, do it from the drop-down list. This list is based on Alternative and Scenarios defined by the user for the specific project. 
You can add more than one alternative or scenario, but this section is completely optional.However, please note that the section on Alternative and Scenario is only for the purpose of documentation 
and does not make any changes in the risk calculation.

Before proceeding, please check that all information you have filled here is for the same hazard type you have uploaded. Once you have confirmed that, you can 
click the submit button. Once uploaded, the layer will be shown in the list below from where you can also visualize it, edit the information, or delete it. 

**OGC service**: You can also add your hazard layer through OGC services for web map. For this the system needs to first make a connection with your GeoServer. 
In the URL section enter the link for you server. Since our data comes from open web service, we are going to replace the web with ows. Now you need to enter
the exact name for your layer. Look for your hazard layer in your geoserver and make sure the data is in raster format. Then copy the name and paste it in the 
Layer name. Then click on Test Connection.  Once the connection is successful you will see a pop up message informing that your chosen layer was found. 
With this you can then proceed with defining other parameters the same way as in File upload. 


.. _vuln:

Vulnerability
--------------------------------------------------------

The vulnerability curves are openly accessible, and any user of the system will be able to view the functions uploaded by any organization. At the bottom you can
see the list of all the vulnerability curves that has been created or used by any organization within the system.

.. figure:: /images/vulnlist.png
   :align: center

   *List of vulnerability data*

If you click on the view button |view|, you can see the details of the curve such as the range of intensity, average and standard deviation values and other values. You also have 
an option to compare two vulnerability curves.

.. |view| image:: /images/view.png
          :scale: 85%

.. figure:: /images/comp_vuln.png
   :align: center

   *Comparing two vulnerability curves*

You can check if the vulnerability curve for your desired area and hazard type are on this list which then can be used directly. If not, you can upload your own vulnerability curve. 
Under vulnerability name, give a unique name for your curve. It is recommended to maintain a naming convention that is easy to search from the list. Now from the drop-down list, first 
select the vulnerability type, then select the hazard type. Also select the intensity value you have in your data. Then select the type of element at risk. For building footprints, you 
will also have to further select the class of EAR based on the typology and number of floors. The source of these curves and the region can be selected from the drop-down list. However, 
these two fields are not mandatory. You can also add a description for more detailed documentation of the curve. 

.. figure:: /images/vulnadd.png
   :align: center
 
   *Vulnerability data input interface* 
Finally, you can upload the table for your vulnerability curve in a csv format. This csv must follow a fixed format which you can also view by downloading the template that is provided.

.. figure:: /images/vulntemp.png
   :scale: 85% 
   :align: center

   *Two csv templates for adding vulnerability data*


Please note that the names of the header should not be changed. Here you can list down, the minimum value of intensity, the maximum value of intensity, the average value of vulnerability and 
also the standard deviation. If the standard deviation value is unknown, you can leave the value as ‘0’ instead. After you have added all the required parameters, press the submit button. 
The curve will then be added in the list below from where you can view it, edit the information, or delete the curve.  


.. _admin:

Administrative Unit
---------------------------------------------------------------------------------------------

In this section, the administrative unit map having name, description, and related shapefile are uploaded in a zipped format. The input data should be uploaded as shapefiles of polygons.
The administrative unit level is divided into four classes which  are national level, state/province level,  district level and smaller administrative unit level. The polygons are required 
by the system to aggregate the exposure, losses, and risk. For instance, if 60% of a land parcel is located in one administrative unit and 40% of the land parcel fall in the other admin unit, 
then RiskChanges will calculate the loss and risk based on their relative proportion.

.. figure:: /images/adminunit.png 
   :align: center

   *Administrative unit data input interface*

.. _alter:

Alternative
---------------------------------------------------------------------

This section is to define the alternatives that are implemented and how it affects different components of risk assessment that is Hazard, Element at Risk and Vulnerability.
Here you have to first define the name of the alternative which can be based on its kind for example Relocation. Then make selection for a code for each alternative you create. 
The same code has to be selected later when you add the alternative parameters in Hazard and Element at Risk section. You can create a maximum of 4 alternatives within one project. 
For each alternative you will have to define, the changes in each of the three risk component. You can select one or more parameters in each. For each selection, you will see a message 
reminding you to upload the new data according to the changes you have specified. You can also add brief description for the alternative you have added. 

.. figure:: /images/alternative.png
   :align: center

   *Alternatives data input interface*

If you click this button *More* you can add more details to your alternative for reference. These are mainly financial information for cost-benefit analysis. It is however not 
mandatory to add this detail. Once the name and parameters are defined, you will have to then upload a document here in word or pdf format which is a written explanation of 
changes caused by this particular alternative. This is a mandatory field in order to save. Once all the details are filled in, you can then click the submit button. You can then 
see the new alternative added to this list below.

.. figure:: /images/altmore.png
   :align: center

   *Additional alternatives data input interface*


However, please note that this section is only for the purpose of documentation and does not make any changes in the risk calculation part.

.. _scene:

Scenario
-------------------------------------------------------------------

This section is to define the scenarios that are implemented and how it affects different components of risk assessment that is Hazard, Element at Risk and Vulnerability.
Here you have to first define the name of the future scenario which can be based on its kind for example Climate change, Land use change, Population change. Then make selection for a code for each scenario you create. 
The same code has to be selected later when you add the scenario parameters in Hazard and Element at Risk section. You can create a maximum of 4 scenarios within one project. 
For each scenario you will have to define, the changes in each of the three risk component. You can select one or more parameters in each. For each selection, you will see a message 
reminding you to upload the new data according to the changes you have specified. You can also add brief description for the scenarios you have added. 

.. figure:: /images/scenario.png
   :align: center

   *Future scenario data input interface*


.. _model:

Modelling
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Exposure
------------------------------

In this section, the exposure calculation will take place. Here in the EAR layer you will see all the layers you have added previously in Elements at risk section. Similarly, 
in the hazard layer you will find the layers you have added previously in the hazard tab. If you haven’t done so, please do it through the :ref:`Data Management<datamgmt>` section. In order to calculate 
the exposure, you need to select the combination of EAR layer and the hazard layer. You can make multiple selection and all the combinations will be listed down below. Here, you can 
also find a section where you can select on what level of administrative unit you want to aggregate the exposure calculation. All the admin layer you have previously added will appear
here. If you haven’t done so already please do it through the :ref:`Administrative<admin>` tab under the :ref:`Data Management<datamgmt>` section. If you do not wish to aggregate the exposure calculation and do 
it in the level of EAR layer then simply leave these check box empty. Once you have your desired information, click on calculate exposure button on the bottom right. When the calculation 
has been completed, click on ‘view already completed exposure layers’. Here you can visualize the calculated exposure |viewdata| and also download it in a tabular format |downloaddata|. 

.. figure:: /images/exposure.jpg
   :align: center

   *Calculate new exposure layer tab where EAR and Hazard layers are selected*

.. figure:: /images/calc_exposure.png
   :align: center

   *Computed exposure layers tab where EAR-Hazard exposure combination can be viewed*

.. |viewdata| image:: /images/viewdata.png
           :scale: 70% 
.. |downloaddata| image:: /images/downloaddata.png
           :scale: 75% 


Loss
----------------
In this section you will able to calculate total loss based on the previously calculated exposure. Before proceeding make sure you have already computed the exposure under the :ref:`Modelling<model>` section. 
Here under the loss type you need to define the on what EAR type you want the calculation. The column connection for values and population needs to be defined previously in the EAR section.
If you haven’t done so, please do it under the :ref:`Data Management<datamgmt>` section. Then make selection of the type of computation you want perform. Then on the bottom you will see the list of all the exposures 
that have been previous computed. Make a selection from the list and then click on *Calculate loss*. 
When the calculation has been completed, click on *View already computed losses*. Here you can visualize the calculated loss |viewdata1| and also download it in a tabular format |downloaddata1|.

.. |viewdata1| image:: /images/viewdata.png
           :scale: 70% 
.. |downloaddata1| image:: /images/downloaddata.png
           :scale: 75%

.. figure:: /images/newloss.png
   :align: center

   *New loss computation tab where loss type and computation type are selected*

.. figure:: /images/comploss.png
   :align: center

   *Computed losses tab where loss results can be viewed*

Risk
----------------
In this section you will able to calculate risk based on the previously calculated loss. Before proceeding make sure you have already computed the loss under the :ref:`Modelling<model>` section. By default, 
the *New risk computation* tab has two steps: *Computation type* and *Loss selection*. Here under the *Computation type* you need to define which type of computation you want either single hazard or multi-hazard computation. 
When you choose single hazard, then EAR type and hazard type need to be selected. You can also aggregate as per the administrative unit depending upon your calculation. After clicking continue at the bottom, you will be directed 
to *Loss Selection*. Here, you have to choose the already computed loss combination layers for a particular hazard type with different return periods. For example: Building loss layers with 20 year flood, 50 year flood and 100 year 
flood. After clicking the submit button, you can check the risk results in the *View already computed risks* tab. Here you can visualize |viewdata2| the calculated Average Annual Loss (AAL) and also download it in a tabular format |downloaddata2|.

.. |viewdata2| image:: /images/viewdata.png
           :scale: 65% 
.. |downloaddata2| image:: /images/downloaddata.png
           :scale: 75%

When you choose multi-hazard in the *Computation type* under *New risk computation** tab, three extra steps will be shown in addition to *Computation type*
and *Loss selection* on the bottom you will see the list of all the exposures 
that have been previous computed. Make a selection from the list and then click on *Calculate loss*. 
When the calculation has been completed, click on *View already computed losses*. Here you can visualize the calculated loss and also download it in a tabular format .

Visualization
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In the visualization part, we have layers window in the top left hand corner. The associated data from Hazard, EAR, Exposure, Loss and Risk 
that have been either added or calculated in the previous sections can be navigated from this window. The filter button |filter1| helps to select the desired data
based on several criteria. Once you click on the desired data, it will be shown in the map in the center of the screen. Automatically, two windows pop out; one showing
the active layers window in the bottom left corner and other map legend window in the bottom right corner.

.. figure:: /images/visualization.png
   :align: center

   *Visualization interface with layers and map legend windows*

In the active layers window, the selected layers are shown along with several functions. Show/hide layer button |showhide| is used for showing and hiding the layers. On clicking edit style button |editstyle|, a window pops out 
at the right side of the screen where you can change the color palettes, assign number of classes and adjust the opacity. If it is a vector layer such as building footprints, you have more editing options 
where you can select the style type:*simple*, *categorized*, *classified*.
*Simple* allows you to assign single fill and outline color to all features. *Categorized* allows you to assign color palettes based on attribute selected. *Classified* allows you to assign color palettes
based on the selected quantitative attributes.  
Filter button |filter2| is used to filter the vector layer based on their attributes. Extra function button |extrafunc| gives access to additional function like zooming.

.. figure:: /images/editstyle_full.png
   :align: center

   *Edit style options where color palettes, outline color, outline width, opacity can be edited based on the style type and attributes selected*

Measure distance and area icon |measuredist| at the top right corner allows to measure distance and areas by drawing lines and polygons on the screen. Below this icon is the comparison icon |compare| where you can compare two layers side by side. 
The first active layer will be shown in the right side and you can add any layer in the left side. You can click on the small triangle |triangle| at the side of layers windows to minimize it during comparison. 

.. figure:: /images/compare_full.png
   :align: center

   *Comparing two layers of flood hazard maps fo different return periods with building footprint as EAR*


.. |filter1| image:: /images/filter.png
            :scale: 85%

.. |showhide| image:: /images/showhide.png
            :scale: 85%

.. |editstyle| image:: /images/editstyle.png
            :scale: 85%

.. |filter2| image:: /images/filterblack.png
            :scale: 85%

.. |extrafunc| image:: /images/extrafunc.png
            :scale: 85%

.. |measuredist| image:: /images/distmeas.png
            :scale: 85%

.. |compare| image:: /images/compare.png
            :scale: 85%

.. |triangle| image:: /images/triangle.png
            :scale: 85%