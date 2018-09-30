import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

// key that is used to access the data in local storage
const STORAGE_KEY = 'local_todolist';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //constructor() { }
  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    // localStorage.setItem('test7', 'testing 1');
    // localStorage.setItem('test8', 'testing 2');
    // localStorage.setItem('test9', 'testing 3');
    
    // for(var i in localStorage)
    // {
    //     console.log(localStorage[i]);
    // }

    // var x = localStorage.getItem("test");
    // console.log('Testing:' + x);
    localStorage.clear;
    var testObject: Hero ={id:1004, name:"test", title:"Goodbye Lenin"};
    localStorage.setItem('testObject2', JSON.stringify(testObject));
    var y = localStorage.getItem("testObject2");
    console.log('test object = ' + y);
    var getObject: Hero = JSON.parse(localStorage.getItem('testObject2'));
    console.log(getObject);
    console.log("stop");
    let heroes: Hero[];

    for(var i in localStorage)
    {
      
      console.log(localStorage[i]);
    }
    //console.log('Count:' + heroes.length);
    


    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
    
  }
  
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

    getRecords(heroes: Hero[]): Hero[] {
      for(var i in localStorage)
      {
        heroes.push(localStorage[i])
        console.log(localStorage[i]);
      }
      console.log('Count:' + heroes.length);
      return heroes;
      //return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
