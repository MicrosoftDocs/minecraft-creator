---
author: mammerla
ms.author: mikeam
title: Particle Documentation - Emitter Initialization component
description: "A reference document detailing the 'emitter initialization' particle component"
ms.service: minecraft-bedrock-edition
---

# Particle Documentation - Emitter Initialization component

This component allows the emitter to run some Molang at creation, primarily to populate any Molang variables that get used later.

```json

"minecraft:emitter_initialization": {
  "creation_expression": <molang>, // this is run once at emitter startup
  "per_update_expression": <molang> // this is run once per emitter update
}

```
