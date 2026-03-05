---
author: mammerla
ms.author: mikeam
title: "script Command"
description: "Description and usage of the /script command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/script` Command

Debugging options for script within Minecraft.

| | |
|:---|:---|
| **Permission Level** | Admin |
| **Requires Cheats** | Yes |

## Syntax Overview

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten> <port: int>`

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten> [host: id] [port: int]`

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

### Start profiler

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten> <port: int>`

Start profiler (that is, performance) tracking of script within Minecraft.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | scriptdebugmodedebugger | Required |  |
| action | scriptdebuggerlisten | Required |  |
| port | [Integer](../CommandTypes/type_int.md) | Required |  |

### Stop profiler

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten> [host: id] [port: int]`

Stop profiler-performance tracking of script with Minecraft.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | scriptdebugmodedebugger | Required |  |
| action | scriptdebuggerlisten | Required |  |
| host | [Identifier](../CommandTypes/type_id.md) | Optional |  |
| port | [Integer](../CommandTypes/type_int.md) | Optional |  |

### Watchdog export stats

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

Export watchdog statistics on script runtime behavior and memory consumption.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | scriptdebugmodedebugger | Required |  |
| action | scriptdebuggerlisten | Required |  |

### With mode, action

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | scriptdebugmodedebugger | Required |  |
| action | scriptdebuggerlisten | Required |  |

### With mode, action

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | scriptdebugmodedebugger | Required |  |
| action | scriptdebuggerlisten | Required |  |

### With mode, action

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | scriptdebugmodedebugger | Required |  |
| action | scriptdebuggerlisten | Required |  |

### With mode, action

`/script <mode: scriptdebugmodedebugger> <action: scriptdebuggerlisten>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | scriptdebugmodedebugger | Required |  |
| action | scriptdebuggerlisten | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| action | scriptdebuggerlisten |  |
| host | [Identifier](../CommandTypes/type_id.md) |  |
| mode | scriptdebugmodedebugger |  |
| port | [Integer](../CommandTypes/type_int.md) |  |
