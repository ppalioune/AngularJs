import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../book.model';

//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = []
  bookSubject = new Subject<Book[]>();

  constructor() {
    this.getBooks();
}

  emitBooks() {
    this.bookSubject.next(this.books)
  }

  saveBooks() {
    firebase.database().ref('/books').set(this.books)
  }

  getBooks() {
    firebase.database().ref('/books')
      .on('value', (data: DataSnapshot) => {
        this.books = data.val() ? data.val() : [];
        this.emitBooks();
      }
      );
  }

  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

}
