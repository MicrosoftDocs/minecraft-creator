<big>Version: 1.18.1.2</big>

[[_TOC_]]

# Client Entity Documentation

Client entity definitions are contained within a Resource Pack. 
To start, create a new folder and name it "entity" inside the root of the Resource Pack. In the entity folder create a JSON file and give it a name.The JSON file needs a format version and minecraft:client_entity information.

The minecraft:client_entity section contains the description for the entity. Under description there are a number of things that you can set about an entity. Generally, this file is defining what resources a mob requires and gives a friendly name to each, that the other definition files can use.

**Example client entity definitions JSON for the pig**
```
"format_version": "1.8.0",
  "minecraft:client_entity": {
     "description": {
       "identifier": "minecraft:pig",
       "min_engine_version": "1.8.0",
       "materials": { "default": "pig" },
       "textures": {
         "default": "textures/entity/pig/pig",
         "saddled": "textures/entity/pig/pig_saddle"
       },
       "geometry": {
         "default": "geometry.pig.v1.8"
       },
       "animations": {
         "setup": "animation.pig.setup",
         "walk": "animation.quadruped.walk",
         "look_at_target": "animation.common.look_at_target",
         "baby_transform": "animation.pig.baby_transform"
       },
       "animation_controllers": [
         { "setup": "controller.animation.pig.setup" },
         { "move": "controller.animation.pig.move" },
         { "baby": "controller.animation.pig.baby" }
       ],
       "render_controllers": [ "controller.render.pig" ],
       "locators": {
         "lead": { "head": [ 0.0, 14.0, -6.0 ] }
       },
       "spawn_egg": {
         "texture": "spawn_egg",
         "texture_index": 2
       }
     }
   }

```



## Spawn Egg

This sets the color or texture used for the entity Spawn Egg. There are 2 ways to do this. The first is to use the hex value for the base color and the overlay color.



When there are more than one texture associated with a texture name you can use an index to pick the one that you want. If no index is specified than it is assumed to be 0 and the first texture in the list is used.

**Example Spawn Egg specifying a texture**
```
"spawn_egg": {
  "texture": "spawn_egg", 
  "texture_index": 2
}
```

**Example Spawn Egg using hex value**
```
"spawn_egg": {
  "base_color": "#53443E",
  "overlay_color": "#2E6854"
}
```



## animation_controllers

Animation controllers decide which animations to play when. Each Controller contains a list of states that play one or more animations. Allows the player to assign names to reference the long names for animation controllers. Names are required and need to be unique from all other names in the animation controllers for that mob. Players can reference animation controllers from the vanilla Minecraft Resource Pack or create their own. Custom animation controllers should be in the animation_controllers folder at the root of the Resource Pack.



## animations

Allows the player to assign names to reference the long name for animations. These names are used by the animation controller JSON. Players can reference animations from the vanilla Minecraft Resource Pack or create their own. Custom animations should be in the animation folder at the root of the Resource Pack.



## enable_attachables

This determines if the entity can equip attachables when this is set to true. This allows the entity to render armor and weapons.

****
```
"enable_attachables": true
```



## hide_armor

This determines if the armor attached to an entity should be hidden when set to true. This overrides the rendering settings specified by 'enable_attachables'

****
```
"hide_armor": true
```



## identifier

The identifier is used to register the entity with the server. In the Client Entity Definitions JSON the identifier sets the appearance of the entity(materials, textures, geometry, etc.) The matching identifier in the Entity Behavior JSON in the Behavior Pack is what gives the entity its behaviors.



## locators

Locator offsets are specified in model space. An example of a locator is the "lead" locator used to specify where the lead will attach to graphically.

****
```
"locators": {
  "lead": { "head": [ 0.0, 14.0, -6.0 ] }
}
```



## materials, textures, animations

Players can set the materials, texture and geometry used for the entity in this section. Players can set one or more materials, textures, and geometries that can be used by the mob. Players must set user defined names for them. These names are used in the Render Controllers JSON. Players can reference materials, textures, and geometry from the vanilla Minecraft Resource Pack or create their own.  Custom materials, textures, and geometry should be in the corresponding folder at the root of the Resource Pack.



## min_engine_version

When present, players can set the min version needed to allow the JSON to be parsed. The version in the definition is compared to the engine version for which the top resource pack was built.If a definition's min_engine_version is newer than that pack's engine version then the definition is not parsed.
Multiple definition files may use the same identifier, in which case only one of those definitions will be loaded. The definition with the same or closest and not greater min_engine_version, as compared to the top resource pack's engine version, will be parsed; all other definitions with the same identifier will not be parsed.
This can be useful for continuing to support an older version of an entity, when an older resource pack is used at the top of the resource pack stack, while also supporting a newer version of the entity in all other cases.



## particle

Allows the player to assign a key to reference the long name for particles. When these are present, the particle is created when the entity is spawned. Keys are required and need to be unique from all other keys in the animation controllers. Players can reference particles from the vanilla Minecraft Resource Pack or create their own. Custom particles should be in the particle folder at the root of the Resource Pack.



## render_controllers

Specifies the names of render controllers. This name needs to match the name of a corresponding JSON located in the Render Controllers folder. Players can reference Render Controllers from the vanilla Minecraft Resource Pack or create their own. Custom Render Controllers should be in the textures folder at the root of the Resource Pack.



## scripts

Scripts allow players to use Molang to compute calculations once and store that value. This value than can be used over and over again without the need to constantly recompute the calculations. Scripts currently support pre - animation and scale.More script types will be added later.
-Pre-animation scripts are evaluated immediately before animations are processed.
-Scale sets the scale of the mob's geometry.


**Example pre-animation script for cod**
```
"scripts": {
  "pre_animation": [
    "variable.ZRot = !query.is_in_water ? Math.cos((query.time_stamp + global.frame_alpha) * 14.32) * 90 : 0.0;",
    "variable.AnimationAmountBlend = Math.lerp(variable.AnimationAmountPrev, variable.AnimationAmount, global.frame_alpha);"
  ]
},
```

**Example scale script for the bat**
```
"scripts": {
  "scale": "0.35"
},
```



# Data-Driven Spawning

Data-Driven spawning allows you to adjust the spawn conditions of mobs, including new mobs added to the game to spawn naturally in biomes, add / remove a mob's spawn egg to the creative inventory and set the mob's spawn egg, and add / remove a to the / summon command



## Spawn Rules



**Biome Tags**

Each biome in the game has one or more tags. These are used to determine what biomes mobs spawn in. Here is the list of Biome tags that can be used:

| Tag |
|:-----------:|
| animal |
| beach |
| birch |
| cold |
| dark_oak |
| deep |
| desert |
| edge |
| extreme_hills |
| flower_forest |
| forest |
| frozen |
| hills |
| ice |
| ice_plains |
| jungle |
| lakes |
| lukewarm |
| mega |
| mesa |
| monster |
| mooshroom_island |
| mountain |
| mutated |
| nether |
| ocean |
| plains |
| plateau |
| river |
| roofed |
| savanna |
| shore |
| stone |
| swamp |
| taiga |
| the_end |
| warm |




**Conditions**

Conditions contain different components that players can use to customize natural biome spawning.



Components

| Name| Description |
|:-----------:|:-----------:|
| minecraft:biome_filter| This component allows the players to specify which biomes the mob spawns in. Check below to see which Biome Tags exist, and what each biome is tagged as. |
| minecraft:brightness_filter| This component allows players to set the light level range that causes the mob to spawn.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| adjust_for_weather| false| This determines if weather can affect the light level conditions that cause the mob to spawn (e.g. Allowing hostile mobs to spawn during the day when it rains.) |
| Decimal| max| 15.0| This is the maximum light level value that allows the mob to spawn |
| Decimal| min| 0.0| This is the minimum light level value that allows the mob to spawn |


 |
| minecraft:density_limit| This component allows players to determine the density cap limits for the specified mob type.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| surface| | This is the maximum number of mobs of this type spawnable on the surface |
| Integer| underground| | This is the maximum number of mobs of this type spawnable underground |


 |
| minecraft:difficulty_filter| This component allows players determine what mobs spawn when certain difficulty levels are set.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| max| | This is the maximum difficulty level that a mob spawns |
| String| min| | This is the minimum difficulty level that a mob spawns |


 |
| minecraft:herd| This component allows players to determine the herd size of animals.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | This is an event that can be triggered from spawning |
| Decimal| event_skip_count| | This is the number of mobs spawned before the specified event is triggered |
| Decimal| max_size| | This is the maximum number of mobs that spawn in a herd |
| Decimal| min_size| | This is the minimum number of mobs that spawn in a herd |


 |
| minecraft:spawns_on_surface| This component allows the mob to spawn on the ground. Adding the component causes it to be true, removing it causes the mob to stop spawning on the surface. |
| minecraft:spawns_underwater| This component allows the mob to spawn underwater. Adding the component causes it to be true, removing it causes the mob to stop spawning underwater. |
| minecraft:weight| This component allows players to give a priority to how often that mob should spawn. Mobs with lower weight values have a higher chance to spawn than mobs with higher weight values.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| default| 0.0| This is the priority of the mob spawning |


 |




**Getting Started**

New Spawn Rules are contained within a Behavior Pack. To begin, create a new folder named "spawn_rules" in the root of the Behavior Pack that you want to add the new biome spawn rules in. In the spawn_rules folder, create a JSON file and give it a name. The JSON file needs a format, description and conditions.Spawn rules contain description and conditionsAll Spawn Rules JSON need to have an ID (located under the description section). Similar to other identifiers, it follows the convention "namespace:name". The minecraft namespace is reserved for the vanilla Minecraft rules.When changing an existing mob use the ID that appears in the entity JSON for that entity. When creating your own mob, make sure the mobs have the same ID in all the entity's JSON files.

Spawn Rules also needs to define the pool that is used for population control.Each pool has their own spawn limit, By setting an entity to a pool it will spawn as long as that pool hasn't reached the spawn limit.

There are 3 pools that entities can be assigned to :
-animal
-water_animal
-monster



**Tagged Biomes**

| Biome| Tags |
|:-----------:|:-----------:|
| Beach| monster, beach, warm |
| Birch Forest| animal, monster, birch, forest |
| Birch Forest Hills| animal, monster, birch, forest, hills |
| Birch Forest Hills M| animal, monster, forest, birch, mutated, hills |
| Birch Forest M| animal, monster, forest, birch, mutated |
| Cold Ocean| ocean, cold, monster |
| Cold Taiga M| animal, monster, taiga, cold, mutated |
| Dark Forest| animal, monster, forest, roofed |
| Dark Forest M| animal, monster, roofed, forest, mutated |
| Deep Cold Ocean| ocean, cold, monster, deep |
| Deep Frozen Ocean| ocean, frozen, monster, deep |
| Deep Lukewarm Ocean| ocean, lukewarm, monster, deep |
| Deep Ocean| ocean, monster, deep |
| Deep Warm Ocean| ocean, warm, monster, deep |
| Desert| monster, desert |
| Desert Hills| monster, desert, hills |
| Desert M| monster, desert, mutated |
| Forest| animal, monster, forest |
| Forest Hills| animal, monster, hills |
| Forest M| monster, flower_forest, forest, mutated |
| Frozen Ocean| ocean, frozen |
| Frozen River| river, frozen |
| Giant Tree Taiga| animal, monster, taiga, mega |
| Giant Tree Taiga Hills| animal, monster, taiga, mega, hills |
| Giant Tree Taiga Hills M| animal, monster, taiga, mega, hills, mutated |
| Giant Trees Taiga M| animal, monster, mutated, mega |
| Jungle| animal, monster, jungle |
| Jungle Edge| animal, monster, jungle, edge |
| Jungle Edge M| animal, monster, jungle, edge, mutated |
| Jungle Hills| animal, monster, jungle, hills |
| Jungle M| animal, monster, jungle, mutated |
| Lukewarm Ocean| ocean, lukewarm, monster |
| Mesa| monster |
| Mesa M| animal, monster, mesa, mutated |
| Mesa Plateau| monster, mesa |
| Mesa Plateau M| monster, mesa, plateau, mutated |
| Mesa Plateau Stone| monster, plataeu |
| Mesa Plateau Stone M| monster, mesa, plateau, mutated, stone |
| Mountain| animal, monster, extreme_hills |
| Mountain + M| animal, monster, extreme_hills, mutated, forest |
| Mountain Edge| animal, monster, extreme_hills, edge, mountain |
| Mountain M| animal, monster, extreme_hills, mutated |
| Mushroom Fields| mooshroom_island |
| Mushroom Fields Shore| mooshroom_island, shore |
| Nether| nether |
| Ocean| ocean, monster |
| Plains| animal, monster, plains |
| Plains M| animal, monster, plains, mutated |
| River| river |
| Savanna| animal, monster, savanna |
| Savanna M| animal, monster, savanna, mutated |
| Savanna Plateau| animal, monster, savanna |
| Savanna Plateau M| animal, monster, savanna, plateau, mutated |
| Snowy Beach| monster, beach, cold |
| Snowy Mountains| frozen, ice, mountain |
| Snowy Taiga| animal, monster, taiga, cold |
| Snowy Taiga Hills| animal, monster, taiga, cold, hills |
| Snowy Tundra| frozen, ice_plain, ice |
| Snowy Tundra M| monster, frozen, ice_plains, mutated |
| Stone Shore| monster, beach, stone |
| Swamp| animal, monster, swamp |
| Swamp M| animal, monster, swamp, mutated |
| Taiga| animal, monster, taiga |
| Taiga Hills| animal, monster, taiga, hills |
| Taiga M| animal, monster, taiga, mutated |
| The End| the_end |
| Warm Ocean| ocean, warm, monster |
| Wooded Mountain| animal, monster, extreme_hills, forest, mountain |


**Example Spawn Rules for the zombie**
```
"format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "minecraft:zombie",
      "population_control": "monster"
    },
    "conditions": [
      {
        "minecraft:spawns_on_surface": {},
        "minecraft:brightness_filter": {
          "min": 0,
          "max": 7,
          "adjust_for_weather": true
        },
        "minecraft:difficulty_filter": {
          "min": "easy",
          "max": "hard"
        },
        "minecraft:weight": {
          "default": 100
        },
        "minecraft:herd": {
          "min_size": 2,
          "max_size": 4
        },
        "minecraft:permute_type": [
          {
            "weight": 95
          },
          {
            "weight": 5,
            "entity_type": "minecraft:zombie_villager"
          }
        ],
        "minecraft:biome_filter": {
          "test": "has_biome_tag", "operator": "==", "value": "monster"
        }
      }
    ]
  }
```



# Filters

Filters allow data objects to specify test criteria which allows their use.

For example, a model that includes a filter will only be used when the filter criteria is true.



A typical filter consists of four parameters:

 name: the name of the test to apply.

 domain: the domain the test should be performed in. An armor slot, for example. This parameter is only used by a few tests.

 operator: the comparison to apply with the value, such as 'equal' or 'greater'.

 value: the value being compared with the test.



A typical filter looks like the following:

 { "test" : "moon_intensity", "subject" : "self", "operator" : "greater", "value" : "0.5" } 

Which results in the calling entity (self) calculating the moon_intensity at its location and returning true if the result is greater than 0.5.



Tests can be combined into groups using the collections 'all_of', 'any_of', or 'none_of'.

 All tests in an 'all_of' group must pass in order for the group to pass.

 One or more tests in an 'any_of' group must pass in order for the group to pass.

 All tests in a 'none_of' group must fail in order for the group to pass.





## clock_time

Compares the current time with a float value in the range (0.0, 1.0).0.0= Noon0.25= Sunset0.5= Midnight0.75= Sunrise

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Decimal| value| | (Required) A floating point value. |


**Examples**

**Full..**
```
{ "test": "clock_time", "subject": "self", "operator": "equals", "value": "0.00" }
```

**Short (using Defaults)..**
```
{ "test": "clock_time", "value": "0.00" }
```



## distance_to_nearest_player

Compares the distance to the nearest Player with a float value.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Decimal| value| | (Required) A floating point value. |


**Examples**

**Full..**
```
{ "test": "distance_to_nearest_player", "subject": "self", "operator": "equals", "value": "0.00" }
```

**Short (using Defaults)..**
```
{ "test": "distance_to_nearest_player", "value": "0.00" }
```



## has_ability

Returns true when the subject entity has the named ability.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Ability type to test<br/>| Options| Description |
|:-----------:|:-----------:|
| flySpeed|  |
| flying|  |
| instabuild|  |
| invulnerable|  |
| lightning|  |
| mayfly|  |
| mute|  |
| noclip|  |
| walkSpeed|  |
| worldbuilder|  |


 |


**Examples**

**Full..**
```
{ "test": "has_ability", "subject": "self", "operator": "equals", "value": "instabuild" }
```

**Short (using Defaults)..**
```
{ "test": "has_ability", "value": "instabuild" }
```



## has_biome_tag

Tests whether the biome the subject is in has the specified tag.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The tag to look for |


**Examples**

**Full..**
```
{ "test": "has_biome_tag", "subject": "self", "operator": "equals", "value": " " }
```

**Short (using Defaults)..**
```
{ "test": "has_biome_tag", "value": " " }
```



## has_component

Returns true when the subject entity contains the named component.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The component name to look for |


**Examples**

**Full..**
```
{ "test": "has_component", "subject": "self", "operator": "equals", "value": "minecraft:explode" }
```

**Short (using Defaults)..**
```
{ "test": "has_component", "value": "minecraft:explode" }
```



## has_container_open

Returns true when the subject Player entity has opened a container.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "has_container_open", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "has_container_open" }
```



## has_damage

Returns true when the subject entity receives the named damage type.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Damage type to test<br/>| Options| Description |
|:-----------:|:-----------:|
| anvil|  |
| attack|  |
| block_explosion|  |
| contact|  |
| drowning|  |
| entity_explosion|  |
| fall|  |
| falling_block|  |
| fatal| Any damage which kills the subject |
| fire|  |
| fire_tick|  |
| fly_into_wall|  |
| lava|  |
| magic|  |
| none|  |
| override|  |
| piston|  |
| projectile|  |
| stalactite|  |
| stalagmite|  |
| starve|  |
| suffocation|  |
| suicide|  |
| thorns|  |
| void|  |
| wither|  |


 |


**Examples**

**Full..**
```
{ "test": "has_damage", "subject": "self", "operator": "equals", "value": "fatal" }
```

**Short (using Defaults)..**
```
{ "test": "has_damage", "value": "fatal" }
```



## has_equipment

Tests for the presence of a named item in the designated slot of the subject entity.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| domain| any| (Optional) The equipment location to test<br/>| Options| Description |
|:-----------:|:-----------:|
| any|  |
| armor|  |
| feet|  |
| hand|  |
| head|  |
| leg|  |
| torso|  |


 |
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The item name to look for |


**Examples**

**Full..**
```
{ "test": "has_equipment", "subject": "self", "domain": "any", "operator": "equals", "value": "dirt" }
```

**Short (using Defaults)..**
```
{ "test": "has_equipment", "value": "dirt" }
```



## has_mob_effect

Tests whether the Subject has the specified mob effect.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Optional) A string value. |


**Examples**

**Full..**
```
{ "test": "has_mob_effect", "subject": "self", "operator": "equals", "value": "" }
```

**Short (using Defaults)..**
```
{ "test": "has_mob_effect" }
```



## has_nametag

Tests if the subject has been given a custom name.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "has_nametag", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "has_nametag" }
```



## has_ranged_weapon

Returns true when the subject entity is holding a ranged weapon like a bow or crossbow.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "has_ranged_weapon", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "has_ranged_weapon" }
```



## has_tag

Returns true if the subject entity has the tag provided.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Optional) A string value. |


**Examples**

**Full..**
```
{ "test": "has_tag", "subject": "self", "operator": "equals", "value": "" }
```

**Short (using Defaults)..**
```
{ "test": "has_tag" }
```



## has_target

Returns true if the subject entity has a valid target.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "has_target", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "has_target" }
```



## has_trade_supply

Tests whether the target has any trade supply left. Will return false if the target cannot be traded with.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "has_trade_supply", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "has_trade_supply" }
```



## hourly_clock_time

Compares the current 24 hour time with an int value in the range[0, 24000]

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) An integer value. |


**Examples**

**Full..**
```
{ "test": "hourly_clock_time", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "hourly_clock_time", "value": "0" }
```



## in_block

Returns true when the subject entity is inside a specified Block type.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Optional) A string value. |


**Examples**

**Full..**
```
{ "test": "in_block", "subject": "self", "operator": "equals", "value": "" }
```

**Short (using Defaults)..**
```
{ "test": "in_block" }
```



## in_caravan

Returns true if the subject entity is in a caravan.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "in_caravan", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "in_caravan" }
```



## in_clouds

Returns true when the subject entity is in the clouds.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "in_clouds", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "in_clouds" }
```



## in_contact_with_water

Returns true when the subject entity in contact with any water: water, rain, splash water bottle.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "in_contact_with_water", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "in_contact_with_water" }
```



## in_lava

Returns true when the subject entity is in lava.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "in_lava", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "in_lava" }
```



## in_nether

Returns true when the subject entity is in Nether.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "in_nether", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "in_nether" }
```



## in_water

Returns true when the subject entity is in water.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "in_water", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "in_water" }
```



## in_water_or_rain

Returns true when the subject entity is in water or rain.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "in_water_or_rain", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "in_water_or_rain" }
```



## inactivity_timer

Tests if the specified duration in seconds of inactivity for despawning has been reached.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) An integer value. |


**Examples**

**Full..**
```
{ "test": "inactivity_timer", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "inactivity_timer", "value": "0" }
```



## is_altitude

Tests the current altitude against a provided value. 0= bedrock elevation.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) The altitude value to compare with |


**Examples**

**Full..**
```
{ "test": "is_altitude", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "is_altitude", "value": "0" }
```



## is_avoiding_mobs

Returns true if the subject entity is fleeing from other mobs.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_avoiding_mobs", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_avoiding_mobs" }
```



## is_biome

Tests whether the Subject is currently in the named biome.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Biome type to test<br/>| Options| Description |
|:-----------:|:-----------:|
| beach|  |
| desert|  |
| extreme_hills|  |
| flat|  |
| forest|  |
| ice|  |
| jungle|  |
| mesa|  |
| mushroom_island|  |
| ocean|  |
| plain|  |
| river|  |
| savanna|  |
| stone_beach|  |
| swamp|  |
| taiga|  |
| the_end|  |
| the_nether|  |


 |


**Examples**

**Full..**
```
{ "test": "is_biome", "subject": "self", "operator": "equals", "value": "beach" }
```

**Short (using Defaults)..**
```
{ "test": "is_biome", "value": "beach" }
```



## is_block

Returns true when the block has the given name.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Family name to look for |


**Examples**

**Full..**
```
{ "test": "is_block", "subject": "self", "operator": "equals", "value": "player" }
```

**Short (using Defaults)..**
```
{ "test": "is_block", "value": "player" }
```



## is_brightness

Tests the current brightness against a provided value in the range (0.0f, 1.0f).

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Decimal| value| | (Required) The brightness value to compare with. |


**Examples**

**Full..**
```
{ "test": "is_brightness", "subject": "self", "operator": "equals", "value": "0.50" }
```

**Short (using Defaults)..**
```
{ "test": "is_brightness", "value": "0.50" }
```



## is_climbing

Returns true if the subject entity is climbing.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_climbing", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_climbing" }
```



## is_color

Returns true if the subject entity is the named color.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Palette Color to test<br/>| Options| Description |
|:-----------:|:-----------:|
| black|  |
| blue|  |
| brown|  |
| cyan|  |
| gray|  |
| green|  |
| light_blue|  |
| light_green|  |
| magenta|  |
| orange|  |
| pink|  |
| purple|  |
| red|  |
| silver|  |
| white|  |
| yellow|  |


 |


**Examples**

**Full..**
```
{ "test": "is_color", "subject": "self", "operator": "equals", "value": "white" }
```

**Short (using Defaults)..**
```
{ "test": "is_color", "value": "white" }
```



## is_daytime

Returns true during the daylight hours.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_daytime", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_daytime" }
```



## is_difficulty

Tests the current difficulty level of the game.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The game's difficulty level to test<br/>| Options| Description |
|:-----------:|:-----------:|
| easy|  |
| hard|  |
| normal|  |
| peaceful|  |


 |


**Examples**

**Full..**
```
{ "test": "is_difficulty", "subject": "self", "operator": "equals", "value": "normal" }
```

**Short (using Defaults)..**
```
{ "test": "is_difficulty", "value": "normal" }
```



## is_family

Returns true when the subject entity is a member of the named family.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Family name to look for |


**Examples**

**Full..**
```
{ "test": "is_family", "subject": "self", "operator": "equals", "value": "player" }
```

**Short (using Defaults)..**
```
{ "test": "is_family", "value": "player" }
```



## is_game_rule

Tests whether a named game rule is active.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| domain| | (Required) The Game Rule to test. |
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_game_rule", "subject": "self", "domain": "domobspawning", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_game_rule", "domain": "domobspawning" }
```



## is_humid

Tests whether the Subject is in an area with humidity

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_humid", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_humid" }
```



## is_immobile

Returns true if the subject entity is immobile. An entity is immobile if it lacks AI goals, has just changed dimensions or if it is a mob and has no health.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_immobile", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_immobile" }
```



## is_in_village

Tests whether the Subject is inside the bounds of a village.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_in_village", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_in_village" }
```



## is_leashed

Returns true if the subject entity is leashed.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_leashed", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_leashed" }
```



## is_leashed_to

Returns true if the subject entity leashed to the calling entity.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_leashed_to", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_leashed_to" }
```



## is_mark_variant

Returns true if the subject entity is the mark variant number provided.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) An integer value. |


**Examples**

**Full..**
```
{ "test": "is_mark_variant", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "is_mark_variant", "value": "0" }
```



## is_moving

Returns true if the subject entity is moving.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_moving", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_moving" }
```



## is_owner

Returns true if the subject entity is the owner of the calling entity.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_owner", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_owner" }
```



## is_persistent

Tests if the subject's persistence matches the bool value passed in.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_persistent", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_persistent" }
```



## is_riding

Returns true if the subject entity is riding on another entity.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_riding", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_riding" }
```



## is_skin_id

Returns true if the subject entity is the skin id number provided.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) An integer value. |


**Examples**

**Full..**
```
{ "test": "is_skin_id", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "is_skin_id", "value": "0" }
```



## is_sleeping

Tests whether the Subject is sleeping.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_sleeping", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_sleeping" }
```



## is_sneaking

Returns true if the subject entity is sneaking.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_sneaking", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_sneaking" }
```



## is_snow_covered

Tests whether the Subject is in an area with snow cover

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_snow_covered", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_snow_covered" }
```



## is_target

Returns true if the subject entity is the target of the calling entity.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_target", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_target" }
```



## is_temperature_type

Tests whether the current temperature is a given type.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Biome temperature catagory to test<br/>| Options| Description |
|:-----------:|:-----------:|
| cold|  |
| mild|  |
| ocean|  |
| warm|  |


 |


**Examples**

**Full..**
```
{ "test": "is_temperature_type", "subject": "self", "operator": "equals", "value": "cold" }
```

**Short (using Defaults)..**
```
{ "test": "is_temperature_type", "value": "cold" }
```



## is_temperature_value

Tests the current temperature against a provided value in the range (0.0, 1.0) where 0.0f is the coldest temp and 1.0f is the hottest.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Decimal| value| | (Required) The Biome temperature value to compare with. |


**Examples**

**Full..**
```
{ "test": "is_temperature_value", "subject": "self", "operator": "equals", "value": "0.50" }
```

**Short (using Defaults)..**
```
{ "test": "is_temperature_value", "value": "0.50" }
```



## is_underground

Returns true when the subject entity is underground. An entity is considered underground if there are non-solid blocks above it.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_underground", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_underground" }
```



## is_underwater

Returns true when the subject entity is under water. An entity is considered underwater if it is completely submerged in water blocks.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_underwater", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_underwater" }
```



## is_variant

Returns true if the subject entity is the variant number provided.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) An integer value. |


**Examples**

**Full..**
```
{ "test": "is_variant", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "is_variant", "value": "0" }
```



## is_visible

Returns true if the subject entity is visible.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "is_visible", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "is_visible" }
```



## is_weather

DEPRECATED

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Family name to look for |


**Examples**

**Full..**
```
{ "test": "is_weather", "subject": "self", "operator": "equals", "value": "player" }
```

**Short (using Defaults)..**
```
{ "test": "is_weather", "value": "player" }
```



## light_level

Tests is the mob is outside of the specified light level range (0, 16).

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) An integer value. |


**Examples**

**Full..**
```
{ "test": "light_level", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "light_level", "value": "0" }
```



## moon_intensity

Compares the current moon intensity with a float value in the range (0.0, 1.0)

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Decimal| value| | (Required) A floating point value. |


**Examples**

**Full..**
```
{ "test": "moon_intensity", "subject": "self", "operator": "equals", "value": "0.00" }
```

**Short (using Defaults)..**
```
{ "test": "moon_intensity", "value": "0.00" }
```



## moon_phase

Compares the current moon phase with an integer value in the range (0, 7).

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) An integer value. |


**Examples**

**Full..**
```
{ "test": "moon_phase", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "moon_phase", "value": "0" }
```



## on_ground

Returns true when the subject entity is on ground.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "on_ground", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "on_ground" }
```



## on_ladder

Returns true when the subject entity is on a ladder.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "on_ladder", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "on_ladder" }
```



## random_chance

Returns true if the random chance rolls 0 out of a specified max range.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) An integer value. |


**Examples**

**Full..**
```
{ "test": "random_chance", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "random_chance", "value": "0" }
```



## rider_count

Returns the number of riders on this entity.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Integer| value| | (Required) An integer value. |


**Examples**

**Full..**
```
{ "test": "rider_count", "subject": "self", "operator": "equals", "value": "0" }
```

**Short (using Defaults)..**
```
{ "test": "rider_count", "value": "0" }
```



## surface_mob

Tests if the subject is a surface mob.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "surface_mob", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "surface_mob" }
```



## trusts

Returns true if the subject is trusted by entity.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "trusts", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "trusts" }
```



## weather

Tests the current weather in the dimension against a provided weather value.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Family name to look for |


**Examples**

**Full..**
```
{ "test": "weather", "subject": "self", "operator": "equals", "value": "player" }
```

**Short (using Defaults)..**
```
{ "test": "weather", "value": "player" }
```



## weather_at_position

Tests the current weather, at the actor's position, against a provided weather value.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| String| value| | (Required) The Family name to look for |


**Examples**

**Full..**
```
{ "test": "weather_at_position", "subject": "self", "operator": "equals", "value": "player" }
```

**Short (using Defaults)..**
```
{ "test": "weather_at_position", "value": "player" }
```

**Example:**

**This filter group will pass only when the moon_intensity is greater than 0.5 AND the caller's target entity is standing in water.**
```
"all_of" : [

:   { "test" : "moon_intensity", "subject" : "self", "operator" : "greater", "value" : "0.5" }, 

:   { "test" : "in_water", "subject" : "target", "operator" : "equal", "value" : "true" } 

: ]
```



# Server Entity Documentation



## AI Goals



**minecraft.behavior.hide**

Allows a mob with the hide component to attempt to move to - and hide at - an owned or nearby POI.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| duration| 1.0| Amount of time in seconds that the mob reacts. |
| String| poi_type| | Defines what POI type to hide at. |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Decimal| timeout_cooldown| 8.0| The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition. |




**minecraft.behavior.move_to_poi**

Allows the mob to move to a POI if able to

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| poi_type| | Tells the goal what POI type it should be looking for |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft.behavior.scared**

Allows the a mob to become scared when the weather outside is thundering

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| sound_interval| 0| The interval in which a sound will play when active in a 1/delay chance to kick off |




**minecraft.behavior.work**

allows the NPC to use their jobsite POI

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| active_time| 0| The amount of ticks the NPC will stay in their the work location |
| Boolean| can_work_in_rain| false| If true, this entity can work when their jobsite POI is being rained on. |
| Integer| goal_cooldown| 0| The amount of ticks the goal will be on cooldown before it can be used again |
| String| on_arrival| | Event to run when the mob reaches their jobsite and finishes working. |
| Integer| sound_delay_max| 0| The max interval in which a sound will play |
| Integer| sound_delay_min| 0| The min interval in which a sound will play |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Integer| work_in_rain_tolerance| -1| If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal |




**minecraft:behavior.admire_item**

Enables the mob to admire items that have been configured as admirable. Must be used in combination with the admire_item component

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| admire_item_sound| | The sound event to play when admiring the item |
| Range [a, b]| sound_interval| 0| The range of time in seconds to randomly wait before playing the sound again. |




**minecraft:behavior.barter**

Enables the mob to barter for items that have been configured as barter currency. Must be used in combination with the barter component



**minecraft:behavior.beg**

Allows this mob to look at and follow the player that holds food they like.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| items| | List of items that this mob likes |
| Decimal| look_distance| 8.0| Distance in blocks the mob will beg from |
| Range [a, b]| look_time| [2, 4]| The range of time in seconds this mob will stare at the player holding a food they like, begging for it |




**minecraft:behavior.break_door**

Allows this mob to break doors.



**minecraft:behavior.breed**

Allows this mob to breed with other mobs.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.celebrate**

This allows the mob celebrate by jumping up and playing a sound periodically.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| celebration_sound| | The sound to occasionally play. |
| Decimal| duration| 1.0| The duration of the celebration (in seconds). |
| Range [a, b]| jump_interval| 0| The range of time in seconds to randomly wait before jumping again. |
| Trigger| on_celebration_end_event| | The event to trigger when the goal's duration expires. |
| Range [a, b]| sound_interval| 0| The range of time in seconds to randomly wait before playing the sound again. |




**minecraft:behavior.defend_trusted_target**

Allows the mob to target another mob that hurts an entity it trusts.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| aggro_sound| | Sound to occasionally play while defending. |
| Integer| attack_interval| 0| Time in seconds between attacks |
| JSON Object| entity_types| | List of entity types that this mob considers valid targets<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |
| Boolean| must_see| false| If true, only entities in this mob's viewing range can be selected as targets |
| Decimal| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| within_radius| 0.0| Distance in blocks that the target can be within to launch an attack |




**minecraft:behavior.door_interact**

Allows the mob to open and close doors.



**minecraft:behavior.dragondeath**

Allows the dragon to go out with glory. This controls the Ender Dragon's death animation and can't be used by other mobs.



**minecraft:behavior.dragonholdingpattern**

Allows the Dragon to fly around in a circle around the center podium. Can only be used by the Ender Dragon.



**minecraft:behavior.dragonlanding**

Allows the Dragon to stop flying and transition into perching mode. Can only be used by the Ender Dragon.



**minecraft:behavior.dragonscanning**

Allows the dragon to look around for a player to attack while in perch mode. Can only be used by the Ender Dragon.



**minecraft:behavior.dragontakeoff**

Allows the dragon to leave perch mode and go back to flying around. Can only be used by the Ender Dragon.



**minecraft:behavior.drink_potion**

Allows the mob to drink potions based on specified environment conditions.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | speed_modifier| | 0.0 |
| List| potions| | A list of potions that this entity can drink. Each potion entry has the following parameters:<br/>**<big>Potion Entry Parameters</big>**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| chance| 1.0| The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use. |
| Minecraft Filter| filters| | The filters to use when determining if this potion can be selected. |
| Integer| id| -1| The registry ID of the potion to use |


 |




**minecraft:behavior.eat_carried_item**

If the mob is carrying a food item, the mob will eat it and the effects will be applied to the mob.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| delay_before_eating| | Time in seconds the mob should wait before eating the item. |




**minecraft:behavior.enderman_leave_block**

Allows the enderman to drop a block they are carrying. Can only be used by Endermen.



**minecraft:behavior.enderman_take_block**

Allows the enderman to take a block and carry it around. Can only be used by Endermen.



**minecraft:behavior.explore_outskirts**

allows a mob to explore the outskirts of a village

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| explore_dist| 5.0| The distance in which the mob will proceed past the village bounds |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Integer| wait_time| 0| The time the mob will stand around 'searching' for POIs |




**minecraft:behavior.find_cover**

Allows the mob to seek shade.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the goal again |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.find_mount**

Allows the mob to look around for another mob to ride atop it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_water| false| If true, the mob will not go into water blocks when going towards a mount |
| Decimal| mount_distance| -1.0| This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance |
| Integer| start_delay| 0| Time the mob will wait before starting to move towards the mount |
| Boolean| target_needed| false| If true, the mob will only look for a mount if it has a target |
| Decimal| within_radius| 0.0| Distance in blocks within which the mob will look for a mount |




**minecraft:behavior.find_underwater_treasure**

Allows the mob to move towards the nearest underwater ruin or shipwreck.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| search_range| 0| The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards. |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Decimal| stop_distance| 2.0| The distance the mob will move before stopping. |




**minecraft:behavior.flee_sun**

Allows the mob to run away from direct sunlight and seek shade.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.float**

Allows the mob to stay afloat while swimming.



**minecraft:behavior.float_wander**

Allows the mob to float around like the Ghast.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Range [a, b]| float_duration| [0.0, 0.0]| Range of time in seconds the mob will float around before landing and choosing to do something else |
| Boolean| must_reach| false| If true, the point has to be reachable to be a valid target |
| Boolean| random_reselect| false| If true, the mob will randomly pick a new point while moving to the previously selected one |
| Integer| xz_dist| 10| Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |
| Integer| y_dist| 7| Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |
| Decimal| y_offset| 0.0| Height in blocks to add to the selected target position |




**minecraft:behavior.follow_caravan**

Allows the mob to follow mobs that are in a caravan.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| entity_count| 1| Number of entities that can be in the caravan |
| JSON Object| entity_types| | List of entity types that this mob can follow in a caravan<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.follow_mob**

Allows the mob to follow other mobs.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| search_range| 0| The distance in blocks it will look for a mob to follow |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Decimal| stop_distance| 2.0| The distance in blocks this mob stops from the mob it is following |




**minecraft:behavior.follow_owner**

Allows the mob to follow the player that owns them.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Decimal| start_distance| 10.0| The distance in blocks that the owner can be away from this mob before it starts following it |
| Decimal| stop_distance| 2.0| The distance in blocks this mob will stop from its owner while following it |




**minecraft:behavior.follow_parent**

Allows the mob to follow their parent around.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.follow_target_captain**

Allows mob to move towards its current target captain.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| follow_distance| 0.0| Defines the distance in blocks the mob will stay from its target while following. |
| Decimal| within_radius| 0.0| Defines the maximum distance in blocks a mob can get from its target captain before giving up trying to follow it. |




**minecraft:behavior.go_home**

Allows the mob to move back to the position they were spawned.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| interval| 120| A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal |
| String| on_home| | Event to run when this mob gets home. |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.hold_ground**

The mob freezes and looks at the mob they are targeting.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| broadcast| false| Whether to broadcast out the mob's target to other mobs of the same type. |
| Decimal| broadcast_range| 0.0f| Range in blocks for how far to broadcast. |
| Decimal| min_radius| 10.0f| Minimum distance the target must be for the mob to run this goal. |
| String| within_radius_event| | Event to run when target is within the radius. This event is broadcasted if broadcast is true. |




**minecraft:behavior.hurt_by_target**

Allows the mob to target another mob that hurts them.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| alert_same_type| false| If true, nearby mobs of the same type will be alerted about the damage |
| JSON Object| entity_types| | List of entity types that this mob can target when hurt by them<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |
| Boolean| hurt_owner| false| If true, the mob will hurt its owner and other mobs with the same owner as itself |




**minecraft:behavior.inspect_bookshelf**

Allows the mob to inspect bookshelves.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| search_count| 10| The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick |
| Integer| search_height| 1| The height that the mob will search for bookshelves |
| Integer| search_range| 0| Distance in blocks the mob will look for books to inspect |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.knockback_roar**

Allows the mob to perform a damaging knockback that affects all nearby entities.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | Trigger| | on_roar_end |
| Decimal| attack_time| 0.5| The delay after which the knockback occurs (in seconds). |
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the goal again |
| Decimal| duration| 1.0| The duration of the roar (in seconds). |
| Integer| knockback_damage| 6| The damage dealt by the knockback roar. |
| Integer| knockback_horizontal_strength| 4| The strength of the horizontal knockback. |
| Integer| knockback_range| 4| The radius (in blocks) of the knockback effect. |
| Integer| knockback_vertical_strength| 4| The strength of the vertical knockback. |




**minecraft:behavior.lay_down**

Allows mobs to lay down at times

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| interval| 120| A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal |
| Integer| random_stop_interval| 120| a random value in which the goal can use to pull out of the behavior. This is a 1/interval chance to play the sound |




**minecraft:behavior.lay_egg**

Allows the mob to lay an egg block on a sand block if the mob is pregnant.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| String| on_lay| | Event to run when this mob lays the egg. |
| Integer| search_height| 1| Height in blocks the mob will look for sand block to move towards |
| Integer| search_range| 0| The distance in blocks it will look for a sand block to move towards |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.leap_at_target**

Allows monsters to jump at and attack their target. Can only be used by hostile mobs.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| must_be_on_ground| true| If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air |
| Boolean| set_persistent| false| Allows the actor to be set to persist upon targeting a player |
| Decimal| yd| 0.0| The height in blocks the mob jumps when leaping at its target |




**minecraft:behavior.look_at_entity**

Allows the mob to look at nearby entities.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| angle_of_view_horizontal| 360| The angle in degrees that the mob can see in the Y-axis (up-down) |
| Integer| angle_of_view_vertical| 360| The angle in degrees that the mob can see in the X-axis (left-right) |
| Minecraft Filter| filters| | Filter to determine the conditions for this mob to look at the entity |
| Decimal| look_distance| 8.0| The distance in blocks from which the entity will look at |
| Range [a, b]| look_time| [2, 4]| Time range to look at the entity |
| Decimal| probability| 0.02| The probability of looking at the target. A value of 1.00 is 100% |




**minecraft:behavior.look_at_player**

Allows the mob to look at the player when the player is nearby.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| angle_of_view_horizontal| 360| The angle in degrees that the mob can see in the Y-axis (up-down) |
| Integer| angle_of_view_vertical| 360| The angle in degrees that the mob can see in the X-axis (left-right) |
| Decimal| look_distance| 8.0| The distance in blocks from which the entity will look at |
| Range [a, b]| look_time| [2, 4]| Time range to look at the entity |
| Decimal| probability| 0.02| The probability of looking at the target. A value of 1.00 is 100% |




**minecraft:behavior.look_at_target**

Allows the mob to look at the entity they are targetting.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| angle_of_view_horizontal| 360| The angle in degrees that the mob can see in the Y-axis (up-down) |
| Integer| angle_of_view_vertical| 360| The angle in degrees that the mob can see in the X-axis (left-right) |
| Decimal| look_distance| 8.0| The distance in blocks from which the entity will look at |
| Range [a, b]| look_time| [2, 4]| Time range to look at the entity |
| Decimal| probability| 0.02| The probability of looking at the target. A value of 1.00 is 100% |




**minecraft:behavior.look_at_trading_player**

Allows the mob to look at the player they are trading with.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| angle_of_view_horizontal| 360| The angle in degrees that the mob can see in the Y-axis (up-down) |
| Integer| angle_of_view_vertical| 360| The angle in degrees that the mob can see in the X-axis (left-right) |
| Decimal| look_distance| 8.0| The distance in blocks from which the entity will look at |
| Range [a, b]| look_time| [2, 4]| Time range to look at the entity |
| Decimal| probability| 0.02| The probability of looking at the target. A value of 1.00 is 100% |




**minecraft:behavior.make_love**

Allows the villager to look for a mate to spawn other villagers with. Can only be used by Villagers.



**minecraft:behavior.mingle**

Allows an entity to go to the village bell and mingle with other entities

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the goal again |
| Decimal| duration| 1.0| Amount of time in seconds that the entity will chat with another entity |
| Decimal| mingle_distance| 2.0f| The distance from its partner that this entity will mingle. If the entity type is not the same as the entity, this value needs to be identical on both entities. |
| List| mingle_partner_type| empty| The entity type that this entity is allowed to mingle with |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.mount_pathing**

Allows the mob to move around on its own while mounted seeking a target to attack.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Decimal| target_dist| 0.0| The distance at which this mob wants to be away from its target |
| Boolean| track_target| false| If true, this mob will chase after the target as long as it's a valid target |




**minecraft:behavior.move_indoors**

Can only be used by Villagers. Allows them to seek shelter indoors.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Decimal| timeout_cooldown| 8.0| The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition |




**minecraft:behavior.move_through_village**

Can only be used by Villagers. Allows the villagers to create paths around the village.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| only_at_night| false| If true, the mob will only move through the village during night time |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.move_to_land**

Allows the mob to move back onto land when in water.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| search_count| 10| The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick |
| Integer| search_height| 1| Height in blocks the mob will look for land to move towards |
| Integer| search_range| 0| The distance in blocks it will look for land to move towards |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.move_to_lava**

Allows the mob to move back into lava when on land.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| search_count| 10| The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick |
| Integer| search_height| 1| Height in blocks the mob will look for lava to move towards |
| Integer| search_range| 0| The distance in blocks it will look for lava to move towards |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.move_to_random_block**

Allows mob to move towards a random block.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| block_distance| 16.0| Defines the distance from the mob, in blocks, that the block to move to will be chosen. |
| Decimal| within_radius| 0.0| Defines the distance in blocks the mob has to be from the block for the movement to be finished. |




**minecraft:behavior.move_to_village**

Allows the mob to move into a random location within a village.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the goal again |
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| search_range| 0| The distance in blocks to search for villages. If <= 0, find the closest village regardless of distance. |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.move_to_water**

Allows the mob to move back into water when on land.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| search_count| 10| The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick |
| Integer| search_height| 1| Height in blocks the mob will look for water to move towards |
| Integer| search_range| 0| The distance in blocks it will look for water to move towards |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.move_towards_target**

Allows mob to move towards its current target.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| within_radius| 0.0| Defines the radius in blocks that the mob tries to be from the target. A value of 0 means it tries to occupy the same block as the target |




**minecraft:behavior.nap**

Allows mobs to occassionally stop and take a nap under certain conditions.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown_max| 0.0| Maximum time in seconds the mob has to wait before using the goal again |
| Decimal| cooldown_min| 0.0| Minimum time in seconds the mob has to wait before using the goal again |
| Decimal| mob_detect_dist| 6.0| The block distance in x and z that will be checked for mobs that this mob detects |
| Decimal| mob_detect_height| 6.0| The block distance in y that will be checked for mobs that this mob detects |




**minecraft:behavior.nearest_attackable_target**

Allows an entity to attack the closest target within a given subset of specific target types.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| attack_interval| 0| Time range (in seconds) between searching for an attack target, range is in (0, "attack_interval"]. Only used if "attack_interval" is greater than 0, otherwise "scan_interval" is used. |
| Integer| attack_interval_min| 0| Alias for "attack_interval"; provides the same functionality as "attack_interval". |
| Boolean| attack_owner| false| If true, this entity can attack its owner. |
| JSON Object| entity_types| | Filters which types of targets are valid for this entity.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this target a valid type. |
| Decimal| max_dist| 16| To be a valid target choice, the target type cannot be farther away from this entity than "max_dist". |
| Boolean| must_see| false| Determines if target-validity requires this entity to be in range only, or both in range and in sight. |
| Boolean| must_see_forget_duration| 3.0| Time (in seconds) the target must not be seen by this entity to become invalid. Used only if "must_see" is true. |


 |
| Boolean| must_reach| false| If true, this entity requires a path to the target. |
| Boolean| must_see| false| Determines if target-validity requires this entity to be in range only, or both in range and in sight. |
| Decimal| must_see_forget_duration| 3.0| Time (in seconds) the target must not be seen by this entity to become invalid. Used only if "must_see" is true. |
| Decimal| persist_time| 0.0| Time (in seconds) this entity can continue attacking the target after the target is no longer valid. |
| Boolean| reselect_targets| false| Allows the attacking entity to update the nearest target, otherwise a target is only reselected after each "scan_interval" or "attack_interval". |
| Integer| scan_interval| 10| If "attack_interval" is 0 or isn't declared, then between attacks: scanning for a new target occurs every amount of ticks equal to "scan_interval", minimum value is 1. Values under 10 can affect performance. |
| Boolean| set_persistent| false| Allows the actor to be set to persist upon targeting a player |
| Decimal| target_invisible_multiplier| 0.7| Multiplied with the target's armor coverage percentage to modify "max_dist" when detecting an invisible target. |
| Decimal| target_search_height| -1.0| Maximum vertical target-search distance, if it's greater than the target type's "max_dist". A negative value defaults to "entity_types" greatest "max_dist". |
| Decimal| target_sneak_visibility_multiplier| 0.8| Multiplied with the target type's "max_dist" when trying to detect a sneaking target. |
| Decimal| within_radius| 0.0| Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare "minecraft:follow_range". |




**minecraft:behavior.nearest_prioritized_attackable_target**

Allows the mob to check for and pursue the nearest valid target.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| attack_interval| 0| Time in seconds before selecting a target |
| JSON Object| entity_types| | List of entity types that this mob considers valid targets<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |
| Boolean| must_reach| false| If true, only entities that this mob can path to can be selected as targets |
| Boolean| must_see| false| If true, only entities in this mob's viewing range can be selected as targets |
| Decimal| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| persist_time| 0.0f| Time in seconds for a valid target to stay targeted when it becomes and invalid target. |
| Integer| priority| 0| Specifies the priority in which filtered enemy types should be attacked. Lower number means higher priority. |
| Boolean| reselect_targets| false| If true, the target will change to the current closest entity whenever a different entity is closer |
| Integer| scan_interval| 10| How many ticks to wait between scanning for a target. |
| Boolean| set_persistent| false| Allows the actor to be set to persist upon targeting a player |
| Decimal| target_search_height| -1.0f| Height in blocks to search for a target mob. -1.0f means the height does not matter. |
| Decimal| within_radius| 0.0| Distance in blocks that the target can be within to launch an attack |




**minecraft:behavior.ocelot_sit_on_block**

Allows to mob to be able to sit in place like the ocelot.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.offer_flower**

Allows the mob to offer the player a flower like the Iron Golem does.



**minecraft:behavior.open_door**

Allows the mob to open doors. Requires the mob to be able to path through doors, otherwise the mob won't even want to try opening them.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| close_door_after| true| If true, the mob will close the door after opening it and going through it |




**minecraft:behavior.owner_hurt_by_target**

Allows the mob to target another mob that hurts their owner.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| entity_types| | List of entity types that this mob can target if they hurt their owner<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |




**minecraft:behavior.owner_hurt_target**

Allows the mob to target a mob that is hurt by their owner.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| entity_types| | List of entity types that this entity can target if the potential target is hurt by this mob's owner<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |




**minecraft:behavior.panic**

Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| damage_sources| all| The list of Entity Damage Sources that will cause this mob to panic |
| Boolean| force| false| If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it |
| Boolean| ignore_mob_damage| false| If true, the mob will not panic in response to damage from other mobs. This overrides the damage types in "damage_sources" |
| Boolean| prefer_water| false| If true, the mob will prefer water over land |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.peek**

Allows the mob to peek out. This is what the shulker uses to look out of its shell.



**minecraft:behavior.pet_sleep_with_owner**

Allows the pet mob to move onto a bed with it's owner while sleeping.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| search_height| 1| Height in blocks from the owner the pet can be to sleep with owner. |
| Integer| search_range| 0| The distance in blocks from the owner the pet can be to sleep with owner. |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.pickup_items**

Allows the mob to pick up items on the ground.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| can_pickup_any_item| false| If true, the mob can pickup any item |
| Boolean| can_pickup_to_hand_or_equipment| true| If true, the mob can pickup items to its hand or armor slots |
| List| excluded_items| | List of items this mob will not pick up |
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Decimal| max_dist| 0.0| Maximum distance this mob will look for items to pick up |
| Boolean| pickup_based_on_chance| false| If true, depending on the difficulty, there is a random chance that the mob may not be able to pickup items |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Boolean| track_target| false| If true, this mob will chase after the target as long as it's a valid target |




**minecraft:behavior.play**

Allows the mob to play with other baby villagers. This can only be used by Villagers.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.player_ride_tamed**

Allows the mob to be ridden by the player after being tamed.



**minecraft:behavior.raid_garden**

Allows the mob to eat/raid crops out of farms until they are full.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| blocks| | Blocks that the mob is looking for to eat/raid |
| Integer| eat_delay| 2| Time in seconds between each time it eats/raids |
| Integer| full_delay| 100| Amount of time in seconds before this mob wants to eat/raid again after eating its maximum |
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| initial_eat_delay| 0| Time in seconds before starting to eat/raid once it arrives at it |
| Integer| max_to_eat| 6| Maximum number of crops this entity wants to eat/raid. If set to zero or less then it doesn't have a maximum |
| Integer| search_range| 0| Distance in blocks the mob will look for crops to eat |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.random_breach**

Allows the mob to randomly break surface of the water.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the goal again |
| Integer| interval| 120| A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Integer| xz_dist| 10| Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |
| Integer| y_dist| 7| Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |




**minecraft:behavior.random_fly**

Allows a mob to randomly fly around.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| can_land_on_trees| true| If true, the mob can stop flying and land on a tree instead of the ground |
| Integer| xz_dist| 10| Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |
| Integer| y_dist| 7| Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |




**minecraft:behavior.random_hover**

Allows the mob to hover around randomly, close to the surface

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | | | hover_height |
| Integer| interval| 120| A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Integer| xz_dist| 10| Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |
| Integer| y_dist| 7| Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |
| Decimal| y_offset| 0.0| Height in blocks to add to the selected target position |




**minecraft:behavior.random_look_around**

Allows the mob to randomly look around.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Range [a, b]| look_time| [2, 4]| The range of time in seconds the mob will stay looking in a random direction before looking elsewhere |




**minecraft:behavior.random_look_around_and_sit**

Allows the mob to randomly sit and look around for a duration. Note: Must have a sitting animation set up to use this.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| max_look_count| 2| The max amount of unique looks a mob will have while looking around. |
| Integer| max_look_time| 40| The max amount of time (in ticks) a mob will stay looking at a direction while looking around. |
| Integer| min_look_count| 1| The min amount of unique looks a mob will have while looking around. |
| Integer| min_look_time| 20| The min amount of time (in ticks) a mob will stay looking at a direction while looking around. |
| Integer| probability| 0.02| The probability of randomly looking around/sitting. |




**minecraft:behavior.random_sitting**

Allows the mob to randomly sit for a duration.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the goal again |
| Decimal| min_sit_time| 10| The minimum amount of time in seconds before the mob can stand back up |
| Decimal| start_chance| 0.1| This is the chance that the mob will start this goal, from 0 to 1 |
| Decimal| stop_chance| 0.3| This is the chance that the mob will stop this goal, from 0 to 1 |




**minecraft:behavior.random_stroll**

Allows a mob to randomly stroll around.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| interval| 120| A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Integer| xz_dist| 10| Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |
| Integer| y_dist| 7| Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |




**minecraft:behavior.random_swim**

Allows an entity to randomly move through water

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_surface| true| If true, the mob will avoid surface water blocks by swimming below them |
| Integer| interval| 120| A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Integer| xz_dist| 10| Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |
| Integer| y_dist| 7| Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |




**minecraft:behavior.receive_love**

Allows the villager to stop so another villager can breed with it. Can only be used by a Villager.



**minecraft:behavior.restrict_open_door**

Allows the mob to stay indoors during night time.



**minecraft:behavior.restrict_sun**

Allows the mob to automatically start avoiding the sun when its a clear day out.



**minecraft:behavior.rise_to_liquid_level**

Allows the mob to stay at a certain level when in liquid.



**minecraft:behavior.roll**

This allows the mob to roll forward.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| probability| [1.0]| The probability that the mob will use the goal. |




**minecraft:behavior.run_around_like_crazy**

Allows the mob to run around aimlessly.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.send_event**

Allows the mob to send an event to another mob.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cast_duration| Total delay of the steps| Time in seconds for the entire event sending process |
| Boolean| look_at_target| true| If true, the mob will face the entity it sends an event to |
| List| sequence| | List of events to send<br/>**<big>Parameters of each event</big>**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| base_delay| 0.0| Amount of time in seconds before starting this step |
| String| event| | The event to send to the entity |
| String| sound_event| | The sound event to play when this step happens |


 |




**minecraft:behavior.share_items**

Allows the mob to give items it has to others.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| entity_types| | List of entities this mob will share items with<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Decimal| max_dist| 0.0| Maximum distance in blocks this mob will look for entities to share items with |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.silverfish_merge_with_stone**

Allows the mob to go into stone blocks like Silverfish do. Currently it can only be used by Silverfish.



**minecraft:behavior.silverfish_wake_up_friends**

Allows the mob to alert mobs in nearby blocks to come out. Currently it can only be used by Silverfish.



**minecraft:behavior.skeleton_horse_trap**

Allows Equine mobs to be Horse Traps and be triggered like them, spawning a lightning bolt and a bunch of horses when a player is nearby. Can only be used by Horses, Mules, Donkeys and Skeleton Horses.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| duration| 1.0| Amount of time in seconds the trap exists. After this amount of time is elapsed, the trap is removed from the world if it hasn't been activated |
| Decimal| within_radius| 0.0| Distance in blocks that the player has to be within to trigger the horse trap |




**minecraft:behavior.sleep**

Allows mobs that own a bed to in a village to move to and sleep in it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the goal again |
| Decimal| sleep_collider_height| 1.0| The height of the mob's collider while sleeping |
| Decimal| sleep_collider_width| 1.0| The width of the mob's collider while sleeping |
| Decimal| sleep_y_offset| 1.0| The y offset of the mob's collider while sleeping |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Decimal| timeout_cooldown| 8.0| The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition |




**minecraft:behavior.slime_attack**

Can only be used by Slimes and Magma Cubes. Allows the mob to use a melee attack like the slime's.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| set_persistent| false| Allows the actor to be set to persist upon targeting a player |




**minecraft:behavior.snacking**

Allows the mob to take a load off and snack on food that it found nearby.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| items| | Items that we are interested in snacking on |
| Decimal| snacking_cooldown| 7.5| The cooldown time in seconds before the mob is able to snack again |
| Decimal| snacking_cooldown_min| 0.5f| The minimum time in seconds before the mob is able to snack again |
| Decimal| snacking_stop_chance| 0.0017| This is the chance that the mob will stop snacking, from 0 to 1 |




**minecraft:behavior.sneeze**

Allows the mob to stop and sneeze possibly startling nearby mobs and dropping an item.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the goal again |
| Decimal| drop_item_chance| 1.0| The probability that the mob will drop an item when it sneezes. |
| JSON Object| entity_types| | List of entity types this mob will startle (cause to jump) when it sneezes.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |
| String| loot_table| | Loot table to select dropped items from. |
| String| prepare_sound| | Sound to play when the sneeze is about to happen. |
| Decimal| prepare_time| 1.0| The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing). |
| Decimal| probability| 0.02| The probability of sneezing. A value of 1.00 is 100% |
| String| sound| | Sound to play when the sneeze occurs. |
| Decimal| within_radius| 0.0| Distance in blocks that mobs will be startled. |




**minecraft:behavior.squid_dive**

Allows the squid to dive down in water. Can only be used by the Squid.



**minecraft:behavior.squid_flee**

Allows the squid to swim away. Can only be used by the Squid.



**minecraft:behavior.squid_idle**

Allows the squid to swim in place idly. Can only be used by the Squid.



**minecraft:behavior.squid_move_away_from_ground**

Allows the squid to move away from ground blocks and back to water. Can only be used by the Squid.



**minecraft:behavior.squid_out_of_water**

Allows the squid to stick to the ground when outside water. Can only be used by the Squid.



**minecraft:behavior.stalk_and_pounce_on_target**

Allows a mob to stalk a target, then once within range pounce onto a target, on success the target will be attacked dealing damage defined by the attack component. On failure, the mob will risk getting stuck

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| interest_time| 2.0| The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing |
| Decimal| leap_distance| 0.8| The distance in blocks the mob jumps in the direction of its target |
| Decimal| leap_height| 0.9| The height in blocks the mob jumps when leaping at its target |
| Decimal| max_stalk_dist| 10.0| The maximum distance away a target can be before the mob gives up on stalking |
| Decimal| pounce_max_dist| 5.0| The maximum distance away from the target in blocks to begin pouncing at the target |
| Boolean| set_persistent| false| Allows the actor to be set to persist upon targeting a player |
| Decimal| stalk_speed| 1.2| The movement speed in which you stalk your target |
| Decimal| strike_dist| 2.0| The max distance away from the target when landing from the pounce that will still result in damaging the target |
| Decimal| stuck_time| 2.0| The amount of time the mob will be stuck if they fail and land on a block they can be stuck on |




**minecraft:behavior.stay_while_sitting**

Allows the mob to stay put while it is in a sitting state instead of doing something else.



**minecraft:behavior.stomp_turtle_egg**

Allows this mob to stomp turtle eggs

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| interval| 120| A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal |
| Integer| search_height| 1| Height in blocks the mob will look for turtle eggs to move towards |
| Integer| search_range| 0| The distance in blocks it will look for turtle eggs to move towards |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |




**minecraft:behavior.stroll_towards_village**

Allows the mob to move into a random location within a village within the search range.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the goal again |
| Decimal| goal_radius| 0.5| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| Integer| search_range| 0| The distance in blocks to search for points inside villages. If <= 0, find the closest village regardless of distance. |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Decimal| start_chance| 0.1| This is the chance that the mob will start this goal, from 0 to 1 |




**minecraft:behavior.summon_entity**

Allows the mob to attack the player by summoning other entities.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| summon_choices| | List of spells for the mob to use to summon entities. Each spell has the following parameters:<br/>**<big>Parameters of each spell</big>**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cast_duration| Total delay of the steps| Time in seconds the spell casting will take |
| Decimal| cooldown_time| 0.0| Time in seconds the mob has to wait before using the spell again |
| Boolean| do_casting| true| If true, the mob will do the casting animations and render spell particles |
| Minecraft Filter| filters| |  |
| Decimal| max_activation_range| 32.0| Upper bound of the activation distance in blocks for this spell, must not be negative. |
| Decimal| min_activation_range| 1.0| Lower bound of the activation distance in blocks for this spell, must not be negative. |
| Integer| particle_color| 0| The color of the particles for this spell |
| List| sequence| | List of steps for the spell. Each step has the following parameters:<br/>**<big>Parameters of each step</big>**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| base_delay| 0.0| Amount of time in seconds to wait before this step starts |
| Decimal| delay_per_summon| 0.0| Amount of time in seconds before each entity is summoned in this step |
| Decimal| entity_lifespan| -1.0| Amount of time in seconds that the spawned entity will be alive for. A value of -1.0 means it will remain alive for as long as it can |
| String| entity_type| | The entity type of the entities we will spawn in this step |
| Integer| num_entities_spawned| 1| Number of entities that will be spawned in this step |
| String| shape| line| The base shape of this step. Valid values are circle and line |
| Decimal| size| 1.0| The base size of the entity |
| String| sound_event| | The sound event to play for this step |
| Integer| summon_cap| 0| Maximum number of summoned entities at any given time |
| Decimal| summon_cap_radius| 0.0|  |
| String| target| self| The target of the spell. This is where the spell will start (line will start here, circle will be centered here) |


 |
| String| start_sound_event| | The sound event to play when using this spell |
| Decimal| weight| 0.0| The weight of this spell. Controls how likely the mob is to choose this spell when casting one |


 |




**minecraft:behavior.swell**

Allows the creeper to swell up when a player is nearby. It can only be used by Creepers.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| start_distance| 10.0| This mob starts swelling when a target is at least this many blocks away |
| Decimal| stop_distance| 2.0| This mob stops swelling when a target has moved away at least this many blocks |




**minecraft:behavior.take_flower**

Can only be used by Villagers. Allows the mob to accept flowers from Iron Golems.



**minecraft:behavior.tempt**

Allows the mob to be tempted by food they like.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| can_get_scared| false| If true, the mob can stop being tempted if the player moves too fast while close to this mob |
| List| items| | List of items this mob is tempted by |
| Decimal| speed_multiplier| 1.0| Movement speed multiplier of the mob when using this AI Goal |
| Decimal| within_radius| 0.0| Distance in blocks this mob can get tempted by a player holding an item they like |




**minecraft:behavior.trade_interest**

Allows the mob to look at a player that is holding a tradable item.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| carried_item_switch_time| 2.0| The max time in seconds that the trader will hold an item before attempting to switch for a different item that takes the same trade |
| Decimal| cooldown| 2.0| The time in seconds before the trader can use this goal again |
| Decimal| interest_time| 45.0| The max time in seconds that the trader will be interested with showing it's trade items |
| Decimal| remove_item_time| 1.0| The max time in seconds that the trader will wait when you no longer have items to trade |
| Decimal| within_radius| 0.0| Distance in blocks this mob can be interested by a player holding an item they like |




**minecraft:behavior.trade_with_player**

Allows the player to trade with this mob.



**minecraft:behavior.vex_copy_owner_target**

Allows the mob to target the same entity its owner is targeting.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| entity_types| | List of entities this mob can copy the owner from<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |




**minecraft:behavior.vex_random_move**

Allows the mob to move around randomly like the Vex.



**minecraft:behavior.wither_random_attack_pos_goal**

Allows the wither to launch random attacks. Can only be used by the Wither Boss.



**minecraft:behavior.wither_target_highest_damage**

Allows the wither to focus its attacks on whichever mob has dealt the most damage to it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| entity_types| | List of entity types the wither takes into account to find who dealt the most damage to it<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | Conditions that make this entry in the list valid |
| Decimal| max_dist| 16| Maximum distance this mob can be away to be a valid choice |
| Boolean| must_see| false| If true, the mob has to be visible to be a valid choice |
| Boolean| must_see_forget_duration| 3.0| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| Decimal| sprint_speed_multiplier| 1.0| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| Decimal| walk_speed_multiplier| 1.0| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |


 |




## Attributes



**minecraft:attack**

Defines an entity's melee attack and any additional effects on it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Range [a, b]| damage| | Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it |
| Decimal| effect_duration| 0.0| Duration in seconds of the status ailment applied to the damaged entity |
| String| effect_name| | Identifier of the status ailment to apply to an entity attacked by this entity's melee attack |




**minecraft:spell_effects**

Defines what mob effects to add and remove to the entity when adding this component.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| add_effects| | List of effects to add to this entity after adding this component<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| effect| | Effect to add to this entity. Includes 'duration' in seconds, 'amplifier' level, 'ambient' if it is to be considered an ambient effect, and 'visible' if the effect should be visible |


 |
| String| remove_effects| | List of identifiers of effects to be removed from this entity after adding this component |




**minecraft:strength**

Defines the entity's strength to carry items.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| max| 5| The maximum strength of this entity |
| Integer| value| 1| The initial value of the strength |




## Built-in Events

| Name| Description |
|:-----------:|:-----------:|
| minecraft:entity_born| Event called on an entity that is spawned through two entities breeding. |
| minecraft:entity_spawned| Event called on an entity that is placed in the level. |
| minecraft:entity_transformed| Event called on an entity that transforms into another entity. |
| minecraft:on_prime| Event called on an entity whose fuse is lit and is ready to explode. |




## Components



**minecraft:addrider**

Adds a rider to the entity. Requires minecraft:rideable.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| entity_type| | The entity type that will be riding this entity. |
| String| spawn_event| | The spawn event that will be used when the riding entity is created. |




**minecraft:admire_item**

Causes the mob to ignore attackable targets for a given duration.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| cooldown_after_being_attacked| 0| Duration, in seconds, for which mob won't admire items if it was hurt |
| Integer| duration| 10| Duration, in seconds, that the mob is pacified. |




**minecraft:ageable**

Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| drop_items| | List of items that the entity drops when it grows up. |
| Decimal| duration| 1200.0| Amount of time before the entity grows up, -1 for always a baby. |
| List| feed_items| | List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by |
| String| grow_up| | Event to run when this entity grows up. |
| Item Description Properties| transform_to_item| | The feed item used will transform to this item upon successful interaction. Format: itemName:auxValue |




**minecraft:angry**

Defines the entity's 'angry' state using a timer.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| angry_sound| | The sound event to play when the mob is angry |
| Boolean| broadcast_anger| false| If true, other entities of the same entity definition within the broadcastRange will also become angry |
| Boolean| broadcast_anger_on_attack| false| If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks |
| Boolean| broadcast_anger_on_being_attacked| false| If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked |
| Minecraft Filter| broadcast_filters| | Conditions that make this entry in the list valid |
| Integer| broadcast_range| 20| Distance in blocks within which other entities of the same entity definition will become angry |
| List| broadcast_targets| | A list of entity families to broadcast anger to |
| String| calm_event| | Event to run after the number of seconds specified in duration expires (when the entity stops being 'angry') |
| Integer| duration| 25| The amount of time in seconds that the entity will be angry |
| Integer| duration_delta| 0| Variance in seconds added to the duration [-delta, delta] |
| Minecraft Filter| filters| | Filter out mob types that it should not attack while angry (other Piglins) |
| Range [a, b]| sound_interval| 0| The range of time in seconds to randomly wait before playing the sound again |




**minecraft:annotation.break_door**

Allows the actor to break doors assuming that that flags set up for the component to use in navigation

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| break_time| 12.0| The time in seconds required to break through doors. |
| String| min_difficulty| hard| The minimum difficulty that the world must be on for this entity to break doors. |




**minecraft:annotation.open_door**

Allows the actor to open doors assuming that that flags set up for the component to use in navigation



**minecraft:area_attack**

A component that does damage to entities that get within range.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | String| | cause |
| | Minecraft Filter| | entity_filter |
| Integer| damage_per_tick| 2| How much damage per tick is applied to entities that enter the damage range. |
| Decimal| damage_range| 0.2| How close a hostile entity must be to have the damage applied. |




**minecraft:attack_cooldown**

Adds a cooldown to a mob. The intention of this cooldown is to be used to prevent the mob from attempting to aquire new attack targets.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Trigger| attack_cooldown_complete_event| | Event to be runned when the cooldown is complete. |
| Range [a, b]| attack_cooldown_time| [0.0, 1.0]| Amount of time in seconds for the cooldown. Can be specified as a number or a pair of numbers (min and max). |




**minecraft:barter**

Enables the component to drop an item as a barter exchange.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| barter_table| | Loot table that's used to drop a random item. |
| Integer| cooldown_after_being_attacked| 0| Duration, in seconds, for which mob won't barter items if it was hurt |




**minecraft:block_climber**

Allows the player to detect and maneuver on the scaffolding block.



**minecraft:block_sensor**

Fires off a specified event when a block in the block list is broken within the sensor range.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | Decimal| | sensor_radius |
| | List| | on_break |




**minecraft:boostable**

Defines the conditions and behavior of a rideable entity's boost.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| boost_items| | List of items that can be used to boost while riding this entity. Each item has the following properties:<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| damage| 1| This is the damage that the item will take each time it is used. |
| String| item| | Name of the item that can be used to boost. |
| String| replace_item| | The item used to boost will become this item once it is used up. |


 |
| Decimal| duration| 3.0| Time in seconds for the boost. |
| Decimal| speed_multiplier| 1.0| Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast. |




**minecraft:boss**

The current state of the boss for updating the boss HUD.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| hud_range| 55| The max distance from the boss at which the boss's health bar is present on the players screen. |
| String| name| | The name that will be displayed above the boss's health bar. |
| Boolean| should_darken_sky| false| Whether the sky should darken in the presence of the boss. |




**minecraft:break_blocks**

Specifies the blocks that this entity can break as it moves around.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| breakable_blocks| | A list of the blocks that can be broken as this entity moves around |




**minecraft:breathable**

Defines what blocks this entity can breathe in and gives them the ability to suffocate.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| breathe_blocks| | List of blocks this entity can breathe in, in addition to the above. |
| Boolean| breathes_air| true| If true, this entity can breathe in air. |
| Boolean| breathes_lava| true| If true, this entity can breathe in lava. |
| Boolean| breathes_solids| false| If true, this entity can breathe in solid blocks. |
| Boolean| breathes_water| false| If true, this entity can breathe in water. |
| Boolean| generates_bubbles| true| If true, this entity will have visible bubbles while in water. |
| Decimal| inhale_time| 0| Time in seconds to recover breath to maximum. |
| List| non_breathe_blocks| | List of blocks this entity can't breathe in, in addition to the above. |
| Integer| suffocate_time| -20| Time in seconds between suffocation damage. |
| Integer| total_supply| 15| Time in seconds the entity can hold its breath. |




**minecraft:breedable**

Defines the way an entity can get into the 'love' state.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| allow_sitting| false| If true, entities can breed while sitting |
| Boolean| blend_attributes| true| If true, the entities will blend their attributes in the offspring after they breed. For example, horses blend their health, movement, and jump_strength in their offspring. |
| Decimal| breed_cooldown| 60| Time in seconds before the Entity can breed again. |
| List| breed_items| | The list of items that can be used to get the entity into the 'love' state |
| List| breeds_with| | The list of entity definitions that this entity can breed with.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| baby_type| | The entity definition of this entity's babies. |
| String| breed_event| | Event to run when this entity breeds. |
| String| mate_type| | The entity definition of this entity's mate. |


 |
| Boolean| causes_pregnancy| false| If true, the entity will become pregnant instead of spawning a baby. |
| JSON Object| deny_parents_variant| | Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| chance| 0| The percentage chance of denying the parents' variant. |
| Integer| max_variant| 0| The inclusive maximum of the variant range. |
| Integer| min_variant| 0| The inclusive minimum of the variant range. |


 |
| List| environment_requirements| | The list of nearby block requirements to get the entity into the 'love' state.<br/>

blocks

The block types required nearby for the entity to breed.



count

The number of the required block types nearby for the entity to breed.



radius

How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16.

 |
| Decimal| extra_baby_chance| 0| Chance that up to 16 babies will spawn between 0.0 and 1.0, where 1.0 is 100%. |
| Boolean| inherit_tamed| true| If true, the babies will be automatically tamed if its parents are |
| Minecraft Filter| love_filters| | The filters to run when attempting to fall in love. |
| JSON Object| mutation_factor| | Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| color| 0| The percentage chance of a mutation on the entity's color. |
| Decimal| extra_variant| 0| The percentage chance of a mutation on the entity's extra variant type. |
| Decimal| variant| 0| The percentage chance of a mutation on the entity's variant type. |


 |
| Boolean| require_full_health| false| If true, the entity needs to be at full health before it can breed. |
| Boolean| require_tame| true| If true, the entities need to be tamed first before they can breed. |
| String| transform_to_item| | The breed item used will transform to this item upon successful interaction. Format: itemName:auxValue |




**minecraft:bribeable**

Defines the way an entity can get into the 'bribed' state.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| bribe_cooldown| 2.0| Time in seconds before the Entity can be bribed again. |
| List| bribe_items| | The list of items that can be used to bribe the entity. |




**minecraft:buoyant**

Enables an entity to float on the specified liquid blocks.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| apply_gravity| true| Applies gravity each tick. Causes more of a wave simulation, but will cause more gravity to be applied outside liquids. |
| Decimal| base_buoyancy| 1.0| Base buoyancy used to calculate how much will a mob float. |
| Decimal| big_wave_probability| 0.03| Probability for a big wave hitting the entity. Only used if `simulate_waves` is true. |
| Decimal| big_wave_speed| 10.0| Multiplier for the speed to make a big wave. Triggered depending on 'big_wave_probability'. |
| Decimal| drag_down_on_buoyancy_removed| 0.0| How much an actor will be dragged down when the Buoyancy Component is removed. |
| List| liquid_blocks| | List of blocks this entity can float on. Must be a liquid block. |
| Boolean| simulate_waves| true| Should the movement simulate waves going through. |




**minecraft:burns_in_daylight**

Specifies if/how a mob burns in daylight.



**minecraft:celebrate_hunt**

Specifies hunt celebration behaviour.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| broadcast| true| If true, celebration will be broadcasted to other entities in the radius. |
| Minecraft Filter| celeberation_targets| | The list of conditions that target of hunt must satisfy to initiate celebration. |
| String| celebrate_sound| | The sound event to play when the mob is celebrating |
| Integer| duration| 4| Duration, in seconds, of celebration |
| Decimal| radius| 16| If broadcast is enabled, specifies the radius in which it will notify other entities for celebration. |
| Range [a, b]| sound_interval| 0| The range of time in seconds to randomly wait before playing the sound again |




**minecraft:combat_regeneration**

Gives Regeneration I and removes Mining Fatigue from the mob that kills the Actor's attack target.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| apply_to_family| false| Determines if the mob will grant mobs of the same type combat buffs if they kill the target. |
| Boolean| apply_to_self| false| Determines if the mob will grant itself the combat buffs if it kills the target. |
| Integer| regeneration_duration| 5| The duration in seconds of Regeneration I added to the mob. |




**minecraft:conditional_bandwidth_optimization**

Defines the Conditional Spatial Update Bandwidth Optimizations of this entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| conditional_values| | The object containing the conditional bandwidth optimization values.<br/>

conditional_values

Conditions that must be met for these optimization values to be used.



max_dropped_ticks

In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.



max_optimized_distance

The maximum distance considered during bandwidth optimizations. Any value below the max is interpolated to find optimization, and any value greater than or equal to this max results in max optimization.



use_motion_prediction_hints

When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities.

 |
| JSON Object| default_values| | The object containing the default bandwidth optimization values.<br/>

max_dropped_ticks

In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.



max_optimized_distance

The maximum distance considered during bandwidth optimizations. Any value below the max is interpolated to find optimization, and any value greater than or equal to this max results in max optimization.



use_motion_prediction_hints

When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities.

 |




**minecraft:custom_hit_test**

List of hitboxes for melee and ranged hits against the entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | Array| | hitboxes |




**minecraft:damage_over_time**

Applies defined amount of damage to the entity at specified intervals.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| damage_per_hurt| 1| Amount of damage caused each hurt. |
| Decimal| time_between_hurt| 0.0| Time in seconds between damage. |




**minecraft:damage_sensor**

Defines what events to call when this entity is damaged by specific entities or items.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| triggers| | List of triggers with the events to call when taking specific kinds of damage.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| cause| none| Type of damage that triggers the events. |
| Decimal| damage_modifier| 0.0| A modifier that adds to/removes from the base damage from the damage cause. It does not reduce damage to less than 0. |
| Decimal| damage_multiplier| 1.0| A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1. |
| Boolean| deals_damage| true| If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage. |
| JSON Object| on_damage| | Specifies filters for entity definitions and events. |
| String| on_damage_sound_event| | Defines what sound to play, if any, when the on_damage filters are met. |


 |




**minecraft:despawn**

Despawns the Actor when the despawn rules or optional filters evaluate to true.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | JSON Object| | despawn_from_distance<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| max_distance| 128| maximum distance for standard despawn rules to instantly despawn the mob. |
| Integer| min_distance| 32| minimum distance for standard despawn rules to try to despawn the mob. |


 |
| Boolean| despawn_from_chance| true| Determines if "min_range_random_chance" is used in the standard despawn rules |
| Boolean| despawn_from_inactivity| true| Determines if the "min_range_inactivity_timer" is used in the standard despawn rules. |
| Boolean| despawn_from_simulation_edge| true| Determines if the mob is instantly despawned at the edge of simulation distance in the standard despawn rules. |
| Minecraft Filter| filters| | The list of conditions that must be satisfied before the Actor is despawned. If a filter is defined then standard despawn rules are ignored. |
| Integer| min_range_inactivity_timer| 30| The amount of time in seconds that the mob must be inactive. |
| Integer| min_range_random_chance| 800| A random chance between 1 and the given value. |
| Boolean| remove_child_entities| false| If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned. |




**minecraft:drying_out_timer**

Adds a timer for drying out that will count down and fire 'dried_out_event' or will stop as soon as the entity will get under rain or water and fire 'stopped_drying_out_event'

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| dried_out_event| | Event to fire when the drying out time runs out. |
| String| recover_after_dried_out_event| | Event to fire when entity was already dried out but received increase in water supply. |
| String| stopped_drying_out_event| | Event to fire when entity stopped drying out, for example got into water or under rain. |
| Decimal| total_time| 0.0| Amount of time in seconds to dry out fully. |
| Decimal| water_bottle_refill_time| 0.0| Optional amount of additional time in seconds given by using splash water bottle on entity. |




**minecraft:economy_trade_table**

Defines this entity's ability to trade with players.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| convert_trades_economy| false| Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1. |
| Range [a, b]| cured_discount| [-5, -20]| How much should the discount be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount) |
| String| display_name| | Name to be displayed while trading with this entity |
| Integer| hero_demand_discount| -4| Used in legacy prices to determine how much should Demand be modified by when the player has the Hero of the Village mob effect |
| Range [a, b]| max_cured_discount| [-25, -63]| The max the discount can be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount) |
| Integer| max_nearby_cured_discount| -200| The max the discount can be modified by when the player has cured a nearby Zombie Villager |
| Integer| nearby_cured_discount| -25| How much should the discount be modified by when the player has cured a nearby Zombie Villager |
| Boolean| new_screen| false| Used to determine if trading with entity opens the new trade screen |
| Boolean| persist_trades| false| Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades. |
| Boolean| show_trade_screen| true| Show an in game trade screen when interacting with the mob. |
| String| table| | File path relative to the resource pack root for this entity's trades |
| Boolean| use_legacy_price_formula| false| Determines whether the legacy formula is used to determines the trade prices. |




**minecraft:entity_sensor**

A component that fires an event when a set of conditions are met by other entities within the defined range.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | Minecraft Filter| | event_filters |
| | String| | event |
| Integer| maximum_count| -1| The maximum number of entities that must pass the filter conditions for the event to send. |
| Integer| minimum_count| 1| The minimum number of entities that must pass the filter conditions for the event to send. |
| Boolean| relative_range| true| If true the sensor range is additive on top of the entity's size. |
| Boolean| require_all| false| If true requires all nearby entities to pass the filter conditions for the event to send. |
| Decimal| sensor_range| 10| The maximum distance another entity can be from this and have the filters checked against it. |




**minecraft:environment_sensor**

Creates a trigger based on environment conditions.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| triggers| | The list of triggers that fire when the environment conditions match the given filter criteria. |




**minecraft:equip_item**

The entity puts on the desired equipment.



**minecraft:equippable**

Defines an entity's behavior for having items equipped to it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| slots| | List of slots and the item that can be equipped.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| accepted_items| | The list of items that can go in this slot. |
| String| interact_text| | Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls. |
| String| item| | Identifier of the item that can be equipped for this slot. |
| String| on_equip| | Event to trigger when this entity is equipped with this item. |
| String| on_unequip| | Event to trigger when this item is removed from this entity. |
| Integer| slot| 0| The slot number of this slot. |


 |




**minecraft:experience_reward**

.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Molang| on_bred| 0| A Molang expression defining the amount of experience rewarded when this entity is successfully bred. An array of expressions adds each expression's result together for a final total. |
| Molang| on_death| 0| A Molang expression defining the amount of experience rewarded when this entity dies. An array of expressions adds each expression's result together for a final total. |




**minecraft:explode**

Defines how the entity explodes.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| breaks_blocks| true| If true, the explosion will destroy blocks in the explosion radius. |
| Boolean| causes_fire| false| If true, blocks in the explosion radius will be set on fire. |
| Boolean| destroy_affected_by_griefing| false| If true, whether the explosion breaks blocks is affected by the mob griefing game rule. |
| Boolean| fire_affected_by_griefing| false| If true, whether the explosion causes fire is affected by the mob griefing game rule. |
| Range [a, b]| fuse_length| [0.0, 0.0]| The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate. |
| Boolean| fuse_lit| false| If true, the fuse is already lit when this component is added to the entity. |
| Decimal| max_resistance| 3.40282e+38| A blocks explosion resistance will be capped at this value when an explosion occurs. |
| Decimal| power| 3| The radius of the explosion in blocks and the amount of damage the explosion deals. |




**minecraft:flocking**

Allows entities to flock in groups in water or not.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| block_distance| 0| The amount of blocks away the entity will look at to push away from. |
| Decimal| block_weight| 0| The weight of the push back away from blocks. |
| Decimal| breach_influence| 0| The amount of push back given to a flocker that breaches out of the water. |
| Decimal| cohesion_threshold| 1| The threshold in which to start applying cohesion. |
| Decimal| cohesion_weight| 1| The weight applied for the cohesion steering of the flock. |
| Decimal| goal_weight| 0| The weight on which to apply on the goal output. |
| Integer| high_flock_limit| 0| Determines the high bound amount of entities that can be allowed in the flock. |
| Boolean| in_water| false| Tells the Flocking Component if the entity exists in water. |
| Decimal| influence_radius| 0| The area around the entity that allows others to be added to the flock. |
| Decimal| innner_cohesion_threshold| 0| The distance in which the flocker will stop applying cohesion. |
| Decimal| loner_chance| 0| The percentage chance between 0-1 that a fish will spawn and not want to join flocks. Invalid values will be capped at the end points. |
| Integer| low_flock_limit| 0| Determines the low bound amount of entities that can be allowed in the flock. |
| Boolean| match_variants| false| Tells the flockers that they can only match similar entities that also match the variant, mark variants, and color data of the other potential flockers. |
| Decimal| max_height| 0| The max height allowable in the air or water. |
| Decimal| min_height| 0| The min height allowable in the air or water. |
| Decimal| separation_threshold| 2| The distance that is determined to be to close to another flocking and to start applying separation. |
| Decimal| separation_weight| 1| The weight applied to the separation of the flock. |
| Boolean| use_center_of_mass| false| Tells the flockers that they will follow flocks based on the center of mass. |




**minecraft:genetics**

Defines the way a mob's genes and alleles are passed on to it's offspring, and how those traits manifest in the child. Compatible parent genes are crossed together, the alleles are handed down from the parents to the child, and any matching genetic variants fire off JSON events to modify the child and express the traits.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| genes| | The list of genes that this entity has and will cross with a partner during breeding.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| allele_range| | The range of positive integer allele values for this gene. Spawned mobs will have a random number in this range assigned to them.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| range_max| 0| Upper bound of the allele values for this gene. |
| Integer| range_min| 0| Lower bound of the allele values for this gene. |


 |
| List| genetic_variants| | The list of genetic variants for this gene. These check for particular allele combinations and fire events when all of them are satisfied.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| birth_event| | Event to run when this mob is created and matches the above allele conditions. |
| Integer| both_allele| -1| If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with both. Can also be a range of integers. |
| Integer| either_allele| -1| If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with either. Can also be a range of integers. |
| Integer| hidden_allele| -1| If this value is non-negative, compare the mob's hidden allele with this value for a match. Can also be a range of integers. |
| Integer| main_allele| -1| If this value is non-negative, compare the mob's main allele with this value for a match. Can also be a range of integers. |


 |
| String| name| | The name of the gene. |


 |
| Decimal| mutation_rate| 0.03125| Chance that an allele will be replaced with a random one instead of the parent's allele during birth. |




**minecraft:giveable**

Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| cooldown| 0.0| An optional cool down in seconds to prevent spamming interactions. |
| List| items| | The list of items that can be given to the entity to place in their inventory. |
| String| on_give| | Event to fire when the correct item is given. |




**minecraft:group_size**

Keeps track of entity group size in the given radius.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | The list of conditions that must be satisfied for other entities to be counted towards group size. |
| Decimal| radius| 16| Radius from center of entity. |




**minecraft:grows_crop**

Could increase crop growth when entity walks over crop

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| chance| 0| Value between 0-1. Chance of success per tick. |
| Integer| charges| 10| Number of charges |




**minecraft:healable**

Defines the interactions with this entity for healing it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | The filter group that defines the conditions for using this item to heal the entity. |
| Boolean| force_use| false| Determines if item can be used regardless of entity being at full health. |
| Array| items| | The array of items that can be used to heal this entity.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| heal_amount| 1| The amount of health this entity gains when fed this item. |
| String| item| | Item identifier that can be used to heal this entity. |


 |




**minecraft:home**

Saves a home pos for when the the entity is spawned.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| home_block_list| | Optional block list that the home position will be associated with. If any of the blocks no longer exist at that position, the home restriction is removed. Example syntax: minecraft:sand.  Not supported: minecraft:sand:1 |
| Integer| restriction_radius| -1| The radius that the entity will be restricted to in relation to its home |




**minecraft:hurt_on_condition**

Defines a set of conditions under which an entity should take damage.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | Array| | damage_conditions<br/>

Minecraft Filter

filters



String

cause

****
```
none
```



damage_per_tick

The amount of damage done each tick that the conditions are met.

 |




**minecraft:inside_block_notifier**

Verifies whether the entity is inside any of the listed blocks.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| block_list| | List of blocks, with certain block states, that we are monitoring to see if the entity is inside. |




**minecraft:insomnia**

Adds a timer since last rested to see if phantoms should spawn.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| days_until_insomnia| 3.0| Number of days the mob has to stay up until the insomnia effect begins. |




**minecraft:instant_despawn**

Despawns the Actor immediately.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| remove_child_entities| false| If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned. |




**minecraft:interact**

Defines interactions with this entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| add_items| | Loot table with items to add to the player's inventory upon successful interaction.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| table| | File path, relative to the Behavior Pack's path, to the loot table file. |


 |
| Decimal| cooldown| 0| Time in seconds before this entity can be interacted with again. |
| Decimal| cooldown_after_being_attacked| 0| Time in seconds before this entity can be interacted with after being attacked. |
| Integer| hurt_item| 0| The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. |
| String| interact_text| | Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls. |
| String| on_interact| | Event to fire when the interaction occurs. |
| JSON Object| particle_on_start| | Particle effect that will be triggered at the start of the interaction.<br/>

particle_offset_towards_interactor

Whether or not the particle will appear closer to who performed the interaction.



particle_type

The type of particle that will be spawned.



particle_y_offset

Will offset the particle this amount in the y direction.

 |
| String| play_sounds| | List of sounds to play when the interaction occurs. |
| String| spawn_entities| | List of entities to spawn when the interaction occurs. |
| JSON Object| spawn_items| | Loot table with items to drop on the ground upon successful interaction.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| table| | File path, relative to the Behavior Pack's path, to the loot table file. |


 |
| Boolean| swing| false| If true, the player will do the 'swing' animation when interacting with this entity. |
| String| transform_to_item| | The item used will transform to this item upon successful interaction. Format: itemName:auxValue |
| Boolean| use_item| false| If true, the interaction will use an item. |




**minecraft:inventory**

Defines this entity's inventory properties.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| additional_slots_per_strength| 0| Number of slots that this entity can gain per extra strength |
| Boolean| can_be_siphoned_from| false| If true, the contents of this inventory can be removed by a hopper |
| String| container_type| none| Type of container this entity has. Can be horse, minecart_chest, minecart_hopper, inventory, container or hopper |
| Integer| inventory_size| 5| Number of slots the container has |
| Boolean| private| false| If true, the entity will not drop it's inventory on death |
| Boolean| restrict_to_owner| false| If true, the entity's inventory can only be accessed by its owner or itself |




**minecraft:item_hopper**

Determines that this entity is an item hopper.



**minecraft:jump.dynamic**

Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob.



**minecraft:jump.static**

Gives the entity the ability to jump.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| jump_power| 0.42| The initial vertical velocity for the jump |




**minecraft:leashable**

Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| can_be_stolen| false| If true, players can leash this entity even if it is already leashed to another mob. |
| Decimal| hard_distance| 6| Distance in blocks at which the leash stiffens, restricting movement. |
| Decimal| max_distance| 10| Distance in blocks at which the leash breaks. |
| String| on_leash| | Event to call when this entity is leashed. |
| String| on_unleash| | Event to call when this entity is unleashed. |
| Decimal| soft_distance| 4| Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it. |




**minecraft:lookat**

Defines the behavior when another entity looks at this entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| allow_invulnerable| false| If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets. |
| Minecraft Filter| filters| | Defines the entities that can trigger this component. |
| Range [a, b]| look_cooldown| [0, 0]| The range for the random amount of time during which the entity is 'cooling down' and won't get angered or look for a target. |
| String| look_event| | The event identifier to run when the entities specified in filters look at this entity. |
| Decimal| search_radius| 10| Maximum distance this entity will look for another entity looking at it. |
| Boolean| set_target| true| If true, this entity will set the attack target as the entity that looked at it. |




**minecraft:managed_wandering_trader**

This component is used to implement part of the Wandering Trader behavior



**minecraft:mob_effect**

A component that applies a mob effect to entities that get within range.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| | Minecraft Filter| | entity_filter |
| Decimal| effect_range| 0.2| How close a hostile entity must be to have the mob effect applied. |
| Integer| effect_time| 10| How long the applied mob effect lasts in seconds. |
| String| mob_effect| | The mob effect that is applied to entities that enter this entities effect range. |




**minecraft:movement.amphibious**

This move control allows the mob to swim in water and walk on land.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| max_turn| 30.0| The maximum number in degrees the mob can turn per tick. |




**minecraft:movement.basic**

This component accents the movement of an entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| max_turn| 30.0| The maximum number in degrees the mob can turn per tick. |




**minecraft:movement.fly**

This move control causes the mob to fly.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| max_turn| 30.0| The maximum number in degrees the mob can turn per tick. |




**minecraft:movement.generic**

This move control allows a mob to fly, swim, climb, etc.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| max_turn| 30.0| The maximum number in degrees the mob can turn per tick. |




**minecraft:movement.hover**

This move control causes the mob to hover.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| max_turn| 30.0| The maximum number in degrees the mob can turn per tick. |




**minecraft:movement.jump**

Move control that causes the mob to jump as it moves with a specified delay between jumps.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Range [a, b]| jump_delay| [0.0, 0.0]| Delay after landing when using the slime move control. |
| Decimal| max_turn| 30.0| The maximum number in degrees the mob can turn per tick. |




**minecraft:movement.skip**

This move control causes the mob to hop as it moves.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| max_turn| 30.0| The maximum number in degrees the mob can turn per tick. |




**minecraft:movement.sway**

This move control causes the mob to sway side to side giving the impression it is swimming.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| max_turn| 30.0| The maximum number in degrees the mob can turn per tick. |




**minecraft:nameable**

Allows this entity to be named (e.g. using a name tag).

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| allow_name_tag_renaming| true| If true, this entity can be renamed with name tags |
| Boolean| always_show| false| If true, the name will always be shown |
| String| default_trigger| | Trigger to run when the entity gets named |
| JSON Object| name_actions| | Describes the special names for this entity and the events to call when the entity acquires those names<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| name_filter| | List of special names that will cause the events defined in 'on_named' to fire |
| String| on_named| | Event to be called when this entity acquires the name specified in 'name_filter' |


 |




**minecraft:navigation.climb**

Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_damage_blocks| false| Tells the pathfinder to avoid blocks that cause damage when finding a path |
| Boolean| avoid_portals| false| Tells the pathfinder to avoid portals (like nether portals) when finding a path |
| Boolean| avoid_sun| false| Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths |
| Boolean| avoid_water| false| Tells the pathfinder to avoid water when creating a path |
| List| blocks_to_avoid| | Tells the pathfinder which blocks to avoid when creating a path |
| Boolean| can_breach| false| Tells the pathfinder whether or not it can jump out of water (like a dolphin) |
| Boolean| can_break_doors| false| Tells the pathfinder that it can path through a closed door and break it |
| Boolean| can_jump| true| Tells the pathfinder whether or not it can jump up blocks |
| Boolean| can_open_doors| false| Tells the pathfinder that it can path through a closed door assuming the AI will open the door |
| Boolean| can_open_iron_doors| false| Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |
| Boolean| can_pass_doors| true| Whether a path can be created through a door |
| Boolean| can_path_from_air| false| Tells the pathfinder that it can start pathing when in the air |
| Boolean| can_path_over_lava| false| Tells the pathfinder whether or not it can travel on the surface of the lava |
| Boolean| can_path_over_water| false| Tells the pathfinder whether or not it can travel on the surface of the water |
| Boolean| can_sink| true| Tells the pathfinder whether or not it will be pulled down by gravity while in water |
| Boolean| can_swim| false| Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |
| Boolean| can_walk| true| Tells the pathfinder whether or not it can walk on the ground outside water |
| Boolean| can_walk_in_lava| false| Tells the pathfinder whether or not it can travel in lava like walking on ground |
| Boolean| is_amphibious| false| Tells the pathfinder whether or not it can walk on the ground underwater |




**minecraft:navigation.float**

Allows this entity to generate paths by flying around the air like the regular Ghast.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_damage_blocks| false| Tells the pathfinder to avoid blocks that cause damage when finding a path |
| Boolean| avoid_portals| false| Tells the pathfinder to avoid portals (like nether portals) when finding a path |
| Boolean| avoid_sun| false| Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths |
| Boolean| avoid_water| false| Tells the pathfinder to avoid water when creating a path |
| List| blocks_to_avoid| | Tells the pathfinder which blocks to avoid when creating a path |
| Boolean| can_breach| false| Tells the pathfinder whether or not it can jump out of water (like a dolphin) |
| Boolean| can_break_doors| false| Tells the pathfinder that it can path through a closed door and break it |
| Boolean| can_jump| true| Tells the pathfinder whether or not it can jump up blocks |
| Boolean| can_open_doors| false| Tells the pathfinder that it can path through a closed door assuming the AI will open the door |
| Boolean| can_open_iron_doors| false| Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |
| Boolean| can_pass_doors| true| Whether a path can be created through a door |
| Boolean| can_path_from_air| false| Tells the pathfinder that it can start pathing when in the air |
| Boolean| can_path_over_lava| false| Tells the pathfinder whether or not it can travel on the surface of the lava |
| Boolean| can_path_over_water| false| Tells the pathfinder whether or not it can travel on the surface of the water |
| Boolean| can_sink| true| Tells the pathfinder whether or not it will be pulled down by gravity while in water |
| Boolean| can_swim| false| Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |
| Boolean| can_walk| true| Tells the pathfinder whether or not it can walk on the ground outside water |
| Boolean| can_walk_in_lava| false| Tells the pathfinder whether or not it can travel in lava like walking on ground |
| Boolean| is_amphibious| false| Tells the pathfinder whether or not it can walk on the ground underwater |




**minecraft:navigation.fly**

Allows this entity to generate paths in the air like the vanilla Parrots do.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_damage_blocks| false| Tells the pathfinder to avoid blocks that cause damage when finding a path |
| Boolean| avoid_portals| false| Tells the pathfinder to avoid portals (like nether portals) when finding a path |
| Boolean| avoid_sun| false| Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths |
| Boolean| avoid_water| false| Tells the pathfinder to avoid water when creating a path |
| List| blocks_to_avoid| | Tells the pathfinder which blocks to avoid when creating a path |
| Boolean| can_breach| false| Tells the pathfinder whether or not it can jump out of water (like a dolphin) |
| Boolean| can_break_doors| false| Tells the pathfinder that it can path through a closed door and break it |
| Boolean| can_jump| true| Tells the pathfinder whether or not it can jump up blocks |
| Boolean| can_open_doors| false| Tells the pathfinder that it can path through a closed door assuming the AI will open the door |
| Boolean| can_open_iron_doors| false| Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |
| Boolean| can_pass_doors| true| Whether a path can be created through a door |
| Boolean| can_path_from_air| false| Tells the pathfinder that it can start pathing when in the air |
| Boolean| can_path_over_lava| false| Tells the pathfinder whether or not it can travel on the surface of the lava |
| Boolean| can_path_over_water| false| Tells the pathfinder whether or not it can travel on the surface of the water |
| Boolean| can_sink| true| Tells the pathfinder whether or not it will be pulled down by gravity while in water |
| Boolean| can_swim| false| Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |
| Boolean| can_walk| true| Tells the pathfinder whether or not it can walk on the ground outside water |
| Boolean| can_walk_in_lava| false| Tells the pathfinder whether or not it can travel in lava like walking on ground |
| Boolean| is_amphibious| false| Tells the pathfinder whether or not it can walk on the ground underwater |




**minecraft:navigation.generic**

Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_damage_blocks| false| Tells the pathfinder to avoid blocks that cause damage when finding a path |
| Boolean| avoid_portals| false| Tells the pathfinder to avoid portals (like nether portals) when finding a path |
| Boolean| avoid_sun| false| Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths |
| Boolean| avoid_water| false| Tells the pathfinder to avoid water when creating a path |
| List| blocks_to_avoid| | Tells the pathfinder which blocks to avoid when creating a path |
| Boolean| can_breach| false| Tells the pathfinder whether or not it can jump out of water (like a dolphin) |
| Boolean| can_break_doors| false| Tells the pathfinder that it can path through a closed door and break it |
| Boolean| can_jump| true| Tells the pathfinder whether or not it can jump up blocks |
| Boolean| can_open_doors| false| Tells the pathfinder that it can path through a closed door assuming the AI will open the door |
| Boolean| can_open_iron_doors| false| Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |
| Boolean| can_pass_doors| true| Whether a path can be created through a door |
| Boolean| can_path_from_air| false| Tells the pathfinder that it can start pathing when in the air |
| Boolean| can_path_over_lava| false| Tells the pathfinder whether or not it can travel on the surface of the lava |
| Boolean| can_path_over_water| false| Tells the pathfinder whether or not it can travel on the surface of the water |
| Boolean| can_sink| true| Tells the pathfinder whether or not it will be pulled down by gravity while in water |
| Boolean| can_swim| false| Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |
| Boolean| can_walk| true| Tells the pathfinder whether or not it can walk on the ground outside water |
| Boolean| can_walk_in_lava| false| Tells the pathfinder whether or not it can travel in lava like walking on ground |
| Boolean| is_amphibious| false| Tells the pathfinder whether or not it can walk on the ground underwater |




**minecraft:navigation.hover**

Allows this entity to generate paths in the air like the vanilla Bees do. Keeps them from falling out of the skies and doing predictive movement.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_damage_blocks| false| Tells the pathfinder to avoid blocks that cause damage when finding a path |
| Boolean| avoid_portals| false| Tells the pathfinder to avoid portals (like nether portals) when finding a path |
| Boolean| avoid_sun| false| Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths |
| Boolean| avoid_water| false| Tells the pathfinder to avoid water when creating a path |
| List| blocks_to_avoid| | Tells the pathfinder which blocks to avoid when creating a path |
| Boolean| can_breach| false| Tells the pathfinder whether or not it can jump out of water (like a dolphin) |
| Boolean| can_break_doors| false| Tells the pathfinder that it can path through a closed door and break it |
| Boolean| can_jump| true| Tells the pathfinder whether or not it can jump up blocks |
| Boolean| can_open_doors| false| Tells the pathfinder that it can path through a closed door assuming the AI will open the door |
| Boolean| can_open_iron_doors| false| Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |
| Boolean| can_pass_doors| true| Whether a path can be created through a door |
| Boolean| can_path_from_air| false| Tells the pathfinder that it can start pathing when in the air |
| Boolean| can_path_over_lava| false| Tells the pathfinder whether or not it can travel on the surface of the lava |
| Boolean| can_path_over_water| false| Tells the pathfinder whether or not it can travel on the surface of the water |
| Boolean| can_sink| true| Tells the pathfinder whether or not it will be pulled down by gravity while in water |
| Boolean| can_swim| false| Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |
| Boolean| can_walk| true| Tells the pathfinder whether or not it can walk on the ground outside water |
| Boolean| can_walk_in_lava| false| Tells the pathfinder whether or not it can travel in lava like walking on ground |
| Boolean| is_amphibious| false| Tells the pathfinder whether or not it can walk on the ground underwater |




**minecraft:navigation.swim**

Allows this entity to generate paths that include water.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_damage_blocks| false| Tells the pathfinder to avoid blocks that cause damage when finding a path |
| Boolean| avoid_portals| false| Tells the pathfinder to avoid portals (like nether portals) when finding a path |
| Boolean| avoid_sun| false| Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths |
| Boolean| avoid_water| false| Tells the pathfinder to avoid water when creating a path |
| List| blocks_to_avoid| | Tells the pathfinder which blocks to avoid when creating a path |
| Boolean| can_breach| false| Tells the pathfinder whether or not it can jump out of water (like a dolphin) |
| Boolean| can_break_doors| false| Tells the pathfinder that it can path through a closed door and break it |
| Boolean| can_jump| true| Tells the pathfinder whether or not it can jump up blocks |
| Boolean| can_open_doors| false| Tells the pathfinder that it can path through a closed door assuming the AI will open the door |
| Boolean| can_open_iron_doors| false| Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |
| Boolean| can_pass_doors| true| Whether a path can be created through a door |
| Boolean| can_path_from_air| false| Tells the pathfinder that it can start pathing when in the air |
| Boolean| can_path_over_lava| false| Tells the pathfinder whether or not it can travel on the surface of the lava |
| Boolean| can_path_over_water| false| Tells the pathfinder whether or not it can travel on the surface of the water |
| Boolean| can_sink| true| Tells the pathfinder whether or not it will be pulled down by gravity while in water |
| Boolean| can_swim| false| Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |
| Boolean| can_walk| true| Tells the pathfinder whether or not it can walk on the ground outside water |
| Boolean| can_walk_in_lava| false| Tells the pathfinder whether or not it can travel in lava like walking on ground |
| Boolean| is_amphibious| false| Tells the pathfinder whether or not it can walk on the ground underwater |




**minecraft:navigation.walk**

Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| avoid_damage_blocks| false| Tells the pathfinder to avoid blocks that cause damage when finding a path |
| Boolean| avoid_portals| false| Tells the pathfinder to avoid portals (like nether portals) when finding a path |
| Boolean| avoid_sun| false| Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths |
| Boolean| avoid_water| false| Tells the pathfinder to avoid water when creating a path |
| List| blocks_to_avoid| | Tells the pathfinder which blocks to avoid when creating a path |
| Boolean| can_breach| false| Tells the pathfinder whether or not it can jump out of water (like a dolphin) |
| Boolean| can_break_doors| false| Tells the pathfinder that it can path through a closed door and break it |
| Boolean| can_jump| true| Tells the pathfinder whether or not it can jump up blocks |
| Boolean| can_open_doors| false| Tells the pathfinder that it can path through a closed door assuming the AI will open the door |
| Boolean| can_open_iron_doors| false| Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |
| Boolean| can_pass_doors| true| Whether a path can be created through a door |
| Boolean| can_path_from_air| false| Tells the pathfinder that it can start pathing when in the air |
| Boolean| can_path_over_lava| false| Tells the pathfinder whether or not it can travel on the surface of the lava |
| Boolean| can_path_over_water| false| Tells the pathfinder whether or not it can travel on the surface of the water |
| Boolean| can_sink| true| Tells the pathfinder whether or not it will be pulled down by gravity while in water |
| Boolean| can_swim| false| Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |
| Boolean| can_walk| true| Tells the pathfinder whether or not it can walk on the ground outside water |
| Boolean| can_walk_in_lava| false| Tells the pathfinder whether or not it can travel in lava like walking on ground |
| Boolean| is_amphibious| false| Tells the pathfinder whether or not it can walk on the ground underwater |




**minecraft:out_of_control**

Defines the entity's 'out of control' state.



**minecraft:peek**

Defines the entity's 'peek' behavior, defining the events that should be called during it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| on_close| | Event to call when the entity is done peeking. |
| String| on_open| | Event to call when the entity starts peeking. |
| String| on_target_open| | Event to call when the entity's target entity starts peeking. |




**minecraft:persistent**

Defines whether an entity should be persistent in the game world.



**minecraft:physics**

Defines physics properties of an actor, including if it is affected by gravity or if it collides with objects.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| has_collision| true| Whether or not the object collides with things. |
| Boolean| has_gravity| true| Whether or not the entity is affected by gravity. |




**minecraft:preferred_path**

Specifies costing information for mobs that prefer to walk on preferred paths.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| default_block_cost| 0| Cost for non-preferred blocks |
| Integer| jump_cost| 0| Added cost for jumping up a node |
| Integer| max_fall_blocks| 3| Distance mob can fall without taking damage |
| List| preferred_path_blocks| | A list of blocks with their associated cost |




**minecraft:projectile**

Allows the entity to be a thrown entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| angle_offset| 0| Determines the angle at which the projectile is thrown |
| Boolean| catch_fire| false| If true, the entity hit will be set on fire |
| Boolean| crit_particle_on_hurt| false| If true, the projectile will produce additional particles when a critical hit happens |
| Boolean| destroy_on_hurt| false| If true, this entity will be destroyed when hit |
| String| filter| | Entity Definitions defined here can't be hurt by the projectile |
| Boolean| fire_affected_by_griefing| false| If true, whether the projectile causes fire is affected by the mob griefing game rule |
| Decimal| gravity| 0.05| The gravity applied to this entity when thrown. The higher the value, the faster the entity falls |
| String| hit_sound| | The sound that plays when the projectile hits something |
| Boolean| homing| false| If true, the projectile homes in to the nearest entity |
| Decimal| inertia| 0.99| The fraction of the projectile's speed maintained every frame while traveling in air |
| Boolean| is_dangerous| false| If true, the projectile will be treated as dangerous to the players |
| Boolean| knockback| true| If true, the projectile will knock back the entity it hits |
| Boolean| lightning| false| If true, the entity hit will be struck by lightning |
| Decimal| liquid_inertia| 0.6| The fraction of the projectile's speed maintained every frame while traveling in water |
| Boolean| multiple_targets| true| If true, the projectile can hit multiple entities per flight |
| Vector [a, b, c]| offset| [0, 0, 0]| The offset from the entity's anchor where the projectile will spawn |
| Decimal| on_fire_time| 5| Time in seconds that the entity hit will be on fire for |
| String| particle| iconcrack| Particle to use upon collision |
| Integer| potion_effect| -1| Defines the effect the arrow will apply to the entity it hits |
| Decimal| power| 1.3| Determines the velocity of the projectile |
| Boolean| reflect_on_hurt| false| If true, this entity will be reflected back when hit |
| Boolean| semi_random_diff_damage| false| If true, damage will be randomized based on damage and speed |
| String| shoot_sound| | The sound that plays when the projectile is shot |
| Boolean| shoot_target| true| If true, the projectile will be shot towards the target of the entity firing it |
| Boolean| should_bounce| false| If true, the projectile will bounce upon hit |
| Boolean| splash_potion| false| If true, the projectile will be treated like a splash potion |
| Decimal| splash_range| 4| Radius in blocks of the 'splash' effect |
| Decimal| uncertainty_base| 0| The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier |
| Decimal| uncertainty_multiplier| 0| Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier |




**minecraft:pushable**

Defines what can push an entity between other entities and pistons.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| is_pushable| true| Whether the entity can be pushed by other entities. |
| Boolean| is_pushable_by_piston| true| Whether the entity can be pushed by pistons safely. |




**minecraft:raid_trigger**

Attempts to trigger a raid at the entity's location.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| triggered_event| | Event to run we attempt to trigger a raid on the village. |




**minecraft:rail_movement**

Defines the entity's movement on the rails. An entity with this component is only allowed to move on the rail.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| max_speed| 0.4| Maximum speed that this entity will move at when on the rail. |




**minecraft:rail_sensor**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| check_block_types| false| If true, on tick this entity will trigger its on_deactivate behavior |
| Boolean| eject_on_activate| true| If true, this entity will eject all of its riders when it passes over an activated rail |
| Boolean| eject_on_deactivate| false| If true, this entity will eject all of its riders when it passes over a deactivated rail |
| String| on_activate| | Event to call when the rail is activated |
| String| on_deactivate| | Event to call when the rail is deactivated |
| Boolean| tick_command_block_on_activate| true| If true, command blocks will start ticking when passing over an activated rail |
| Boolean| tick_command_block_on_deactivate| false| If false, command blocks will stop ticking when passing over a deactivated rail |




**minecraft:ravager_blocked**

Defines the ravager's response to their melee attack being blocked.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| knockback_strength| 3.0| The strength with which blocking entities should be knocked back |
| List| reaction_choices| [ ]| A list of weighted responses to the melee attack being blocked |




**minecraft:rideable**

Determines whether this entity can be ridden. Allows specifying the different seat positions and quantity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| controlling_seat| 0| The seat that designates the driver of the entity |
| Boolean| crouching_skip_interact| true| If true, this entity can't be interacted with if the entity interacting with it is crouching |
| List| family_types| | List of entities that can ride this entity |
| String| interact_text| | The text to display when the player can interact with the entity when playing with Touch-screen controls |
| Integer| priority| 0| This field may exist in old data but isn't used by minecraft:rideable. |
| Boolean| pull_in_entities| false| If true, this entity will pull in entities that are in the correct family_types into any available seats |
| Boolean| rider_can_interact| false| If true, this entity will be picked when looked at by the rider |
| Integer| seat_count| 1| The number of entities that can ride this entity at the same time |
| List| seats| | The list of positions and number of riders for each position for entities riding this entity<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| lock_rider_rotation| 181| Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit |
| Integer| max_rider_count| seat_count| Defines the maximum number of riders that can be riding this entity for this seat to be valid |
| Integer| min_rider_count| 0| Defines the minimum number of riders that need to be riding this entity before this seat can be used |
| Vector [a, b, c]| position| [0, 0, 0]| Position of this seat relative to this entity's position |
| Molang| rotate_rider_by| 0| Offset to rotate riders by |


 |




**minecraft:scale_by_age**

Defines the entity's size interpolation based on the entity's age.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| end_scale| 1| Ending scale of the entity when it's fully grown. |
| Decimal| start_scale| 1| Initial scale of the newborn entity. |




**minecraft:scheduler**

Fires off scheduled mob events at time of day events.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| scheduled_events| | The list of triggers that fire when the conditions match the given filter criteria. If any filter criteria overlap the first defined event will be picked. |




**minecraft:shareables**

Defines a list of items the mob wants to share or pick up. Each item must have the following parameters:

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| all_items| false| A bucket for all other items in the game. Note this category is always least priority items. |
| Integer| all_items_max_amount| -1| Maximum number of this item the mob will hold. |
| Integer| all_items_surplus_amount| -1| Number of this item considered extra that the entity wants to share. |
| Integer| all_items_want_amount| -1| Number of this item this entity wants to share. |
| List| items| | List of items that the entity wants to share.<br/>

admire

Mob will admire the item after picking up by looking at it. For this to happen the mob needs to have an Admire component and an Admire goal.



barter

Mob will barter for the item after picking it up. For this to work the mob needs to have a Barter component and a Barter goal.



consume_item

Determines whether the mob will consume the item or not.



craft_into

Defines the item this entity wants to craft with the item defined above. Should be an item name.



item

The name of the item. Aux value can be specified, for instance 'minecraft:skull:1'.



max_amount

Maximum number of this item the mob will hold.



pickup_limit

Maximum number of this item the mob will pick up during a single goal tick.



priority

Prioritizes which items the entity prefers. 0 is the highest priority.



stored_in_inventory

Determines whether the mob will try to put the item in its inventory if it has the inventory component and if it can't be equipped.



surplus_amount

Number of this item considered extra that the entity wants to share.



want_amount

Number of this item this entity wants to have.

 |




**minecraft:shooter**

Defines the entity's ranged attack behavior.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| aux_val| -1| ID of the Potion effect to be applied on hit |
| String| def| | Actor definition to use as projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile |




**minecraft:sittable**

Defines the entity's 'sit' state.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| sit_event| | Event to run when the entity enters the 'sit' state |
| String| stand_event| | Event to run when the entity exits the 'sit' state |




**minecraft:spawn_entity**

Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Minecraft Filter| filters| | If present, the specified entity will only spawn if the filter evaluates to true. |
| Integer| max_wait_time| 600| Maximum amount of time to randomly wait in seconds before another entity is spawned. |
| Integer| min_wait_time| 300| Minimum amount of time to randomly wait in seconds before another entity is spawned. |
| Integer| num_to_spawn| 1| The number of entities of this type to spawn each time that this triggers. |
| Boolean| should_leash| false| If true, this the spawned entity will be leashed to the parent. |
| Boolean| single_use| false| If true, this component will only ever spawn the specified entity once. |
| String| spawn_entity| | Identifier of the entity to spawn, leave empty to spawn the item defined above instead. |
| String| spawn_event| minecraft:entity_born| Event to call when the entity is spawned. |
| String| spawn_item| egg| Item identifier of the item to spawn. |
| String| spawn_method| born| Method to use to spawn the entity. |
| String| spawn_sound| plop| Identifier of the sound effect to play when the entity is spawned. |




**minecraft:strength**

Defines the entity's strength to carry items.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| max| 5| The maximum strength of this entity |
| Integer| value| 1| The initial value of the strength |




**minecraft:tameable**

Defines the rules for a mob to be tamed by the player.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| probability| 1| The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100% |
| String| tame_event| | Event to run when this entity becomes tamed |
| List| tame_items| | The list of items that can be used to tame this entity |




**minecraft:tamemount**

Allows the Entity to be tamed by mounting it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| attempt_temper_mod| 5| The amount the entity's temper will increase when mounted. |
| JSON Object| autoRejectItems| | The list of items that, if carried while interacting with the entity, will anger it.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| item| | Name of the item this entity dislikes and will cause it to get angry if used while untamed. |


 |
| JSON Object| feed_items| | The list of items that can be used to increase the entity's temper and speed up the taming process.<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| item| | Name of the item this entity likes and can be used to increase this entity's temper. |
| Integer| temper_mod| 0| The amount of temper this entity gains when fed this item. |


 |
| String| feed_text| | The text that shows in the feeding interact button. |
| Integer| max_temper| 100| The maximum value for the entity's random starting temper. |
| Integer| min_temper| 0| The minimum value for the entity's random starting temper. |
| String| ride_text| | The text that shows in the riding interact button. |
| String| tame_event| | Event that triggers when the entity becomes tamed. |




**minecraft:target_nearby_sensor**

Defines the entity's range within which it can see or sense other entities to target them.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| inside_range| 1| Maximum distance in blocks that another entity will be considered in the 'inside' range |
| Boolean| must_see| false| Whether the other entity needs to be visible to trigger 'inside' events |
| String| on_inside_range| | Event to call when an entity gets in the inside range. Can specify 'event' for the name of the event and 'target' for the target of the event |
| String| on_outside_range| | Event to call when an entity gets in the outside range. Can specify 'event' for the name of the event and 'target' for the target of the event |
| String| on_vision_lost_inside_range| | Event to call when an entity exits visual range. Can specify 'event' for the name of the event and 'target' for the target of the event |
| Decimal| outside_range| 5| Maximum distance in blocks that another entity will be considered in the 'outside' range |




**minecraft:teleport**

Defines an entity's teleporting behavior.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| dark_teleport_chance| 0.01| Modifies the chance that the entity will teleport if the entity is in darkness |
| Decimal| light_teleport_chance| 0.01| Modifies the chance that the entity will teleport if the entity is in daylight |
| Decimal| max_random_teleport_time| 20| Maximum amount of time in seconds between random teleports |
| Decimal| min_random_teleport_time| 0| Minimum amount of time in seconds between random teleports |
| Vector [a, b, c]| random_teleport_cube| [32, 16, 32]| Entity will teleport to a random position within the area defined by this cube |
| Boolean| random_teleports| true| If true, the entity will teleport randomly |
| Decimal| target_distance| 16| Maximum distance the entity will teleport when chasing a target |
| Decimal| target_teleport_chance| 1| The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100% |




**minecraft:tick_world**

Defines if the entity ticks the world and the radius around it to tick.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| distance_to_players| 128| The distance at which the closest player has to be before this entity despawns. This option will be ignored if never_despawn is true. Min: 128 blocks. |
| Boolean| never_despawn| true| If true, this entity will not despawn even if players are far away. If false, distance_to_players will be used to determine when to despawn. |
| Positive Integer| radius| 2| The area around the entity to tick. Default: 2. Allowed range: 2-6. |




**minecraft:timer**

Adds a timer after which an event will fire.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| looping| true| If true, the timer will restart every time after it fires. |
| Boolean| randomInterval| true| If true, the amount of time on the timer will be random between the min and max values specified in time. |
| List| random_time_choices| [ ]| This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time. |
| Range [a, b]| time| [0.0, 0.0]| Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max). Incompatible with random_time_choices. |
| String| time_down_event| | Event to fire when the time on the timer runs out. |




**minecraft:trade_table**

Defines this entity's ability to trade with players.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| convert_trades_economy| false| Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1. |
| String| display_name| | Name to be displayed while trading with this entity. |
| Boolean| new_screen| false| Used to determine if trading with entity opens the new trade screen. |
| Boolean| persist_trades| false| Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades. |
| String| table| | File path relative to the behavior pack root for this entity's trades. |




**minecraft:trail**

Causes an entity to leave a trail of blocks as it moves about the world.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| block_type| air| The type of block you wish to be spawned by the entity as it move about the world. Solid blocks may not be spawned at an offset of (0,0,0). |
| Minecraft Filter| spawn_filter| | One or more conditions that must be met in order to cause the chosen block type to spawn. |
| Vector [a, b, c]| spawn_offset| [0, 0, 0]| The distance from the entities current position to spawn the block. Capped at up to 16 blocks away. The X value is left/right(-/+), the Z value is backward/forward(-/+), the Y value is below/above(-/+). |




**minecraft:transformation**

Defines an entity's transformation from the current definition into another

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| add| | List of components to add to the entity after the transformation<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| component_groups| | Names of component groups to add |


 |
| String| begin_transform_sound| | Sound to play when the transformation starts |
| JSON Object| delay| | Defines the properties of the delay for the transformation<br/>| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| block_assist_chance| 0| Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0 |
| Decimal| block_chance| 0| Chance that, once a block is found, will help speed up the transformation |
| Integer| block_max| 0| Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius |
| Integer| block_radius| 0| Distance in Blocks that the entity will search for blocks that can help the transformation |
| List| block_types| | List of blocks that can help the transformation of this entity |
| Decimal| value| 0| Time in seconds before the entity transforms |


 |
| Boolean| drop_equipment| false| Cause the entity to drop all equipment upon transformation |
| Boolean| drop_inventory| false| Cause the entity to drop all items in inventory upon transformation |
| String| into| | Entity Definition that this entity will transform into |
| Boolean| keep_level| false| If this entity has trades and has leveled up, it should maintain that level after transformation. |
| Boolean| keep_owner| false| If this entity is owned by another entity, it should remain owned after transformation. |
| Boolean| preserve_equipment| false| Cause the entity to keep equipment after going through transformation |
| String| transformation_sound| | Sound to play when the entity is done transforming |




**minecraft:trusting**

Defines the rules for a mob to trust players.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| probability| 1.00| The chance of the entity trusting with each item use between 0.0 and 1.0, where 1.0 is 100%. |
| String| trust_event| | Event to run when this entity becomes trusting. |
| List| trust_items| | The list of items that can be used to get the entity to trust players. |




**minecraft:water_movement**

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| drag_factor| 0.8| Drag factor to determine movement speed when in water. |




## Entity Definition Properties

These properties are part of the Entity Definition as a whole and go before the Component or Component Groups. Make sure to place them before any Components, Component Groups or Events sections or they will be ignored.



**format_version**

Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it.

**Code Example**

**Example**
```
{
  "format_version": "1.8.0",
  "minecraft:entity": {
    "component_groups": {
      ...
    }
    ...
  }
}
```



## Entity Description Properties

This section defines properties required to identify and construct the entity



**Entity Description Properties**



identifier

Sets the name for this entity's description.

| Type| Default Value| Description |
|:-----------:|:-----------:|:-----------:|
| String| | The identifier for this entity |




is_spawnable

Sets whether or not this entity has a spawn egg in the creative ui.

| Type| Default Value| Description |
|:-----------:|:-----------:|:-----------:|
| Boolean| false| Set to determine if this entity has a spawn egg. |




is_summonable

Sets whether or not we can summon this entity using commands such as /summon.

| Type| Default Value| Description |
|:-----------:|:-----------:|:-----------:|
| Boolean| false| Flag to mark this entity as being summonable or not. |




runtime_identifier

Sets the name for the Vanilla Minecraft identifier this entity will use to build itself from.

| Type| Default Value| Description |
|:-----------:|:-----------:|:-----------:|
| String| | The identifier for the class to construct this entity with |




**animations**

Sets the mapping of internal animation references to actual animations.  This is a JSON Object of name/animation pairs

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| animation| none| Actual animation to use |
| String| name| none| Internal (to the entity) name of this animation entry |




**scripts**

Sets the mapping of internal animation controller references to actual animation controller.  This is a JSON Array of name/animation-controller pairs

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| animation controller| none| Actual animation to use |
| String| name| none| Internal (to the entity) name of this animation entry |




## ID Lists



**AI Goals**

| JSON Name| ID |
|:-----------:|:-----------:|
| minecraft.behavior.hide| 233394190 |
| minecraft.behavior.move_to_poi| 1721669938 |
| minecraft.behavior.scared| 1812936510 |
| minecraft.behavior.work| -1700601421 |
| minecraft:behavior.admire_item| 1024844406 |
| minecraft:behavior.barter| 536670686 |
| minecraft:behavior.beg| 1346418048 |
| minecraft:behavior.break_door| -1798237626 |
| minecraft:behavior.breed| 51166360 |
| minecraft:behavior.celebrate| 995178519 |
| minecraft:behavior.defend_trusted_target| 2070046390 |
| minecraft:behavior.door_interact| -286762735 |
| minecraft:behavior.dragondeath| -1541162059 |
| minecraft:behavior.dragonholdingpattern| 1066617362 |
| minecraft:behavior.dragonlanding| -152352492 |
| minecraft:behavior.dragonscanning| -1003941066 |
| minecraft:behavior.dragontakeoff| -1912535317 |
| minecraft:behavior.drink_potion| 277029334 |
| minecraft:behavior.eat_carried_item| -184757575 |
| minecraft:behavior.enderman_leave_block| -717580550 |
| minecraft:behavior.enderman_take_block| -537294220 |
| minecraft:behavior.explore_outskirts| -1955198366 |
| minecraft:behavior.find_cover| -1231227755 |
| minecraft:behavior.find_mount| 731306871 |
| minecraft:behavior.find_underwater_treasure| -1602192311 |
| minecraft:behavior.flee_sun| -617664229 |
| minecraft:behavior.float| 1758503000 |
| minecraft:behavior.float_wander| -1122048364 |
| minecraft:behavior.follow_caravan| 9936402 |
| minecraft:behavior.follow_mob| -1524701626 |
| minecraft:behavior.follow_owner| 1213259599 |
| minecraft:behavior.follow_parent| 2127040136 |
| minecraft:behavior.follow_target_captain| -135480526 |
| minecraft:behavior.go_home| -1579225026 |
| minecraft:behavior.hold_ground| 1804286487 |
| minecraft:behavior.hurt_by_target| -1710404297 |
| minecraft:behavior.inspect_bookshelf| 40191182 |
| minecraft:behavior.knockback_roar| -1304117826 |
| minecraft:behavior.lay_down| -2074934675 |
| minecraft:behavior.lay_egg| -1207740530 |
| minecraft:behavior.leap_at_target| 256926956 |
| minecraft:behavior.look_at_entity| -1735428573 |
| minecraft:behavior.look_at_player| -1892159379 |
| minecraft:behavior.look_at_target| -885375871 |
| minecraft:behavior.look_at_trading_player| -2094605693 |
| minecraft:behavior.make_love| -1551283431 |
| minecraft:behavior.mingle| 385775952 |
| minecraft:behavior.mount_pathing| 1112137677 |
| minecraft:behavior.move_indoors| 2107078532 |
| minecraft:behavior.move_through_village| 779377630 |
| minecraft:behavior.move_to_land| -943551837 |
| minecraft:behavior.move_to_lava| -945036492 |
| minecraft:behavior.move_to_random_block| 395022171 |
| minecraft:behavior.move_to_village| -805189394 |
| minecraft:behavior.move_to_water| 1886139445 |
| minecraft:behavior.move_towards_target| -166537884 |
| minecraft:behavior.nap| 992184933 |
| minecraft:behavior.nearest_attackable_target| 5824270165841165755 |
| minecraft:behavior.nearest_prioritized_attackable_target| 335414683 |
| minecraft:behavior.ocelot_sit_on_block| -1327999383 |
| minecraft:behavior.offer_flower| -885387854 |
| minecraft:behavior.open_door| -906200433 |
| minecraft:behavior.owner_hurt_by_target| 530667419 |
| minecraft:behavior.owner_hurt_target| 995655261 |
| minecraft:behavior.panic| -169886247 |
| minecraft:behavior.peek| 211304085 |
| minecraft:behavior.pet_sleep_with_owner| 1379392240 |
| minecraft:behavior.pickup_items| 644287189 |
| minecraft:behavior.play| -505601580 |
| minecraft:behavior.player_ride_tamed| 603869698 |
| minecraft:behavior.raid_garden| -1145687602 |
| minecraft:behavior.random_breach| 928528911 |
| minecraft:behavior.random_fly| -446385505 |
| minecraft:behavior.random_hover| -1797323808 |
| minecraft:behavior.random_look_around| 1177762851 |
| minecraft:behavior.random_look_around_and_sit| -1368070166 |
| minecraft:behavior.random_sitting| 1722716662 |
| minecraft:behavior.random_stroll| -1643504294 |
| minecraft:behavior.random_swim| -1465281278 |
| minecraft:behavior.receive_love| 1156694272 |
| minecraft:behavior.restrict_open_door| 715583988 |
| minecraft:behavior.restrict_sun| -382716017 |
| minecraft:behavior.rise_to_liquid_level| -950950337 |
| minecraft:behavior.roll| 817471653 |
| minecraft:behavior.run_around_like_crazy| -1390363669 |
| minecraft:behavior.send_event| -823429137 |
| minecraft:behavior.share_items| 2045906118 |
| minecraft:behavior.silverfish_merge_with_stone| 321908121 |
| minecraft:behavior.silverfish_wake_up_friends| 484391748 |
| minecraft:behavior.skeleton_horse_trap| 530952387 |
| minecraft:behavior.sleep| -1811763 |
| minecraft:behavior.slime_attack| -1315951081 |
| minecraft:behavior.snacking| 875141064 |
| minecraft:behavior.sneeze| 1528584076 |
| minecraft:behavior.squid_dive| 1626998843 |
| minecraft:behavior.squid_flee| 1304043261 |
| minecraft:behavior.squid_idle| 1741234679 |
| minecraft:behavior.squid_move_away_from_ground| 892387674 |
| minecraft:behavior.squid_out_of_water| -1347598607 |
| minecraft:behavior.stalk_and_pounce_on_target| -1248479202 |
| minecraft:behavior.stay_while_sitting| 1346980478 |
| minecraft:behavior.stomp_turtle_egg| 851839416 |
| minecraft:behavior.stroll_towards_village| -1563831906 |
| minecraft:behavior.summon_entity| -2005850647 |
| minecraft:behavior.swell| -1473132493 |
| minecraft:behavior.take_flower| 1218648257 |
| minecraft:behavior.tempt| 422904556 |
| minecraft:behavior.trade_interest| -574851053 |
| minecraft:behavior.trade_with_player| -2048563493 |
| minecraft:behavior.vex_copy_owner_target| -643459543 |
| minecraft:behavior.vex_random_move| -1117822165 |
| minecraft:behavior.wither_random_attack_pos_goal| -528895885 |
| minecraft:behavior.wither_target_highest_damage| -1065562072 |




**Attributes**

| JSON Name| ID |
|:-----------:|:-----------:|
| minecraft:attack| 1651346034 |
| minecraft:spell_effects| 523264365 |
| minecraft:strength| 648564399 |




**Components**

| JSON Name| ID |
|:-----------:|:-----------:|
| | -2078137563 |
| minecraft:addrider| -1014528905 |
| minecraft:admire_item| -1838165406 |
| minecraft:ageable| 1092934985 |
| minecraft:angry| 725411499 |
| minecraft:annotation.break_door| 2116838963 |
| minecraft:annotation.open_door| 1004733768 |
| minecraft:area_attack| 1169114880 |
| minecraft:attack_cooldown| -1439360398 |
| minecraft:barter| -1660828566 |
| minecraft:block_climber| -505801518 |
| minecraft:block_sensor| 1944169706 |
| minecraft:boostable| -8316315 |
| minecraft:boss| -1309638025 |
| minecraft:break_blocks| -944056304 |
| minecraft:breathable| -707187232 |
| minecraft:breedable| -1616430100 |
| minecraft:bribeable| -2125526908 |
| minecraft:buoyant| -467213736 |
| minecraft:burns_in_daylight| 1256874605 |
| minecraft:celebrate_hunt| -789611239 |
| minecraft:combat_regeneration| -315365016 |
| minecraft:conditional_bandwidth_optimization| 1333085468 |
| minecraft:custom_hit_test| 2035968892 |
| minecraft:damage_over_time| -656420526 |
| minecraft:damage_sensor| -82616534 |
| minecraft:despawn| 1674909940 |
| minecraft:drying_out_timer| 2113510784 |
| minecraft:economy_trade_table| 1705466896 |
| minecraft:entity_sensor| -406052184 |
| minecraft:environment_sensor| 687748970 |
| minecraft:equip_item| -1774220620 |
| minecraft:equippable| -1164142226 |
| minecraft:experience_reward| -1992597900 |
| minecraft:explode| -1683058581 |
| minecraft:flocking| 1967597361 |
| minecraft:genetics| -82484670 |
| minecraft:giveable| 1739199795 |
| minecraft:group_size| -1997375941 |
| minecraft:grows_crop| 43636353 |
| minecraft:healable| -54247424 |
| minecraft:home| 610829097 |
| minecraft:hurt_on_condition| 163715083 |
| minecraft:inside_block_notifier| -377593253 |
| minecraft:insomnia| -300455606 |
| minecraft:instant_despawn| -634288138 |
| minecraft:interact| -1996861528 |
| minecraft:inventory| 1941951218 |
| minecraft:item_hopper| -447601772 |
| minecraft:jump.dynamic| 945664737 |
| minecraft:jump.static| 1064987526 |
| minecraft:leashable| 893445039 |
| minecraft:lookat| -1329707008 |
| minecraft:managed_wandering_trader| 846609640 |
| minecraft:mob_effect| 490430596 |
| minecraft:movement.amphibious| -500784850 |
| minecraft:movement.basic| 3354475 |
| minecraft:movement.fly| -1487316136 |
| minecraft:movement.generic| -1363369868 |
| minecraft:movement.hover| 1743805051 |
| minecraft:movement.jump| 1256268727 |
| minecraft:movement.skip| -1828832272 |
| minecraft:movement.sway| 2126249079 |
| minecraft:nameable| -595398763 |
| minecraft:navigation.climb| -1075360945 |
| minecraft:navigation.float| -842998036 |
| minecraft:navigation.fly| -1997823129 |
| minecraft:navigation.generic| 1768002583 |
| minecraft:navigation.hover| -769247640 |
| minecraft:navigation.swim| 1908076634 |
| minecraft:navigation.walk| 1909033775 |
| minecraft:npc| 1140005505 |
| minecraft:out_of_control| -639930856 |
| minecraft:peek| -863721039 |
| minecraft:persistent| 1435858387 |
| minecraft:physics| 1021552959 |
| minecraft:preferred_path| 1431188951 |
| minecraft:projectile| 1922456869 |
| minecraft:pushable| -1784639134 |
| minecraft:raid_trigger| 2093209329 |
| minecraft:rail_movement| -78235634 |
| minecraft:rail_sensor| 1273161273 |
| minecraft:ravager_blocked| -1417579541 |
| minecraft:rideable| 1656173828 |
| minecraft:scale_by_age| 64881972 |
| minecraft:scheduler| -684492525 |
| minecraft:shareables| 1301057082 |
| minecraft:shooter| 184150118 |
| minecraft:sittable| -1376274106 |
| minecraft:spawn_entity| 1991964333 |
| minecraft:tameable| 932870003 |
| minecraft:tamemount| 1615660288 |
| minecraft:target_nearby_sensor| 1309819882 |
| minecraft:teleport| -1900891127 |
| minecraft:tick_world| -381759296 |
| minecraft:timer| 1862095863 |
| minecraft:trade_table| 50480315 |
| minecraft:trail| 1632590434 |
| minecraft:transformation| -457894577 |
| minecraft:trusting| 936499892 |
| minecraft:water_movement| -128701925 |




**Entity Description Properties**

| JSON Name| ID |
|:-----------:|:-----------:|
| animations| 1232311658 |
| scripts| -76244517 |




**Properties**

| JSON Name| ID |
|:-----------:|:-----------:|
| minecraft:ambient_sound_interval| -1314051310 |
| minecraft:can_climb| -550459594 |
| minecraft:can_fly| 985724318 |
| minecraft:can_power_jump| -763124853 |
| minecraft:collision_box| -1277663508 |
| minecraft:color| 1069623177 |
| minecraft:color2| 1429635777 |
| minecraft:default_look_angle| -815556357 |
| minecraft:equipment| 714661022 |
| minecraft:fire_immune| -1071767182 |
| minecraft:floats_in_liquid| 179778474 |
| minecraft:flying_speed| -570508595 |
| minecraft:friction_modifier| -714364556 |
| minecraft:ground_offset| -1816881803 |
| minecraft:input_ground_controlled| -646415617 |
| minecraft:is_baby| 1853172763 |
| minecraft:is_charged| 125340337 |
| minecraft:is_chested| -817599379 |
| minecraft:is_dyeable| 1381448355 |
| minecraft:is_hidden_when_invisible| -1553744 |
| minecraft:is_ignited| 905710223 |
| minecraft:is_illager_captain| 921912694 |
| minecraft:is_saddled| 1037901616 |
| minecraft:is_shaking| 523951884 |
| minecraft:is_sheared| 1154836813 |
| minecraft:is_stackable| 1184456737 |
| minecraft:is_stunned| 1818977510 |
| minecraft:is_tamed| 1646421078 |
| minecraft:item_controllable| 1868311069 |
| minecraft:loot| 1775814032 |
| minecraft:mark_variant| 663621689 |
| minecraft:push_through| -138030768 |
| minecraft:scale| 77854436 |
| minecraft:skin_id| 1838729593 |
| minecraft:sound_volume| 937951776 |
| minecraft:type_family| -255011285 |
| minecraft:variant| -1789583977 |
| minecraft:walk_animation_speed| 972393614 |
| minecraft:wants_jockey| 1832515141 |




**Triggers**

| JSON Name| ID |
|:-----------:|:-----------:|
| minecraft:on_death| -49357854 |
| minecraft:on_friendly_anger| -1009986313 |
| minecraft:on_hurt| -1028603471 |
| minecraft:on_hurt_by_player| -599009831 |
| minecraft:on_ignite| -1911489054 |
| minecraft:on_start_landing| -555648368 |
| minecraft:on_start_takeoff| 426083399 |
| minecraft:on_target_acquired| 1063277906 |
| minecraft:on_target_escape| -1373130027 |
| minecraft:on_wake_with_owner| -1543219003 |




## Properties



**minecraft:ambient_sound_interval**

Sets the entity's delay between playing its ambient sound.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event_name| ambient| Level sound event to be played as the ambient sound. |
| Decimal| range| 16.000000| Maximum time in seconds to randomly add to the ambient sound delay time. |
| Decimal| value| 8.000000| Minimum time in seconds before the entity plays its ambient sound again. |




**minecraft:can_climb**

Allows this entity to climb up ladders.



**minecraft:can_fly**

Marks the entity as being able to fly, the pathfinder won't be restricted to paths where a solid block is required underneath it.



**minecraft:can_power_jump**

Allows the entity to power jump like the horse does in vanilla.



**minecraft:collision_box**

Sets the width and height of the Entity's collision box.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| height| 1.0| Height of the collision box in blocks. A negative value will be assumed to be 0. |
| Decimal| width| 1.0| Width and Depth of the collision box in blocks. A negative value will be assumed to be 0. |




**minecraft:color**

Defines the entity's color. Only works on vanilla entities that have predefined color values (sheep, llama, shulker).

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| value| 0| The Palette Color value of the entity. |




**minecraft:color2**

Defines the entity's second texture color. Only works on vanilla entities that have a second predefined color values (tropical fish).

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| value| 0| The second Palette Color value of the entity. |




**minecraft:default_look_angle**

Sets this entity's default head rotation angle.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| value| 0.0f| Angle in degrees. |




**minecraft:equipment**

Sets the Equipment table to use for this Entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| slot_drop_chance| | A list of slots with the chance to drop an equipped item from that slot. |
| String| table| | The file path to the equipment table, relative to the behavior pack's root. |




**minecraft:fire_immune**

Sets that this entity doesn't take damage from fire.



**minecraft:floats_in_liquid**

Sets that this entity can float in liquid blocks.



**minecraft:flying_speed**

Speed in Blocks that this entity flies at.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| value| 0.02| Flying speed in blocks per tick. |




**minecraft:friction_modifier**

Defines how much friction affects this entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| value| 1.0| The higher the number, the more the friction affects this entity. A value of 1.0 means regular friction, while 2.0 means twice as much. |




**minecraft:ground_offset**

Sets the offset from the ground that the entity is actually at.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| value| 0.0| The value of the entity's offset from the terrain, in blocks. |




**minecraft:input_ground_controlled**

When configured as a rideable entity, the entity will be controlled using WASD controls.



**minecraft:is_baby**

Sets that this entity is a baby.



**minecraft:is_charged**

Sets that this entity is charged.



**minecraft:is_chested**

Sets that this entity is currently carrying a chest.



**minecraft:is_dyeable**

Allows dyes to be used on this entity to change its color.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| interact_text| | The text that will display when interacting with this entity with a dye when playing with Touch-screen controls. |




**minecraft:is_hidden_when_invisible**

Sets that this entity can hide from hostile mobs while invisible.



**minecraft:is_ignited**

Sets that this entity is currently on fire.



**minecraft:is_illager_captain**

Sets that this entity is an illager captain.



**minecraft:is_saddled**

Sets that this entity is currently saddled.



**minecraft:is_shaking**

Sets that this entity is currently shaking.



**minecraft:is_sheared**

Sets that this entity is currently sheared.



**minecraft:is_stackable**

Sets that this entity can be stacked.



**minecraft:is_stunned**

Sets that this entity is currently stunned.



**minecraft:is_tamed**

Sets that this entity is currently tamed.



**minecraft:item_controllable**

Defines what items can be used to control this entity while ridden.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| control_items| | List of items that can be used to control this entity. |




**minecraft:loot**

Sets the loot table for what items this entity drops upon death.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| table| | The path to the loot table, relative to the Behavior Pack's root. |




**minecraft:mark_variant**

Additional variant value. Can be used to further differentiate variants.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| value| 0| The ID of the variant. By convention, 0 is the ID of the base entity. |




**minecraft:push_through**

Sets the distance through which the entity can push through.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| value| 0.0| The value of the entity's push-through, in blocks. |




**minecraft:scale**

Sets the entity's visual size.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| value| 1.0| The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger. |




**minecraft:skin_id**

Skin ID value. Can be used to differentiate skins, such as base skins for villagers.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| value| 0| The ID of the skin. By convention, 0 is the ID of the base skin. |




**minecraft:sound_volume**

Sets the entity's base volume for sound effects.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| value| 1.0| The value of the volume the entity uses for sound effects. |




**minecraft:type_family**

Defines the families this entity belongs to.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| family| | List of family names. |




**minecraft:variant**

Used to differentiate the component group of a variant of an entity from others. (e.g. ocelot, villager)

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Integer| value| 0| The ID of the variant. By convention, 0 is the ID of the base entity. |




**minecraft:walk_animation_speed**

Sets the speed multiplier for this entity's walk animation speed.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| value| 1.0| The higher the number, the faster the animation for walking plays. A value of 1.0 means normal speed, while 2.0 means twice as fast. |




**minecraft:wants_jockey**

Sets that this entity wants to become a jockey.



## Triggers



**minecraft:on_death**

Only usable by the Ender Dragon. Adds a trigger to call on this entity's death.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |




**minecraft:on_friendly_anger**

Adds a trigger that will run when a nearby entity of the same type as this entity becomes Angry.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |




**minecraft:on_hurt**

Adds a trigger to call when this entity takes damage.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |




**minecraft:on_hurt_by_player**

Adds a trigger to call when this entity is attacked by the player.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |




**minecraft:on_ignite**

Adds a trigger to call when this entity is set on fire.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |




**minecraft:on_start_landing**

Only usable by the Ender Dragon. Adds a trigger to call when this entity lands.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |




**minecraft:on_start_takeoff**

Only usable by the Ender Dragon. Adds a trigger to call when this entity starts flying.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |




**minecraft:on_target_acquired**

Adds a trigger to call when this entity finds a target.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |




**minecraft:on_target_escape**

Adds a trigger to call when this entity loses the target it currently has.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |




**minecraft:on_wake_with_owner**

Adds a trigger to call when this pet's owner awakes after sleeping with the pet.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| event| | The event to run when the conditions for this trigger are met. |
| Minecraft Filter| filters| | The list of conditions for this trigger to execute. |
| String| target| self| The target of the event. |


