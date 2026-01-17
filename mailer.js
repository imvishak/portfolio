const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  "775002145523-971i97phi31blal5sd8keq81s1k9hbvh.apps.googleusercontent.com", // Client ID
  "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", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL (usually the same)
);

oauth2Client.setCredentials({
  refresh_token:
    "1//048kERH4OKcr2CgYIARAAGAQSNwF-L9Ir2C1oN2MEGgbXa9c5ZWpRFs8YIKDsBEKUJ5eSPVxE02unm8tYY4PmILGdkWKrwnUe-rE", // Refresh Token
});

async function getAccessToken() {
  try {
    const accessToken = await oauth2Client.getAccessToken();
    console.log('Access Token:', accessToken.token);
    return accessToken.token;
  } catch (error) {
    console.error('Error retrieving access token:', error);
  }
}

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "techstecome@gmail.com", // Your Gmail address
    clientId:
      "775002145523-971i97phi31blal5sd8keq81s1k9hbvh.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//048kERH4OKcr2CgYIARAAGAQSNwF-L9Ir2C1oN2MEGgbXa9c5ZWpRFs8YIKDsBEKUJ5eSPVxE02unm8tYY4PmILGdkWKrwnUe-rE",
    accessToken: getAccessToken(), // Access token from OAuth2 client
  },
});

module.exports = transport;
