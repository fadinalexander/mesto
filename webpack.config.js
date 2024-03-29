const path = require('path') //подключаем path к конфигу webpack
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключим плагин HtmlWebpackPlugin к конфигу webpack
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключим плагин который будет удалять содержимое папки dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //// подключим плагин mini-css-extract-plugin

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './src/pages/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '' //свойство для обновления путей внутри CSS- и HTML-файлов
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
        open: true // сайт будет открываться сам при запуске npm run dev
    },
    module: {
        rules: [ // rules — это массив правил
          // добавим в него объект правил для бабеля
          {
            // регулярное выражение, которое ищет все js файлы
            test: /\.js$/,
            // при обработке этих файлов нужно использовать babel-loader
            use: 'babel-loader',
            // исключает папку node_modules, файлы в ней обрабатывать не нужно
            exclude: '/node_modules/'
          },
          //добавим массив правил для файлов
          {
            // регулярное выражение, которое ищет все файлы с такими расширениями
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource'
          },
          //правило для обработки css-файлов
          {
            // применять это правило только к CSS-файлам
            test: /\.css$/,
            // при обработке этих файлов нужно использовать
            // MiniCssExtractPlugin.loader и css-loader
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { importLoaders: 1}
              },
              'postcss-loader'
            ]
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' //укажем путь к файлу index.html
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin() // подключение плагина для объединения файлов

    ]


}