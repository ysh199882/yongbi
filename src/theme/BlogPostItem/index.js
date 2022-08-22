import React,{useEffect,useState} from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { ReactCusdis } from 'react-cusdis';

export default function BlogPostItemWrapper(props) {
  const [pageUrl,setPageUrl] = useState();
  
  useEffect(() => {
    setPageUrl(window.location.href)
  }, []);

  return (
    <>
      <BlogPostItem {...props} />
      <div style={{marginBottom:'10px',textIndent:'3px'}}>评论:</div>
      <ReactCusdis
        attrs={{
          host: 'https://cusdis.com',
          appId: 'e60db2f2-22fc-4f82-bbd9-d833bec20f69',
          pageId: {pageUrl},
          pageTitle: {pageUrl},
          pageUrl: {pageUrl},
        }}
        lang = 'zh-cn'
      />
    </>
  );
}