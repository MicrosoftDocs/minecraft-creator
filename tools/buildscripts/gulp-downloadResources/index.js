// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const DownloadResources = require("./DownloadResources");
const { Transform } = require("stream");

module.exports = (filePath = ".", excludeIfContents = []) => {
  const downloadResources = new DownloadResources(filePath, excludeIfContents);

  return new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
      try {
        const content = downloadResources.resolve(chunk.history[0], chunk.contents.toString("utf-8"), callback);

        chunk.contents = Buffer.from(content);
      } catch (err) {
        callback(err);
      }
    },
  });
};
