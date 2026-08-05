---
author: docsbryce
ms.author: v-brbortree
title: Pack Optimization with Bedrock Dedicated Server
description: "How to use pack optimization with Bedrock Dedicated Server."
ms.service: minecraft-bedrock-edition
ms.date: 07/24/2026
---

# Pack Optimization Using Dedicated Server

## What is Pack Optimization?

Pack Optimization packages the loose files in your resource and behavior packs into archives so that players can get into Minecraft faster.

The Minecraft Dedicated Server can be configured to run pack optimization and will minify JSON files by stripping whitespace and package loose files into an archive.

Use pack optimization if you are testing large addons or hosting worlds that use custom packs for your friends.

You can run the server in a pack-optimization mode by passing `PackOptimizerConfigPath=<path-to-config.json>` when starting a Bedrock Dedicated Server using `bedrock.exe`.

## Version Compatibility

Packs that have been optimized using this process will have a minimum client version of **1.26.40**.

Older clients will not be able to read this data correctly and will fail to load.

Optimized packs are forward compatible with future releases of Minecraft and will continue to work with newer client versions.

## Command Line Usage

Run `bedrock_server.exe` with the `PackOptimizerConfigPath` argument:

```powershell
./bedrock_server.exe PackOptimizerConfigPath=D:/path/to/pack_optimizer_config.json
```

If the path contains spaces, quote the full key/value argument:

```powershell
./bedrock_server.exe "PackOptimizerConfigPath=D:/path with spaces/pack_optimizer_config.json"
```

When this argument is present on Windows builds, the server:

- Reads the config file.
- Optimizes packs found in the configured input directory.
- Writes optimized output packs to the configured output directory.
- Exits after processing.

The server does not continue into normal dedicated server runtime.

## Config File Format

Create the `pack_optimizer_config.json` config file with:

```json
{
  "input_directory": "D:/path/to/packs",
  "output_directory": "D:/path/to/output",
  "verbose_logging": false
}
```

### Fields

- `input_directory` (required): Directory containing packs to process.
- `output_directory` (required): Directory where optimized packs are written.
- `verbose_logging` (optional, default `false`): Enables detailed logs.

### Directory Behavior

- Each subdirectory in `input_directory` is treated as one pack.
- Output is written to `output_directory`.
- Optimized packs include `__brarchive/` output produced by the bake pipeline.

### Exit Behavior and Errors

- Server startup stops after optimization work completes.
- If optimization fails, the process returns dedicated server exit code `7` (`ResourceProcessingError`).
- If `input_directory` does not exist, processing fails early with an invalid-argument error.

## Example Pack Optimization

This example will use sample pack names from the [`minecraft-samples` repository](https://github.com/microsoft/minecraft-samples).

1. Prepare the packs to optimize:

  ```text
  D:/AddOns/packs_input/
    resource_pack_sample/
    behavior_pack_sample/
  ```

  If you are optimizing a Marketplace structured pack, the folders above will be the `Content\resource_packs` and `Content\behavior_packs` folders. Output folders are generated as needed; you do not need to create output directories.

2. Create config file `D:/work/pack_optimizer_config.json`:

  ```json
  {
    "input_directory": "D:/work/packs_input",
    "output_directory": "D:/work/packs_output",
    "verbose_logging": false
  }
  ```

3. Run pack optimization:

  ```powershell
  ./bedrock_server.exe PackOptimizerConfigPath=D:/work/pack_optimizer_config.json
  ```

4. Check optimized output in `D:/work/packs_output`.
