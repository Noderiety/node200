"use strict";
require('traceur-source-maps').install(require('traceur'));
var Writable = require('stream').Writable;
var writableStream = new Writable;
writableStream._write = (function(chunk, enc, next) {
  process.stdout.write(String(chunk));
  next();
});
process.stdin.pipe(writableStream);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmVhbXNfY3VzdG9td3JpdGUuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxBQUFDLENBQUMscUJBQW9CLENBQUMsUUFBUSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUMsQ0FBQztFQUFLLENBQUEsUUFBTyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsUUFBTyxDQUFDLFNBQVM7RUFDL0YsQ0FBQSxjQUFhLEVBQUksSUFBSSxTQUFPO0FBR2hDLGFBQWEsT0FBTyxJQUFJLFNBQUMsS0FBSSxDQUFHLENBQUEsR0FBRSxDQUFHLENBQUEsSUFBRyxDQUFNO0FBQzVDLFFBQU0sT0FBTyxNQUFNLEFBQUMsQ0FBQyxNQUFLLEFBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFBO0FBQ2xDLEtBQUcsQUFBQyxFQUFDLENBQUE7QUFDUCxDQUFBLENBQUE7QUFFQSxNQUFNLE1BQU0sS0FBSyxBQUFDLENBQUMsY0FBYSxDQUFDLENBQUE7QUFDakMiLCJmaWxlIjoic3RyZWFtc19jdXN0b213cml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7bGV0IFdyaXRhYmxlID0gcmVxdWlyZSgnc3RyZWFtJykuV3JpdGFibGVcbmxldCB3cml0YWJsZVN0cmVhbSA9IG5ldyBXcml0YWJsZVxuXG4vLyBJbXBsZW1lbnQgdGhlIF93cml0ZSBmdW5jdGlvbiB0byBjb25zdW1lIGRhdGFcbndyaXRhYmxlU3RyZWFtLl93cml0ZSA9IChjaHVuaywgZW5jLCBuZXh0KSA9PiB7XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKFN0cmluZyhjaHVuaykpXG4gIG5leHQoKVxufVxuXG5wcm9jZXNzLnN0ZGluLnBpcGUod3JpdGFibGVTdHJlYW0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=