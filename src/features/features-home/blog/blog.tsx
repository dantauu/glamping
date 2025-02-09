import BlogCard from '@/shared/ui/blog-card/blog-card'
import style from './blog.module.scss'

const Blog = () => {
    return (
        <div className="">
            <div className="">
                <h1>Блог о путешествии</h1>
            </div>
            <BlogCard />
        </div>
    )
}

export default Blog