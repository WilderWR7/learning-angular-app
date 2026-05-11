import { UpperCasePipe } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
    templateUrl: "./hero-page.html",
    imports: [
        UpperCasePipe,
    ]
})
export class HeroPage {
    name = signal("Superman");
    age = signal(30);

    description() {
        return `${this.name()} is ${this.age()} years old.`;
    }

    changeHero() {
        this.name.set("Batman");
        this.age.set(35);
    }

    updateAge() {
        this.age.set(Math.floor(Math.random() * 100));
    }

    resetHero() {
        this.name.set("Superman");
        this.age.set(30);
    }

}