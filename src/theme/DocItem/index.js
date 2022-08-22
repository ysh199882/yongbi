import React from 'react';
import DocItem from '@theme-original/DocItem';
import { ReactCusdis } from 'react-cusdis';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <div style={{marginBottom:'10px',textIndent:'3px'}}>评论:</div>
      <ReactCusdis
        attrs={{
          host: 'https://cusdis.com',
          appId: 'e60db2f2-22fc-4f82-bbd9-d833bec20f69',
          pageId: 'PAGE_ID',
          pageTitle: 'PAGE_TITLE',
          pageUrl: 'PAGE_URL'
        }}
        lang = 'zh-cn'
      />
    </>
  );
}
