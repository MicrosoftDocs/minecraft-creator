---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:interact"
description: "Describes the minecraft:interact entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:interact

Defines interactions with this entity.

> [!Note]
> In 1.26.0, the `swing` field on each interaction entry defaults to `true` (it previously defaulted to `false`). Set it explicitly to `false` to opt out of the player's swing animation.


## Entity Interact Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| cooldown | 0 | Decimal number | Time in seconds before this entity can be interacted with again. | 
| cooldown_after_being_attacked | 0 | Decimal number | Time in seconds before this entity can be interacted with after being attacked. | 
| drop_item_slot | *not set* | String | The entity's slot to remove and drop the item from, if any, upon successful interaction. | 
| drop_item_y_offset | 0 | Decimal number | Will offset the item drop position this amount in the y direction. Requires "drop_item_slot" to be specified. | 
| equip_item_slot | *not set* | String | The entity's slot to equip the item to, if any, upon successful interaction. | 
| health_amount | 0 | Integer number | The amount of health this entity will recover or lose when interacting with this item. Negative values will harm the entity. | 
| hurt_item | 0 | Integer number | The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. | 
| interact_text | *not set* | String | Text to show when the player is able to interact in this way with this entity when playing with touch-screen controls. | 
| interactions (Entity InteractionData) | [] | Array of [Interactions](#entity-interactiondata) items | The list of interactions for this entity. | 
| interactions (as Object) | *not set* | Object |  | 

### drop_item_slot

The entity's slot to remove and drop the item from, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'.

### equip_item_slot

The entity's slot to equip the item to, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'.


### Entity InteractionData

#### Entity InteractionData Properties

**JSON path:** `interactions`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| add_items | {"table":""} | [Add Items](#entity-additemsdata) item | Loot table with items to add to the player's inventory upon successful interaction. | 
| admire | false | Boolean true/false | If true, the mob that's interacted with will try to do an admire action after interaction. For this to be successful the mob has to have an Admire component and an Admire goal in place. | 
| barter | false | Boolean true/false | If true, the mob that's interacted with will try to do a barter action after interaction. For this to be successful the mob has to have a Barter component and a Barter goal in place. | 
| cooldown | 0 | Decimal number | Time in seconds before this entity can be interacted with again. | 
| cooldown_after_being_attacked | 0 | Decimal number | Time in seconds before this entity can be interacted with after being attacked. | 
| drop_item_slot | *not set* | String | The entity's slot to remove and drop the item from, if any, upon successful interaction. | 
| drop_item_y_offset | 0 | Decimal number | Will offset the item drop position this amount in the y direction. Requires "drop_item_slot" to be specified. | 
| equip_item_slot | *not set* | String | The entity's slot to equip the item to, if any, upon successful interaction. | 
| give_item | false | Boolean true/false | If true, the mob that's interacted with will try to replace its current main-hand item with the interactable item after interaction. | 
| health_amount | 0 | Integer number | The amount of health this entity will recover or lose when interacting with this item. Negative values will harm the entity. | 
| hurt_item | 0 | Integer number | The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. | 
| interact_text |  | String | Text to show when the player is able to interact in this way with this entity when playing with touch-screen controls. | 
| on_interact | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Interact](#entity-actordefinitiontrigger) item | Event to fire when the interaction occurs. | 
| particle_on_start | {"copper_event":"none","particle_offset_towards_interactor":false,"particle_type":"none","particle_y_offset":0} | [Particle On Start](#entity-interactparticledata) item | Particle effect that will be triggered at the start of the interaction. | 
| play_sounds | [] | Array of strings | List of sounds to play when the interaction occurs. | 
| repair_entity_item | {"amount":1,"slot":null} | [Repair Entity Item](#entity-repairentityitemdata) item | Allows to repair one of the entity's items. | 
| spawn_entities | [] | Array of strings | List of entities to spawn when the interaction occurs. | 
| spawn_items | {"table":"","y_offset":1} | [Spawn Items](#entity-spawnitemsdata) item | Loot table with items to drop on the ground upon successful interaction. | 
| swing | true | Boolean true/false | If true, the player will do the 'swing' animation when interacting with this entity. | 
| take_item | false | Boolean true/false | If true, the mob that's interacted with will try to replace its current main-hand item with an empty item, and its current main-hand item will occupy the empty selected slot of the player. | 
| transform_to_item |  | String | The item used will transform to this item upon successful interaction. Format: itemName:auxValue | 
| use_item | false | Boolean true/false | If true, the interaction will use an item. | 
| vibration | entity_interact | [Vibration](#vibration-choices) choices | Vibration to emit when the interaction occurs. | 

#### drop_item_slot

The entity's slot to remove and drop the item from, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'.

#### equip_item_slot

The entity's slot to equip the item to, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'.


#### Entity AddItemsData

##### Entity AddItemsData Properties

**JSON path:** `interactions > add_items`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| table | *not set* | String | File path, relative to the Behavior Pack's path, to the loot table file. | 

#### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


##### Entity ActorDefinitionTrigger Properties

**JSON path:** `interactions > on_interact`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event |  | String |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. | 
| filters (Alternate 1) | *not set* | Object |  | 
| target | self | [Target](#target-choices) choices |  | 

##### filters

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects.


##### Filters

###### Filters Properties

**JSON path:** `interactions > on_interact > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| baby | Baby | |
| block | Block | |
| damager | Damager | |
| holder | Holder | |
| item | Item | |
| other | Other | |
| parent | Parent | |
| player | Player | |
| self | Self | |
| target | Target | |

#### Entity InteractParticleData

##### Entity InteractParticleData Properties

**JSON path:** `interactions > particle_on_start`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| copper_event | none | [Copper Event](#copper-event-choices) choices |  | 
| particle_offset_towards_interactor | false | Boolean true/false | Whether or not the particle will appear closer to who performed the interaction. | 
| particle_type | none | [Particle Type](#particle-type-choices) choices | The type of particle that will be spawned. | 
| particle_y_offset | 0 | Decimal number | Will offset the particle this amount in the y direction. | 

### Copper Event choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| none | None | |
| scrape | Scrape | |
| wax_off | Wax off | |
| wax_on | Wax on | |

### Particle Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| balloongas | Balloongas | |
| bleach | Bleach | |
| blockforcefield | Blockforcefield | |
| blueflame | Blueflame | |
| breezewindexplosion | Breezewindexplosion | |
| bubble | Bubble | |
| bubblecolumndown | Bubblecolumndown | |
| bubblecolumnup | Bubblecolumnup | |
| bubblemanual | Bubblemanual | |
| campfiresmoke | Campfiresmoke | |
| campfiresmoketall | Campfiresmoketall | |
| candleflame | Candleflame | |
| carrotboost | Carrotboost | |
| coloredflame | Coloredflame | |
| conduit | Conduit | |
| creakingcrumble | Creakingcrumble | |
| crit | Crit | |
| dragonbreath | Dragonbreath | |
| dragonbreathfire | Dragonbreathfire | |
| dragonbreathtrail | Dragonbreathtrail | |
| dragondestroyblock | Dragondestroyblock | |
| driphoney | Driphoney | |
| driplava | Driplava | |
| dripwater | Dripwater | |
| dustplume | Dustplume | |
| electricspark | Electricspark | |
| enchantingtable | Enchantingtable | |
| endrod | Endrod | |
| evaporation | Evaporation | |
| explode | Explode | |
| eyeblossomclose | Eyeblossomclose | |
| eyeblossomopen | Eyeblossomopen | |
| fallingborderdust | Fallingborderdust | |
| fallingdust | Fallingdust | |
| fireworks | Fireworks | |
| fireworksoverlay | Fireworksoverlay | |
| fireworksstarter | Fireworksstarter | |
| flame | Flame | |
| food | Food | |
| greenflame | Greenflame | |
| heart | Heart | |
| hugeexplosion | Hugeexplosion | |
| iconcrack | Iconcrack | |
| ink | Ink | |
| largeexplode | Largeexplode | |
| largesmoke | Largesmoke | |
| lava | Lava | |
| mobappearance | Mobappearance | |
| mobflame | Mobflame | |
| mobspell | Mobspell | |
| mobspellambient | Mobspellambient | |
| mobspellinstantaneous | Mobspellinstantaneous | |
| myceliumdust | Myceliumdust | |
| none | None | |
| note | Note | |
| obsidiantear | Obsidiantear | |
| orangepoplarleaves | Orangepoplarleaves | |
| paleoakleaves | Paleoakleaves | |
| pausemobgrowth | Pausemobgrowth | |
| portal | Portal | |
| portalreverse | Portalreverse | |
| rainsplash | Rainsplash | |
| reddust | Reddust | |
| redpoplarleaves | Redpoplarleaves | |
| resetmobgrowth | Resetmobgrowth | |
| risingborderdust | Risingborderdust | |
| sculksoul | Sculksoul | |
| shriek | Shriek | |
| shulkerbullet | Shulkerbullet | |
| slime | Slime | |
| smoke | Smoke | |
| sneeze | Sneeze | |
| snowballpoof | Snowballpoof | |
| snowflake | Snowflake | |
| sonicexplosion | Sonicexplosion | |
| soul | Soul | |
| sparkler | Sparkler | |
| spit | Spit | |
| stalactitedriplava | Stalactitedriplava | |
| stalactitedripwater | Stalactitedripwater | |
| sulfurcube | Sulfurcube | |
| terrain | Terrain | |
| totem | Totem | |
| townaura | Townaura | |
| trackingemitter | Trackingemitter | |
| vaultconnection | Vaultconnection | |
| villagerangry | Villagerangry | |
| villagerhappy | Villagerhappy | |
| watersplash | Watersplash | |
| watersplashmanual | Watersplashmanual | |
| waterwake | Waterwake | |
| wax | Wax | |
| whitesmoke | Whitesmoke | |
| windexplosion | Windexplosion | |
| witchspell | Witchspell | |
| wolfarmorcrack | Wolfarmorcrack | |
| yellowpoplarleaves | Yellowpoplarleaves | |

#### Entity RepairEntityItemData

##### Entity RepairEntityItemData Properties

**JSON path:** `interactions > repair_entity_item`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| amount | 1 | Integer number | How much of the item durability should be restored upon interaction. Value must be > 0. | 
| slot | *not set* | String | The entity's slot containing the item to be repaired. | 

##### slot

The entity's slot containing the item to be repaired. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'.


#### Entity SpawnItemsData

##### Entity SpawnItemsData Properties

**JSON path:** `interactions > spawn_items`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| table |  | String | File path, relative to the Behavior Pack's path, to the loot table file. | 
| y_offset | 1 | Decimal number | Will offset the items spawn position this amount in the y direction. | 

### Vibration choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| entity_act | Entity act | |
| entity_die | Entity die | |
| entity_interact | Entity interact | |
| none | None | |
| shear | Shear | |

## Samples
