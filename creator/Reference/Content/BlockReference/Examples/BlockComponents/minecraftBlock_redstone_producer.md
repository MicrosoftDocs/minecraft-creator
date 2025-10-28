---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:redstone_producer"
description: "Describes the minecraft:redstone_producer block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:redstone_producer

If added to a block, indicates that it produces a redstone signal.

> [!Note]
> This item requires a format version of at least 1.21.120.


## Redstone Producer Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| connected_faces | *not set* | [Connected Faces](#connected-faces-choices) choices | The list of faces that are considered connected to the circuit. If a face is not connected, it will not provide power to the block touching that face. By default, all faces are connected. |  | 
| power | *not set* | Integer number | The strength of the redstone signal produced by this block. Valid values are from 0 to 15, where 0 means no signal and 15 is the maximum signal strength. |  | 
| strongly_powered_face | *not set* | String | The block touching this face will become strongly powered with the signal level strength of 'power'. Strongly powered blocks will power adjacent blocks. By default, the block will not strongly power any face. |  | 
| transform_relative | false | Boolean true/false | If true, the `strongly_powered_face` and `connected_faces` properties will be rotated according to the 'minecraft:transformation' component. |  | 

### Connected Faces choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| north | North | |
| east | East | |
| south | South | |
| west | West | |
| up | Up | |
| down | Down | |