---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:durability_sensor"
description: "Describes the minecraft:durability_sensor item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:durability_sensor

Enables an item to emit effects when it receives damage. Because of this, the item also needs a `minecraft:durability` component.

> [!Note]
> This item requires a format version of at least 1.21.20.


## Item Durability Sensor Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| durability_thresholds | *not set* | Array of [Durability Thresholds](#item-durability-sensor-durability-threshold) items | The list of both durability thresholds and effects emitted when each threshold is met. | 
| sound_event | *not set* | String | Sound effect to emit when the threshold is met. | 

### durability_thresholds

The list of both durability thresholds and effects emitted when each threshold is met. When multiple thresholds are met, only the threshold with the lowest durability after applying the damage is considered. Value must have at least 1 items.


### Item Durability Sensor Durability Threshold
Defines both the durability threshold, and the effects emitted when that threshold is met.


#### Item Durability Sensor Durability Threshold Properties

**JSON path:** `durability_thresholds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| durability | 0 | Integer number | The effects are emitted when the item durability value is less than or equal to this value. | 
| particle_type | none | [Particle Type](#particle-type-choices) choices | Particle effect to emit when the threshold is met. | 
| sound_event |  | String | Sound effect to emit when the threshold is met. | 

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