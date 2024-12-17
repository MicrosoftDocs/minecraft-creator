---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: script Command
description: Description and usage of the script command
---
# `/script` Command
Debugging options for script within Minecraft.

<table>
  <tr>
    <th>Permission Level</th>
    <td>Admin</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Start profiler
`/script debugger listen <port: int>`

Start profiler (that is, performance) tracking of script within Minecraft.

### Stop profiler
`/script debugger connect [host: string] [port: int]`

Stop profiler-performance tracking of script with Minecraft.

### Watchdog export stats
`/script debugger close`

Export watchdog statistics on script runtime behavior and memory consumption.

### `/script profiler start`

### `/script profiler stop`

### `/script diagnostics startcapture`

### `/script diagnostics stopcapture`

## Arguments
- `host`: string
- `port`: int
