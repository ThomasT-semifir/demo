"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var rxjs_1 = require("rxjs");
var Data = /** @class */ (function () {
    function Data() {
        this.observable = new rxjs_1.Observable(function (subscriber) {
            subscriber.next("coucou");
            subscriber.next("coco");
            subscriber.next("cece");
        });
        // pas de next sur un observable après sa création
        // findObservableData(): void {
        //     this.observable.next("sfdsf")
        // }
        this.subject = new rxjs_1.Subject();
        this.asyncSubject = new rxjs_1.AsyncSubject();
        // le replay subject est capable de renvoyer un certain nombre de valeurs passées avant la souscription par l'observer, mais également après la souscrption comme un subject classique.
        this.replaySubject = new rxjs_1.ReplaySubject(3);
        // le behavior subject fonctionne comme un subject après souscription, mais prend une valeur par défaut à la création et garde en mémoire la dernière valeur passée avant la souscription et la renvoie à l'observer.
        this.behaviorSubject = new rxjs_1.BehaviorSubject("hello");
    }
    Data.prototype.getObservable = function () {
        return this.observable;
    };
    Data.prototype.getSubject = function () {
        return this.subject;
    };
    // un subject peut émettre de nouvelles valeurs après sa création
    Data.prototype.findDataSubject = function () {
        var _this = this;
        this.subject.next("toto");
        setTimeout(function () {
            _this.subject.next("tota");
        }, 5000);
    };
    Data.prototype.getAsyncSubject = function () {
        return this.asyncSubject;
    };
    //un async subject retourne sa dernière valeur lorsque le complete() est appelé
    Data.prototype.findDataAsyncSubject = function () {
        this.asyncSubject.next("blablabla");
        this.asyncSubject.next("blabloooo");
        this.asyncSubject.next("blabliiiii");
        this.asyncSubject.next("blabluuuu");
        this.asyncSubject.complete();
    };
    Data.prototype.getReplaySubject = function () {
        this.replaySubject.next("1");
        this.replaySubject.next("2");
        this.replaySubject.next("3");
        this.replaySubject.next("4");
        this.replaySubject.next("5");
        this.replaySubject.next("6");
        this.replaySubject.next("avant souscription");
        return this.replaySubject;
    };
    Data.prototype.findDataReplaySubject = function () {
        this.replaySubject.next("7");
        this.replaySubject.next("8");
    };
    Data.prototype.getBehaviorSubject = function () {
        this.behaviorSubject.next("hella");
        this.behaviorSubject.next("helli");
        this.behaviorSubject.next("hellqs");
        return this.behaviorSubject;
    };
    Data.prototype.findDataBehaviorSubject = function () {
        this.behaviorSubject.next("hellu");
        this.behaviorSubject.next("helle");
        this.behaviorSubject.next("hellp");
        this.behaviorSubject.next("hellb");
    };
    return Data;
}());
exports.Data = Data;
//# sourceMappingURL=obs.js.map