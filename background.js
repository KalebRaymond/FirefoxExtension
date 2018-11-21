/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

/*
Called when the item has been removed.
We'll just log success here.
*/
function onRemoved() {
  console.log("Item removed successfully");
}

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
  console.log(`Error: ${error}`);
}

const germanWord = info => {
	let selectedText = info.selectionText.trim();
	console.log(selectedText);
	
	browser.notifications.create({
		"type": "basic",
		"title": `${selectedText}`,
		"message": `Total Characters: ${selectedText.length}`
	});
}
	
	
/*
Create all the context menu items.
*/
browser.menus.create({
  id: "translate-selection",
  title: browser.i18n.getMessage("menuItemSelectionTranslator"),
  contexts: ["all"],
  //command: "_execute_browser_action"
}, onCreated);

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.menus.onClicked.addListener(germanWord);