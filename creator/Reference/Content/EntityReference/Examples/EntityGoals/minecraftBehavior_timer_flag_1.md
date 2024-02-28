---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.timer_flag_1
description: "A reference document detailing the 'behavior.timer_flag_1' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.timer_flag_1

`minecraft:behavior.timer_flag_1` fires an event when this behavior starts, then waits for a duration before stopping. When stopping to due the timeout or due to being interrupted by another behavior, the goal fires another event. `query.timer_flag_1` will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| cooldown_range| [10.000000, 10.000000]| Range [a,b]| The goal cooldown range, in seconds. |
| duration_range| [2.000000, 2.000000]| Range [a,b]| The goal duration range, in seconds. |
| on_end| --| Trigger| Event(s) to run when the goal ends. |
| on_start| --| Trigger| Event(s) to run when the goal starts. |
