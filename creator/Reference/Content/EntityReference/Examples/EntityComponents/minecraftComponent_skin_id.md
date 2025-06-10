---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:skin_id"
description: "Describes the minecraft:skin_id entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:skin_id

Skin ID value. Can be used to differentiate skins, such as base skins for villagers.

> [!Note]
> Requires multiple texture sets to be set up for the entity.


## Skin Id Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | 0 | Integer number | The ID of the skin. By convention, 0 is the ID of the base skin. | Villager v2: `1`, `2`, `3`, `4`, `5` | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/villager_skin_0/minecraft:skin_id/: 

```json
"minecraft:skin_id": {
  "value": 0
}
```

At /minecraft:entity/component_groups/villager_skin_1/minecraft:skin_id/: 

```json
"minecraft:skin_id": {
  "value": 1
}
```

At /minecraft:entity/component_groups/villager_skin_2/minecraft:skin_id/: 

```json
"minecraft:skin_id": {
  "value": 2
}
```

At /minecraft:entity/component_groups/villager_skin_3/minecraft:skin_id/: 

```json
"minecraft:skin_id": {
  "value": 3
}
```

At /minecraft:entity/component_groups/villager_skin_4/minecraft:skin_id/: 

```json
"minecraft:skin_id": {
  "value": 4
}
```

At /minecraft:entity/component_groups/villager_skin_5/minecraft:skin_id/: 

```json
"minecraft:skin_id": {
  "value": 5
}
```
