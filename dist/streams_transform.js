"use strict";
require('traceur-source-maps').install(require('traceur'));
var fs = require('fs'),
    Transform = require('stream').Transform;
fs.createReadStream(__filename).pipe(new CapsLockStream).pipe(fs.createWriteStream(__filename + '_copy'));
function CapsLockStream() {
  var $__0 = this;
  this.__proto__ = Transform.call(this);
  this._transform = (function(data, encoding, done) {
    var $__1,
        $__2;
    {
      try {
        throw undefined;
      } catch ($i) {
        {
          $i = 0;
          for (; $i < data.length; $i++) {
            try {
              throw undefined;
            } catch (i) {
              {
                i = $i;
                try {
                  if (data[$traceurRuntime.toProperty(i)] >= 97 && data[$traceurRuntime.toProperty(i)] <= 122) {
                    ($__1 = data[$traceurRuntime.toProperty(i)], $__2 = $__1 & ~32, $traceurRuntime.setProperty(data, i, $__2), $__2);
                  }
                } finally {
                  $i = i;
                }
              }
            }
          }
        }
      }
    }
    $__0.push(data);
    done();
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmVhbXNfdHJhbnNmb3JtLmVzNi5qcyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0VBQUssQ0FBQSxFQUFDLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxJQUFHLENBQUM7QUFDN0UsWUFBUSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsUUFBTyxDQUFDLFVBQVU7QUFFekMsQ0FBQyxpQkFBaUIsQUFBQyxDQUFDLFVBQVMsQ0FBQyxLQUN6QixBQUFDLENBQUMsR0FBSSxlQUFhLENBQUMsS0FDcEIsQUFBQyxDQUFDLEVBQUMsa0JBQWtCLEFBQUMsQ0FBQyxVQUFTLEVBQUUsUUFBTSxDQUFDLENBQUMsQ0FBQTtBQUUvQyxPQUFTLGVBQWEsQ0FBQyxBQUFDOztBQUN2QixLQUFHLFVBQVUsRUFBSSxDQUFBLFNBQVEsS0FBSyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUE7QUFDcEMsS0FBRyxXQUFXLElBQUksU0FBQyxJQUFHLENBQUcsQ0FBQSxRQUFPLENBQUcsQ0FBQSxJQUFHOzs7Ozs7OzthQUN6QixFQUFBO2VBQUcsS0FBSSxDQUFBLElBQUcsT0FBTyxDQUFHLEtBQUU7Ozs7OztrQkFBRztBQUNwQyxxQkFBSSxJQUFHLENDWFEsZUFBYyxXQUFXLEFBQUMsQ0RXaEMsQ0FBQSxDQ1hrRCxDQUFDLEdEVzdDLEdBQUMsQ0FBQSxFQUFLLENBQUEsSUFBRyxDQ1hULGVBQWMsV0FBVyxBQUFDLENEV2YsQ0FBQSxDQ1hpQyxDQUFDLEdEVzVCLElBQUUsQ0FBRztBQUNwQywwQkNaSixDRFlJLElBQUcsQ0NaVyxlQUFjLFdBQVcsQUFBQyxDRFluQyxDQUFBLENDWnFELENBQUMsUURZM0QsT0FBVyxFQUFDLEVBQUMsQ0VaakIsQ0FBQSxlQUFjLFlBQVksQUFBQyxDRll2QixJQUFHLENBQUUsRUFBQSxPRVhxQyxRRlc3QjtrQkFDZDtBQUFBLGdCQUNEOzs7Ozs7Ozs7QUFDQSxZQUFRLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQTtBQUNkLE9BQUcsQUFBQyxFQUFDLENBQUE7RUFDTixDQUFBLENBQUE7QUFDRDtBQUNBIiwiZmlsZSI6InN0cmVhbXNfdHJhbnNmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtsZXQgZnMgPSByZXF1aXJlKCdmcycpXG5cdCwgVHJhbnNmb3JtID0gcmVxdWlyZSgnc3RyZWFtJykuVHJhbnNmb3JtXG5cbmZzLmNyZWF0ZVJlYWRTdHJlYW0oX19maWxlbmFtZSlcblx0LnBpcGUobmV3IENhcHNMb2NrU3RyZWFtKVxuXHQucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbShfX2ZpbGVuYW1lKydfY29weScpKVxuXG5mdW5jdGlvbiBDYXBzTG9ja1N0cmVhbSgpIHtcblx0dGhpcy5fX3Byb3RvX18gPSBUcmFuc2Zvcm0uY2FsbCh0aGlzKVxuXHR0aGlzLl90cmFuc2Zvcm0gPSAoZGF0YSwgZW5jb2RpbmcsIGRvbmUpID0+IHtcblx0XHRmb3IgKGxldCBpID0wOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGRhdGFbaV0gPj0gOTcgJiYgZGF0YVtpXSA8PSAxMjIpIHtcblx0XHRcdFx0ZGF0YVtpXSAmPSB+MzJcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5wdXNoKGRhdGEpXG5cdFx0ZG9uZSgpXG5cdH1cbn1cbiIsIiRfX3BsYWNlaG9sZGVyX18wWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KCRfX3BsYWNlaG9sZGVyX18xKV0iLCIkdHJhY2V1clJ1bnRpbWUuc2V0UHJvcGVydHkoJF9fcGxhY2Vob2xkZXJfXzAsXG4gICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==