// .pipe() chaining
a.pipe(b).pipe(c).pipe(d)

// Equivalent to
a.pipe(b)
b.pipe(c)
c.pipe(d)

var a, b, c, d
