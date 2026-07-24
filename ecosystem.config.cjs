module.exports = {
  apps: [
    {
      name: 'uddyog-copilot-frontend',
      script: 'npm',
      args: 'run start',
      cwd: './frontend',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
    {
      name: 'uddyog-copilot-backend',
      script: 'npm',
      args: 'start',
      cwd: './backend',
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
      },
    },
  ],
};
