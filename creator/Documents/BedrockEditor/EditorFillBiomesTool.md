---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Fill Biomes Tool
description: "An overview of the Fill Biomes Tool in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 05/18/2026
---

# Fill Biomes Tool

The Fill Biomes tool lets you reassign the biome of any region in your world without affecting blocks or terrain shape. Simply select an area, choose a target biome, and apply the change. You can also use mask filters to limit which existing biomes or biome tags are replaced.

## Using Fill Biomes

1. Open **Fill Biomes** by selecting it from the tool rail or Action Bar.

2. Use **Selection** to highlight the region where you want to change the biome. The selection you make defines the 3D volume that will be affected.

3. Choose a **Target Biome** from the biome dropdown. This is the biome that will be applied to the selected region.

4. (Optional) Configure mask settings to restrict the fill to only replace specific biomes within the selection.

5. (Optional) Enable **Mask by Biome Tag** to filter by biome tags instead of individual biomes. Use the allow/exclude lists to control which biome tags are included or excluded from the fill operation.

6. Click **Fill** to apply the biome change. A confirmation dialog appears before the operation is committed.

   > [!NOTE]
   > The fill operation respects the full vertical extent of the selection. Larger selections take a bit longer to process.

> [!IMPORTANT]
> Biome changes do not take visible effect in the world until you leave and re-enter the game. Grass color, foliage, sky tint, and other biome-dependent visuals update only after reloading the world.

## Mask options

The Fill Biomes tool provides two masking modes that can be used independently or together:

- **Mask by Biome**: Filters specific biome types. Choose between an **Allowed** list (only replace these biomes) or an **Excluded** list (replace everything except these biomes).

- **Mask by Biome Tag**: Filter by biome tags rather than individual biomes. This is useful when you want to target broad categories such as all ocean biomes or all mountain biomes.

> [!TIP]
> You can use the search feature within the mask configuration to quickly find biomes or tags to add to your allow/exclude lists.

## Region management

The Fill Biomes tool tracks reassigned regions so you can review which biomes have been changed within your project. Region assignments persist across sessions.
