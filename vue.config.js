module.exports = {
  pwa: {
    workboxPluginMOde: 'InjectManifest',
    workoxOptions: {
      swSrc: 'src/service-workers.js',
    },
  },
};
