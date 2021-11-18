<big>Version: 1.17.40.6</big>

[[_TOC_]]

# Script API Objects

Here you can find the definition of some objects returned by the script API.




## Entity JS API Object

| Type| Name| Entity JS API Object| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| __identifier__| | READ ONLY. This is the identifier for the object in the format namespace:name. For example, if the type is entity and the object is representing a vanilla cow, the identifier would be minecraft:cow |
| String| __type__| | READ ONLY. This defines the type of object. Can be: "entity" or "item_entity". |
| Positive Integer| id| | READ ONLY. This is the unique identifier of the entity. |




## Level JS API Object

| Type| Name| Level JS API Object| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| __type__| | READ ONLY. This defines the type of object. Will be: "level". |
| Positive Integer| level_id| | READ ONLY. This is the unique identifier of the level. |




## Component JS API Object

| Type| Name| Component JS API Object| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| __type__| | READ ONLY. This defines the type of object. Will be: "component". |
| JavaScript Object| data| | This is the content of the component. |




## Query JS API Object

| Type| Name| Query JS API Object| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| __type__| | READ ONLY. This defines the type of object. Will be: "query". |
| Positive Integer| query_id| | READ ONLY. This is the unique identifier of the query. |




## ItemStack JS API Object

| Type| Name| ItemStack JS API Object| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| __identifier__| | READ ONLY. This is the identifier for the object in the format namespace:name. For example, if the type is entity and the object is representing a vanilla cow, the identifier would be minecraft:cow |
| String| __type__| | READ ONLY. This defines the type of object. Will be: "item_stack". |
| String| count| | READ ONLY. This is the number of items in the stack. |
| String| item| | READ ONLY. This is the identifier of the item. |




## Block JS API Object

| Type| Name| Block JS API Object| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| __identifier__| | READ ONLY. This is the identifier for the object in the format namespace:name. For example, if the type is block and the object is representing a block of bedrock, the identifier would be minecraft:bedrock |
| String| __type__| | READ ONLY. This defines the type of object. Will be: "block". |
| JavaScript Object| block_position| | READ ONLY. This is the position of the block and it functions as part of its unique identifier.<br/>

Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Integer| x| The x position |
| Integer| y| The y position |
| Integer| z| The z position |


 |
| JavaScript Object| ticking_area| | READ ONLY. This is the ticking area object that was used to get this block. |




## Ticking Area JS API Object



## Entity Ticking Area JS API Object

| Type| Name| Entity Ticking Area JS API Object| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| __type__| | READ ONLY. This defines the type of object. Will be: "entity_ticking_area". |
| Positive Integer| entity_ticking_area_id| | READ ONLY. This is the unique identifier of the ticking area. |




## Level Ticking Area JS API Object

| Type| Name| Level Ticking Area JS API Object| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| __type__| | READ ONLY. This defines the type of object. Will be: "level_ticking_area". |
| String| level_ticking_area_id| | READ ONLY. This is the unique identifier of the ticking area. |




# Script Bindings

Bindings are the capabilities of the Minecraft Script Engine to change or modify things in the game.



## Logging Bindings



**log(Message)**

The log function is accessed through the server or client objects and allows for logging a message to the ContentLog file. On Windows 10 devices it is located at ' %APPDATA%\..\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs '



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| Message| The message that you want to send to the log file |


**Code Example:**

**Log**
```
system.exampleFunction = function() {
	client.log("example log message") 
}; 
```



## Entity Bindings



**createEntity()**

NOTE: Entities are created first on the server, with the client notified of new entities afterwards. Be aware that if you send the result object to the client right away, the created entity might not exist on the client yet.



Return Value

| Type| Value |
|:-----------:|:-----------:|
| Entity JS API Object| An object representing the newly created entity |




**createEntity(Type, TemplateIdentifier)**

NOTE: Entities are created first on the server, with the client notified of new entities afterwards. Be aware that if you send the result object to the client right away, the created entity might not exist on the client yet.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| TemplateIdentifier| This can be any of the entity identifiers from the applied Behavior Packs. For example specifying minecraft:cow here will make the provided entity a cow as defined in JSON |
| String| Type| Specifies the type of the entity that is being created by the template. Valid inputs are `entity` and `item_entity` |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Entity JS API Object| An object representing the newly created entity |




**destroyEntity(EntityObject)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| EntityObject| The object that was retrieved from a call to createEntity() or retrieved from an entity event |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Boolean| The entity was successfully destroyed |




**isValidEntity(EntityObject)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| EntityObject| The object that was retrieved from a call to createEntity() or retrieved from an entity event |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Boolean| The entity is in the Script Engine's database of entities |




## Component Bindings



**registerComponent(ComponentIdentifier, ComponentData)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| ComponentData| A JavaScript Object that defines the name of the fields and the data each field holds inside the component. |
| String| ComponentIdentifier| The identifier of the custom component. It is required to use a namespace so you can uniquely refer to it later without overlapping a name with a built-in component: for example 'myPack:myCustomComponent' |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Boolean| The component was successfully registered |


**Code Example:**

**Registering a custom component**
```
const mySystem = server.registerSystem(0, 0);

mySystem.initialize = function() {
	this.registerComponent("myPack:myCustomComponent", { myString: "string", myNumber: 0, myBool: true, myArray: [1, 2, 3] });
};
```



**createComponent(EntityObject, ComponentIdentifier)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| ComponentIdentifier| The identifier of the component to add to the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent() |
| Entity JS API Object| EntityObject| The EntityObject that was retrieved from a call to createEntity() or retrieved from an event |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Component JS API Object| An object with the following fields, and additionally, all the fields as defined in the component |


**Code Example:**

**Creating a custom component**
```
let globals = {
	ready: false
};

const mySystem = server.registerSystem(0, 0);

mySystem.initialize = function() {
	this.registerComponent("myPack:myCustomComponent", { myString: "string", myNumber: 0, myBool: true, myArray: [1, 2, 3] });
}

mySystem.update = function() {
	if(globals.ready == false) {
		globals.ready = true;
		let myEntity = this.createEntity();
		if(myEntity != null) {
			let myComponent = this.createComponent(myEntity, "myPack:myCustomComponent");
		}
	}
};
```



**hasComponent(EntityObject, ComponentIdentifier)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| ComponentIdentifier| The identifier of the component to check on the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent() |
| Entity JS API Object| EntityObject| The EntityObject that was retrieved from a call to createEntity() or retrieved from an event |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Boolean| The EntityObject has the component |


**Code Example:**

**Check whether an entity has specified component**
```
let globals = {
	ready: false
};

const mySystem = server.registerSystem(0, 0);

mySystem.update = function() {
	if(globals.ready == false) {
		globals.ready = true;
		let entity = this.createEntity("entity", "minecraft:pig");
		if(this.hasComponent(entity, "minecraft:nameable")) {
			// Do some work
		}
	}
};
```



**getComponent(EntityObject, ComponentIdentifier)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| ComponentIdentifier| The identifier of the component to retrieve from the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent() |
| Entity JS API Object| EntityObject| The EntityObject that was retrieved from a call to createEntity() or retrieved from an event |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Component JS API Object| An object with the following fields, and additionally, all the fields as defined in the component<br/>

Component JS API Object

| Type| Name| Component JS API Object| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| __type__| | READ ONLY. This defines the type of object. Will be: "component". |
| JavaScript Object| data| | This is the content of the component. |


 |


**Code Example:**

**Get a specified component from an entity**
```
let globals = {
	ready: false
};

const mySystem = server.registerSystem(0, 0);

mySystem.update = function() {
	if(globals.ready == false) {
		globals.ready = true;
		let entity = this.createEntity("entity", "minecraft:pig");
		let positionComponent = this.getComponent(entity, "minecraft:position");
		if (positionComponent != null) {
			positionComponent.data.x = 0;
			positionComponent.data.y = 0;
			positionComponent.data.z = 0;
		}
	}
};
```



**applyComponentChanges(EntityObject, ComponentObject)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Component JS API Object| ComponentObject| The component object retrieved from the entity that was returned by either createComponent() or getComponent() |
| Entity JS API Object| EntityObject| The entity object that we are applying the component changes to |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Boolean| The component was successfully updated |


**Code Example:**

**Apply updates to an entity's component**
```
let globals = {
	pig: null
};

const mySystem = server.registerSystem(0, 0);

mySystem.update = function() {
	if(globals.pig == null) {
		globals.pig = this.createEntity("entity", "minecraft:pig");
	}
	else {
		let positionComponent = this.getComponent(globals.pig, "minecraft:position");
		positionComponent.data.y += 0.1;
		this.applyComponentChanges(globals.pig, positionComponent);
	}
};
```



**destroyComponent(EntityObject, ComponentIdentifier)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| ComponentIdentifier| The identifier of the component to remove from the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent() |
| Entity JS API Object| EntityObject| The EntityObject that was retrieved from a call to createEntity() or retrieved from an event |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Boolean| The component was successfully removed from the entity |


**Code Example:**

**Destroy an entity's component**
```
let globals = {
	myEntity: null
};

const mySystem = server.registerSystem(0, 0);

mySystem.initialize = function() {
	this.registerComponent("myPack:myCustomComponent", { myString: "string", myNumber: 0, myBool: true, myArray: [1, 2, 3] });
};

mySystem.update = function() {
	if(globals.myEntity == null) {
		globals.myEntity = this.createEntity();
	}
	else {
		if(this.hasComponent(globals.myEntity, "myPack:myCustomComponent")) {
			this.destroyComponent(globals.myEntity, "myPack:myCustomComponent");
		}
		else {
			this.createComponent(globals.myEntity, "myPack:myCustomComponent");
		}
	}
};
```



## Event Bindings

These are the bindings used to handle events. For a list of events you can react to or trigger, check the Events section of this document.



**registerEventData(EventIdentifier, EventData)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| EventData| The JavaScript object with the correct fields and default values for the event |
| String| EventIdentifier| This is the identifier of the custom event we are registering. The namespace is required and can't be set to minecraft. |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Boolean| Successfully registered the event data |




**createEventData(EventIdentifier)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| EventIdentifier| This is the identifier of the custom event we are registering. The namespace is required and can't be set to minecraft. |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| JavaScript Object| The object containing the event data |




**listenForEvent(EventIdentifier, CallbackObject)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| CallbackObject| The JavaScript object that will get called whenever the event is broadcast |
| String| EventIdentifier| This is the identifier of the event to which we want to react. Can be the identifier of a built-in event or a custom one from script |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Boolean| Successfully registered to listen for the event |


**Code Example:**

**Register a callback for a specified event**
```
const mySystem = client.registerSystem(0, 0);

mySystem.initialize = function() {
	this.listenForEvent("minecraft:client_entered_world", (eventData) => this.onClientEnteredWorld(eventData));
};

mySystem.onClientEnteredWorld = function(eventData) {
	let messageData = this.createEventData("minecraft:display_chat_event");
	messageData.data.message = "Player has entered the world";
	this.broadcastEvent("minecraft:display_chat_event", messageData);
};
```



**broadcastEvent(EventIdentifier, EventData)**



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| EventData| The data for the event. You can create a new JavaScript Object with the parameters you want to pass in to the listener and the engine will take care of delivering the data to them |
| String| EventIdentifier| This is the identifier of the event we want to react to. Can be the identifier of a built-in event or a custom one from script |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Boolean| Successfully broadcasted the event |


**Code Example:**

**Broadcasting an event**
```
const mySystem = client.registerSystem(0, 0);

mySystem.initialize = function() {
	let eventData = this.createEventData("minecraft:display_chat_event");
	eventData.data.message = "Hello, World!";
	this.broadcastEvent("minecraft:display_chat_event", eventData);
};

```



## Entity Queries

Entity Queries are a way for you to filter for entities based on their components. Once you have registered a query, you can request all the entities that are captured by it. Entity Queries will only ever return entities that are currently active in the level. If your query extends into chunks that are not currently loaded, entities there will not be included in the query.




**registerQuery()**

Allows you to register a query. A query will contain all entities that meet the filter requirement.
No filters are added by default when you register a query so it will capture all entities.



Return Value

| Type| Value |
|:-----------:|:-----------:|
| Query JS API Object| An object containing the ID of the query |


**Code Example:**

**Query Registration**
```
const mySystem = server.registerSystem(0, 0);

mySystem.initialize = function() {
	let myQuery = this.registerQuery();
};
```



**registerQuery(Component, ComponentField1, ComponentField2, ComponentField3)**

Allows you to register a query that will only show entities that have the given component and define which fields of that component will be used as a filter when getting the entities from the query. You can either provide just the component identifier, or the component identifier and the name of 3 properties on that component to be tested (If you do specify property names, you must specify 3).



Parameters

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| Component| | This is the identifier of the component that will be used to filter entities when |
| String| ComponentField1| "x"| This is the name of the first field of the component that we want to filter entities by. By default this is set to x. |
| String| ComponentField2| "y"| This is the name of the second field of the component that we want to filter entities by. By default this is set to y. |
| String| ComponentField3| "z"| This is the name of the third field of the component that we want to filter entities by. By default this is set to z. |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Query JS API Object| An object containing the ID of the query |


**Code Example:**

**Query Registration**
```
const mySystem = server.registerSystem(0, 0);

mySystem.initialize = function() {
	let spatialQuery = this.registerQuery("minecraft:position", "x", "y", "z");
};
```



**addFilterToQuery(Query, ComponentIdentifier)**

Allows you to add filters to your query. The query will only contain entities that have all the components specified.
By default no filters are added. This will allow queries to capture all entities.


**<big>Parameters</big>**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| ComponentIdentifier| This is the identifier of the component that will be added to the filter list. Only entities that have that component will be listed in the query |
| Query JS API Object| Query| The object containing the ID of the query that you want to apply the filter to |


**Code Example:**

**Adding a filter to a query**
```
let globals = {
	simpleQuery: null
};
const mySystem = server.registerSystem(0, 0);

mySystem.initialize = function() {
	globals.simpleQuery = this.registerQuery();
};

mySystem.update = function() {
	globals.simpleQuery = this.registerQuery();
	this.addFilterToQuery(globals.simpleQuery, "minecraft:explode");	let explodingEntities = this.getEntitiesFromQuery(globals.simpleQuery);
	for(var entity in explodingEntities) {
		server.log(JSON.stringify(entity));
	}
};
```



**getEntitiesFromQuery(Query)**

Allows you to fetch the entities captured by a query.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Query JS API Object| Query| This is the query you registered earlier using registerQuery() |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Array| An array of EntityObjects representing the entities found within the query |


**Code Example:**

**Get a list of entities from a query**
```
const mySystem = server.registerSystem(0, 0);

mySystem.update = function() {
	let simpleQuery = this.registerQuery();
	let allEntities = this.getEntitiesFromQuery(simpleQuery);
	for(var entity in allEntities) {
		server.log(JSON.stringify(entity));
	}
};
```



**getEntitiesFromQuery(Query, ComponentField1_Min, ComponentField2_Min, ComponentField3_Min, ComponentField1_Max, ComponentField2_Max, ComponentField3_Max)**

Allows you to fetch the entities captured by a query that was created with a component filter built-in. The only entities that will be returned are those entities that have the component that was defined when the query was registered and that have a value in the three fields on that component that were defined in the query within the values specified in the call to getEntitiesFromQuery.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Decimal| ComponentField1_Max| The maximum value that the first component field needs to be on an entity for that entity to be included in the query |
| Decimal| ComponentField1_Min| The minimum value that the first component field needs to be on an entity for that entity to be included in the query |
| Decimal| ComponentField2_Max| The maximum value that the second component field needs to be on an entity for that entity to be included in the query |
| Decimal| ComponentField2_Min| The minimum value that the second component field needs to be on an entity for that entity to be included in the query |
| Decimal| ComponentField3_Max| The maximum value that the third component field needs to be on an entity for that entity to be included in the query |
| Decimal| ComponentField3_Min| The minimum value that the third component field needs to be on an entity for that entity to be included in the query |
| Query JS API Object| Query| This is the query you created earlier using registerQuery(...) |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Array| An array of EntityObjects representing the entities found within the query |


**Code Example:**

**Get a list of entities from a query**
```
let globals = {
	spatialQuery: null
};

const mySystem = server.registerSystem(0, 0);

mySystem.initialize = function() {
	globals.spatialQuery = this.registerQuery("minecraft:position", "x", "y", "z");
};

mySystem.update = function() {
	let closeEntities = this.getEntitiesFromQuery(globals.spatialQuery, 0, 10, 0, 5, 0, 10);
	for(var entity in closeEntities) {
		server.log(JSON.stringify(entity));
	}
};
```



## Block Bindings

These functions define how you interact with blocks.



**getBlock(Ticking Area, x, y, z)**

Allows you to get a block from the world when provided an x, y, and z position. The block must be within a ticking area.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Ticking Area JS API Object| Ticking Area| The ticking area the block is in |
| Integer| x| The x position of the block you want |
| Integer| y| The y position of the block you want |
| Integer| z| The z position of the block you want |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| | object |
| | null |




**getBlock(Ticking Area, PositionObject)**

Allows you to get a block from the world when provided a JavaScript object containing a position. The block must be within a ticking area.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| PositionObject| A JavaScript object with the x, y, and z position of the block you want<br/>

Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Integer| x| The x position |
| Integer| y| The y position |
| Integer| z| The z position |


 |
| Ticking Area JS API Object| Ticking Area| The ticking area the block is in |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Block JS API Object| An object containing the block |




**getBlocks(Ticking Area, x min, y min, z min, x max, y max, z max)**

Allows you to get an array of blocks from the world when provided a minimum and maximum x, y, and z position. The blocks must be within a ticking area. This call can be slow if given a lot of blocks, and should be used infrequently.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Ticking Area JS API Object| Ticking Area| The ticking area the blocks are in |
| Integer| x max| The maximum x position of the blocks you want |
| Integer| x min| The minimum x position of the blocks you want |
| Integer| y max| The maximum y position of the blocks you want |
| Integer| y min| The minimum y position of the blocks you want |
| Integer| z max| The maximum z position of the blocks you want |
| Integer| z min| The minimum z position of the blocks you want |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| | array |
| | null |




**getBlocks(Ticking Area, Minimum PositionObject, Maximum PositionObject)**

Allows you to get an array of blocks from the world when provided a minimum and maximum position. The blocks must be within a ticking area. This call can be slow if given a lot of blocks, and should be used infrequently.



Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| Maximum PositionObject| A JavaScript object with the maximum x, y, and z position of the blocks you want<br/>

Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Integer| x| The x position |
| Integer| y| The y position |
| Integer| z| The z position |


 |
| JavaScript Object| Minimum PositionObject| A JavaScript object with the minimum x, y, and z position of the blocks you want<br/>

Parameters

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Integer| x| The x position |
| Integer| y| The y position |
| Integer| z| The z position |


 |
| Ticking Area JS API Object| Ticking Area| The ticking area the blocks are in |




Return Value

| Type| Value |
|:-----------:|:-----------:|
| Array| A 3D array of block objects. Indexs are the blocks positions relative to the min position given |
| | null |




## Slash Commands



**executeCommand(Command, Callback)**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JSON Object| Callback| The JavaScript object that will be called after the command executes |
| String| Command| The slash command to run |


**Example**

****
```
system.executeCommand("/fill ~ ~ ~ ~100 ~5 ~50 stone", (commandResultData) => this.commandCallback(commandResultData));

system.commandCallback = function (commandResultData) {
	let eventData = this.createEventData("minecraft:display_chat_event");
	if (eventData) {
		eventData.data.message = message;
		this.broadcastEvent("minecraft:display_chat_event", "Callback called! Command: " + commandResultData.command + " Data: " + JSON.stringify(commandResultData.data, null, "    ") );
	}
};

```



# Script Components

This is the documentation for the attributes, properties, and components available from the Minecraft Script Engine.
There are two kinds of components: server components and client components. We will go into a bit more detail on what they are in their respective sections below.
Components can be added, retrieved, updated, and removed from entities. They do not exist on their own. Currently only user-defined components can be added and removed from entities. A component must be in an entity in order to retrieve or update it.
Check the Script Engine Bindings section to see how to add, remove, retrieve, and update components. This section deals with the specific API of each component.



## Level Components



**minecraft:ticking_areas**



**minecraft:weather**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Boolean| do_weather_cycle| This is the world option that determines if the vanilla weather cycle will be used |
| Decimal| lightning_level| A value between 0 and 1 that determines how much lightning and thunder there is |
| Integer| lightning_time| How long, in ticks, it will lightning and thunder for |
| Decimal| rain_level| A value between 0 and 1 that determains how heavy the rainfall is |
| Integer| rain_time| How long, in ticks, it will rain for |




## Server Components

As much as possible, the API of each component matches its JSON counterpart (with some differences noted).




**minecraft:armor_container**

****
```
// This example will check the players helmet armor slot for a specific item after the player attacks an entity.
system.listenForEvent("minecraft:player_attacked_entity", function(eventData) {
    // Get the players armor container
    let playerArmor = system.getComponent(eventData.data.player, "minecraft:armor_container");
    // Get the players helmet
    let playerHelmet = playerArmor.data[0];
    // Destroy the attacked entity if the player has a gold helmet equipped
    if (playerHelmet.item == "minecraft:golden_helmet") {
        system.destroyEntity(eventData.data.attacked_entity);
    }
});
```



**minecraft:attack**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Range [a, b]| damage| | Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| range_max| 0.0| The maximum amount of damage the entity will deal |
| Decimal| range_min| 0.0| The minimum amount of damage the entity will deal |


 |




**minecraft:container**

****
```
// This example will check if a block has a container.
let block; // check getBlock API on how to access a block
let has_container = system.hasComponent(block, "minecraft:container");
if (has_container === true) {
	let container = system.getComponent(block, "minecraft:container");
	// you can now use the container to read items.

```



**minecraft:collision_box**

Sets the width and height of the Entity's collision box.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| height| 1.0| Height of the collision box in blocks. A negative value will be assumed to be 0. |
| Decimal| width| 1.0| Width and Depth of the collision box in blocks. A negative value will be assumed to be 0. |




**minecraft:damage_sensor**

Defines what events to call when this entity is damaged by specific entities or items.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| triggers| | List of triggers with the events to call when taking specific kinds of damage.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| cause| none| Type of damage that triggers the events. |
| Decimal| damage_modifier| 0.0| A modifier that adds to/removes from the base damage from the damage cause. It does not reduce damage to less than 0. |
| Decimal| damage_multiplier| 1.0| A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1. |
| Boolean| deals_damage| true| If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage. |
| JSON Object| on_damage| | Specifies filters for entity definitions and events. |
| String| on_damage_sound_event| | Defines what sound to play, if any, when the on_damage filters are met. |


 |


****
```
// This example will cause an entity (in this case, a creeper) to start exploding when the player attacks it.
// Note: the entity must have the damage_sensor component and the associated events defined in their JSON description.
this.listenForEvent("minecraft:player_attacked_entity", function(eventData) {
	let damageSensorComponent = serverSystem.getComponent(eventData.attacked_entity, "minecraft:damage_sensor");
	damageSensorComponent.data[0].on_damage = { event:"minecraft:start_exploding", filters:[{test:"has_component", operator:"==", value:"minecraft:breathable"}] };
	serverSystem.applyComponentChanges(eventData.attacked_entity, damageSensorComponent);
});
```



**minecraft:equipment**

Sets the Equipment table to use for this Entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| slot_drop_chance| | A list of slots with the chance to drop an equipped item from that slot. |
| String| table| | The file path to the equipment table, relative to the behavior pack's root. |




**minecraft:equippable**

Defines an entity's behavior for having items equipped to it.



slots

List of slots and the item that can be equipped.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| accepted_items| | The list of items that can go in this slot. |
| String| interact_text| | Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls. |
| String| item| | Identifier of the item that can be equipped for this slot. |
| String| on_equip| | Event to trigger when this entity is equipped with this item. |
| String| on_unequip| | Event to trigger when this item is removed from this entity. |
| Integer| slot| 0| The slot number of this slot. |




**minecraft:explode**

Defines how the entity explodes.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| breaks_blocks| true| If true, the explosion will destroy blocks in the explosion radius. |
| Boolean| causes_fire| false| If true, blocks in the explosion radius will be set on fire. |
| Boolean| destroy_affected_by_griefing| false| If true, whether the explosion breaks blocks is affected by the mob griefing game rule. |
| Boolean| fire_affected_by_griefing| false| If true, whether the explosion causes fire is affected by the mob griefing game rule. |
| Range [a, b]| fuse_length| [0.0, 0.0]| The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate. |
| Boolean| fuse_lit| false| If true, the fuse is already lit when this component is added to the entity. |
| Decimal| max_resistance| 3.40282e+38| A blocks explosion resistance will be capped at this value when an explosion occurs. |
| Decimal| power| 3| The radius of the explosion in blocks and the amount of damage the explosion deals. |




**minecraft:hand_container**

****
```
// This example will check the players offhand slot for a specific item after the player attacks an entity.
system.listenForEvent("minecraft:player_attacked_entity", function(eventData) {
    // Get the players hand container
    let handContainer = system.getComponent(eventData.data.player, "minecraft:hand_container");
    // Get the players offhand item
    let offhandItem = handContainer.data[1];
    // Destroy the attacked entity if the player has a totem in their offhand
    if (offhandItem.item == "minecraft:totem") {
        system.destroyEntity(eventData.data.attacked_entity);
    }
});
```



**minecraft:healable**

Defines the interactions with this entity for healing it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | The filter group that defines the conditions for using this item to heal the entity. |
| Boolean| force_use| false| Determines if item can be used regardless of entity being at full health. |
| Array| items| | The array of items that can be used to heal this entity.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| heal_amount| 1| The amount of health this entity gains when fed this item. |
| String| item| | Item identifier that can be used to heal this entity. |


 |




**minecraft:health**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| max| 10| The maximum health the entity can heal |
| Integer| value| 1| Current health of the entity |




**minecraft:hotbar_container**

****
```
// This example will check the players first hotbar item slot for a specific item after the player attacks an entity.
system.listenForEvent("minecraft:player_attacked_entity", function(eventData) {
    // Get the players hotbar
    let playerHotbar = system.getComponent(eventData.data.player, "minecraft:hotbar_container");
    // Get the item at the first slot in the hotbar
    let firstHotbarSlot = playerHotbar.data[0];
    // Destroy the attacked entity if the player has an apple in their first hotbar slot
    if (firstHotbarSlot.item == "minecraft:apple") {
        system.destroyEntity(eventData.data.attacked_entity);
    }
});
```



**minecraft:interact**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| add_items| | Loot table with items to add to the player's inventory upon successful interaction<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| table| | File path, relative to the behavior pack's path, to the loot table file |


 |
| Decimal| cooldown| 0.0| Time in seconds before this entity can be interacted with again |
| Integer| hurt_item| 0| The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability |
| String| interact_text| | Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls |
| String| on_interact| | An event identifier to fire when the interaction occurs |
| JSON Object| particle_on_start| | Particle effect that will be triggered at the start of the interaction<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| particle_offset_towards_interactor| false| Whether or not the particle will appear closer to who performed the interaction |
| String| particle_type| | The type of particle that will be spawned |
| Decimal| particle_y_offset| 0.0| Will offset the particle this amount in the y direction |


 |
| Array| play_sounds| | An array of sound identifiers to play when the interaction occurs |
| Array| spawn_entities| | An array of entity identifiers to spawn when the interaction occurs |
| JSON Object| spawn_items| | Loot table with items to drop on the ground upon successful interaction<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| table| | File path, relative to the behavior pack's path, to the loot table file |


 |
| Boolean| swing| false| If true, the player will do the 'swing' animation when interacting with this entity |
| String| transform_to_item| | The item used will transform to this item upon successful interaction. Format: itemName:auxValue |
| Boolean| use_item| false| If true, the interaction will use an item |




**minecraft:inventory**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| additional_slots_per_strength| 0| Number of slots that this entity can gain per extra strength |
| Boolean| can_be_siphoned_from| false| If true, the contents of this inventory can be removed by a hopper |
| String| container_type| none| Type of container this entity has. Can be horse, minecart_chest, minecart_hopper, inventory, container or hopper |
| Integer| inventory_size| 5| Number of slots the container has |
| Boolean| private| false| If true, only the entity can access the inventory |
| Boolean| restrict_to_owner| false| If true, the entity's inventory can only be accessed by its owner or itself |




**minecraft:inventory_container**

****
```
// This example will check the players third inventory item slot for a specific item after the player attacks an entity.
system.listenForEvent("minecraft:player_attacked_entity", function(eventData) {
    // Get the players inventory
    let playerInventory = system.getComponent(eventData.data.player, "minecraft:inventory_container");
    // Get the item at the third slot in the inventory
    let thirdItemSlot = playerInventory.data[2];
    // Destroy the attacked entity if the player has an apple in their third item slot
    if (thirdItemSlot.item == "minecraft:apple") {
        system.destroyEntity(eventData.data.attacked_entity);
    }
});
```



**minecraft:lookat**

Defines the behavior when another entity looks at this entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| allow_invulnerable| false| If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets. |
| Minecraft Filter| filters| | Defines the entities that can trigger this component. |
| Range [a, b]| look_cooldown| [0, 0]| The range for the random amount of time during which the entity is 'cooling down' and won't get angered or look for a target. |
| String| look_event| | The event identifier to run when the entities specified in filters look at this entity. |
| Decimal| search_radius| 10| Maximum distance this entity will look for another entity looking at it. |
| Boolean| set_target| true| If true, this entity will set the attack target as the entity that looked at it. |




**minecraft:nameable**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| allow_name_tag_renaming| true| If true, this entity can be renamed with name tags |
| Boolean| always_show| false| If true, the name will always be shown |
| String| default_trigger| | Trigger to run when the entity gets named |
| String| name| | The current name of the entity, empty if the entity hasn't been named yet, making this non-empty will apply the name to the entity |
| JSON Object| name_actions| | Describes the special names for this entity and the events to call when the entity acquires those names<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| name_filter| | List of special names that will cause the events defined in 'on_named' to fire |
| String| on_named| | Event to be called when this entity acquires the name specified in 'name_filter' |


 |




**minecraft:position**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| x| 0.0| Position along the X-Axis (east-west) of the entity |
| Decimal| y| 0.0| Position along the Y-Axis (height) of the entity |
| Decimal| z| 0.0| Position along the Z-Axis (north-south) of the entity |




**minecraft:rotation**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| x| 0.0| Controls the head rotation looking up and down |
| Decimal| y| 0.0| Controls the body rotation parallel to the floor |




**minecraft:shooter**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| auxVal| -1| ID of the Potion effect to be applied on hit |
| String| def| | Entity identifier to use as projectile for the ranged attack. The entity must have the projectile component to be able to be shot as a projectile |




**minecraft:spawn_entity**

Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | If present, the specified entity will only spawn if the filter evaluates to true. |
| Integer| max_wait_time| 600| Maximum amount of time to randomly wait in seconds before another entity is spawned. |
| Integer| min_wait_time| 300| Minimum amount of time to randomly wait in seconds before another entity is spawned. |
| Integer| num_to_spawn| 1| The number of entities of this type to spawn each time that this triggers. |
| Boolean| should_leash| false| If true, this the spawned entity will be leashed to the parent. |
| Boolean| single_use| false| If true, this component will only ever spawn the specified entity once. |
| String| spawn_entity| | Identifier of the entity to spawn, leave empty to spawn the item defined above instead. |
| String| spawn_event| minecraft:entity_born| Event to call when the entity is spawned. |
| String| spawn_item| egg| Item identifier of the item to spawn. |
| String| spawn_method| born| Method to use to spawn the entity. |
| String| spawn_sound| plop| Identifier of the sound effect to play when the entity is spawned. |




**minecraft:tag**



**minecraft:teleport**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| dark_teleport_chance| 0.01| Modifies the chance that the entity will teleport if the entity is in darkness |
| Decimal| light_teleport_chance| 0.01| Modifies the chance that the entity will teleport if the entity is in daylight |
| Decimal| max_random_teleport_time| 20| Maximum amount of time in seconds between random teleports |
| Decimal| min_random_teleport_time| 0| Minimum amount of time in seconds between random teleports |
| Vector [a, b, c]| random_teleport_cube| [32, 16, 32]| Entity will teleport to a random position within the area defined by this cube |
| Boolean| random_teleports| true| If true, the entity will teleport randomly |
| Decimal| target_distance| 16| Maximum distance the entity will teleport when chasing a target |
| Decimal| target_teleport_chance| 1| The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100% |




**minecraft:ticking_area_description**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| is_circle| | Is the area a circle. If false the area is a square. |
| Vector [a, b, c]| max| | (if area is a square) The edge of the area. |
| String| name| | The name of the area. |
| Vector [a, b, c]| origin| | The origin position of the area. |
| Vector [a, b, c]| radius| | (if area is a circle) The radius of the area. |




**minecraft:tick_world**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Decimal| distance_to_players| distance_to_players |
| Boolean| never_despawn| Whether or not this ticking area will despawn when a player is out of range |
| Integer| radius| The radius in chunks of the ticking area |
| Entity Ticking Area JS API Object| ticking_area| The ticking area entity that is attached to this entity |




**minecraft:transformation**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| add| | List of components to add to the entity after the transformation<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| component_groups| | Names of component groups to add |


 |
| String| begin_transform_sound| | Sound to play when the transformation starts |
| JSON Object| delay| | Defines the properties of the delay for the transformation<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| block_assist_chance| 0.0| Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0 |
| Decimal| block_chance| 0.0| Chance that, once a block is found, will help speed up the transformation |
| Integer| block_max| 0| Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius |
| Integer| block_radius| 0| Distance in Blocks that the entity will search for blocks that can help the transformation |
| List| block_types| | List of blocks that can help the transformation of this entity |
| Boolean| keep_owner| | If this entity is owned by another entity, it should remain owned after transformation |
| Decimal| value| 0.0| Time in seconds before the entity transforms |


 |
| Boolean| drop_equipment| | Cause the entity to drop all equipment upon transformation |
| String| into| | Entity Definition that this entity will transform into |
| String| transformation_sound| | Sound to play when the entity is done transforming |




## Client Components



**minecraft:molang**

**Code Example:**

****
```
let molangComponent = this.createComponent(entity, "minecraft:molang"); 
molangComponent["variable.molangexample"] = 1.0; 
this.applyComponentChanges(molangComponent); 

```



## Block Components



**minecraft:blockstate**

**Code Example:**

****
```
let blockstateComponent = this.getComponent(block, "minecraft:blockstate");
blockstateComponent.data.coral_color = "blue";
this.applyComponentChanges(block, blockstateComponent);

```



# Script Events

Here you can find the list of events that you can listen for and respond to in your scripts.




## Client Events



**Listening Events**



minecraft:client_entered_world



minecraft:hit_result_changed

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that was hit or null if it fired when moving off of an entity |
| Vector [a, b, c]| position| The position of the entity that was hit or null if it fired when moving off an entity |


**Code Example:**

**Responding to hit_result_changed**
```
const mySystem = client.registerSystem(0, 0);

mySystem.initialize = function() {
	this.listenForEvent("minecraft:hit_result_changed", (eventData) => this.onHitChanged(eventData));
};

mySystem.onHitChanged = function(eventData) {
	if(eventData.position != null) {
		let chatEvent = this.createEventData("minecraft:display_chat_event");
		chatEvent.data.message = "Hit at x:" + eventData.position.x + " y:" + eventData.position.y + " z:" + eventData.position.z;
		this.broadcastEvent("minecraft:display_chat_event", chatEvent);
	}
};
```



minecraft:hit_result_continuous

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that was hit or null if it not pointing at an entity |
| Vector [a, b, c]| position| The position of the entity that was hit or block that was hit |


**Code Example:**

**Responding to hit_result_continuous**
```
const mySystem = client.registerSystem(0, 0);

mySystem.initialize = function() {
	this.listenForEvent("minecraft:hit_result_continuous", (eventData) => this.onHit(eventData));
};

mySystem.onHit = function(eventData) {
	if(eventData.position != null) {
		let chatEvent = this.createEventData("minecraft:display_chat_event");
		chatEvent.data.message = "Position at x:" + eventData.position.x + " y:" + eventData.position.y + " z:" + eventData.position.z;
		this.broadcastEvent("minecraft:display_chat_event", chatEvent);
	}
};
```



minecraft:pick_hit_result_changed

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that was hit or null if it fired when moving off of an entity |
| Vector [a, b, c]| position| The position of the entity that was hit or null if it fired when moving off an entity |


**Code Example:**

**Responding to pick_hit_result_changed**
```
const mySystem = client.registerSystem(0, 0);

mySystem.initialize = function() {
	this.listenForEvent("minecraft:pick_hit_result_changed", (eventData) => this.onPickChanged(eventData));
};

mySystem.onPickChanged = function(eventData) {
	if(eventData.position != null) {
		let chatEvent = this.createEventData("minecraft:display_chat_event");
		chatEvent.data.message = "Pick at x:" + eventData.position.x + " y:" + eventData.position.y + " z:" + eventData.position.z;
		this.broadcastEvent("minecraft:display_chat_event", chatEvent);
	}
};
```



minecraft:pick_hit_result_continuous

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that was hit or null if it not pointing at an entity |
| Vector [a, b, c]| position| The position of the entity that was hit or block that was hit |


**Code Example:**

**Responding to pick_hit_result_continuous**
```
const mySystem = client.registerSystem(0, 0);

mySystem.initialize = function() {
	this.listenForEvent("minecraft:pick_hit_result_continuous", (eventData) => this.onPick(eventData));
};

mySystem.onPick = function(eventData) {
	if(eventData.position != null) {
		let chatEvent = this.createEventData("minecraft:display_chat_event");
		chatEvent.data.message = "Pick at:" + eventData.position.x + " y:" + eventData.position.y + " z:" + eventData.position.y + " z:" + eventData.position.z;
		this.broadcastEvent("minecraft:display_chat_event", chatEvent);
	}
};
```



**Trigger-able Events**



minecraft:display_chat_event

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| message| | The chat message that will be displayed |


**Code Example:**

**Trigger chat event**
```
const mySystem = server.registerSystem(0, 0);

mySystem.update = function() {
	let chatEvent = this.createEventData("minecraft:display_chat_event");
	chatEvent.data.message = "Hello, World!";
	this.broadcastEvent("minecraft:display_chat_event", chatEvent);
};
```



minecraft:load_ui

**<big>Event Data Parameters</big>**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| options| | You can define the following options for the screen by setting their value to true or false:<br/>

absorbs_input

If true, input will not be passed down to any other screens underneath



always_accepts_input

If true, the screen will always accept and process input for as long as it is in the stack, even if other custom UI screens appear on top of it



force_render_below

If true, this screen will be rendered even if another screen is on top of it and will render over them, including the HUD



is_showing_menu

If true, the screen will be treated as the pause menu and the pause menu won't be allowed to show on top of this screen



render_game_behind

If true, the game will continue to be rendered underneath this screen



render_only_when_topmost

If true, this screen will only be rendered if it is the screen at the top of the stack



should_steal_mouse

If true, the screen will capture the mouse pointer and limit its movement to the UI screen

 |
| String| path| | The file path to the screen's HTML file |




minecraft:send_ui_event

Custom UI is based on HTML 5. Review the scripting demo for an example of a custom UI file.

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| data| The data for the UI event being triggered |
| String| eventIdentifier| The identifier of the UI event |




minecraft:spawn_particle_attached_entity

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| effect| | The identifier of the particle effect you want to attach to the entity. This is the same name you gave the effect in its JSON file |
| Entity JS API Object| entity| | The entity object you want to attach the effect to |
| Vector [a, b, c]| offset| [0, 0, 0]| The offset from the entity's "center" where you want to spawn the effect |




minecraft:spawn_particle_in_world

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| effect| | The identifier of the particle effect you want to attach to spawn. This is the same name you gave the effect in its JSON file |
| Vector [a, b, c]| position| [0, 0, 0]| The position in the world where you want to spawn the effect |




minecraft:unload_ui



minecraft:script_logger_config

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| log_errors| false| Set to true to log any scripting errors that occur on the client |
| Boolean| log_information| false| Set to true to log any general scripting information that occurs on the client. This includes any logging done with client.log() |
| Boolean| log_warnings| false| Set to true to log any scripting warnings that occur on the client |




## Server Events



**Listening Events**



minecraft:entity_attack

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that attacked |
| Entity JS API Object| target| The entity that was targeted in the attack |




minecraft:player_attacked_entity

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| attacked_entity| The entity that was attacked by the player |
| Entity JS API Object| player| The player that attacked an entity |




minecraft:entity_acquired_item

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Integer| acquired_amount| The total number of items acquired by the entity during this event |
| String| acquisition_method| The way the entity acquired the item |
| Entity JS API Object| entity| The entity who acquired the item |
| ItemStack JS API Object| item_stack| The item that was acquired |
| Entity JS API Object| secondary_entity| If it exists, the entity that affected the item before it was acquired. Example: A player completes a trade with a villager. The `entity` property would be the player and the `secondary_entity` would be the villager |




minecraft:entity_carried_item_changed

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| ItemStack JS API Object| carried_item| The item that is now in the entities hands |
| Entity JS API Object| entity| The entity that changed what they were carrying |
| String| hand| Defines which hand the item was equipped to. Either main or offhand. |
| ItemStack JS API Object| previous_carried_item| The item that was previously in the entities hands |




minecraft:entity_created

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that was just created |




minecraft:entity_definition_event

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that was affected |
| String| event| The event that was triggered |




minecraft:entity_death

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| block_position| The position of the block that killed the entity |
| String| cause| The cause of the entity's death |
| Entity JS API Object| entity| The entity that died |
| Entity JS API Object| killer| The entity that killed the entity |
| String| projectile_type| The type of the projectile that killed the entity |




minecraft:entity_dropped_item

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity who dropped the item |
| ItemStack JS API Object| item_stack| The item that was dropped |




minecraft:entity_equipped_armor

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity who is equipping the armor |
| ItemStack JS API Object| item_stack| The armor that is being equipped |
| String| slot| Defines which slot the item was equipped to. |




minecraft:entity_hurt

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Integer| absorbed_damage| The amount the damage was reduced by by the entity's absorption effect |
| Entity JS API Object| attacker| Present only when damaged by an entity or projectile. The entity that attacked and caused the damage |
| Vector [a, b, c]| block_position| Present only when damaged by a block. This is the position of the block that hit the entity |
| String| cause| The way the entity took damage. Refer to the Damage Source documentation for a complete list of sources |
| Integer| damage| The amount of damage the entity took after immunity and armor are taken into account |
| Entity JS API Object| entity| The entity that took damage |
| String| projectile_type| Present only when damaged by a projectile. This is the identifier of the projectile that hit the entity |




minecraft:entity_move

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that moved |




minecraft:entity_sneak

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that changed their sneaking state |
| Boolean| sneaking| If true, the entity just started sneaking. If false, the entity just stopped sneaking |




minecraft:entity_start_riding

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The rider |
| Entity JS API Object| ride| The entity being ridden |




minecraft:entity_stop_riding

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that was riding another entity |
| Boolean| entity_is_being_destroyed| If true, the rider stopped riding because they are now dead |
| Boolean| exit_from_rider| If true, the rider stopped riding by their own decision |
| Boolean| switching_rides| If true, the rider stopped riding because they are now riding a different entity |




minecraft:entity_tick

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that was ticked |




minecraft:entity_use_item

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity who is using the item |
| ItemStack JS API Object| item_stack| The item that is being used |
| String| use_method| The way the entity used the item |




minecraft:block_destruction_started

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| block_position| The position of the block that is being destroyed |
| Entity JS API Object| player| The player that started destoying the block |




minecraft:block_destruction_stopped

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| block_position| The position of the block that was being destroyed |
| Decimal| destruction_progress| How far along the destruction was before it was stopped (0 - 1 range) |
| Entity JS API Object| player| The player that stopped destoying the block |




minecraft:block_exploded

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| block_identifier| The identifier of the block that was destroyed |
| JavaScript Object| block_position| The position of the block that was destroyed by the explosion |
| String| cause| The cause of the block's destruction |
| Entity JS API Object| entity| The entity that exploded |




minecraft:block_interacted_with

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| block_position| The position of the block that is being interacted with |
| Entity JS API Object| player| The player that interacted with the block |




minecraft:piston_moved_block

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| block_position| The position of the block that was moved |
| String| piston_action| The action the piston took, "extended" or "retracted" |
| JavaScript Object| piston_position| The position of the piston that moved the block |




minecraft:player_destroyed_block

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| block_identifier| The identifier of the block that was destroyed |
| JavaScript Object| block_position| The position of the block that was destroyed |
| Entity JS API Object| player| The player that destroyed the block |




minecraft:player_placed_block

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| JavaScript Object| block_position| The position of the block that was placed |
| Entity JS API Object| player| The player that placed the block |




minecraft:play_sound

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| pitch| 1.0| The pitch of the sound effect. A value of 1.0 will play the sound effect with regular pitch |
| Vector [a, b, c]| position| [0, 0, 0]| The position in the world we want to play the sound at |
| String| sound| | The identifier of the sound you want to play. Only sounds defined in the applied resource packs can be played |
| Decimal| volume| 1.0| The volume of the sound effect. A value of 1.0 will play the sound effect at the volume it was recorded at |




minecraft:projectile_hit

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| The entity that was hit by the projectile, if any |
| Entity JS API Object| owner| The entity that fired the projectile |
| Vector [a, b, c]| position| The position of the collision |
| Entity JS API Object| projectile| The projectile in question |




minecraft:weather_changed

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| String| dimension| The name of the dimension where the weather change happened |
| Boolean| lightning| Tells if the new weather has lightning |
| Boolean| raining| Tells if the new weather has rain |




**Trigger-able Events**



minecraft:entity_definition_event

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Entity JS API Object| entity| | The entity object you want to attach the effect to |
| String| event| | The identifier of the event to trigger on that entity. Both built-in (minecraft:) and custom events are supported |




minecraft:display_chat_event

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| message| | The chat message that will be displayed |




minecraft:execute_command

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| command| | The command that will be run |




minecraft:play_sound

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| pitch| 1.0| The pitch of the sound effect. A value of 1.0 will play the sound effect with regular pitch |
| Vector [a, b, c]| position| [0, 0, 0]| The position in the world we want to play the sound at |
| String| sound| | The identifier of the sound you want to play. Only sounds defined in the applied resource packs can be played |
| Decimal| volume| 1.0| The volume of the sound effect. A value of 1.0 will play the sound effect at the volume it was recorded at |




minecraft:spawn_particle_attached_entity

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| effect| | The identifier of the particle effect you want to attach to the entity. This is the same identifier you gave the effect in its JSON file |
| Entity JS API Object| entity| | The entity object you want to attach the effect to |
| Vector [a, b, c]| offset| [0, 0, 0]| The offset from the entity's "center" where you want to spawn the effect |




minecraft:spawn_particle_in_world

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| dimension| overworld| The dimension in which you want to spawn the effect. Can be "overworld", "nether", or "the end" |
| String| effect| | The identifier of the particle effect you want to attach to spawn. This is the same name you gave the effect in its JSON file |
| Vector [a, b, c]| position| [0, 0, 0]| The position in the world where you want to spawn the effect |




minecraft:script_logger_config

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| log_errors| false| Set to true to log any scripting errors that occur on the server |
| Boolean| log_information| false| Set to true to log any general scripting information that occurs on the server. This includes any logging done with server.log() |
| Boolean| log_warnings| false| Set to true to log any scripting warnings that occur on the server |




# Scripting System

The Minecraft Script Engine uses the JavaScript language.
You can write JavaScript scripts and bundle them with Behavior Packs to listen and respond to game events, get and modify data in components that entities have, and affect different parts of the game.



## Demos

| Demo| Last Updated| Download Link |
|:-----------:|:-----------:|:-----------:|
| Mob Arena| 10/24/2018| https://aka.ms/minecraftscripting_mobarena |
| Turn-Based RPG| 10/24/2018| https://aka.ms/minecraftscripting_turnbased |




## Known Issues

| Issue| Workaround |
|:-----------:|:-----------:|
| Scripts are not loaded properly from archived packs|  |
| Custom UI doesn't work in VR or MR mode|  |
| Custom UI doesn't retain state upon suspend and resume|  |
| Exiting a world without scripts and entering one that has scripts might cause the wrong world to load|  |
| Calling removeEntity on a dying entity might cause the game to crash|  |




## Breaking Changes

| Category| Change |
|:-----------:|:-----------:|
| UI|  |
| Components|  |
| Events|  |
| Events|  |
| Events|  |
| Events|  |




## Pre-Requisites


NOTE: Scripts are only supported on Windows 10 PCs at the moment. If you try to open a world with scripts on a device that doesn't support scripts, you will see an error message letting you know you can't enter the world.

| Software| Minimum| Recommended |
|:-----------:|:-----------:|:-----------:|
| Code Editor| Visual Studio Code or any plain-text editor| Visual Studio Community 2017 with the following components installed: 'JavaScript diagnostics', 'JavaScript and TypeScript language support', 'Just-In-Time debugger' |
| Debugger| N/A| Visual Studio Community 2017 |
| Minecraft| Minecraft  on your Windows 10 device| Minecraft  on your Windows 10 device |
| Other| Vanilla Behavior Pack  available from https://aka.ms/behaviorpacktemplate| Vanilla Behavior Pack  available from https://aka.ms/behaviorpacktemplate |
| Storage| 1.0 GB of free space for text editor, game, and scripts| 3.0 GB of free space for Visual Studio, game, and scripts |




## Getting Started

Once you have downloaded the Behavior Pack, unzip it to a folder. Inside the Behavior Pack you will find the scripts folder which contains all the scripting files you want to run.
In the scripts folder you will find two folders: one for client scripts and one for server scripts.
-Server Scripts: These scripts run on the server side of the game. This includes spawning new entities, adding components, or modifying components on an entity.
-Client Scripts: These scripts run on each individual player's side of the game. This is a good place to respond to events and manage anything specific to the player.
Once you have chosen whether you are making a client or server script, simply add a new blank text file with .js extension to the appropriate folder, and open it in your preferred code editor. Then code away! You can have as many or as few JavaScript files as you want here (the name of the files doesn't matter) and they will all be run independently of each other!

 NOTE: For scripts to be run by the game, you need to enable Experimental Gameplay on the world where you will run scripts on. This will be necessary while scripting is still in beta.
When entering a world that has client scripts in it, you will be prompted to accept that you wish to run scripts on your device (this will show up both for local worlds as well as multiplayer worlds).
Additionally, if your pack contains client scripts, you need to include a client_data module in the pack's manifest. This tells the game anything in the scripts/client folder needs to be sent over to the clients. Please refer to the Add-on Documentation page for more information on the pack's manifest contents.

**Folder Structure**

**Example of manifest module needed for client scripts**
```

        {
            "description": "Example client scripts module",
            "type": "client_data",
            "uuid": "c05a992e-482a-455f-898c-58bbb4975e47",
            "version": [0, 0, 1]
        }

```

**vanilla_behavior_pack**
```
|-scripts
|--client
|---myClientScript.js
|--server
|---myServerScript.js
|-manifest.json
|-pack_icon.png
```



## Structure of a Script

These are, in a way, the required parts of a script but they are by no means the only parts you can have. You can create additional methods as needed - just make sure they are called from somewhere in one of the methods below!



**1. System Registration**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| Integer| majorVersion| This is the major version of the Minecraft Script Engine your script was designed to work with |
| Integer| minorVersion| This is the revision of the Minecraft Script Engine your script was designed to work with |


**Code Examples:**

**Client System**
```
let sampleClientSystem = client.registerSystem(0, 0);
```

**Server System**
```
let sampleServerSystem = server.registerSystem(0, 0);
```



**2. System Initialization**

You can use this to set up the environment for your script: register custom components and events, sign up event listeners, etc. This will run BEFORE the world is ready and the player has been added to it. This function should be used to initialize variables and setup event listeners. 					You shouldn't try to spawn or interact with any entities at this point! You should also avoid interaction with UI elements or sending messages to the chat window since this is called before the player is ready.

**Code Example:**

****
```
sampleSystem.initialize = function() {
	//register event data, register components, register queries, listen for events
};
```



**3. System Update**

**Code Example:**

****
```
sampleSystem.update = function() {
	//Update all the things
};
```



**4. System Shutdown**

**Code Example:**

****
```
sampleSystem.shutdown = function() {
	//Cleanup script only things
};
```



## Debugging

There are two ways to tell what happened when something goes wrong with a script: in-game and advanced, which we will describe below. You only need the game and your script to debug in-game, but you will need a Windows 10 PC and Visual Studio installed for the advanced debugging.



**In-Game**

We strongly encourage you to build further debug messages and tools into your scripts while working on them. This will help you discern when something isn't working quite right. Reach out on the official Discord channel if you need additional help: https://discord.gg/Minecraft



**Real-Time (Advanced)**

If you installed Visual Studio with the components mentioned in the "Recommended" section of this document you will have installed and enabled the Just-In-Time Debugger. This tool will pop-up a message from Visual Studio whenever an exception occurs in your script and allow you to open Visual Studio on the line of your script that broke.

Additionally, you can connect to the Script Engine manually and debug your code. You can use remote debugging to connect and debug Minecraft running on another device. Please refer to the Visual Studio Debugger documentation above for instructions on how to use remote debugging.
First you need to start up Visual Studio. If this is the first time you have launched Visual Studio after installation, we suggest setting up your environment for JavaScript development and logging in to your Microsoft account when prompted. This will set up the Visual Studio interface with the most important tools you will need.
Once you have Visual Studio open you should launch Minecraft. Then create a new world with Experimental Gameplay enabled and apply the Behavior Pack containing your scripts.
After creating the world go back to Visual Studio and click on the Debug menu. Then click on "Attach to Process". In the window that opens there will be a search box titled Filter Process. Click on it and type Minecraft.
Once the list is narrowed down to only the instance of Minecraft running, you can verify that the Script Engine is running by looking at the Type column. This will say Script and either x86 or x64.

Select the process and click on Attach to attach the debugger to the game. Now you will be able to press the Pause button to pause the Script Engine when the next line of script code runs. This allows you to inspect the values of variables in your script and break into Visual Studio if an error occurs in your code.
WARNING: When you hit a breakpoint to step through code with a debugger, it is possible for a client to time out and disconnect or for the server to disconnect all players.



# User-Defined Components

User-Defined components are a special kind of component that can be defined in script and no built-in game system acts on it.
The component needs to be registered with the Script Engine by giving it a name and a set of fields in the format name:value. Once applied, the component behaves like any of the built-in components: you can get it from an entity, modify its values, and apply the changes.
Currently User-Defined components are the only components that can be dynamically added and removed from an entity using scripts. They don't need to be previously defined in an entity's JSON file. In the current version these components will NOT be saved out or loaded back in: they only exist while the entity is there and need to be added back when reloading the level.

**Code Example:**

**Component Registration**
```
this.registerComponent("myNamespace:myComponent", { myString: "TamerJeison", myInt: 42, myFloat: 1.0, myArray: [1, 2, 3] });
```

