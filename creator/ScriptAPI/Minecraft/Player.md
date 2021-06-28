---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Player Class
description: Contents of the Minecraft.Player class.
---
# Player Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Represents a player within the world.

## Properties
### **id** - `string`
Identifier for the player.


### **location** - `Location`
Current location of the player.


### **velocity** - `Location`
Current speed of the player across X, Y, and Z dimensions.


### **nameTag** - `string`
Optional name tag of the player.


### **isSneaking** - `boolean`
True if the player is currently using a sneaking movement.


### **name** - `string`
Name of the player.



## Methods
- [hasComponent](#hascomponent)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [kill](#kill)
- [getEffect](#geteffect)
- [addEffect](#addeffect)
- [triggerEvent](#triggerevent)
  
### **hasComponent**
`
hasComponent(componentId: string): boolean
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **componentId** | *string* | - |

Returns *boolean*


### **getComponent**
`
getComponent(componentId: string): any
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **componentId** | *string* | - |

Returns *any*


### **getComponents**
`
getComponents(): any[]
`


Returns *any*[]


### **kill**
`
kill(): void
`



> [!WARNING]
> This function can throw errors.

### **getEffect**
`
getEffect(effectType: EffectType): Effect
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **effectType** | [*EffectType*](EffectType.md) | - |

Returns [*Effect*](Effect.md)

> [!WARNING]
> This function can throw errors.

### **addEffect**
`
addEffect(effectType: EffectType, duration: number, amplifier: number): void
`

Adds an effect, like poison, to the entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **effectType** | [*EffectType*](EffectType.md) | Type of effect to add to the entity. |
| **duration** | *number* | Amount of time, in seconds, for the effect to apply. |
| **amplifier** | *number* | Optional amplification of the effect to apply. |


> [!WARNING]
> This function can throw errors.

### **triggerEvent**
`
triggerEvent(eventName: string): void
`

Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **eventName** | *string* | Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed. |


> [!WARNING]
> This function can throw errors.

