---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:uses_legacy_friction"
description: "Describes the minecraft:uses_legacy_friction entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:uses_legacy_friction

When set, legacy calculations are used when applying "minecraft:friction_modifier". This component is automatically added to legacy content to preserve existing behavior. The legacy calculations are incorrect and should not be used for new content.

> [!Note]
> Added in 1.26.20 alongside the `minecraft:friction_modifier` behavior fix. Adding this component opts an entity back into the legacy (pre-1.26.20) friction calculations, which also partially affected air and liquid drag. Entities whose `format_version` is older than 1.26.20 receive this component automatically so that existing content keeps its prior behavior.

> [!Note]
> This item requires a format version of at least 1.26.20.


## Samples

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:uses_legacy_friction": {}
```
