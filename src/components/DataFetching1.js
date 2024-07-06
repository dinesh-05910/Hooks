import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetching1 = () => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [posts,setPosts] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then( res => {
            setLoading(false);
            setPosts(res.data);
            setError(false);
        })
        .catch(error => {
            setLoading(false);
            setPosts({});
            setError('Something went wrong!');
        })
    }, [])

  return (
    <div>
        {loading? 'Loading':posts.title}
        {error? error: null}
    </div>
  )
}

export default DataFetching1