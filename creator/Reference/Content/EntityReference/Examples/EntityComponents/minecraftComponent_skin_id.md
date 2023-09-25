---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:skin_id
description: "A reference document detailing the 'skin_id' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation -  minecraft:skin_id

`minecraft:skin_id` sets the entity's Skin ID value. Can be used to differentiate skins, such as base skins for villagers.

> [!IMPORTANT]
> `minecraft:skin_id` requires multiple texture sets to be set up for the entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value| 0| Integer|The ID of the skin. By convention, 0 is the ID of the base skin.|

## Example

```json
"minecraft:skin_id":{
    "value": 0,
}
```

## Vanilla entities examples

### villager_v2

> [!NOTE]
> In the `villager_v2` example, a component group has been set up for each variant for the villager entity. Here the `skin_id` is being set for the first texture

```json
"minecraft:skin_id": {
          "value": 1
        }
```

## Vanilla entities using `minecraft:skin_id`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
