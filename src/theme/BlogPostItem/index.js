import React,{useEffect,useState} from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { ReactCusdis } from 'react-cusdis';

export default function BlogPostItemWrapper(props) {
  const [pageUrl,setPageUrl] = useState();

  useEffect(() => {
    let url = window.location.href;
    let index = url.lastIndexOf("\/");
    let str = url.substring(index + 1,url.length);

    setPageUrl(str)
  }, []);

  return (
    <>
      <BlogPostItem {...props} />
      <ReactCusdis
        attrs={{
          host: 'https://cusdis.com',
          appId: 'e60db2f2-22fc-4f82-bbd9-d833bec20f69',
          pageId: {pageUrl},
          // pageTitle: {pageUrl},
          // pageUrl: {pageUrl},
        }}
        lang = 'zh-cn'
      />
    </>
  );
}