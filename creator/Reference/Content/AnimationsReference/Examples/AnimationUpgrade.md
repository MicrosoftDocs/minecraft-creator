---
author: v-josjones
ms.author: v-josjones
title: Animation Reference - Upgrading Animation Scripts
ms.prod: gaming
---

# Animation Reference - Upgrading Animation Scripts

If you are updating your Animation scripts to the latest version of Minecraft: Bedrock Edition, there are a few steps needed depending on what version of Minecraft they were written in.

## Upgrade from v1.7 Beta to v1.8

To upgrade previous scripts, you'll want to do the following steps to all of your Molang scripts in the order listed:

1. entity.flags.foo --> query.foo
1. entity.member.foo --> query.foo
1. entity.foo --> variable.foo
1. params.foo --> global.foo
1. The general rule is that 'query' represents read-only values from the entity the script is running on, and 'variable' represents read-write data created by the user.
1. We've adopted snake_case for all names of things.  You are welcome to use upper-case letters if you wish as we are case-insensitive, however we recommend snake_case in general.
1. Several variables previously set on mobs have been changed to use the query.foo format.  Look through the updated list below to see what has been added and changed.

## Upgrade from v1.8 Beta to v1.10

Some things to keep in mind when upgrading from 1.8 to 1.10 onward;

- The ability to have animations reference other animations in an arbitrarily deep hierarchy.
- The parameters section of animation controllers has been replaced with the `variables` section.
- In the entity definition file, animation controllers are now listed in the `animations` section, and a `scriptsnimate` section has been added to define which root animations to play.
The v1.8 file format is backwards-compatible with v1.10 so you don't _need_ to change anything (although we recommend refactoring your files in the spirit of v1.10 as there is a slight performance win with the new format, as well as it being simpler to understand.
