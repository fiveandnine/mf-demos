const { dependencies } = require("./package.json")

module.exports = {
  name: "common",
  exposes: {
    "./CommonBtn": "./src/components/btn/index.tsx",
    "./CommonLayout": "./src/components/layout/index.tsx",
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