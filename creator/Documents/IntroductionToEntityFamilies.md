---
author: mammerla
ms.author: v-kimjeff
title: Introduction to Entity Families
description: "An article discussing how entity families work and how to add customized behaviors to entities using family tags."
ms.service: minecraft-bedrock-edition
---

# Entity Family

An entity's family is like a tag that helps group similar entities together and is defined by the `minecraft: type_family` component. For example, skeletons, zombies, and creepers are all a part of the `monster` family. 

Entities can have more than one family, which will become important later.

## Customize Behavior with Entity Families

So what can we do with family tags? At a basic level, we can use family tags as an attribute for target selection. Using the `family` argument after a target selector will allow us to specify which families to target for a specific behavior. For example, we can use the `@e family=monster` selector and our entity will only target entities that are alive and have the `monster` family tag. This is a broad filter and works great if you want to create a player companion entity that will help fight off enemies, but you can also get more specific.

For example, you could create a UFO entity that only abducts cows! Or you could create a hoglin nanny that protects and brings food to hoglin babies, but not adult hoglins! Because entities can have multiple family tags you can get very specific when using tags and create really interesting behaviors.

For more information on how to use components to affect entity behavior, see [Entity Behavior Introduction](EntityBehaviorIntroduction.md).

## List of Entity Families

Here is a list of the current entity families in Minecraft Bedrock Edition:

| Family  | Entities in this Family |
|---------|-------------------------|
| `allay` | Allay                   |
| `armor_stand` | Armor Stand       |
| `axolotl` | Axolotl               |
| `bat` | Bat                       |
| `bee` | Bee                       |
| `blaze` | Blaze                   |
| `boat` | Boat                     |
| `cat` | Cat                       |
| `cavespider` | Cave Spider        |
| `chicken` | Chicken               |
| `cod` | Cod                       |
| `cow` | Cow                       |
| `creeper` | Creeper               |
| `dolphin` | Dolphin               |
| `donkey` | Donkey                 |
| `dragon` | Ender Dragon           |
| `drowned` | Drowned               |
| `enderman` | Enderman             |
| `endermite` | Endermite           |
| `evocation_illager` | Evoker      |
| `fox` | Fox                       |
| `frog` | Frog                     |
| `ghast` | Ghast                   |
| `goat` | Goat                     |
| `guardian` | Guardian             |
| `guardian_elder` | Elder Guardian |
| `hoglin` | Hoglin                 |
| `horse` | Horse                   |
| `husk` | Husk                     |
| `irongolem` | Iron Golem          |
| `lightning` | Lightning Bold      |
| `llama` | Llama                   |
| `magmacube` | Magma Cube          |
| `mule` | Mule                     |
| `mushroomcow` | Mooshroom         |
| `npc` | NPC                                                                                                                                               |
| `ocelot` | Ocelot                                                                                                                                         |
| `panda` | Panda                                                                                                                                           |
| `phantom` | Phantom                                                                                                                                       |
| `pig` | Pig                                                                                                                                               |
| `piglin_brute` | Piglin Brute                                                                                                                             |
| `pillager` | Pillager                                                                                                                                     |
| `player` | Player                                                                                                                                         |
| `polarbear` | Polar Bear                                                                                                                                  |
| `pufferfish` | Pufferfish                                                                                                                                 |
| `rabbit` | Rabbit                                                                                                                                         |
| `ravager` | Ravager                                                                                                                                       |
| `salmon` | Salmon                                                                                                                                         |
| `sheep` | Sheep                                                                                                                                           |
| `shulker` | Shulker                                                                                                                                       |
| `silverfish` | Silverfish                                                                                                                                 |
| `skeletonhorse` | Skeleton Horse                                                                                                                          |
| `slime` | Slime                                                                                                                                           |
| `snowgolem` | Snow Golem                                                                                                                                  |
| `spider` | Spider                                                                                                                                         |
| `stray` | Stray                                                                                                                                           |
| `strider` | Strider                                                                                                                                       |
| `tadpole` | Tadpole                                                                                                                                       |
| `tnt` | TNT                                                                                                                                               |
| `tripodcamera` | Camera                                                                                                                                   |
| `tropicalfish` | Tropical Fish                                                                                                                            |
| `turtle` | Turtle                                                                                                                                         |
| `vex` | Vex                                                                                                                                               |
| `villager` | Villager                                                                                                                                     |
| `vindicator` | Vindicator                                                                                                                                 |
| `wandering_trader` | Wandering Trader                                                                                                                     |
| `warden` | Warden                                                                                                                                         |
| `witch` | Witch                                                                                                                                           |
| `wolf` | Wolf                                                                                                                                             |
| `zoglin` | Zoglin                                                                                                                                         |
| `zombie_pigman` | Zombie Pigman                                                                                                                           |
| `zombie_villager` | Zombie Villager                                                                                                                       |
| `zombiehorse` | Zombie Horse                                                                                                                              |
| `hoglin_adult` | Hoglin                                                                                                                                   |
| `adult_piglin` | Piglin Brute                                                                                                                             |
| `strider_adult` | Strider                                                                                                                                 |
| `zoglin_adult` | Zoglin                                                                                                                                   |
| `animal` | Goat                                                                                                                                           |
| `armorer` | Villager, Zombie Villager                                                                                                                     |
| `arthropod` | Bee, Cave Spider, Endermite, Silverfish, Spider                                                                                             |
| `artisan` | Villager                                                                                                                                      |
| `hoglin_baby` | Hoglin                                                                                                                                    |
| `strider_baby` | Strider                                                                                                                                  |
| `zoglin_baby` | Zoglin                                                                                                                                    |
| `blacksmith` | Villager                                                                                                                                   |
| `butcher` | Villager, Zombie Villager                                                                                                                     |
| `lightweight` | Endermite, Fox, Rabbit, Silverfish                                                                                                        |
| `cartographer` | Villager, Zombie Villager                                                                                                                |
| `cleric` | Villager, Zombie Villager                                                                                                                      |
| `wandering_trader_despawning` | Wandering Trader                                                                                                          |
| `farmer` | Villager, Zombie Villager                                                                                                                      |
| `fisherman` | Villager, Zombie Villager                                                                                                                   |
| `fletcher` | Villager, Zombie Villager                                                                                                                    |
| `monster` | Blaze, Cave Spider, Creeper, Drowned, Elder Guardian, Enderman, Endermite, Evoker, Ghast, Guardian, Husk, Magma Cube, Phantom, Piglin, Piglin Brute, Pillager, Ravager, Shulker, Silverfish, Skeleton, Slime, Spider, Stray, Vex, Vindicator, Warden, Witch, Wither, Wither Skeleton, Zombie, Zombie Pigman, Zombie Villager                                                                                                                                     |
| `hoglin_huntable` | Hoglin                                                                                                                                |
| `illager` | Evoker, Pillager, Ravager, Vindicator                                                                                                         |
| `inanimate` | Armor Stand, Boat, Camera, Minecart, Minecart with Chest, Minecart with Command Block, Minecart with Hopper, Minecart with TNT, TNT         |
| `leatherworker` | Villager, Zombie Villager                                                                                                               |
| `librarian` | Villager, Zombie Villager                                                                                                                   |
| `stone_mason` | Villager, Zombie Villager                                                                                                                 |
| `minecart` | Minecart, Minecart with Chest, Minecart with Command Block, Minecart with Hopper, Minecart with TNT                                          |
| `mob` | Allay, Armor Stand, Axolotl, Bat, Bee, Blaze, Camera, Cat, Cave Spider, Chicken, Cow, Creeper, Dolphin, Elder Guardian, Ender Dragon, Enderman, Endermite, Evoker, Fox, Frog, Ghast, Glow Squid, Guardian, Hoglin, Horse, Husk, Iron Golem, Llama, Magma Cube, Mooshroom, Mule, NPC, Ocelot, Panda, Parrot, Phantom, Pig, Pillager, Polar Bear, Rabbit, Ravager, Sheep, Shulker, Silverfish, Skeleton, Skeleton Horse, Slime, Snow Golem, Spider, Squid, Stray, Strider, Tadpole, Turtle, Vex, Villager, Vindicator, Wandering Trader, Warden, Witch, Wither, Wither Skeleton, Wolf, Zoglin, Zombie, Zombie Horse, Zombie Pigman, Zombie Villager                                                                                                                                             |
| `nitwit` | Villager, Zombie Villager                                                                                                                      |
| `peasant` | Villager                                                                                                                                      |
| `piglin` | Piglin, Piglin Brute                                                                                                                           |
| `piglin_hunter` | Piglin                                                                                                                                  |
| `priest` | Village                                                                                                                                        |
| `shepherd` | Villager, Zombie Villager                                                                                                                    |
| `skeleton` | Skeleton, Stray, Wither, Wither Skeleton                                                                                                     |
| `fish` | Cod, Pufferfish, Salmon, Tropical Fish                                                                                                           |
| `squid` | Glow Squid, Squid                                                                                                                               |
| `parrot_tame` | Parrot                                                                                                                                    |
| `pacified` | Bee                                                                                                                                          |
| `toolsmith` | Villager, Zombie Villager                                                                                                                   |
| `undead` | Drowned, Husk, Phantom, Skeleton, Skeleton Horse, Stray, Wither, Wither Skeleton, Zoglin, Zombie, Zombie Horse, Zombie Pigman, Zombie Villager |
| `unskilled` | Zombie Villager                                                                                                                             |
| `weaponsmith` | Villager, Zombie Villager                                                                                                                 |
| `parrot_wild` | Parrot                                                                                                                                    |
| `wither` | Wither, Wither Skeleton                                                                                                                        |
| `panda_aggressive` | Panda                                                                                                                                |
| `zombie` | Drowned, Husk, Zombie, Zombie Villager                                                                                                         |

## Adding Custom Entity Families

Believe it or not, all of that was just the beginning! You can also create your own custom entity families and really take the customization to another level. With entities in a custom family, you can create unique behaviors (or even whole game modes!) based on the relationships between the entities in your world.

Keep in mind that you cannot directly add an entity family to an existing entity. If you want to achieve this, the best thing to do is to create a custom entity that is identical to the vanilla entity, but with your custom family tag included.