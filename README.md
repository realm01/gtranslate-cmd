gtranslate-cmd
--------------

This is a command line tool for translating text using the [Google Translator](https://translate.google.com "Google Translator"). The way this is done is very primitive, because it uses PhantomJS to load the page and then beautifulsoup to filter the correct HTML tags. The reason for this is that google uses AJAX to postload the translated text, so it is required to use a browser which executes javascript. (python-requests cannot do this and the official google translate API is a paid service.)

### Installation
```sh
# PhandomJS
$ npm install

# selenium and beautifulsoup
$ pip install -r requirements.txt
```

### Usage
```sh
# translate to russian
$ translate -d ru 'Hi, how are you?'

# translate <file> to french
$ cat <file> | translate -d fr

# show all options
$ translate --help
```

License
-------
>Copyright (c) 2016 Anastassios Martakos
>
>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.