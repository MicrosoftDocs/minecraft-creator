---
author: mammerla
ms.author: mikeam
title: "Raw JSON Text - Command Argument Type"
description: "Reference for the Raw JSON Text command argument type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Raw JSON Text

A JSON text component for rich formatting. Used for titleraw, tellraw, etc.

**Format:** `{"rawtext":[{"text":"..."}]}`

## Examples

### Values

| Example | Description |
|:--------|:------------|
| `{"rawtext":[{"text":"Hello World"}]}` | Simple raw text |
| `{"rawtext":[{"translate":"commands.op.success","with":["PlayerName"]}]}` | Translated text with parameter |
| `{"rawtext":[{"selector":"@p"}]}` | Display selector result as text |
| `{"rawtext":[{"score":{"name":"@p","objective":"score"}}]}` | Display a scoreboard value |
