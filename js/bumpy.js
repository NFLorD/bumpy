/* VARIABLES */
const bumpy = document.getElementById("bumpy");
const ref = document.getElementById("reference");
const clicky = document.getElementById("clicky");
const clicky2 = document.getElementById("clicky2");
const clicky3 = document.getElementById("clicky3");
const clicky4 = document.getElementById("clicky4");
const clicky5 = document.getElementById("clicky5");
const resetator = document.getElementById("resetty");
let couleur = false;
let taille = false;
let radius = false;
let position = true;

/* STYLES */
function handleBumpyMouseOver(){
	if(position){
		bumpy.style.top = 100+Math.random()*500+"px";
		bumpy.style.left = 400+Math.random()*500+"px";
		bumpy.style.right = 600-Math.random()*500+"px";
		bumpy.style.bottom = 300-Math.random()*500+"px";
	}
	if(couleur){
		bumpy.style.backgroundColor = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
	}
	if(taille){
		bumpy.style.width = (10+Math.random()*500)+"px";
		bumpy.style.height = (10+Math.random()*500)+"px";
	}
	if(radius){
		bumpy.style.borderRadius = Math.random()*50+"%";
	}
	ref.innerHTML = bumpy.getAttribute("style");
}

/* AFFICHER STYLES A L'ECRAN */
function handleClickButtonShow(){
	ref.classList.toggle("hidden");
}

/* OPTION 1 */
function handleClickButtonCouleur(){
	couleur ? couleur=false : couleur=true;
}

/* OPTION 2 */
function handleClickButtonTaille(){
	taille ? taille=false : taille=true;
}

/* OPTION 3 */
function handleClickButtonRadius(){
	radius ? radius=false : radius=true;
}

/* OPTION 4 */
function handleClickButtonPosition(){
	position ? position=false : position=true;
}

/* RESET */
function handleReset(){
	bumpy.style.height = "100px";
	bumpy.style.width = "100px";
	bumpy.style.top = "300px";
	bumpy.style.left = "600px";
	bumpy.style.borderRadius = "50%";
	bumpy.style.backgroundColor = "firebrick";
	ref.innerHTML = bumpy.getAttribute("style");
}

/* EVENTS */
bumpy.addEventListener("mousemove", handleBumpyMouseOver);
clicky.addEventListener("click", handleClickButtonShow);
clicky2.addEventListener("click", handleClickButtonCouleur);
clicky3.addEventListener("click", handleClickButtonTaille);
clicky4.addEventListener("click", handleClickButtonRadius);
clicky5.addEventListener("click", handleClickButtonPosition);
resetator.addEventListener("click", handleReset);