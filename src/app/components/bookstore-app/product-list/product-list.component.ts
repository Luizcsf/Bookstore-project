import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.service';
import { Book } from './model/book';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  books: any;
  livros: any;
  booksService: BooksService;

  constructor(  booksService: BooksService) {

    this.booksService = booksService;

    // this.booksService = new BooksService();
   }

  ngOnInit(): void {

    this.livros = this.booksService.getBooks().subscribe(((data: any) => {
      this.livros = data;
      console.log(this.livros);
    }))

  }


}

