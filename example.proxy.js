var cp = require("./index");
var bs = require("browser-sync");

//var client = require("/Users/shaneobsourne/sites/browser-sync-client");
//
//client["plugin:name"] = "client:script";

bs.use(cp);
//bs.use(client);

bs({
    proxy: "http://www.chucklebooth.co.uk/",
    open: false,
    //tunnel: true
    port: 4000
});