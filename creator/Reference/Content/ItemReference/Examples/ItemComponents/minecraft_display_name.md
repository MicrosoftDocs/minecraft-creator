---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:display_name
description: "A reference document detailing the 'display_name' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:display_name

`minecraft:display_name` sets the item display name within Minecraft: Bedrock Edition. This component may also be used to pull from the localization file by referencing a key from it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value|*not set* | String | Set the display name for an item.|

## Example

```json
"minecraft:display_name":{
    "value": "secret_weapon"
}
```

## Example Using Localization Key

```json
"minecraft:display_name":{
    "value": "item.snowball.name"
}
```
