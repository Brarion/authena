const { createProxyMiddleware } = require('http-proxy-middleware')

const backendUrl = 'http://192.168.199.132:8090'

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: backendUrl,
      changeOrigin: true,
      secure: false,
    }),
    createProxyMiddleware('/oauth', {
      target: backendUrl,
      changeOrigin: true,
      secure: false,
    })
  )
}
