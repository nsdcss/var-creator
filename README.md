# grunt-lessvarfile

> Create less variable files looking for local variables defined in LESS-files.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lessvarfile --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lessvarfile');
```

## The "lessvarfile" task

### Overview
In your project's Gruntfile, add a section named `lessvarfile` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  lessvarfile: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.alignAt
Type: `Int`
Default value: `40`

#### options.sectionsmap
Type: `Object`
Default value: 
```js
{
  'c': 'Colors',
  's': 'Spacing',
  't': 'Typo'
}
```


### Usage Examples

#### Default Options

```js
grunt.initConfig({
  lessvarfile: {
    options: {},
    files: {
      'tmp/variables--default.less': 'test/fixtures/**/*.less'
    }
  },
})
```

#### Custom Options

```js
grunt.initConfig({
  lessvarfile: {
    options: {
      alignAt: 1,
      sectionsmap: {
        'c': 'My Crazy Colors',
        's': 'My Spacing',
        't': 'My Typo'
      }
    },
    files: {
      'tmp/variables--custom.less': 'test/fixtures/**/*.less'
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_