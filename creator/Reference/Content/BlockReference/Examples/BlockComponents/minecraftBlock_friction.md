---
author: mammerla
ms.author: mikeam
title: Block Documentation - minecraft:friction
ms.prod: gaming
---

# Block Documentation - minecraft:friction

`minecraft:friction` is a `Decimal` component that describes the friction for this block in a range of `0.0` to `0.9`. Friction affects an entity's movement speed when it travels on the block. Greater value results in more friction. Wood and dirt are set to a friction of `0.4` while ice is set to `0.02`.

## Default Value of the Component

This component is specified as a `Decimal`. If this component is omitted, the default value for this component is `0.4` (the same as regular ground friction in Vanilla Minecraft).

## Example

```json
"minecraft:friction": 0.6
```
