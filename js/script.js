(function ($) {
/**
* @file
* Javascript, modifications of DOM.
*
* Manipulates links to include jquery load funciton
*/

Drupal.behaviors.bootstrap_drupal = {
  attach: function (context, settings) {
  // Capture drupal-modal class generated by Skinr.
  // This triggers block as modal.
    $('.drupal-modal').once(function () {
      var title = $(this).children('h2').text();
      $(this).after('<section id="btn-' + $(this).attr('id') + '" class="sideral-corner after"><a class="btn btn-primary btn-lg" data-target="#' + $(this).attr('id') + '" data-toggle="modal">' + title + '</a></section>');
    });
    $('.drupal-modal').attr("tabindex", "-1");
    $('.drupal-modal').attr("role", "dialog");
    $('.drupal-modal').attr("aria-hidden", "true");
    $('.drupal-modal h2').wrap('<div class="modal-header" />');
    $('.drupal-modal .modal-header').prepend('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>');
    $('.drupal-modal .block-content').addClass('modal-body');
    $('.drupal-modal').append('<div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">' + Drupal.t('Close') + '</button></div>');
    $('.drupal-modal div').wrapAll('<div class="modal-dialog" />');
    $('.drupal-modal .modal-dialog div').wrapAll('<div class="modal-content" />');
    $('.drupal-modal').appendTo('body');
    // End of modal block definition

    // Capture drupal-dopdown class generated by Skinr.
    // This triggers block as dropdown.
    $('.drupal-dropdown').each(function () {
      var title = $(this).children('h2').text();
      $(this).children('h2').remove();
      $(this).prepend('<button class="btn dropdown-toggle" type="button" id="dropdown_' + $(this).attr('id') + '" data-toggle="dropdown">'+ title + '<span class="caret"></span></button>');
      $(this).children('.block-content').wrap('<ul class="dropdown-menu" role="menu" aria-labelledby="dropdown_' + $(this).attr('id') + '"><li role="presentation" /li></ul>');
    });
    // End of modal block definition

  // Prevent dropdown from closing when form inside
    $('.dropdown-menu').find('form').click(function (e) {
      e.stopPropagation();
    });

    $('.view-content').addClass('clearfix');
    $('.more-link a').addClass('btn btn-success');
    $('.not-front.page-user .main-container .btn').removeClass('btn-default');
    $('.not-front.page-user .main-container .btn').addClass('btn-info');

    $('.page-user-addressbook #commerce-addressbook-billing-default .views-row, .page-user-addressbook #commerce-addressbook-billing-list td .views-field').wrapInner('<address></address>');
  }

}
$(document).ready(function() {
  //pegajoso();
});

$(document).scroll(function() {
   //pegajoso();
});
/*
function pegajoso() {
 var header =  jQuery('#navbar');
      header.removeClass('container');
  var distancia_limit = 100;
  if (!jQuery('.ltie9').length) {
    var distancia_scroll = jQuery(document).scrollTop();
  } else {
    var distancia_scroll = jQuery('html, body').scrollTop();
  }
  if ( distancia_scroll > distancia_limit ) {
    header.addClass('navbar-top');
  } else {
    header.removeClass('navbar-top'); 
  }
};*/

}(jQuery));
