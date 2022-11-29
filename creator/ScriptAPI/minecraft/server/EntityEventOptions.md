---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityEventOptions Interface
description: Contents of the @minecraft/server.EntityEventOptions class.
---
# EntityEventOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains optional parameters for registering an entity event.

## Properties

### **entities**
`entities?: Entity[];`

If this value is set, this event will only fire for entities that match the entities within this collection.

Type: [*Entity*](Entity.md)[]

### **entityTypes**
`entityTypes?: string[];`

If this value is set, this event will only fire if the impacted entities' type matches this parameter.

Type: *string*[]
