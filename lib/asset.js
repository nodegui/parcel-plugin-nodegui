const CSSAsset = require('parcel-bundler/src/assets/CSSAsset');

class NodeGUIStylesheetsAsset extends CSSAsset {
  async generate() {
    const result = await super.generate();
    const cssResult = result.find(v => v.type === "css");
    const jsResult = result.find(v => v.type === "js");
    jsResult.value = `module.exports = ${JSON.stringify(cssResult.value)}`;
    return [jsResult];
  }
}

module.exports = NodeGUIStylesheetsAsset;