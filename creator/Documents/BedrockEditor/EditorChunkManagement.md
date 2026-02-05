---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Chunk Management
description: "An overview of Chunk Management in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 02/05/2026
---

# Chunk Management

Chunk Management lets you regenerate or delete chunks in your world. Use it to reset terrain to its original seed-generated state, clear out unwanted areas, or selectively rebuild specific regions.

## Operation modes

Chunk Management supports two operation modes, selectable via a toggle at the top of the panel:

### Regeneration

Regenerates chunks back to the original world seed terrain. Two targeting modes are available:

- **List**: Regenerates only the chunks that overlap with regions you define in the region list. You can also enable **Exclude Bounds** to regenerate everything *except* the listed regions.

- **World**: Regenerates all chunks in the current dimension. When combined with a region list and **Exclude Bounds** enabled, the listed regions are protected from regeneration.

### Delete

Removes chunk data entirely for the regions you define. Deleted chunks will be regenerated fresh when a player next visits the area.

## Using Chunk Management

1. Open Chunk Management from the action bar or the **View** menu.

2. Select an **Operation Mode** — Regeneration or Delete.

3. Define one or more regions using the region list:
    - Enter **Min** and **Max** coordinates (X and Z) manually and click **Add Region**.
    - Or click **Add from Selection** to use the current Editor selection bounds.

    > [!NOTE]
    > Regions are snapped to chunk boundaries (multiples of 16 blocks). A bounding box visualization appears in the viewport for each defined region.

4. Click the region list entry to teleport to that area for verification.

5. Click **Regenerate** or **Delete** to begin the operation. A confirmation dialog will appear before processing starts.

6. A progress modal displays while chunks are being processed and reloaded.

    > [!IMPORTANT]
    > Chunk regeneration and deletion are irreversible operations that cannot be undone. Always verify your region bounds before confirming.

## Keyboard shortcuts

For the full list of Editor shortcuts, see [Editor Hotkeys](../BedrockEditor/EditorKeyboardInputs.md).
