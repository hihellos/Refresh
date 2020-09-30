//button that returns user to home screen

//dashboard

//long horizontal graph displaying change over time

//square at top for score

//squares along bottom with whatever stats we can pull from data

import React from 'react';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
import {Row} from '../components/Grid';
import { Card, Button, CardTitle} from "reactstrap";
import "./Home.css";
import Wrapper from "../components/Wrapper";

function Value(props) {

    const handleLogOutRequest = (e) => {
        console.log("User trying to log out");
        API.outUser()
          .then((res) => {
            console.log(props);
            console.log(res);
            if (res.status === 200) {
              props.history.push("/");
            }
            console.log(`Status:${res.status} Successfully Logged Out`);
          })
          .catch((err) => console.log(err));
      };

    return(
        <>
        <Navbar logout={() => handleLogOutRequest()} />
        </>
    ); 
}

export default Value;

{/* <div id="zillow-large-search-box-widget-container" style="width:432px;overflow:hidden;background-color:#e7f1fd;color:#555; font: normal normal normal 13px verdana,arial,sans-serif;line-height:13px;margin:0 auto;padding:0;text-align:center;border:1px solid #adcfff;letter-spacing:0;text-transform:none;"><h2 style="color:#d61;text-align:left;font-size:20px;line-height:20px;font-weight:normal;float:left;width:200px;margin-left:10px;margin-top:5px;letter-spacing:0;text-transform:none;">Find Homes</h2><div style="float:right;"><a href="https://www.zillow.com/" target="_blank" rel="nofollow"><img alt="Zillow Real Estate Information" style="border:0;" src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=%2Fstatic%2Fimages%2Fpowered-by-zillow.gif"></img></a></div><iframe scrolling="no" src="https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=Jersey+City+NJ&shvi=yes" width="430" frameborder="0" height="400"></iframe><table id="zillow-tnc-widget-footer-links" width="100%" style="font: normal normal normal 10px verdana,arial,sans-serif;text-align:left;line-height:12px;margin:10px 5px;padding:0;border-spacing:0;border-collapse:collapse;"><tbody style="margin:0;padding:0;"><tr style="margin:0;padding:0;"><td style="font-weight:bold;font-size:10px;color:#555;text-align:left;margin:0;padding:0;">QUICK LINKS:</td></tr><tr style="margin:0;padding:0;"><td style="margin:0;padding:0;"><span id="widgetFooterLink" class="regionBasedLink"><a href="https://www.zillow.com/jersey-city-nj/" target="_blank" rel="nofollow" style="color:#36b;font-family:verdana,arial,sans-serif;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;"><span class="region">Jersey City</span> Real Estate Listing</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow" style="color:#36b;font-family:verdana,arial,sans-serif;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Mortgage Rates</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/refinance/" target="_blank" rel="nofollow" style="color:#36b;font-family:verdana,arial,sans-serif;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Refinancing</a></span></td></tr><tr style="margin:0;padding:0;"><td style="margin:0;padding:0;"><span id="widgetFooterLink" class="regionBasedLink"><a href="https://www.zillow.com/jersey-city-nj/foreclosures/" target="_blank" rel="nofollow" style="color:#36b;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;"><span class="region">Jersey City</span> Foreclosures</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-calculator/" target="_blank" rel="nofollow" style="color:#36b;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Mortgage Calculators</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow" style="color:#36b;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Purchase Loans</a></span></td></tr></tbody></table></div> */}