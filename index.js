var _  require('lodash');

var callbacks = [];

export default {
  callbacks: function () {
    return callbacks;
  },

  addCallback: function (callback) {
    callbacks.push(callback);
  },

  removeCallback: function (callback) {
    callbacks = _.remove(callbacks, function (n) {
      return n === callback;
    });
  },

  broadcastCallbacks: function () {
    callbacks.forEach(function (callback) {
      callback();
    });
  }
};
