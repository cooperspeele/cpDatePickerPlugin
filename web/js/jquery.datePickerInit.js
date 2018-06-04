(function($) {
  $.fn.datePickerInit = function(method) {

    var settings;

    var methods = {

      init: function(options) {
        settings = $.extend(true, {}, this.datePickerInit.defaults, options);

        return this.each(function() {
          var $this = $(this);

          Date.format = $(this).data('dateformat') || settings.dateFormat;
          $(this).datePicker($.extend(true, {}, settings, {
            startDate: $(this).data('startdate'),
            endDate: $(this).data('enddate'),
            clickInput: $(this).data('clickinput')
          }));
        });

      }
    };

    // Private methods
    var helpers = {
    };

    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    }
    else {
      $.error('Method ' +  method + ' does not exist in jQuery.datePickerInit.');
    }
  };

  $.fn.datePickerInit.defaults = {
    dateFormat: 'dd.mm.yyyy'
  };

})(jQuery);

$(document).ready(function() {
  $('.dateInput').datePickerInit();
});