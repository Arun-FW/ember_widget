import Component from '@ember/component';

export default Component.extend({

  didInsertElement: function () {

    this.initiateCall();
  },

  initiateCall: function () {
    this.initialize(document, "freshchat-js-sdk")
  },

  initialize: function (i, t) {
    var e;
    i.getElementById(t) ? this.initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = this.initFreshChat, i.head.appendChild(e))
  },

  initFreshChat: function () {
    window.fcWidget.init({
      token: "66cf57d6-66f9-431e-8215-a8e5fc205c07",
      host: "https://wchat.freshchat.com"
    });
  }

});
