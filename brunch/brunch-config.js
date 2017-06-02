const autoprefixer = require('autoprefixer-stylus');
const ctr          = require('ctr').stylus;

module.exports = {
  /**
   * Public is build output path
   * Watched out dev dir
   * @type {Object}
   */
  paths: {
    public: 'build',
    watched: ['src']
  },
  /**
   * Watch/build asset loc
   * @type {Object}
   */
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  /**
   * Plugin set up for js and stylus
   * @type {Object}
   */
  plugins: {
    stylus: {
      // needs to be a sub to specify we want to
      // pull in the stylus export
      plugins: [
        // @important the "last 99 versions" if for testing purposes
        autoprefixer({browsers: 'last 99 versions'}),
        ctr()
      ]
    },
    babel: {
      presets: ['es2015']
    }
  }
};
