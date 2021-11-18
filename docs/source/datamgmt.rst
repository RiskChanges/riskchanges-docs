.. _datamgmt:

Data Management
==================

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

.. _vuln:

Vulnerability
^^^^^^^^^^^^^^^^^^^^^^

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


.. _alter:

Alternative
^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^

This section is to define the scenarios that are implemented and how it affects different components of risk assessment that is Hazard, Element at Risk and Vulnerability.
Here you have to first define the name of the future scenario which can be based on its kind for example Climate change, Land use change, Population change. Then make selection for a code for each scenario you create. 
The same code has to be selected later when you add the scenario parameters in Hazard and Element at Risk section. You can create a maximum of 4 scenarios within one project. 
For each scenario you will have to define, the changes in each of the three risk component. You can select one or more parameters in each. For each selection, you will see a message 
reminding you to upload the new data according to the changes you have specified. You can also add brief description for the scenarios you have added. 

.. figure:: /images/scenario.png
   :align: center

   *Future scenario data input interface*

.. _ear:

Elements at Risk (EAR)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^

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


.. _admin:

Administrative Unit
^^^^^^^^^^^^^^^^^^^^^^

In this section, the administrative unit map having name, description, and related shapefile are uploaded in a zipped format. The input data should be uploaded as shapefiles of polygons.
The administrative unit level is divided into four classes which  are national level, state/province level,  district level and smaller administrative unit level. The polygons are required 
by the system to aggregate the exposure, losses, and risk. For instance, if 60% of a land parcel is located in one administrative unit and 40% of the land parcel fall in the other admin unit, 
then RiskChanges will calculate the loss and risk based on their relative proportion.

.. figure:: /images/adminunit.png 
   :align: center

   *Administrative unit data input interface*