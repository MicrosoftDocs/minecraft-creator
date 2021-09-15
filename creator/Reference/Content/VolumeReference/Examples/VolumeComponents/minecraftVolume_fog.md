---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Volume Documentation - minecraft:fog
ms.prod: gaming
---

# Volume Documentation -  minecraft:fog

`minecraft:fog` is a Volume Component that is defined by two parameters. Each item has the following properties:

| Name| Default Value| Type| Description |
|:----------|:----------|:----------|:----------|
| fog_identifier| *not set*| String| The identifier of a fog definition. Note that you will not receive any feedback if the definition does not exist. |
| priority| INT_MAX| Integer| The priority for this fog definition setting. Smaller numbers have higher priority. Fogs with equal priority will be combined together. |

## Extra Parameters

`minecraft:fog` does not use any extra parameters.

## Example

```json
"minecraft:fog": {
  "fog_identifier": "minecraft:fog_savanna",
  "priority": 1
}
```
