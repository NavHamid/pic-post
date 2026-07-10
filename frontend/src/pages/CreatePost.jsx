import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function CreatePost() {
    const navigate = useNavigate()
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        try {
            setSubmitting(true)
            setError('')
            await axios.post('http://localhost:3000/create-post', formData)
            navigate('/feed')
        } catch (err) {
            console.error(err)
            setError('Could not create the post. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <section className="create-post-page reveal">
            <div className="panel-glow" aria-hidden="true" />

            <div className="create-post-copy">
                <h2>Craft Your Next Post</h2>
                <p>
                    Upload an image, add a short caption, and publish your moment with style.
                </p>
            </div>

            <form className="create-post-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="file" name="image" accept="image/*" required />

                <label htmlFor="caption">Caption</label>
                <textarea id="caption" name="caption" placeholder="Tell your story..." rows="4" required />

                {error ? <p className="state-message error">{error}</p> : null}

                <button type="submit" disabled={submitting}>
                    {submitting ? 'Publishing...' : 'Publish Post'}
                </button>
                <small>Tip: A crisp caption usually performs better than a long paragraph.</small>
            </form>
        </section>
    )
}

export default CreatePost