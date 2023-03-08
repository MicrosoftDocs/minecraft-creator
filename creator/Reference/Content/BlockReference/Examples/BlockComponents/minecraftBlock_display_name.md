---
author: mammerla
ms.author: v-jillheaden
title: Block Documentation - minecraft:display_name
ms.prod: gaming
---

# Block Documentation - minecraft:display_name

`minecraft:display_name` is a `String` component that specifies the language file key that maps to what text will be displayed when you hover over the block in your inventory and hotbar. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this component is omitted, the name of the block will be used as the display name.

## Default Value of the Component

This component is specified as a `Localization String`. If this component is omitted, the default value for this component is the name of the block.

## Example

```json
"minecraft:display_name": "customBlock"
```
