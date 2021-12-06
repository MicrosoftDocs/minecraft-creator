<big>Version: 1.18.0.2</big>

[[_TOC_]]

# Volumes



## Volume Components

These are the various possible components for this entity

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | minecraft:bounds| | Component that defines a minimum and maximum block position for a bounding box and which world dimension the bounding box is in. Every volume must have a bounds component.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| dimension| | The name of the dimension the bounding box will exist in: one of 'overworld', 'nether' or 'the end'. |
| Vector [a, b, c]| max| | The maximum block position of the bounding box. |
| Vector [a, b, c]| min| | The minimum block position of the bounding box. |


 |
| | minecraft:fog| | Displays the given fog whenever a player enters the volume. Each volume can only have one fog attached.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| fog_identifier| | The identifier of a fog definition. Note that you will not receive any feedback if the definition does not exist. |
| Integer| priority| INT_MAX| The priority for this fog definition setting. Smaller numbers have higher priority. Fogs with equal priority will be combined together. |


 |
| | minecraft:on_actor_enter| | Component that defines what happens when an actor enters the volume. Can contain multiple json objects.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Array| on_enter| | Required array that contains all the triggers.<br/>

condition

Molang expression to test against the actor. The given event will be triggered if the expression evaluates to true.



event

Name of the event to run.



target

One of "self" or "other". Self means the event is attached to the volume. Other means the event is attached to the actor.

 |


 |
| | minecraft:on_actor_leave| | Component that defines what happens when an actor leaves the volume.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Array| on_leave| | Required array that contains all the triggers.<br/>

condition

Molang expression to test against the actor. The given event will be triggered if the expression evaluates to true.



event

Name of the event to run.



target

One of "self" or "other". Self means the event is attached to the volume. Other means the event is attached to the actor.

 |


 |




## Volume Definition Properties

The properties of a minecraft:volume entity. Note that every volume must have a bounds component. All other components are optional.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| format_version| | Specifies the version of the game this entity was made in. Minimum supported version is 1.17.0. Current supported version is 1.17.0. |


**Example**

**Example**
```
{
  "format_version": 1.17.0,
  "minecraft:volume": {
    "description": {
      "identifier": "your_custom_namespace:sample_volume"
    },
    "components": {
      "minecraft:bounds": {
        "min": [-50, 0, -50],
        "max": [50, 256, 50]
      },
      "minecraft:fog": {
        "fog_identifier": "minecraft:fog_savanna",
        "priority": 1
      }
    }
  }
}
```



## Volume Description Properties

The description contains a single 'identifier' string

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| identifier| | The unique identifier for this volume. It must be of the form 'namespace:name', where namespace cannot be 'minecraft'. |


