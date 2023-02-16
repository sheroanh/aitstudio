import { getLinkPreview, getPreviewFromContent } from "link-preview-js";

function getPreivew(content, callback) {
  return new Promise((resolve, reject) => {
    getLinkPreview(
        content
    ).then((data) => resolve(data));
  });
}

module.exports = { getPreivew };
