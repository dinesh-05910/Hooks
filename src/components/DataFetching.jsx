import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [posts,setPosts] = useState({});
    const [number,setNumber] = useState(1);
    const [clickId, setClickId] = useState(1);
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${clickId}`) 
        .then(res => {
            console.log(res);
            setPosts(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[clickId]);

    const handleClick = () => {
        setClickId(number);
    }
    
  return (
    <div>
        <input type="text" value={number} onChange={e => setNumber(e.target.value)}></input>
        <button onClick={handleClick}>Fetch Data</button>
       {/* {
        posts.map(post => <li key={post.id}>{post.title}</li>)
       } */}
       <h1>{posts.title}</h1>
    </div>
  )
}

export default DataFetching