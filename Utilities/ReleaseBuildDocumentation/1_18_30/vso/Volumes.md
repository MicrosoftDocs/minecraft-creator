<big>Version: 1.18.30.4</big>

[[_TOC_]]

# Volumes



## Volume Components

These are the various possible components for this entity

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
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

The properties of a minecraft:volume entity. All components are optional.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| format_version| | Specifies the version of the game this entity was made in. Minimum supported version is 1.17.0. Current supported version is 1.18.30. |


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


