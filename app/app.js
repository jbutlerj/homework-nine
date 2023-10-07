// retrieves updateView from model
import * as MODEL from "./model.js";

// event listener - nav a click
function initListeners(){
    $("header nav a").click(function(e){
            
        // this stores the id from the anchor tag
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";

        // supplying contentID to MODEL
        MODEL.updateView(contentID);
     });
}

// calls functions on page load
$(document).ready(function () {
    initListeners();
    MODEL.updateView("homeContent"); //defaults to homeContent on page load
});