module.exports = {
  apps: [
    {
      name: "webapp",
      script: "./server/index.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      },
      output: "./logs/out.log",
      error: "./logs/error.log"
    }
  ]
};
