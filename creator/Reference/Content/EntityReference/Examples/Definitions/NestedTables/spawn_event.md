---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:spawn_event
description: "A reference document about the 'spawn_event' spawn rule"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:spawn_event

Event related to the spawning of an entity.

## Example

Pillager who spawns in riding a Ravager during a raid

```json
"minecraft:pillager_rider_for_raid": {
    "minecraft:addrider": {
        "entity_type": "minecraft:pillager",
        "spawn_event": "minecraft:spawn_for_raid"
    }
}
```
