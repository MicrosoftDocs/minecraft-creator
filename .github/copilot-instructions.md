This is a repository of markdown documentation for creators who build add-ons, worlds, and other content for Minecraft: Bedrock Edition. Documentation is written in the form of markdown files within the `creator` path, with additional canonical content that is used to generate documentation in the `build` folder. 

Markdown documents within `creator/PriorScriptAPI`, `creator/ScriptAPI`, and `creator/Reference` folders are generated from the source code and should not be edited directly.


## Contribution Guidelines

Please follow these guidelines when contributing:

### Form JSON content

A lot of the content that is ultimately used to build content is in the `content` folder. This content is in JSON format, and is used to generate the documentation. The Schema of the JSON format is based on the Minecraft Creator Tools TypeScript definitions - see `docs/dataform/IFormDefinition.ts` for the TypeScript definition of the JSON format used for the documentation.  Per the notes in IDataForm.ts, do not edit any data in the generated_doNotEdit or generatedSchema_doNotEdit sub nodes of those JSON Files.

### Markdown content

Content should be written conformant to the Microsoft Style Guide, available on the web at https://learn.microsoft.com/en-us/style-guide/ or as markdown files in GitHub at https://github.com/MicrosoftDocs/microsoft-style-guide/.

There is no build process for this documentation that is available in the GitHub repository. 

Content should be validated to ensure it is consistent with the corpus of content at:
 - Vanilla sample files: https://github.com/mojang/bedrock-samples
 - Minecraft Content Samples: https://github.com/microsoft/minecraft-samples
 - Minecraft Scripting Samples: https://github.com/microsoft/minecraft-scripting-samples

Minecraft Creator Tools has some additional content and knowledge that might be useful to reference at https://github.com/mojang/minecraft-creator-tools. 

If document files are moved, you should edit the .openpublishing.redirection.json file(s) to add redirects as necessary.

New documents should have entries in the table of contents, either in the root TOC.yml at `creator/TOC.yml`, and/or in one of the more localized table of content TOC.yml files in a subfolder of `creator`.