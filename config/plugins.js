module.exports = ({ env }) => ({
    // ...
    'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    seo: {
      enabled: true,
    },
    redirects: {
        enabled: true,
      },

    // ...
  });
