const main = require('./index');

test('verifies main connects successfully', async () => {
    const result = await main();
    expect(result).toEqual({ status: 'connected', bucketName: process.env.COUCHBASE_DEFAULT_BUCKET });
});
