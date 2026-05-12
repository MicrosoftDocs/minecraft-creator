---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_look_around_and_sit"
description: "Describes the minecraft:behavior.random_look_around_and_sit ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_look_around_and_sit

Allows the mob to randomly sit and look around for a duration. Note: Must have a sitting animation set up to use this.


## Entity Random Look Around And Sit Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| continue_if_leashed | false | Boolean true/false | If the goal should continue to be used as long as the mob is leashed. | 
| continue_sitting_on_reload | false | Boolean true/false | The mob will stay sitting on reload. | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| max_angle_of_view_horizontal | 180 | Decimal number | The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction. | 
| max_look_count | 2 | Integer number | The max amount of unique looks a mob will have while looking around. | 
| max_look_time | 40 | Integer number | The max amount of time (in ticks) a mob will stay looking at a direction while looking around. | 
| min_angle_of_view_horizontal | -180 | Decimal number | The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction. | 
| min_look_count | 1 | Integer number | The min amount of unique looks a mob will have while looking around. | 
| min_look_time | 20 | Integer number | The min amount of time (in ticks) a mob will stay looking at a direction while looking around. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| probability | 0.019999999552965164 | Decimal number | The probability of randomly looking around. | 
| random_look_around_cooldown | 0 | Integer number | The cooldown in seconds before the goal can be used again. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
