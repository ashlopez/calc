WDI Chrome Extension Playground!
======

## Overview

Chrome extensions are a combination of HTML, CSS, and JavaScript.

In this folder is a modified sample extension taken from the [official samples](https://developer.chrome.com/extensions/samples).

Each extension has a file, **manifest.json**, which specifies the extension's name, description, associated files, and permissions required. This file is written in JSON, a structured data format that uses the same syntax as a JavaScript object.


## Goals

- Understand how a Chrome extension works.

- Understand how JavaScript can be injected into a website to affect its DOM.

- Use JavaScript events to add functionality to a Chrome extension.

- Read and apply the chrome.tabs JavaScript API documentation.


## Challenges

Using the [*chrome.tabs* documentation](https://developer.chrome.com/extensions/tabs), complete the following challenges.

The HTML and JS source code is annotated to show you where to insert code for each challenge.


**1. Add new color options!**

- *Hint:* You will only need to update the HTML/CSS. Make sure you understand why writing additional JavaScript is not needed to add a new color.

**2. Make the "Good Morning, GA!" button load the quiz app in the active tab.**

- *Hint:* Add a single line of code to the loadSite() function. Use chrome.tabs.update, with the 'url' parameter.

**3. Generalize the click handlers for the feature buttons.**

- *Hint:* Use the #color-list code as a reference to loop through the feature buttons. Use the provided first button's onclick code as a model to call the appropriate click handler for each button.

**4. Add a highlight button that highlights the text in all paragraph tags.**

- *Hint:* Use chrome.tabs.executeScript, with the 'code' parameter -- see the updateColor function for an example. In the script, select all p tags by using document.getElementsByTagName. Then, for each tag, change its backgroundColor style in a for loop. NOTE: To inject multiple lines of code, add a backslash at the end of each line.

**5. Write a click handler that removes all of the images from the page.**

- *Hint:* Add the appropriate handler function to clickHandler, based on the HTML code for the button. The handler is similar to #4, but instead of modifying the backgroundColor, change the src property to ''.

**6. Add a button that moves the active tab to the end of the tab list.**

- *Hint:* Add a button to the list of buttons, then add the appropriate handler function to clickHandler. You will need to call the getActiveTabId function -- understand how the getActiveTabId call at the end of startup() works. Then, inside the click handler, use this sample call along with chrome.tabs.move to move the current tab ID to the end of the tab list.

**7. Add a button which closes all open tabs EXCEPT for the current active tab.**

- *Hint:* Add a button to the list of buttons, then add the appropriate handler function to clickHandler. Use chrome.tabs.query to get a list of non-active tabs. Loop through the list and call chrome.tabs.remove on each tab. To view an example of using chrome.tabs.query, understand how the getActiveTabId function works.
