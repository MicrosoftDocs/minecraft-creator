---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:destructible_by_mining
description: "A reference document detailing the 'destructible_by_mining' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:destructible_by_mining

`minecraft:destructible_by_mining` is a `Boolean` or `JSON Object` component that describes the destructible by mining properties for this block. If set to `true`, the block will take the default number of seconds to destroy. If set to `false`, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.

## Default Value of the Component

This component can be specified as a `Boolean`. If this component is omitted, the default value for this component is `true`, which will give your block the default values for its parameters (it will take ZERO seconds to destroy the block by mining it).

## Parameters

| Name| Type | Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------|
| item_specific_speeds | Array | True | Optional array of objects to describe item-specific block destroy speeds. Each object contains an **`item`** ItemDescriptor and a **`destroy_speed`** float. **`destroy_speed`** is required and it is the speed applied while using the defined item. **`item`** is required and it is an ItemDescriptor filtering for the item used while mining. |
| seconds_to_destroy| Decimal | 0.0 | Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times. |

## Example (Boolean)

```json
"minecraft:destructible_by_mining": true
```

## Example (JSON Object)

```json
"minecraft:destructible_by_mining": { 
  "seconds_to_destroy": 10, 
  "item_specific_speeds": [ 
    { 
      "item": { "tags": "q.any_tag('minecraft:is_pickaxe', 'my_pack:custom_tool') " }, 
      "destroy_speed": 5.0 
    } 
  ] 
} 
```

```json
"minecraft:destructible_by_mining": {
	"seconds_to_destroy": 10,
	"item_specific_speeds": [
		{
			"item": { "tags": "q.any_tag('minecraft:is_pickaxe') " },
			"destroy_speed": 5.0
		}
	]
}
```

```json
"minecraft:destructible_by_mining": {
	"seconds_to_destroy": 10,
	"item_specific_speeds": [
		{
			"item": "minecraft:iron_pickaxe",
			"destroy_speed": 5.0
		},
		{
			"item": "minecraft:diamond_pickaxe",
			"destroy_speed": 2.0
		}
	]
}
```
