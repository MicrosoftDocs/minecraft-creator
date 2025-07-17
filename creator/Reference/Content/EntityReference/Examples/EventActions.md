---
author: mammerla
ms.author: mikeam
title: "Event Actions Documentation - Event Actions"
description: "A reference document describing all current Event Actions"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Event Actions Documentation

| Event Actions | Description |
|:-----|:----------|
| [add_component_group](EventActions/add_component_group.md)| Adds component groups to the current entity. |
| [emit_particle](EventActions/emit_particle.md)| Emits a particle specified via the particle attribute. |
| [emit_vibration](EventActions/emit_vibration.md)| Allows the entity to emit a vibration having the entity itself as its source. |
| [play_sound](EventActions/play_sound.md)| Plays a sound as part of an entity event response. |
| [queue_command](EventActions/queue_command.md)| Will queue a slash command or a series of slash commands set in an array to trigger at the end of the tick. |
| [randomize_node](EventActions/randomize_node.md)| The 'randomize' node is an array node that will pick one entry to execute, based on a weight. <br>		If no weight is specified, a node will have a weight of 1.0. <br>		If you add a weight of 4.0 in one node, and 8.0 in another, then those nodes will have a 33.33% (4 / (4 + 8)) and 66.66% (8 / (4 + 8)) chance of executing, respectively. |
| [remove_component_group](EventActions/remove_component_group.md)| Removes component groups from the current entity. |
| [reset_target](EventActions/reset_target.md)| Resets the entities' target (the focus of its gaze, attacking behavior, etc.). |
| [sequence_node](EventActions/sequence_node.md)|  |
| [Set Entity Property](EventActions/set_entity_property.md)| Sets the value of an entity property. |
| [set_property](EventActions/set_property.md)| Sets the value of an entity property. |
| [trigger](EventActions/trigger.md)| Triggers additional entity events when hit. |