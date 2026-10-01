
// Pop up alerta amb funció per tancar-la
// Fem una function on li diem que modifiqui l'estil del id tancar perquè no ocupi espai ni es vegi a la pantalla quan l'usuari cliqui el botó
function tancarAlerta() {
  document.getElementById("tancar").style.display = "none";
}


// Validació de la contrasenya en temps real
function validarContrasenya() {
  // Recuperem el valor que l'usuari ha escrit a la contrasenya principal i recuperem el que hi hagi a la confirmació de la contrasenya
  var contra = document.getElementById("contrasenya").value;
  var confirmacio = document.getElementById("confirmarContrasenya");

  // Comprovem si coincideixen o no
  if (contra !== confirmacio.value) {
    // Si no coincideixen, sortirà el missatge d'error i es bloquejarà l'enviament del formulari
    confirmacio.setCustomValidity("Les contrasenyes no coincideixen.");
  } else {
    // Si coincideixen permetrà enviar el formulari
    confirmacio.setCustomValidity("");
  }
}


// Validació del format del correu electrònic
function validarCorreu() {
  // Recuperem l'element de la casella del correu electrònic i el que l'usuari ha escrit en aquest camp
  var correu = document.getElementById("email");
  var correuResposta = correu.value;
  // Definim una variable perquè compleixi el patró dels emails
  var patro = /^[a-zA-Z0-9\.\_\%\+\-]+@[a-zA-Z0-9\.\-]+\.(com|org|cat)$/;

  // ^[a-zA-Z0-9\.\_\%\+\-]+@[a-zA-Z0-9\.\-]+\.(com|org|cat)$ --> Desglossament del patró
  // ^: Indica l'inici de la cadena de text
  // [a-zA-Z0-9\.\_\%\+\-]+: Permet lletres, números i caràcters especials a la primera part de l'adreça (nom d'usuari)
  // @: Assegura que el símbol estigui exactament una vegada al mig
  // [a-zA-Z0-9\.\-]+: Permet lletres, números i caràcters especials per al nom del domini
  // \.(com|org|cat)$: Assegura que aquest domini sigui .com, .org o .cat

  // Comprovem si el correu escrit NO compleix el patró i, a més, ens assegurem que la casella no estigui buida
  if (!patro.test(correuResposta) && correuResposta !== ""  ) {
    // Si no és vàlid, bloquegem el formulari mostrant el missatge d'error
    correu.setCustomValidity("El correu ha d'acabar en .com, .org o .cat");
  } else {
    // Si el correu compleix el patró seguim amb l'enviament del formulari
    correu.setCustomValidity("");
  }
  }


// Ampliació de les imatges de la galeria en fer clic
// Utilitzem querySelectorAll perquè no només seleccioni el primer element amb aquesta classe, sino tots
var img = document.querySelectorAll('.imgPetita');

// Com que tenim varies imatges fem servir 'forEach' el qual recorre aquesta llista d'una en una
img.forEach(function(imatge){
  // Afegeix una funció només quan l'usuari fa clic
  imatge.addEventListener('click', function (){
    // Fem servir '.toggle' per canviar les classes de les imatges. Si la imatge té la classe gran li treu, i si no la té, li afegeix
    imatge.classList.toggle('gran');
})
})


// Efecte de la nota musical que segueix el ratolí amb un moviment suau
// Recuperem la icona de la nota musical
var nota = document.querySelector('#notamusical');
// Definim les variables per emmagatzemar la posició en temps real del cursor a la pantalla i de la nota musical
var posx = 100; 
var posy = 100;
var notax = 100; 
var notay = 100;

// Funció que s'activa amb 'onmousemove' del body per saber on està el ratolí
function mourenota (event){
  // Recuperem les coordenades x i y del cursor de la finestra del navegador i hi afegim un petit marge de separació
  posx = event.clientX+20; 
  posy = event.clientY+25;
}

// Funció que fa el gest de seguiment de la nota musical
function seguiment(){
  // Definim unes variables per calcular la diferència entre el ratolí i la nota musical
  var difx = 0;
  var dify = 0;
  // Calculem aquesta diferència per les x i les y i la dividim entre deu perquè quedi un efecte suau al moure el ratolí
  difx = (posx - notax )/10;
  dify = (posy - notay )/10;
  // Actualitzem la posició de la nota sumant-li la diferència que hem calculat
  notax = notax + difx;
  notay = notay + dify;
  // Actualitzem els nous valors al css
  nota.style.left = notax + 'px';
  nota.style.top = notay + 'px';
  // Tornem a cridar la funció de seguiment d'aquesta manera l'animació queda totalment fluida
  requestAnimationFrame(seguiment);
}
// Iniciem l'animació per primera vegada quan es carrega la pàgina web
requestAnimationFrame(seguiment);
