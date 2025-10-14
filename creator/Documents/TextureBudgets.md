---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Texture Budgets
ms.topic: tutorial
description: "A guide for creators on utilizing texture budgets to manage add-on performance"
ms.service: minecraft-bedrock-edition
ms.date: 09/26/2025
---

# Texture Budgets

Texture budgets are enforced for all content types to ensure consistent performance across platforms.

| Memory Performance Tier | Add-On | Resource Pack | World |
|:--|:--|:--|:--|
|1|150 MB|300 MB|750 MB|
|2|225 MB|450 MB|1 GB|
|3|300 MB|600 MB|1.5 GB|
|4|600 MB|1.2 GB|3 GB|
|5|800 MB|1.6 GB|4 GB|

Use subpacks to scale content across platform tiers. Submissions that leverage Vibrant Visuals Enhanced must meet Tier 2 budgets to pass.

> [!TIP]
> Consider reducing texture resolution or limiting [vibrant visuals MERS texture usage](.//VibrantVisuals/VVResourcePacks.md) for lower tiers to stay within the texture budget.

## FAQ

- ### How is texture size determined?

    MCTools analyzes your pack's content, counting the total texture pixels (texels). This value is multiplied by 4 to estimate the (uncompressed) memory impact (ex: 39 million texels * 4 = 150MB).

- ### Can I review my content against texture budgets before submitting?

    Yes! Check out our [Creator Tools (mctools.dev) Overview](../Documents/MCToolsOverview.md) to learn more about how to run MCTools locally.

- ### If my pack supports multiple Subpacks, which will players get?

    Each Subpack includes a `'memory_performance_tier'` parameter, which aligns with the respective platform tiers. Players' devices automatically select the highest compatible subpack available that doesn’t exceed its platform tier.

- ### How are different submission types measured?

    Add-Ons, Texture Packs, and Worlds and measured against their respective budgets. Skins are excluded in all measurements. Mashups separately measure the resource pack against the Texture budget, and the world template + resource pack against the World budget.
