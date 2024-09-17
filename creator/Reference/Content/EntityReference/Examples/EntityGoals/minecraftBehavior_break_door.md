---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.break_door
description: "A reference document detailing the 'behavior.break_door' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.break_door

`minecraft:behavior.break_door` allows an entity to break down doors.

> [!CAUTION]
> `minecraft:behavior.break_door` is not currently used by any entities within Minecraft: Bedrock Edition. In its place, the parameter`"can_break_doors"` has been added to the `"minecraft:navigation` component to allow entities to break down doors.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.break_door":{
    "priority": 2
}
```

## Vanilla entities examples

No entities currently use `minecraft:behavior.break_door`

## Vanilla entities using `minecraft:behavior.break_door`

No entities currently use `minecraft:behavior.break_door`.
