---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Entity Class
description: Contents of the Minecraft.Entity class.
---
# Entity Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Represents the state of an entity (a mob, the player, or other moving objects like Minecarts) in the world.

## Properties
### **id** - `string`



### **location** - `Location`



### **velocity** - `Location`



### **nameTag** - `string`



### **isSneaking** - `boolean`




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

Returns true if the specified component is present on this entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **componentId** | *string* | The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. |

Returns *boolean*


### **getComponent**
`
getComponent(componentId: string): any
`

Gets a component (that represents additional capabilities) for an entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **componentId** | *string* | The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the entity, undefined is returned. |

Returns *any*


### **getComponents**
`
getComponents(): any[]
`

Returns all components that are both present on this entity and supported by the API.

Returns *any*[]


### **kill**
`
kill(): void
`

Kills this entity. The entity will drop loot as normal.


> [!WARNING]
> This function can throw errors.

### **getEffect**
`
getEffect(effectType: EffectType): Effect
`

Returns the effect for the specified EffectType on the entity, or undefined if the effect is not present.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **effectType** | [*EffectType*](EffectType.md) | - |

Returns [*Effect*](Effect.md) - Effect object for the specified effect, or undefined if the effect is not present.

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

#### Examples
##### ***addEffect.js***
```javascript
const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
const villagerLoc = new BlockLocation(1, 2, 1);
const villager = test.spawn(villagerId, villagerLoc);
const duration = 20;

villager.addEffect(Effects.poison, duration, 1);

```
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

