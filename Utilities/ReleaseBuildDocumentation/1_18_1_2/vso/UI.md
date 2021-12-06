<big>Version: 1.18.1.2</big>

[[_TOC_]]

# Scripting System

The custom UI for Minecraft is based on HTML 5.
You can write JavaScript within the HTML file to listen and respond to events from the UI Engine. These events can be triggered by the UI Engine itself or you can trigger them from your scripts.
In order to use custom UI, the resource pack containing the custom UI needs to have the custom UI capabilities enabled. To do this, simply add "experimental_custom_ui" to the capabilities array in the pack's manifest. You can check the Turn-Based RPG demo for an example of how to do this.



## Engine Bindings



**on(EventIdentifier, Callback)**

This is used to get events from the UI Engine. These events can be originally sent from client scripts using `send_ui_event`, or created by the game and passed along by the UI Engine. The data sent from scripts to this function must be a string.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| Callback| The callback that will be called when the event happens |
| String| EventIdentifier| Specifies the event that function will react to |


**Example of how to listen for events from a client script:**

****
```
engine.on("exampleEventIdentifier", function (exampleData) { 
}
```



**trigger(EventIdentifier, Arguments)**

This is used to send events to the UI Engine.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| Arguments| The arguments passed to the callback |
| String| EventIdentifier| Specifies the event that function will react to |


**Example of how to send an event to the UI engine:**

****
```
engine.trigger("exampleEventIdentifier", eventDataObject);
```



## Getting The Script Engine

In order to create a link between the UI Engine and the Script Engine you need to capture the instance of the Script Engine.
The engine.on() function needs to listen for the event "facet:updated:scripting" and you need to store the return value.
You will then need to request the script engine by triggering the "facet:request" event and passing it "scripting" in a vector.
The order of the calls is important. If you trigger the request before you registered the listener you won't be able to capture the callback.

**Example of how to capture the Script Engine:**

****
```
let scriptInterface = undefined;
engine.on("facet:updated:scripting", function(interface) {
	scriptInterface = interface;
});
engine.trigger("facet:request", ["scripting"]);
```



## Script Bindings



**triggerEvent(Data)**

This triggers the minecraft:ui_event on client scripts with the provided data.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| Data| This string will be sent to "minecraft:ui_event" event in client scripts |


**Example of how to send events to a client script:**

****
```
scriptInterface.triggerEvent("SendThisDataToTheScript");
```

