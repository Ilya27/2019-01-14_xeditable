/*ET 90 minutes */
/*AT 47 minutes */
$(()=>{
  'use strict'
  $('body').on('click','[data-editable]',function (event) {
    var mousedownHappened = false;
    event.preventDefault();
    var type=$(this).attr('data-editable'),
    $element= $(this),
    $input = $('<input>')
      .insertAfter($element)
      .attr('type',type)
      .val($element.text())
      .focus()
      .select()
      .on('keyup',function (event) {
        if (event.which===13) {
          $element
          .insertAfter(this)
          .text($(this).val());
          $(this).remove();
          $btn_primary.remove();
          $btn_danger.remove();
        } else if (event.which===27) {
          $(this).trigger('blur');
        }
      })
      .on('blur',function () {
        if (mousedownHappened)
        {
          mousedownHappened = false;
        }
        else
        {
          $element
          .insertAfter(this)
          $(this).remove();
          $btn_primary.remove();
          $btn_danger.remove();
        }
      });

      $element.remove();

      var $btn_primary = $('<button>')
        .insertAfter($input)
        .addClass('btn btn-primary')
        .on('click',function () {
          $element
          .insertAfter(this)
          .text($input.val());
            $input.remove();
            $btn_primary.remove();
            $btn_danger.remove();
        })
        $btn_primary.css('margin-left','10px');
        var $icon_clear=$('<span>').appendTo($btn_primary);
        $icon_clear.addClass('glyphicon glyphicon-pencil');

        var $btn_danger = $('<button>')
          .insertAfter($btn_primary)
          .addClass('btn btn-danger')
          .on('click',function () {
            $element
            .insertAfter(this)
              $input.remove();
              $btn_primary.remove();
              $btn_danger.remove();
            })
          $btn_danger.css('margin-left','10px');
          var $icon_clear=$('<span>').appendTo($btn_danger);
          $icon_clear.addClass('glyphicon glyphicon-remove');

          $btn_primary.mousedown(function() {
            mousedownHappened = true;});
          $btn_danger.mousedown(function() {
            mousedownHappened = true;});
          })
        });
