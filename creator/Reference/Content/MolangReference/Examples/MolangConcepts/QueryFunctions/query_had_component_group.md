---
author: mammerla
ms.author: mikeam
title: "Molang Documentation - minecraft:query_had_component_group"
description: "Describes the minecraft:query_had_component_group molang"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Documentation - minecraft:query_had_component_group

If the entity is being loaded from data that was last saved with a component_group with the specified name, returns 1.0, otherwise returns 0.0. The purpose of this query is to allow entity definitions to change and still be able to load the correct state of entities. Usable only in behavior packs when determining the default value for an entity's Property. Requires one string argument.
