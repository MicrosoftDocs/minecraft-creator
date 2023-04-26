---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.WorldInitializeAfterEvent Class
description: Contents of the @minecraft/server.WorldInitializeAfterEvent class.
---
# WorldInitializeAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information and methods that can be used at the initialization of the scripting environment for a World. Also, use the supplied propertyRegistry object to register any dynamic properties, within the scope of the World Initialize execution.

## Properties

### **propertyRegistry**
`read-only propertyRegistry: PropertyRegistry;`

Contains methods for scripts to initialize and register dynamic properties they may wish to use within a world.

Type: [*PropertyRegistry*](PropertyRegistry.md)

#### Examples
##### ***propertyRegistration.js***
```javascript
import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "@minecraft/server";
world.afterEvents.worldInitialize.subscribe((e) => {
  let def = new DynamicPropertiesDefinition();
  def.defineNumber("rpgStrength");
  def.defineString("rpgRole", 16);
  def.defineBoolean("rpgIsHero");
  e.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.skeleton);
});
```
