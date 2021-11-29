---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Particle Documentation - Particle Expire If In Blocks component
ms.prod: gaming
---

# Particle Documentation - Particle Expire If In Blocks component

Particles expire when in a block of the type in the list. Note: this component can exist alongside particle_lifetime_expression.

```json
"minecraft:particle_expire_if_in_blocks" [
    // minecraft block names, e.g. 'minecraft:water', 'minecraft:air'
    // these are typically the same name as in the /setblock command
    // except for the minecraft: prefix
    "blockname1",
    "blockname2",
    ...
],
```
