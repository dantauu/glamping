import ReviewsButtons from "@/entities/entities-personal-account-lk/buttons-reviews/buttons-reviews"
import RenderReviews from "@/entities/entities-personal-account-lk/render-reviews/render-reviews"
import { RenderReviewsProvider } from "@/providers/render-reviews-context/render-reviews-context"



const Reviews = () => {
    return (
			<div className='container'>
				<RenderReviewsProvider>
					<ReviewsButtons />
					<RenderReviews />
				</RenderReviewsProvider>
			</div>
		)
}

export default Reviews