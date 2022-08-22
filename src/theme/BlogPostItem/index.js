import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { ReactCusdis } from 'react-cusdis';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <ReactCusdis
        attrs={{
          host: 'https://cusdis.com',
          appId: 'e60db2f2-22fc-4f82-bbd9-d833bec20f69',
          pageId: 'PAGE_ID',
          pageTitle: 'PAGE_TITLE',
          pageUrl: 'PAGE_URL'
        }}
      />
    </>
  );
}