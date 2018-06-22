var ps = require('ps-node');

exports.list = function(cmd) {
    return new Promise(function(resolve, reject) {
        ps.lookup({
            command: cmd
        }, function(err, resultList) {
            if (err) {
                // throw new Error(err);
                reject(err);
            } else {
                resultList.forEach(function(process) {
                    if (process) {
                        console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments);
                    }
                });

                resolve(resultList);
            }
            //return resultList;
        });
    });

};

exports.syncList = function() {
    var list = [{ name: "node.exe", pid: 12012 }];

    return list;
};