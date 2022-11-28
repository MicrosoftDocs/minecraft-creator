---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityCreateEvent Class
description: Contents of the @minecraft/server.EntityCreateEvent class.
---
# EntityCreateEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to the creation of a new entity.

## Properties

### **entity**
`entity: Entity;`

New entity that was created.

Type: [*Entity*](Entity.md)

#### **Examples**
##### *runEntityCreatedEvent.ts*
```javascript
  // register a new function that is called when a new entity is created.
  const entityCreatedCallback = mc.world.events.entityCreate.subscribe((entityEvent: mc.EntityCreateEvent) => {
    if (entityEvent && entityEvent.entity) {
      log("New entity of type '" + +entityEvent.entity + "' created!", 1);
    } else {
      log("The entity event didn't work as expected.", -1);
    }
  });
```


