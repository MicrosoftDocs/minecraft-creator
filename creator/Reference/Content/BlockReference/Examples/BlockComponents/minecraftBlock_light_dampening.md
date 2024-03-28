---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:light_dampening
description: "A reference document detailing the 'light_dampening' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:light_dampening

`minecraft:light_dampening` is an `Integer` component that sets the amount that light will be dampened when it passes through the block, in a range (0-15). Higher value means the light will be dampened more.

## Default Value of the Component

This component is specified as an `Integer`. If this component is omitted, the default value for this component is `15` (a full block that doesn't let any light through).

## Example

```json
"minecraft:light_dampening": 7
```
