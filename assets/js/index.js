// Set base index for all galleries
var mealplanIndex = 0;
var pricingselectIndex = 0;
var voicesIndex = 0;
var cookwareIndex = 0;
var quizadIndex = 0;
var bluecheckIndex = 0;
var residentIndex = 0;
var goodluckIndex = 0;
var leaveIndex = 0;
var mybenefitsIndex = 0;
var endsIndex = 0;

function getGallery (galleryName) {
	return document.getElementsByClassName(galleryName);
}


// If adding a new gallery, you need to add a new case
function getIndex (galleryName) {
	var i;
	var gallery = getGallery(galleryName);

	switch (galleryName) {
		case 'gallery-entry-mealplan':
			i = mealplanIndex;
			mealplanIndex++;
			if (mealplanIndex > gallery.length - 1) {mealplanIndex = 0;} 
			if (mealplanIndex < 0){mealplanIndex = gallery.length;}
			document.getElementById('pricingselect-page-count').innerHTML = mealplanIndex + 1 + '/' + gallery.length;
			break;
		case 'gallery-entry-pricingselect':
			i = pricingselectIndex;
			pricingselectIndex++;
			if (pricingselectIndex > gallery.length - 1) {pricingselectIndex = 0;} 
			if (pricingselectIndex < 0){pricingselectIndex = gallery.length;}
			document.getElementById('pricingselect-page-count').innerHTML = pricingselectIndex + 1 + '/' + gallery.length;
			break;
		case 'gallery-entry-voices':
			i = voicesIndex;
			voicesIndex++;
			if (voicesIndex > gallery.length - 1) {voicesIndex = 0;} 
			if (voicesIndex < 0){voicesIndex = gallery.length;}
			document.getElementById('voices-page-count').innerHTML = voicesIndex + 1 + '/' + gallery.length;
			break;

		case 'gallery-entry-cookware':
			i = cookwareIndex;
			cookwareIndex++;
			if (cookwareIndex > gallery.length - 1) {cookwareIndex = 0;} 
			if (cookwareIndex < 0){cookwareIndex = gallery.length;}
			document.getElementById('cookware-page-count').innerHTML = cookwareIndex + 1 + '/' + gallery.length;
			break;

		case 'gallery-entry-quizad':
			i = quizadIndex;
			quizadIndex++;
			if (quizadIndex > gallery.length - 1) {quizadIndex = 0;} 
			if (quizadIndex < 0){quizadIndex = gallery.length;}
			document.getElementById('quizad-page-count').innerHTML = quizadIndex + 1 + '/' + gallery.length;
			break;

		case 'gallery-entry-bluecheck':
			i = bluecheckIndex;
			bluecheckIndex++;
			if (bluecheckIndex > gallery.length - 1) {bluecheckIndex = 0;} 
			if (bluecheckIndex < 0){bluecheckIndex = gallery.length;}
			document.getElementById('bluecheck-page-count').innerHTML = bluecheckIndex + 1 + '/' + gallery.length;
			break;

		case 'gallery-entry-resident':
			i = residentIndex;
			residentIndex++;
			if (residentIndex > gallery.length - 1) {residentIndex = 0;} 
			if (residentIndex < 0){residentIndex = gallery.length;}
			document.getElementById('resident-page-count').innerHTML = residentIndex + 1 + '/' + gallery.length;
			break;

		case 'gallery-entry-goodluck':
			i = goodluckIndex;
			goodluckIndex++;
			if (goodluckIndex > gallery.length - 1) {goodluckIndex = 0;} 
			if (goodluckIndex < 0){goodluckIndex = gallery.length;}
			document.getElementById('goodluck-page-count').innerHTML = goodluckIndex + 1 + '/' + gallery.length;
			break;

		case 'gallery-entry-leave':
			i = leaveIndex;
			leaveIndex++;
			if (leaveIndex > gallery.length - 1) {leaveIndex = 0;} 
			if (leaveIndex < 0){leaveIndex = gallery.length;}
			document.getElementById('leave-page-count').innerHTML = leaveIndex + 1 + '/' + gallery.length;
			break;

		case 'gallery-entry-mybenefits':
			i = mybenefitsIndex;
			mybenefitsIndex++;
			if (mybenefitsIndex > gallery.length - 1) {mybenefitsIndex = 0;} 
			if (mybenefitsIndex < 0){mybenefitsIndex = gallery.length;}
			document.getElementById('mybenefits-page-count').innerHTML = mybenefitsIndex + 1 + '/' + gallery.length;
			break;

		case 'gallery-entry-ends':
			i = endsIndex;
			endsIndex++;
			if (endsIndex > gallery.length - 1) {endsIndex = 0;} 
			if (endsIndex < 0){endsIndex = gallery.length;}
			document.getElementById('ends-page-count').innerHTML = endsIndex + 1 + '/' + gallery.length;
			break;
	}
	return i;
}




function nextSlide (step, galleryName) {
	// Get gallery object and index based on the gallery's class name
	var gallery = getGallery(galleryName);
	var i = getIndex(galleryName);

	i += step;

	// If index exceeds the length of the gallery, reset to beginning
	if (i > gallery.length - 1) {i = 0;} 

	// If index is less than 0, reset to last position
	if (i < 0){i = gallery.length;}

	// Hide all
	for (var n = 0; n < gallery.length; n++) {
		gallery[n].style.display = 'none';
	}
	if (galleryName == 'gallery-entry-ends') {
		gallery[i].style.display = 'block';
	} else {
		gallery[i].style.display = 'inline';
	}
	
}