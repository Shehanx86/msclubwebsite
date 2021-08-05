import React, { useEffect, useState } from 'react';
import BlogCard from '../../../component/BlogCard/BlogCard';
import './BlogListStyle.css';
import axios from 'axios';


const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dckalubowila25132')
      .then(res => {
        setPosts(res.data.items);
      }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className='blogListPolygonDiv'>
      <div className='past-event-container'>
        <h1 className='event-header'>Blogs List</h1>
        <div className='container-fluid '>
          <div className='row'>
            {posts.map((blog) => (
              <div className='col-lg-4 col-md-3 col-sm-12' key={blog}>
                <BlogCard
                  image={blog.thumbnail}
                  title={blog.title}
                  datetime={blog.pubDate}
                  link={blog.link}
                  tags={blog.categories}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>);
};

export default BlogList;
