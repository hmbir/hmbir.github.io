## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## npm

### all

`less、less-loader、script-loader、`
`vue-router、axios、`

element-ui、echarts、file-saver+xlsx、

```js
npm uninstall element-ui
npm uninstall echarts
npm uninstall file-saver
npm uninstall xlsx
```

echart6.51、element-ui4.4、xlsx+file2

### element-ui

npm i element-ui -S

### vue-router 

npm install vue-router@4

### less-loader

// npm install less-loader@5.0.0 --save-dev 错误
npm install less less-loader --save-dev

### aplayer

1. 安装
    npm install @moefe/vue-aplayer --save
   npm install hls.js --save

2. 引入main.js
    import APlayer from '@moefe/vue-aplayer'
   Vue.use(APlayer);

 3. 使用
     ` <aplayer :audio="audio" :lrcType="3" ref="aplayer"/>`

 4. 卸载
npm uninstall hls.js
npm uninstall @moefe/vue-aplayer

### xlsx

npm install xlsx

### live-2d

npm uninstall vue-live2d

不是hexo
npm install --save hexo-helper-live2d
npm uninstall hexo-helper-live2d

## Problem

### 打不开

GitHub打不开的解决方案：
1. ping github.com：[20.205.243.166]
2. 复制到桌面修改，改完了再复制回去并选择替换掉原来的文件（或者管理员运行资源管理器："C:\Windows\explorer.exe"）
   C:\Windows\System32\drivers\etc\hosts在最下面粘贴：20.205.243.166 github.com
3. Windows修改完映射文件，打开cmd输入ipconfig/flushdns刷新dns缓存
4. 链接：[GitHub打不开的解决方案](https://blog.csdn.net/weixin_43804496/article/details/131475204)

### 404

vue项目部署到github页面报错：404
原因：单页应用部署在 Github Pages 后 刷新 404
解决办法：拷贝一份打包后的 index.html 重命名成 404.html 即可

### 存储

手机的sessionstorage失效
https://www.cnblogs.com/zhoufuwei/p/7837858.html
普通用户session,管理员local

### 地图403

打包后在index.html页面<meta charset="utf-8">后面加入：

```html
<meta name="referrer" content="no-referrer">
```
## 打包

1. 在index.html新增代码
<meta name="referrer" content="no-referrer">

2. 复制index.html为404.html
3. 上传
   1. 删除ir
   2. 创建ir
   3. page修改为ir











