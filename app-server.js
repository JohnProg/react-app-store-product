import path from 'path'
import express from 'express'
import webpack from 'webpack'
import config from './webpack.config.js'
import open from 'open'

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {noInfo: true, publicPath: config.output.publicPath}))

app.use('/images',express.static(__dirname + '/app/images'))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'))
});

const port = 7770
const host = 'localhost'

app.listen(port, host, (err) => {
  if (err) {
    console.log(err)
    return
  }
  open(`http://${host}:${port}`);
  console.log(`Listening at http://${host}:${port}`);
});


