---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:clock_time"
description: "Describes the minecraft:clock_time entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:clock_time

Compares the current time with a float value in the range (0.0, 1.0).0.0= Noon0.25= Sunset0.5= Midnight0.75= Sunrise.

> [!Note]
> `hourly_clock_time` an updated version of the clock_time filter that uses an Integer in a range of 0 to 24000 based on the in-game time.


## Clock Time Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| value | *not set* | Decimal number | (Required) A floating point value. |  | 

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

## Samples

At Full..: 

```json
{ "test": "clock_time", "subject": "self", "operator": "equals", "value": "0.00" }
```

At Short (using Defaults)..: 

```json
{ "test": "clock_time", "value": "0.00" }
```
