---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:food"
description: "Describes the minecraft:food item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:food

Sets the item as a food component, allowing it to be edible to the player.

> [!Note]
> This item requires a format version of at least 1.20.30.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Use Modifiers (minecraft:use_modifiers)](./minecraft_use_modifiers.md)
> 

## Item Food Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| can_always_eat | false | Boolean true/false | If true you can always eat this item (even when not hungry). Default is set to false. | 
| nutrition | 0 | Integer number | Value that is added to the entity's nutrition when the item is used. Default is set to 0. | 
| saturation_modifier | 0.6000000238418579 | Decimal number | saturation_modifier is used in this formula: (nutrition * saturation_modifier * 2) when applying the saturation buff. Default is set to 0.6. | 
| using_converts_to | {} | String | When used, converts to the item specified by the string in this field. Default does not convert item. | 
| using_converts_to (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| remove_effects | *not set* | Array of strings | Deprecated - no longer in use. | 

### remove_effects

Deprecated - no longer in use. Array of effect names to remove when eating this food. This property was deprecated and is no longer supported in newer versions. This property no longer works after format versions of at least 1.20.0. This property was available in versions 1.14 through 1.18 but has been removed in later versions.


## Samples


```json
"minecraft:food": {
  "can_always_eat": false,
  "nutrition": 3,
  "saturation_modifier": 0.6,
  "using_converts_to": "bowl"
}
```
