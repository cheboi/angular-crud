import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentBook: any;
  message = '';

  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.message='';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }

  getBook(id:string | null): void{
    this.booksService.getItem(id).subscribe(
      (book: null) =>{
        this.currentBook = book;
        console.log(book);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //delete
  deleteBook(): void {
    this.booksService.delete(this.currentBook.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/books']);
      },
      error => {
        console.log(error);
      });
    }

    //update book
    updateBook(): void { {
      this.booksService.update(this.currentBook.id, this.currentBook)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        error => {
          console.log(error);
        });
    }
  }
}
