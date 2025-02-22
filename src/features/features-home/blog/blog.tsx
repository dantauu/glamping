import BlogCard from '@/shared/ui/blog-card/blog-card'
import style from './blog.module.scss'

const Blog = () => {
    return (
        <div className="">
            <div className={style.title}>
                <h1 className={style.titleInner}>Блог о путешествии</h1>
            </div>
            <BlogCard />
            <div className={style.button}>
                <div className="">
                    <p className={style.buttonText}>Смотреть все cтатьи</p>
                </div>
                <div className={style.arrow}>
                    <svg className={style.arrowInner}
						width='16'
						height='14'
						viewBox='0 0 16 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15 7L2 7M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
                </div>
            </div>
        </div>
    )
}

export default Blog