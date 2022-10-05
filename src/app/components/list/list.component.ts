import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books: any;
  currentBook:any;
  currentIndex = -1;
  searchTitle = '';

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  // Get list
  getAllBooks(): void {
    this.booksService.list()
      .subscribe(
        (books: any) => {
          this.books = books;
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Delete action
  deleteBook(id:number){
    this.booksService.delete(id)
    .subscribe(
      response => {
        this.getAllBooks();
      },
      error => {
        console.log(error);
      });
  }

  // Search items
  searchByTitle(): void {
    this.booksService.filterByTitle(this.searchTitle)
      .subscribe(
        books => {
          this.books = books;
        },
        error => {
          console.log(error);
        });
  }

}
