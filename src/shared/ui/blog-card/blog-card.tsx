import { blogItems } from '../../../../public/data/data'
import style from './blog-card.module.scss'

const BlogCard = () => {
    return (
        <div className={style.blogCardWrapper}>
            {blogItems.map((item, index) => (
                <div key={index} className={style.blogCard}>
                    <div className={style.img}>
                        <img className={style.imgInner}
                         src={item.imgBack} alt="" />
                    </div>
                    <div className={style.contentContainer}>
                    <div className={style.likeCommentWrapper}>
                        <div className={style.likesInfoWrapper}>
                            <div className="">
                                <img src={item.imgLike} alt="" />
                            </div>
                            <div className={style.likeCount}>
                                <p className={style.likeCountInner}>
                                    {item.countLike}
                                </p>
                            </div>
                        </div>
                        <div className={style.commentInfoWrapper}>
                            <div className="">
                                <img src={item.imgComment} alt="" />
                            </div>
                            <div className={style.commentCount}>
                                <div className="">
                                    <p className={style.commentCountInner}>
                                        {item.countComment}
                                    </p>
                                </div>
                                <div className="">
                                    <p className={style.commentText}>
                                        {item.comment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.blogTitle}>
                        <p className={style.blogTitleInner}>
                            {item.title}
                        </p>
                    </div>
                    <div className={style.avatarNameWrapper}>
                        <div className={style.avatar}>
                            <img className={style.avatarInner} src={item.imgAvatar} alt="" />
                        </div>
                        <div className={style.nameSpecialWrapper}>
                            <div className={style.name}>
                                <p className={style.nameInner}>
                                    {item.name}
                                </p>
                            </div>
                            <div className={style.special}>
                                <p className={style.specialInner}>
                                    {item.special}
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogCard