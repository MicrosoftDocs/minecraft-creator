---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:instrument_sound"
description: "Describes the minecraft:instrument_sound block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:instrument_sound

[Note: This component is currently experimental]. This defines what sound will play based on above or below relative position to a note block. An instrument can be assigned to the "up" and "down" block faces. If either face is undefined, or the component is omitted, it will use its default value ("up" = "note.harp" and "down" = "note.none"). While both faces do not need to be defined, at least one face needs to be defined for the component to be valid. "note.none" can be used to specify no sound for a face.


## Instrument Sound Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| down | note.none | [Down](#down-choices) choices | The instrument sound that plays when the note block is above this block (the block's down face is exposed to the note block). Use "note.none" to specify no sound for this face. |  | 
| up | note.harp | [Up](#down-choices) choices | The instrument sound that plays when the note block is below this block (the block's up face is exposed to the note block). Use "note.none" to specify no sound for this face. | Block Black Concrete Double Slab: `"note.bassattack"` | 

### Down choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| note.harp | Harp Note | |
| note.bd | Bd Note | |
| note.snare | Snare Note | |
| note.hat | Hat Note | |
| note.bassattack | Bassattack Note | |
| note.flute | Flute Note | |
| note.bell | Bell Note | |
| note.guitar | Guitar Note | |
| note.chime | Chime Note | |
| note.xylophone | Xylophone Note | |
| note.iron_xylophone | Iron Xylophone Note | |
| note.cow_bell | Cow Bell Note | |
| note.didgeridoo | Didgeridoo Note | |
| note.bit | Bit Note | |
| note.banjo | Banjo Note | |
| note.pling | Pling Note | |
| note.trumpet | Trumpet Note | |
| note.trumpet_exposed | Trumpet Exposed Note | |
| note.trumpet_weathered | Trumpet Weathered Note | |
| note.trumpet_oxidized | Trumpet Oxidized Note | |
| note.zombie | Zombie Note | |
| note.skeleton | Skeleton Note | |
| note.creeper | Creeper Note | |
| note.enderdragon | Enderdragon Note | |
| note.witherskeleton | Witherskeleton Note | |
| note.piglin | Piglin Note | |
| note.none | None Note | |

## Samples

#### Instrument Defined For Both Faces


```json
"minecraft:instrument_sound": {
  "up": "note.bassattack",
  "down": "note.bit"
}
```

#### Instrument Defined For Up Face


```json
"minecraft:instrument_sound": {
  "up": "note.xylophone"
}
```

#### Instrument Defined For Down Face


```json
"minecraft:instrument_sound": {
  "down": "note.banjo"
}
```

#### Instrument Defined With No Sound For Up Face


```json
"minecraft:instrument_sound": {
  "up": "note.none",
  "down": "note.banjo"
}
```

#### [Block Black Concrete Double Slab](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_double_slab.block.json)


```json
"minecraft:instrument_sound": {
  "up": "note.bassattack"
}
```
