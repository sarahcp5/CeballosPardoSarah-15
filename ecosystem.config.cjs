module.exports = {
  apps: [
    {
      name: "Server1",
      script: "src/index.js",
      watch: true,
      env: {
        PORT: 8080
      }
    },
    {
      name: "Server2",
      script: "src/index.js",
      watch: true,
      env: {
        PORT: 8081
      }
    },
    {
      name: "Server3",
      script: "src/index.js",
      watch: true,
      env: {
        PORT: 8082
      },
      exec_mode: "cluster",
      instances: 8,
      node_args: "--harmony"
    }
  ]
}