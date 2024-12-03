---
author: mammerla
ms.author: mikeam
title: Client Biomes Documentation - fog appearance
description: "A reference document detailing the 'fog appeareance' client biome component"
ms.service: minecraft-bedrock-edition
ms.date: 12/03/2024 #Required; mm/dd/yyyy format.
---

# Client Biomes Documentation - fog_appearance

Sets the fog settings used during rendering. Biomes without this component will have default fog settings.

## Attributes

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|fog_identifier| String| Optional| Identifier of fog definition to use.|

## Example

```json
      "minecraft:fog_appearance": {
        "fog_identifier": "minecraft:fog_the_end"
      }
```      