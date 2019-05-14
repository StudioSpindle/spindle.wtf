module.exports = {
  target: 'serverless',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/post': { page: '/posts' }
    };
  }
};
