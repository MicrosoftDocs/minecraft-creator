---
author: ArendDanielek
ms.author: v-jillheaden
title: Upgrade Command Actor Storage in Minecraft - Bedrock Edition
ms.prod: gaming
description: "How to pre-upgrade your world's actor storage"
---

# Upgrade Actor Storage in Minecraft: Bedrock Edition

As of version 1.18.30, actors are no longer saved as an accumulated data buffer per chunk. You can read more about Actor Storage here.

As part of the above changes a new command `/upgradeactorstorage` has been implemented. This command pauses all auto-saving of loaded chunks, upgrades all chunks in the world on disk without loading them, then compacts the world files on disk. This can sometimes be a lengthy operation if a world is large and has high actor counts, but usually it is a fairly short process. That being said depending on the device the upgrade is happening on it may take awhile.

## What is the benefit of upgrading?

Any time a chunk is loaded, we will check if it has any data in the legacy actor storage location. After an upgrade, any data will have been removed from this location, but if there is data there, the upgrade process is done at load time of the chunk.

The upgrade is a one-time cost, but loading and upgrading multiple chunks could result in a noticeable load time difference for users. This is most likely to occur in a map that hasn't been loaded before in 1.18.30 and has many mobs around the spawn/load location of the launching player.

By running `/upgradeactorstorage` you can eliminate this work for future players of your worlds by simply running the command, saving, and republishing. Unfortunately this operation will only affect new users of the world and not those who have already downloaded and launched the world. These users will upgrade naturally on a per chunk basis as they play the world.

## Should I upgrade my world?

Upgrading by following the steps below won't hurt anything, but it won't be necessary for most creators.

Because the upgrade is performed on a per-chunk basis, as each one loads for the first time in 1.18.30, the upgrade operations are spread out over enough time that most users will not notice anything. It's only in extreme scenarios where many chunks with many mobs load all in a short period of time (such as during the initial spawn of the player or the first time they enter a new dimension) that upgrading the whole map ahead of time should be considered.

## Steps to upgrade

1. Open a release build with minimum version of 1.18.30 provided to you as a creator partner.
1. Import your world.
1. Back up your world. The upgrade command is non-reversible. Make sure to make back up copies of your content before upgrading.
1. Open the world launch settings screen.
1. Enable cheats. This can be done by switching the game mode to creative or turning on cheats specifically. This is necessary to allow the command to be usable via the chat window in game.
1. Load the world.
1. Open the chat window.
1. Run the command: `/upgradeactorstorage`. Do not issue any keyboard input to the player while the upgrade command is running (until you see the success message) as this could potentially cause chunk load/save operations which could interfere with the upgrade process.
1. Wait for the chat window to reply with "Successfully compacted levelDB log." Compacting the database is the final step in upgrading the world. If any other response is given to the command in the chat window, you should consider the upgrade unsuccessful and contact your studio partner manager.
1. Pause the game, open the settings menu, and return the game mode and cheats state to original settings.
1. Save & Exit the world.
1. Export the newly upgraded world.
1. Republish the newly upgraded world.
