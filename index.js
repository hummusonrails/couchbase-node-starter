require('dotenv').config(); // Add .env variables
var couchbase = require('couchbase'); // Setup Couchbase SDK

async function main() {
    const clusterConnStr = process.env.NODE_COUCHBASE_CONNECTION_STRING;
    const username = process.env.NODE_COUCHBASE_USERNAME;
    const password = process.env.NODE_COUCHBASE_PASSWORD;
    const bucketName = process.env.COUCHBASE_DEFAULT_BUCKET;

    const cluster = await couchbase.connect(clusterConnStr, {
        username: username,
        password: password,
        configProfile: 'wanDevelopment',
    });

    const bucket = cluster.bucket(bucketName);

    console.log('Connected to Couchbase cluster:', clusterConnStr);
    console.log(`Couchbase Cluster object instantiated successfully: ${cluster}`);
    console.log(`Couchbase Bucket object instantiated successfully: ${bucket}`);

    // Return a success message or a status for testing
    return { status: 'connected', bucketName };
}

// Export the main function for testing
module.exports = main;

// Run the main function if this is the entry point
if (require.main === module) {
    main()
        .catch((err) => {
            console.error('ERR:', err);
            process.exit(1);
        })
        .then(() => process.exit());
}
