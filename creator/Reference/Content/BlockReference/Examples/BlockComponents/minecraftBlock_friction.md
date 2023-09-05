---
author: JimSeaman42
ms.author: mikeam
title: Block Documentation - minecraft:friction
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:friction

`minecraft:friction` is a `Decimal` component that describes a block's friction in a range of `0.0` to `0.9`, where the higher the value the greater the friction. Friction affects an entity's movement speed when it travels on the block.

For context, wood and dirt are set to a friction of `0.4` while ice is set to `0.02`.

## Default Value

This component is specified as a `Decimal`. If this component is omitted, the default value for this component is `0.4` (the same as regular ground friction in Vanilla Minecraft).

## Example

```json
"minecraft:friction": 0.6
```
