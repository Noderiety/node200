# Streams in NodeJS

## Goals
* Explore event-driven programming in NodeJS
    * More than events & callbacks
* Learn to use Streams
* Learn to write Streams

## Outline
* What is NodeJS?
* What is an I/O bound problem?
* Overview - Explore this class of problem in NodeJS
* Streams - No magic
    * Code example - unzip stream.pipe
				* Define types of Streams
				* Compare to unix pipes
    * Code examples - build up to what stream.pipe does for you
				* Synchronous read (e.g. a whole file)
        * Async
        * Event Emitter w/ on 'data'
            * Event emitter / on 'data' pattern across node versions
* How did Node get from emitting 'data' events to Streams?
    * Buffering & backpressure
    * util.pump & its issues
        * Other events e.g. error, no customization, limited API
    * Show unzip stream.pipe again
        * API - r.pause(), r.resume(), r.emit(end)
        * API - w.write() return false until buffer flushed, w.on('drain')
* Problems with Streams in Node 0.8
    * Demo old unzip
    * Explore buffering, back-pressure, and spew streams
* Streams of Tomorrow Finally Here
    * Changes to stream.Readable & stream.Writable
    * Duplex, Transform, PassThrough
    * Demo lastest unzip
    * MatchStream
* Conclusion
* References

