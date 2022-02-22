module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd91c06a711f7e807c5ffbebb4eb536f9'),
  },
});
