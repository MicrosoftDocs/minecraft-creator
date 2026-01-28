---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:spell_effects"
description: "Describes the minecraft:spell_effects entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:spell_effects

Allows an entity to add or remove status effects from itself. Similarly to `addrider`, this component performs a one-time operation on the entity when added. Removing the component will not change the entity's current effects. Adding different versions of the component multiple times will perform each one in turn. Once the component has been added, it will not provide any further functionality. There is one exception to this behavior: if this component is present on a player, its effects will be re-applied every time the player enters the world. To avoid this, remove the component shortly after adding it, or add an empty component to replace it.


## Spell Effects Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| add_effects | *not set* | Array of [Add Effects](#add-effects) items | List of effects to add to this entity after adding this component | Player: `[{"effect":"raid_omen","duration":30,"display_on_screen_animation":true}]` | 
| remove_effects | *not set* | String | List of identifiers of effects to be removed from this entity after adding this component | Player: `"bad_omen"` | 

## Add Effects
List of effects to add to this entity after adding this component.


#### Add Effects Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| display_on_screen_animation | *not set* | String |  |  | 
| duration | *not set* | Decimal number |  |  | 
| effect | *not set* | String | Effect to add to this entity. Includes 'duration' in seconds, 'amplifier' level, 'ambient' if it is to be considered an ambient effect, and 'visible' if the effect should be visible |  | 

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)

At /minecraft:entity/component_groups/minecraft:add_raid_omen/minecraft:spell_effects/: 

```json
"minecraft:spell_effects": {
  "add_effects": [
    {
      "effect": "raid_omen",
      "duration": 30,
      "display_on_screen_animation": true
    }
  ],
  "remove_effects": "bad_omen"
}
```

At /minecraft:entity/component_groups/minecraft:clear_raid_omen_spell_effect/minecraft:spell_effects/: 

```json
"minecraft:spell_effects": {}
```
