const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    // NAME_OF_SOMETHING = process.env.NAME_OF_TOKEN_OR_KEY] Use VUE_APP_ prefix for each environment variable
    VUE_APP_BASE_URL: process.env.VUE_APP_BASE_URL,
    VUE_APP_LOCAL_URL: process.env.VUE_APP_LOCAL_URL,
    NADI_PLASMIC_PROJECT_ID: process.env.NADI_PLASMIC_PROJECT_ID,
    PLASMIC_TOKEN: process.env.PLASMIC_TOKEN,
    devServer: {
        https: true,
    }
}