---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.WorldInitializeEvent Class
description: Contents of the mojang-minecraft.WorldInitializeEvent class.
---
# WorldInitializeEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information and methods that can be used at the initialization of the scripting environment for a World. Also, use the supplied propertyRegistry object to register any dynamic properties, within the scope of the World Initialize execution.

## Properties

### **propertyRegistry**
`read-only propertyRegistry: PropertyRegistry;`

Contains methods for scripts to initialize and register dynamic properties they may wish to use within a world.

Type: [*PropertyRegistry*](PropertyRegistry.md)

#### Examples
##### ***propertyRegistration.js***
```javascript
import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "mojang-minecraft";
world.events.worldInitialize.subscribe((e) => {
  let def = new DynamicPropertiesDefinition();
  def.defineNumber("rpgStrength");
  def.defineString("rpgRole", 16);
  def.defineBoolean("rpgIsHero");
  e.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.skeleton);
});
```
