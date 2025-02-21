---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:has_damage"
description: "Describes the minecraft:has_damage entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:has_damage

Returns true when the subject entity receives the named damage type.


## Has Damage Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| value | *not set* | [Value](#value-choices) choices | (Required) The Damage type to test |  | 

### Operator choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| != | != | Test for inequality.|
| < | < | Test for less-than the value.|
| <= | <= | Test for less-than or equal to the value.|
| <> | <> | Test for inequality.|
| = | = | Test for equality.|
| == | == | Test for equality.|
| > | > | Test for greater-than the value.|
| >= | >= | Test for greater-than or equal to the value.|
| equals | Equals | Test for equality.|
| not | Not | Test for inequality.|

### Subject choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| block | Block | The block involved with the interaction.|
| damager | Damager | The damaging actor involved with the interaction.|
| other | Other | The other member of an interaction, not the caller.|
| parent | Parent | The caller's current parent.|
| player | Player | The player involved with the interaction.|
| self | Self | The entity or object calling the test|
| target | Target | The caller's current target.|

### Value choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| anvil | Anvil | |
| attack | Attack | |
| block_explosion | Block Explosion | |
| contact | Contact | |
| drowning | Drowning | |
| entity_explosion | Entity Explosion | |
| fall | Fall | |
| falling_block | Falling Block | |
| fatal | Fatal | Any damage which kills the subject|
| fire | Fire | |
| fire_tick | Fire Tick | |
| fly_into_wall | Fly Into Wall | |
| lava | Lava | |
| magic | Magic | |
| none | None | |
| override | Override | |
| piston | Piston | |
| projectile | Projectile | |
| self_destruct | Self Destruct | |
| sonic_boom | Sonic Boom | |
| stalactite | Stalactite | |
| stalagmite | Stalagmite | |
| starve | Starve | |
| suffocation | Suffocation | |
| thorns | Thorns | |
| void | Void | |
| wither | Wither | |

## Samples

At Full..: 

```json
{ "test": "has_damage", "subject": "self", "operator": "equals", "value": "fatal" }
```

At Short (using Defaults)..: 

```json
{ "test": "has_damage", "value": "fatal" }
```
