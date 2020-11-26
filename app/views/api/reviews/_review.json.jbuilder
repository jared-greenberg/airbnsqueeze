json.extract! review, :id, :body, :rating
json.updatedAt review.updated_at
json.bookingId review.booking_id
json.authorId review.author_id
json.authorName review.author.first_name
