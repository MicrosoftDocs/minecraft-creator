---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:burns_in_daylight"
description: "Describes the minecraft:burns_in_daylight entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:burns_in_daylight

Specifies that this entity takes fire damage when exposed to direct sunlight. This component is used by undead mobs like zombies, skeletons, and phantoms. The entity will catch fire when in sunlight unless it is wearing armor in the protection slot, standing in water, or in a shaded area.


## Entity Burns In Daylight Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| protection_slot | slot.armor.head | [Protection Slot](#protection-slot-choices) choices | The equipment slot that provides protection from burning in sunlight. If armor is equipped in this slot, the entity will not burn. Commonly set to 'slot.armor.head' for helmets or 'slot.armor.body' for horse armor. | Zombie Horse: `"slot.armor.body"` | 

### Protection Slot choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| slot.armor.body | Slot.armor.body | |
| slot.armor.chest | Slot.armor.chest | |
| slot.armor.feet | Slot.armor.feet | |
| slot.armor.head | Slot.armor.head | |
| slot.armor.legs | Slot.armor.legs | |
| slot.weapon.offhand | Slot.weapon.offhand | |

## Samples

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:burns_in_daylight": {}
```

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:burns_in_daylight": false
```

#### [Zombie Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_horse.json)


```json
"minecraft:burns_in_daylight": {
  "protection_slot": "slot.armor.body"
}
```
