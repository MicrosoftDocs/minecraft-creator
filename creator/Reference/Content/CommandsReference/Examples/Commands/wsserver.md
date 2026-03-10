---
author: mammerla
ms.author: mikeam
title: "wsserver Command"
description: "Description and usage of the /wsserver command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/wsserver` Command

Attempts to connect to the websocket server on the provided URL.

**Aliases:** `/connect`

| | |
|:---|:---|
| **Permission Level** | Admin |
| **Requires Cheats** | Yes |

## Syntax Overview

`/wsserver <serverUri: rawtext>`

## Usage

`/wsserver <serverUri: rawtext>`

`Connect` to a given `websocket server URI`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| serverUri | [rawtext](../CommandTypes/type_rawtext.md) | Required | A `URI` of the server to connect to. Or use an empty `string` to disconnect. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| serverUri | [rawtext](../CommandTypes/type_rawtext.md) | A `URI` of the server to connect to. Or use an empty `string` to disconnect. |
