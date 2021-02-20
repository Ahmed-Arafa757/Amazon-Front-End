import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/_model/reviews';
import { ReviewsService } from 'src/app/_services/reviews.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss'],
})
export class ProductReviewsComponent implements OnInit {
  @Input() id: string;

  reviews: Review[] = [];

  addReview: Review = {
    _id: '',
    reviewerID: 'sdf531sd3f6',
    reviewerName: 'Mohammed Mounir',
    reviewTime: new Date().toUTCString(),
    reviewSummary: '',
    fullReview: '', 
    reviewVote: null,
    productID: '',
    stars: [],
  };

  iconClass = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star',
  };

  globalRatings: number = 0;

  hasBeenSubmitted: boolean = false;

  editMode: boolean = false;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviewsService.getReviewsByProductId(this.id);
    this.getReviews();
  }

  getReviews() {
    this.reviewsService.latestReviews.subscribe(
      (res) => {
        this.reviews = res;
        this.reviews.reverse();
        this.fillStars();
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
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

  onSubmit(reviewForm: NgForm) {
    if (this.editMode === false) {
      this.addReview.productID = this.id;
      const review = { ...this.addReview };
      this.reviewsService.addReview(review);
    } else {
      const review = { ...this.addReview };
      this.reviewsService.updateReview(this.addReview._id, review);
      this.editMode = false;
    }

    this.getReviews();
    reviewForm.reset();
    this.hasBeenSubmitted = true;
  }

  onDelete(reviewID: string) {
    this.reviewsService.deleteReview(reviewID);
    this.getReviews();
  }

  onEdit(reviewID: string) {
    const toEdit = this.reviews.find((review) => review._id === reviewID);
    this.addReview = { ...toEdit };
    this.editMode = true;
  }
}
