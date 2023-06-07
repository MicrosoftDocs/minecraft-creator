---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityRemovedAfterEvent Class
description: Contents of the @minecraft/server.EntityRemovedAfterEvent class.
---
# EntityRemovedAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Data for an event that happens when an entity is removed from the world (for example, the entity is unloaded because it is not close to players.)

## Properties

### **removedEntity**
`read-only removedEntity: string;`

Reference to an entity that was removed.

Type: *string*
