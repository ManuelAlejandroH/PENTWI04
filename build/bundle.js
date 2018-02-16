/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	window.ValidarCampos =   ValidarCampos = () => {
	    //Obtener los inputs que se validaran
	    let elementos = document.querySelector(".container").querySelectorAll("input");
	    let email, password, cpassword, messageError, checked = false;       
	  
	    for (let elemento of elementos) {
	        if(elemento.value.length <= 0)
	        {
	          alert("Campo " + elemento.id + " requerido");
	          return false;
	        }
	        email = elemento.id.includes("email") ? elemento.value : email;
	        password = elemento.id.includes("password")  ? elemento.value : password;
	        cpassword = elemento.id.includes("cpassword")  ? elemento.value : cpassword;
	        checked = elemento.checked ? true : checked;
	      } 
	    if(!checked) {
	      alert("Aceptar terminos  requerido");
	      return false;
	    }
	   
	    if (password != cpassword) {
	      alert("Password no coinciden");
	      return (false);
	    }
	   
	    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
	        alert("Bienvenido!!!!")
	        return true;
	      }
	    else{
	     alert("Email invalido")
	     return (false)
	    }
	  }

/***/ })
/******/ ]);