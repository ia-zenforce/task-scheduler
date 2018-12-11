var axios = require("axios");

exports.handler = function(event, context, callback) {
  axios
    .post("https://zenforce.zennerslab.com/api/scheduler/schedule-builder")
    .then(res => context.succeed(res.data))
    .catch(err => {
      console.log("SCHEDULER ERROR: ", err);
      callback(err);
    });
};
