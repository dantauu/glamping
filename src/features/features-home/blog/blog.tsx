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
                    <p className="">Смотреть все cтатьи</p>
                </div>
                <div className="">
                    <img className={style.img} src={'/assets/img/arrow-black.svg'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Blog