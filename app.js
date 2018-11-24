/* 
* Primary file for API
*/

//Dependencies
const unifiedServer = require('./unifiedServer'),
      os = require('os'),
      cluster = require('cluster');

let app = {};

app.init = () => {
    if(cluster.isMaster){
        //if it is master we will user this section for running cli, workers etc

        //Fork the process according to cores quantity
        for(let i = 0; os.cpus().length > 0; i++){
          cluster.fork();
        }
    } else {
        //if it is fork we run HTTP server here
        unifiedServer.init();
    }
}

app.init();