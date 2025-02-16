import ReviewsButtons from "@/intities/intities-personal-account-lk/buttons-reviews/buttons-reviews"
import RenderReviews from "@/intities/intities-personal-account-lk/render-reviews/render-reviews"
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