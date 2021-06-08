---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Blocks Class
description: Contents of the Minecraft.Blocks class.
---
# Blocks Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.



## Methods
- [get](#get)
- [acaciaButton](#acaciabutton)
- [acaciaDoor](#acaciadoor)
- [acaciaFenceGate](#acaciafencegate)
- [acaciaPressurePlate](#acaciapressureplate)
- [acaciaStairs](#acaciastairs)
- [acaciaStandingSign](#acaciastandingsign)
- [acaciaTrapdoor](#acaciatrapdoor)
- [acaciaWallSign](#acaciawallsign)
- [activatorRail](#activatorrail)
- [air](#air)
- [allow](#allow)
- [amethystBlock](#amethystblock)
- [amethystCluster](#amethystcluster)
- [ancientDebris](#ancientdebris)
- [andesiteStairs](#andesitestairs)
- [anvil](#anvil)
- [azalea](#azalea)
- [azaleaLeaves](#azalealeaves)
- [azaleaLeavesFlowered](#azalealeavesflowered)
- [bamboo](#bamboo)
- [bambooSapling](#bamboosapling)
- [barrel](#barrel)
- [barrier](#barrier)
- [basalt](#basalt)
- [beacon](#beacon)
- [bed](#bed)
- [bedrock](#bedrock)
- [beeNest](#beenest)
- [beehive](#beehive)
- [beetroot](#beetroot)
- [bell](#bell)
- [bigDripleaf](#bigdripleaf)
- [birchButton](#birchbutton)
- [birchDoor](#birchdoor)
- [birchFenceGate](#birchfencegate)
- [birchPressurePlate](#birchpressureplate)
- [birchStairs](#birchstairs)
- [birchStandingSign](#birchstandingsign)
- [birchTrapdoor](#birchtrapdoor)
- [birchWallSign](#birchwallsign)
- [blackGlazedTerracotta](#blackglazedterracotta)
- [blackstone](#blackstone)
- [blackstoneDoubleSlab](#blackstonedoubleslab)
- [blackstoneSlab](#blackstoneslab)
- [blackstoneStairs](#blackstonestairs)
- [blackstoneWall](#blackstonewall)
- [blastFurnace](#blastfurnace)
- [blueGlazedTerracotta](#blueglazedterracotta)
- [blueIce](#blueice)
- [boneBlock](#boneblock)
- [bookshelf](#bookshelf)
- [borderBlock](#borderblock)
- [brewingStand](#brewingstand)
- [brickBlock](#brickblock)
- [brickStairs](#brickstairs)
- [brownGlazedTerracotta](#brownglazedterracotta)
- [brownMushroom](#brownmushroom)
- [brownMushroomBlock](#brownmushroomblock)
- [bubbleColumn](#bubblecolumn)
- [buddingAmethyst](#buddingamethyst)
- [cactus](#cactus)
- [cake](#cake)
- [calcite](#calcite)
- [camera](#camera)
- [campfire](#campfire)
- [carpet](#carpet)
- [carrots](#carrots)
- [cartographyTable](#cartographytable)
- [carvedPumpkin](#carvedpumpkin)
- [cauldron](#cauldron)
- [caveVines](#cavevines)
- [caveVinesBodyWithBerries](#cavevinesbodywithberries)
- [caveVinesHeadWithBerries](#cavevinesheadwithberries)
- [chain](#chain)
- [chainCommandBlock](#chaincommandblock)
- [chemicalHeat](#chemicalheat)
- [chemistryTable](#chemistrytable)
- [chest](#chest)
- [chiseledDeepslate](#chiseleddeepslate)
- [chiseledNetherBricks](#chiselednetherbricks)
- [chiseledPolishedBlackstone](#chiseledpolishedblackstone)
- [chorusFlower](#chorusflower)
- [chorusPlant](#chorusplant)
- [clay](#clay)
- [coalBlock](#coalblock)
- [coalOre](#coalore)
- [cobbledDeepslate](#cobbleddeepslate)
- [cobbledDeepslateDoubleSlab](#cobbleddeepslatedoubleslab)
- [cobbledDeepslateSlab](#cobbleddeepslateslab)
- [cobbledDeepslateStairs](#cobbleddeepslatestairs)
- [cobbledDeepslateWall](#cobbleddeepslatewall)
- [cobblestone](#cobblestone)
- [cobblestoneWall](#cobblestonewall)
- [cocoa](#cocoa)
- [coloredTorchBp](#coloredtorchbp)
- [coloredTorchRg](#coloredtorchrg)
- [commandBlock](#commandblock)
- [composter](#composter)
- [concrete](#concrete)
- [concretepowder](#concretepowder)
- [conduit](#conduit)
- [copperBlock](#copperblock)
- [copperOre](#copperore)
- [coral](#coral)
- [coralBlock](#coralblock)
- [coralFan](#coralfan)
- [coralFanDead](#coralfandead)
- [coralFanHang](#coralfanhang)
- [coralFanHang2](#coralfanhang2)
- [coralFanHang3](#coralfanhang3)
- [crackedDeepslateBricks](#crackeddeepslatebricks)
- [crackedDeepslateTiles](#crackeddeepslatetiles)
- [crackedNetherBricks](#crackednetherbricks)
- [crackedPolishedBlackstoneBricks](#crackedpolishedblackstonebricks)
- [craftingTable](#craftingtable)
- [crimsonButton](#crimsonbutton)
- [crimsonDoor](#crimsondoor)
- [crimsonDoubleSlab](#crimsondoubleslab)
- [crimsonFence](#crimsonfence)
- [crimsonFenceGate](#crimsonfencegate)
- [crimsonFungus](#crimsonfungus)
- [crimsonHyphae](#crimsonhyphae)
- [crimsonNylium](#crimsonnylium)
- [crimsonPlanks](#crimsonplanks)
- [crimsonPressurePlate](#crimsonpressureplate)
- [crimsonRoots](#crimsonroots)
- [crimsonSlab](#crimsonslab)
- [crimsonStairs](#crimsonstairs)
- [crimsonStandingSign](#crimsonstandingsign)
- [crimsonStem](#crimsonstem)
- [crimsonTrapdoor](#crimsontrapdoor)
- [crimsonWallSign](#crimsonwallsign)
- [cryingObsidian](#cryingobsidian)
- [cutCopper](#cutcopper)
- [cutCopperSlab](#cutcopperslab)
- [cutCopperStairs](#cutcopperstairs)
- [cyanGlazedTerracotta](#cyanglazedterracotta)
- [darkOakButton](#darkoakbutton)
- [darkOakDoor](#darkoakdoor)
- [darkOakFenceGate](#darkoakfencegate)
- [darkOakPressurePlate](#darkoakpressureplate)
- [darkOakStairs](#darkoakstairs)
- [darkOakTrapdoor](#darkoaktrapdoor)
- [darkPrismarineStairs](#darkprismarinestairs)
- [darkoakStandingSign](#darkoakstandingsign)
- [darkoakWallSign](#darkoakwallsign)
- [daylightDetector](#daylightdetector)
- [daylightDetectorInverted](#daylightdetectorinverted)
- [deadbush](#deadbush)
- [deepslate](#deepslate)
- [deepslateBrickDoubleSlab](#deepslatebrickdoubleslab)
- [deepslateBrickSlab](#deepslatebrickslab)
- [deepslateBrickStairs](#deepslatebrickstairs)
- [deepslateBrickWall](#deepslatebrickwall)
- [deepslateBricks](#deepslatebricks)
- [deepslateCoalOre](#deepslatecoalore)
- [deepslateCopperOre](#deepslatecopperore)
- [deepslateDiamondOre](#deepslatediamondore)
- [deepslateEmeraldOre](#deepslateemeraldore)
- [deepslateGoldOre](#deepslategoldore)
- [deepslateIronOre](#deepslateironore)
- [deepslateLapisOre](#deepslatelapisore)
- [deepslateRedstoneOre](#deepslateredstoneore)
- [deepslateTileDoubleSlab](#deepslatetiledoubleslab)
- [deepslateTileSlab](#deepslatetileslab)
- [deepslateTileStairs](#deepslatetilestairs)
- [deepslateTileWall](#deepslatetilewall)
- [deepslateTiles](#deepslatetiles)
- [deny](#deny)
- [detectorRail](#detectorrail)
- [diamondBlock](#diamondblock)
- [diamondOre](#diamondore)
- [dioriteStairs](#dioritestairs)
- [dirt](#dirt)
- [dirtWithRoots](#dirtwithroots)
- [dispenser](#dispenser)
- [doubleCutCopperSlab](#doublecutcopperslab)
- [doublePlant](#doubleplant)
- [doubleStoneSlab](#doublestoneslab)
- [doubleStoneSlab2](#doublestoneslab2)
- [doubleStoneSlab3](#doublestoneslab3)
- [doubleStoneSlab4](#doublestoneslab4)
- [doubleWoodenSlab](#doublewoodenslab)
- [dragonEgg](#dragonegg)
- [driedKelpBlock](#driedkelpblock)
- [dripstoneBlock](#dripstoneblock)
- [dropper](#dropper)
- [element0](#element0)
- [element1](#element1)
- [element10](#element10)
- [element100](#element100)
- [element101](#element101)
- [element102](#element102)
- [element103](#element103)
- [element104](#element104)
- [element105](#element105)
- [element106](#element106)
- [element107](#element107)
- [element108](#element108)
- [element109](#element109)
- [element11](#element11)
- [element110](#element110)
- [element111](#element111)
- [element112](#element112)
- [element113](#element113)
- [element114](#element114)
- [element115](#element115)
- [element116](#element116)
- [element117](#element117)
- [element118](#element118)
- [element12](#element12)
- [element13](#element13)
- [element14](#element14)
- [element15](#element15)
- [element16](#element16)
- [element17](#element17)
- [element18](#element18)
- [element19](#element19)
- [element2](#element2)
- [element20](#element20)
- [element21](#element21)
- [element22](#element22)
- [element23](#element23)
- [element24](#element24)
- [element25](#element25)
- [element26](#element26)
- [element27](#element27)
- [element28](#element28)
- [element29](#element29)
- [element3](#element3)
- [element30](#element30)
- [element31](#element31)
- [element32](#element32)
- [element33](#element33)
- [element34](#element34)
- [element35](#element35)
- [element36](#element36)
- [element37](#element37)
- [element38](#element38)
- [element39](#element39)
- [element4](#element4)
- [element40](#element40)
- [element41](#element41)
- [element42](#element42)
- [element43](#element43)
- [element44](#element44)
- [element45](#element45)
- [element46](#element46)
- [element47](#element47)
- [element48](#element48)
- [element49](#element49)
- [element5](#element5)
- [element50](#element50)
- [element51](#element51)
- [element52](#element52)
- [element53](#element53)
- [element54](#element54)
- [element55](#element55)
- [element56](#element56)
- [element57](#element57)
- [element58](#element58)
- [element59](#element59)
- [element6](#element6)
- [element60](#element60)
- [element61](#element61)
- [element62](#element62)
- [element63](#element63)
- [element64](#element64)
- [element65](#element65)
- [element66](#element66)
- [element67](#element67)
- [element68](#element68)
- [element69](#element69)
- [element7](#element7)
- [element70](#element70)
- [element71](#element71)
- [element72](#element72)
- [element73](#element73)
- [element74](#element74)
- [element75](#element75)
- [element76](#element76)
- [element77](#element77)
- [element78](#element78)
- [element79](#element79)
- [element8](#element8)
- [element80](#element80)
- [element81](#element81)
- [element82](#element82)
- [element83](#element83)
- [element84](#element84)
- [element85](#element85)
- [element86](#element86)
- [element87](#element87)
- [element88](#element88)
- [element89](#element89)
- [element9](#element9)
- [element90](#element90)
- [element91](#element91)
- [element92](#element92)
- [element93](#element93)
- [element94](#element94)
- [element95](#element95)
- [element96](#element96)
- [element97](#element97)
- [element98](#element98)
- [element99](#element99)
- [emeraldBlock](#emeraldblock)
- [emeraldOre](#emeraldore)
- [enchantingTable](#enchantingtable)
- [endBrickStairs](#endbrickstairs)
- [endBricks](#endbricks)
- [endGateway](#endgateway)
- [endPortal](#endportal)
- [endPortalFrame](#endportalframe)
- [endRod](#endrod)
- [endStone](#endstone)
- [enderChest](#enderchest)
- [exposedCopper](#exposedcopper)
- [exposedCutCopper](#exposedcutcopper)
- [exposedCutCopperSlab](#exposedcutcopperslab)
- [exposedCutCopperStairs](#exposedcutcopperstairs)
- [exposedDoubleCutCopperSlab](#exposeddoublecutcopperslab)
- [farmland](#farmland)
- [fence](#fence)
- [fenceGate](#fencegate)
- [fire](#fire)
- [fletchingTable](#fletchingtable)
- [flowerPot](#flowerpot)
- [floweringAzalea](#floweringazalea)
- [flowingLava](#flowinglava)
- [flowingWater](#flowingwater)
- [frame](#frame)
- [frostedIce](#frostedice)
- [furnace](#furnace)
- [gildedBlackstone](#gildedblackstone)
- [glass](#glass)
- [glassPane](#glasspane)
- [glowFrame](#glowframe)
- [glowLichen](#glowlichen)
- [glowingobsidian](#glowingobsidian)
- [glowstone](#glowstone)
- [goldBlock](#goldblock)
- [goldOre](#goldore)
- [goldenRail](#goldenrail)
- [graniteStairs](#granitestairs)
- [grass](#grass)
- [grassPath](#grasspath)
- [gravel](#gravel)
- [grayGlazedTerracotta](#grayglazedterracotta)
- [greenGlazedTerracotta](#greenglazedterracotta)
- [grindstone](#grindstone)
- [hangingRoots](#hangingroots)
- [hardGlass](#hardglass)
- [hardGlassPane](#hardglasspane)
- [hardStainedGlass](#hardstainedglass)
- [hardStainedGlassPane](#hardstainedglasspane)
- [hardenedClay](#hardenedclay)
- [hayBlock](#hayblock)
- [heavyWeightedPressurePlate](#heavyweightedpressureplate)
- [honeyBlock](#honeyblock)
- [honeycombBlock](#honeycombblock)
- [hopper](#hopper)
- [ice](#ice)
- [infestedDeepslate](#infesteddeepslate)
- [infoUpdate](#infoupdate)
- [infoUpdate2](#infoupdate2)
- [invisiblebedrock](#invisiblebedrock)
- [ironBars](#ironbars)
- [ironBlock](#ironblock)
- [ironDoor](#irondoor)
- [ironOre](#ironore)
- [ironTrapdoor](#irontrapdoor)
- [jigsaw](#jigsaw)
- [jukebox](#jukebox)
- [jungleButton](#junglebutton)
- [jungleDoor](#jungledoor)
- [jungleFenceGate](#junglefencegate)
- [junglePressurePlate](#junglepressureplate)
- [jungleStairs](#junglestairs)
- [jungleStandingSign](#junglestandingsign)
- [jungleTrapdoor](#jungletrapdoor)
- [jungleWallSign](#junglewallsign)
- [kelp](#kelp)
- [ladder](#ladder)
- [lantern](#lantern)
- [lapisBlock](#lapisblock)
- [lapisOre](#lapisore)
- [largeAmethystBud](#largeamethystbud)
- [lava](#lava)
- [lavaCauldron](#lavacauldron)
- [leaves](#leaves)
- [leaves2](#leaves2)
- [lectern](#lectern)
- [lever](#lever)
- [lightBlock](#lightblock)
- [lightBlueGlazedTerracotta](#lightblueglazedterracotta)
- [lightWeightedPressurePlate](#lightweightedpressureplate)
- [lightningRod](#lightningrod)
- [limeGlazedTerracotta](#limeglazedterracotta)
- [litBlastFurnace](#litblastfurnace)
- [litDeepslateRedstoneOre](#litdeepslateredstoneore)
- [litFurnace](#litfurnace)
- [litPumpkin](#litpumpkin)
- [litRedstoneLamp](#litredstonelamp)
- [litRedstoneOre](#litredstoneore)
- [litSmoker](#litsmoker)
- [lodestone](#lodestone)
- [log](#log)
- [log2](#log2)
- [loom](#loom)
- [magentaGlazedTerracotta](#magentaglazedterracotta)
- [magma](#magma)
- [mediumAmethystBud](#mediumamethystbud)
- [melonBlock](#melonblock)
- [melonStem](#melonstem)
- [mobSpawner](#mobspawner)
- [monsterEgg](#monsteregg)
- [mossBlock](#mossblock)
- [mossCarpet](#mosscarpet)
- [mossyCobblestone](#mossycobblestone)
- [mossyCobblestoneStairs](#mossycobblestonestairs)
- [mossyStoneBrickStairs](#mossystonebrickstairs)
- [movingblock](#movingblock)
- [mycelium](#mycelium)
- [netherBrick](#netherbrick)
- [netherBrickFence](#netherbrickfence)
- [netherBrickStairs](#netherbrickstairs)
- [netherGoldOre](#nethergoldore)
- [netherSprouts](#nethersprouts)
- [netherWart](#netherwart)
- [netherWartBlock](#netherwartblock)
- [netheriteBlock](#netheriteblock)
- [netherrack](#netherrack)
- [netherreactor](#netherreactor)
- [normalStoneStairs](#normalstonestairs)
- [noteblock](#noteblock)
- [oakStairs](#oakstairs)
- [observer](#observer)
- [obsidian](#obsidian)
- [orangeGlazedTerracotta](#orangeglazedterracotta)
- [oxidizedCopper](#oxidizedcopper)
- [oxidizedCutCopper](#oxidizedcutcopper)
- [oxidizedCutCopperSlab](#oxidizedcutcopperslab)
- [oxidizedCutCopperStairs](#oxidizedcutcopperstairs)
- [oxidizedDoubleCutCopperSlab](#oxidizeddoublecutcopperslab)
- [packedIce](#packedice)
- [pinkGlazedTerracotta](#pinkglazedterracotta)
- [piston](#piston)
- [pistonarmcollision](#pistonarmcollision)
- [planks](#planks)
- [podzol](#podzol)
- [pointedDripstone](#pointeddripstone)
- [polishedAndesiteStairs](#polishedandesitestairs)
- [polishedBasalt](#polishedbasalt)
- [polishedBlackstone](#polishedblackstone)
- [polishedBlackstoneBrickDoubleSlab](#polishedblackstonebrickdoubleslab)
- [polishedBlackstoneBrickSlab](#polishedblackstonebrickslab)
- [polishedBlackstoneBrickStairs](#polishedblackstonebrickstairs)
- [polishedBlackstoneBrickWall](#polishedblackstonebrickwall)
- [polishedBlackstoneBricks](#polishedblackstonebricks)
- [polishedBlackstoneButton](#polishedblackstonebutton)
- [polishedBlackstoneDoubleSlab](#polishedblackstonedoubleslab)
- [polishedBlackstonePressurePlate](#polishedblackstonepressureplate)
- [polishedBlackstoneSlab](#polishedblackstoneslab)
- [polishedBlackstoneStairs](#polishedblackstonestairs)
- [polishedBlackstoneWall](#polishedblackstonewall)
- [polishedDeepslate](#polisheddeepslate)
- [polishedDeepslateDoubleSlab](#polisheddeepslatedoubleslab)
- [polishedDeepslateSlab](#polisheddeepslateslab)
- [polishedDeepslateStairs](#polisheddeepslatestairs)
- [polishedDeepslateWall](#polisheddeepslatewall)
- [polishedDioriteStairs](#polisheddioritestairs)
- [polishedGraniteStairs](#polishedgranitestairs)
- [portal](#portal)
- [potatoes](#potatoes)
- [powderSnow](#powdersnow)
- [poweredComparator](#poweredcomparator)
- [poweredRepeater](#poweredrepeater)
- [prismarine](#prismarine)
- [prismarineBricksStairs](#prismarinebricksstairs)
- [prismarineStairs](#prismarinestairs)
- [pumpkin](#pumpkin)
- [pumpkinStem](#pumpkinstem)
- [purpleGlazedTerracotta](#purpleglazedterracotta)
- [purpurBlock](#purpurblock)
- [purpurStairs](#purpurstairs)
- [quartzBlock](#quartzblock)
- [quartzBricks](#quartzbricks)
- [quartzOre](#quartzore)
- [quartzStairs](#quartzstairs)
- [rail](#rail)
- [rawCopperBlock](#rawcopperblock)
- [rawGoldBlock](#rawgoldblock)
- [rawIronBlock](#rawironblock)
- [redFlower](#redflower)
- [redGlazedTerracotta](#redglazedterracotta)
- [redMushroom](#redmushroom)
- [redMushroomBlock](#redmushroomblock)
- [redNetherBrick](#rednetherbrick)
- [redNetherBrickStairs](#rednetherbrickstairs)
- [redSandstone](#redsandstone)
- [redSandstoneStairs](#redsandstonestairs)
- [redstoneBlock](#redstoneblock)
- [redstoneLamp](#redstonelamp)
- [redstoneOre](#redstoneore)
- [redstoneTorch](#redstonetorch)
- [redstoneWire](#redstonewire)
- [reeds](#reeds)
- [repeatingCommandBlock](#repeatingcommandblock)
- [reserved6](#reserved6)
- [respawnAnchor](#respawnanchor)
- [sand](#sand)
- [sandstone](#sandstone)
- [sandstoneStairs](#sandstonestairs)
- [sapling](#sapling)
- [scaffolding](#scaffolding)
- [sculkSensor](#sculksensor)
- [seaPickle](#seapickle)
- [seagrass](#seagrass)
- [sealantern](#sealantern)
- [shroomlight](#shroomlight)
- [shulkerBox](#shulkerbox)
- [silverGlazedTerracotta](#silverglazedterracotta)
- [skull](#skull)
- [slime](#slime)
- [smallAmethystBud](#smallamethystbud)
- [smallDripleafBlock](#smalldripleafblock)
- [smithingTable](#smithingtable)
- [smoker](#smoker)
- [smoothBasalt](#smoothbasalt)
- [smoothQuartzStairs](#smoothquartzstairs)
- [smoothRedSandstoneStairs](#smoothredsandstonestairs)
- [smoothSandstoneStairs](#smoothsandstonestairs)
- [smoothStone](#smoothstone)
- [snow](#snow)
- [snowLayer](#snowlayer)
- [soulCampfire](#soulcampfire)
- [soulFire](#soulfire)
- [soulLantern](#soullantern)
- [soulSand](#soulsand)
- [soulSoil](#soulsoil)
- [soulTorch](#soultorch)
- [sponge](#sponge)
- [sporeBlossom](#sporeblossom)
- [spruceButton](#sprucebutton)
- [spruceDoor](#sprucedoor)
- [spruceFenceGate](#sprucefencegate)
- [sprucePressurePlate](#sprucepressureplate)
- [spruceStairs](#sprucestairs)
- [spruceStandingSign](#sprucestandingsign)
- [spruceTrapdoor](#sprucetrapdoor)
- [spruceWallSign](#sprucewallsign)
- [stainedGlass](#stainedglass)
- [stainedGlassPane](#stainedglasspane)
- [stainedHardenedClay](#stainedhardenedclay)
- [standingBanner](#standingbanner)
- [standingSign](#standingsign)
- [stickyPiston](#stickypiston)
- [stickypistonarmcollision](#stickypistonarmcollision)
- [stone](#stone)
- [stoneBrickStairs](#stonebrickstairs)
- [stoneButton](#stonebutton)
- [stonePressurePlate](#stonepressureplate)
- [stoneSlab](#stoneslab)
- [stoneSlab2](#stoneslab2)
- [stoneSlab3](#stoneslab3)
- [stoneSlab4](#stoneslab4)
- [stoneStairs](#stonestairs)
- [stonebrick](#stonebrick)
- [stonecutter](#stonecutter)
- [stonecutterBlock](#stonecutterblock)
- [strippedAcaciaLog](#strippedacacialog)
- [strippedBirchLog](#strippedbirchlog)
- [strippedCrimsonHyphae](#strippedcrimsonhyphae)
- [strippedCrimsonStem](#strippedcrimsonstem)
- [strippedDarkOakLog](#strippeddarkoaklog)
- [strippedJungleLog](#strippedjunglelog)
- [strippedOakLog](#strippedoaklog)
- [strippedSpruceLog](#strippedsprucelog)
- [strippedWarpedHyphae](#strippedwarpedhyphae)
- [strippedWarpedStem](#strippedwarpedstem)
- [structureBlock](#structureblock)
- [structureVoid](#structurevoid)
- [sweetBerryBush](#sweetberrybush)
- [tallgrass](#tallgrass)
- [target](#target)
- [tintedGlass](#tintedglass)
- [tnt](#tnt)
- [torch](#torch)
- [trapdoor](#trapdoor)
- [trappedChest](#trappedchest)
- [tripwire](#tripwire)
- [tripwireHook](#tripwirehook)
- [tuff](#tuff)
- [turtleEgg](#turtleegg)
- [twistingVines](#twistingvines)
- [underwaterTorch](#underwatertorch)
- [undyedShulkerBox](#undyedshulkerbox)
- [unknown](#unknown)
- [unlitRedstoneTorch](#unlitredstonetorch)
- [unpoweredComparator](#unpoweredcomparator)
- [unpoweredRepeater](#unpoweredrepeater)
- [vine](#vine)
- [wallBanner](#wallbanner)
- [wallSign](#wallsign)
- [warpedButton](#warpedbutton)
- [warpedDoor](#warpeddoor)
- [warpedDoubleSlab](#warpeddoubleslab)
- [warpedFence](#warpedfence)
- [warpedFenceGate](#warpedfencegate)
- [warpedFungus](#warpedfungus)
- [warpedHyphae](#warpedhyphae)
- [warpedNylium](#warpednylium)
- [warpedPlanks](#warpedplanks)
- [warpedPressurePlate](#warpedpressureplate)
- [warpedRoots](#warpedroots)
- [warpedSlab](#warpedslab)
- [warpedStairs](#warpedstairs)
- [warpedStandingSign](#warpedstandingsign)
- [warpedStem](#warpedstem)
- [warpedTrapdoor](#warpedtrapdoor)
- [warpedWallSign](#warpedwallsign)
- [warpedWartBlock](#warpedwartblock)
- [water](#water)
- [waterlily](#waterlily)
- [waxedCopper](#waxedcopper)
- [waxedCutCopper](#waxedcutcopper)
- [waxedCutCopperSlab](#waxedcutcopperslab)
- [waxedCutCopperStairs](#waxedcutcopperstairs)
- [waxedDoubleCutCopperSlab](#waxeddoublecutcopperslab)
- [waxedExposedCopper](#waxedexposedcopper)
- [waxedExposedCutCopper](#waxedexposedcutcopper)
- [waxedExposedCutCopperSlab](#waxedexposedcutcopperslab)
- [waxedExposedCutCopperStairs](#waxedexposedcutcopperstairs)
- [waxedExposedDoubleCutCopperSlab](#waxedexposeddoublecutcopperslab)
- [waxedOxidizedCopper](#waxedoxidizedcopper)
- [waxedOxidizedCutCopper](#waxedoxidizedcutcopper)
- [waxedOxidizedCutCopperSlab](#waxedoxidizedcutcopperslab)
- [waxedOxidizedCutCopperStairs](#waxedoxidizedcutcopperstairs)
- [waxedOxidizedDoubleCutCopperSlab](#waxedoxidizeddoublecutcopperslab)
- [waxedWeatheredCopper](#waxedweatheredcopper)
- [waxedWeatheredCutCopper](#waxedweatheredcutcopper)
- [waxedWeatheredCutCopperSlab](#waxedweatheredcutcopperslab)
- [waxedWeatheredCutCopperStairs](#waxedweatheredcutcopperstairs)
- [waxedWeatheredDoubleCutCopperSlab](#waxedweathereddoublecutcopperslab)
- [weatheredCopper](#weatheredcopper)
- [weatheredCutCopper](#weatheredcutcopper)
- [weatheredCutCopperSlab](#weatheredcutcopperslab)
- [weatheredCutCopperStairs](#weatheredcutcopperstairs)
- [weatheredDoubleCutCopperSlab](#weathereddoublecutcopperslab)
- [web](#web)
- [weepingVines](#weepingvines)
- [wheat](#wheat)
- [whiteGlazedTerracotta](#whiteglazedterracotta)
- [witherRose](#witherrose)
- [wood](#wood)
- [woodenButton](#woodenbutton)
- [woodenDoor](#woodendoor)
- [woodenPressurePlate](#woodenpressureplate)
- [woodenSlab](#woodenslab)
- [wool](#wool)
- [yellowFlower](#yellowflower)
- [yellowGlazedTerracotta](#yellowglazedterracotta)
  
### **get**
`
get(blockName: string): Block
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **blockName** | *string* | - |

Returns [*Block*](Block.md)


### **acaciaButton**
`
acaciaButton(): Block
`


Returns [*Block*](Block.md)


### **acaciaDoor**
`
acaciaDoor(): Block
`


Returns [*Block*](Block.md)


### **acaciaFenceGate**
`
acaciaFenceGate(): Block
`


Returns [*Block*](Block.md)


### **acaciaPressurePlate**
`
acaciaPressurePlate(): Block
`


Returns [*Block*](Block.md)


### **acaciaStairs**
`
acaciaStairs(): Block
`


Returns [*Block*](Block.md)


### **acaciaStandingSign**
`
acaciaStandingSign(): Block
`


Returns [*Block*](Block.md)


### **acaciaTrapdoor**
`
acaciaTrapdoor(): Block
`


Returns [*Block*](Block.md)


### **acaciaWallSign**
`
acaciaWallSign(): Block
`


Returns [*Block*](Block.md)


### **activatorRail**
`
activatorRail(): Block
`


Returns [*Block*](Block.md)


### **air**
`
air(): Block
`


Returns [*Block*](Block.md)


### **allow**
`
allow(): Block
`


Returns [*Block*](Block.md)


### **amethystBlock**
`
amethystBlock(): Block
`


Returns [*Block*](Block.md)


### **amethystCluster**
`
amethystCluster(): Block
`


Returns [*Block*](Block.md)


### **ancientDebris**
`
ancientDebris(): Block
`


Returns [*Block*](Block.md)


### **andesiteStairs**
`
andesiteStairs(): Block
`


Returns [*Block*](Block.md)


### **anvil**
`
anvil(): Block
`


Returns [*Block*](Block.md)


### **azalea**
`
azalea(): Block
`


Returns [*Block*](Block.md)


### **azaleaLeaves**
`
azaleaLeaves(): Block
`


Returns [*Block*](Block.md)


### **azaleaLeavesFlowered**
`
azaleaLeavesFlowered(): Block
`


Returns [*Block*](Block.md)


### **bamboo**
`
bamboo(): Block
`


Returns [*Block*](Block.md)


### **bambooSapling**
`
bambooSapling(): Block
`


Returns [*Block*](Block.md)


### **barrel**
`
barrel(): Block
`


Returns [*Block*](Block.md)


### **barrier**
`
barrier(): Block
`


Returns [*Block*](Block.md)


### **basalt**
`
basalt(): Block
`


Returns [*Block*](Block.md)


### **beacon**
`
beacon(): Block
`


Returns [*Block*](Block.md)


### **bed**
`
bed(): Block
`


Returns [*Block*](Block.md)


### **bedrock**
`
bedrock(): Block
`


Returns [*Block*](Block.md)


### **beeNest**
`
beeNest(): Block
`


Returns [*Block*](Block.md)


### **beehive**
`
beehive(): Block
`


Returns [*Block*](Block.md)


### **beetroot**
`
beetroot(): Block
`


Returns [*Block*](Block.md)


### **bell**
`
bell(): Block
`


Returns [*Block*](Block.md)


### **bigDripleaf**
`
bigDripleaf(): Block
`


Returns [*Block*](Block.md)


### **birchButton**
`
birchButton(): Block
`


Returns [*Block*](Block.md)


### **birchDoor**
`
birchDoor(): Block
`


Returns [*Block*](Block.md)


### **birchFenceGate**
`
birchFenceGate(): Block
`


Returns [*Block*](Block.md)


### **birchPressurePlate**
`
birchPressurePlate(): Block
`


Returns [*Block*](Block.md)


### **birchStairs**
`
birchStairs(): Block
`


Returns [*Block*](Block.md)


### **birchStandingSign**
`
birchStandingSign(): Block
`


Returns [*Block*](Block.md)


### **birchTrapdoor**
`
birchTrapdoor(): Block
`


Returns [*Block*](Block.md)


### **birchWallSign**
`
birchWallSign(): Block
`


Returns [*Block*](Block.md)


### **blackGlazedTerracotta**
`
blackGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **blackstone**
`
blackstone(): Block
`


Returns [*Block*](Block.md)


### **blackstoneDoubleSlab**
`
blackstoneDoubleSlab(): Block
`


Returns [*Block*](Block.md)


### **blackstoneSlab**
`
blackstoneSlab(): Block
`


Returns [*Block*](Block.md)


### **blackstoneStairs**
`
blackstoneStairs(): Block
`


Returns [*Block*](Block.md)


### **blackstoneWall**
`
blackstoneWall(): Block
`


Returns [*Block*](Block.md)


### **blastFurnace**
`
blastFurnace(): Block
`


Returns [*Block*](Block.md)


### **blueGlazedTerracotta**
`
blueGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **blueIce**
`
blueIce(): Block
`


Returns [*Block*](Block.md)


### **boneBlock**
`
boneBlock(): Block
`


Returns [*Block*](Block.md)


### **bookshelf**
`
bookshelf(): Block
`


Returns [*Block*](Block.md)


### **borderBlock**
`
borderBlock(): Block
`


Returns [*Block*](Block.md)


### **brewingStand**
`
brewingStand(): Block
`


Returns [*Block*](Block.md)


### **brickBlock**
`
brickBlock(): Block
`


Returns [*Block*](Block.md)


### **brickStairs**
`
brickStairs(): Block
`


Returns [*Block*](Block.md)


### **brownGlazedTerracotta**
`
brownGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **brownMushroom**
`
brownMushroom(): Block
`


Returns [*Block*](Block.md)


### **brownMushroomBlock**
`
brownMushroomBlock(): Block
`


Returns [*Block*](Block.md)


### **bubbleColumn**
`
bubbleColumn(): Block
`


Returns [*Block*](Block.md)


### **buddingAmethyst**
`
buddingAmethyst(): Block
`


Returns [*Block*](Block.md)


### **cactus**
`
cactus(): Block
`


Returns [*Block*](Block.md)


### **cake**
`
cake(): Block
`


Returns [*Block*](Block.md)


### **calcite**
`
calcite(): Block
`


Returns [*Block*](Block.md)


### **camera**
`
camera(): Block
`


Returns [*Block*](Block.md)


### **campfire**
`
campfire(): Block
`


Returns [*Block*](Block.md)


### **carpet**
`
carpet(): Block
`


Returns [*Block*](Block.md)


### **carrots**
`
carrots(): Block
`


Returns [*Block*](Block.md)


### **cartographyTable**
`
cartographyTable(): Block
`


Returns [*Block*](Block.md)


### **carvedPumpkin**
`
carvedPumpkin(): Block
`


Returns [*Block*](Block.md)


### **cauldron**
`
cauldron(): Block
`


Returns [*Block*](Block.md)


### **caveVines**
`
caveVines(): Block
`


Returns [*Block*](Block.md)


### **caveVinesBodyWithBerries**
`
caveVinesBodyWithBerries(): Block
`


Returns [*Block*](Block.md)


### **caveVinesHeadWithBerries**
`
caveVinesHeadWithBerries(): Block
`


Returns [*Block*](Block.md)


### **chain**
`
chain(): Block
`


Returns [*Block*](Block.md)


### **chainCommandBlock**
`
chainCommandBlock(): Block
`


Returns [*Block*](Block.md)


### **chemicalHeat**
`
chemicalHeat(): Block
`


Returns [*Block*](Block.md)


### **chemistryTable**
`
chemistryTable(): Block
`


Returns [*Block*](Block.md)


### **chest**
`
chest(): Block
`


Returns [*Block*](Block.md)


### **chiseledDeepslate**
`
chiseledDeepslate(): Block
`


Returns [*Block*](Block.md)


### **chiseledNetherBricks**
`
chiseledNetherBricks(): Block
`


Returns [*Block*](Block.md)


### **chiseledPolishedBlackstone**
`
chiseledPolishedBlackstone(): Block
`


Returns [*Block*](Block.md)


### **chorusFlower**
`
chorusFlower(): Block
`


Returns [*Block*](Block.md)


### **chorusPlant**
`
chorusPlant(): Block
`


Returns [*Block*](Block.md)


### **clay**
`
clay(): Block
`


Returns [*Block*](Block.md)


### **coalBlock**
`
coalBlock(): Block
`


Returns [*Block*](Block.md)


### **coalOre**
`
coalOre(): Block
`


Returns [*Block*](Block.md)


### **cobbledDeepslate**
`
cobbledDeepslate(): Block
`


Returns [*Block*](Block.md)


### **cobbledDeepslateDoubleSlab**
`
cobbledDeepslateDoubleSlab(): Block
`


Returns [*Block*](Block.md)


### **cobbledDeepslateSlab**
`
cobbledDeepslateSlab(): Block
`


Returns [*Block*](Block.md)


### **cobbledDeepslateStairs**
`
cobbledDeepslateStairs(): Block
`


Returns [*Block*](Block.md)


### **cobbledDeepslateWall**
`
cobbledDeepslateWall(): Block
`


Returns [*Block*](Block.md)


### **cobblestone**
`
cobblestone(): Block
`


Returns [*Block*](Block.md)


### **cobblestoneWall**
`
cobblestoneWall(): Block
`


Returns [*Block*](Block.md)


### **cocoa**
`
cocoa(): Block
`


Returns [*Block*](Block.md)


### **coloredTorchBp**
`
coloredTorchBp(): Block
`


Returns [*Block*](Block.md)


### **coloredTorchRg**
`
coloredTorchRg(): Block
`


Returns [*Block*](Block.md)


### **commandBlock**
`
commandBlock(): Block
`


Returns [*Block*](Block.md)


### **composter**
`
composter(): Block
`


Returns [*Block*](Block.md)


### **concrete**
`
concrete(): Block
`


Returns [*Block*](Block.md)


### **concretepowder**
`
concretepowder(): Block
`


Returns [*Block*](Block.md)


### **conduit**
`
conduit(): Block
`


Returns [*Block*](Block.md)


### **copperBlock**
`
copperBlock(): Block
`


Returns [*Block*](Block.md)


### **copperOre**
`
copperOre(): Block
`


Returns [*Block*](Block.md)


### **coral**
`
coral(): Block
`


Returns [*Block*](Block.md)


### **coralBlock**
`
coralBlock(): Block
`


Returns [*Block*](Block.md)


### **coralFan**
`
coralFan(): Block
`


Returns [*Block*](Block.md)


### **coralFanDead**
`
coralFanDead(): Block
`


Returns [*Block*](Block.md)


### **coralFanHang**
`
coralFanHang(): Block
`


Returns [*Block*](Block.md)


### **coralFanHang2**
`
coralFanHang2(): Block
`


Returns [*Block*](Block.md)


### **coralFanHang3**
`
coralFanHang3(): Block
`


Returns [*Block*](Block.md)


### **crackedDeepslateBricks**
`
crackedDeepslateBricks(): Block
`


Returns [*Block*](Block.md)


### **crackedDeepslateTiles**
`
crackedDeepslateTiles(): Block
`


Returns [*Block*](Block.md)


### **crackedNetherBricks**
`
crackedNetherBricks(): Block
`


Returns [*Block*](Block.md)


### **crackedPolishedBlackstoneBricks**
`
crackedPolishedBlackstoneBricks(): Block
`


Returns [*Block*](Block.md)


### **craftingTable**
`
craftingTable(): Block
`


Returns [*Block*](Block.md)


### **crimsonButton**
`
crimsonButton(): Block
`


Returns [*Block*](Block.md)


### **crimsonDoor**
`
crimsonDoor(): Block
`


Returns [*Block*](Block.md)


### **crimsonDoubleSlab**
`
crimsonDoubleSlab(): Block
`


Returns [*Block*](Block.md)


### **crimsonFence**
`
crimsonFence(): Block
`


Returns [*Block*](Block.md)


### **crimsonFenceGate**
`
crimsonFenceGate(): Block
`


Returns [*Block*](Block.md)


### **crimsonFungus**
`
crimsonFungus(): Block
`


Returns [*Block*](Block.md)


### **crimsonHyphae**
`
crimsonHyphae(): Block
`


Returns [*Block*](Block.md)


### **crimsonNylium**
`
crimsonNylium(): Block
`


Returns [*Block*](Block.md)


### **crimsonPlanks**
`
crimsonPlanks(): Block
`


Returns [*Block*](Block.md)


### **crimsonPressurePlate**
`
crimsonPressurePlate(): Block
`


Returns [*Block*](Block.md)


### **crimsonRoots**
`
crimsonRoots(): Block
`


Returns [*Block*](Block.md)


### **crimsonSlab**
`
crimsonSlab(): Block
`


Returns [*Block*](Block.md)


### **crimsonStairs**
`
crimsonStairs(): Block
`


Returns [*Block*](Block.md)


### **crimsonStandingSign**
`
crimsonStandingSign(): Block
`


Returns [*Block*](Block.md)


### **crimsonStem**
`
crimsonStem(): Block
`


Returns [*Block*](Block.md)


### **crimsonTrapdoor**
`
crimsonTrapdoor(): Block
`


Returns [*Block*](Block.md)


### **crimsonWallSign**
`
crimsonWallSign(): Block
`


Returns [*Block*](Block.md)


### **cryingObsidian**
`
cryingObsidian(): Block
`


Returns [*Block*](Block.md)


### **cutCopper**
`
cutCopper(): Block
`


Returns [*Block*](Block.md)


### **cutCopperSlab**
`
cutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **cutCopperStairs**
`
cutCopperStairs(): Block
`


Returns [*Block*](Block.md)


### **cyanGlazedTerracotta**
`
cyanGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **darkOakButton**
`
darkOakButton(): Block
`


Returns [*Block*](Block.md)


### **darkOakDoor**
`
darkOakDoor(): Block
`


Returns [*Block*](Block.md)


### **darkOakFenceGate**
`
darkOakFenceGate(): Block
`


Returns [*Block*](Block.md)


### **darkOakPressurePlate**
`
darkOakPressurePlate(): Block
`


Returns [*Block*](Block.md)


### **darkOakStairs**
`
darkOakStairs(): Block
`


Returns [*Block*](Block.md)


### **darkOakTrapdoor**
`
darkOakTrapdoor(): Block
`


Returns [*Block*](Block.md)


### **darkPrismarineStairs**
`
darkPrismarineStairs(): Block
`


Returns [*Block*](Block.md)


### **darkoakStandingSign**
`
darkoakStandingSign(): Block
`


Returns [*Block*](Block.md)


### **darkoakWallSign**
`
darkoakWallSign(): Block
`


Returns [*Block*](Block.md)


### **daylightDetector**
`
daylightDetector(): Block
`


Returns [*Block*](Block.md)


### **daylightDetectorInverted**
`
daylightDetectorInverted(): Block
`


Returns [*Block*](Block.md)


### **deadbush**
`
deadbush(): Block
`


Returns [*Block*](Block.md)


### **deepslate**
`
deepslate(): Block
`


Returns [*Block*](Block.md)


### **deepslateBrickDoubleSlab**
`
deepslateBrickDoubleSlab(): Block
`


Returns [*Block*](Block.md)


### **deepslateBrickSlab**
`
deepslateBrickSlab(): Block
`


Returns [*Block*](Block.md)


### **deepslateBrickStairs**
`
deepslateBrickStairs(): Block
`


Returns [*Block*](Block.md)


### **deepslateBrickWall**
`
deepslateBrickWall(): Block
`


Returns [*Block*](Block.md)


### **deepslateBricks**
`
deepslateBricks(): Block
`


Returns [*Block*](Block.md)


### **deepslateCoalOre**
`
deepslateCoalOre(): Block
`


Returns [*Block*](Block.md)


### **deepslateCopperOre**
`
deepslateCopperOre(): Block
`


Returns [*Block*](Block.md)


### **deepslateDiamondOre**
`
deepslateDiamondOre(): Block
`


Returns [*Block*](Block.md)


### **deepslateEmeraldOre**
`
deepslateEmeraldOre(): Block
`


Returns [*Block*](Block.md)


### **deepslateGoldOre**
`
deepslateGoldOre(): Block
`


Returns [*Block*](Block.md)


### **deepslateIronOre**
`
deepslateIronOre(): Block
`


Returns [*Block*](Block.md)


### **deepslateLapisOre**
`
deepslateLapisOre(): Block
`


Returns [*Block*](Block.md)


### **deepslateRedstoneOre**
`
deepslateRedstoneOre(): Block
`


Returns [*Block*](Block.md)


### **deepslateTileDoubleSlab**
`
deepslateTileDoubleSlab(): Block
`


Returns [*Block*](Block.md)


### **deepslateTileSlab**
`
deepslateTileSlab(): Block
`


Returns [*Block*](Block.md)


### **deepslateTileStairs**
`
deepslateTileStairs(): Block
`


Returns [*Block*](Block.md)


### **deepslateTileWall**
`
deepslateTileWall(): Block
`


Returns [*Block*](Block.md)


### **deepslateTiles**
`
deepslateTiles(): Block
`


Returns [*Block*](Block.md)


### **deny**
`
deny(): Block
`


Returns [*Block*](Block.md)


### **detectorRail**
`
detectorRail(): Block
`


Returns [*Block*](Block.md)


### **diamondBlock**
`
diamondBlock(): Block
`


Returns [*Block*](Block.md)


### **diamondOre**
`
diamondOre(): Block
`


Returns [*Block*](Block.md)


### **dioriteStairs**
`
dioriteStairs(): Block
`


Returns [*Block*](Block.md)


### **dirt**
`
dirt(): Block
`


Returns [*Block*](Block.md)


### **dirtWithRoots**
`
dirtWithRoots(): Block
`


Returns [*Block*](Block.md)


### **dispenser**
`
dispenser(): Block
`


Returns [*Block*](Block.md)


### **doubleCutCopperSlab**
`
doubleCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **doublePlant**
`
doublePlant(): Block
`


Returns [*Block*](Block.md)


### **doubleStoneSlab**
`
doubleStoneSlab(): Block
`


Returns [*Block*](Block.md)


### **doubleStoneSlab2**
`
doubleStoneSlab2(): Block
`


Returns [*Block*](Block.md)


### **doubleStoneSlab3**
`
doubleStoneSlab3(): Block
`


Returns [*Block*](Block.md)


### **doubleStoneSlab4**
`
doubleStoneSlab4(): Block
`


Returns [*Block*](Block.md)


### **doubleWoodenSlab**
`
doubleWoodenSlab(): Block
`


Returns [*Block*](Block.md)


### **dragonEgg**
`
dragonEgg(): Block
`


Returns [*Block*](Block.md)


### **driedKelpBlock**
`
driedKelpBlock(): Block
`


Returns [*Block*](Block.md)


### **dripstoneBlock**
`
dripstoneBlock(): Block
`


Returns [*Block*](Block.md)


### **dropper**
`
dropper(): Block
`


Returns [*Block*](Block.md)


### **element0**
`
element0(): Block
`


Returns [*Block*](Block.md)


### **element1**
`
element1(): Block
`


Returns [*Block*](Block.md)


### **element10**
`
element10(): Block
`


Returns [*Block*](Block.md)


### **element100**
`
element100(): Block
`


Returns [*Block*](Block.md)


### **element101**
`
element101(): Block
`


Returns [*Block*](Block.md)


### **element102**
`
element102(): Block
`


Returns [*Block*](Block.md)


### **element103**
`
element103(): Block
`


Returns [*Block*](Block.md)


### **element104**
`
element104(): Block
`


Returns [*Block*](Block.md)


### **element105**
`
element105(): Block
`


Returns [*Block*](Block.md)


### **element106**
`
element106(): Block
`


Returns [*Block*](Block.md)


### **element107**
`
element107(): Block
`


Returns [*Block*](Block.md)


### **element108**
`
element108(): Block
`


Returns [*Block*](Block.md)


### **element109**
`
element109(): Block
`


Returns [*Block*](Block.md)


### **element11**
`
element11(): Block
`


Returns [*Block*](Block.md)


### **element110**
`
element110(): Block
`


Returns [*Block*](Block.md)


### **element111**
`
element111(): Block
`


Returns [*Block*](Block.md)


### **element112**
`
element112(): Block
`


Returns [*Block*](Block.md)


### **element113**
`
element113(): Block
`


Returns [*Block*](Block.md)


### **element114**
`
element114(): Block
`


Returns [*Block*](Block.md)


### **element115**
`
element115(): Block
`


Returns [*Block*](Block.md)


### **element116**
`
element116(): Block
`


Returns [*Block*](Block.md)


### **element117**
`
element117(): Block
`


Returns [*Block*](Block.md)


### **element118**
`
element118(): Block
`


Returns [*Block*](Block.md)


### **element12**
`
element12(): Block
`


Returns [*Block*](Block.md)


### **element13**
`
element13(): Block
`


Returns [*Block*](Block.md)


### **element14**
`
element14(): Block
`


Returns [*Block*](Block.md)


### **element15**
`
element15(): Block
`


Returns [*Block*](Block.md)


### **element16**
`
element16(): Block
`


Returns [*Block*](Block.md)


### **element17**
`
element17(): Block
`


Returns [*Block*](Block.md)


### **element18**
`
element18(): Block
`


Returns [*Block*](Block.md)


### **element19**
`
element19(): Block
`


Returns [*Block*](Block.md)


### **element2**
`
element2(): Block
`


Returns [*Block*](Block.md)


### **element20**
`
element20(): Block
`


Returns [*Block*](Block.md)


### **element21**
`
element21(): Block
`


Returns [*Block*](Block.md)


### **element22**
`
element22(): Block
`


Returns [*Block*](Block.md)


### **element23**
`
element23(): Block
`


Returns [*Block*](Block.md)


### **element24**
`
element24(): Block
`


Returns [*Block*](Block.md)


### **element25**
`
element25(): Block
`


Returns [*Block*](Block.md)


### **element26**
`
element26(): Block
`


Returns [*Block*](Block.md)


### **element27**
`
element27(): Block
`


Returns [*Block*](Block.md)


### **element28**
`
element28(): Block
`


Returns [*Block*](Block.md)


### **element29**
`
element29(): Block
`


Returns [*Block*](Block.md)


### **element3**
`
element3(): Block
`


Returns [*Block*](Block.md)


### **element30**
`
element30(): Block
`


Returns [*Block*](Block.md)


### **element31**
`
element31(): Block
`


Returns [*Block*](Block.md)


### **element32**
`
element32(): Block
`


Returns [*Block*](Block.md)


### **element33**
`
element33(): Block
`


Returns [*Block*](Block.md)


### **element34**
`
element34(): Block
`


Returns [*Block*](Block.md)


### **element35**
`
element35(): Block
`


Returns [*Block*](Block.md)


### **element36**
`
element36(): Block
`


Returns [*Block*](Block.md)


### **element37**
`
element37(): Block
`


Returns [*Block*](Block.md)


### **element38**
`
element38(): Block
`


Returns [*Block*](Block.md)


### **element39**
`
element39(): Block
`


Returns [*Block*](Block.md)


### **element4**
`
element4(): Block
`


Returns [*Block*](Block.md)


### **element40**
`
element40(): Block
`


Returns [*Block*](Block.md)


### **element41**
`
element41(): Block
`


Returns [*Block*](Block.md)


### **element42**
`
element42(): Block
`


Returns [*Block*](Block.md)


### **element43**
`
element43(): Block
`


Returns [*Block*](Block.md)


### **element44**
`
element44(): Block
`


Returns [*Block*](Block.md)


### **element45**
`
element45(): Block
`


Returns [*Block*](Block.md)


### **element46**
`
element46(): Block
`


Returns [*Block*](Block.md)


### **element47**
`
element47(): Block
`


Returns [*Block*](Block.md)


### **element48**
`
element48(): Block
`


Returns [*Block*](Block.md)


### **element49**
`
element49(): Block
`


Returns [*Block*](Block.md)


### **element5**
`
element5(): Block
`


Returns [*Block*](Block.md)


### **element50**
`
element50(): Block
`


Returns [*Block*](Block.md)


### **element51**
`
element51(): Block
`


Returns [*Block*](Block.md)


### **element52**
`
element52(): Block
`


Returns [*Block*](Block.md)


### **element53**
`
element53(): Block
`


Returns [*Block*](Block.md)


### **element54**
`
element54(): Block
`


Returns [*Block*](Block.md)


### **element55**
`
element55(): Block
`


Returns [*Block*](Block.md)


### **element56**
`
element56(): Block
`


Returns [*Block*](Block.md)


### **element57**
`
element57(): Block
`


Returns [*Block*](Block.md)


### **element58**
`
element58(): Block
`


Returns [*Block*](Block.md)


### **element59**
`
element59(): Block
`


Returns [*Block*](Block.md)


### **element6**
`
element6(): Block
`


Returns [*Block*](Block.md)


### **element60**
`
element60(): Block
`


Returns [*Block*](Block.md)


### **element61**
`
element61(): Block
`


Returns [*Block*](Block.md)


### **element62**
`
element62(): Block
`


Returns [*Block*](Block.md)


### **element63**
`
element63(): Block
`


Returns [*Block*](Block.md)


### **element64**
`
element64(): Block
`


Returns [*Block*](Block.md)


### **element65**
`
element65(): Block
`


Returns [*Block*](Block.md)


### **element66**
`
element66(): Block
`


Returns [*Block*](Block.md)


### **element67**
`
element67(): Block
`


Returns [*Block*](Block.md)


### **element68**
`
element68(): Block
`


Returns [*Block*](Block.md)


### **element69**
`
element69(): Block
`


Returns [*Block*](Block.md)


### **element7**
`
element7(): Block
`


Returns [*Block*](Block.md)


### **element70**
`
element70(): Block
`


Returns [*Block*](Block.md)


### **element71**
`
element71(): Block
`


Returns [*Block*](Block.md)


### **element72**
`
element72(): Block
`


Returns [*Block*](Block.md)


### **element73**
`
element73(): Block
`


Returns [*Block*](Block.md)


### **element74**
`
element74(): Block
`


Returns [*Block*](Block.md)


### **element75**
`
element75(): Block
`


Returns [*Block*](Block.md)


### **element76**
`
element76(): Block
`


Returns [*Block*](Block.md)


### **element77**
`
element77(): Block
`


Returns [*Block*](Block.md)


### **element78**
`
element78(): Block
`


Returns [*Block*](Block.md)


### **element79**
`
element79(): Block
`


Returns [*Block*](Block.md)


### **element8**
`
element8(): Block
`


Returns [*Block*](Block.md)


### **element80**
`
element80(): Block
`


Returns [*Block*](Block.md)


### **element81**
`
element81(): Block
`


Returns [*Block*](Block.md)


### **element82**
`
element82(): Block
`


Returns [*Block*](Block.md)


### **element83**
`
element83(): Block
`


Returns [*Block*](Block.md)


### **element84**
`
element84(): Block
`


Returns [*Block*](Block.md)


### **element85**
`
element85(): Block
`


Returns [*Block*](Block.md)


### **element86**
`
element86(): Block
`


Returns [*Block*](Block.md)


### **element87**
`
element87(): Block
`


Returns [*Block*](Block.md)


### **element88**
`
element88(): Block
`


Returns [*Block*](Block.md)


### **element89**
`
element89(): Block
`


Returns [*Block*](Block.md)


### **element9**
`
element9(): Block
`


Returns [*Block*](Block.md)


### **element90**
`
element90(): Block
`


Returns [*Block*](Block.md)


### **element91**
`
element91(): Block
`


Returns [*Block*](Block.md)


### **element92**
`
element92(): Block
`


Returns [*Block*](Block.md)


### **element93**
`
element93(): Block
`


Returns [*Block*](Block.md)


### **element94**
`
element94(): Block
`


Returns [*Block*](Block.md)


### **element95**
`
element95(): Block
`


Returns [*Block*](Block.md)


### **element96**
`
element96(): Block
`


Returns [*Block*](Block.md)


### **element97**
`
element97(): Block
`


Returns [*Block*](Block.md)


### **element98**
`
element98(): Block
`


Returns [*Block*](Block.md)


### **element99**
`
element99(): Block
`


Returns [*Block*](Block.md)


### **emeraldBlock**
`
emeraldBlock(): Block
`


Returns [*Block*](Block.md)


### **emeraldOre**
`
emeraldOre(): Block
`


Returns [*Block*](Block.md)


### **enchantingTable**
`
enchantingTable(): Block
`


Returns [*Block*](Block.md)


### **endBrickStairs**
`
endBrickStairs(): Block
`


Returns [*Block*](Block.md)


### **endBricks**
`
endBricks(): Block
`


Returns [*Block*](Block.md)


### **endGateway**
`
endGateway(): Block
`


Returns [*Block*](Block.md)


### **endPortal**
`
endPortal(): Block
`


Returns [*Block*](Block.md)


### **endPortalFrame**
`
endPortalFrame(): Block
`


Returns [*Block*](Block.md)


### **endRod**
`
endRod(): Block
`


Returns [*Block*](Block.md)


### **endStone**
`
endStone(): Block
`


Returns [*Block*](Block.md)


### **enderChest**
`
enderChest(): Block
`


Returns [*Block*](Block.md)


### **exposedCopper**
`
exposedCopper(): Block
`


Returns [*Block*](Block.md)


### **exposedCutCopper**
`
exposedCutCopper(): Block
`


Returns [*Block*](Block.md)


### **exposedCutCopperSlab**
`
exposedCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **exposedCutCopperStairs**
`
exposedCutCopperStairs(): Block
`


Returns [*Block*](Block.md)


### **exposedDoubleCutCopperSlab**
`
exposedDoubleCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **farmland**
`
farmland(): Block
`


Returns [*Block*](Block.md)


### **fence**
`
fence(): Block
`


Returns [*Block*](Block.md)


### **fenceGate**
`
fenceGate(): Block
`


Returns [*Block*](Block.md)


### **fire**
`
fire(): Block
`


Returns [*Block*](Block.md)


### **fletchingTable**
`
fletchingTable(): Block
`


Returns [*Block*](Block.md)


### **flowerPot**
`
flowerPot(): Block
`


Returns [*Block*](Block.md)


### **floweringAzalea**
`
floweringAzalea(): Block
`


Returns [*Block*](Block.md)


### **flowingLava**
`
flowingLava(): Block
`


Returns [*Block*](Block.md)


### **flowingWater**
`
flowingWater(): Block
`


Returns [*Block*](Block.md)


### **frame**
`
frame(): Block
`


Returns [*Block*](Block.md)


### **frostedIce**
`
frostedIce(): Block
`


Returns [*Block*](Block.md)


### **furnace**
`
furnace(): Block
`


Returns [*Block*](Block.md)


### **gildedBlackstone**
`
gildedBlackstone(): Block
`


Returns [*Block*](Block.md)


### **glass**
`
glass(): Block
`


Returns [*Block*](Block.md)


### **glassPane**
`
glassPane(): Block
`


Returns [*Block*](Block.md)


### **glowFrame**
`
glowFrame(): Block
`


Returns [*Block*](Block.md)


### **glowLichen**
`
glowLichen(): Block
`


Returns [*Block*](Block.md)


### **glowingobsidian**
`
glowingobsidian(): Block
`


Returns [*Block*](Block.md)


### **glowstone**
`
glowstone(): Block
`


Returns [*Block*](Block.md)


### **goldBlock**
`
goldBlock(): Block
`


Returns [*Block*](Block.md)


### **goldOre**
`
goldOre(): Block
`


Returns [*Block*](Block.md)


### **goldenRail**
`
goldenRail(): Block
`


Returns [*Block*](Block.md)


### **graniteStairs**
`
graniteStairs(): Block
`


Returns [*Block*](Block.md)


### **grass**
`
grass(): Block
`


Returns [*Block*](Block.md)


### **grassPath**
`
grassPath(): Block
`


Returns [*Block*](Block.md)


### **gravel**
`
gravel(): Block
`


Returns [*Block*](Block.md)


### **grayGlazedTerracotta**
`
grayGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **greenGlazedTerracotta**
`
greenGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **grindstone**
`
grindstone(): Block
`


Returns [*Block*](Block.md)


### **hangingRoots**
`
hangingRoots(): Block
`


Returns [*Block*](Block.md)


### **hardGlass**
`
hardGlass(): Block
`


Returns [*Block*](Block.md)


### **hardGlassPane**
`
hardGlassPane(): Block
`


Returns [*Block*](Block.md)


### **hardStainedGlass**
`
hardStainedGlass(): Block
`


Returns [*Block*](Block.md)


### **hardStainedGlassPane**
`
hardStainedGlassPane(): Block
`


Returns [*Block*](Block.md)


### **hardenedClay**
`
hardenedClay(): Block
`


Returns [*Block*](Block.md)


### **hayBlock**
`
hayBlock(): Block
`


Returns [*Block*](Block.md)


### **heavyWeightedPressurePlate**
`
heavyWeightedPressurePlate(): Block
`


Returns [*Block*](Block.md)


### **honeyBlock**
`
honeyBlock(): Block
`


Returns [*Block*](Block.md)


### **honeycombBlock**
`
honeycombBlock(): Block
`


Returns [*Block*](Block.md)


### **hopper**
`
hopper(): Block
`


Returns [*Block*](Block.md)


### **ice**
`
ice(): Block
`


Returns [*Block*](Block.md)


### **infestedDeepslate**
`
infestedDeepslate(): Block
`


Returns [*Block*](Block.md)


### **infoUpdate**
`
infoUpdate(): Block
`


Returns [*Block*](Block.md)


### **infoUpdate2**
`
infoUpdate2(): Block
`


Returns [*Block*](Block.md)


### **invisiblebedrock**
`
invisiblebedrock(): Block
`


Returns [*Block*](Block.md)


### **ironBars**
`
ironBars(): Block
`


Returns [*Block*](Block.md)


### **ironBlock**
`
ironBlock(): Block
`


Returns [*Block*](Block.md)


### **ironDoor**
`
ironDoor(): Block
`


Returns [*Block*](Block.md)


### **ironOre**
`
ironOre(): Block
`


Returns [*Block*](Block.md)


### **ironTrapdoor**
`
ironTrapdoor(): Block
`


Returns [*Block*](Block.md)


### **jigsaw**
`
jigsaw(): Block
`


Returns [*Block*](Block.md)


### **jukebox**
`
jukebox(): Block
`


Returns [*Block*](Block.md)


### **jungleButton**
`
jungleButton(): Block
`


Returns [*Block*](Block.md)


### **jungleDoor**
`
jungleDoor(): Block
`


Returns [*Block*](Block.md)


### **jungleFenceGate**
`
jungleFenceGate(): Block
`


Returns [*Block*](Block.md)


### **junglePressurePlate**
`
junglePressurePlate(): Block
`


Returns [*Block*](Block.md)


### **jungleStairs**
`
jungleStairs(): Block
`


Returns [*Block*](Block.md)


### **jungleStandingSign**
`
jungleStandingSign(): Block
`


Returns [*Block*](Block.md)


### **jungleTrapdoor**
`
jungleTrapdoor(): Block
`


Returns [*Block*](Block.md)


### **jungleWallSign**
`
jungleWallSign(): Block
`


Returns [*Block*](Block.md)


### **kelp**
`
kelp(): Block
`


Returns [*Block*](Block.md)


### **ladder**
`
ladder(): Block
`


Returns [*Block*](Block.md)


### **lantern**
`
lantern(): Block
`


Returns [*Block*](Block.md)


### **lapisBlock**
`
lapisBlock(): Block
`


Returns [*Block*](Block.md)


### **lapisOre**
`
lapisOre(): Block
`


Returns [*Block*](Block.md)


### **largeAmethystBud**
`
largeAmethystBud(): Block
`


Returns [*Block*](Block.md)


### **lava**
`
lava(): Block
`


Returns [*Block*](Block.md)


### **lavaCauldron**
`
lavaCauldron(): Block
`


Returns [*Block*](Block.md)


### **leaves**
`
leaves(): Block
`


Returns [*Block*](Block.md)


### **leaves2**
`
leaves2(): Block
`


Returns [*Block*](Block.md)


### **lectern**
`
lectern(): Block
`


Returns [*Block*](Block.md)


### **lever**
`
lever(): Block
`


Returns [*Block*](Block.md)


### **lightBlock**
`
lightBlock(): Block
`


Returns [*Block*](Block.md)


### **lightBlueGlazedTerracotta**
`
lightBlueGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **lightWeightedPressurePlate**
`
lightWeightedPressurePlate(): Block
`


Returns [*Block*](Block.md)


### **lightningRod**
`
lightningRod(): Block
`


Returns [*Block*](Block.md)


### **limeGlazedTerracotta**
`
limeGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **litBlastFurnace**
`
litBlastFurnace(): Block
`


Returns [*Block*](Block.md)


### **litDeepslateRedstoneOre**
`
litDeepslateRedstoneOre(): Block
`


Returns [*Block*](Block.md)


### **litFurnace**
`
litFurnace(): Block
`


Returns [*Block*](Block.md)


### **litPumpkin**
`
litPumpkin(): Block
`


Returns [*Block*](Block.md)


### **litRedstoneLamp**
`
litRedstoneLamp(): Block
`


Returns [*Block*](Block.md)


### **litRedstoneOre**
`
litRedstoneOre(): Block
`


Returns [*Block*](Block.md)


### **litSmoker**
`
litSmoker(): Block
`


Returns [*Block*](Block.md)


### **lodestone**
`
lodestone(): Block
`


Returns [*Block*](Block.md)


### **log**
`
log(): Block
`


Returns [*Block*](Block.md)


### **log2**
`
log2(): Block
`


Returns [*Block*](Block.md)


### **loom**
`
loom(): Block
`


Returns [*Block*](Block.md)


### **magentaGlazedTerracotta**
`
magentaGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **magma**
`
magma(): Block
`


Returns [*Block*](Block.md)


### **mediumAmethystBud**
`
mediumAmethystBud(): Block
`


Returns [*Block*](Block.md)


### **melonBlock**
`
melonBlock(): Block
`


Returns [*Block*](Block.md)


### **melonStem**
`
melonStem(): Block
`


Returns [*Block*](Block.md)


### **mobSpawner**
`
mobSpawner(): Block
`


Returns [*Block*](Block.md)


### **monsterEgg**
`
monsterEgg(): Block
`


Returns [*Block*](Block.md)


### **mossBlock**
`
mossBlock(): Block
`


Returns [*Block*](Block.md)


### **mossCarpet**
`
mossCarpet(): Block
`


Returns [*Block*](Block.md)


### **mossyCobblestone**
`
mossyCobblestone(): Block
`


Returns [*Block*](Block.md)


### **mossyCobblestoneStairs**
`
mossyCobblestoneStairs(): Block
`


Returns [*Block*](Block.md)


### **mossyStoneBrickStairs**
`
mossyStoneBrickStairs(): Block
`


Returns [*Block*](Block.md)


### **movingblock**
`
movingblock(): Block
`


Returns [*Block*](Block.md)


### **mycelium**
`
mycelium(): Block
`


Returns [*Block*](Block.md)


### **netherBrick**
`
netherBrick(): Block
`


Returns [*Block*](Block.md)


### **netherBrickFence**
`
netherBrickFence(): Block
`


Returns [*Block*](Block.md)


### **netherBrickStairs**
`
netherBrickStairs(): Block
`


Returns [*Block*](Block.md)


### **netherGoldOre**
`
netherGoldOre(): Block
`


Returns [*Block*](Block.md)


### **netherSprouts**
`
netherSprouts(): Block
`


Returns [*Block*](Block.md)


### **netherWart**
`
netherWart(): Block
`


Returns [*Block*](Block.md)


### **netherWartBlock**
`
netherWartBlock(): Block
`


Returns [*Block*](Block.md)


### **netheriteBlock**
`
netheriteBlock(): Block
`


Returns [*Block*](Block.md)


### **netherrack**
`
netherrack(): Block
`


Returns [*Block*](Block.md)


### **netherreactor**
`
netherreactor(): Block
`


Returns [*Block*](Block.md)


### **normalStoneStairs**
`
normalStoneStairs(): Block
`


Returns [*Block*](Block.md)


### **noteblock**
`
noteblock(): Block
`


Returns [*Block*](Block.md)


### **oakStairs**
`
oakStairs(): Block
`


Returns [*Block*](Block.md)


### **observer**
`
observer(): Block
`


Returns [*Block*](Block.md)


### **obsidian**
`
obsidian(): Block
`


Returns [*Block*](Block.md)


### **orangeGlazedTerracotta**
`
orangeGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **oxidizedCopper**
`
oxidizedCopper(): Block
`


Returns [*Block*](Block.md)


### **oxidizedCutCopper**
`
oxidizedCutCopper(): Block
`


Returns [*Block*](Block.md)


### **oxidizedCutCopperSlab**
`
oxidizedCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **oxidizedCutCopperStairs**
`
oxidizedCutCopperStairs(): Block
`


Returns [*Block*](Block.md)


### **oxidizedDoubleCutCopperSlab**
`
oxidizedDoubleCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **packedIce**
`
packedIce(): Block
`


Returns [*Block*](Block.md)


### **pinkGlazedTerracotta**
`
pinkGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **piston**
`
piston(): Block
`


Returns [*Block*](Block.md)


### **pistonarmcollision**
`
pistonarmcollision(): Block
`


Returns [*Block*](Block.md)


### **planks**
`
planks(): Block
`


Returns [*Block*](Block.md)


### **podzol**
`
podzol(): Block
`


Returns [*Block*](Block.md)


### **pointedDripstone**
`
pointedDripstone(): Block
`


Returns [*Block*](Block.md)


### **polishedAndesiteStairs**
`
polishedAndesiteStairs(): Block
`


Returns [*Block*](Block.md)


### **polishedBasalt**
`
polishedBasalt(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstone**
`
polishedBlackstone(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneBrickDoubleSlab**
`
polishedBlackstoneBrickDoubleSlab(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneBrickSlab**
`
polishedBlackstoneBrickSlab(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneBrickStairs**
`
polishedBlackstoneBrickStairs(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneBrickWall**
`
polishedBlackstoneBrickWall(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneBricks**
`
polishedBlackstoneBricks(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneButton**
`
polishedBlackstoneButton(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneDoubleSlab**
`
polishedBlackstoneDoubleSlab(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstonePressurePlate**
`
polishedBlackstonePressurePlate(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneSlab**
`
polishedBlackstoneSlab(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneStairs**
`
polishedBlackstoneStairs(): Block
`


Returns [*Block*](Block.md)


### **polishedBlackstoneWall**
`
polishedBlackstoneWall(): Block
`


Returns [*Block*](Block.md)


### **polishedDeepslate**
`
polishedDeepslate(): Block
`


Returns [*Block*](Block.md)


### **polishedDeepslateDoubleSlab**
`
polishedDeepslateDoubleSlab(): Block
`


Returns [*Block*](Block.md)


### **polishedDeepslateSlab**
`
polishedDeepslateSlab(): Block
`


Returns [*Block*](Block.md)


### **polishedDeepslateStairs**
`
polishedDeepslateStairs(): Block
`


Returns [*Block*](Block.md)


### **polishedDeepslateWall**
`
polishedDeepslateWall(): Block
`


Returns [*Block*](Block.md)


### **polishedDioriteStairs**
`
polishedDioriteStairs(): Block
`


Returns [*Block*](Block.md)


### **polishedGraniteStairs**
`
polishedGraniteStairs(): Block
`


Returns [*Block*](Block.md)


### **portal**
`
portal(): Block
`


Returns [*Block*](Block.md)


### **potatoes**
`
potatoes(): Block
`


Returns [*Block*](Block.md)


### **powderSnow**
`
powderSnow(): Block
`


Returns [*Block*](Block.md)


### **poweredComparator**
`
poweredComparator(): Block
`


Returns [*Block*](Block.md)


### **poweredRepeater**
`
poweredRepeater(): Block
`


Returns [*Block*](Block.md)


### **prismarine**
`
prismarine(): Block
`


Returns [*Block*](Block.md)


### **prismarineBricksStairs**
`
prismarineBricksStairs(): Block
`


Returns [*Block*](Block.md)


### **prismarineStairs**
`
prismarineStairs(): Block
`


Returns [*Block*](Block.md)


### **pumpkin**
`
pumpkin(): Block
`


Returns [*Block*](Block.md)


### **pumpkinStem**
`
pumpkinStem(): Block
`


Returns [*Block*](Block.md)


### **purpleGlazedTerracotta**
`
purpleGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **purpurBlock**
`
purpurBlock(): Block
`


Returns [*Block*](Block.md)


### **purpurStairs**
`
purpurStairs(): Block
`


Returns [*Block*](Block.md)


### **quartzBlock**
`
quartzBlock(): Block
`


Returns [*Block*](Block.md)


### **quartzBricks**
`
quartzBricks(): Block
`


Returns [*Block*](Block.md)


### **quartzOre**
`
quartzOre(): Block
`


Returns [*Block*](Block.md)


### **quartzStairs**
`
quartzStairs(): Block
`


Returns [*Block*](Block.md)


### **rail**
`
rail(): Block
`


Returns [*Block*](Block.md)


### **rawCopperBlock**
`
rawCopperBlock(): Block
`


Returns [*Block*](Block.md)


### **rawGoldBlock**
`
rawGoldBlock(): Block
`


Returns [*Block*](Block.md)


### **rawIronBlock**
`
rawIronBlock(): Block
`


Returns [*Block*](Block.md)


### **redFlower**
`
redFlower(): Block
`


Returns [*Block*](Block.md)


### **redGlazedTerracotta**
`
redGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **redMushroom**
`
redMushroom(): Block
`


Returns [*Block*](Block.md)


### **redMushroomBlock**
`
redMushroomBlock(): Block
`


Returns [*Block*](Block.md)


### **redNetherBrick**
`
redNetherBrick(): Block
`


Returns [*Block*](Block.md)


### **redNetherBrickStairs**
`
redNetherBrickStairs(): Block
`


Returns [*Block*](Block.md)


### **redSandstone**
`
redSandstone(): Block
`


Returns [*Block*](Block.md)


### **redSandstoneStairs**
`
redSandstoneStairs(): Block
`


Returns [*Block*](Block.md)


### **redstoneBlock**
`
redstoneBlock(): Block
`


Returns [*Block*](Block.md)


### **redstoneLamp**
`
redstoneLamp(): Block
`


Returns [*Block*](Block.md)


### **redstoneOre**
`
redstoneOre(): Block
`


Returns [*Block*](Block.md)


### **redstoneTorch**
`
redstoneTorch(): Block
`


Returns [*Block*](Block.md)


### **redstoneWire**
`
redstoneWire(): Block
`


Returns [*Block*](Block.md)


### **reeds**
`
reeds(): Block
`


Returns [*Block*](Block.md)


### **repeatingCommandBlock**
`
repeatingCommandBlock(): Block
`


Returns [*Block*](Block.md)


### **reserved6**
`
reserved6(): Block
`


Returns [*Block*](Block.md)


### **respawnAnchor**
`
respawnAnchor(): Block
`


Returns [*Block*](Block.md)


### **sand**
`
sand(): Block
`


Returns [*Block*](Block.md)


### **sandstone**
`
sandstone(): Block
`


Returns [*Block*](Block.md)


### **sandstoneStairs**
`
sandstoneStairs(): Block
`


Returns [*Block*](Block.md)


### **sapling**
`
sapling(): Block
`


Returns [*Block*](Block.md)


### **scaffolding**
`
scaffolding(): Block
`


Returns [*Block*](Block.md)


### **sculkSensor**
`
sculkSensor(): Block
`


Returns [*Block*](Block.md)


### **seaPickle**
`
seaPickle(): Block
`


Returns [*Block*](Block.md)


### **seagrass**
`
seagrass(): Block
`


Returns [*Block*](Block.md)


### **sealantern**
`
sealantern(): Block
`


Returns [*Block*](Block.md)


### **shroomlight**
`
shroomlight(): Block
`


Returns [*Block*](Block.md)


### **shulkerBox**
`
shulkerBox(): Block
`


Returns [*Block*](Block.md)


### **silverGlazedTerracotta**
`
silverGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **skull**
`
skull(): Block
`


Returns [*Block*](Block.md)


### **slime**
`
slime(): Block
`


Returns [*Block*](Block.md)


### **smallAmethystBud**
`
smallAmethystBud(): Block
`


Returns [*Block*](Block.md)


### **smallDripleafBlock**
`
smallDripleafBlock(): Block
`


Returns [*Block*](Block.md)


### **smithingTable**
`
smithingTable(): Block
`


Returns [*Block*](Block.md)


### **smoker**
`
smoker(): Block
`


Returns [*Block*](Block.md)


### **smoothBasalt**
`
smoothBasalt(): Block
`


Returns [*Block*](Block.md)


### **smoothQuartzStairs**
`
smoothQuartzStairs(): Block
`


Returns [*Block*](Block.md)


### **smoothRedSandstoneStairs**
`
smoothRedSandstoneStairs(): Block
`


Returns [*Block*](Block.md)


### **smoothSandstoneStairs**
`
smoothSandstoneStairs(): Block
`


Returns [*Block*](Block.md)


### **smoothStone**
`
smoothStone(): Block
`


Returns [*Block*](Block.md)


### **snow**
`
snow(): Block
`


Returns [*Block*](Block.md)


### **snowLayer**
`
snowLayer(): Block
`


Returns [*Block*](Block.md)


### **soulCampfire**
`
soulCampfire(): Block
`


Returns [*Block*](Block.md)


### **soulFire**
`
soulFire(): Block
`


Returns [*Block*](Block.md)


### **soulLantern**
`
soulLantern(): Block
`


Returns [*Block*](Block.md)


### **soulSand**
`
soulSand(): Block
`


Returns [*Block*](Block.md)


### **soulSoil**
`
soulSoil(): Block
`


Returns [*Block*](Block.md)


### **soulTorch**
`
soulTorch(): Block
`


Returns [*Block*](Block.md)


### **sponge**
`
sponge(): Block
`


Returns [*Block*](Block.md)


### **sporeBlossom**
`
sporeBlossom(): Block
`


Returns [*Block*](Block.md)


### **spruceButton**
`
spruceButton(): Block
`


Returns [*Block*](Block.md)


### **spruceDoor**
`
spruceDoor(): Block
`


Returns [*Block*](Block.md)


### **spruceFenceGate**
`
spruceFenceGate(): Block
`


Returns [*Block*](Block.md)


### **sprucePressurePlate**
`
sprucePressurePlate(): Block
`


Returns [*Block*](Block.md)


### **spruceStairs**
`
spruceStairs(): Block
`


Returns [*Block*](Block.md)


### **spruceStandingSign**
`
spruceStandingSign(): Block
`


Returns [*Block*](Block.md)


### **spruceTrapdoor**
`
spruceTrapdoor(): Block
`


Returns [*Block*](Block.md)


### **spruceWallSign**
`
spruceWallSign(): Block
`


Returns [*Block*](Block.md)


### **stainedGlass**
`
stainedGlass(): Block
`


Returns [*Block*](Block.md)


### **stainedGlassPane**
`
stainedGlassPane(): Block
`


Returns [*Block*](Block.md)


### **stainedHardenedClay**
`
stainedHardenedClay(): Block
`


Returns [*Block*](Block.md)


### **standingBanner**
`
standingBanner(): Block
`


Returns [*Block*](Block.md)


### **standingSign**
`
standingSign(): Block
`


Returns [*Block*](Block.md)


### **stickyPiston**
`
stickyPiston(): Block
`


Returns [*Block*](Block.md)


### **stickypistonarmcollision**
`
stickypistonarmcollision(): Block
`


Returns [*Block*](Block.md)


### **stone**
`
stone(): Block
`


Returns [*Block*](Block.md)


### **stoneBrickStairs**
`
stoneBrickStairs(): Block
`


Returns [*Block*](Block.md)


### **stoneButton**
`
stoneButton(): Block
`


Returns [*Block*](Block.md)


### **stonePressurePlate**
`
stonePressurePlate(): Block
`


Returns [*Block*](Block.md)


### **stoneSlab**
`
stoneSlab(): Block
`


Returns [*Block*](Block.md)


### **stoneSlab2**
`
stoneSlab2(): Block
`


Returns [*Block*](Block.md)


### **stoneSlab3**
`
stoneSlab3(): Block
`


Returns [*Block*](Block.md)


### **stoneSlab4**
`
stoneSlab4(): Block
`


Returns [*Block*](Block.md)


### **stoneStairs**
`
stoneStairs(): Block
`


Returns [*Block*](Block.md)


### **stonebrick**
`
stonebrick(): Block
`


Returns [*Block*](Block.md)


### **stonecutter**
`
stonecutter(): Block
`


Returns [*Block*](Block.md)


### **stonecutterBlock**
`
stonecutterBlock(): Block
`


Returns [*Block*](Block.md)


### **strippedAcaciaLog**
`
strippedAcaciaLog(): Block
`


Returns [*Block*](Block.md)


### **strippedBirchLog**
`
strippedBirchLog(): Block
`


Returns [*Block*](Block.md)


### **strippedCrimsonHyphae**
`
strippedCrimsonHyphae(): Block
`


Returns [*Block*](Block.md)


### **strippedCrimsonStem**
`
strippedCrimsonStem(): Block
`


Returns [*Block*](Block.md)


### **strippedDarkOakLog**
`
strippedDarkOakLog(): Block
`


Returns [*Block*](Block.md)


### **strippedJungleLog**
`
strippedJungleLog(): Block
`


Returns [*Block*](Block.md)


### **strippedOakLog**
`
strippedOakLog(): Block
`


Returns [*Block*](Block.md)


### **strippedSpruceLog**
`
strippedSpruceLog(): Block
`


Returns [*Block*](Block.md)


### **strippedWarpedHyphae**
`
strippedWarpedHyphae(): Block
`


Returns [*Block*](Block.md)


### **strippedWarpedStem**
`
strippedWarpedStem(): Block
`


Returns [*Block*](Block.md)


### **structureBlock**
`
structureBlock(): Block
`


Returns [*Block*](Block.md)


### **structureVoid**
`
structureVoid(): Block
`


Returns [*Block*](Block.md)


### **sweetBerryBush**
`
sweetBerryBush(): Block
`


Returns [*Block*](Block.md)


### **tallgrass**
`
tallgrass(): Block
`


Returns [*Block*](Block.md)


### **target**
`
target(): Block
`


Returns [*Block*](Block.md)


### **tintedGlass**
`
tintedGlass(): Block
`


Returns [*Block*](Block.md)


### **tnt**
`
tnt(): Block
`


Returns [*Block*](Block.md)


### **torch**
`
torch(): Block
`


Returns [*Block*](Block.md)


### **trapdoor**
`
trapdoor(): Block
`


Returns [*Block*](Block.md)


### **trappedChest**
`
trappedChest(): Block
`


Returns [*Block*](Block.md)


### **tripwire**
`
tripwire(): Block
`


Returns [*Block*](Block.md)


### **tripwireHook**
`
tripwireHook(): Block
`


Returns [*Block*](Block.md)


### **tuff**
`
tuff(): Block
`


Returns [*Block*](Block.md)


### **turtleEgg**
`
turtleEgg(): Block
`


Returns [*Block*](Block.md)


### **twistingVines**
`
twistingVines(): Block
`


Returns [*Block*](Block.md)


### **underwaterTorch**
`
underwaterTorch(): Block
`


Returns [*Block*](Block.md)


### **undyedShulkerBox**
`
undyedShulkerBox(): Block
`


Returns [*Block*](Block.md)


### **unknown**
`
unknown(): Block
`


Returns [*Block*](Block.md)


### **unlitRedstoneTorch**
`
unlitRedstoneTorch(): Block
`


Returns [*Block*](Block.md)


### **unpoweredComparator**
`
unpoweredComparator(): Block
`


Returns [*Block*](Block.md)


### **unpoweredRepeater**
`
unpoweredRepeater(): Block
`


Returns [*Block*](Block.md)


### **vine**
`
vine(): Block
`


Returns [*Block*](Block.md)


### **wallBanner**
`
wallBanner(): Block
`


Returns [*Block*](Block.md)


### **wallSign**
`
wallSign(): Block
`


Returns [*Block*](Block.md)


### **warpedButton**
`
warpedButton(): Block
`


Returns [*Block*](Block.md)


### **warpedDoor**
`
warpedDoor(): Block
`


Returns [*Block*](Block.md)


### **warpedDoubleSlab**
`
warpedDoubleSlab(): Block
`


Returns [*Block*](Block.md)


### **warpedFence**
`
warpedFence(): Block
`


Returns [*Block*](Block.md)


### **warpedFenceGate**
`
warpedFenceGate(): Block
`


Returns [*Block*](Block.md)


### **warpedFungus**
`
warpedFungus(): Block
`


Returns [*Block*](Block.md)


### **warpedHyphae**
`
warpedHyphae(): Block
`


Returns [*Block*](Block.md)


### **warpedNylium**
`
warpedNylium(): Block
`


Returns [*Block*](Block.md)


### **warpedPlanks**
`
warpedPlanks(): Block
`


Returns [*Block*](Block.md)


### **warpedPressurePlate**
`
warpedPressurePlate(): Block
`


Returns [*Block*](Block.md)


### **warpedRoots**
`
warpedRoots(): Block
`


Returns [*Block*](Block.md)


### **warpedSlab**
`
warpedSlab(): Block
`


Returns [*Block*](Block.md)


### **warpedStairs**
`
warpedStairs(): Block
`


Returns [*Block*](Block.md)


### **warpedStandingSign**
`
warpedStandingSign(): Block
`


Returns [*Block*](Block.md)


### **warpedStem**
`
warpedStem(): Block
`


Returns [*Block*](Block.md)


### **warpedTrapdoor**
`
warpedTrapdoor(): Block
`


Returns [*Block*](Block.md)


### **warpedWallSign**
`
warpedWallSign(): Block
`


Returns [*Block*](Block.md)


### **warpedWartBlock**
`
warpedWartBlock(): Block
`


Returns [*Block*](Block.md)


### **water**
`
water(): Block
`


Returns [*Block*](Block.md)


### **waterlily**
`
waterlily(): Block
`


Returns [*Block*](Block.md)


### **waxedCopper**
`
waxedCopper(): Block
`


Returns [*Block*](Block.md)


### **waxedCutCopper**
`
waxedCutCopper(): Block
`


Returns [*Block*](Block.md)


### **waxedCutCopperSlab**
`
waxedCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **waxedCutCopperStairs**
`
waxedCutCopperStairs(): Block
`


Returns [*Block*](Block.md)


### **waxedDoubleCutCopperSlab**
`
waxedDoubleCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **waxedExposedCopper**
`
waxedExposedCopper(): Block
`


Returns [*Block*](Block.md)


### **waxedExposedCutCopper**
`
waxedExposedCutCopper(): Block
`


Returns [*Block*](Block.md)


### **waxedExposedCutCopperSlab**
`
waxedExposedCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **waxedExposedCutCopperStairs**
`
waxedExposedCutCopperStairs(): Block
`


Returns [*Block*](Block.md)


### **waxedExposedDoubleCutCopperSlab**
`
waxedExposedDoubleCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **waxedOxidizedCopper**
`
waxedOxidizedCopper(): Block
`


Returns [*Block*](Block.md)


### **waxedOxidizedCutCopper**
`
waxedOxidizedCutCopper(): Block
`


Returns [*Block*](Block.md)


### **waxedOxidizedCutCopperSlab**
`
waxedOxidizedCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **waxedOxidizedCutCopperStairs**
`
waxedOxidizedCutCopperStairs(): Block
`


Returns [*Block*](Block.md)


### **waxedOxidizedDoubleCutCopperSlab**
`
waxedOxidizedDoubleCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **waxedWeatheredCopper**
`
waxedWeatheredCopper(): Block
`


Returns [*Block*](Block.md)


### **waxedWeatheredCutCopper**
`
waxedWeatheredCutCopper(): Block
`


Returns [*Block*](Block.md)


### **waxedWeatheredCutCopperSlab**
`
waxedWeatheredCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **waxedWeatheredCutCopperStairs**
`
waxedWeatheredCutCopperStairs(): Block
`


Returns [*Block*](Block.md)


### **waxedWeatheredDoubleCutCopperSlab**
`
waxedWeatheredDoubleCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **weatheredCopper**
`
weatheredCopper(): Block
`


Returns [*Block*](Block.md)


### **weatheredCutCopper**
`
weatheredCutCopper(): Block
`


Returns [*Block*](Block.md)


### **weatheredCutCopperSlab**
`
weatheredCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **weatheredCutCopperStairs**
`
weatheredCutCopperStairs(): Block
`


Returns [*Block*](Block.md)


### **weatheredDoubleCutCopperSlab**
`
weatheredDoubleCutCopperSlab(): Block
`


Returns [*Block*](Block.md)


### **web**
`
web(): Block
`


Returns [*Block*](Block.md)


### **weepingVines**
`
weepingVines(): Block
`


Returns [*Block*](Block.md)


### **wheat**
`
wheat(): Block
`


Returns [*Block*](Block.md)


### **whiteGlazedTerracotta**
`
whiteGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


### **witherRose**
`
witherRose(): Block
`


Returns [*Block*](Block.md)


### **wood**
`
wood(): Block
`


Returns [*Block*](Block.md)


### **woodenButton**
`
woodenButton(): Block
`


Returns [*Block*](Block.md)


### **woodenDoor**
`
woodenDoor(): Block
`


Returns [*Block*](Block.md)


### **woodenPressurePlate**
`
woodenPressurePlate(): Block
`


Returns [*Block*](Block.md)


### **woodenSlab**
`
woodenSlab(): Block
`


Returns [*Block*](Block.md)


### **wool**
`
wool(): Block
`


Returns [*Block*](Block.md)


### **yellowFlower**
`
yellowFlower(): Block
`


Returns [*Block*](Block.md)


### **yellowGlazedTerracotta**
`
yellowGlazedTerracotta(): Block
`


Returns [*Block*](Block.md)


