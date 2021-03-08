# Plotly_Homework
20210310

Th activity is to provide code that will create a table and plots that are dynamically updated when a user selects a unique sample id number.

A single file was provided that contained 3 different data sets.  The common link to each data set is an id number.  The first data set was the list of id numbers (names), the second data set contained study participant demographic information (metadata) and the third data set (samples) contained sample results.   Common fields were present for each id in the metadata and sample data sets.  The level and detail of response varied with the note that the id number was always present.  The difference in data availability is noticably displayed in the two charts (horizontal bar and bubble chart).

An index.html file was provided to use as a basis for the effort to the render desired table and plots.

The homework has 2 Levels.  Level 1 is required and Level 2 is Optional.  Both Levels were completed.

### I. Level 1: User pull down menu,  Demographic Table, Horizontal Bar Chart, and Bubble Chart (Required) - completed

Javascript was used to assign an array to a pulldown menu where a user can select a specific id number.  An event listener was used to log the id number chosen and then pass the id number to a function that would build the visulations.  

The code used was a simple flow of an id number beign chosen and the number being passed to the visualization function where corresponding metadata and sample datasets where generated for creating the table and charts.

The high-level pseudocode including non-coding steps were:
 - review data to understand how it was setup
 - review the desired output visualizations
 - import dataset
 - create method to capture user selected id number
 - pass the id number to a function that will extract corresponding data and create plots using plotly

Based on how the code flow was setup, steps were added to initalize the function that created the pull down menu to select id numbers and the page was setup to render a table and plots using the data associated with id number 940 upon page initialization.  The user is able to select a different id number to present different data. 

Images of initial rendering.

<img src="/images/images1.PNG" width = "250">
<br>
<img src="/images/images2.PNG" width = "250">
<br>
<img src="/images/images3.PNG" width = "550">

### II.Level 2: A chart to visually display the belly button washing frequency (Optional) - completed

Complete Level 1 criteria.

Objective for Level 2 (bonus) was to create a visual display showing the number associated with belly button wash frequency (wfreq).  The suggested visualization was a 180 degree dial with panels representing 2 levels of washing frequency.  The proposed visualization did not provide a descrete value for washing frequency, therefore it loses its effectiveness.  The visualization was amended to a roulette style wheel with a single washing frequency per panel.  The wheel has a set pointer and the wheel is "spun" to a value matching the washing frequency with corresponding color code and hover text.

Images of initial rendering using data from id 940.

<img src="/images/images4.PNG" width = "300">
<br>

