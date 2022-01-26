import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";

export class Data {
    observable = new Observable<string>(subscriber => {
        subscriber.next("coucou");
        subscriber.next("coco");
        subscriber.next("cece");        
    })

    getObservable(): Observable<string> {
        return this.observable;
    }

    // pas de next sur un observable après sa création
    // findObservableData(): void {
    //     this.observable.next("sfdsf")
    // }

    subject = new Subject<string>();
    getSubject(): Subject<string> {
        return this.subject;
    }
    
    // un subject peut émettre de nouvelles valeurs après sa création
    findDataSubject(): void {
        this.subject.next("toto");
        setTimeout(() => {
            this.subject.next("tota");
        }, 5000)
    }

    asyncSubject = new AsyncSubject<string>();
    getAsyncSubject(): AsyncSubject<string> {
        return this.asyncSubject;
    }

    //un async subject retourne sa dernière valeur lorsque le complete() est appelé
    findDataAsyncSubject(): void {
        this.asyncSubject.next("blablabla");
        this.asyncSubject.next("blabloooo");
        this.asyncSubject.next("blabliiiii");
        this.asyncSubject.next("blabluuuu");
        this.asyncSubject.complete();
    }


    // le replay subject est capable de renvoyer un certain nombre de valeurs passées avant la souscription par l'observer, mais également après la souscrption comme un subject classique.
    replaySubject = new ReplaySubject<string>(3);
    getReplaySubject(): ReplaySubject<string> {
        this.replaySubject.next("1");
        this.replaySubject.next("2");
        this.replaySubject.next("3");
        this.replaySubject.next("4");
        this.replaySubject.next("5");
        this.replaySubject.next("6");
        this.replaySubject.next("avant souscription");
        return this.replaySubject;
    }

    findDataReplaySubject(): void {
        this.replaySubject.next("7");
        this.replaySubject.next("8");
    }

    // le behavior subject fonctionne comme un subject après souscription, mais prend une valeur par défaut à la création et garde en mémoire la dernière valeur passée avant la souscription et la renvoie à l'observer.
    behaviorSubject = new BehaviorSubject<string>("hello")
    getBehaviorSubject(): BehaviorSubject<string> {
        this.behaviorSubject.next("hella");
        this.behaviorSubject.next("helli");
        this.behaviorSubject.next("hellqs");
        return this.behaviorSubject;
    }

    findDataBehaviorSubject(): void {
        this.behaviorSubject.next("hellu");
        this.behaviorSubject.next("helle");
        this.behaviorSubject.next("hellp");
        this.behaviorSubject.next("hellb");
    }
}