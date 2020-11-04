import React from 'react'

const Post = ({ title, content, createdAt, modifiedAt }) => {
	return (
		<div className="home__blog_post">
			<p className="home__blog_post_title">{title}</p>
			<p className="home__blog_post_content">{content}</p>
			<div className="home__blog_post_footer">
				<p className="home__blog_post_footer_createdAt">{createdAt}</p>
				<p className="home__blog_post_footer_modifiedAt">
					{modifiedAt}
				</p>
			</div>
		</div>
	)
}

export default Post
