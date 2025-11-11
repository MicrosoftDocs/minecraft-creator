---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:record"
description: "Describes the minecraft:record item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:record

Used by record items to play music.


## Item Components Record Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| comparator_signal | 1 | Integer number | Specifies signal strength for comparator blocks to use, from 1 - 13. | My Sword Singing: `1` | 
| duration | 0 | Decimal number | Specifies duration of sound event in seconds, float value. | My Sword Singing: `5` | 
| sound_event | undefined | [Sound Event](#sound-event-choices) choices | Sound event type: 13, cat, blocks, chirp, far, mall, mellohi, stal, strad, ward, 11, wait, pigstep, otherside, 5, relic. | My Sword Singing: `"pre_ram.screamer"` | 

### Sound Event choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| activate | Activate | |
| add.chest | Add.chest | |
| admire | Admire | |
| agitated | Agitated | |
| ambient | Ambient | |
| ambient.aggressive | Ambient.aggressive | |
| ambient.baby | Ambient.baby | |
| ambient.basalt_deltas.additions | Ambient.basalt deltas.additions | |
| ambient.basalt_deltas.loop | Ambient.basalt deltas.loop | |
| ambient.basalt_deltas.mood | Ambient.basalt deltas.mood | |
| ambient.candle | Ambient.candle | |
| ambient.cave | Ambient.cave | |
| ambient.crimson_forest.additions | Ambient.crimson forest.additions | |
| ambient.crimson_forest.loop | Ambient.crimson forest.loop | |
| ambient.crimson_forest.mood | Ambient.crimson forest.mood | |
| ambient.in.air | Ambient.in.air | |
| ambient.in.raid | Ambient.in.raid | |
| ambient.in.water | Ambient.in.water | |
| ambient.nether_wastes.additions | Ambient.nether wastes.additions | |
| ambient.nether_wastes.loop | Ambient.nether wastes.loop | |
| ambient.nether_wastes.mood | Ambient.nether wastes.mood | |
| ambient.pollinate | Ambient.pollinate | |
| ambient.screamer | Ambient.screamer | |
| ambient.soulsand_valley.additions | Ambient.soulsand valley.additions | |
| ambient.soulsand_valley.loop | Ambient.soulsand valley.loop | |
| ambient.soulsand_valley.mood | Ambient.soulsand valley.mood | |
| ambient.tame | Ambient.tame | |
| ambient.underwater.enter | Ambient.underwater.enter | |
| ambient.underwater.exit | Ambient.underwater.exit | |
| ambient.warped_forest.additions | Ambient.warped forest.additions | |
| ambient.warped_forest.loop | Ambient.warped forest.loop | |
| ambient.warped_forest.mood | Ambient.warped forest.mood | |
| ambient.weather.the_end_light_flash | Ambient.weather.the end light flash | |
| ambient.worried | Ambient.worried | |
| angry | Angry | |
| apply_effect.bad_omen | Apply effect.bad omen | |
| apply_effect.raid_omen | Apply effect.raid omen | |
| apply_effect.trial_omen | Apply effect.trial omen | |
| armor | Armor | |
| armor.break_wolf | Armor.break wolf | |
| armor.crack_wolf | Armor.crack wolf | |
| armor.equip_chain | Armor.equip chain | |
| armor.equip_copper | Armor.equip copper | |
| armor.equip_diamond | Armor.equip diamond | |
| armor.equip_elytra | Armor.equip elytra | |
| armor.equip_generic | Armor.equip generic | |
| armor.equip_gold | Armor.equip gold | |
| armor.equip_iron | Armor.equip iron | |
| armor.equip_leather | Armor.equip leather | |
| armor.equip_netherite | Armor.equip netherite | |
| armor.equip_wolf | Armor.equip wolf | |
| armor.repair_wolf | Armor.repair wolf | |
| armor.unequip_generic | Armor.unequip generic | |
| armor.unequip_wolf | Armor.unequip wolf | |
| attach | Attach | |
| attack | Attack | |
| attack.critical | Attack.critical | |
| attack.nodamage | Attack.nodamage | |
| attack.strong | Attack.strong | |
| balloonpop | Balloonpop | |
| beacon.activate | Beacon.activate | |
| beacon.ambient | Beacon.ambient | |
| beacon.deactivate | Beacon.deactivate | |
| beacon.power | Beacon.power | |
| blast | Blast | |
| block.bamboo_sapling.place | Block.bamboo sapling.place | |
| block.barrel.close | Block.barrel.close | |
| block.barrel.open | Block.barrel.open | |
| block.beehive.drip | Block.beehive.drip | |
| block.beehive.enter | Block.beehive.enter | |
| block.beehive.exit | Block.beehive.exit | |
| block.beehive.shear | Block.beehive.shear | |
| block.beehive.work | Block.beehive.work | |
| block.bell.hit | Block.bell.hit | |
| block.blastfurnace.fire_crackle | Block.blastfurnace.fire crackle | |
| block.campfire.crackle | Block.campfire.crackle | |
| block.cartography_table.use | Block.cartography table.use | |
| block.click | Block.click | |
| block.click.fail | Block.click.fail | |
| block.composter.empty | Block.composter.empty | |
| block.composter.fill | Block.composter.fill | |
| block.composter.fill_success | Block.composter.fill success | |
| block.composter.ready | Block.composter.ready | |
| block.copper_bulb.turn_off | Block.copper bulb.turn off | |
| block.copper_bulb.turn_on | Block.copper bulb.turn on | |
| block.creaking_heart.trail | Block.creaking heart.trail | |
| block.decorated_pot.insert | Block.decorated pot.insert | |
| block.decorated_pot.insert_fail | Block.decorated pot.insert fail | |
| block.enchanting_table.use | Block.enchanting table.use | |
| block.end_portal.spawn | Block.end portal.spawn | |
| block.end_portal_frame.fill | Block.end portal frame.fill | |
| block.fletching_table.use | Block.fletching table.use | |
| block.frog_spawn.break | Block.frog spawn.break | |
| block.frog_spawn.hatch | Block.frog spawn.hatch | |
| block.furnace.lit | Block.furnace.lit | |
| block.grindstone.use | Block.grindstone.use | |
| block.loom.use | Block.loom.use | |
| block.scaffolding.climb | Block.scaffolding.climb | |
| block.sculk.spread | Block.sculk.spread | |
| block.sculk_catalyst.bloom | Block.sculk catalyst.bloom | |
| block.sculk_sensor.place | Block.sculk sensor.place | |
| block.sculk_shrieker.place | Block.sculk shrieker.place | |
| block.sculk_shrieker.shriek | Block.sculk shrieker.shriek | |
| block.sign.waxed_interact_fail | Block.sign.waxed interact fail | |
| block.smithing_table.use | Block.smithing table.use | |
| block.smoker.smoke | Block.smoker.smoke | |
| block.sniffer_egg.crack | Block.sniffer egg.crack | |
| block.sniffer_egg.hatch | Block.sniffer egg.hatch | |
| block.stonecutter.use | Block.stonecutter.use | |
| block.sweet_berry_bush.hurt | Block.sweet berry bush.hurt | |
| block.sweet_berry_bush.pick | Block.sweet berry bush.pick | |
| block.turtle_egg.attack | Block.turtle egg.attack | |
| block.turtle_egg.break | Block.turtle egg.break | |
| block.turtle_egg.crack | Block.turtle egg.crack | |
| block.turtle_egg.hatch | Block.turtle egg.hatch | |
| boost | Boost | |
| born | Born | |
| bottle.dragonbreath | Bottle.dragonbreath | |
| bottle.empty | Bottle.empty | |
| bottle.fill | Bottle.fill | |
| bow | Bow | |
| bow.hit | Bow.hit | |
| break | Break | |
| break.block | Break.block | |
| break_pot | Break pot | |
| breathe | Breathe | |
| breeze_wind_charge.burst | Breeze wind charge.burst | |
| brush | Brush | |
| brush_completed | Brush completed | |
| bubble.down | Bubble.down | |
| bubble.downinside | Bubble.downinside | |
| bubble.pop | Bubble.pop | |
| bubble.up | Bubble.up | |
| bubble.upinside | Bubble.upinside | |
| bucket.empty.fish | Bucket.empty.fish | |
| bucket.empty.lava | Bucket.empty.lava | |
| bucket.empty.powder_snow | Bucket.empty.powder snow | |
| bucket.empty.water | Bucket.empty.water | |
| bucket.fill.fish | Bucket.fill.fish | |
| bucket.fill.lava | Bucket.fill.lava | |
| bucket.fill.powder_snow | Bucket.fill.powder snow | |
| bucket.fill.water | Bucket.fill.water | |
| bullet.hit | Bullet.hit | |
| bundle.drop_contents | Bundle.drop contents | |
| bundle.insert | Bundle.insert | |
| bundle.insert_fail | Bundle.insert fail | |
| bundle.remove_one | Bundle.remove one | |
| burp | Burp | |
| button.click_off | Button.click off | |
| button.click_on | Button.click on | |
| cake.add_candle | Cake.add candle | |
| camera.take_picture | Camera.take picture | |
| cant_breed | Cant breed | |
| cast.spell | Cast.spell | |
| cauldron_drip.lava.pointed_dripstone | Cauldron drip.lava.pointed dripstone | |
| cauldron_drip.water.pointed_dripstone | Cauldron drip.water.pointed dripstone | |
| celebrate | Celebrate | |
| charge | Charge | |
| charge.sculk | Charge.sculk | |
| chest.closed | Chest.closed | |
| chest.open | Chest.open | |
| chime.amethyst_block | Chime.amethyst block | |
| chorusdeath | Chorusdeath | |
| chorusgrow | Chorusgrow | |
| close | Close | |
| close_long | Close long | |
| conduit.activate | Conduit.activate | |
| conduit.ambient | Conduit.ambient | |
| conduit.attack | Conduit.attack | |
| conduit.deactivate | Conduit.deactivate | |
| conduit.short | Conduit.short | |
| convert_mooshroom | Convert mooshroom | |
| convert_to_drowned | Convert to drowned | |
| convert_to_frog | Convert to frog | |
| convert_to_stray | Convert to stray | |
| converted_to_zombified | Converted to zombified | |
| copper.wax.off | Copper.wax.off | |
| copper.wax.on | Copper.wax.on | |
| crafter.craft | Crafter.craft | |
| crafter.disable_slot | Crafter.disable slot | |
| crafter.fail | Crafter.fail | |
| creaking_heart_spawn | Creaking heart spawn | |
| crossbow.loading.end | Crossbow.loading.end | |
| crossbow.loading.middle | Crossbow.loading.middle | |
| crossbow.loading.start | Crossbow.loading.start | |
| crossbow.quick_charge.end | Crossbow.quick charge.end | |
| crossbow.quick_charge.middle | Crossbow.quick charge.middle | |
| crossbow.quick_charge.start | Crossbow.quick charge.start | |
| crossbow.shoot | Crossbow.shoot | |
| dash_ready | Dash ready | |
| deactivate | Deactivate | |
| death | Death | |
| death.baby | Death.baby | |
| death.in.water | Death.in.water | |
| death.mid.volume | Death.mid.volume | |
| death.min.volume | Death.min.volume | |
| death.screamer | Death.screamer | |
| death.to.zombie | Death.to.zombie | |
| default | Default | |
| deny | Deny | |
| detach | Detach | |
| disappeared | Disappeared | |
| door.close | Door.close | |
| door.open | Door.open | |
| drink | Drink | |
| drink.honey | Drink.honey | |
| drink.milk | Drink.milk | |
| drip.lava.pointed_dripstone | Drip.lava.pointed dripstone | |
| drip.water.pointed_dripstone | Drip.water.pointed dripstone | |
| drop.slot | Drop.slot | |
| eat | Eat | |
| elderguardian.curse | Elderguardian.curse | |
| elemconstruct.open | Elemconstruct.open | |
| enderchest.closed | Enderchest.closed | |
| enderchest.open | Enderchest.open | |
| explode | Explode | |
| extinguish.candle | Extinguish.candle | |
| extinguish.fire | Extinguish.fire | |
| fall | Fall | |
| fall.big | Fall.big | |
| fall.small | Fall.small | |
| fang | Fang | |
| fence_gate.close | Fence gate.close | |
| fence_gate.open | Fence gate.open | |
| fire | Fire | |
| fizz | Fizz | |
| flap | Flap | |
| flop | Flop | |
| fly | Fly | |
| freeze | Freeze | |
| fuse | Fuse | |
| gallop | Gallop | |
| glass | Glass | |
| glow_squid.ink_squirt | Glow squid.ink squirt | |
| glowstick.use | Glowstick.use | |
| growl | Growl | |
| haggle | Haggle | |
| haggle.idle | Haggle.idle | |
| haggle.no | Haggle.no | |
| haggle.yes | Haggle.yes | |
| heartbeat | Heartbeat | |
| heavy.step | Heavy.step | |
| hit | Hit | |
| horn_break | Horn break | |
| horn_call0 | Horn call0 | |
| horn_call1 | Horn call1 | |
| horn_call2 | Horn call2 | |
| horn_call3 | Horn call3 | |
| horn_call4 | Horn call4 | |
| horn_call5 | Horn call5 | |
| horn_call6 | Horn call6 | |
| horn_call7 | Horn call7 | |
| hurt | Hurt | |
| hurt.baby | Hurt.baby | |
| hurt.in.water | Hurt.in.water | |
| hurt.reduced | Hurt.reduced | |
| hurt.screamer | Hurt.screamer | |
| icebomb.hit | Icebomb.hit | |
| ignite | Ignite | |
| imitate.blaze | Imitate.blaze | |
| imitate.bogged | Imitate.bogged | |
| imitate.breeze | Imitate.breeze | |
| imitate.camel_husk | Imitate.camel husk | |
| imitate.cave_spider | Imitate.cave spider | |
| imitate.creaking | Imitate.creaking | |
| imitate.creeper | Imitate.creeper | |
| imitate.drowned | Imitate.drowned | |
| imitate.elder_guardian | Imitate.elder guardian | |
| imitate.ender_dragon | Imitate.ender dragon | |
| imitate.enderman | Imitate.enderman | |
| imitate.endermite | Imitate.endermite | |
| imitate.evocation_illager | Imitate.evocation illager | |
| imitate.ghast | Imitate.ghast | |
| imitate.guardian | Imitate.guardian | |
| imitate.happy_ghast | Imitate.happy ghast | |
| imitate.husk | Imitate.husk | |
| imitate.magma_cube | Imitate.magma cube | |
| imitate.parched | Imitate.parched | |
| imitate.phantom | Imitate.phantom | |
| imitate.pillager | Imitate.pillager | |
| imitate.polar_bear | Imitate.polar bear | |
| imitate.ravager | Imitate.ravager | |
| imitate.shulker | Imitate.shulker | |
| imitate.silverfish | Imitate.silverfish | |
| imitate.skeleton | Imitate.skeleton | |
| imitate.slime | Imitate.slime | |
| imitate.spider | Imitate.spider | |
| imitate.stray | Imitate.stray | |
| imitate.vex | Imitate.vex | |
| imitate.vindication_illager | Imitate.vindication illager | |
| imitate.warden | Imitate.warden | |
| imitate.witch | Imitate.witch | |
| imitate.wither | Imitate.wither | |
| imitate.wither_skeleton | Imitate.wither skeleton | |
| imitate.wolf | Imitate.wolf | |
| imitate.zoglin | Imitate.zoglin | |
| imitate.zombie | Imitate.zombie | |
| imitate.zombie_pigman | Imitate.zombie pigman | |
| imitate.zombie_villager | Imitate.zombie villager | |
| insert | Insert | |
| insert_enchanted | Insert enchanted | |
| irongolem.crack | Irongolem.crack | |
| irongolem.repair | Irongolem.repair | |
| item.book.put | Item.book.put | |
| item.enchant.lunge1 | Item.enchant.lunge1 | |
| item.enchant.lunge2 | Item.enchant.lunge2 | |
| item.enchant.lunge3 | Item.enchant.lunge3 | |
| item.fizz | Item.fizz | |
| item.shield.block | Item.shield.block | |
| item.spear.attack_hit | Item.spear.attack hit | |
| item.spear.attack_miss | Item.spear.attack miss | |
| item.spear.use | Item.spear.use | |
| item.spyglass.stop_using | Item.spyglass.stop using | |
| item.spyglass.use | Item.spyglass.use | |
| item.trident.hit | Item.trident.hit | |
| item.trident.hit_ground | Item.trident.hit ground | |
| item.trident.return | Item.trident.return | |
| item.trident.riptide_1 | Item.trident.riptide 1 | |
| item.trident.riptide_2 | Item.trident.riptide 2 | |
| item.trident.riptide_3 | Item.trident.riptide 3 | |
| item.trident.throw | Item.trident.throw | |
| item.trident.thunder | Item.trident.thunder | |
| item.use.on | Item.use.on | |
| item.wooden_spear.attack_hit | Item.wooden spear.attack hit | |
| item.wooden_spear.attack_miss | Item.wooden spear.attack miss | |
| item.wooden_spear.use | Item.wooden spear.use | |
| item_given | Item given | |
| item_taken | Item taken | |
| item_thrown | Item thrown | |
| jump | Jump | |
| jump.prevent | Jump.prevent | |
| jump_to_block | Jump to block | |
| land | Land | |
| large.blast | Large.blast | |
| launch | Launch | |
| lava | Lava | |
| lava.pop | Lava.pop | |
| lay_egg | Lay egg | |
| lay_spawn | Lay spawn | |
| lead.break | Lead.break | |
| lead.leash | Lead.leash | |
| lead.unleash | Lead.unleash | |
| leashknot.break | Leashknot.break | |
| leashknot.place | Leashknot.place | |
| levelup | Levelup | |
| listening | Listening | |
| listening_angry | Listening angry | |
| lodestone_compass.link_compass_to_lodestone | Lodestone compass.link compass to lodestone | |
| lt.reaction.bleach | Lt.reaction.bleach | |
| lt.reaction.epaste | Lt.reaction.epaste | |
| lt.reaction.epaste2 | Lt.reaction.epaste2 | |
| lt.reaction.fertilizer | Lt.reaction.fertilizer | |
| lt.reaction.fire | Lt.reaction.fire | |
| lt.reaction.fireball | Lt.reaction.fireball | |
| lt.reaction.icebomb | Lt.reaction.icebomb | |
| lt.reaction.mgsalt | Lt.reaction.mgsalt | |
| lt.reaction.miscexplosion | Lt.reaction.miscexplosion | |
| lt.reaction.miscfire | Lt.reaction.miscfire | |
| lt.reaction.miscmystical | Lt.reaction.miscmystical | |
| lt.reaction.miscmystical2 | Lt.reaction.miscmystical2 | |
| lt.reaction.product | Lt.reaction.product | |
| mace.heavy_smash_ground | Mace.heavy smash ground | |
| mace.smash_air | Mace.smash air | |
| mace.smash_ground | Mace.smash ground | |
| mad | Mad | |
| milk | Milk | |
| milk.screamer | Milk.screamer | |
| milk_suspiciously | Milk suspiciously | |
| mob.armadillo.brush | Mob.armadillo.brush | |
| mob.armadillo.scute_drop | Mob.armadillo.scute drop | |
| mob.armor_stand.place | Mob.armor stand.place | |
| mob.hoglin.converted_to_zombified | Mob.hoglin.converted to zombified | |
| mob.husk.convert_to_zombie | Mob.husk.convert to zombie | |
| mob.pig.death | Mob.pig.death | |
| mob.player.hurt_drown | Mob.player.hurt drown | |
| mob.player.hurt_freeze | Mob.player.hurt freeze | |
| mob.player.hurt_on_fire | Mob.player.hurt on fire | |
| mob.warning | Mob.warning | |
| mob.warning.baby | Mob.warning.baby | |
| multi_swap | Multi swap | |
| nearby_close | Nearby close | |
| nearby_closer | Nearby closer | |
| nearby_closest | Nearby closest | |
| note | Note | |
| note.bass | Note.bass | |
| ominous_bottle.end_use | Ominous bottle.end use | |
| ominous_item_spawner.about_to_spawn_item | Ominous item spawner.about to spawn item | |
| ominous_item_spawner.spawn_item | Ominous item spawner.spawn item | |
| ominous_item_spawner.spawn_item_begin | Ominous item spawner.spawn item begin | |
| open | Open | |
| open_long | Open long | |
| panic | Panic | |
| pant | Pant | |
| particle.soul_escape.loud | Particle.soul escape.loud | |
| particle.soul_escape.quiet | Particle.soul escape.quiet | |
| pick_berries.cave_vines | Pick berries.cave vines | |
| pickup | Pickup | |
| pickup_enchanted | Pickup enchanted | |
| piston.in | Piston.in | |
| piston.out | Piston.out | |
| place | Place | |
| place_in_water | Place in water | |
| place_item | Place item | |
| plop | Plop | |
| pop | Pop | |
| portal | Portal | |
| portal.travel | Portal.travel | |
| potion.brewed | Potion.brewed | |
| power.off | Power.off | |
| power.off.sculk_sensor | Power.off.sculk sensor | |
| power.on | Power.on | |
| power.on.sculk_sensor | Power.on.sculk sensor | |
| pre_ram | Pre ram | |
| pre_ram.screamer | Pre ram.screamer | |
| prepare.attack | Prepare.attack | |
| prepare.summon | Prepare.summon | |
| prepare.wololo | Prepare.wololo | |
| presneeze | Presneeze | |
| pressure_plate.click_off | Pressure plate.click off | |
| pressure_plate.click_on | Pressure plate.click on | |
| pumpkin.carve | Pumpkin.carve | |
| purr | Purr | |
| purreow | Purreow | |
| raid.horn | Raid.horn | |
| ram_impact | Ram impact | |
| ram_impact.screamer | Ram impact.screamer | |
| random.anvil_use | Random.anvil use | |
| reappeared | Reappeared | |
| record.11 | Record.11 | |
| record.13 | Record.13 | |
| record.5 | Record.5 | |
| record.blocks | Record.blocks | |
| record.cat | Record.cat | |
| record.chirp | Record.chirp | |
| record.creator | Record.creator | |
| record.creator_music_box | Record.creator music box | |
| record.far | Record.far | |
| record.lava_chicken | Record.lava chicken | |
| record.mall | Record.mall | |
| record.mellohi | Record.mellohi | |
| record.otherside | Record.otherside | |
| record.pigstep | Record.pigstep | |
| record.precipice | Record.precipice | |
| record.relic | Record.relic | |
| record.stal | Record.stal | |
| record.strad | Record.strad | |
| record.tears | Record.tears | |
| record.wait | Record.wait | |
| record.ward | Record.ward | |
| reflect | Reflect | |
| remedy | Remedy | |
| respawn_anchor.ambient | Respawn anchor.ambient | |
| respawn_anchor.charge | Respawn anchor.charge | |
| respawn_anchor.deplete | Respawn anchor.deplete | |
| respawn_anchor.set_spawn | Respawn anchor.set spawn | |
| retreat | Retreat | |
| roar | Roar | |
| saddle | Saddle | |
| scared | Scared | |
| scrape | Scrape | |
| screech | Screech | |
| shake | Shake | |
| shatter_pot | Shatter pot | |
| shear | Shear | |
| shoot | Shoot | |
| shulker.close | Shulker.close | |
| shulker.open | Shulker.open | |
| shulkerbox.closed | Shulkerbox.closed | |
| shulkerbox.open | Shulkerbox.open | |
| single_swap | Single swap | |
| sleep | Sleep | |
| smithing_table.use | Smithing table.use | |
| sneeze | Sneeze | |
| sonic_boom | Sonic boom | |
| sonic_charge | Sonic charge | |
| sparkler.active | Sparkler.active | |
| sparkler.use | Sparkler.use | |
| spawn | Spawn | |
| splash | Splash | |
| sponge.absorb | Sponge.absorb | |
| squid.ink_squirt | Squid.ink squirt | |
| squish.big | Squish.big | |
| squish.small | Squish.small | |
| stare | Stare | |
| state_change | State change | |
| step | Step | |
| step.baby | Step.baby | |
| step_lava | Step lava | |
| step_sand | Step sand | |
| stun | Stun | |
| swim | Swim | |
| swoop | Swoop | |
| takeoff | Takeoff | |
| teleport | Teleport | |
| tempt | Tempt | |
| thorns | Thorns | |
| throw | Throw | |
| thunder | Thunder | |
| tilt_down.big_dripleaf | Tilt down.big dripleaf | |
| tilt_up.big_dripleaf | Tilt up.big dripleaf | |
| tongue | Tongue | |
| trapdoor.close | Trapdoor.close | |
| trapdoor.open | Trapdoor.open | |
| trial_spawner.ambient | Trial spawner.ambient | |
| trial_spawner.ambient_ominous | Trial spawner.ambient ominous | |
| trial_spawner.charge_activate | Trial spawner.charge activate | |
| trial_spawner.close_shutter | Trial spawner.close shutter | |
| trial_spawner.detect_player | Trial spawner.detect player | |
| trial_spawner.eject_item | Trial spawner.eject item | |
| trial_spawner.open_shutter | Trial spawner.open shutter | |
| trial_spawner.spawn_mob | Trial spawner.spawn mob | |
| tripod | Tripod | |
| twinkle | Twinkle | |
| ui.cartography_table.take_result | Ui.cartography table.take result | |
| ui.loom.take_result | Ui.loom.take result | |
| ui.stonecutter.take_result | Ui.stonecutter.take result | |
| undefined | Undefined | |
| unfect | Unfect | |
| unfreeze | Unfreeze | |
| unsaddle | Unsaddle | |
| vault.activate | Vault.activate | |
| vault.ambient | Vault.ambient | |
| vault.close_shutter | Vault.close shutter | |
| vault.deactivate | Vault.deactivate | |
| vault.eject_item | Vault.eject item | |
| vault.insert_item | Vault.insert item | |
| vault.insert_item_fail | Vault.insert item fail | |
| vault.open_shutter | Vault.open shutter | |
| vault.reject_rewarded_player | Vault.reject rewarded player | |
| warn | Warn | |
| water | Water | |
| whine | Whine | |
| wind_charge.burst | Wind charge.burst | |

## Samples


```json
"minecraft:record": {
  "comparator_signal": 1,
  "duration": 5,
  "sound_event": "ambient.tame"
}
```

#### [My Sword Singing](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_singing.json)


```json
"minecraft:record": {
  "comparator_signal": 1,
  "duration": 5,
  "sound_event": "pre_ram.screamer"
}
```
