---
author: mammerla
ms.author: mikeam
title: Item Documentation - minecraft:chargeable
description: "A reference document detailing the 'chargeable' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:chargeable

`minecraft:chargeable` allows an item to be used over a duration.

>[!IMPORTANT]
> `minecraft:chargeable` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|movement_modifier|*not set* |Float | Modifier value to scale the players movement speed when item is in use.|
|on_complete  |*not set* |JSON Object| Event trigger for when the item has completed its use duration.|

See [Custom Item Use Priority](../ItemUsePriority.md) for more information on use behavior.

See [Custom Item Use Priority](../ItemUsePriority.md) for more information on use behavior.

## Example

```json
"minecraft:chargeable":{
    "movement_modifier": 0.0
}
```
