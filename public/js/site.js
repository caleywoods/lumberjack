$(document).ready(function() {
  GitIO.init();
});

var GitIO = {
  clipboard: '',

  init: function() {
    GitIO.initBrowserFallbacks();
    GitIO.observeFormSubmissions();
    GitIO.observeRestarts();
  },

  initBrowserFallbacks: function() {
    if ( !Modernizr.input.placeholder ) {
      $( 'input[placeholder]' ).each( function( input ) {
        $( this ).defaultValue( $( this ).attr( 'placeholder' ), 'active', 'inactive' );
      });
    }
  },

  observeFormSubmissions: function() {
    $( 'form' ).submit( function( e ) {
      var form = $( e.target )
      e.preventDefault();

      $.ajax(
        { type : form.attr( 'method' )
        , url  : form.attr( 'action' )
        , data:
          { 
            url : $( '#input-url' ).val()
          }
        , success: function( data ) {
            var outputURL = "http://lumberjackapp.herokuapp.com/" + data; //change to your URL
            $( '#output-url' ).val( outputURL ).select();
            $( '#input-url' ).removeClass( 'error' );
            $( '.arrow_box' ).hide();
            $( '#bar' ).addClass( 'flipped' );
          }
        , error: function( xhr, ajaxOptions, thrownError ) {
            $( '#error' ).text( xhr.responseText )
            $( '#input-url' ).addClass( 'error' );
            $( '.arrow_box' ).show();
          }
        }
      )
    });
  },

  observeRestarts: function() {
    $( 'a#restart' ).click( function( e ) {
      e.preventDefault();
      $( '#input-url' ).val( '' ).focus();
      $( '#output-url' ).val( '' );
      $( '#copied-msg' ).hide();
      $( '#bar' ).removeClass( 'flipped' );
    });
  }
};