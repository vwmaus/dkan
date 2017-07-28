====================
Visualizations: Charts
====================

Charts are a powerful tool for taking data and making it meaningful to the average site visitor who may have little to no experience with data and analysis. Charts offer power and flexibility to represent exactly what you’re looking for with minimal effort and no specific technical training required. Data that power charts can come directly from your DKAN data catalog or alternatively any URL, public Google spreadsheet, or data proxy/API.

Charts are ideal for showing comparative and/or historical information. Site visitors can look at a Chart and quickly discern the relationship between several data points. Charts easily adapt to represent a number of combinations between many values. Visualizations may range from a simple 2-dimensional comparison to more complex, multi-faceted relationships.

**Supported data and file types:**

- **Using internal CSV files:** Charts visualize data that has its contents organized into rows and columns (tabular data). DKAN Charts support CSV files when selecting an internal Resource hosted on DKAN. Select the CSV option for the back-end when loading the data source.
- **External CSV and XLS files:** You can create a Chart from files hosted elsewhere on the Web as long as a link is provided. Linked files can be a CSV or XLS. When files are externally linked select the DataProxy option for the backend when loading the data source.
- **Using Google spreadsheets:** Public Google spreadsheets are files created with Google sheets that have been published to the web. You can create your Chart with the public link and by selecting the Google spreadsheet option for the back-end when loading the data source.

**Choosing your data:** The first step in adding a Chart is choosing which data you want to visualize. Choose a title and add a description, then select the data source. You have a 3 options for selecting the data source:

- **Upload a new file:** This is a file stored locally (ie a file on your computer’s hard drive) and not already on your DKAN site. Uploading a file to power your Chart does not automatically add the file as a Resource on your DKAN site. Use the Upload button in the File field to choose a file from your computer. Note file size and type limits apply.
- **Choose an existing Resource:** Select a Resource that has been added to your DKAN site. Start typing in the Existing Resource field and DKAN will autocomplete with matching Resources.
- **Link to an external file:** Use the Source field to link to a file hosted elsewhere on the web.

**Choose a data processor:** Once you select the data source, it’s important to choose the right data back-end to process the data. The processor reads the contents of a file and makes it possible to define which variables should be visualized. This works in the background, but you should know which data sources match which data back-ends. There are 3 data back-end to choose from:

- **CSV:** CSV is the default selection, and it is used for Charts powered by internal data sources. If you upload a new file or select an existing Resource as your data source then your data back-end is CSV.
- **DataProxy:** If you use an external link for the data source, you may use a CSV or XLS file type. An external link is the only way to power a Chart with an XLS file. If you select a data source by using an external link then your data back-end is DataProxy.
- **Google Spreadsheet:** You can power a Chart with a Google spreadsheet if the document has been published to the Web and made public. If you select the public link to a Google spreadsheet then Google Spreadsheet is your data back-end.

.. figure:: .../images/site_manager_playbook/adding_new_content/adding_new_content_17.png
   :alt: A screencap of the "Load Data" portion of the Visualizations creation page in DKAN.

**Defining your Chart variables:** In essence, Chart variables are the two axes of your Chart that you set. The x-axis and the y-axis each have their own set of values that run along each respective axis. Because Resources often contain more than two columns (all with their own set of values), you can choose which columns you want as the x- and y-axis as well as add Series. Series can be selected from the different columns within your Resource to compare multiple columns along the Chart axes. This provides flexibility when using large files to create Charts.

You can choose which contents within the data source to display on your Chart. Some data sources may be fairly simple with only a couple columns while others may contain dozens. Options for the variables are based on the contents of the data source selected to power your DKAN Chart, so you’ll choose from columns and their values. There are 3 variables to select for when adding your Chart:

- **Series.** Series show the values within a column as the y-axis values mapped along the X-Field values. Once you choose a column to provide the values for the X-Field, Series provide the corresponding y-values. You can choose multiple columns from your Resource to be Series, which can be helpful for showing multiple data points next to one another.
- **X-Field.** The X-Field provides the x-axis values for your Chart. Choose a column from your Resource to populate the X-Field with values.
- **Data Format:** Selecting the correct data format helps Charts to display correctly. Choose the format that matches the format of the values in your X-Field. If you’re not sure, you can leave the selection on Auto and DKAN will make the best selection. If the values are text/non-numeric, select the String format.

**Choose a Chart type:** Different types of data work better with certain Chart types more than others. DKAN offers a number of different Chart types like line graphs, bar charts, and pie charts and different types of data will work better as a line graph rather than a bar chart.

For continuous data (like time) use a line Chart to show the movement of the data. For categorical data (like a discrete totals within a category) use bar charts, and for data that totals a sum use a pie chart.

There are a number of Chart types to best display your data depending on what you want the Chart to show and the contents of your Resource. You can choose a Chart type and then move to the Preview and Adjust screen to make the final modifications to your Chart. You can always change the Chart type by using the Back button, so that you can test and see which Chart type works best with your data.

.. figure:: .../images/site_manager_playbook/adding_new_content/adding_new_content_18.png
   :alt: A screencap displaying the options for Chart types in DKAN.

In the example below, the Site Manager is adding a Chart that uses an existing Resource. By typing, DKAN suggests an autocomplete option and the Site Manager selects the Resource. Once the Resource is selected, the Site Manager can define the variables of the Chart. In this example, the Resource is very basic with only two columns that be chosen from, but more robust Resources could have several columns to choose from.

.. figure:: .../images/site_manager_playbook/adding_new_content/adding_new_content_19.gif
   :alt: An animated screencap displaying the Chart creation process in DKAN.

**Adjusting your Chart settings:** After the data is loaded and the variables selected, you can see how your Chart will appear and make adjustments so that your visualization best depicts the meaning of the data. On the Preview and Adjust screen, you make any final modifications to your Chart through a number of options on the Chart Configuration menu. The Chart preview will adjust in real-time to show you what the Chart will look like on your site. Use the preview to test out different adjustments for your Chart settings.

In the example below, a Site Manager is adjusting the Chart settings for a Chart they're adding. Though there are a number of options, the data here is fairly basic. The Site Manager rotates the labels by putting in a degree of rotation in the X Label Rotation field, changes the color of bars by adding a hex value in the Color field, and adds a label to the x-axis by putting a name in the X Axis Label field.

.. figure:: .../images/site_manager_playbook/adding_new_content/adding_new_content_20.gif
   :alt: An animated screencap displaying the Chart creation process in DKAN.

As the example continues below, the Site Manager decides to show the title of the Chart and selects the Show Legend option. Show Tooltips and Reduce Ticks are selected by default. Click on the Finish button at the bottom of the page to finalize your selections and see the final results of how the Chart will appear on your DKAN site.

Unlike other content types, Charts don't automatically collect on a page on your DKAN site. You can make Charts visible by including them in Dashboards and Data Stories.

.. figure:: .../images/site_manager_playbook/adding_new_content/adding_new_content_21.gif
   :alt: An animated screencap displaying the Chart creation process in DKAN.

Key information when adjusting your Chart settings:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **Query Editor:**
The Query Editor field lets you search the contents of the Resource powering your Chart and visualize the most relevant pieces. This function is useful for especially large Datasets. Use this setting to perform a complex search on the data in your Resource and narrow the focus to display on your Chart. It's good for highlighting key insights in the data. Use the same format conventions as in the Resource (ie $0.00, x/y/z) when performing the search.

- **Filter Editor:**
Terms add a broad filter to highlight characteristics shared by multiple data points in your Resource. This is adds more focus than visualizing all the contents of a Resource, but is not very overly complex. Use this to draw specific comparisons in your visualization. Add multiple filters to give a specific cross-section within the data.

  - **Field:** Create a term to filter the data by first choosing a Field from a column within the Resource. All the columns will appear in a drop-down menu to choose from. Use terms to narrow the view of the data.

  - **Filter Type:** Choose from the drop-down list to further specify conditions for the data you’re looking for within the Field you’ve already selected.

- **X-axis Chart Settings:**
These settings are specific to the x-axis.

  - **X-Format:** Choosing the X-Format lets you specify how the x-axis values are represented rather than as the basic numbers. For example, the value 5.2 will show as $5.20 if the X-Format is $0.00.

  - **X Label Rotation:** Use this to rotate the values of the x-axis of your Chart. With 0 degrees rotation, the labels appear side by side. Enter a number to add a degree of rotation and the labels will appear at an angle.

  - **Step:** Set the number of increments that will appear on the x-axis. The total distance on the x-axis from the 0 value to the final value will be divided into the number of increments set. By default, the Step is not set.

  - **Tick Values:** Set a range of values from your Resource to narrow which values appear on your Chart. By default, every value in the Resource is displayed.

  - **X Axis Label:** This is the name that describes the x-axis and appears on your DKAN Chart below the x-axis. Create a label to provide more context for the data being visualized.

- **Y-axis Chart Settings:**
These settings are specific to the y-axis.

  - **Format:** Choosing the Format lets you specify how the y-axis values are represented rather than as basic numbers. For example, the value 5.2 will show as $5.20 if the Format is $0.00.

  - **Y Axis Label:** This is the name that describes the y-axis and appears on your DKAN Chart below the y-axis. Create a label to provide more context for the data being visualized.

  - **Distance:** The distance of the Y Axis Label from the left edge of the page. The larger the number, the closer the label appears to the y-axis of your Chart.

- **General Chart Settings:**
These options apply to most chart types.

  - **Margin:** Margins add padding (extra white space) around your Chart, measured in pixels. Padding is added to the top, right, bottom and left respectively. Adjust the padding to accommodate long labels, Chart values, label rotations, etc.

  - **Transition Time:** Change the time it takes to animate the data in a Chart. Longer transition time will make the sections of a Chart appear more slowly. Note: this does not affect pie charts.

  - **Color:** Change the color of the segments of your Chart by adding color names (blue, green, etc.) or the hexadecimal numbers of specific hues (#FFD9AA , #FFFFFF). You can also use the color selection tool to visually select a color rather than by typing it in. You can add any number of different colors for the Chart segments by adding commas in between colors.

  - **Sort:** Choose which criteria the Chart sorts data by and displays on the graph, like A-Z or highest to lowest. Criteria could be values from the Chart variables or left to the default sort setting.

  - **Goal:** This setting creates a line at the value you designate on the Chart. It signifies a baseline, an average, or a goal among the values to compare the rest of the data. Enter a value in the Goal field to select the value to appear parallel to the x-axis. You can also choose the color of the line, whether you want to show the label (the label is "Target" and cannot be changed), and if the label should appear directly on the chart or outside of it.

- **Checkboxes:**
These are all optional.

  - **Show title:** A Chart must be titled when it is created. By checking this box, you can display that title as a header on the Chart.

  - **Show controls:** Select the Show controls option to make your Chart interactive. On bar charts, you can include buttons for site visitors to choose how data is displayed on the Chart either as Grouped and Stacked. Check this box to show buttons that show data either as a single stack composed of all the Series (Stacked) or the data are grouped together but have discrete bars (Grouped).

  - **Show legend:** When selected, this shows site visitors the names of the Series included in your Chart. Site visitors can show and hide Series on the Chart when Show Legend is checked.

  - **Group by X-Field:** With non-numerical discrete data (usually text), you may have repeated x-values on your x-axis. Check this box to add the outputs together and display as a single x-value on your Chart.

  - **Show Tooltips:** Check this box so that site visitors can mouse over the individual sections of your Chart and see exact values. If this box is checked, you won’t also need Show Values, which creates a fixed label for each value.

  - **Reduce Ticks:** In a value range, you may not need display every value (for example, 1-1000). Check this box to group values by increments to reduce the number of x-axis values shown on the x-axis.

  - **Stagger Labels:** Staggering places labels slightly above and below each other rather than on the same line, so that they don’t overlap. Check this box if your labels don’t appear correctly.

  - **Show Values:** Show exact values on your Chart with a fixed label. If this box is checked, you won’t also need Show Tooltips (which creates hover text with values).

  - **Show Data Points:** This option only applies to the line chart type. Check the Show Data Points option to add a dot on the line Chart for every unique data point in the Resource.

  - **Donut:** This option only applies to the pie chart type. Select the Donut checkbox to change the aesthetic of your pie chart to look like a donut shape. This adds some variety and visual flexibility to the standard pie chart type.

**Going back to change Chart selections:** To make changes on any of the previous screens, use the Back button rather than the key on your keyboard or back tab in your browser. By moving back without using the Back button, you may lose all your work or encounter other errors.

Basic Process to Add a New Chart:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Step One - Choose a Resource
---------------------------
- Enter a title for the chart.
- Enter a description if needed.
- Then start typing the title of a resource that you would like to use as the data source. A list will appear, select the resource from the list.
- OR, if the data you want to use is not on your site, click the Upload Data tab to upload a CSV data file.
- Click the Next button.

.. image:: images/chart-step-1n.png

Step Two - Define Variables
---------------------------
- **Series:** Add all the columns you would like to plot along the y-axis, the **value** axis. A collection of related values is what makes up a 'series'.
- **Y-Field Data Type:** The data type will be auto-detected but if you see issues you can manually select the data type here.
- **X-Field:** Choose a single column for the x-axis, the **category** axis.
- **X-Field Data Type:** The data type will be auto-detected but if you see issues you can manually select the data type here.

.. image:: images/chart-define-variables.png

Step Three - Choose Chart Type
---------------------------
Select the chart type that will best represent your data.
**NOTE**: X and Y Axis Fields are not supported by the *Pie Chart* type.

.. image:: images/chart-step-3.png

Step Four - Preview and Adjust
---------------------------
You can adjust colors, margins, include a goal, labels, tick values, and more.
Click the question mark icons if you need help understanding the configuration options.

.. image:: images/chart-configuration.png

By default the chart will use the first 100 records of your data source. To use all records, click the Dataset tab to reveal the data pager, edit the max range value from 100 to the total number of records present.

.. image:: images/chart-pager.png

Optional: Query Editor
---------------------------
Click the '+' on the query editor to see the query input field. Enter text to query the data. Returned rows will contain data matching your text (including partial text matches). Click on the Dataset tab to better see how the data is modified by your query.

.. image:: images/chart-query-editor.png

Optional: Filter Editor
---------------------------
Click the '+' on the filter editor to add one or more filters to limit the data used for the chart.
Multiple filters will be applied with the AND operator (all criteria must be met for the data to be included in the chart).

1. Create a filter
  * Select the field you would like to filter by.
  * Select filter type: Select Value to filter by strings (labels), select Range to filter by numerical values, and select Geo distance to filter by geographical data.
  * Click **Add**
  * Value filters check for exact matches (no partial text matches; use the Query Editor instead if you need to search for partial text matches)
2. Configure the filter
  * Fill in the fields to complete the filter.
  * Click **Update** to reload the chart.

To remove a filter, click the trash can icon next to the filter name.

.. image:: images/chart-filter-editor.png

Chart Configuration Options Glossary:
---------------------------

X Axis
~~~~~~~~~~~~~~~~~~~~~~~~
* **Format** Select an appropriate format for the X Axis labels.
* **Axis Label**  will provide a custom label for the x axis.
* **Note:** Axis labels do not display for Pie Charts.
* **Label rotation** will change angle of label values.
* **Tick Values** Enter a numerical range to set the start and end values to display.
* **Step**: Use the Step field to define the value between each tick within the range. **NOTE:** If the range set for tick values is smaller than the range of complete data represented, the chart will be abbreviated.

Y Axis
~~~~~~~~~~~~~~~~~~~~~~~~
* **Axis Label** Provides a custom label for the y axis.
* **Note:** Axis labels do not display for Pie Charts.
* Adjust the *distance* field if your axis label overlaps the y-axis data labels. You can move the label left with positive values, and right with negative values. You may need to adjust the left margin of the chart as well.
* **Tick Values** Enter a numerical range to set the start and end values to display.
* **Step**: Use the Step field to define the value between each tick within the range. **NOTE:** If the range set for tick values is smaller than the range of complete data represented, the chart will be abbreviated.

General
~~~~~~~~~~~~~~~~~~~~~~~~
:Color: Set the color the chart is drawn in. Use either a `HEX color code <http://www.w3schools.com/tags/ref_colorpicker.asp>`_ or a `valid css color name <http://www.w3schools.com/cssref/css_colornames.asp>`_ Separate multiple colors with commas.
:Goal: Overlay a goal or target line on the chart.
:Margin: Enter value of margin in the order: *top, right, bottom, left*
:Show Title: Display the title you entered on step 1.
:Show Controls: Whether to show extra controls or not. Extra controls include things like making multiBar charts stacked or side by side.
:Show Legend: Display a legend for the chart.
:Show Tooltips: Shows data and label on hover.
:Group By X Field: If there are two or more rows that have the same value in the column assigned to the x-axis field, those rows will be combined and display as a single data point. This is only relevant for combining numerical data.
:Fewer X-axis Labels: Reduces the number of labels displayed along the x-axis.

Save the chart
~~~~~~~~~~~~~~~~~~~~~~~~
Remember to click **Finish** to save your configuration changes.

Recline
*****************
The bundle also includes an integration with the `Recline module <https://github.com/NuCivic/recline>`_. If you have a content type with a recline file field, you can add a Recline Field Reference field to your chart bundle. This field type is defined in a module that comes bundled with `Visualization Entity <https://github.com/NuCivic/visualization_entity>`_. The included DKAN integration module adds a Recline Field Reference pointing specifically at DKAN's Resource content type. In this case, entering an existing Resource node in the reference field will automatically populate the resource file into the chart entity's file field.
