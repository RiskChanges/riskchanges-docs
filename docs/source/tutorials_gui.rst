Tutorials on GUI
==================

Getting Started
-----------------

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

.. image:: /images/dashboard.png
   :scale: 80%

Under User profile, you need to add your **Personal Information** which includes your name, email, phone, date of birth, role in the project and address of the organization or individual.
In **Organization Information**, you need to create an organization and give details such as name of the organization, acronym, contact address and description of the organization.
If you are an individual consultant, then you can add your individual details. Once the organization is created, you can have access to add projects and staffs under organization dashboard under your name in top right corner.

.. image:: /images/createorg.png
   :scale: 60%

You will be able to create multiple projects within the organization where different calculations can be run. Give a desirable name for the project, 
chosen study area and type of project and submit. Once created, you can even edit the project details or delete it. Please note that, if you delete the 
project, all the data and calculations associated with it will also be lost. 

.. image:: /images/projectdash.png
   :scale: 60%

When you have an admin account, you will also have the access to assign new users to the organization. Under this section, you can add a new staff by creating necessary 
credentials such as username, email, and password. Once submitted, the user will then be added to the organization and will have access to view all the projects within 
that organization and use its data for risk calculation. However, please note that the user account will not be able to view this organizational dashboard or make any changes to it. 
That access is provided only for an admin account. 

.. image:: /images/staffdashboard.png
   :scale: 60%


Data Management
-----------------

Once the organizational dashboard has been set up, you will now be able to perform the risk calculations. 
The data management tab allows the user to define all the necessary data and parameters for calculation. 
You will need to first define the **Alternative**, **Scenario** and **Vulnerability** before moving to **Hazard** and
**Elements at Risk**. You can find the detailed instruction video on each individual sections. Before defining the 
parameters in each section, make sure you have selected the project from the top right corner under which 
all your calculations will take place. Also note that all the fields with ‘*’ symbol are mandatory fields. 

.. image:: /images/datamgm.png  
   :scale: 80%


Elements at Risk (EAR)
^^^^^^^^^^^^^^^^^^^^^^^^^

In this section you will be able to define the elements at risk in reference to the chosen hazards. 
Building footprints, land parcels, linear features (road, railway, powerline) and point data are the 
elements-at-risk that can be included in the tool. Before defining the parameters, you will be asked 
to first select the project within the organization where the calculation will take place. Make the 
selection of projects from the top right corner where you will see the list of projects added through 
the organizational dashboard. Also ensure that you have already defined Vulnerability, Alternatives and 
Scenario before moving forward in this section. The data on elements at risk can be added through three 
different methods: through **File Upload**, **OGC service** and **Database connection**.

.. image:: /images/ear.png
   :scale: 60%

**File Upload**: Through this section you can upload the data by simply by selecting a shape file that represents 
your chosen element at risk. Make sure your file is in a zipped format. Under ‘name’ you will have to define a 
unique name for your uploaded element at risk data. It is recommended to maintain a naming convention which is 
easy to follow within your organization. Under the section ‘type’, you can select what is represented by your 
chosen EAR; *building footprints*, *land parcels*, *linear networks*, *points*. You can choose to define other details 
of the layer, *year of representation*, *risk reduction alternatives* and *future scenario*. Under the section of risk 
reduction alternatives and future scenario, you will see that by default it will select the current scenario. If 
you want to select otherwise, do it from the drop-down list. This list is based on Alternative and Scenarios defined
by the user for the specific project. You can add more than one alternative or scenario, but this section is completely 
optional. The parameters for it can be defined under the Alternative and Scenario within the Data Management tab.  The 
details of this are described in section 5 and 6. However, please note that the section on Alternative and Scenario is 
only for the purpose of documentation and does not make any changes in the risk calculation part. 

Once you have all the details added, you can then click the submit button. When you do that, you will see a pop-up window 
with column selection for your uploaded layer. For each of the column name you will have to define whether it represents a 
value, population, geometry, or class. Please note that each element at risk layer should have at least one ‘Class’. The class
column is what links the EAR with the vulnerability curve section and without this the calculation cannot be performed. If you 
make the selection of value or population, then you will also have to define the metrics and units for it. 

.. image:: /images/col_sel.png
   :scale: 60%

Once you submit this, there is another pop-up where you can define the linkage with vulnerability. First, select the hazard 
type you are working with in your project from this drop-down menu. Here in the EAR class, you will see the categories that 
have been defined in the attribute table for “classes” column. For each class then you will be able to select the suitable 
vulnerability function from the drop-down list. These are all the functions that have been created within the system for your 
chosen hazard type (even outside your organization). If you wish to create a new function, you must do so from the
‘vulnerability’ under the data management tab. While you are making the selection, you will also be able to view the details of 
that vulnerability function.  For the same element at risk, it is possible to make this connection of vulnerability function 
for multiple hazard type. For that you must simply select a different hazard and repeat the same process. 

.. image:: /images/vulnconnect.png
   :scale: 50%

**OGC service**: You can also add your elements at risk through OGC services for web map. For this the system needs to first 
make a connection with your GeoServer. In the URL section enter the link for you server. Since our data comes from open web 
service, we are going to replace the web with ows. Now you need to enter the exact name for your EAR layer. Look for your EaR 
layer in your geoserver and make sure the data is in vector format. Then copy the name and paste it in the ‘Layer name’. Then 
click on ‘test connection’.  Once the connection is successful you will see a pop-up message informing that your chosen layer 
was found. With this you can then proceed with defining other parameters the same way as in File upload. 


**Database connection**: You can also add you Element at risk layer from your local database. Make sure your shape file has 
been added to your database folder. Now to make a connection with it, you need to enter all these details: name of your 
database, Local host name, User and password, the port, Schema and finally the name given for your layer. You can then click 
on ‘Test Connection’. Once the connection is successful you will see a pop-up message informing that your chosen layer was 
found. With this you can then proceed with defining other parameters the same way as in File upload. 

