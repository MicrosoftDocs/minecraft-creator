---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.send_event"
description: "Describes the minecraft:behavior.send_event ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.send_event

Allows the mob to send an event to another mob.


## Entity Send Event Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| cast_duration | *not set* | Decimal number | Time in seconds for the entire event sending process | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| event_choices | [] | Array of [Event Choices](#entity-sendeventchoice) items | List of possible events to send with conditions, weights, and targeting parameters. | 
| look_at_target | true | Boolean true/false | If true, the mob will face the entity it sends an event to | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| sequence | *not set* | Array of [Sequence](#sequence) items | List of events to send | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity SendEventChoice

#### Entity SendEventChoice Properties

**JSON path:** `event_choices`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| cast_duration | 0 | Decimal number | Time in seconds for the entire event sending process | 
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using this spell again | 
| do_casting | true | Boolean true/false | If true, the mob will show a casting animation while sending the event | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that the target must meet to be eligible for receiving the event | 
| filters (Alternate 1) | *not set* | Object |  | 
| look_at_target | true | Boolean true/false | If true, the mob will face the entity it sends an event to | 
| max_activation_range | 32 | Decimal number | Maximum distance in blocks the target can be for this spell to activate | 
| min_activation_range | 1 | Decimal number | Minimum distance in blocks the target must be for this spell to activate | 
| particle_color | [255, 255, 255, 255] | String | The color of the particles spawned while casting this spell | 
| particle_color (as Array of numbers) | *not set* | Array of numbers |  | 
| sequence | [] | Array of [Sequence](#entity-sendeventstage) items | List of events to send | 
| start_sound_event |  | String | The sound event to play when this spell starts | 
| weight | 0 | Decimal number | Relative weight of this spell choice when randomly selected from valid choices | 

#### Filters

##### Filters Properties

**JSON path:** `event_choices > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

#### Entity SendEventStage

##### Entity SendEventStage Properties

**JSON path:** `event_choices > sequence`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| base_delay | 0 | Decimal number | Amount of time in seconds before starting this step | 
| event |  | String | The event to send to the entity | 
| sound_event |  | String | The sound event to play when this step happens | 

### Sequence
List of events to send.


#### Sequence Properties

**JSON path:** `sequence`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| base_delay | 0 | Decimal number | Amount of time in seconds before starting this step | 
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to send to the entity | 
| sound_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The sound event to play when this step happens | 

## Samples
