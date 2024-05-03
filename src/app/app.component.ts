import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public index: number;
  public ratingComplete: boolean;
  public tempRating: number;

  public constructor() {
    this.index = 0;
    this.ratingComplete = false;
    this.tempRating = 0;
  }

  public bookCollection = [
    {
      title: 'The Hobbit',
      description: 'Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.',
      author: 'J.R.R. Tolkien',
      ratings: [5, 3]
    },
    {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      description: 'The first book in the Harry Potter series where young Harry learns of his heritage as a wizard and begins his schooling at Hogwarts.',
      author: 'J.K. Rowling',
      ratings: [5, 4]
    },
    {
      title: 'A Game of Thrones',
      description: 'The first book in the A Song of Ice and Fire series, which introduces a world of intrigue, brutal betrayal, and high stakes where noble families vie for control of the Iron Throne.',
      author: 'George R.R. Martin',
      ratings: [5, 5]
    },
    {
      title: 'The Name of the Wind',
      description: 'This is the first book in the Kingkiller Chronicle series, telling the story of Kvothe, an adventurer and musician recounting his past to a scribe named Chronicler.',
      author: 'Patrick Rothfuss',
      ratings: [1, 4]
    },
    {
      title: 'The Way of Kings',
      description: 'The first volume in the Stormlight Archive, an epic fantasy series by Brandon Sanderson, set in a world of stone and storms, uncanny forces, and warring factions.',
      author: 'Brandon Sanderson',
      ratings: [4, 2]
    },
    {
      title: 'The Lies of Locke Lamora',
      description: 'Follows the adventures of the cunning master thief Locke Lamora as he steals from the rich in the city of Camorr, based on late medieval Venice but on an unnamed world.',
      author: 'Scott Lynch',
      ratings: [5, 1]
    },
    {
      title: 'Mistborn: The Final Empire',
      description: 'In a world where ash falls from the sky and mist dominates the night, an unlikely heroine emerges to overthrow an immortal ruler known as the Lord Ruler.',
      author: 'Brandon Sanderson',
      ratings: [5, 2]
    }
  ];

  public calculateAverage(ratings: number[]): number {
    return ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;
  }

  onRatingChange(event: CustomEvent) {
    const newRating = event.detail.value; 
    if (!isNaN(newRating)) {
      this.bookCollection[this.index].ratings.push(newRating);
      this.bookCollection[this.index] = { ...this.bookCollection[this.index], ratings: [...this.bookCollection[this.index].ratings] };
    }
  }

  public nextBook() {
    this.index++;
    if (this.index >= this.bookCollection.length) {
      this.ratingComplete = true;
    }
  }

  public restartBooks() {
    this.index = 0;
    this.ratingComplete = false;
  }

  public stopEvaluation() {
    this.ratingComplete = true;
  }
}
