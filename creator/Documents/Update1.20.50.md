---
author: kakinnun
ms.author: kakinnun
title: 1.20.50 Update Notes
description: Update summary of Creator changes in Bedrock 1.20.50
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.20.50 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20.50 and there are a number of changes of note for add-on creators. The following features do not require experimental toggles.

## Debug Workflows
- Added a Clear button to the content log screen

## UI
- Show/Hide Recipe Messages: Creators can now enable/disable the Vanilla game recipe-unlocking toast messages in their content using: 

```/gamerule showrecipemessages```
 
## Blocks
- Toggle Decorative Pot Breaking: With 1.20.50, Vanilla was updated to include improved decorated pots including the ability to break them with projectiles. As a creator, you can choose whether you want this gamerule or not using:
```/gamerule projectilescanbreakblocks```

## Items

- [use_modifiers](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_use_modifiers.md) - Previously called "chargeable" and part of the Holiday Creator Features experiment. This functionality has been moved under the "use_modifiers" component.
- [tags](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_tags.md) - An item component that determines which tags are included on a given item.

## Creator API

Another set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.7.0 release:**

- **World getEntity**
  - World
    - [getEntity](../ScriptAPI/minecraft/server/World.md#getentity)
- **Player Leave Before Event**
  - [PlayerLeaveBeforeEvent](../ScriptAPI/minecraft/server/PlayerLeaveBeforeEvent.md)
  - [PlayerLeaveBeforeEventSignal](../ScriptAPI/minecraft/server/PlayerLeaveBeforeEventSignal.md)
  - WorldBeforeEvents
    - [playerLeave](../ScriptAPI/minecraft/server/WorldBeforeEvents.md#playerleave)
- **Dimension height limits**
  - Dimension
    - [heightRange](../ScriptAPI/minecraft/server/Dimension.md#heightrange)
  - (minecraft/common) [NumberRange](../ScriptAPI/minecraft/common/NumberRange.md)
- **Entity matches**
  - Entity
    - [matches](../ScriptAPI/minecraft/server/Entity.md#matches)
- **World and Entity dynamic properties**
  - World
    - [clearDynamicProperties](../ScriptAPI/minecraft/server/World.md#cleardynamicproperties)
    - [getDynamicProperty](../ScriptAPI/minecraft/server/World.md#getdynamicproperty)
    - [getDynamicPropertyIds](../ScriptAPI/minecraft/server/World.md#getdynamicpropertyids)
    - [getDynamicPropertyTotalByteCount](../ScriptAPI/minecraft/server/World.md#getdynamicpropertytotalbytecount)
    - [setDynamicProperty](../ScriptAPI/minecraft/server/World.md#setdynamicproperty)
  - Entity
    - [clearDynamicProperties](../ScriptAPI/minecraft/server/Entity.md#cleardynamicproperties)
    - [getDynamicProperties](../ScriptAPI/minecraft/server/Entity.md#getdynamicproperty)
    - [getDynamicPropertyIds](../ScriptAPI/minecraft/server/Entity.md#getdynamicpropertyids)
    - [getDynamicPropertyTotalByteCount](../ScriptAPI/minecraft/server/Entity.md#getdynamicpropertytotalbytecount)
    - [setDynamicProperty](../ScriptAPI/minecraft/server/Entity.md#setdynamicproperty)
- **Player interact events**
  - [PlayerInteractWithBlockBeforeEvent](../ScriptAPI/minecraft/server/PlayerInteractWithBlockBeforeEvent.md)
  - [PlayerInteractWithBlockBeforeEventSignal](../ScriptAPI/minecraft/server/PlayerInteractWithBlockBeforeEventSignal.md)
  - [PlayerInteractWithEntityBeforeEvent](../ScriptAPI/minecraft/server/PlayerInteractWithEntityBeforeEvent.md)
  - [PlayerInteractWithEntityBeforeEventSignal](../ScriptAPI/minecraft/server/PlayerInteractWithEntityBeforeEventSignal.md)
  - [PlayerInteractWithBlockAfterEvent](../ScriptAPI/minecraft/server/PlayerInteractWithBlockAfterEvent.md)
  - [PlayerInteractWithBlockAfterEventSignal](../ScriptAPI/minecraft/server/PlayerInteractWithBlockAfterEventSignal.md)
  - [PlayerInteractWithEntityAfterEvent](../ScriptAPI/minecraft/server/PlayerInteractWithEntityAfterEvent.md)
  - [PlayerInteractWithEntityAfterEventSignal](../ScriptAPI/minecraft/server/PlayerInteractWithEntityAfterEventSignal.md)
- **TicksPerSecond**
  - [TicksPerSecond](../ScriptAPI/minecraft/server/minecraft-server.md#tickspersecond) (constant value = 20)
- **Entity.remove**
  - Entity
    - [remove](../ScriptAPI/minecraft/server/Entity.md#remove);
- **Common block utilities**
  - Block
    - [above](../ScriptAPI/minecraft/server/Block.md#above)
    - [below](../ScriptAPI/minecraft/server/Block.md#below)
    - [north](../ScriptAPI/minecraft/server/Block.md#north)
    - [east](../ScriptAPI/minecraft/server/Block.md#east)
    - [south](../ScriptAPI/minecraft/server/Block.md#south)
    - [west](../ScriptAPI/minecraft/server/Block.md#west)
    - [offset](../ScriptAPI/minecraft/server/Block.md#offset)
    - [center](../ScriptAPI/minecraft/server/Block.md#center)
    - [bottomCenter](../ScriptAPI/minecraft/server/Block.md#bottomcenter)
    
Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.8.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

## What's Next

Looking ahead, here's what you can expect coming in future releases.

**queue_command**
- Previously called "run_command", this allows easier triggering of commands from Entity JSON.

**Scripting API**

Additional scripting APIs are planned to move to stable in an upcoming release:
- Explosion Events
- Effect Add Events
- DataDrivenEntity Trigger After Event

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/en-us/sections/360001185332).