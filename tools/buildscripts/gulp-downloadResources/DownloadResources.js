// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const fs = require("fs");
const fetch = require("node-fetch");
const JSZip = require("jszip");
const path = require("path");

class DownloadResources {
  _targetFilePath;
  _excludeIfContents;

  _typedefs = [];

  // as an additional security defense, enforce an explicit allow list of file extensions (never extract .exes, say.)
  // note that LICENSE (no extension) is also allowed through special case code.
  fileExtensionAllowList = ["json", "js", "ts", "png", "tga", "jpg", "lang"];
  pathDisallowList = ["./", "/.", "just.config.ts"];

  constructor(targetFilePath, excludeIfContents) {
    this._targetFilePath = targetFilePath;

    if (!excludeIfContents) {
      this._excludeIfContents = [];
    } else {
      this._excludeIfContents = excludeIfContents;
    }
  }

  resolve(filePath, content, callback) {
    const moduleName = filePath.toLowerCase();

    const me = this;
    if (moduleName.toLowerCase().endsWith(".resources.json")) {
      let jsonObj = undefined;

      try {
        jsonObj = JSON.parse(content);
      } catch (e) {}

      if (jsonObj && jsonObj.url) {
        console.log("Downloading '" + jsonObj.url + "' contents to '" + this._targetFilePath + "'");

        let subFolder = jsonObj.subFolder;

        if (!subFolder) {
          subFolder = "";
        }

        const ignoreSubFolder = jsonObj.ignoreSubFolder;
        const ignoreFirstFolder = jsonObj.ignoreFirstFolder;
        const replaceFirstFolderWith = jsonObj.replaceFirstFolderWith;

        let extraExcludeIfContents = jsonObj.exclude;

        if (!extraExcludeIfContents) {
          extraExcludeIfContents = [];
        }

        extraExcludeIfContents = me._excludeIfContents.concat(extraExcludeIfContents);

        fetch(jsonObj.url, {
          method: "GET",
          redirect: "follow",
          follow: 3,
        })
          .then((response) => {
            if (response.ok) {
              const ctype = response.headers.get("content-type");

              if (ctype === "application/x-zip-compressed" || ctype === "application/zip") {
                response
                  .blob()
                  .then((blobContent) => {
                    blobContent
                      .arrayBuffer()
                      .then((content) => {
                        let folderInfos = {};

                        JSZip.loadAsync(content)
                          .then(function (zip) {
                            const filePathsToProcess = [];
                            const filePathsWritten = [];

                            for (const filePath in zip.files) {
                              let addFile = false;

                              const filePathCanon = filePath.toLowerCase().replace(/\\/g, "/");

                              const extension = me.getTypeFromName(filePathCanon);

                              if (
                                (extension === "" || extension === "md") &&
                                (filePathCanon.endsWith("/notice") ||
                                  filePathCanon.endsWith("/readme") ||
                                  filePathCanon.endsWith("/readme.md") ||
                                  filePathCanon.endsWith("/license") ||
                                  filePathCanon.endsWith("/license.md") ||
                                  filePathCanon.endsWith("/notice.md"))
                              ) {
                                addFile = true;
                              }

                              for (const allowedExtension of me.fileExtensionAllowList) {
                                if (allowedExtension === extension) {
                                  addFile = true;
                                }
                              }

                              for (const exclude of me.pathDisallowList) {
                                if (filePathCanon.indexOf(exclude) >= 0) {
                                  addFile = false;
                                }
                              }

                              if (addFile) {
                                if (filePathCanon.indexOf("..") >= 0 || filePathCanon.indexOf("//") >= 0) {
                                  addFile = false;
                                }

                                for (const exclusionPath of extraExcludeIfContents) {
                                  if (filePathCanon.indexOf(exclusionPath.toLowerCase()) >= 0) {
                                    addFile = false;
                                  }
                                }
                              }

                              if (addFile) {
                                filePathsToProcess.push(filePath);
                              }
                            }

                            for (const filename of filePathsToProcess) {
                              let destFile = filename;

                              if (ignoreSubFolder && destFile.toLowerCase().startsWith(ignoreSubFolder.toLowerCase())) {
                                let nextSlash = destFile.indexOf("/", ignoreSubFolder.length);

                                if (nextSlash < ignoreSubFolder.length) {
                                  nextSlash = ignoreSubFolder.length;
                                }

                                destFile = destFile.substring(nextSlash);
                              }

                              if (ignoreFirstFolder) {
                                let nextSlash = destFile.indexOf("/", 1);

                                if (nextSlash > 1) {
                                  destFile = destFile.substring(nextSlash);
                                }
                              }

                              if (replaceFirstFolderWith) {
                                let nextSlash = destFile.indexOf("/", 1);

                                if (nextSlash > 1) {
                                  destFile = path.join(replaceFirstFolderWith, destFile.substring(nextSlash));
                                }
                              }

                              const dest = path.join(me._targetFilePath, subFolder, destFile);
                              const folderPath = me.getPath(dest);

                              if (!folderInfos[folderPath]) {
                                folderInfos[folderPath] = {
                                  files: [],
                                  folders: [],
                                };
                              }

                              const content = zip.files[filename];

                              let ancestorFolderPath = me.getPath(folderPath);
                              const currentFolderName = me.getFileName(folderPath);

                              if (!folderInfos[ancestorFolderPath]) {
                                folderInfos[ancestorFolderPath] = {
                                  files: [],
                                  folders: [],
                                };
                              }

                              // cache the parent folder name
                              if (!folderInfos[ancestorFolderPath].folders.includes(currentFolderName)) {
                                folderInfos[ancestorFolderPath].folders.push(currentFolderName);
                              }

                              const parentFolderName = me.getFileName(ancestorFolderPath);
                              ancestorFolderPath = me.getPath(ancestorFolderPath);

                              if (!folderInfos[ancestorFolderPath]) {
                                folderInfos[ancestorFolderPath] = {
                                  files: [],
                                  folders: [],
                                };
                              }

                              if (!folderInfos[ancestorFolderPath].folders.includes(parentFolderName)) {
                                folderInfos[ancestorFolderPath].folders.push(parentFolderName);
                              }

                              if (content.dir) {
                                filePathsWritten.push(filename);

                                if (filePathsWritten.length >= filePathsToProcess.length) {
                                  callback(null, null);
                                  return;
                                }
                              } else {
                                const fileDest = dest;
                                const fileFolderPath = folderPath;

                                content.async("uint8array").then((contentBytes) => {
                                  const exists = fs.existsSync(fileFolderPath);

                                  if (!exists) {
                                    fs.mkdirSync(fileFolderPath, { recursive: true });
                                  }

                                  folderInfos[fileFolderPath].files.push(me.getFileName(fileDest));

                                  fs.writeFileSync(fileDest, contentBytes);

                                  filePathsWritten.push(filename);

                                  if (filePathsWritten.length >= filePathsToProcess.length) {
                                    console.log(
                                      "Wrote " +
                                        filePathsWritten.length +
                                        " files and folders to '" +
                                        path.join(me._targetFilePath, subFolder) +
                                        "'"
                                    );

                                    for (const folderInfo in folderInfos) {
                                      const folderInfoJson = JSON.stringify(folderInfos[folderInfo], null, 2);
                                      fs.writeFileSync(folderInfo + "/index.json", folderInfoJson);
                                    }

                                    callback(null, null);
                                    return;
                                  }
                                });
                              }
                            }

                            if (filePathsWritten.length >= filePathsToProcess.length) {
                              callback(null, null);
                            }
                          })
                          .catch((err) => {
                            console.log("Error opening up zip: " + err);

                            callback(err);
                          });
                      })
                      .catch((err) => {
                        console.log("Error processing stream: " + err);

                        callback(err);
                      });
                  })
                  .catch((err) => {
                    console.log("Error downloading stream: " + err);

                    callback(err);
                  });
              } else {
                console.log("Unexpected type of file downloaded (was expecting zip): " + ctype);
                callback(null, null);
              }
            } else {
              console.log("Unable to download file from URL (code: " + response.status + ")");
              callback(null, null);
            }
          })
          .catch((err) => {
            console.log("Error downloading file: " + err);

            callback(err);
          });
      }
    }

    return content;
  }

  getTypeFromName(name) {
    const nameW = name.trim().toLowerCase();

    const lastPeriod = nameW.lastIndexOf(".");

    if (lastPeriod < 0) {
      return "";
    }

    return nameW.substring(lastPeriod + 1, nameW.length);
  }

  getPath(path) {
    if (path.endsWith("/")) {
      path = path.substring(0, path.length - 1);
    }

    if (path.endsWith("\\")) {
      path = path.substring(0, path.length - 1);
    }

    let lastSlash = path.lastIndexOf("/", path.length - 1);

    if (lastSlash >= 0 && lastSlash < path.length - 1) {
      path = path.substring(0, lastSlash + 1);
    } else {
      lastSlash = path.lastIndexOf("\\", path.length - 1);

      if (lastSlash >= 0 && lastSlash < path.length - 1) {
        path = path.substring(0, lastSlash + 1);
      }
    }

    return path;
  }

  getFileName(path) {
    if (path.endsWith("/")) {
      path = path.substring(0, path.length - 1);
    }

    if (path.endsWith("\\")) {
      path = path.substring(0, path.length - 1);
    }

    let lastSlash = path.lastIndexOf("/", path.length - 1);

    if (lastSlash >= 0 && lastSlash < path.length - 1) {
      path = path.substring(lastSlash + 1);
    } else {
      lastSlash = path.lastIndexOf("\\", path.length - 1);

      if (lastSlash >= 0 && lastSlash < path.length - 1) {
        path = path.substring(lastSlash + 1);
      }
    }

    return path;
  }
}

module.exports = DownloadResources;
