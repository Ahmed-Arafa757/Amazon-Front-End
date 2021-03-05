import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/_model/reviews';
import { User } from 'src/app/_model/users';
import { ReviewsService } from 'src/app/_services/reviews.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss'],
})
export class ProductReviewsComponent implements OnInit {
  reviews: Review[] = [];
  productID: string = '';
  user: User = { _id: '', email: '', password: '' };
  addReview: Review = {
    _id: '',
    reviewerID: '',
    reviewerName: '',
    reviewTime: '',
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

  constructor(
    private reviewsService: ReviewsService,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.productID = params.id;
        // console.log(params.id);
        this.reviewsService.getReviewsByProductId(params.id);
        this.getReviews();
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );

    const userID = localStorage.getItem('user id');
    this.usersService.getUserById(userID).subscribe({
      next: (user: any) => {
        console.log(user);
        this.user = user;
        console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getReviews() {
    this.reviewsService.latestReviews.subscribe(
      (res) => {
        // console.log(res);
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
      this.addReview.reviewerID = this.user._id;
      this.addReview.reviewerName = this.user.userName;
      this.addReview.productID = this.productID;
      this.addReview.reviewTime = new Date().toUTCString();

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

  onCancelEdit(reviewForm: NgForm) {
    this.editMode = false;
    reviewForm.reset();
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
