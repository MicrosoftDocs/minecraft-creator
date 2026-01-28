---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Texture Images"
description: "Documentation for Texture Images validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Texture Images Validation Rules
Analyzes texture image files (PNG, JPG, TGA) for dimensions, memory usage, and tiering compatibility. Ensures textures fit within platform memory budgets for different device tiers.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [TEXTUREIMAGE101](#textureimage101) | Texture Images | ℹ️ Info |  |
| [TEXTUREIMAGE200](#textureimage200) | Texture Images Tier0 | ℹ️ Info |  |
| [TEXTUREIMAGE201](#textureimage201) | Texture Images Tier1 | ℹ️ Info |  |
| [TEXTUREIMAGE202](#textureimage202) | Texture Images Tier2 | ℹ️ Info |  |
| [TEXTUREIMAGE203](#textureimage203) | Texture Images Tier3 | ℹ️ Info |  |
| [TEXTUREIMAGE204](#textureimage204) | Texture Images Tier4 | ℹ️ Info |  |
| [TEXTUREIMAGE205](#textureimage205) | Texture Images Tier5 | ℹ️ Info |  |
| [TEXTUREIMAGE401](#textureimage401) | PNG/JPG Error | 🔴 Error |  |
| [TEXTUREIMAGE402](#textureimage402) | Texture Over Budget | 🔴 Error |  |
| [TEXTUREIMAGE403](#textureimage403) | Total Over Budget | 🔴 Error |  |
| [TEXTUREIMAGE404](#textureimage404) | TGA Error | 🔴 Error |  |
| [TEXTUREIMAGE405](#textureimage405) | Atlas Over Budget | 🔴 Error |  |
| [TEXTUREIMAGE406](#textureimage406) | Atlas Budget Warning | 🟡 Warning |  |
| [TEXTUREIMAGE407](#textureimage407) | Atlas Budget Error | 🔴 Error |  |
| [TEXTUREIMAGE408](#textureimage408) | Empty Image | 🟡 Warning |  |
| [TEXTUREIMAGE409](#textureimage409) | Invalid Tiering | 🔴 Error |  |
| [TEXTUREIMAGE410](#textureimage410) | Vibrant Visuals Error | 🔴 Error |  |
| [TEXTUREIMAGE460](#textureimage460) | Missing Texture | 🟡 Warning |  |
| [TEXTUREIMAGE461](#textureimage461) | Incomplete Override | 🔴 Error |  |
| [TEXTUREIMAGE462](#textureimage462) | Mashup Incomplete | 🔴 Error |  |

---
## Rule Details

### TEXTUREIMAGE101
**ℹ️ Texture Images**  
**Severity**: Info

#### What This Checks
Count and analysis of all texture image files in the pack.

#### Technical Details
Data contains the count of texture images.

### TEXTUREIMAGE200
**ℹ️ Texture Images Tier0**  
**Severity**: Info

#### What This Checks
Textures assigned to tier 0 (lowest quality) for subpack-based tiering. Used on very low-end devices.

#### Technical Details
Data contains the count or size of tier 0 textures.

### TEXTUREIMAGE201
**ℹ️ Texture Images Tier1**  
**Severity**: Info

#### What This Checks
Textures assigned to tier 1 for subpack-based tiering. Used on low-end devices.

#### Technical Details
Data contains the count or size of tier 1 textures.

### TEXTUREIMAGE202
**ℹ️ Texture Images Tier2**  
**Severity**: Info

#### What This Checks
Textures assigned to tier 2 for subpack-based tiering. Used on mid-range devices.

#### Technical Details
Data contains the count or size of tier 2 textures.

### TEXTUREIMAGE203
**ℹ️ Texture Images Tier3**  
**Severity**: Info

#### What This Checks
Textures assigned to tier 3 for subpack-based tiering. Used on higher-end devices.

#### Technical Details
Data contains the count or size of tier 3 textures.

### TEXTUREIMAGE204
**ℹ️ Texture Images Tier4**  
**Severity**: Info

#### What This Checks
Textures assigned to tier 4 for subpack-based tiering. Used on high-end devices.

#### Technical Details
Data contains the count or size of tier 4 textures.

### TEXTUREIMAGE205
**ℹ️ Texture Images Tier5**  
**Severity**: Info

#### What This Checks
Textures assigned to tier 5 (highest quality) for subpack-based tiering. Used on premium devices.

#### Technical Details
Data contains the count or size of tier 5 textures.

### TEXTUREIMAGE401
**🔴 PNG/JPG Error**  
**Severity**: Error

#### What This Checks
Error when a PNG or JPG image file could not be processed. The file may be corrupted or use an unsupported format variation.

#### How to Fix
Re-export the image from an image editor like Paint.net or Photoshop. Ensure you save as standard PNG-8/PNG-24 or baseline JPG without advanced compression features.

#### Technical Details
Data contains the path to the problematic image file.

### TEXTUREIMAGE402
**🔴 Texture Over Budget**  
**Severity**: Error

#### What This Checks
Error when a single texture exceeds the memory budget for its platform tier. Consider reducing texture dimensions or using compression.

#### How to Fix
Reduce texture dimensions (e.g., from 1024x1024 to 512x512) or use PNG compression. Consider using power-of-2 dimensions for better performance.

#### Technical Details
Data contains the memory size exceeding budget.

### TEXTUREIMAGE403
**🔴 Total Over Budget**  
**Severity**: Error

#### What This Checks
Error when the combined memory of all textures exceeds platform limits. Reduce texture sizes or consolidate textures.

#### How to Fix
Reduce overall texture memory by: lowering texture resolutions, removing unused textures, combining textures into atlases, or implementing texture tiering with subpacks.

#### Technical Details
Data contains the total memory exceeding budget.

### TEXTUREIMAGE404
**🔴 TGA Error**  
**Severity**: Error

#### What This Checks
Error when a TGA image file could not be processed. The file may be corrupted or use an unsupported TGA format.

#### How to Fix
Re-export the TGA file using uncompressed or RLE compression. Avoid TGA 2.0 extensions. Consider converting to PNG for better compatibility.

#### Technical Details
Data contains the path to the problematic TGA file.

### TEXTUREIMAGE405
**🔴 Atlas Over Budget**  
**Severity**: Error

#### What This Checks
Error when a texture that will be atlased exceeds individual size limits. Atlas textures have stricter size requirements.

#### How to Fix
Reduce the size of textures that will be combined into atlases. Individual atlas source textures typically need to be 256x256 or smaller.

#### Technical Details
Data contains the atlas texture size exceeding budget.

### TEXTUREIMAGE406
**🟡 Atlas Budget Warning**  
**Severity**: Warning

#### What This Checks
Warning when total atlas texture memory is approaching platform limits. Consider optimizing texture sizes.

#### Technical Details
Data contains the atlas memory approaching limit.

### TEXTUREIMAGE407
**🔴 Atlas Budget Error**  
**Severity**: Error

#### What This Checks
Error when total atlas texture memory exceeds platform limits. Reduce atlas texture sizes to ensure loading on target devices.

#### Technical Details
Data contains the atlas memory exceeding limit.

### TEXTUREIMAGE408
**🟡 Empty Image**  
**Severity**: Warning

#### What This Checks
Warning when image processing completed but returned no usable data. The image may be empty or have zero dimensions.

#### Technical Details
Data contains the path to the empty image.

### TEXTUREIMAGE409
**🔴 Invalid Tiering**  
**Severity**: Error

#### What This Checks
Error when subpack tiering configuration is invalid. Verify tier memory_tier values in manifest subpacks section.

#### Technical Details
Data contains details about the tiering configuration error.

### TEXTUREIMAGE410
**🔴 Vibrant Visuals Error**  
**Severity**: Error

#### What This Checks
Error when tiering configuration is incompatible with Vibrant Visuals mode. Check subpack configuration.

#### Technical Details
Data contains details about the vibrant visuals configuration error.

### TEXTUREIMAGE460
**🟡 Missing Texture**  
**Severity**: Warning

#### What This Checks
Warning when a texture pack (70%+ vanilla override) is missing coverage for a vanilla texture. For complete texture packs, cover all vanilla textures.

#### Technical Details
Data contains the vanilla texture path not overridden.

### TEXTUREIMAGE461
**🔴 Incomplete Override**  
**Severity**: Error

#### What This Checks
Error when a pack appears to be a texture pack but overrides less than 95% of vanilla textures. Add missing texture overrides.

#### Technical Details
Data contains the override percentage.

### TEXTUREIMAGE462
**🔴 Mashup Incomplete**  
**Severity**: Error

#### What This Checks
Error when a mashup pack's global resource pack overrides less than 60% of vanilla textures. Mashups should provide comprehensive visual theming.

#### Technical Details
Data contains the override percentage for mashup.
