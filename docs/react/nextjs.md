### 首先要先理解什么是预渲染？

通俗点说就是不用javascript也能渲染，next.js会为每个页面生成html。
然后生成的html会跟当前页面最少的javascript产生交互，hydration（水合作用）

:::tip 如何知道一个页面是否用的预渲染？
可以禁用掉chrome的javascript功能，看看还能否渲染
:::

### 预渲染分为静态生成和服务端渲染

他们不同之处在于何时去渲染html，静态生成是在初次构建的时候一次性渲染出所需的html,服务端渲染是用户触发Page request才去请求html。

nextjs支持每个页面单独的预渲染的机制，也就是说你可以在这个页面选择静态生成，同时可以在那个页面选择SSR。

:::tip 如何选择？
[nextjs官网有很好的解释](https://www.nextjs.cn/learn/basics/data-fetching/two-forms)
:::

### next.js优势

1. 优化seo
2. 自动代码拆分
3. 100个页面也只加载当前页面的
4. 支持Sass，且任何css-in-js库
5. 支持预渲染
6. 客户端导航而不是浏览器默认导航(Link VS a href)

:::info 为什么Link要比a标签快？
每当Link组件出现在浏览器的视口中时，Next.js 都会在后台自动预取链接页面的代码。
:::
