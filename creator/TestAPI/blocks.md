Version: 1.16.220.2

# Blocks

## Block Components

<table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:3;">
<tr> <th style="border-style:solid; border-width:3;">Name</th> <th style="border-style:solid; border-width:3;">Type</th> <th style="border-style:solid; border-width:3;">Default Value</th> <th style="border-style:solid; border-width:3;">Description</th> </tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:block_light_absorption</td>
<td style="border-style:solid; border-width:3; padding:7px">Integer</td>
<td style="border-style:solid; border-width:3; padding:7px">0</td>
<td style="border-style:solid; border-width:3; padding:7px">The amount of light this block will absorb.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:block_light_emission</td>
<td style="border-style:solid; border-width:3; padding:7px">Decimal</td>
<td style="border-style:solid; border-width:3; padding:7px">0.0</td>
<td style="border-style:solid; border-width:3; padding:7px">The amount of light this block will emit in a range [0.0, 1.0].</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:breakonpush</td>
<td style="border-style:solid; border-width:3; padding:7px">Boolean</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">When pushed by a piston the block breaks</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:breathability</td>
<td style="border-style:solid; border-width:3; padding:7px">Enumerator</td>
<td style="border-style:solid; border-width:3; padding:7px">solid</td>
<td style="border-style:solid; border-width:3; padding:7px">Property describing the breathability of this block and whether it is treated as a solid or as air.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:destroy_time</td>
<td style="border-style:solid; border-width:3; padding:7px">Decimal</td>
<td style="border-style:solid; border-width:3; padding:7px">0.0</td>
<td style="border-style:solid; border-width:3; padding:7px">Sets the destroy time property for the block. Greater numbers result in greater mining times.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:display_name</td>
<td style="border-style:solid; border-width:3; padding:7px">String</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">Specifies the display name id for the block.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:entity_collision</td>
<td style="border-style:solid; border-width:3; padding:7px">Boolean</td>
<td style="border-style:solid; border-width:3; padding:7px">false</td>
<td style="border-style:solid; border-width:3; padding:7px">Can only be set to false, it disables the collision of the block with entities</br><table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:2;">
<tr> <th style="border-style:solid; border-width:2;">Name</th> <th style="border-style:solid; border-width:2;">Type</th> <th style="border-style:solid; border-width:2;">Default Value</th> <th style="border-style:solid; border-width:2;">Description</th> </tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">origin</td>
<td style="border-style:solid; border-width:2; padding:8px">Array</td>
<td style="border-style:solid; border-width:2; padding:8px">[-8.0, 0.0, -8.0]</td>
<td style="border-style:solid; border-width:2; padding:8px">Minimal position Bounds of the collision box</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">size</td>
<td style="border-style:solid; border-width:2; padding:8px">Array</td>
<td style="border-style:solid; border-width:2; padding:8px">[16.0, 16.0, 16.0]</td>
<td style="border-style:solid; border-width:2; padding:8px">Size of each side of the box of the component</br></td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:explosion_resistance</td>
<td style="border-style:solid; border-width:3; padding:7px">Decimal</td>
<td style="border-style:solid; border-width:3; padding:7px">0.0</td>
<td style="border-style:solid; border-width:3; padding:7px">Sets the explosion resistance for this block.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:flammable</td>
<td style="border-style:solid; border-width:3; padding:7px">JSON Object</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">Describes the flammable properties for this block.</br><table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:2;">
<tr> <th style="border-style:solid; border-width:2;">Name</th> <th style="border-style:solid; border-width:2;">Type</th> <th style="border-style:solid; border-width:2;">Default Value</th> <th style="border-style:solid; border-width:2;">Description</th> </tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">burn_odds</td>
<td style="border-style:solid; border-width:2; padding:8px">Integer</td>
<td style="border-style:solid; border-width:2; padding:8px">0</td>
<td style="border-style:solid; border-width:2; padding:8px">How likely the block will be destroyed by flames when on fire.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">flame_odds</td>
<td style="border-style:solid; border-width:2; padding:8px">Integer</td>
<td style="border-style:solid; border-width:2; padding:8px">0</td>
<td style="border-style:solid; border-width:2; padding:8px">How likely the block will catch flame when next to a fire.</br></td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:friction</td>
<td style="border-style:solid; border-width:3; padding:7px">Decimal</td>
<td style="border-style:solid; border-width:3; padding:7px">0.1</td>
<td style="border-style:solid; border-width:3; padding:7px">Property describing the friction for this block. Friction effects an entities movements when it walks on the block.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:geometry</td>
<td style="border-style:solid; border-width:3; padding:7px">String</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">The geometry definition name to use.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:immovable</td>
<td style="border-style:solid; border-width:3; padding:7px">Boolean</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">An Immovable block cannot be pushed by pistons</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:map_color</td>
<td style="border-style:solid; border-width:3; padding:7px">String</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">A color represented as a hex value. This will be the color rendered to a map.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:material_instances</td>
<td style="border-style:solid; border-width:3; padding:7px">JSON Object</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">Maps face or material_instance names in a geometry file to an actual material instance. Material instance can either be a full material instance or a name to another already defined instance</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:onlypistonpush</td>
<td style="border-style:solid; border-width:3; padding:7px">Boolean</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">Blocks with those components won't stick to stickyPistons</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:pick_collision</td>
<td style="border-style:solid; border-width:3; padding:7px">Boolean</td>
<td style="border-style:solid; border-width:3; padding:7px">false</td>
<td style="border-style:solid; border-width:3; padding:7px">Can only be set to false, it disables the collision of the block with entities</br><table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:2;">
<tr> <th style="border-style:solid; border-width:2;">Name</th> <th style="border-style:solid; border-width:2;">Type</th> <th style="border-style:solid; border-width:2;">Default Value</th> <th style="border-style:solid; border-width:2;">Description</th> </tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">origin</td>
<td style="border-style:solid; border-width:2; padding:8px">Array</td>
<td style="border-style:solid; border-width:2; padding:8px">[-8.0, 0.0, -8.0]</td>
<td style="border-style:solid; border-width:2; padding:8px">Minimal position Bounds of the collision box</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">size</td>
<td style="border-style:solid; border-width:2; padding:8px">Array</td>
<td style="border-style:solid; border-width:2; padding:8px">[16.0, 16.0, 16.0]</td>
<td style="border-style:solid; border-width:2; padding:8px">Size of each side of the box of the component</br></td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:placement_filter</td>
<td style="border-style:solid; border-width:3; padding:7px">JSON Object</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">Sets rules for under what conditions the block can be placed/survive</br><h3><p id="conditions">conditions</p></h3>

List of conditions where the block can be placed/survive</br><h4></h4>

<table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:1;">
<tr> <th style="border-style:solid; border-width:1;">Name</th> <th style="border-style:solid; border-width:1;">Type</th> <th style="border-style:solid; border-width:1;">Default Value</th> <th style="border-style:solid; border-width:1;">Description</th> </tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">allowed_faces</td>
<td style="border-style:solid; border-width:1; padding:9px">Array</td>
<td style="border-style:solid; border-width:1; padding:9px"></td>
<td style="border-style:solid; border-width:1; padding:9px">List of any of the following strings: up, down, north, south, east, west, side, all</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">block_filter</td>
<td style="border-style:solid; border-width:1; padding:9px">Array</td>
<td style="border-style:solid; border-width:1; padding:9px"></td>
<td style="border-style:solid; border-width:1; padding:9px">List of blocks (can use tags to specify them) that this block can be placed against in the allowed_faces direction</br></td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:preventsjumping</td>
<td style="border-style:solid; border-width:3; padding:7px">Boolean</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">this component makes it so actors can't jump when walking on this block</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:random_ticking</td>
<td style="border-style:solid; border-width:3; padding:7px">JSON Object</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">Describes the component that will trigger an even at a regular interval between two values</br><table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:2;">
<tr> <th style="border-style:solid; border-width:2;">Name</th> <th style="border-style:solid; border-width:2;">Type</th> <th style="border-style:solid; border-width:2;">Default Value</th> <th style="border-style:solid; border-width:2;">Description</th> </tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">Trigger</td>
<td style="border-style:solid; border-width:2; padding:8px"></td>
<td style="border-style:solid; border-width:2; padding:8px"></td>
<td style="border-style:solid; border-width:2; padding:8px">on_tick</br><table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:1;">
<tr> <th style="border-style:solid; border-width:1;">Name</th> <th style="border-style:solid; border-width:1;">Type</th> <th style="border-style:solid; border-width:1;">Default Value</th> <th style="border-style:solid; border-width:1;">Description</th> </tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">condition</td>
<td style="border-style:solid; border-width:1; padding:9px">String</td>
<td style="border-style:solid; border-width:1; padding:9px">1</td>
<td style="border-style:solid; border-width:1; padding:9px">The condition of event to be executed on the block.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">event</td>
<td style="border-style:solid; border-width:1; padding:9px">String</td>
<td style="border-style:solid; border-width:1; padding:9px">set_block_property</td>
<td style="border-style:solid; border-width:1; padding:9px">The type of event executed on the block.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">range</td>
<td style="border-style:solid; border-width:1; padding:9px">Array</td>
<td style="border-style:solid; border-width:1; padding:9px">[10, 10]</td>
<td style="border-style:solid; border-width:1; padding:9px">The Range between which the component will trigger his event.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">target</td>
<td style="border-style:solid; border-width:1; padding:9px">String</td>
<td style="border-style:solid; border-width:1; padding:9px">self</td>
<td style="border-style:solid; border-width:1; padding:9px">The target of event executed on the block.</br></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:rotation</td>
<td style="border-style:solid; border-width:3; padding:7px">Vector [a, b, c]</td>
<td style="border-style:solid; border-width:3; padding:7px">rotation[0, 0, 0]</td>
<td style="border-style:solid; border-width:3; padding:7px">This is the block's rotation around the center of the cube in degrees. The rotation order is x-y-z.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:ticking</td>
<td style="border-style:solid; border-width:3; padding:7px">JSON Object</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">Describes the component that will trigger an even at a regular interval between two values</br><table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:2;">
<tr> <th style="border-style:solid; border-width:2;">Name</th> <th style="border-style:solid; border-width:2;">Type</th> <th style="border-style:solid; border-width:2;">Default Value</th> <th style="border-style:solid; border-width:2;">Description</th> </tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">Trigger</td>
<td style="border-style:solid; border-width:2; padding:8px"></td>
<td style="border-style:solid; border-width:2; padding:8px"></td>
<td style="border-style:solid; border-width:2; padding:8px">on_tick</br><table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:1;">
<tr> <th style="border-style:solid; border-width:1;">Name</th> <th style="border-style:solid; border-width:1;">Type</th> <th style="border-style:solid; border-width:1;">Default Value</th> <th style="border-style:solid; border-width:1;">Description</th> </tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">condition</td>
<td style="border-style:solid; border-width:1; padding:9px">String</td>
<td style="border-style:solid; border-width:1; padding:9px">1</td>
<td style="border-style:solid; border-width:1; padding:9px">The condition of event to be executed on the block.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">event</td>
<td style="border-style:solid; border-width:1; padding:9px">String</td>
<td style="border-style:solid; border-width:1; padding:9px">set_block_property</td>
<td style="border-style:solid; border-width:1; padding:9px">The type of event executed on the block.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">range</td>
<td style="border-style:solid; border-width:1; padding:9px">Array</td>
<td style="border-style:solid; border-width:1; padding:9px">[10, 10]</td>
<td style="border-style:solid; border-width:1; padding:9px">The Range between which the component will trigger his event.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:1; padding:9px">target</td>
<td style="border-style:solid; border-width:1; padding:9px">String</td>
<td style="border-style:solid; border-width:1; padding:9px">self</td>
<td style="border-style:solid; border-width:1; padding:9px">The target of event executed on the block.</br></td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">looping</td>
<td style="border-style:solid; border-width:2; padding:8px">Boolean</td>
<td style="border-style:solid; border-width:2; padding:8px">true</td>
<td style="border-style:solid; border-width:2; padding:8px">Does the event loop</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:2; padding:8px">range</td>
<td style="border-style:solid; border-width:2; padding:8px">Array</td>
<td style="border-style:solid; border-width:2; padding:8px">[10, 10]</td>
<td style="border-style:solid; border-width:2; padding:8px">The Range between which the component will trigger his event.</br></td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:unit_cube</td>
<td style="border-style:solid; border-width:3; padding:7px">String</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">Specifies that a unit cube is to be used with tessellation.</br></td>
</tr>
<tr>
<td style="border-style:solid; border-width:3; padding:7px">minecraft:unwalkable</td>
<td style="border-style:solid; border-width:3; padding:7px">Boolean</td>
<td style="border-style:solid; border-width:3; padding:7px"></td>
<td style="border-style:solid; border-width:3; padding:7px">this component sets a block as unwalkable. Most mobs will not try to jump over it if the value is set to true</br></td>
</tr>
</table>

## Block Definition Properties

These properties are part of the Block Definition. This helps the system determine how to parse and initialize this block.

| Type| Name| Default Value| Description |
|:-----------|:-----------|:-----------|:-----------|
| String| format_version| | Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it. |

### Code Example

**Example**
```json
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
|:-----------|:-----------|:-----------|:-----------|
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
| MoLang| property| | Block property to set on the block. |


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


### Code Example

**Event Response Example**
```json

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


