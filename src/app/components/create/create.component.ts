import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  book = {
    title: '',
    description: ''
  };
  isBookAdded = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void { }

  // Add New
  addBook(): void {
    const data = {
      title: this.book.title,
      description: this.book.description
    };
    if (!data.title) {
      alert('Please add title!');
      return;
    }

    this.booksService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isBookAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newBook(): void {
    this.isBookAdded = false;
    this.book = {
      title: '',
      description: ''
    };
  }

}
