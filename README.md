# Github City Rankings Automated


![Logo](web/iconos/logo.png)


This project is a fork of [GitHub City Rankings](https://github.com/JJ/github-city-rankings) of [JJ](https://github.com/JJ)(witch is a fork of [Top GitHub Users](https://github.com/paulmillr/top-github-users) by [Paul Miller](http://paulmillr.com/))

## Usage

First, create the directories where data is going to be placed. You must to create it in the project folder (see config.json)

      +top-github-users-data
      |-- data
      |--formatted


Then, you have to put your keys in "keys" file. How I get this keys? [See this](https://developer.github.com/v3/oauth/)
```basH
export GH_ID=LONG_HEXA_number
export GH_SECRET=EVEN_LONGER_HEXA_number
```


Install `node.js` and `coffeescript`. You're better off if you install `nvm` and then proceed from there. Once node is installed,

```bash
# Global install coffeescript
npm install -g coffee-script
# Install deps. from package.json
npm install
```


Finally, you run it:
```
./ejecutar.sh
```

You have to serve "web" directory using a web server (like Apache or Nginx).


![Pantallazo](pantallazo.png)





## License

The MIT License (MIT)

Copyright (c) 2013,2014 Paul Miller (http://paulmillr.com/) JJ Merelo (http://jj.github.io) Israel Blancas (http://iblancasa.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
