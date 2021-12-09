---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Player Class
description: Contents of the mojang-minecraft.Player class.
---
# Player Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Base Types
- [*Entity*](Entity.md)

## Directly Derived Types
- [*mojang-gametest.SimulatedPlayer*](../mojang-gametest/SimulatedPlayer.md)
  
Represents a player within the world.

## Properties
### **dimension**
`read-only dimension: Dimension;`

Dimension that the entity is currently within.

Type: [*Dimension*](Dimension.md)


### **id**
`read-only id: string;`

Identifier for the player.

Type: *string*


### **isSneaking**
`isSneaking: boolean;`

True if the player is currently using a sneaking movement.

Type: *boolean*


### **location**
`read-only location: Location;`

Current location of the player.

Type: [*Location*](Location.md)


### **name**
`read-only name: string;`

Name of the player.

Type: *string*


### **nameTag**
`nameTag: string;`

Optional name tag of the player.

Type: *string*


### **selectedSlot**
`selectedSlot: number;`

Manages the selected slot in the player's hotbar.

Type: *number*


### **target**
`target: Entity;`

Retrieves or sets an entity that is used as the target of AI-related behaviors, like attacking. For players, which don't use any AI semantics, this property does not do anything.

Type: [*Entity*](Entity.md)


### **velocity**
`read-only velocity: Location;`

Current speed of the player across X, Y, and Z dimensions.

Type: [*Location*](Location.md)



## Methods
- [addEffect](#addeffect)
- [addTag](#addtag)
- [getBlockFromViewVector](#getblockfromviewvector)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getEffect](#geteffect)
- [getEntitiesFromViewVector](#getentitiesfromviewvector)
- [getItemCooldown](#getitemcooldown)
- [getTags](#gettags)
- [hasComponent](#hascomponent)
- [hasTag](#hastag)
- [kill](#kill)
- [removeTag](#removetag)
- [runCommand](#runcommand)
- [startItemCooldown](#startitemcooldown)
- [triggerEvent](#triggerevent)
  
### **addEffect**
`
addEffect(effectType: EffectType, duration: number, amplifier: number): void
`

Adds an effect, like poison, to the entity.
#### **Parameters**
- **effectType**: [*EffectType*](EffectType.md)
  
  Type of effect to add to the entity.
- **duration**: *number*
  
  Amount of time, in seconds, for the effect to apply.
- **amplifier**: *number*
  
  Optional amplification of the effect to apply.


> [!WARNING]
> This function can throw errors.

### **addTag**
`
addTag(tag: string): boolean
`

Adds a specified tag to an entity.
#### **Parameters**
- **tag**: *string*
  
  Content of the tag to add.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **getBlockFromViewVector**
`
getBlockFromViewVector(options?: BlockRaycastOptions): Block
`

Gets the first block that intersects with the vector of the view of this entity.
#### **Parameters**
- **options**?: [*BlockRaycastOptions*](BlockRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*Block*](Block.md)

> [!WARNING]
> This function can throw errors.

### **getComponent**
`
getComponent(componentId: string): IEntityComponent
`

Gets a component (that represents additional capabilities) for an entity.
#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the entity, undefined is returned.

#### **Returns** [*IEntityComponent*](IEntityComponent.md)


### **getComponents**
`
getComponents(): IEntityComponent[]
`

Returns all components that are both present on this entity and supported by the API.

#### **Returns** [*IEntityComponent*](IEntityComponent.md)[]


### **getEffect**
`
getEffect(effectType: EffectType): Effect
`

Returns the effect for the specified EffectType on the entity, or undefined if the effect is not present.
#### **Parameters**
- **effectType**: [*EffectType*](EffectType.md)

#### **Returns** [*Effect*](Effect.md) - Effect object for the specified effect, or undefined if the effect is not present.

> [!WARNING]
> This function can throw errors.

### **getEntitiesFromViewVector**
`
getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[]
`

Gets the first entity that intersects with the vector of the view of this entity.
#### **Parameters**
- **options**?: [*EntityRaycastOptions*](EntityRaycastOptions.md) = `null`
  
  Additional options for processing this raycast query.

#### **Returns** [*Entity*](Entity.md)[]

> [!WARNING]
> This function can throw errors.

### **getItemCooldown**
`
getItemCooldown(itemCategory: string): number
`

Gets the current item cooldown time for a particular cooldown category.
#### **Parameters**
- **itemCategory**: *string*
  
  Specifies the cooldown category to retrieve the current cooldown for.

#### **Returns** *number*

> [!WARNING]
> This function can throw errors.

### **getTags**
`
getTags(): string[]
`

Returns all tags associated with an entity.

#### **Returns** *string*[]

> [!WARNING]
> This function can throw errors.

### **hasComponent**
`
hasComponent(componentId: string): boolean
`

Returns true if the specified component is present on this entity.
#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.

#### **Returns** *boolean*


### **hasTag**
`
hasTag(tag: string): boolean
`

Tests whether an entity has a particular tag.
#### **Parameters**
- **tag**: *string*
  
  Identifier of the tag to test for.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **kill**
`
kill(): void
`

Kills this entity. The entity will drop loot as normal.


> [!WARNING]
> This function can throw errors.

### **removeTag**
`
removeTag(tag: string): boolean
`

Removes a specified tag from an entity.
#### **Parameters**
- **tag**: *string*
  
  Content of the tag to remove.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **runCommand**
`
runCommand(commandString: string): any
`

Runs a particular command from the context of this player.
#### **Parameters**
- **commandString**: *string*
  
  Command to run. Note that command strings should not start with slash.

#### **Returns** *any* - For commands that return data, returns a JSON structure with command response values.

> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *commands.js*
```javascript
player.runCommand("say You got a new high score!");
player.runCommand("scoreboard players set @s score 10");
```
### **startItemCooldown**
`
startItemCooldown(itemCategory: string, tickDuration: number): void
`

Sets the item cooldown time for a particular cooldown category.
#### **Parameters**
- **itemCategory**: *string*
  
  Specifies the cooldown category to retrieve the current cooldown for.
- **tickDuration**: *number*
  
  Duration in ticks of the item cooldown.


> [!WARNING]
> This function can throw errors.

### **triggerEvent**
`
triggerEvent(eventName: string): void
`

Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.
#### **Parameters**
- **eventName**: *string*
  
  Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed.


> [!WARNING]
> This function can throw errors.


