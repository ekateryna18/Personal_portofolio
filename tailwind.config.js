module.exports = {
    plugins: [
      require('taos/plugin')
    ],
  }
module.exports = {
    safelist: [
        '!duration-[0ms]',
        '!delay-[0ms]',
        'html.js :where([class*="taos:"]:not(.taos-init))'
    ]
}
module.exports = {
    content: {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ''),
      files: ['./src/*.{html,js}'],
    },
  }