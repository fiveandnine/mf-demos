const { dependencies } = require("./package.json")

module.exports = {
  name: "app1",
  exposes: {
    "./App": "./src/App.tsx",
  },
  remotes: {
    "@app2": "app2@http://localhost:3002/remoteEntry.js",
    "@common": "common@http://localhost:3003/remoteEntry.js",
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