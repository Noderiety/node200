"use strict";
require('traceur-source-maps').install(require('traceur'));
module.exports = (function(app) {
  app.get('/', (function(req, res) {
    return res.end('Hello world.');
  }));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7QUFBQyxLQUFLLFFBQVEsSUFBSSxTQUFDLEdBQUU7QUFDOUUsSUFBRSxJQUFJLEFBQUMsQ0FBQyxHQUFFLEdBQUcsU0FBQyxHQUFFLENBQUcsQ0FBQSxHQUFFO1NBQU0sQ0FBQSxHQUFFLElBQUksQUFBQyxDQUFDLGNBQWEsQ0FBQztFQUFBLEVBQUMsQ0FBQTtBQUNuRCxDQUFBLENBQUE7QUFBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7bW9kdWxlLmV4cG9ydHMgPSAoYXBwKSA9PiB7XG5cdGFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHJlcy5lbmQoJ0hlbGxvIHdvcmxkLicpKVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==