import React from 'react';

function Zillow() {

let city = $("#region-select-location")
 
return (
<iframe
scrolling="no"
src = {`https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=${Jersey+City+NJ}&shvi=yes`}
width="430"
frameborder="0"
height="400"
></iframe>
)
} 

export default Zillow;