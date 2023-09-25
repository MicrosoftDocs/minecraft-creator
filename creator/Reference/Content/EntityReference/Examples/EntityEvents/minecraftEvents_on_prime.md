---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:on_prime
description: "A reference document detailing the 'on_prime' entity event"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:on_prime

`minecraft:on_prime` triggers an event calls on an entity when the entity is set to explode.

## Example

```json
"minecraft:on_prime":{
}
```

## Vanilla entities examples

### tnt_minecart

```json
 "minecraft:on_prime": {
        "remove": {
          "component_groups": [
            "minecraft:inactive"
          ]
        },
        "add": {
          "component_groups": [
            "minecraft:primed_tnt"
          ]
        }
      }
```

## Vanilla entities using `minecraft:on_prime`

- [tnt_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)
