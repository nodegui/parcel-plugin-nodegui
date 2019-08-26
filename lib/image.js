const { Asset } = require('parcel-bundler');

class NodeGUIImageAsset extends Asset {
  async generate() {
    const bundleName = this.generateBundleName();
    const jsFile = `
    const path = require('path');
    module.exports = path.join(__dirname, '${bundleName}')
    `;

    return [{
      type: 'js',
      value: jsFile,
      hasDependencies: false
    }]
  }
}

module.exports = NodeGUIImageAsset;