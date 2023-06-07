import axios from "axios";
import { useEffect, useState } from "react";

const Test = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};
export default Test;
// Parent component
