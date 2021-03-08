# Plotly_Homework
20210310

This activity is to provide code that will create a table and plots that are dynamically updated when a user selects a unique sample id number.

A single file was provided that contained 3 different data sets.  The common link to each data set is an id number.  The first data set was the list of id numbers, the second data set contained study participant demographic information and the third data set contained sample results.

An index.html file was provided to use as a basis for the effort to render desired plots.

The homework has 2 Levels.  Level 1 is required and Level 2 is Optional.  Both Levels were completed.

### I. Level 1: Demographic Table, Horizontal Bar Chart, and Bubble Chart (Required) - completed



JavaScript was used to present the entire table upon inital rendering and then filter the table based on a date supplied by the user.

The rendered table has a column for date, city, state, country, shape, and comment.

Instructions were added to the basis index.html for how tp make a date request and Clear & Refresh button was added to reset the table.

The Javascript, app.js, high-level pseudocode was:
 - import dataset
 - review data to understand how data is set up
 - create method to capture user selected id number
 - pass the id number to a function that will extract data and create plots using plotly

Images of initial rendering and date filtered response.

<img src="/images/images1.PNG" width = "250">
<br>
<img src="/images/images2.PNG" width = "250">
<br>
<img src="/images/images3.PNG" width = "550">

### II.Level 2: Multiple Search Categories (Optional) - completed

Complete all of Level 1 criteria.

Objective was to use code from Level 1 and add addtional input tags so user can set multiple filters and search for UFO sightings in a more detailed manner.  The additional filters added were:
 - city
 - state
 - country
 - shape

The Javascript, app.js, high-level pseudocode was:
 - render data displaying the full table
 - identify connection (button) between html and JavaScript that would bring desired filter in app.js
 - amend code to use additional filters
 - Using filters in if statements and when criteria met, create new array with only desired data for review
 - Render/display desired data

Images of initial rendering and sample filtered responses.

<img src="/images/images4.PNG" width = "300">
<br>

