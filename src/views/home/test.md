## 环境主要依赖版本
- webpack@4.8.1
- webpack-cli@2.1.3
- webpack-dev-server@3.1.4
- react@16.3.2
- babel-core@6.26.3
- babel-preset-env@1.6.1
- bable-preset-react@6.24.1

## webpack安装及配置
### 1. 起步

新建项目目录，初始化npm，新建开发源目录

```
mkdir webpack-react && cd webpack-react
npm init -y
mkdir src
```
### 2.webpack-cli
> webpack从4.x版本开始，需要同时安装webpack，webpack-cli(此工具用于在命令行中运行webpack)。

```
npm install webpack webpack-cli --save-dev
```

### 3.wepback配置文件
在项目根目录新建webpack.config.js文件，此文件为webpack运行核心文件。

#### webpack.config.js 基本配置
```
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',                           // 入口文件
    output: {                                             // webpack打包后出口文件
        filename: 'app.js',                             // 打包后js文件名称
        path: path.resolve(__dirname, 'dist')    // 打包后自动输出目录
    }
}
```
package.json 文件 scripts配置
```
"scripts": {
    "build": "webpack"
}
```
此时在命令行运行npm run build，就能执行webpack了，webpack会自动去找项目根目录里的webpack.config.js文件，执行打包。
```
npm run build
// webpack打包后的项目
├── dist
│   └── app.js             // 打包后的app.js
├── package.json
├── src
│   └── index.js           // 源目录入口文件
└── webpack.config.js
```
#### webpack.config.js module相关配置
webpack 视所有文件都为模块，图片，css文件，字体等静态资源都会打包进js文件，所以会需要用到loader文件，更多Loaders可以查询[网址](href="https://www.webpackjs.com/loaders/")，接下来我们安装一些必要的Loader文件。
```
npm install style-loader css-loader url-loader --save-dev
```
webpack.config.js加入module模块
```
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['url-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['url-loader']
			}
		]
	}
}
```
引入loader后，就可以在你的src/index.js文件import你想引入的css文件或者其他静态资源。
```
cd src && touch main.css
```
src/index.js 文件引入css
```
import "./main.css";
```
#### webpack.config.js plugins配置
主要的js文件和静态文件都能成功打包成一个js文件后，我们需要把这个js文件放到html文件里，webpack插件***html-webpack-plugin***就是干这个事儿的，它能自动生成一个html文件并把我们打包好的js文件放入html。
```
npm install html-webpack-plugin --save-dev
```
webpack.config.js 配置plugins
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入插件

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['url-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['url-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({title: 'production'})		// 配置plugin
	]
};
```
执行npm run build后，我们可以看到dist目录多出一个index.html文件。
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>name</title>
  </head>
  <body>
 // 打包后的app.js已经被自动插入了html文件
  <script type="text/javascript" src="app.js"></script></body>
</html>
```
到这里，webpack最简单最基本的需求已经配置完毕。
此时项目结构为：
```
├── dist                        // 生产目录
│   ├── app.js
│   └── index.html
├── package.json
├── src                        // 源目录
│   ├── index.js
│   └── main.css
└── webpack.config.js
```

## React 的webpack配置
#### 安装react
```
npm install react react-dom --save
```
#### 安装react，wepback转换依赖
React组件由JSX组成，浏览器无法识别JSX，需要babel进行转换。
- babel-croe 为babel核心文件
- babel-preset-env 将ES6转义成ES5
- babel-preset-react 将JSX转义成js
- babel-loader webpack的babe转换

```
npm install babel-core babel-preset-env babel-preset-react babel-loader --save-dev
```

#### .babelrc配置文件
在项目根目录下新建.babelrc文件，此文件为bable核心配置，babel会自动在项目根目录下识别。
```
// .babelrc
{
	"presets": ["env", "react"]
}
```
#### webpack babel-loader 配置
```
// 在webpack.config.js 的modules.rules中加入此配置
{
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader'
	}
}				    
```
#### html-webpack-plugin 模板配置
我们知道react需要获取页面一个根元素，然后render才会生效，我们可以新建一个html文件，让html-webpack-plugin插件基于这个文件来进项打包。

所以我们在根目录下新建一个html文件，以此文件作模板。
```
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
        // react需要的渲染根元素
	<div id="root"></div>
</body>
</html>
```
此时webpack.config.js配置:
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['url-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['url-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'production',
			template: './index.html'    // 模板文件位置
		})		
	]
};
```
#### 书写React，运行webpack
```
// src/index.js
import React from 'react';
import ReactDom from 'react-dom';

import './main.css'

ReactDom.render(
	<h1>hello world</h1>,
	document.getElementById('root')
);
```
运行npm run build，生成dist目录，打开dist目录中的index.html文件，可以发现浏览器已正常渲染"hello world"。

## dev环境热更新配置
react的wepack完成以后，是不是发现每修改一次代码，想看到效果，得重新打包一次才行。webpack-dev-server配置可以帮助我们实现热更新，在开发环境解放我们的生产力。
#### 安装webpack-dev-server
```
npm install webpack-dev-server  --save-dev
```
#### webpack.config.js 配置
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['url-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['url-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'production',
			template: './index.html'    
		}),
		// hot 检测文件改动替换plugin
		new webpack.NamedModulesPlugin(),      
		new webpack.HotModuleReplacementPlugin()		
	],
       // webpack-dev-server 配置
	devServer: {
		contentBase: './dist',
		hot: true
	},
};
```

#### 运行webpack-dev-server
在 package.json 文件 加入 scripts 配置：
```
"scripts": {
  "build": "webpack",
  "dev": "webpack-dev-server --open --mode development"  // webpack-dev-server
},
```
命令行运行 npm run dev

可以在浏览器中输入localhost:8080 内容即为dist目录下的index.html内容。修改src/index.js中的内容或者依赖，即实时在浏览器热更新看到。

至此，react的webpack的基础开发环境已全部配置完毕。