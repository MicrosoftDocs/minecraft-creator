---
author: mammerla
ms.author: mikeam
title: "effect Command"
description: "Description and usage of the /effect command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/effect` Command

Add or clear status effects.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/effect <player: target> <Mode: cleareffects> [effect: effect]`

`/effect <player: target> <effect: effect> [seconds: int] [amplifier: int] [hideParticles: Boolean]`

`/effect <player: target> <effect: effect> <Mode: cleareffects> [amplifier: int] [hideParticles: Boolean]`

## Usage

### Clear effect

`/effect <player: target> <Mode: cleareffects> [effect: effect]`

Clear the effect for a target player.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | The player to receive the effect. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| Mode | cleareffects | Required |  |
| effect | [Effect](../CommandTypes/type_effect.md) | Optional | An `enum` to specify the effect being added or removed. |

### Add effect

`/effect <player: target> <effect: effect> [seconds: int] [amplifier: int] [hideParticles: Boolean]`

Add effect to target player with optional `seconds`, `amplifier`, and `hideParticles`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | The player to receive the effect. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| effect | [Effect](../CommandTypes/type_effect.md) | Required | An `enum` to specify the effect being added or removed. |
| seconds | [Integer](../CommandTypes/type_int.md) | Optional | An `integer` that specifies the duration, in seconds, of this effect. Default: `30`. |
| amplifier | [Integer](../CommandTypes/type_int.md) | Optional | An `integer` that may have been applied to this effect. Sample values range typically from 0 to 4. Default: `0`. |
| hideParticles | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that specifies the visual representation of the effect. Default: `false`. |

### With effect, Mode, amplifier, hideParticles

`/effect <player: target> <effect: effect> <Mode: cleareffects> [amplifier: int] [hideParticles: Boolean]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | The player to receive the effect. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| effect | [Effect](../CommandTypes/type_effect.md) | Required | An `enum` to specify the effect being added or removed. |
| Mode | cleareffects | Required |  |
| amplifier | [Integer](../CommandTypes/type_int.md) | Optional | An `integer` that may have been applied to this effect. Sample values range typically from 0 to 4. Default: `0`. |
| hideParticles | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that specifies the visual representation of the effect. Default: `false`. |

## Examples

### Give yourself Speed II for 60 seconds

```
/effect @s speed 60 2
```

### Give all players permanent night vision

```
/effect @a night_vision 999999
```

### Clear all effects from yourself

```
/effect @s clear
```

### Give all zombies Weakness II for 30 seconds, hidden particles

```
/effect @e[type=zombie] weakness 30 1 true
```

### Give yourself Regeneration IV for 10 seconds

```
/effect @s regeneration 10 3
```

### Give all players Resistance I for 2 minutes

```
/effect @a resistance 120 0
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| amplifier | [Integer](../CommandTypes/type_int.md) | An `integer` that may have been applied to this effect. Sample values range typically from 0 to 4. Default: `0`. |
| effect | [Effect](../CommandTypes/type_effect.md) | An `enum` to specify the effect being added or removed. |
| hideParticles | [Boolean](../CommandTypes/type_boolean.md) | A `Boolean` that specifies the visual representation of the effect. Default: `false`. |
| Mode | cleareffects |  |
| player | [Entity Selector](../CommandTypes/type_selection.md) | The player to receive the effect. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| seconds | [Integer](../CommandTypes/type_int.md) | An `integer` that specifies the duration, in seconds, of this effect. Default: `30`. |
