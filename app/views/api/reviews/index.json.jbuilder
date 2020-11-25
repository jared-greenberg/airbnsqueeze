json.reviews do
  @reviews.each |review| do
    json.partial! '/api/reviews/review/', review: review
  end
end