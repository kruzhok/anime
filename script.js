function validateFormOnSubmit(form) {
	var result = 0;

	var imageResult = document.querySelector('.image-result');

	imageResult.style['display'] = 'block';

	if ((form.zhanr.value === 'fantastika') && (form.populyarnost.value === 'vyshyi')) {
		imageResult.src = 'syedzye-anime-image/syedzye-fantastika1.jpg';
	} else if ((form.zhanr.value === 'fantastika') && (form.populyarnost.value === 'sredniy')) {
		imageResult.src = 'syedzye-anime-image/syedzye-fantastika2.jpg';
	} else if ((form.zhanr.value === 'fantastika') && (form.populyarnost.value === 'nizshiy')) {
		imageResult.src = 'syedzye-anime-image/syedzye-fantastika3.jpg';
	} else if ((form.zhanr.value === 'uzasy') && (form.populyarnost.value === 'vyshyi')) {
		imageResult.src = 'syedzye-anime-image/syedzye-uzasy1.jpg';
	} else if ((form.zhanr.value === 'uzasy') && (form.populyarnost.value === 'sredniy')) {
		imageResult.src = 'syedzye-anime-image/syedzye-uzasy2.jpg';
	} else if ((form.zhanr.value === 'uzasy') && (form.populyarnost.value === 'nizshiy')) {
		imageResult.src = 'syedzye-anime-image/syedzye-uzasy3.jpg';
	} else if ((form.zhanr.value === 'romantika') && (form.populyarnost.value === 'vyshyi')) {
		imageResult.src = 'syedzye-anime-image/syedzye-romantika1.jpg';
	} else if ((form.zhanr.value === 'romantika') && (form.populyarnost.value === 'sredniy')) {
		imageResult.src = 'syedzye-anime-image/syedzye-romantika2.jpg';
	} else if ((form.zhanr.value === 'romantika') && (form.populyarnost.value === 'nizshiy')) {
		imageResult.src = 'syedzye-anime-image/syedzye-romantika3.jpg';
	} else if ((form.zhanr.value === 'boevik') && (form.populyarnost.value === 'vyshyi')) {
		imageResult.src = 'syedzye-anime-image/syedzye-boevik1.jpg';
	} else if ((form.zhanr.value === 'boevik') && (form.populyarnost.value === 'sredniy')) {
		imageResult.src = 'syedzye-anime-image/syedzye-boevik2.jpg';
	} else if ((form.zhanr.value === 'boevik') && (form.populyarnost.value === 'nizshiy')) {
		imageResult.src = 'syedzye-anime-image/syedzye-boevik3.jpg';
	}

	// console.log(form.harakter.value);

	$('html, body').animate({
		scrollTop: $('.image-result').offset().top
	}, 1000);
}

