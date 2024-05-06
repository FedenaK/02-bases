import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
    otherName: string = 'spiderman';
    otherAge: number = 20;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = this.otherName;
  }

  changeAge(): void {
    this.age = this.otherAge;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45

    //document.querySelectorAll('h1')!.forEach(elemento =>
    //  elemento.innerHTML = '<h1> Desde Angular </h1>'
    //  )
    }
  }
//

