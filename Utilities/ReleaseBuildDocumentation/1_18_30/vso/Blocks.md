<big>Version: 1.18.30.4</big>

[[_TOC_]]

# Blocks



## Block Components

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| minecraft:aim_collision| true| If set to false it disables the collision of the block with entities
Experimental toggles required: Holiday Creator Features<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Array| origin| [-8.0, 0.0, -8.0]| Minimal position Bounds of the collision box. Origin can't be smaller than (-8, 0, -8) and can't be more than (8, 16, 8). |
| Array| size| [16.0, 16.0, 16.0]| Size of each side of the box of the component. When added to origin it can't make origin smaller than (-8, 0, -8) or more than (0, 16, 8). |


 |
| Boolean / JSON Object| minecraft:block_collision| | Describes the collision of the block with entities and actors. If set to false, it disables the collision of the block with entities. An origin of [-8.0, 0.0, -8.0] with a size of [16, 16, 16] is a unit cube.
Experimental toggles required: Holiday Creator Features<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Array| origin| [-8.0, 0.0, -8.0]| Minimal position Bounds of the collision box |
| Array| size| [16.0, 16.0, 16.0]| Size of each side of the box of the component |


 |
| Decimal| minecraft:block_light_emission| 0.0| The amount of light this block will emit in a range [0.0, 1.0]. |
| Integer| minecraft:block_light_filter| 0| The amount of light this block will filter out. Higher value means more light will be filtered out (0 - 15). |
| Enumerator| minecraft:breathability| solid| The breathing type of this block that affects the breathing state of mobs when they have their breathing points inside this block. Available values: solid, air
Experimental toggles required: Holiday Creator Features |
| JSON Object| minecraft:crafting_table| | Describes the component of a custom crafting table. This component supports only "recipe_shaped" and "recipe_shapeless" typed recipes and not others like "recipe_furnace" or "recipe_brewing_mix". If there are two recipes for one item, the recipe book will pick the first that was parsed. If two input recipes are the same, crafting may assert and the resulting item may vary.
Experimental toggles required: Holiday Creator Features<br/>

crafting_tags

Defines the tags recipes should define to be crafted on this table. Limited to 64 tags.



custom_description

Defines the language file key that maps what text will be displayed in the UI of this table. If not specified, the name of the block will be used.

 |
| String| minecraft:creative_category| | Specifies the creative group for the block. |
| Decimal| minecraft:destroy_time| 0.0| Sets the destroy time property for the block. Greater numbers result in greater mining times. Time is measured in seconds with base equipment. |
| String| minecraft:display_name| | Specifies the language file key that maps to what text will be displayed when you hover over the block.
Experimental toggles required: Holiday Creator Features |
| Decimal| minecraft:explosion_resistance| 0.0| Sets the explosion resistance for this block. |
| JSON Object| minecraft:flammable| | Describes the flammable properties for this block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| burn_odds| 0| How likely the block will be destroyed by flames when on fire. Value must be greater than or equal to 0. |
| Integer| flame_odds| 0| How likely the block will catch flame when next to a fire. Value must be greater than or equal to 0. |


 |
| Decimal| minecraft:friction| 0.6| Property describing the friction for this block in a range of [0.1, 1.0]. Friction affects an entity's movement speed when it travels on the block. Greater value results in less friction. |
| String| minecraft:geometry| | The geometry description identifier to use, this identifier must match an existing geometry identifier in any of the currently loaded resource packs.
Experimental toggles required: Holiday Creator Features |
| String| minecraft:loot| | The path to the loot table, relative to the behavior pack. |
| String| minecraft:map_color| #RRGGBB| Sets the color of the block when rendered to a map. The color is represented as a hex value in the format "#RRGGBB". May also be expressed as an array of [R, G, B] from 0 to 255. |
| JSON Object| minecraft:material_instances| | The material instances for a block.
Maps face or material_instance names in a geometry file to an actual material instance. Material instance can either be a full material instance or a name to another already defined instance.
Experimental toggles required: Holiday Creator Features<br/>

Material Instance

A material instance definition to map to a material instance in a geometry file. The material instance '*' will be used for any materials that don't have a match.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| ambient_occlusion| true| Should this material have ambient occlusion applied when lighting. |
| Boolean| face_dimming| true| Should this material be dimmed by the direction it's facing. |
| String| render_method| opaque| The render method to use. Must be one of 'opaque', 'double_sided', 'blend', or 'alpha_test'. |
| String| texture| | Texture name for the material. |


 |
| JSON Object| minecraft:part_visibility| | Maps bone names in a geometry file to a condition that turns their rendering on/off. The condition should be a Molang query that uses block properties to determine true/falseSupported queries include 'has_block_property', 'block_property', and other queries that can evaluate without knowledge of the block's in-game positional or player affected data.
Experimental toggles required: Upcoming Creator Features |
| JSON Object| minecraft:placement_filter| | Sets rules for under what conditions the block can be placed/survive<br/>

conditions

List of conditions where the block can be placed/survive

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Array| allowed_faces| | List of any of the following strings: up, down, north, south, east, west, side, all |
| Array| block_filter| | List of blocks (can use tags to specify them) that this block can be placed against in the allowed_faces direction |


 |
| JSON Object| minecraft:random_ticking| | Describes the component that will trigger an even at a regular interval between two values<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Trigger| on_tick| | The event that will be triggered on ticks<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| condition| 1| The condition of event to be executed on the block. |
| String| event| set_block_property| The type of event executed on the block. |
| Array| range| [10, 10]| The Range between which the component will trigger his event. |
| String| target| self| The target of event executed on the block. |


 |


 |
| Vector [a, b, c]| minecraft:rotation| rotation[0, 0, 0]| This is the block's rotation around the center of the cube in degrees. The rotation order is x-y-z. |
| JSON Object| minecraft:ticking| | Describes the component that will trigger an even at a regular interval between two values<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| looping| true| Does the event loop |
| Trigger| on_tick| | The event that will be triggered on ticks<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| condition| 1| The condition of event to be executed on the block. |
| String| event| set_block_property| The type of event executed on the block. |
| Array| range| [10, 10]| The Range between which the component will trigger his event. |
| String| target| self| The target of event executed on the block. |


 |
| Array| range| [10, 10]| The Range between which the component will trigger his event. |


 |
| JSON Object| minecraft:unit_cube| | Specifies that a unit cube is to be used with tessellation.
Experimental toggles required: Holiday Creator Features |
| Boolean| minecraft:unwalkable| false| Sets the block as unwalkable. Mobs would not attempt to path over top of it when the value is set to true. |




## Block Definition Properties

These properties are part of the Block Definition. This helps the system determine how to parse and initialize this block.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| format_version| | Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it. |


**Code Example**

**Example**
```
{
  "format_version": "1.16.0",
  "minecraft:block": {
    "description": {
      "identifier": "design:lavenderstone"
    },
    "components": {
      "minecraft:loot": "loot_tables/chests/simple_dungeon.json",
      "minecraft:destroy_time": 4.0,
      "minecraft:friction": 0.6,
      "minecraft:map_color": "#00ff00",
      "minecraft:flammable": {
        "flame_odds": 50,
        "burn_odds": 0
	  },
      "minecraft:block_light_emission": 1.0
    }
  }
}
```



## Block Description Properties

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| identifier| | The identifier for this block. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla block. |




## Block Event Responses

Event responses for block trigger components.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| add_mob_effect| | Apply mob effect to target.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| amplifier| 0| The amplifier for the mob effect. |
| Decimal| duration| 0.0| The duration of the mob effect. |
| String| effect| | The mob effect to apply. |
| Minecraft Filter| target| self| The target context to execute against. |


 |
| JSON Object| damage| | Deals damage to the target.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| amount| 0| The amount of damage to deal. |
| Integer| mob_amount| 0| The amount of damage to deal if held by a mob. |
| Minecraft Filter| target| self| The target context to execute against. |
| String| type| | The type of damage to deal. |


 |
| JSON Object| decrement_stack| | Decrement item stack. |
| JSON Object| die| | Kill target. If target is self and this is run from a block then destroy the block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| target| self| The target context to execute against. |


 |
| JSON Object| play_effect| | Spawns a particle effect relative to target position.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| data| 0| Particle data value. |
| String| effect| | The name of the particle effect to create. |
| Minecraft Filter| target| self| The target context to execute against. |


 |
| JSON Object| play_sound| | Play a sound relative to target position.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| sound| | The name of the sound to play. |
| Minecraft Filter| target| self| The target context to execute against. |


 |
| JSON Object| remove_mob_effect| | Removes mob effect from target.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| effect| | The mob effect to remove. Use 'all' to remove all mob effects from target. |
| Minecraft Filter| target| self| The target context to execute against. |


 |
| JSON Object| run_command| | Triggers a slash command or a list of slash commands.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| command| | Slash command to run. |
| Array| command array| | List of slash commands to run. |
| Minecraft Filter| target| self| The target context to execute against. |


 |
| JSON Object| set_block| | Sets this block to another block type.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| block_type| | The type of block to set. |


 |
| JSON Object| set_block_at_pos| | Sets a block relative to this block to another block type.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Vector [a, b, c]| block_offset| [0.0, 0.0, 0.0]| The offset from the block's center. |
| String| block_type| | The type of block to set. |


 |
| JSON Object| set_block_property| | Sets a block property on this block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Molang| property| | Block property to set on the block. |


 |
| JSON Object| spawn_loot| | Spawn loot from block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| table| | File path, relative to the Behavior Pack's path, to the loot table file. |


 |
| JSON Object| swing| | Event causes the actor to swing. |
| JSON Object| teleport| | Teleport target randomly around destination point.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_water| true| Determines if the teleport avoids putting the target in water. |
| Vector [a, b, c]| destination| [0.0, 0.0, 0.0]| Origin destination of the teleport. |
| Boolean| land_on_block| true| Determines if the teleport places the target on a block. |
| Vector [a, b, c]| max_range| [8.0, 8.0, 8.0]| Max range the target can teleport relative to the origin destination. |
| Minecraft Filter| target| self| The target context to execute against. |


 |
| JSON Object| transform_item| | Transforms item into another item.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| transform| | Name of the item it should transform into |


 |


**Code Example**

**Event Response Example**
```

		"minecraft:block": {
			"description": {
				"identifier": "test:on_interact_change_state_block",
				"properties": {
					"minecraft:direction": {
					}
				}
			},
			"components": {
				"minecraft:on_interact": {
					"event": "test_event"
				}
			},
			"events": {
				"test_event": {
					"set_block_property": {
						"minecraft:direction": "1"
					}
				}
			}
		}
```



## Block Trigger Components

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| minecraft:on_fall_on| | Describes event for this block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| condition| | The condition of event to be executed on the block. |
| String| event| | The event executed on the block. |
| Decimal| min_fall_distance| 0.0| The minimum distance in blocks that an actor needs to fall to trigger this event. |
| String| target| self| The target of event executed on the block. |


 |
| JSON Object| minecraft:on_interact| | Describes event for this block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| condition| | The condition of event to be executed on the block. |
| String| event| | The event executed on the block. |
| String| target| self| The target of event executed on the block. |


 |
| JSON Object| minecraft:on_placed| | Describes event for this block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| condition| | The condition of event to be executed on the block. |
| String| event| | The event executed on the block. |
| String| target| self| The target of event executed on the block. |


 |
| JSON Object| minecraft:on_player_destroyed| | Describes event for this block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| condition| | The condition of event to be executed on the block. |
| String| event| | The event executed on the block. |
| String| target| self| The target of event executed on the block. |


 |
| JSON Object| minecraft:on_player_placing| | Describes event for this block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| condition| | The condition of event to be executed on the block. |
| String| event| | The event executed on the block. |
| String| target| self| The target of event executed on the block. |


 |
| JSON Object| minecraft:on_step_off| | Describes event for this block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| condition| | The condition of event to be executed on the block. |
| String| event| | The event executed on the block. |
| String| target| self| The target of event executed on the block. |


 |
| JSON Object| minecraft:on_step_on| | Describes event for this block.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| condition| | The condition of event to be executed on the block. |
| String| event| | The event executed on the block. |
| String| target| self| The target of event executed on the block. |


 |


