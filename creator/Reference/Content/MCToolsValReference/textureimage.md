---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:textureimage"
description: "Describes the minecraft:textureimage mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:textureimage

Analyzes texture image files (PNG, JPG, TGA) for dimensions, memory usage, and tiering compatibility. Ensures textures fit within platform memory budgets for different device tiers.


## Texture Images Validation Rules


### TEXTUREIMAGE101: Texture Images

**Rule ID:** `TEXTUREIMAGE101`

**Severity:** Info

**What it checks:** Count and analysis of all texture image files in the pack.

**Technical details:** Data contains the count of texture images.


### TEXTUREIMAGE200: Texture Images Tier0

**Rule ID:** `TEXTUREIMAGE200`

**Severity:** Info

**What it checks:** Textures assigned to tier 0 (lowest quality) for subpack-based tiering. Used on very low-end devices.

**Technical details:** Data contains the count or size of tier 0 textures.


### TEXTUREIMAGE201: Texture Images Tier1

**Rule ID:** `TEXTUREIMAGE201`

**Severity:** Info

**What it checks:** Textures assigned to tier 1 for subpack-based tiering. Used on low-end devices.

**Technical details:** Data contains the count or size of tier 1 textures.


### TEXTUREIMAGE202: Texture Images Tier2

**Rule ID:** `TEXTUREIMAGE202`

**Severity:** Info

**What it checks:** Textures assigned to tier 2 for subpack-based tiering. Used on mid-range devices.

**Technical details:** Data contains the count or size of tier 2 textures.


### TEXTUREIMAGE203: Texture Images Tier3

**Rule ID:** `TEXTUREIMAGE203`

**Severity:** Info

**What it checks:** Textures assigned to tier 3 for subpack-based tiering. Used on higher-end devices.

**Technical details:** Data contains the count or size of tier 3 textures.


### TEXTUREIMAGE204: Texture Images Tier4

**Rule ID:** `TEXTUREIMAGE204`

**Severity:** Info

**What it checks:** Textures assigned to tier 4 for subpack-based tiering. Used on high-end devices.

**Technical details:** Data contains the count or size of tier 4 textures.


### TEXTUREIMAGE205: Texture Images Tier5

**Rule ID:** `TEXTUREIMAGE205`

**Severity:** Info

**What it checks:** Textures assigned to tier 5 (highest quality) for subpack-based tiering. Used on premium devices.

**Technical details:** Data contains the count or size of tier 5 textures.


### TEXTUREIMAGE401: PNG/JPG Error

**Rule ID:** `TEXTUREIMAGE401`

**Severity:** Info

**What it checks:** Error when a PNG or JPG image file could not be processed. The file may be corrupted or use an unsupported format variation.

**How to fix:** Re-export the image from an image editor like Paint.net or Photoshop. Ensure you save as standard PNG-8/PNG-24 or baseline JPG without advanced compression features.

**Technical details:** Data contains the path to the problematic image file.


### TEXTUREIMAGE402: Texture Over Budget

**Rule ID:** `TEXTUREIMAGE402`

**Severity:** Info

**What it checks:** Error when a single texture exceeds the memory budget for its platform tier. Consider reducing texture dimensions or using compression.

**How to fix:** Reduce texture dimensions (e.g., from 1024x1024 to 512x512) or use PNG compression. Consider using power-of-2 dimensions for better performance.

**Technical details:** Data contains the memory size exceeding budget.


### TEXTUREIMAGE403: Total Over Budget

**Rule ID:** `TEXTUREIMAGE403`

**Severity:** Info

**What it checks:** Error when the combined memory of all textures exceeds platform limits. Reduce texture sizes or consolidate textures.

**How to fix:** Reduce overall texture memory by: lowering texture resolutions, removing unused textures, combining textures into atlases, or implementing texture tiering with subpacks.

**Technical details:** Data contains the total memory exceeding budget.


### TEXTUREIMAGE404: TGA Error

**Rule ID:** `TEXTUREIMAGE404`

**Severity:** Info

**What it checks:** Error when a TGA image file could not be processed. The file may be corrupted or use an unsupported TGA format.

**How to fix:** Re-export the TGA file using uncompressed or RLE compression. Avoid TGA 2.0 extensions. Consider converting to PNG for better compatibility.

**Technical details:** Data contains the path to the problematic TGA file.


### TEXTUREIMAGE405: Atlas Over Budget

**Rule ID:** `TEXTUREIMAGE405`

**Severity:** Info

**What it checks:** Error when a texture that will be atlased exceeds individual size limits. Atlas textures have stricter size requirements.

**How to fix:** Reduce the size of textures that will be combined into atlases. Individual atlas source textures typically need to be 256x256 or smaller.

**Technical details:** Data contains the atlas texture size exceeding budget.


### TEXTUREIMAGE406: Atlas Budget Warning

**Rule ID:** `TEXTUREIMAGE406`

**Severity:** Info

**What it checks:** Warning when total atlas texture memory is approaching platform limits. Consider optimizing texture sizes.

**Technical details:** Data contains the atlas memory approaching limit.


### TEXTUREIMAGE407: Atlas Budget Error

**Rule ID:** `TEXTUREIMAGE407`

**Severity:** Info

**What it checks:** Error when total atlas texture memory exceeds platform limits. Reduce atlas texture sizes to ensure loading on target devices.

**Technical details:** Data contains the atlas memory exceeding limit.


### TEXTUREIMAGE408: Empty Image

**Rule ID:** `TEXTUREIMAGE408`

**Severity:** Info

**What it checks:** Warning when image processing completed but returned no usable data. The image may be empty or have zero dimensions.

**Technical details:** Data contains the path to the empty image.


### TEXTUREIMAGE409: Invalid Tiering

**Rule ID:** `TEXTUREIMAGE409`

**Severity:** Info

**What it checks:** Error when subpack tiering configuration is invalid. Verify tier memory_tier values in manifest subpacks section.

**Technical details:** Data contains details about the tiering configuration error.


### TEXTUREIMAGE410: Vibrant Visuals Error

**Rule ID:** `TEXTUREIMAGE410`

**Severity:** Info

**What it checks:** Error when tiering configuration is incompatible with Vibrant Visuals mode. Check subpack configuration.

**Technical details:** Data contains details about the vibrant visuals configuration error.


### TEXTUREIMAGE460: Missing Texture

**Rule ID:** `TEXTUREIMAGE460`

**Severity:** Info

**What it checks:** Warning when a texture pack (70%+ vanilla override) is missing coverage for a vanilla texture. For complete texture packs, cover all vanilla textures.

**Technical details:** Data contains the vanilla texture path not overridden.


### TEXTUREIMAGE461: Incomplete Override

**Rule ID:** `TEXTUREIMAGE461`

**Severity:** Info

**What it checks:** Error when a pack appears to be a texture pack but overrides less than 95% of vanilla textures. Add missing texture overrides.

**Technical details:** Data contains the override percentage.


### TEXTUREIMAGE462: Mashup Incomplete

**Rule ID:** `TEXTUREIMAGE462`

**Severity:** Info

**What it checks:** Error when a mashup pack's global resource pack overrides less than 60% of vanilla textures. Mashups should provide comprehensive visual theming.

**Technical details:** Data contains the override percentage for mashup.
