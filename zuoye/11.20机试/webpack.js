var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: { //入口文件
		main: './src/main.js'
	},
	mode: 'production', //打包模式
	output: { //输出
		filename: '[name].js', //输出的名字
		path: path.resolve(__dirname, './dist'), //输出的地址
		publicPath: '/' //代理路径
	},
	devServer: { //热更新
		//		contentBase: 'dist',  //服务器默认地址
		overlay: true, //报错输出到页面
		//		host: '172.20.10.10'
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	plugins: [
		// 请确保引入这个插件！
		new VueLoaderPlugin()
	],
	module: { //配置加载器
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
				]
			},
			{
				test: /\.html$/,
				use: [{
						loader: 'file-loader',
						options: {
							name: '[name].html'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name]-[hash].[ext]'
					}
				}]
			}
		]
	}
}