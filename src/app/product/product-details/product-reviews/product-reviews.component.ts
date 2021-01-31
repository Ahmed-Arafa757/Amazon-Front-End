import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/_model/reviews';
import { ReviewsService } from 'src/app/_services/reviews.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css'],
})
export class ProductReviewsComponent implements OnInit {
  reviews: Review[];

  addReview: Review = {
    reviewSummary: '',
    fullReview: '',
    reviewerName: 'Mohammed',
    reviewTime: new Date().toUTCString(),
    helpful: 0,
    reviewVote: 0,
    stars: [],
  };

  iconClass = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star',
  };

  globalRatings: number = 0;

  hasBeenSubmitted = false;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviews = this.reviewsService.getAllReviews();
    this.reviews.reverse();
    this.fillStars();
  }

  fillStars() {
    for (let index = 0; index < this.reviews.length; index++) {
      let stars = [0, 0, 0, 0, 0];
      var starsToFill = Math.round(this.reviews[index].reviewVote * 2) / 2; //round to nearest 0.5
      var i = 0;
      while (starsToFill > 0.5) {
        stars[i] = 1;
        i++;
        starsToFill--;
      }
      if (starsToFill === 0.5) {
        stars[i] = 0.5;
      }
      this.reviews[index].stars = stars;
    }
  }

  onSubmit() {
    this.reviewsService.addReview(this.addReview);

    this.reviews = this.reviewsService.getAllReviews();
    this.fillStars();
    this.reviews.reverse();

    this.addReview.fullReview = '';
    this.addReview.reviewSummary = '';
    this.hasBeenSubmitted = true;
  }
}
