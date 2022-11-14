const { dependencies } = require("./package.json")

module.exports = {
  name: "app2",
  exposes: {
    "./App": "./src/App.tsx",
  },
  remotes: {
    "@app1": "app1@http://localhost:3001/remoteEntry.js",
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