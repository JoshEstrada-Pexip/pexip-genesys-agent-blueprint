export default {
    // 'development' or 'production'
    environment: 'development',

    // Using local test servers
    developmentUri: 'http://localhost:8080',

    // Publicly accessible location where the admin-app files are hosted.
    // This is different than the Pexip conference node value below.
    prodUri:  'https://github.com/JoshEstrada-Pexip/pexip-genesys-agent-blueprint/blob/main/agent-app/index.html',

    // Id for the video DOM element. Only change this if you customize index.html.
    videoElementId: "pexip-video-container",

    genesys: {
        // Genesys Cloud region
        // 'mypurecloud.com', 'usw2.pure.cloud', 'mypurecloud.ie', 'euw2.pure.cloud', 'mypurecloud.com.au'
        // See https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/ for all options
        region: 'usw2.pure.cloud',

        // OAuth Client ID
        // Created in "Create a Token Implicit OAuth Grant for Genesys Cloud deployment" step
        oauthClientID: 'b1ba141a-ca8c-44c6-b01b-e83c88da4230'
    },

    pexip: {
        // Used to identify the conference attendee for proper handling by Pexip Infinity local policy.
        conferencePrefix: "app",

        // External domain for Pexip Infinity Edge/Transcoding nodes.
        conferenceNode: "http://pex-simon-edge2.gcp.pexsupport.com/",

        // Conference PIN. Must match the PIN number set by Pexip Infinity local policy for ad-hoc conference creation.
        conferencePin: "1234"
    }
}
