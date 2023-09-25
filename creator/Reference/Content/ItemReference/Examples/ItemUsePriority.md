---
author: JimSeaman42
ms.author: mikeam
title: Custom Item Use Priority
description: "A reference document detailing custom item use priority"
ms.service: minecraft-bedrock-edition
---

# Custom Item Use Priority

When using a custom item, there is a defined priority to how behaviors occur.

- **use on behaviors:** First, `minecraft:entity_placer` tries to place entities; next, `minecraft:block_placer` tries to place blocks.
- **use behaviors:** Components with set 'use' behaviors are initiated, such as `minecraft:food`, `minecraft:wearable`, `minecraft:shooter`, and `minecraft:throwable`.

Certain components have a 'dispensed' behavior. For these items, first `minecraft:projectile` attempts to shoot from the dispenser, and then `minecraft:entity_placer` tries to spawn entities.

> [!NOTE]
> Unexpected behavior may occur when items attempt to initiate multiple component behaviors.
