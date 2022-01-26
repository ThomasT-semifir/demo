import { Subscription } from "rxjs";
import { Data } from "./src/obs";

const data = new Data();
let tableau: string[] = [];

let sub1: Subscription=  data.getObservable().subscribe({
    next: data => tableau.push(data),
    error: err => console.error(err),
    complete: () => console.log("ok observable fini")
})

console.log(tableau);
sub1.unsubscribe();

let sub2: Subscription = data.getSubject().subscribe({
    next: data => console.log(data),
    error: err => console.error(err),
    complete: () => console.log("ok subject fini")
})

data.findDataSubject()
sub2.unsubscribe();

let sub3 = data.getAsyncSubject().subscribe({
    next: data => console.log(data),
    error: err => console.error(err),
    complete: () => console.log("async subject terminé")
})

data.findDataAsyncSubject()
sub3.unsubscribe();

let sub4 = data.getReplaySubject().subscribe({
    next: data => console.log(data),
    error: err => console.error(err),
    complete: () => console.log("replay subject terminé")
})

data.findDataReplaySubject()
sub4.unsubscribe();

let sub5 = data.getBehaviorSubject().subscribe({
    next: data => console.log(data),
    error: err => console.error(err),
    complete: () => console.log("behavior subject terminé")
})

data.findDataBehaviorSubject();