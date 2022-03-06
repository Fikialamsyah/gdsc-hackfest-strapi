module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3db6b3bac6ba1f799cc8401f9baba4f4'),
  },
});
