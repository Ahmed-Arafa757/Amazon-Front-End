import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../_model/reviews';

@Injectable({ providedIn: 'root' })
export class ReviewsService {
  reviews: Review[] = [];

  latestReviews = new EventEmitter<Review[]>();

  constructor(private http: HttpClient) {}

  getReviewsByProductId(id: string): any {
    this.http
      .get<{ message: string; reviews: any }>(
        `http://localhost:3000/api/reviews/${id}`
      )
      .subscribe(
        (reviewsData) => {
          this.reviews = reviewsData.reviews;
          this.latestReviews.emit(this.reviews);
        },
        () => {},
        () => {}
      );
  }

  addReview(review: Review) {
    const newReview: Review = {
      _id: null,
      reviewerID: review.reviewerID,
      reviewerName: review.reviewerName,
      reviewTime: review.reviewTime,
      reviewSummary: review.reviewSummary,
      fullReview: review.fullReview,
      reviewVote: review.reviewVote,
      productID: review.productID,
    };
    this.http
      .post<{ message: string; reviewID: string }>(
        'http://localhost:3000/api/reviews',
        newReview
      )
      .subscribe((responseReview) => {
        const id = responseReview.reviewID;
        newReview._id = id;
        this.reviews.push(newReview);
        this.latestReviews.emit(this.reviews);
      });
  }

  updateReview(reviewID: string, review: Review) {
    this.http
      .put(`http://localhost:3000/api/reviews/${reviewID}`, review)
      .subscribe(() => {
        const updatedReviews = [...this.reviews];
        const oldReviewIndex = updatedReviews.findIndex(
          (r) => r._id === review._id
        );

        updatedReviews[oldReviewIndex] = review;
        this.reviews = updatedReviews;
        this.latestReviews.emit(this.reviews);
      });
  }

  deleteReview(reviewID: string) {
    this.http
      .delete(`http://localhost:3000/api/reviews/${reviewID}`)
      .subscribe(() => {
        const reviewsAfterDel = this.reviews.filter(
          (review) => review._id !== reviewID
        );
        this.reviews = [...reviewsAfterDel];
        this.latestReviews.emit(this.reviews);
      });
  }
}
