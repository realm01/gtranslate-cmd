gtranslate-cmd
--------------

This is a command line tool for translating text using the [Google Translator](https://translate.google.com "Google Translator").

There are two versions:

The nodejs version, which is faster and has very light dependencies and the python version which is slow and has heavy dependencies. In the nodejs version the [Google Translate API NPM Module](https://github.com/matheuss/google-translate-api) is used and in the python version [PhantomJS](http://phantomjs.org/) is used to gather the translated text.

### Installation
Python version:

```sh
$ cd python-implementation

# PhandomJS
$ npm install

# selenium and beautifulsoup
$ pip install -r requirements.txt
```

Nodejs version:

```sh
$ cd nodejs-implementation
$ npm install
```

### Usage
The python and the nodejs version work the same except with one difference: in the nodejs version you have to put `-t` before the text you want to translate.

```sh
# translate to russian
#
# python
$ translate -d ru 'Hi, how are you?'

# nodejs
$ translate -d ru -t 'Hi, how are you?'

# translate <file> to french
$ cat <file> | translate -d fr

# show all available languages
$ translate --languages

# show all options
$ translate --help
```

Used Libraries
--------------
For the nodejs version:
 - [Google Translate API NPM Module](https://github.com/matheuss/google-translate-api)
 - [argsparse for nodejs](https://www.npmjs.com/package/argparse)

For the python version: (very heavy dependencies)
 - [PhantomJS](http://phantomjs.org/)
 - [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/)
 - [Requests](http://docs.python-requests.org/en/master/)

License
-------
>Copyright (c) 2016 Anastassios Martakos
>
>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
