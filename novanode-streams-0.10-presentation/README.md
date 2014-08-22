# Streaming to You Live: The Node 0.10 Streams API

These are the slides from my NodeJS Streams talk at
[NovaNode](http://www.meetup.com/Nova-Node/) on 4/2/2013 based on my
experiences writing an [unzip](https://github.com/nearinfinity/node-unzip)
parser with the Node 0.10
["Streams2" API](http://blog.nodejs.org/2012/12/20/streams2/). Topics
included event-driven programming in Node, using Streams, and writing
custom Streams. I also explored some of the conceptual underpinnings
required to solve streaming problems, including buffering and
backpressure.

## View the Slides

http://evanoxfeld.github.com/novanode-streams-0.10-presentation

## Node Modules Referenced
The unzip and match-stream modules are streaming libraries that have
been written using the "Streams2" API. Both modules depend on the
[readable-stream](https://github.com/isaacs/readable-stream) module for
Node 0.8 compatibility. Install unzip and match-stream using NPM or see
the links to the source code below:

* [unzip](https://github.com/nearinfinity/node-unzip)
* [match-stream](https://github.com/EvanOxfeld/match-stream)

## Reveal.js

Reveal.js is MIT licensed and copyright (C) 2013 Hakim El Hattab, http://hakim.se

## License

(The MIT License)

Copyright (c) 2013 Evan Oxfeld

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
