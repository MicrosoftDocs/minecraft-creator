---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:entity_transformed
description: "A reference document detailing the 'entity_transformed' entity event"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:entity_transformed

`minecraft:entity_transformed` triggers an event call on an entity that transforms into another entity.

## Parameters

## Example

```json
"minecraft:entity_transformed":{
}
```

## Vanilla entities examples

### zombie_pigman

```json
"minecraft:entity_transformed": {
        "sequence": [
          // Transform baby pig to baby zombie pigman
          {
            "filters": {
              "test": "has_component",
              "subject": "other",
              "value": "minecraft:is_baby"
            },
            "add": {
              "component_groups": [
                "minecraft:pig_zombie_baby",
                "minecraft:pig_zombie_calm"
              ]
            }
          },
          // Transform adult pig to adult zombie pigman
          {
            "filters": {
              "test": "has_component",
              "subject": "other",
              "operator": "!=",
              "value": "minecraft:is_baby"
            },
            "add": {
              "component_groups": [
                "minecraft:pig_zombie_adult",
                "minecraft:pig_zombie_calm"
              ]
            }
          }
        ]
      }
```

## Vanilla entities using `minecraft:entity_transformed`

- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
