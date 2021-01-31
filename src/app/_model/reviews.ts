export interface Review {
  id?: number;
  reviewerID?: string;
  reviewerName?: string;
  reviewTime?: string;
  reviewSummary?: string;
  fullReview?: string;
  helpful?: number;
  reviewVote?: number;
  productID?: number;
  stars?: number[];
}
