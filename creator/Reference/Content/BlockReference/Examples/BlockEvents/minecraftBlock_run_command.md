---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - run_command
ms.prod: gaming
---

# Block Documentation - run_command

`run_command` is an Event Response that will trigger a slash command or a series of slash commands set in an array.

## Extra Parameters

`run_command` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|command|*not set* |String|  Slash command to run. |
|command array|*not set* | Array|  List of slash commands to run. |
|[target](../../../EntityReference/Examples/FilterList.md)| self| Minecraft Filter|  The target context to execute against. |

## Example

```json
"run_command":{
    "command" : "/give @p emerald",
    "command array": [], //not used
    "target" : "self"
}
```
