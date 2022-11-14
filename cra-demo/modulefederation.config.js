const { dependencies } = require("./package.json")

module.exports = {
  name: "app1",
  exposes: {
    "./App": "./src/App.tsx",
  },
  remotes: {
    "@common": "common@http://localhost:3003/remoteEntry.js?v=[window.a]",
  },
  filename: "remoteEntry.js",
  shared: {
    // ...dependencies,
    react: {
      eager: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      eager: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};