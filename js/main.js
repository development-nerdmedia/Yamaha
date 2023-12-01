AOS.init();

MyApp = {
    custom: {
        init: function () {
            sessionStorage.setItem("yamaha_Paquete", "basico");

            /* Animacion del botom  */
            var btnScroll = document.querySelector("#scroll")
            const segundaSection = document.querySelector("#custom");

            btnScroll.addEventListener("click", function () {
                const offset = segundaSection.offsetTop;
                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                });
                sessionStorage.setItem("yamaha_Paquete", "basico");
            })

            window.addEventListener('scroll', function () {
                sessionStorage.setItem("yamaha_Paquete", "basico");
            });

            /* *******************  */

            /*
            var modulo2 = document.querySelectorAll(".div.colorTanque")
            modulo2.forEach(element => {
                setTimeout(() => {
                    element.classList.remove("aos-animate")                    
                }, 500);
            });
            */

            /* Seleccion de paquete  */

            document.querySelector(".eleccionPaquete .btns button").classList.add("select")
            document.querySelector("section.custom .peresentacionPaquete img.imgPaquete").classList.add("select")
            document.querySelector(".contentMoto").classList.add("basico");
            var btnPaquetes = document.querySelectorAll(".eleccionPaquete .btns button")
            var paqueteMoto = document.querySelectorAll("section.custom .peresentacionPaquete img")
            var precioPerzonalizado = document.querySelector("section.custom .contentMoto .part1 .precios .item:last-child p span")
            var contentMotoSeccion = document.querySelector("section.custom .contentMoto");

            function ocultarPaso3() {
                if (contentMotoSeccion.classList.contains("basico")) {
                    document.querySelector("section.custom .pasos .paso3").style.display = "none";
                } else {
                    document.querySelector("section.custom .pasos .paso3").style.display = "flex";
                }
            }

            ocultarPaso3();

            btnPaquetes.forEach(btn => {
                btn.addEventListener("click", () => {
                    btnPaquetes.forEach(c => {
                        const otroItem = c;
                        if (otroItem !== btn) {
                            otroItem.classList.remove("select");
                        }
                    });
                    btn.classList.add("select");
                    var btnDataPaquete = btn.getAttribute("data-paquete");
                    paqueteMoto.forEach(imgMoto => {
                        if (imgMoto.getAttribute("data-paquete") == btnDataPaquete) {
                            var totalImgs = document.querySelectorAll("section.custom .contentMoto .part1 .peresentacionPaquete img:not(.imgPaquete):not(.resplandor)");
                            var inputSelects = document.querySelectorAll('.inputSelect');

                            /* resetear las imagenes */
                            totalImgs.forEach(element => {
                                element.style.display = "none";
                            });
                            /* resetear *********** */

                            /* resetear los select */
                            inputSelects.forEach(function (inputSelect) {
                                var primerValor = inputSelect.querySelector('.cuerpo button:first-child span').innerText;
                                var botones = inputSelect.querySelectorAll('.cuerpo button');

                                inputSelect.querySelector('.cabecera p').innerText = primerValor;
                                botones.forEach(function (boton) {
                                    boton.classList.remove('select');
                                });
                                botones[0].classList.add('select');
                            });
                            /* ******************* */

                            imgMoto.classList.add("select");
                            if (btnDataPaquete == "basico") {
                                precioPerzonalizado.innerText = 350;
                                document.querySelector(".contentMoto").classList.add("basico");
                                document.querySelector(".contentMoto").classList.remove("medio");
                                document.querySelector(".contentMoto").classList.remove("premium");
                                sessionStorage.setItem("yamaha_Paquete", "basico");
                                ocultarPaso3()
                            }
                            if (btnDataPaquete == "medio") {
                                precioPerzonalizado.innerText = 700;
                                document.querySelector(".contentMoto").classList.remove("basico");
                                document.querySelector(".contentMoto").classList.add("medio");
                                document.querySelector(".contentMoto").classList.remove("premium");
                                sessionStorage.setItem("yamaha_Paquete", "medio");
                                ocultarPaso3()
                            }
                            if (btnDataPaquete == "premium") {
                                precioPerzonalizado.innerText = 900;
                                document.querySelector(".contentMoto").classList.remove("basico");
                                document.querySelector(".contentMoto").classList.remove("medio");
                                document.querySelector(".contentMoto").classList.add("premium");
                                sessionStorage.setItem("yamaha_Paquete", "premium");
                                ocultarPaso3()
                            }
                        } else {
                            imgMoto.classList.remove("select");
                        }
                    })
                })
            })


            /* *******************  */

            /* Seleccion */

            var btnTanque = document.querySelectorAll(".item .inputSelect .cabecera")
            var btnTanqueP = document.querySelectorAll(".item .inputSelect .cabecera p")

            var opcionTimonMedio = document.querySelector(".part2 .costura.medio .item.timon .inputSelect .cabecera p")
            var opcionEspejoMedio = document.querySelector(".part2 .costura.medio .item.espejo .inputSelect .cabecera p")
            var opcionTimonPremiun = document.querySelector(".part2 .costura.premium .item.timon .inputSelect .cabecera p")
            var opcionEspejoPremiun = document.querySelector(".part2 .costura.premium .item.espejo .inputSelect .cabecera p")
            //var btnOpcionSelect = document.querySelectorAll(".item .inputSelect .cuerpo button")
            var btnOpcionSelect = null;

            btnTanque.forEach(btn => {
                btn.addEventListener("click", () => {
                    if (btn.parentElement.classList.contains("open")) {
                        btn.parentElement.classList.remove("open");
                    } else {
                        btnTanque.forEach(c => {
                            if (c !== btn) {
                                c.parentElement.classList.remove("open");
                            }
                        });
                        btn.parentElement.classList.add("open");
                        btnOpcionSelect = document.querySelectorAll(".item .inputSelect.open .cuerpo button");
                        btnOpcionSelect.forEach(btn => {
                            btn.addEventListener("click", (e) => {
                                if (btn.classList.contains("select")) {
                                    //btn.classList.remove("select");
                                } else {
                                    btnOpcionSelect.forEach(c => {
                                        if (c !== btn) {
                                            c.classList.remove("select");
                                        }
                                    });
                                    btn.classList.add("select");
                                }
                                var texto = btn.querySelector("span").textContent
                                var textoCabecera = btn.closest(".inputSelect")
                                textoCabecera.querySelector(".cabecera p").innerText = texto;
                                textoCabecera.classList.remove("open");
                                if (btn.querySelector("img")) {
                                    var img = btn.querySelector("img").getAttribute("src");
                                    textoCabecera.querySelector(".cabecera img").setAttribute("src", img);
                                }
                                if (e.target.classList.contains("colorTanque")) {
                                    var imgsColorTanque = document.querySelectorAll(".peresentacionPaquete .colorTanque img")
                                    var colorTanque = e.target.querySelector("span").textContent;
                                    var itemcolorTanque = colorTanque.toLowerCase();
                                    imgsColorTanque.forEach(img => {
                                        if (img.getAttribute("data-eleccion") == colorTanque) {
                                            img.style.display = "block"
                                            sessionStorage.setItem("yamaha_Color_de_tanque", itemcolorTanque);
                                        } else {
                                            img.style.display = "none"
                                        }
                                    });
                                }
                                if (e.target.classList.contains("colorAsiento")) {
                                    var imgscolorAsiento = document.querySelectorAll(".peresentacionPaquete .colorAsiento img")
                                    var tipoCostura = e.target.closest(".div").querySelector(".tipoAsientoSelect .cabecera p").textContent;
                                    var colorAsiento = e.target.querySelector("span").textContent
                                    var itemcolorAsiento = colorAsiento.toLowerCase();
                                    imgscolorAsiento.forEach(img => {
                                        if ((img.getAttribute("data-color") == colorAsiento) && (img.getAttribute("data-costura") == tipoCostura)) {
                                            img.style.display = "block"
                                            sessionStorage.setItem("yamaha_Color_de_asiento", itemcolorAsiento);
                                        } else {
                                            img.style.display = "none"
                                        }
                                    });
                                }
                                if (e.target.classList.contains("tipoCostura")) {
                                    var imgscolorAsiento = document.querySelectorAll(".peresentacionPaquete .colorAsiento img")
                                    var colorAsiento = e.target.closest(".div").querySelector(".colorAsientoSelect .cabecera p").textContent;
                                    var tipoCostura = e.target.querySelector("span").textContent
                                    var itemtipoCostura = tipoCostura.toLowerCase();
                                    imgscolorAsiento.forEach(img => {
                                        if ((img.getAttribute("data-color") == colorAsiento) && (img.getAttribute("data-costura") == tipoCostura)) {
                                            img.style.display = "block"
                                            sessionStorage.setItem("yamaha_Tipo_de_costura", itemtipoCostura);
                                        } else {
                                            img.style.display = "none"
                                        }
                                    });
                                }

                                if (e.target.classList.contains("tipoTimon")) {
                                    var imgsTipoTimon = document.querySelectorAll(".peresentacionPaquete .tipoTimon img")
                                    var tipoTimon = e.target.querySelector("span").textContent;
                                    var itemtipoTimon = tipoTimon.toLowerCase();
                                    imgsTipoTimon.forEach(img => {
                                        if (img.getAttribute("data-timon") == tipoTimon) {
                                            img.style.display = "block"
                                            sessionStorage.setItem("yamaha_Tipo_de_timon", itemtipoTimon);
                                        } else {
                                            img.style.display = "none"
                                        }
                                    });
                                }
                                if (e.target.classList.contains("tipoEspejo")) {
                                    var imgsTipoEspejo = document.querySelectorAll(".peresentacionPaquete .tipoEspejo img")
                                    var tipoEspejo = e.target.querySelector("span").textContent;
                                    var itemtipoEspejo = tipoEspejo.toLowerCase();
                                    imgsTipoEspejo.forEach(img => {
                                        if (img.getAttribute("data-espejo") == tipoEspejo) {
                                            img.style.display = "block"
                                            sessionStorage.setItem("yamaha_Tipo_de_espejo", itemtipoEspejo);
                                        } else {
                                            img.style.display = "none"
                                        }
                                    });
                                }
                            })
                        })
                    }
                })
            })

            /* ****************************  */

            /* Cambio de seccion  */
            var contentPadre = document.querySelector("section.custom .contentMoto")
            var btnpasos = document.querySelectorAll("section.custom .pasos button")
            var btnContinuarSolicitar = document.querySelector("div.continuar")
            var tituloSecciones = document.querySelectorAll("section.custom .contentMoto .part1 h2")
            var padreColorTanque = document.querySelectorAll("section.custom .contentMoto .part2 .div.colorTanque");
            var padreCostura = document.querySelectorAll("section.custom .contentMoto .part2 .div.costura");



            document.addEventListener("click", function (e) {
                if (e.target.closest("section.custom .continuar button")) {
                    if (contentPadre.classList.contains("etapa2")) {
                        contentPadre.classList.remove("etapa2");
                        contentPadre.classList.add("etapa3");
                        btnContinuarSolicitar.classList.add("solicitar")
                        btnpasos.forEach(element => {
                            element.classList.remove("select");
                        });
                        document.querySelector(".cuerina").classList.add("mostrar");
                        document.querySelector(".marquee-info").classList.remove("mostrar");
                        document.querySelector(".cuero").classList.add("mostrar");
                        document.querySelector(".marquee-info-cuero").classList.add("mostrar");
                        document.querySelector("section.custom .pasos .paso3").classList.add("select");
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa3").classList.add("mostrar");
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.height = "0";
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.overflow = "hidden";
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa2").classList.remove("mostrar");
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa1").style.height = "0";
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa1").style.overflow = "hidden"
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa1").classList.add("nomostrar");
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa3").style.height = "auto";

                        if (document.querySelector("section.custom .contentMoto.medio")) {
                            var primerTimon = document.querySelector("section.custom .contentMoto.medio.etapa3 .costura.medio .item.timon .cuerpo button.select span")
                            var primerEspejo = document.querySelector("section.custom .contentMoto.medio.etapa3 .costura.medio .item.espejo .cuerpo button.select span")
                            var imgsTipoTimon = document.querySelectorAll(".peresentacionPaquete .tipoTimon img")
                            var imgsTipoEspejo = document.querySelectorAll(".peresentacionPaquete .tipoEspejo img")
                            imgsTipoTimon.forEach(element => {
                                if (element.getAttribute("data-timon") == primerTimon.textContent) {
                                    element.style.display = "block";
                                }
                            });
                            imgsTipoEspejo.forEach(element => {
                                if (element.getAttribute("data-espejo") == primerEspejo.textContent) {
                                    element.style.display = "block";
                                }
                            });
                        }
                        if (document.querySelector("section.custom .contentMoto.premium")) {
                            var primerTimon = document.querySelector("section.custom .contentMoto.premium.etapa3 .costura.premium .item.timon .cuerpo button.select span")
                            var primerEspejo = document.querySelector("section.custom .contentMoto.premium.etapa3 .costura.premium .item.espejo .cuerpo button.select span")
                            var imgsTipoTimon = document.querySelectorAll(".peresentacionPaquete .tipoTimon img")
                            var imgsTipoEspejo = document.querySelectorAll(".peresentacionPaquete .tipoEspejo img")
                            imgsTipoTimon.forEach(element => {
                                if (element.getAttribute("data-timon") == primerTimon.textContent) {
                                    element.style.display = "block";
                                }
                            });
                            imgsTipoEspejo.forEach(element => {
                                if (element.getAttribute("data-espejo") == primerEspejo.textContent) {
                                    element.style.display = "block";
                                }
                            });
                        }
                        if (sessionStorage.getItem("yamaha_Paquete")) {
                            var valorPaquete = sessionStorage.getItem("yamaha_Paquete");
                            padreCostura.forEach(element => {
                                if (element.classList.contains(valorPaquete)) {
                                    var TipoDeTimon = element.querySelector(".tipoTiponSelect .cabecera p").textContent.toLowerCase()
                                    var TipoDeEspejo = element.querySelector(".tipoEspejoSelect .cabecera p").textContent.toLowerCase()
                                    sessionStorage.setItem("yamaha_Tipo_de_timon", TipoDeTimon);
                                    sessionStorage.setItem("yamaha_Tipo_de_espejo", TipoDeEspejo);
                                }
                            });
                        }
                        var modulo2 = document.querySelectorAll(".div.costura")
                        modulo2.forEach(element => {
                            setTimeout(() => {
                                element.classList.add("mostrar")
                            }, 100);
                        });
                    } else {
                        if (contentMotoSeccion.classList.contains("basico")) {
                            btnContinuarSolicitar.classList.add("solicitar")
                        } else {
                            btnContinuarSolicitar.classList.remove("solicitar")
                        }
                        contentPadre.classList.add("etapa2");
                        if (sessionStorage.getItem("yamaha_Paquete")) {
                            var valorPaquete = sessionStorage.getItem("yamaha_Paquete");
                            padreColorTanque.forEach(element => {
                                if (element.classList.contains(valorPaquete)) {
                                    var ColorDeTanque = element.querySelector(".selectColorTanque .cabecera p").textContent.toLowerCase()
                                    var ColorDeAsiento = element.querySelector(".colorAsientoSelect .cabecera p").textContent.toLowerCase()
                                    var TipoDeCostura = element.querySelector(".tipoAsientoSelect .cabecera p").textContent.toLowerCase()
                                    sessionStorage.setItem("yamaha_Color_de_tanque", ColorDeTanque);
                                    sessionStorage.setItem("yamaha_Color_de_asiento", ColorDeAsiento);
                                    sessionStorage.setItem("yamaha_Tipo_de_costura", TipoDeCostura);
                                }
                            });
                            if (valorPaquete == "basico") {
                                sessionStorage.removeItem("yamaha_Tipo_de_timon");
                                sessionStorage.removeItem("yamaha_Tipo_de_espejo");
                            }
                        }
                        btnpasos.forEach(element => {
                            element.classList.remove("select");
                        });
                        document.querySelector(".cuerina").classList.add("mostrar");
                        document.querySelector(".marquee-info").classList.add("mostrar");
                        document.querySelector(".cuero").classList.remove("mostrar");
                        document.querySelector(".cuero").style.overflow = "hidden !important"
                        document.querySelector(".marquee-info-cuero").classList.remove("mostrar");
                        document.querySelector("section.custom .pasos .paso2").classList.add("select");
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa1").style.height = "0";
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa1").style.overflow = "hidden"
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa1").classList.add("nomostrar");
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa2").classList.add("mostrar");
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.height = "auto";
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.overflow = "hidden";
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa3").style.height = "0";
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa3").style.overflow = "hidden"
                        document.querySelector("section.custom .contentMoto .part1 h2.etapa3").classList.remove("mostrar");
                        var modulo2 = document.querySelectorAll(".div.colorTanque")
                        modulo2.forEach(element => {
                            setTimeout(() => {
                                element.classList.add("mostrar")
                            }, 100);
                        });
                    }
                }
                if (e.target.closest("section.custom .pasos .paso2")) {
                    document.querySelector(".cuerina").classList.add("mostrar");
                    document.querySelector(".marquee-info").classList.add("mostrar");
                    document.querySelector(".cuero").classList.remove("mostrar");
                    document.querySelector(".cuero").style.overflow = "hidden !important"
                    document.querySelector(".marquee-info-cuero").classList.remove("mostrar");
                    contentPadre.classList.add("etapa2");
                    contentPadre.classList.remove("etapa3");
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa1").style.height = "0";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa1").style.overflow = "hidden"
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa1").classList.add("nomostrar");
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa2").classList.add("mostrar");
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.height = "auto";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.overflow = "hidden";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa3").style.height = "0";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa3").style.overflow = "hidden"
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa3").classList.remove("mostrar");
                    if (contentMotoSeccion.classList.contains("basico")) {
                        btnContinuarSolicitar.classList.add("solicitar")
                    } else {
                        btnContinuarSolicitar.classList.remove("solicitar")
                    }
                    var modulo2 = document.querySelectorAll(".div.colorTanque")
                    modulo2.forEach(element => {
                        setTimeout(() => {
                            element.classList.add("mostrar")
                        }, 100);
                    });
                    var modulo2 = document.querySelectorAll(".div.costura")
                    modulo2.forEach(element => {
                        setTimeout(() => {
                            element.classList.remove("mostrar")
                        }, 100);
                    });
                }
                if (e.target.closest("section.custom .pasos .paso1")) {
                    contentPadre.classList.remove("etapa2");
                    contentPadre.classList.remove("etapa3");
                    document.querySelector(".cuero").classList.remove("mostrar");
                    document.querySelector(".marquee-info-cuero").classList.remove("mostrar");
                    document.querySelector(".cuerina").classList.remove("mostrar");
                    document.querySelector(".marquee-info").classList.remove("mostrar");
                    btnContinuarSolicitar.classList.remove("solicitar")
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa1").style.height = "auto";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa1").classList.remove("nomostrar");
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa1").classList.add("mostrar");
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.height = "0";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.overflow = "hidden";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa2").classList.remove("mostrar");
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa3").style.height = "0";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa3").style.overflow = "hidden"
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa3").classList.remove("mostrar");
                    var modulo2 = document.querySelectorAll(".div.colorTanque")
                    modulo2.forEach(element => {
                        setTimeout(() => {
                            element.classList.remove("mostrar")
                        }, 100);
                    });
                    var modulo2 = document.querySelectorAll(".div.costura")
                    modulo2.forEach(element => {
                        setTimeout(() => {
                            element.classList.remove("mostrar")
                        }, 100);
                    });
                }
                if (e.target.closest("section.custom .pasos .paso3")) {
                    document.querySelector(".cuerina").classList.add("mostrar");
                    document.querySelector(".marquee-info").classList.remove("mostrar");
                    document.querySelector(".cuero").classList.add("mostrar");
                    document.querySelector(".marquee-info-cuero").classList.add("mostrar");
                    contentPadre.classList.remove("etapa2");
                    contentPadre.classList.add("etapa3");
                    btnContinuarSolicitar.classList.add("solicitar")
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa3").classList.add("mostrar");
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.height = "0";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa2").style.overflow = "hidden";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa2").classList.remove("mostrar");
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa1").style.height = "0";
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa1").style.overflow = "hidden"
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa1").classList.add("nomostrar");
                    document.querySelector("section.custom .contentMoto .part1 h2.etapa3").style.height = "auto";
                    var modulo2 = document.querySelectorAll(".div.colorTanque")
                    modulo2.forEach(element => {
                        setTimeout(() => {
                            element.classList.remove("mostrar")
                        }, 100);
                    });
                    var modulo2 = document.querySelectorAll(".div.costura")
                    modulo2.forEach(element => {
                        setTimeout(() => {
                            element.classList.add("mostrar")
                        }, 100);
                    });
                }
            })

            btnpasos.forEach(btn => {
                btn.addEventListener("click", () => {
                    btnpasos.forEach(c => {
                        const otroItem = c;
                        if (otroItem !== btn) {
                            otroItem.classList.remove("select");
                        }
                    });
                    btn.classList.add("select");
                })
            })
        }
    },
    validate: {
        init: function () {

            var sessionStorageKeys = Object.keys(sessionStorage);
            var formespacioinput = document.querySelectorAll('.required');
            var formespacioselect = document.querySelectorAll('select');
            var yamahaKeys = sessionStorageKeys.filter(function (key) {
                return key.startsWith("yamaha_");
            });

            var inputsContainer = document.getElementById("inputsContainer");

            yamahaKeys.forEach(function (key) {
                var value = sessionStorage.getItem(key);
                var inputElement = document.createElement("input");

                inputElement.type = "hidden";
                inputElement.name = key;
                inputElement.value = value;
                inputsContainer.appendChild(inputElement);
            });


            $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

            function validateInput(e) {
                for (let y = 0; y < formespacioinput.length; y++) {
                    if (!formespacioinput[y].value) {
                        formespacioinput[y].classList.add("error");
                        e.preventDefault();
                    } else {
                        formespacioinput[y].classList.remove("error");
                    }
                }
            }


            function validateSelect(e) {
                formespacioselect.forEach(function (select) {
                    if (select.value === select.options[0].value) {
                        select.classList.add('error');
                        e.preventDefault();
                    } else {
                        select.classList.remove('error');
                    }
                });
            }

            function validateInputCorreo(e) {
                var inputCorreo = document.querySelector('input[type=email]');
                var valueCorreo = inputCorreo.value;
                if (valueCorreo.includes("@") && (valueCorreo.includes(".com") || valueCorreo.includes(".pe") || valueCorreo.includes(".gob") || valueCorreo.includes(".net") || valueCorreo.includes(".org") || valueCorreo.includes(".edu") || valueCorreo.includes(".gov") || valueCorreo.includes(".mil"))) {
                    inputCorreo.classList.remove("error");
                } else {
                    inputCorreo.classList.add("error");
                    e.preventDefault();
                }
            }

            formespacioselect.forEach(select => {
                select.addEventListener("click", function (e) {
                    formespacioselect.forEach(otroItem => {
                        if (otroItem !== select) {
                            otroItem.closest('.campoSelect').classList.remove("active");
                        }
                    })
                    select.closest('.campoSelect').classList.toggle("active");
                })
            });


            document.addEventListener("click", function (e) {
                if (e.target.closest("form button")) {
                    validateInput(e)
                    validateInputCorreo(e)
                    validateSelect(e)
                }
            })
        }
    },
    selectCondicional: {
        init: function () {
            const departamentoSelect = document.getElementById('departamento');
            const provinciaSelect = document.getElementById('provincia');

            departamentoSelect.addEventListener('change', function () {
                const selectedDepartamento = departamentoSelect.value;
                for (const option of provinciaSelect.options) {
                    option.style.display = (option.dataset.departamento === selectedDepartamento) ? 'block' : 'none';
                    provinciaSelect.options[0].style.display = 'block';
                }
            });
            provinciaSelect.options[0].style.display = 'block';



        }
    },
    mouse: {
        init: function () {
            document.body.addEventListener("mousemove", e => {
                gsap.to(".shake", {
                    x: e.clientX,
                    y: e.clientY,
                })
                gsap.to(".circulo", {
                    x: e.clientX,
                    y: e.clientY,
                    delay: 0.05,
                })
            })


            $(".inputSelect").hover(function () {
                $(".shake").addClass("ocultar");
                $(".circulo").addClass("ocultar");
            }, function () {
                $(".shake").removeClass("ocultar");
                $(".circulo").removeClass("ocultar");
            }
            );

            $(".infoPaquete div").hover(function () {
                $(".shake").addClass("ocultar");
                $(".circulo").addClass("ocultar");
            }, function () {
                $(".shake").removeClass("ocultar");
                $(".circulo").removeClass("ocultar");
            }
            );

            $("section.custom .pasos .paso").hover(function () {
                $(".shake").addClass("ocultar");
                $(".circulo").addClass("ocultar");
            }, function () {
                $(".shake").removeClass("ocultar");
                $(".circulo").removeClass("ocultar");
            }
            );

            $(".eleccionPaquete .btns button").hover(function () {
                $(".shake").addClass("ocultar");
                $(".circulo").addClass("ocultar");
            }, function () {
                $(".shake").removeClass("ocultar");
                $(".circulo").removeClass("ocultar");
            }
            );
        }
    },
    marquee: {
        init: function () {
            $('.marquee-info').marquee({
                duration: 10000,
                gap: 0,
                delayBeforeStart: 0,
                direction: 'left',
                duplicated: true,
            });
            $('.marquee-info-cuero').marquee({
                duration: 10000,
                gap: 0,
                delayBeforeStart: 0,
                direction: 'left',
                duplicated: true,
            });
        }
    },
    BtnContinuar: {
        init: function () {
            window.addEventListener('scroll', function () {
                var seccion = document.querySelector('.custom.moto');
                var seccionRect = seccion.getBoundingClientRect();
                if (seccionRect.top <= 0) {
                    document.querySelector("section.custom .contentMoto .part2 .continuar").classList.add('aparece');
                } else {
                    document.querySelector("section.custom .contentMoto .part2 .continuar").classList.remove('aparece');
                }
            });
        }
    },
    MenuFixed: {
        init: function () {

        }
    },
}

if ($('.custom.moto').length > 0) {
    MyApp.custom.init();
}

if ($('.formulario').length > 0) {
    MyApp.validate.init();
}

if ($('.formulario #departamento').length > 0) {
    MyApp.selectCondicional.init();
}

if ($('.marquee-info').length > 0) {
    MyApp.marquee.init();
}

if ($('.shake').length > 0) {
    MyApp.mouse.init();
}

if ($('section.custom .contentMoto .part2 .continuar').length > 0) {
    MyApp.BtnContinuar.init();
}

if ($('section.custom .pasos').length > 0) {
    MyApp.MenuFixed.init();
}