( function( $, w, d ) {

	// On click of nav toggle

	$(d).on('click', '#nav-toggle', function() {
		
		$('.nav-links').toggleClass('show-flex').toggle('slow');
	});

	$(w).on('resize', function() {

		
				
		if(this.matchMedia( "(min-width: 0px) and (max-width: 767px) " ).matches) {

			$('.nav-links').hide();

		}
		if( this.matchMedia( "(min-width: 768px)" ).matches ) {
			$('.nav-links').css('display', 'flex');
			
		}
	});
})( jQuery, window, document );