window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [{
      name: "Resolver",
      url: "https://resolver.api.identifiers.org/v3/api-docs"
    }, {
      name: "Registry",
      url: "https://registry.api.identifiers.org/v3/api-docs"
    }],
    dom_id: '#swagger-ui',
    deepLinking: false,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    supportedSubmitMethods: [] // This disables the 'try it out' feature which doesn't work with the resolver
  });

  //</editor-fold>
};
