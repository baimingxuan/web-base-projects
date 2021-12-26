#### 1、使用 Yarn

```sh
yarn create vite
```

使用 NPM

```sh
npm init vite@latest
```

2、你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板

```sh
# npm 6.x
npm init vite@latest my-vue-app --template vue

# npm 7+, 需要额外的双横线：
npm init vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue
```

3、目前支持的模板预设如下：

|             JavaScript              |                TypeScript                 |
| :---------------------------------: | :---------------------------------------: |
| [vanilla](https://vite.new/vanilla) | [vanilla-ts](https://vite.new/vanilla-ts) |
|     [vue](https://vite.new/vue)     |     [vue-ts](https://vite.new/vue-ts)     |
|   [react](https://vite.new/react)   |   [react-ts](https://vite.new/react-ts)   |

4、安装vite-plugin-vue2

```sh
# npm
npm install vite-plugin-vue2 -D

# yarn
yarn add vite-plugin-vue2 -D
```

Vite.config.js中配置

```js
// vite.config.js
import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [
    createVuePlugin(/* options */)
  ],
}
```

5、安装vue2.x

```sh
yarn add vue@2.6.14
```

6、安装vue-template-compiler，编译Vue代码

```sh
yarn add vue-template-compiler
```

