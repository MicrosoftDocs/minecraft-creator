---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:armor
ms.prod: gaming
---

# Item Documentation - minecraft:armor

`minecraft:armor` determines the amount of protection you have in your armor item.

>[!IMPORTANT]
> `minecraft:armor` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)
.
## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|Protection|*not set* |Integer |How much protection does the armor item have.|
|texture_type |*not set*  | String | Texture Type to apply for the armor.|

### texture_type

Listed below are the accepted values that can be used for texture_typeL

- none
- leather
- chain
- iron
- diamond
- gold
- elytra
- turtle
- netherite

> [!NOTE]
> When making horse armor, you are restricted to leather, iron, gold, or diamond.

## Example

```json
"minecraft:armor":{
    "protection": 5,
    "texture_type" : "diamond"
}
```
