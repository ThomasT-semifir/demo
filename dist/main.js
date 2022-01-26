"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obs_1 = require("./src/obs");
var data = new obs_1.Data();
var tableau = [];
var sub1 = data.getObservable().subscribe({
    next: function (data) { return tableau.push(data); },
    error: function (err) { return console.error(err); },
    complete: function () { return console.log("ok observable fini"); }
});
console.log(tableau);
sub1.unsubscribe();
var sub2 = data.getSubject().subscribe({
    next: function (data) { return console.log(data); },
    error: function (err) { return console.error(err); },
    complete: function () { return console.log("ok subject fini"); }
});
data.findDataSubject();
sub2.unsubscribe();
var sub3 = data.getAsyncSubject().subscribe({
    next: function (data) { return console.log(data); },
    error: function (err) { return console.error(err); },
    complete: function () { return console.log("async subject terminé"); }
});
data.findDataAsyncSubject();
sub3.unsubscribe();
var sub4 = data.getReplaySubject().subscribe({
    next: function (data) { return console.log(data); },
    error: function (err) { return console.error(err); },
    complete: function () { return console.log("replay subject terminé"); }
});
data.findDataReplaySubject();
sub4.unsubscribe();
var sub5 = data.getBehaviorSubject().subscribe({
    next: function (data) { return console.log(data); },
    error: function (err) { return console.error(err); },
    complete: function () { return console.log("behavior subject terminé"); }
});
data.findDataBehaviorSubject();
//# sourceMappingURL=main.js.map