---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.PropertyRegistry Class
description: Contents of the mojang-minecraft.PropertyRegistry class.
---
# PropertyRegistry Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Provides methods that should be used within the World Initialize event to register dynamic properties that can be used and stored within Minecraft.

## Methods
- [registerEntityTypeDynamicProperties](#registerentitytypedynamicproperties)
- [registerWorldDynamicProperties](#registerworlddynamicproperties)

### **registerEntityTypeDynamicProperties**
`
registerEntityTypeDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition, entityType: EntityType): void
`
Registers a dynamic property for a particular entity type (e.g., a minecraft:skeleton.).

#### **Parameters**
- **propertiesDefinition**: [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)
- **entityType**: [*EntityType*](EntityType.md)
> [!WARNING]
> This function can throw errors.

### **registerWorldDynamicProperties**
`
registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void
`
Registers a globally available dynamic property for a world.

#### **Parameters**
- **propertiesDefinition**: [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)
> [!WARNING]
> This function can throw errors.
