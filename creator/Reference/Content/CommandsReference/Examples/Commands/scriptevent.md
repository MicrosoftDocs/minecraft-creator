---
author: mammerla
ms.author: mikeam
title: "scriptevent Command"
description: "Description and usage of the /scriptevent command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/scriptevent` Command

Causes an event to fire within script with the specified message ID and payload. This can be used to connect scripting with any location where commands are used.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/scriptevent <messageId: id> <message: message_root>`

## Usage

`/scriptevent <messageId: id> <message: message_root>`

Passes a message with the specified ID and payload.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| messageId | [id](../CommandTypes/type_id.md) | Required | Identifier of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world. |
| message | [message_root](../CommandTypes/type_message_root.md) | Required | Data component of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world. Message may not exceed 2048 characters in length. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| message | [message_root](../CommandTypes/type_message_root.md) | Data component of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world. Message may not exceed 2048 characters in length. |
| messageId | [id](../CommandTypes/type_id.md) | Identifier of the message to send. This is custom and dependent on the kinds of behavior packs and content you may have installed within the world. |
