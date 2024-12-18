---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - tag
description: "A reference document detailing the 'tag' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - tag:

`tag:` is an empty JSON Object that defines a tag to be added to a block. 

The component has no body or parameters, it is simply a flag, and when the block is parsed it will be added to the block's tag list. 

Creators can use either [vanilla block tags](../VanillaBlockTags.md) or make their own with a proper namespace. 

## Example

```json
"tag:minecraft:is_pickaxe_item_destructible": {},
"tag:minecraft:diamond_tier_destructible": {},
"tag:example_namespace:custom_block_tag": {}
```
