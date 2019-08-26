module.exports = function(bundler) {
  bundler.addAssetType('css', require.resolve('./lib/css.js'));
  bundler.addAssetType('png', require.resolve('./lib/image.js'));
  bundler.addAssetType('jpg', require.resolve('./lib/image.js'));
  bundler.addAssetType('bmp', require.resolve('./lib/image.js'));
}
