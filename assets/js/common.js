$(document).ready(function() {
	
	$('input').focus(function() {
		
		if (this.value.toLowerCase() === 'имя*' || 
			this.value.toLowerCase() === 'телефон*' ||
			this.value.toLowerCase() === 'e-mail*' ||
			this.value.toLowerCase() === 'сайт' ) {
			this.value = '';
		}

		
	});

	$('input').blur(function() {
		
		switch (this.name) {
			case 'name':
				if (this.value === '') {
					this.value = 'ИМЯ*';
				}
				break;
			case 'phone-number':
				if (this.value === '') {
					this.value = 'ТЕЛЕФОН*';
				}
				break;
			case 'e-mail':
				if (this.value === '') {
					this.value = 'E-MAIL*';
				}
				break;
			case 'web-site':
				if (this.value === '') {
					this.value = 'САЙТ';
				}
				break;
		}



	});

	$('.recall.left button').hover(function() {
		highlight('.recall.left .initials p', '#a70c5d', '#quotes-left', 'assets/img/quotes-hover.png');
	});

	$('.recall.middle button').hover(function() {
			highlight('.recall.middle .initials p', '#a70c5d', '#quotes-middle', 'assets/img/quotes-hover.png');
	});

	$('.recall .video img').hover(function() {
			highlight('.recall.right .initials p', '#a70c5d', '.recall.right #btn-play', 'assets/img/icon-video-hover.png');
	});

	$('.recall.right .btn-video-play').hover(function() {
			highlight('.recall.right .initials p', '#a70c5d', '.recall.right #btn-play', 'assets/img/icon-video-hover.png');
	});

	$('.main-content .btn-play img').hover(function() {
		var imageSource = $('.main-content .btn-play img').attr('src');
		if (imageSource === 'assets/img/btn-pause.png') {

				highlight(null, null , '.main-content .btn-play img', 'assets/img/btn-pause-hover.png');
			}

		else if (imageSource === 'assets/img/btn-play.png') {
				highlight(null, null , '.main-content .btn-play img', 'assets/img/btn-play-hover.png');
		}
	});

	$('.main-content .btn-play img').click(function() {

		var imageSource = $('.main-content .btn-play img').attr('src');

			if (imageSource === 'assets/img/btn-pause-hover.png') {
				highlight(null, null , '.main-content .btn-play img', 'assets/img/btn-play.png');
				$('.main-content .btn-play img').css({
					'left' : '45%'
				});
			}

			else if (imageSource === 'assets/img/btn-play-hover.png') {
				highlight(null, null , '.main-content .btn-play img', 'assets/img/btn-pause.png');
				$('.main-content .btn-play img').css({
					'left' : '41%'
				});
			}

	});

	$('.recall.left button').mouseleave(function() {
			highlight('.recall.left .initials p', '#414252', '#quotes-left', 'assets/img/quotes.png');
	});

	$('.recall.middle button').mouseleave(function() {
			highlight('.recall.middle .initials p', '#414252', '#quotes-middle', 'assets/img/quotes.png');
	});

	$('.recall .video img').mouseleave(function() {
			highlight('.recall.right .initials p', '#414252', '.recall.right #btn-play', 'assets/img/icon-video.png');
	});

	$('.recall.right .btn-video-play').mouseleave(function() {
			highlight('.recall.right .initials p', '#414252', '.recall.right #btn-play', 'assets/img/icon-video.png');
	});

	$('.main-content .btn-play img').mouseleave(function() {

		var imageSource = $('.main-content .btn-play img').attr('src');
			if (imageSource === 'assets/img/btn-pause-hover.png') {
				highlight(null, null , '.main-content .btn-play img', 'assets/img/btn-pause.png');
			}

			else if (imageSource === 'assets/img/btn-play-hover.png') {
				highlight(null, null , '.main-content .btn-play img', 'assets/img/btn-play.png');
			}
	});

	var clicked1 = false;
	var clicked2 = false;
	var clicked3 = false;
	var clicked4 = false;

	function makeListItemSelectedStyle(item) {

		$(item).css({
			'color': '#a70c5d',
			'font-weight': 'bold',
			'list-style-image': 'url(assets/img/ul-marker-hover.png)',
	 	});
	}

	function makeListItemNoSelectedStyle(item) {

		$(item).css({
			'color': '#414252',
			'font-weight': '400',
			'list-style-image': 'url(assets/img/ul-marker.png)',
	 	});
	}

	$('.interests ul li').click(function() {
		var clickedItem = $(this).attr('id');

	 	switch(clickedItem) {
	 		case "list1" : 
	 			if (clicked1) {
					makeListItemNoSelectedStyle(this);
					clicked1 = false;
	 				return;
	 			}
	 			makeListItemSelectedStyle(this);

	 			clicked1 = true;
	 		break;
	 		case "list2" :
	 			if (clicked2) {
					makeListItemNoSelectedStyle(this);
					clicked2 = false;
	 				return;
	 			}
	 			makeListItemSelectedStyle(this); 
	 			clicked2 = true;
	 		break;
	 		case "list3" : 
	 			if (clicked3) {
					makeListItemNoSelectedStyle(this);
					clicked3 = false;
	 				return;
	 			}
	 			makeListItemSelectedStyle(this);
	 			clicked3 = true;
	 		break;
	 		case "list4" : 
	 			if (clicked4) {
					makeListItemNoSelectedStyle(this);
					clicked4 = false;
	 				return;
	 			}
	 			makeListItemSelectedStyle(this);
	 			clicked4 = true;
	 		break;
	 	}
	});

	$('.interests ul li').hover(function() {
	 	$(this).css({
			'color': '#a70c5d',
			'font-weight': 'bold',
			'list-style-image': 'url(assets/img/ul-marker-hover.png)',
	 	});
	});

	 $('.interests ul li').mouseleave(function() {
	 		
	 		var selectedItem = $(this).attr('id');

	 	switch(selectedItem) {
	 		case "list1" : 
	 			if (!clicked1) {
					makeListItemNoSelectedStyle(this);
				}
	 		break;
	 		case "list2" :
	 			if (!clicked2) {
					makeListItemNoSelectedStyle(this);
				}
	 		break;
	 		case "list3" : 
	 			if (!clicked3) {
					makeListItemNoSelectedStyle(this);
				}
	 		break;
	 		case "list4" : 
	 			if (!clicked4) {
					makeListItemNoSelectedStyle(this);
				}
	 		break;
	 		}
	 	
	});

	
	function highlight(text, textColor, image, imageSource) {
		
			$(text).css({
				'color' : textColor
			});
			$(image).attr('src', imageSource);
	}

	function showModalWindow(id) {

		if ($('.modal-left').attr('display') === 'block') return;
		switch(id) {

			case 1:
				$('.modal-right img').css({
				'top' : '0%'
				});

				$('.modal-right table h3').html('Наведение порядка в делах');

				$('.modal-right').css({
					'display' : 'block'
				});

				$('.right-row-container').css({
					'display' : 'none'
				});
			break;

			case 2:
				$('.modal-right img').css({
				'top' : '88%'
				});

				$('.modal-right table h3').html('Правовое сопровождение деятельности (юрист-аутсорсер)');

				$('.modal-right').css({
					'display' : 'block'
				});

				$('.right-row-container').css({
					'display' : 'none'
				});
			break;

			case 3:
				$('.modal-left img').css({
				'top' : '0%'
				});

				$('.modal-left table h3').html('Оптимизация договорных отношений');

				$('.modal-left').css({
					'display' : 'block'
				});

				$('.left-row-container').css({
					'display' : 'none'
				});
			break;

			case 4:
				$('.modal-left img').css({
				'top' : '67%'
				});

				$('.modal-left table h3').html('Разработка документов и другой документации');

				$('.modal-left').css({
					'display' : 'block'
				});

				$('.left-row-container').css({
					'display' : 'none'
				});
			break;
				
		}

		
	}

	$('button#i1.info').click(function() {
		showModalWindow(1);
	});

	$('button#i2.info').click(function() {
		showModalWindow(2);
	});

	$('button#i3.info').click(function() {
		showModalWindow(3);
	});

	$('button#i4.info').click(function() {
		showModalWindow(4);
	});

	$('.modal-left button').click(hideLeftModal);

	$('.modal-left img').click(hideLeftModal);

	$('.modal-right button').click(hideRightModal);

	$('.modal-right img').click(hideRightModal);

	function hideLeftModal() {
		$('.modal-left').css({
			'display' : 'none'
		});

		$('.left-row-container').css({
			'display' : 'block'
		});
	}

	function hideRightModal() {
		$('.modal-right').css({
			'display' : 'none'
		});

		$('.right-row-container').css({
			'display' : 'block'
		});
	}
});