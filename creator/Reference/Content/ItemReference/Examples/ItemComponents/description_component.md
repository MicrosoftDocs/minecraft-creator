---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - description
description: "A reference document detailing the 'description' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - description

`description` is a list of characters representing an item. The description MUST contain an identifier; other fields are optional.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|identifier|*not set* |String | The identifier for this item; must include a namespace. The 'Minecraft' namespace must not be used, unless overriding a Vanilla item.|
|menu_category |*not set*  | JSON object| The creative group name and category for this item.|
