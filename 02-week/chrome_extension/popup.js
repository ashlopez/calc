/* 
 * WDI - Chrome Extension Playground!
 */


// CHALLENGE #5/6/7 - Add appropriate click handlers, based on
//    the data-feature value of the button.
var clickHandler = 
{
  "load-site": function loadSite() {
      // CHALLENGE #2 - Using chrome.tabs.update,
      //    load your favorite site into the active tab!

      // Load a website into the active tab
      console.log('Load Site button clicked!');
    },

  "highlight-p-tags": function highlightParagraphs() {
      // "CHALLENGE #4 - Using chrome.tabs.executeScript,  \
      //     inject JS which gets all <p> tags by tag name \
      //     then sets each background color to 'yellow'.  \
      // NOTE:  To inject multiple lines of code, add      \
      //        a backslash to the end of the line, as     \
      //        shown here."

      // Highlight all paragraphs (<p> tags)
      console.log('Highlight <p> Tags button clicked!');
    }
}


// Changes the background color of the active tab
function updateColor() 
{
  // Get the color name from the HTML 'data-color' attribute
  //   + 'this' refers to the element that was clicked
  //   + 'this.dataset[XXX]' retrieves the value (i.e. color name)
  //        of the 'data-XXX' attribute
  var elementColor = this.dataset["color"];

  // Inject JS in the currently active tab (indicated by the null first parameter)
  // NOTE: Extend strings over multiple lines by placing \ at the end of each line
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor= '" + elementColor + "'"});

  // Closes the extension's popup window
  window.close();
}


// Gets the ID of the active tab.
// + Do not modify this function for any of the challenges
// + See an example of using this function at the end of startup()
// + The active tab's ID is passed as the parameter to the callback function
function getActiveTabId(callbackFunction)
{
  // Get the active tab ID of the current window
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    
    // If there is an active tab ...
    if (tabs.length > 0) {
      var activeTabId = tabs[0].id;
      
      // Pass the active ID to the passed-in callback function
      callbackFunction(activeTabId);
    }

  });
}

// Initializes the extension -- assumes DOM is loaded
function startup()
{
  // Add an click handler to every li in #color-list
  var liList = document.querySelectorAll('#color-list li');

  // For each list item, add the same click handler
  for (var i = 0; i < liList.length; i++) {
    liList[i].addEventListener('click', updateColor);
  }


  // Add click handler for the first button.
  // Gets the function name from the HTML 'data-feature=XXX' attribute
  //   + clickHandler[XXX] refers to the click handler function,
  //       as defined at the top of this file
  var btn = document.querySelector('#more-features button[data-feature="load-site"]');
  var featureType = btn.dataset["feature"];
  btn.addEventListener('click', clickHandler[featureType]);


  // CHALLENGE #3 - Generalize the click handlers for the 
  //   second set of buttons.
  //   + Use the #color-list code as a reference for how
  //       to loop through the feature buttons
  //   + Use the above button's onclick code as an example of
  //       how to reference the appropriate click handler





  // Display the active tab ID to the console
  //   This is an example of using the getActiveTabId function
  getActiveTabId(function logID(tabId) { 
    console.log("The active tab ID is " + tabId); 
  });
}


// Once the DOM is loaded, call startup()
document.addEventListener('DOMContentLoaded', function() {
  startup();
});

