// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const DownloadResources = require("./DownloadResources");
const through2 = require("through2");

module.exports = (filePath = ".", excludeIfContents = []) => {
  const downloadResources = new DownloadResources(filePath, excludeIfContents);

  return through2.obj((chunk, encoding, callback) => {
    try {
      const content = downloadResources.resolve(chunk.history[0], chunk.contents.toString("utf-8"), callback);

      chunk.contents = Buffer.from(content);
    } catch (err) {
      callback(err);
    }
  });
};
