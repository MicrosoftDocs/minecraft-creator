---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - queue_command
description: "A reference document detailing the 'queue_command' entity event"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - queue_command

`queue_command` will queue a slash command or a series of slash commands set in an array to trigger at the end of the tick.

Due to being queued as opposed to triggering instantly, any immediate side-effects of the command may not be observable by other molang queries, commands, or scripts until later in the tick.

Note that commands executed via `queue_command` are guaranteed to run in order with respect to other queued commands. Additionally, if an entity is removed before a queued command has the chance to execute, for example removed on the same tick that the command was queued, the command will not execute.

## Extra Parameters

`queue_command` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|command|*not set* |String|  Slash command to run. |
|command array|*not set* | Array|  List of slash commands to run. |
|[target](../../../EntityReference/Examples/FilterList.md)| self| Minecraft Filter|  The target context to execute against. |

## Example

```json
{
    "format_version": "1.20.10",
    "minecraft:entity": {
        "description": {
            "identifier": "demo:demo_mob",
            "is_spawnable": true,
            "is_summonable": true,
            "is_experimental": false,

            "animations": {
                "demo_controller": "controller.animation.demo_mob.idle"
            },
            "scripts": {
                "animate": ["demo_controller"]
            }
        },
        "components": {
            "minecraft:physics": {
                "has_gravity": true,
                "has_collision": true
            },
            "minecraft:pushable": {
                "is_pushable": false
            },
            "minecraft:push_through": {
                "value": 1
            },
            "minecraft:on_hurt_by_player": {
                "event": "hurt_sequence",
                "target": "self"
            },
            "minecraft:on_death": {
                "event": "death",
                "target": "self"
            }
        },
        "events": {
            "death": {
                "queue_command": {
                    "command": "say I have died!"
                }
            },
            "hurt_sequence": {
                "sequence": [
                    {
                        "queue_command": {
                            "command": "say queue command 1"
                        }
                    },
                    {
                        "queue_command": {
                            "command": "say queue command 2"
                        }
                    }
                ]
            }
        }
    }
}
```
