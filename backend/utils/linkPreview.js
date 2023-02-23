const { getLinkPreview, getPreviewFromContent } = require("link-preview-js");

function getPreivew(content, callback) {
  return new Promise((resolve, reject) => {
    getLinkPreview(content).then((data) => resolve(data));
  });
}

function containURL(content) {
  // var urlCheck = new RegExp(
  //   "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
  // );
  // if (urlCheck.test(content)) {
  //   return (urlCheck.exec(content));
  // }
  // return []
  const stringArray = content.split(" ");
  const url = new Array();
  stringArray.forEach((string) => {
    try {
      const urlCheck = new URL(string);
      url.push(urlCheck);
    }
    catch (e) {}
  });
  return url;
}

module.exports = { getPreivew, containURL };
