/**
 *
 * Web前端自动化构建调试 配置文件
 */
module.exports = {
  // 目录
  'paths': {
    'src': 'app',
    'vendor': 'vendor',
    'public': 'public'
  },
  // 构建、调试相关的任务
  'chores': {
    'bundles': {
      'es5-shim.js': {
        'version': '4.5.2',
        'url': 'http://cdn.bootcss.com/es5-shim/4.5.2/es5-shim.js'
      },
      'es5-sham.js': {
        'version': '4.5.2',
        'url': 'http://cdn.bootcss.com/es5-shim/4.5.2/es5-sham.js'
      },
      'pokeball.js': {
        'version': 'master',
        'url': 'http://registry.terminus.io/packages/pokeball/2.0.0/pokeball.js'
      },
      'moonball.css': {
        'version': 'master',
        'url': 'http://registry.terminus.io/packages/pokeball/zcy/moonball.css'
      },
      '../app/styles/pokeball/_variables.scss': {
        'version': 'master',
        'url': 'http://registry.terminus.io/packages/theme/master/moonball.scss'
      },
      'i18n.js': {
        'version': '3.0.0.rc11',
        'url': 'http://registry.terminus.io/packages/i18n/3.0.0.rc11/i18n.js'
      },
      'json2.js': {
        'version': '0.1.0',
        'url': 'http://registry.terminus.io/packages/json2.js/0.1.0/json2.js'
      },
      'bs-plugins.js': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/d0409/web-solrock-vendor/raw/master/bs-plugins.js'
      },
      'jstree.js': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/d0409/web-solrock-vendor/raw/master/jstree.js'
      },
      'select2.min.css': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/d0409/web-solrock-vendor/raw/master/select2.min.css'
      },
      'select2.full.min.js': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/d0409/web-solrock-vendor/raw/master/select2.full.min.js'
      },
      'select2.zh-CN.js': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/d0409/web-solrock-vendor/raw/master/select2.zh-CN.js'
      },
      'aliyun-sdk.js': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/d0409/web-solrock-vendor/raw/master/aliyun-sdk.js'
      },
      'oss-js-upload.js': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/d0409/web-solrock-vendor/raw/master/oss-js-upload.js'
      },
      'echarts.common.min.js': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/d0409/web-solrock-vendor/raw/master/echarts.common.min.js'
      },
      'utils.js': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/ZCY/zcy-web-lib/raw/master/components/Utils/utils.js'
      },
      'jQuery.print.js': {
        'version': 'master',
        'url': 'https://git.cai-inc.com/d0409/web-solrock-vendor/raw/master/jQuery.print.js'
      }
    },
    // 拷贝
    'copy': {
      'images': {
        'globs': '/images/other-images/*',
        'base': '/images', // 相对 paths.src 的路径,可选
        'dest': '/assets/images' // 相对 path.public 路径,可选
      },
      'files': {
        'globs': '/files/white_list',
        'base': '/files',
        'dest': '/'
      },
      'download': {
        'globs': '/download/**/*',
        'base': '/download',
        'dest': '/assets/download'
      },
      'files-yaml': {
        'globs': '/files/**/*.yaml',
        'base': '/files',
        'dest': '/'
      },
      'files-everstone': {
        'globs': '/files/*.yml',
        'base': '/files',
        'dest': '/'
      },
      'font': {
        'globs': '/styles/iconfont/iconfont.{eot,svg,ttf,woff}',
        'base': '/styles',
        'dest': '/assets/styles'
      },
      'views': {
        'globs': '/views/**/*.hbs',
        'base': '/views',
        'dest': '/views'
      },
      'component': {
        'globs': '/components/**/view.hbs',
        'base': '/components',
        'dest': '/components'
      },
      'other_component': {
        'globs': '/components/**/other_templates/*.hbs',
        'base': '/components',
        'dest': '/components'
      }
    },
    // 编译模板文件
    'compile': {
      'views': {
        'globs': '/views/**/*.erb',
        'base': '/views',
        'dest': '/views',
        'context': {
          tips: false
        }
      },
      'files': {
        'globs': '/files/**/*.erb',
        'base': '/files',
        'dest': '/',
        'context': {
          photohref: 'http://www.zcy.gov.cn',
          main: 'http://www.zcy.gov.cn',
          login: 'http://127.0.0.1:8001/login',
          mainHref: 'http://www.zcy.gov.cn'
        }
      }
    },
    // 处理handlebars静态模板
    'precompile': {
      'templates': {
        'dest': '/assets/scripts/templates.js',
        'globs': '/components/**/templates/*.hbs'
      }
    },
    // 编译coffeeScript,ES6,合并JavaScript
    'concatScript': {
      'app': {
        'globs': '/{scripts,components}/**/*.{js,jsx,coffee,es6}',
        'dest': '/assets/scripts/app.js',
        'definition': true, // 可选 ,默认false
        'wrapper': true, // 可选 ,默认false
        'order': ['...', 'app/scripts/app.coffee'] // 相对于运行脚本的路径
      },
      'vendor': {
        'globs': '../vendor/{bs-plugins,es5-sham,es5-shim,i18n,json2,jstree,moonball,pokeball,select2.full.min,select2.zh-CN,jQuery.print,timepicker,utils}.{js,jsx,coffee,es6}',
        'dest': '/assets/scripts/vendor.js',
        'definition': false, // 可选 ,默认false
        'wrapper': false, // 可选 ,默认null
        'order': ['vendor/es5-shim.js', 'vendor/es5-sham.js', 'vendor/pokeball.js', '...']
      },
      'upload': {
        'globs': '../vendor/{aliyun-sdk,oss-js-upload}.{js,jsx,coffee,es6}',
        'dest': '/assets/scripts/upload.js',
        'definition': false,
        'wrapper': false,
        'order': ['...']
      }
    },
    // 编译 Sass文件,合并CSS文件
    'concatStyle': {
      'app': {
        'globs': '/**/*.{css,scss,sass}',
        'dest': '/assets/styles/app.css',
        'order': ['...', 'app/components/common/header/view.scss']
      },
      'vendor': {
        'globs': '../vendor/**/*.{css,scss,sass}',
        'dest': '/assets/styles/vendor.css',
        'order': ['vendor/moomball.css', 'vendor/base.css', '...']
      }
    },
    // 打包文件
    'tar': {
      'componentVendor': {
        'globs': '/components/common/{header,sidebar}/*',
        'dest': '/components-vendor.tar.gz'
      }
    },
    // 雪碧图处理
    'sprite': {
      'icons': {
        'globs': '/images/*.png',
        'outImage': '/assets/images/icons.png',
        'outCss': '/assets/styles/icons.css',
        'imageUrl': '/assets/images/icons.png',
        'templateSrc': '/styles/icons.mustache'
      }
    },
    // cache 版本控制
    'revision': {
      'assets': {
        'globs': '/assets/{scripts/*.js,images/*.png,styles/*.css}',
        'dest': '/manifest.json'
      }
    },
    // cache 版本控制 相关url替换
    'revisionReplace': {
      'assets': {
        'globs': '/{views/layout.hbs,assets/styles/app-*.css}',
        'prefix': '',
        'manifest': '/manifest.json'
      }
    },
    // eslint
    'eslint': {
      'globs': '',
      'config': ''
    },
    // scsslint
    'scsslint': {
      'globs': '',
      'config': ''
    }
  },
  // 调试 Web服务相关的配置
  'server': {
    'port': '8081',
    'dataFilePatterns': [
      'test/data/*.js'
    ],
    'extraHelpers': [
      'test/helper/helpers.js'
    ],
    'proxyTable': {
      '/api/district/getDistrictTree': {
        'target': 'http://dev.internal:8012/',
        'changeOrigin': true
      }
    }
  },
  // 不同环境的配置选项
  'environments': {
    'dev': {
      'compile': {
        'views': {
          'context': {
            'tips': false
          }
        },
        'files': {
          'context': {
            'photohref': 'http://www.zcy.gov.cn',
            'main': 'http://www.zcy.gov.cn',
            'login': 'http://127.0.0.1:8001/login',
            'mainHref': 'http://www.zcy.gov.cn'
          }
        }
      },
      'revision': false,
      'postCss': false,
      'uglify': false
    },
    'demo': {
      'compile': {
        'views': {
          'context': {
            'tips': false
          }
        },
        'files': {
          'context': {
            'photohref': 'http://demo.zcy.gov.cn',
            'main': 'http://demo.zcy.gov.cn',
            'login': 'http://login.demo.zcy.gov.cn/login',
            'mainHref': 'http://demo.zcy.gov.cn'
          }
        }
      },
      'revision': true,
      'postCss': true,
      'uglify': true
    },
    'production': {
      'compile': {
        'views': {
          'context': {
            'tips': false
          }
        },
        'files': {
          'context': {
            'photohref': 'http://www.zcy.gov.cn',
            'main': 'http://www.zcy.gov.cn',
            'login': 'http://login.zcy.gov.cn/login',
            'mainHref': 'http://www.zcy.gov.cn'
          }
        }
      },
      'revision': true,
      'postCss': true,
      'uglify': true
    }
  }
}
