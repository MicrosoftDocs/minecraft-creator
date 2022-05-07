---
author: ArendDanielek
ms.author: v-jillheaden
title: Actor Storage in Minecraft - Bedrock Edition
ms.prod: gaming
description: "How actor data is organized in the LevelDB on disk"
---

# Actor Storage in Minecraft: Bedrock Edition

Minecraft has inspired many third parties to create useful world file viewing and editing tools that exist outside the client. Tools like the Universal Minecraft Editor and MCEdit are community favorites and are dependent upon knowing where to find each piece of the level's data on disk in the LevelDB files. With the upgrade from legacy actor storage to modern actor storage in R18U2, the locations in the LevelDB files which the data for actors is stored has changed and these third party developers need to be aware.

### What did legacy actor data look like?

Before version 1.18.30, actor data was stored per chunk as a blob of all actors in that chunk. This meant that whenever a single actor changed, we would:

>- Collect the data from every individual actor in the chunk
>- Append the data for each actor into a single buffer/blob
>- Write that grouped data to the chunk

### Why are we moving actor data?

The legacy actor data storage format meant if one actor in a chunk is changed you have to save them all, even if only one actually changed. This resulted in a lot of unnecessary operations and made handling the transfer of entities between chunks an expensive and fragile system.

### How is modern actor data stored on disk?

Modern actor storage moves to storing each Actor under a unique individual LevelDB key. This enables us to have save operations that act only in individual actors. This also means that there is no key-value pair for all actors in a chunk. In fact the individual actor keys are separated into their own key space from the rest of chunk data and chunks do not have data on disk directly referencing actors they contain.

Instead, we use data from the chunk to deterministically generate a key that is unique to the chunk in which we store a digest of the LevelDB keys for the Actors in the chunk. These digest entries are also separated from the non-actor chunk data and the actor key space.

Let's take a look at how this appears on disk:

:::image type="content" source="Media/ActorStorage/leveldbdiagram.png" alt-text="LevelBD diagram showing chuck key space, actor digest key space, and actor key space":::

**Chunk Key Space**

On the left of the diagram, we can see the chunk key space. These keys take the legacy chunk key form of `<Chunk Position><DimensionID>`. 
There is a very old legacy chunk format in which there is no dimension ID, so it is possible to load a really old world in which chunk keys do not have a dimension ID. They will be saved out under a new key with the dimension ID. This is old behavior that still exists.

These are the smallest keys used by pushing them together contiguously on disk. The chunk key is used as a prefix for keys which store all non-actor data from the chunk. Each type of data from the chunk has it's own key ID that is appended to the chunk key prefix.

### Non-Actor Data Chunk Key IDs

```json
enum class LevelChunkTag : char {
  Data3D = 43,
  Version, // This was moved to the front as needed for the extended heights feature. Old chunks will not have this data.
  Data2D,
  Data2DLegacy,
  SubChunkPrefix,
  LegacyTerrain,
  BlockEntity,
  Entity,
  PendingTicks,
  LegacyBlockExtraData,
  BiomeState,
  FinalizedState,
  ConversionData, // data that the converter provides, that are used at runtime for things like blending
  BorderBlocks,
  HardcodedSpawners,
  RandomTicks,
  CheckSums,
  GenerationSeed,
  GeneratedPreCavesAndCliffsBlending = 61, // not used, DON'T REMOVE
  BlendingBiomeHeight = 62, // not used, DON'T REMOVE
  MetaDataHash,
  BlendingData,
  ActorDigestVersion,
  LegacyVersion = 118,
};

```

**Actor Digest Key Space**

In the middle, we have the digest key space. Each digest key takes the form `digp<Chunk Key>`.

- `digp` is a hardcoded prefix for all digest keys. This forces all digests to be contiguous on disk and increases the size of all digest keys such that they are placed ahead of the non-actor chunk data in the LevelDB.

- `<Chunk Key>` is the same key string used by the chunk the data is associated with.

**Actor Key Space**

On the right, we have the actor key space. Each actor key takes the form `actorprefix<ActorUniqueID>`.

- `actorprefix` is a hardcoded prefix used for all actor keys. This forces all actor data to be contiguous on disk and increases the size of all actor keys such that they are placed ahead of the non-actor chunk data and all digests in the LevelDB.

- `<ActorUniqueID>` is a unique ID that is generated for each actor when it is added to the level. This ID is consistent between play sessions and is only unique to this world. Other actors in other worlds may have the same ID, but no actor in the same world will have the same ID.
