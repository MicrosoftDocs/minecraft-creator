---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:tamemount
ms.prod: gaming
---

# Entity Documentation - minecraft:tamemount

`minecraft:tamemount` allows the Entity to be tamed by mounting it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| attempt_temper_mod| 5| Integer| The amount the entity's temper will increase when mounted. |
| autoRejectItems| *not set*| JSON Object| The list of items that, if carried while interacting with the entity, will anger it.|
| feed_items| *not set*| JSON Object| The list of items that can be used to increase the entity's temper and speed up the taming process.|
| feed_text| *not set*| String| The text that shows in the feeding interact button. |
| max_temper| 100| Integer| The maximum value for the entity's random starting temper. |
| min_temper| 0| Integer| The minimum value for the entity's random starting temper. |
| ride_text| *not set*| String| The text that shows in the riding interact button. |
| tame_event| *not set*| JSON Object | Event that triggers when the entity becomes tamed. |

### autoRejectItems

`autoRejectItems` is a JSON Object defined by one parameter. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| item| *not set*| String| Name of the item this entity dislikes and will cause it to get angry if used while untamed. |

### feed_items

`feed_items` is a JSON Object defined by one parameter. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| item| *not set*| String| Name of the item this entity likes and can be used to increase this entity's temper. |

## Example

```json
"minecraft:tamemount": {
    "min_temper": 0,
    "max_temper": 100,
    "feed_text": "action.interact.feed",
    "ride_text": "action.interact.mount",
    "feed_items": [
        {
            "item": "wheat",
            "temper_mod": 3
        }
    ],
    "auto_reject_items": [
        {
            "item": "horsearmorleather"
        }
    ],
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

## Vanilla entities examples

### horse

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/horse.json" range="99-151":::

## Vanilla entities using `minecraft:tamemount`

- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
