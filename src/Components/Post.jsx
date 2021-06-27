import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import Data from '../assets/Data/Data.json'
import Loader from './Loader'
import PostItems from './PostItems'

const Post = () => {
    const [posts, setPosts] = useState(Data)
    useEffect(() => {
        setPosts(posts)
    }, [posts])
    return (
        <>
            <h3 style={{ margin: '3rem' }}> Latest Post</h3>
            <Row justify='center' align='middle'>
                {posts.length === 0 && <Loader />}
                {posts.map((post) => (
                    <PostItems post={post} key={post.id} />
                ))}
            </Row>
        </>
    )
}

export default Post
