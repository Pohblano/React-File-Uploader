import config from './../config/config'
import webpack from 'webpack'
import webpackDevMiddleWare from 'webpack-dev-middleware'
import webpackHotMiddleWare from 'webpack-hot-middleware'
import webpackConfig from './../webpack.config.client'

const compile = (app) => {
  if(config.env === 'development'){
    const compiler = webpack(webpackConfig)
    const middleware = webpackDevMiddleWare(compiler, {
      publicPath : webpackConfig.output.publicPath,
      serverSideRender: true
    })
    app.use(middleware)
    // app.use(webpackDevMiddleWare(compiler))
    app.use(webpackHotMiddleWare(compiler))
  }
}

export default { compile }