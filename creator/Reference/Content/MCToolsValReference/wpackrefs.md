---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:wpackrefs"
description: "Describes the minecraft:wpackrefs mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:wpackrefs

Validates pack references in world templates. Ensures that behavior_packs.json and resource_packs.json correctly reference the packs bundled with the world.


## World Pack Refs Validation Rules


### WPACKREFS201: Invalid JSON

**Rule ID:** `WPACKREFS201`

**Severity:** Info

**What it checks:** Error when behavior_packs.json or resource_packs.json contains invalid JSON syntax. Check for missing commas, brackets, or malformed entries.

**Technical details:** Data contains the JSON parse error message.


### WPACKREFS202: Missing References

**Rule ID:** `WPACKREFS202`

**Severity:** Info

**What it checks:** Warning when expected pack reference files are missing from the world folder. Packs may not load correctly without proper references.

**Technical details:** Data contains the expected file name (behavior_packs.json or resource_packs.json).


### WPACKREFS203: Invalid Pack ID

**Rule ID:** `WPACKREFS203`

**Severity:** Info

**What it checks:** Error when a pack reference contains an invalid or malformed UUID. Ensure pack_id matches the UUID in the referenced pack's manifest.

**Technical details:** Data contains the invalid pack_id value.


### WPACKREFS204: Missing Version

**Rule ID:** `WPACKREFS204`

**Severity:** Info

**What it checks:** Warning when a pack reference is missing the version field. Include the exact version array to ensure compatibility.

**Technical details:** Data contains the pack_id missing the version.


### WPACKREFS205: Invalid Version

**Rule ID:** `WPACKREFS205`

**Severity:** Info

**What it checks:** Error when the version field in a pack reference is not a valid version array [major, minor, patch]. Version must match the referenced pack.

**Technical details:** Data contains the invalid version value.


### WPACKREFS206: Pack Not Found

**Rule ID:** `WPACKREFS206`

**Severity:** Info

**What it checks:** Error when a referenced pack UUID does not match any pack bundled with the world. Verify the pack exists and the UUID is correct.

**Technical details:** Data contains the UUID of the missing pack.


### WPACKREFS207: Processing Error

**Rule ID:** `WPACKREFS207`

**Severity:** Info

**What it checks:** An internal error occurred while processing pack references. Check logs for details.

**Technical details:** Data contains details about the internal error.
