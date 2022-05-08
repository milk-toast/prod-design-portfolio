var hiddenClass = 'hidden';
var showingClass = 'showing';
const mediaQuery = window.matchMedia('(max-width: 768px)')

window.onresize = mobilize;


function mobilize () {
	if (mediaQuery.matches) {

	} else {

	}
}


function open (section) {

	var toHide = document.querySelectorAll('.' + showingClass)[0];
	var toShow = document.getElementById(section);
	var isMobile = mediaQuery.matches

	document.body.scrollTop = document.documentElement.scrollTop = 0;

	close (toHide);

	toShow.classList.add(showingClass);
	toShow.classList.remove(hiddenClass);

	// if (isMobile) {
	// 	var mobileToHide = document.querySelectorAll('.index-list')[0];
	// 	var mobileToShow = document.querySelectorAll('.project-container')[0];

	// 	mobileToShow.classList.add(showingClass);
	// 	mobileToShow.classList.remove(hiddenClass);

	// 	close (mobileToHide);
	// 

	// WRITE FUNCTION THAT COLLAPSES NAV???
	// }

}

function close (section) {
	section.classList.add(hiddenClass);
	section.classList.remove(showingClass);
}



// ----------- SECTION SHOW/HIDE -----------
function openVoices(){
	open ('project-voices');
}

function openRecipes(){
	open ('project-recipes');
}

function openCookware(){
	open ('project-cookware');
}

function openFYF(){
	open ('project-fyf');
}

function openBlue(){
	open ('project-blue');
}

function openResident(){
	open ('project-resident');
}

function openGood(){
	open ('project-good');
}

function openLeave(){
	open ('project-leave');
}

function openBenefits(){
	open ('project-benefits');
}

function openGroove(){
	open ('project-groove');
}

function openOdds(){
	open ('project-odds');
}

function openAbout(){
	open ('project-about');
}


