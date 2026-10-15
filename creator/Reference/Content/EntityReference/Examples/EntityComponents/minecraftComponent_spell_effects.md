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


## Entity Spell Effects Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| add_effects | [] | Array of [Add Effects](#entity-mobeffectchangecomponenteffect) items | List of effects to add to this entity. | Player: `[{"display_on_screen_animation":true,"duration":30,"effect":"raid_omen"}]` | 
| remove_effects | [] | Array of strings | The identifiers of effects to remove from the entity after adding this component. | Player: `"bad_omen"` | 

### Entity MobEffectChangeComponentEffect

#### Entity MobEffectChangeComponentEffect Properties

**JSON path:** `add_effects`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| ambient | false | Boolean true/false | Whether the effect is ambient. | 
| amplifier | 0 | Integer number | The amplifier of the effect. | 
| display_on_screen_animation | false | Boolean true/false | Whether the effect displays an on-screen animation. | 
| duration | 0 | Object | The duration of the effect in seconds, or "infinite". | 
| effect |  | String | The name of the effect to apply. | 
| visible | true | Boolean true/false | Whether the effect is visible. | 

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)

At /minecraft:entity/component_groups/minecraft:add_raid_omen/minecraft:spell_effects/: 

```json
"minecraft:spell_effects": {
  "add_effects": [
    {
      "display_on_screen_animation": true,
      "duration": 30,
      "effect": "raid_omen"
    }
  ],
  "remove_effects": "bad_omen"
}
```

At /minecraft:entity/component_groups/minecraft:clear_raid_omen_spell_effect/minecraft:spell_effects/: 

```json
"minecraft:spell_effects": {}
```
