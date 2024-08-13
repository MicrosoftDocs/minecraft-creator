---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.stay_while_sitting
description: "A reference document detailing the 'behavior.stay_while_sitting' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.stay_while_sitting

`minecraft:behavior.stay_while_sitting` compels an entity to stay in place while sitting.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.stay_while_sitting":{
    "priority": 3
}
```

## Vanilla entities examples

### cat

```json
"minecraft:behavior.stay_while_sitting": {
    "priority": 3
}
```

## Vanilla entities using `minecraft:behavior.stay_while_sitting`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
