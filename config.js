const config = {
    dbUrl: process.env.DB_URL || 'mongodb://m001-student:platzi-admin@sandbox-shard-00-00-p8slk.mongodb.net:27017,sandbox-shard-00-01-p8slk.mongodb.net:27017,sandbox-shard-00-02-p8slk.mongodb.net:27017/telegrom?ssl=true&replicaSet=Sandbox-shard-0&authSource=admin&retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
}

module.exports = config