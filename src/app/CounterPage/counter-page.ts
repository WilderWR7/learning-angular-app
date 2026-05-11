import { Component, signal } from "@angular/core";

@Component({
    templateUrl: "./counter-page.html",
})
export class CounterPage {
    count = signal(0);
    increment() {
        this.count.update((value) => value + 1);
    }
    decrement() {
        this.count.update((value) => value - 1);
    }
    reset() {
        this.count.set(0);
    }
}