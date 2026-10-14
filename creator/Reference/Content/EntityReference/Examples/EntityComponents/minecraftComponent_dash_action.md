---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:dash_action"
description: "Describes the minecraft:dash_action entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:dash_action

Ability for a rideable entity to dash.


## Entity Dash Action Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| can_dash_underwater | false | Boolean true/false | Whether the entity can dash underwater | 
| cooldown_time | 1 | Decimal number | The dash cooldown in seconds | 
| direction | entity | [Direction](#direction-choices) choices | Should the momentum be applied in the direction of the 'entity' or 'passenger'. | 
| horizontal_momentum | 1 | Decimal number | Horizontal momentum of the dash. | 
| vertical_momentum | 1 | Decimal number | Vertical momentum of the dash. | 

### direction

Should the momentum be applied in the direction of the 'entity' or 'passenger'. When 'entity' is used the momentum is applied horizontally according to the direction the entity is looking, using only the entity's yaw. When 'passenger' is used the momentum will be applied in the direction the controlling passenger is looking, using the passenger's pitch and yaw.


### Direction choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| entity | Entity | |
| passenger | Passenger | |

## Samples
