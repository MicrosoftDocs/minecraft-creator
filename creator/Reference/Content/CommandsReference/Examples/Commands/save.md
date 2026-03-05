---
author: mammerla
ms.author: mikeam
title: "save Command"
description: "Description and usage of the /save command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/save` Command

Control or check how the game saves data to disk. This command is for use on a dedicated server only.

| | |
|:---|:---|
| **Permission Level** | Owner |
| **Requires Cheats** | Yes |

## Syntax Overview

`/save <mode: savemode>`

## Usage

`/save <mode: savemode>`

Save the current game.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | savemode | Required | Either `save-all` or `save-all flush` to save chunks to server immediately. This freezes the servers. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| mode | savemode | Either `save-all` or `save-all flush` to save chunks to server immediately. This freezes the servers. |
