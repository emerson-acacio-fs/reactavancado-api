module.exports = ({ env }) => ({
  netlifyWebhook: env("NETLIFY_WEBHOOKS"),
});
