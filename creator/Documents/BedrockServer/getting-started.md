---
author: chipotle
ms.author: mikeam
title: Getting Started with Bedrock Dedicated Server
description: "How to set up Bedrock Dedicated Server, a Minecraft: Bedrock Edition server for Windows and Linux."
ms.service: minecraft-bedrock-edition
ms.date: 05/30/2025
---

# Getting Started with Bedrock Dedicated Server

With **Bedrock Dedicated Server**, you can host your own Minecraft: Bedrock Edition servers for your friends. Bedrock Dedicated Server runs on Windows and Ubuntu Linux, and it's available for free.

## Recommended systems

* Windows 10 (version 1703) or later
* Windows Server 2016 or later
* Ubuntu Linux 18 or later

> [!NOTE]
> Ubuntu is the only officially supported Linux distribution for Bedrock Dedicated Server.

## Installation

Dedicated Server is distributed as a .zip file that you can download from [the official page](https://www.minecraft.net/download/server/bedrock).

Unzip the package into an empty folder, such as `C:\MinecraftServer` on Windows, or `~/MinecraftServer` on Linux.

> [!TIP]
> If you want to keep multiple copies of Dedicated Server on your machine for testing purposes, consider making subdirectories for different versions, such as `C:\MinecraftServer\1.19.0_1`, `C:\MinecraftServer\1.30.0`, etc.

## Starting the server

### Windows

1. Open a command prompt or PowerShell from the Start Menu.

2. Change directories to the folder you unzipped the package into, e.g., `cd C:\MinecraftServer`.

3. Execute the server by typing `bedrock_server`.

### Ubuntu Linux

1. Open a Terminal window.

2. Change directories to the folder you unzipped the server into, e.g., `cd ~/MinecraftServer`.

3. Execute the server by typing `LD_LIBRARY_PATH=. ./bedrock_server`.

## Configuring the firewall

If your system runs a firewall (such as Windows Defender), you'll need to allow at least one route through the firewall to the server in order to allow players from other machines to connect.

### Windows firewall

Windows Defender will ask you whether to let Bedrock Server to communicate over public networks, private networks, or both. If you plan to have users connect over your local area network, select private networks; if you plan to have users connect over the Internet, select public.

:::image type="content" source="../Media/ScriptingServers/firewall.png" alt-text="Initial firewall permissions when starting Dedicated Server on Windows":::

### Ubuntu Linux firewall

If your firewall is enabled, you will need to allow the ports configured in **server.properties** as `server-port` and `server-portv6` access through the firewall. By default, these are set to use ports 19132 and 19133, respectively. The easiest way to open these ports from a shell is:

```text
sudo ufw allow 19132
sudo ufw allow 19133
sudo ufw reload
```

For more details, consult the `ufw` man page, or read the [Ubuntu firewall documentation](https://documentation.ubuntu.com/server/how-to/security/firewalls/index.html).

## Testing the server

These directions assume testing the Windows-based server from the same machine that it's running on. If you're running on Linux, skip the Enable Loopback section below, and connect from a Windows machine on the same local network. You'll have to specify the proper IP address for the server in that step below!

### Enable loopback

By default, you can't connect your Minecraft game on Windows to Dedicated Server if it's on the same machine. This kind of connection is known as "loopback," and you'll need to enable it. Stop the server if it's running, and then run the following command in Terminal:

```text
CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436
```

If you're running the Preview build of Dedicated Server, you'll need to connect with a Preview client build, too. Use this command in Terminal to enable loopback for Minecraft: Bedrock Edition Preview:

```text
CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-424268864-5579737-879501358-346833251-474568803-887069379-4040235476
```

### Connecting from a client

1. Restart the server by running `bedrock_server.exe`.
2. Run the Minecraft Windows app.
3. Select **Play**.
4. Add your local server (you'll only need to do this once).
   1. Select **Add Server**.
   2. For **Server Name**, enter "My Local Computer" (or any other name you want).
   3. For **Server Address**, enter "127.0.0.1". This is the standard "localhost" address, e.g., the same computer the application is running on. (If you're not running the server on the same computer, you'll need to enter the correct IP address here.)
   4. Leave the port as **19132**, the default for Dedicated Server.
5. Select **Save**.
6. In the server list, select your new entry and **Join**. On the Bedrock Server console, you should see a message indicating a new player has joined.

### Troubleshooting

If you get an "Outdated Client" or "Outdated Server" message when connecting, this is because of a mismatch of protocol versions between the client and the server. Typically, the protocol changes when the minor version of Minecraft changes: 1.21.0 and 1.20.0 are not compatible with one another, as the minor version changed from 20 to 21. However, the protocol isn't guaranteed to stay the same even with patch versions: 1.21.0 and 1.21.30 _also_ have different protocol versions.

To solve this, you'll need to ensure the client and the server are in sync. Upgrade the server to a new version to fix an "Outdated Server" message; upgrade the client to fix an "Outdated Client" message. If you're running a Preview build of Dedicated Server, you'll need to check for upgrades frequently.

## Running the server

When starting the server for the first time, new folders will be created in the folder the server is installed in. The most important folders created at startup are:

* **worlds:** This is the folder where newly-created worlds will be installed. Worlds will be installed in subfolders of **worlds/** named by the value of the `level-name` property in **server.properties**. While multiple worlds can be installed on the server, only one world is active at a time, set by the `level-name` property.
* **behavior_packs:** Behavior packs shared across all worlds on the server should be placed here.
* **resource_packs:** Resource packs shared across all worlds on the server should be placed here.

### Using existing worlds

Worlds created by Minecraft: Bedrock Edition can be copied to Bedrock Dedicated Server.

> [!TIP]
> You should have started Bedrock Dedicated Server at least once before using an existing world to let it create the necessary folders.

Worlds in (non-server) Bedrock Edition are saved as folders under **%appdata%\Minecraft Bedrock\users\<user id>\games\com.mojang\minecraftWorlds**. It's not obvious from the folder names which worlds are which, as they'll have cryptic names like **eplC8tYRD04=**. However, you can find out what world the folder belongs to by going into the folder and looking at the contents of the **levelname.txt** file: it will show the name that you gave the world when you created it.

If your Bedrock Dedicated Server is running on the _same_ computer that your Minecraft world already exists on, you can simply copy the world folder into the **worlds/** folder on Bedrock Dedicated Server.

If it's running on a _different_ machine, you'll need to copy the world to the machine Dedicated Server is running on. For example, you could compress the folder to a ZIP file, and use cloud services like Onedrive to transfer it. You'll need to copy (or uncompress) the world folder into the **worlds/** folder on Bedrock Dedicated Server, as above.

Now, rename your world folder to something more sensible, like **My Great World**. (It's best to avoid special characters in the folder name.)

Lastly, open the **server.properties** file in a text editor and set the `level-name` value to the name you gave the folder. _This has to match exactly, including letter case._

Now, start (or restart) your server, and you should be good to go!

### Shared resource and behavior packs

You might have noticed that there are **behavior_packs** and **resource_packs** folders both within the worlds in the **worlds/** folder _and_ at the top level where Bedrock Dedicated Server is installed. What's the difference?

* Packs installed in a folder for a world are only available when that world is running on the server.
* Packs installed in the top level folders are available on _any_ world being run on the server.

Unless a pack only makes sense in a specific world, you'll probably want to install your resource and behavior packs in the shared folders at the top level.

### Console commands

When the server is running, you can enter commands on the console. Type **help** to get a list of commands. Some of the commands include:

* `op <playername>`: grant operator privileges to a player.
* `deop playername>`: revoke operator privileges from a player.
* `gamerule`: list current game settings.
* `gamerule <rulename> <value>`: change a setting, e.g., `gamerule doDayLightCycle false`.
* `stop`: shut down the server.

## Configuration

Server-specific configuration is controlled through text files that specify properties such as the server's game mode, the world in the **worlds** folder to use, and which players to allow on a private server.

### server-properties

The **server.properties** file controls most of the options for your Bedrock Dedicated Server. This is an INI-style file: a list of keys and values separated by an equals sign, one per line. Comments start with `#`. Here's an example:

```ini
server-name=Dedicated Server
# Used as the server name
# Allowed values: Any string without semicolon symbol.

gamemode=survival
# Sets the game mode for new players.
# Allowed values: "survival", "creative", or "adventure"
```

You can find a complete reference of properties, defaults, and allowed values in [Bedrock Dedicated Server Properties](./server-properties.md).

### allowlist.json

If the `allow-list` property in **server.properties** is set to `true`, the server will only allow selected users to connect, specified by their Xbox Live Gamertags. These users are stored in the **allowlist.json** file.

The easiest way to add a use to the allowlist is to use the in-game command `/allowlist add <GamerTag>`.

> [!NOTE]
> If there is a space in the GamerTag, you'll need to enclose it in quotes: `/allowlist add "Gamer Tag"`.

If you want to remove someone from the list, you can use the `remove` subcommand: `/allowlist remove <GamerTag>`.

You can also edit the **allowlist.json** file directly. If you make modifications outside Minecraft, you'll need to run the command `/allowlist reload` so the server reads the changes.

#### Structure of allowlist.json

* `name`: string; the gamertag of the user.
* `xuid`: string; the XUID of the user. Optional. (If it isn't set, it will be filled in when someone with a matching `name` connects.)
* `ignoresPlayerLimit`: boolean; set to `true` if this user should not count toward the maximum player limit for the server.

> [!NOTE]
> There is a soft limit of either 30 or 1 higher than the value of `max_players` in **server.properties**, whichever is higher, for connected players, even when players use `ignoresPlayerLimit`. The intention is to have some players be able to join even when the server is full.

#### Example allowlist.json file

```json
[
    {
        "ignoresPlayerLimit": false,
        "name": "MyPlayer"
    },
    {
        "ignoresPlayerLimit": false,
        "name": "AnotherPlayer",
        "xuid": "274817248"
    }
]
```
