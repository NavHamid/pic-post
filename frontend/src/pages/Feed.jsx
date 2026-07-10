import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((response) => {
                setPosts(response.data.posts)
                setError('')
            })
            .catch(() => {
                setError('Unable to load posts right now.')
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <section className="feed-page">
            <div className="feed-hero reveal">
                <h2>Fresh Stories, Clean Visuals</h2>
                <p>Scroll through the latest creative moments from your community.</p>
                <Link className="cta-link" to="/create-post">Upload a new post</Link>
            </div>

            {loading ? <p className="state-message">Loading posts...</p> : null}
            {error ? <p className="state-message error">{error}</p> : null}

            {!loading && !error ? (
                posts.length > 0 ? (
                    <div className="post-grid">
                        {posts.map((post) => (
                            <article className="post-card reveal" key={post._id}>
                                <div className="post-media">
                                    <img src={post.image} alt={post.caption} />
                                </div>
                                <p>{post.caption}</p>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="empty-state reveal">
                        <h3>No posts yet</h3>
                        <p>Be the first one to share something beautiful.</p>
                    </div>
                )
            ) : null}
        </section>
    )
}

export default Feed
