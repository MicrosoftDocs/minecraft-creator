<big>Version: 1.18.0.2</big>

[[_TOC_]]

# Recipes

Recipes are setup in Json files under the behavior_packs /'name of pack'/ recipes directory.
Recipe JSON files have different structures dependent on their type.
There are 3 types of recipes, Furnace, Shaped and Shapeless.



## Furnace Recipe

Represents a furnace recipe for a furnace.'Input' items will burn and transform into items specified in 'output'..



**Parameters**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| item names| input| Items used as input for the furnace recipe. |
| item names| output| Items used as output for the furnace recipe. |


**Furnace Recipe Example:**

****
```
{
"format_version": "1.12",
"minecraft:recipe_furnace": {
"description": {
"identifier": "minecraft:furnace_beef"
},
"tags": ["furnace", "smoker", "campfire", "soul_campfire"],
"input": {
"item": "minecraft:beef",
"data": 0,
"count": 4
},
"output ": "minecraft:cooked_beef"
}
}
```



## Potion Brewing Container Recipe

Represents a Potion Brewing Container Recipe..



**Parameters**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| potion| input| input potion used in the brewing container recipe. |
| potion| output| output potion from the brewing container recipe. |
| item| reagent| item used in the brewing container recipe with the input potion. |
| array of strings| tags| Item used in a Brewing Container Recipe. |


**Potion Brewing Container Recipe Example:**

****
```
{
"format_version": "1.12",
"minecraft:recipe_brewing_container": {
"description": {
	"identifier": "minecraft:brew_potion_sulphur"
	},
 
 "tags": [ "brewing_stand" ],
 
	"input": "minecraft:potion",
	"reagent": "minecraft:gunpowder",
	"output": "minecraft:splash_potion",
 
	}
}
```



## Potion Brewing Mix

Represents a Potion Brewing Mix..



**Parameters**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| potion| input| input potion used on the brewing stand. |
| potion| output| output potion from mixing the input potion with the reagent on the brewing stand. |
| item| reagent| item used to mix with the input potion. |
| array of strings| tags| Item used to make a brewing mix. |


**Potion Brewing Mix Example:**

****
```
{
"format_version": "1.12",
"minecraft:recipe_brewing_mix": {
"description": {
	"identifier": "minecraft:brew_awkward_blaze_powder"
	},
 
 "tags": [ "brewing_stand" ],
 
	"input": "minecraft:potion_type:awkward",
	"reagent": "minecraft:blaze_powder",
	"output": "minecraft:potion_type:strength",
 
	}
}
```



## Shaped Recipe

Represents a shaped crafting recipe for a crafting table.
The key used in the pattern may be any single character except the 'space' character, which is reserved for empty slots in a recipe..



**Parameters**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| array of key and item pairs| key| patten key character mapped to item names. |
| array of strings| pattern| characters that represent a pattern to be defined by keys. |
| integer| priority| Item used as output for the furnace recipe. |
| array of item names| result| when input items match the pattern then these items are the result. |
| array of strings| tags| Item used as input for the furnace recipe. |


**Shaped Recipe Example:**

****
```
{
"format_version": "1.12",
"minecraft:recipe_shaped": {
"description": {
	"identifier": "minecraft:acacia_boat"
	},
"tags": [ "crafting_table" ],
"pattern": [
				"#P#",
				"###"
				],
	"key": {
		"P": {
			"item": "minecraft:wooden_shovel"
		},
		"#": {
			"item": "minecraft:planks",
			"data": 4
			}
		},
"result": {
		"item": "minecraft:boat",
		"data": 4
		}
	}
}
```



## Shapeless Recipe

Represents a shapeless crafting recipe..



**Parameters**

| Type| Name| Description |
|:-----------:|:-----------:|:-----------:|
| array of item names| ingredients| items used as input (without a shape) for the recipe. |
| integer| priority| Item used as output for the furnace recipe. |
| array of item names| result| these items are the result. |
| array of strings| tags| Item used as input for the furnace recipe. |


**Shapeless Recipe Example:**

****
```
{
"format_version": "1.12",
"minecraft:recipe_shapeless": {
"description": {
	"identifier": "minecraft:firecharge_coal_sulphur"
	},
 "priority": 0,
 "ingredients": {
	    "item": "minecraft:fireball",
	    "data": 0,
	    "count": 4
 },
"result": {
	    "item": "minecraft:blaze_powder",
	    "data": 4
	    }
	}
}
```

