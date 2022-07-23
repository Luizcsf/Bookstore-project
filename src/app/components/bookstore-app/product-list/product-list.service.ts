import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, retry } from 'rxjs/operators';
import { Book } from './model/book';


export const books: Book[] = [
    { id: '1', name: 'Sherloc Holmes' , price: 30, quantity: 10, category: "Action", img:"img1"},
    { id: '2', name: 'O mundo de Sofia' , price: 20, quantity: 1, category: "Fantasy", img:"img2"},
    { id: '3', name: 'Arsene Lupin' , price: 80, quantity: 1, category: "Classics", img:"img3"},

  ];

@Injectable()


export class BooksService {

  private url = 'https://sheet.best/api/sheets/a2faa549-e7c8-41f5-b80b-1a662c907331';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    books: any;
    
   constructor(private http: HttpClient){}

      
   // getBooks(){
    //  return books;
    //}

    getBooks(){
         return this.http.get(this.url);
     }

    
}