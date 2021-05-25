---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
title: Minecraft.Entity Class
description: Contents of the Minecraft.Entity class.
---
# Entity Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

## Methods
- [hasComponent](#hascomponent)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getName](#getname)
- [kill](#kill)
- [getEffect](#geteffect)
- [addEffect](#addeffect)
  
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
getComponents(): array
`


Returns *array*


### **getName**
`
getName(): string
`


Returns *string*

> [!WARNING]
> This function can throw errors.

### **kill**
`
kill(): void
`


Returns *undefined*

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

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **effectType** | [*EffectType*](EffectType.md) | - |
| **duration** | *number* | - |
| **amplifier** | *number* | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

