Visualization
=================

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