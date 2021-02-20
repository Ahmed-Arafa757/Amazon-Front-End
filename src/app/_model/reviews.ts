export interface Review {
  _id?: string;
  reviewerID?: string;
  reviewerName?: string;
  reviewTime?: string;
  reviewSummary?: string;
  fullReview?: string;
  reviewVote?: number;
  productID?: string;
  stars?: number[];
}
