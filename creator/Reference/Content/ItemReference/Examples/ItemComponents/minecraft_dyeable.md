---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:dyeable"
description: "Describes the minecraft:dyeable item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:dyeable

enables custom items to be dyed in cauldrons. To use the dyeable component, the format version on the item and the attachable needs to have a format_version of 1.21.30 or greater.

> [!Note]
> This item requires a format version of at least 1.21.30.


## Minecraft Dyeable Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| default_color | *not set* | String | default_color |  | 
| default_color (Alternate 1) | *not set* | Array of numbers |  |  | 

## Samples


```json
"minecraft:dyeable": {
  "default_color": "#175882"
}
```
