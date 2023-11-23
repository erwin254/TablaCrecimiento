const dataPediatria = [];
var funciones = {};

funciones.calcularImc = function (peso = null, estatura = null) {
    var imc = "";

    if (peso > 0 & estatura > 0) {
        imc = peso / ((estatura / 100) * (estatura / 100));
    }

    return imc;
}

funciones.calculaEdad = function (fecha, fecha_nac) {
    var a = moment(fecha);
    var b = moment(fecha_nac);
    var edad = {};
    edad.meses = a.diff(b, 'months');
    var years = a.diff(b, 'year');
    b.add(years, 'years');

    var months = a.diff(b, 'months');
    b.add(months, 'months');

    var days = a.diff(b, 'days');

    if (years == 0) {
        if (months <= 1) {
            if (days <= 1) {
                edad.texto = months + ' mes ' + days + ' dia';
            } else {
                edad.texto = months + ' mes ' + days + ' dias';
            }
        } else {
            if (days <= 1) {
                edad.texto = months + ' meses ' + days + ' dia';
            } else {
                edad.texto = months + ' meses ' + days + ' dias';
            }
        }

    } else {
        if (years == 1) {
            edad.texto = years + ' año ' + months + ' meses ' + days + ' dias';
        } else {
            edad.texto = years + ' años ' + months + ' meses ' + days + ' dias';
        }
    }


    return edad;
}


$.getJSON("json/ninas-ExE-0a5.json", function (obj) {
    dataPediatria["ninas-ExE-0a5"] = obj;
});

$.getJSON("json/ninas-ExE-5a19.json", function (obj) {
    dataPediatria["ninas-ExE-5a19"] = obj;
});

$.getJSON("json/ninas-IMC-5a19.json", function (obj) {
    dataPediatria["ninas-IMC-5a19"] = obj;
});

$.getJSON("json/ninas-PC-E-5a19.json", function (obj) {
    dataPediatria["ninas-PC-E-5a19"] = obj;
});

$.getJSON("json/ninas-PxE-0a5.json", function (obj) {
    dataPediatria["ninas-PxE-0a5"] = obj;
});
$.getJSON("json/ninas-PxE-2a5-65a120.json", function (obj) {
    dataPediatria["ninas-PxE-2a5-65a120"] = obj;
});
$.getJSON("json/ninas-PxE-5a10.json", function (obj) {
    dataPediatria["ninas-PxE-5a10"] = obj;
});

$.getJSON("json/ninas-PxL-0a2-45a110.json", function (obj) {
    dataPediatria["ninas-PxL-0a2-45a110"] = obj;
});

$.getJSON("json/ninos-ExE-0a5.json", function (obj) {
    dataPediatria["ninos-ExE-0a5"] = obj;
});

$.getJSON("json/ninos-ExE-5a19.json", function (obj) {
    dataPediatria["ninos-ExE-5a19"] = obj;
});

$.getJSON("json/ninos-IMC-5a19.json", function (obj) {
    dataPediatria["ninos-IMC-5a19"] = obj;
});

$.getJSON("json/ninos-PC-E-5a19.json", function (obj) {
    dataPediatria["ninos-PC-E-5a19"] = obj;
});

$.getJSON("json/ninos-PxE-0a5.json", function (obj) {
    dataPediatria["ninos-PxE-0a5"] = obj;
});
$.getJSON("json/ninos-PxE-2a5-65a120.json", function (obj) {
    dataPediatria["ninos-PxE-2a5-65a120"] = obj;
});
$.getJSON("json/ninos-PxE-5a10.json", function (obj) {
    dataPediatria["ninos-PxE-5a10"] = obj;
});

$.getJSON("json/ninos-PxL-0a2-45a110.json", function (obj) {
    dataPediatria["ninos-PxL-0a2-45a110"] = obj;
});
google.charts.load('current', {
    'packages': ['corechart']
});



function drawChart(dataTable, title, divDraw) {

    var data = google.visualization.arrayToDataTable(dataTable);

    var options = {
        title: title,
        curveType: 'function',
        legend: {
            position: 'bottom'
        }
    };
    var chart = new google.visualization.LineChart(divDraw);
    chart.draw(data, options);

    return chart;
}



$("#peso").on("change", function () {
    estatura = parseInt($("#estatura").val());
    peso = parseInt($("#peso").val());
    $("#imc").val(funciones.calcularImc(peso, estatura));
});

$("#estatura").on("change", function () {
    estatura = parseInt($("#estatura").val());
    peso = parseInt($("#peso").val());
    $("#imc").val(funciones.calcularImc(peso, estatura));
});


$("#fecha_nac").on("change", function () {
    var edad = funciones.calculaEdad(moment(), moment($("#fecha_nac").val()));
    $("#edad_texto").html(edad.texto);
    $("#meses").val(edad.meses);
});




$("#enviar_datos").on("click", function () {

    
    if ($("#estatura").val() == '' || $("#peso").val() == '' || $("#fecha_nac").val() == '') {
        alert("faltan datos");
    }
    else {
        var sexo = $("#sexo").val();
        var tipo_grafico = $("#tipo_grafico").val();
        var idDraw = document.getElementById('curve_chart');
        var meses = parseInt($("#meses").val());
        var idGrafico = "";
        var tabla_base = [];

        console.log(sexo+" - "+tipo_grafico+" - "+meses);
        
        if (sexo == "m") {
            if (tipo_grafico == "exe" && (meses >= 0 && meses <= 60)) {
                tabla_base = dataPediatria["ninos-ExE-0a5"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, parseFloat($("#estatura").val())]);
                $.getJSON("json/ninos-ExE-0a5.json", function (obj) {
                    dataPediatria["ninos-ExE-0a5"] = obj;
                });

            }
            else if (tipo_grafico == "exe" && (meses > 60 && meses <= 228)) {
                tabla_base = dataPediatria["ninos-ExE-5a19"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, parseFloat($("#estatura").val())]);
                $.getJSON("json/ninos-ExE-5a19.json", function (obj) {
                    dataPediatria["ninos-ExE-5a19"] = obj;
                });

            }
            else if (tipo_grafico == "imc" && (meses > 60 && meses <= 228)) {
                tabla_base = dataPediatria["ninos-IMC-5a19"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, null, parseFloat($("#imc").val())]);
                $.getJSON("json/ninos-IMC-5a19.json", function (obj) {
                    dataPediatria["ninos-IMC-5a19"] = obj;
                });
            }
            else if (tipo_grafico == "pce" && (meses > 60 && meses <= 228)) {
                tabla_base = dataPediatria["ninos-PC-E-5a19"];
                tabla_base.tabla.push([parseInt(meses/12), null, null, null, null, null, parseFloat($("#pdc").val())]);
                $.getJSON("json/ninos-PC-E-5a19.json", function (obj) {
                    dataPediatria["ninos-PC-E-5a19"] = obj;
                })
            }
            else if (tipo_grafico == "pxe" && (meses >= 0 && meses <= 60)) {
                tabla_base = dataPediatria["ninos-PxE-0a5"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, parseFloat($("#peso").val())]);
                $.getJSON("json/ninos-PxE-0a5.json", function (obj) {
                    dataPediatria["ninos-PxE-0a5"] = obj;
                })
            }
            else if (tipo_grafico == "pxe2") {
                tabla_base = dataPediatria["ninos-PxE-2a5-65a120"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([parseFloat($("#estatura").val()), null, null, null, null, null, parseFloat($("#peso").val())]);
                $.getJSON("json/ninos-PxE-2a5-65a120.json", function (obj) {
                    dataPediatria["ninos-PxE-2a5-65a120"] = obj;
                })
            }
            else if (tipo_grafico == "pxe" && (meses > 60 && meses <= 120)) {
                tabla_base = dataPediatria["ninos-PxE-5a10"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, parseFloat($("#peso").val())]);
                $.getJSON("json/ninos-PxE-5a10.json", function (obj) {
                    dataPediatria["ninos-PxE-5a10"] = obj;
                })

            }
            else if (tipo_grafico == "pxl" && (meses >= 0 && meses <= 24)) {
                tabla_base = dataPediatria["ninos-PxL-0a2-45a110"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([parseFloat($("#estatura").val()), null, null, null, null, null, parseFloat($("#peso").val())]);
                $.getJSON("json/ninos-PxL-0a2-45a110.json", function (obj) {
                    dataPediatria["ninos-PxL-0a2-45a110"] = obj;
                })
            }
        }
        else if (sexo == "f") {
            if (tipo_grafico == "exe" && (meses >= 0 && meses <= 60)) {
                tabla_base = dataPediatria["ninas-ExE-0a5"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, parseFloat($("#estatura").val())]);
                $.getJSON("json/ninas-ExE-0a5.json", function (obj) {
                    dataPediatria["ninas-ExE-0a5"] = obj;
                });

            }
            else if (tipo_grafico == "exe" && (meses > 60 && meses <= 228)) {
                tabla_base = dataPediatria["ninas-ExE-5a19"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, parseFloat($("#estatura").val())]);
                $.getJSON("json/ninas-ExE-5a19.json", function (obj) {
                    dataPediatria["ninas-ExE-5a19"] = obj;
                });

            }
            else if (tipo_grafico == "imc" && (meses > 60 && meses <= 228)) {
                tabla_base = dataPediatria["ninas-IMC-5a19"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, null, parseFloat($("#imc").val())]);
                $.getJSON("json/ninas-IMC-5a19.json", function (obj) {
                    dataPediatria["ninas-IMC-5a19"] = obj;
                });
            }
            else if (tipo_grafico == "pce" && (meses > 60 && meses <= 228)) {
                tabla_base = dataPediatria["ninas-PC-E-5a19"];
                tabla_base.tabla.push([parseInt(meses/12), null, null, null, null, null, parseFloat($("#pdc").val())]);
                $.getJSON("json/ninas-PC-E-5a19.json", function (obj) {
                    dataPediatria["ninas-PC-E-5a19"] = obj;
                })
            }
            else if (tipo_grafico == "pxe" && (meses >= 0 && meses <= 60)) {
                tabla_base = dataPediatria["ninas-PxE-0a5"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, parseFloat($("#peso").val())]);
                $.getJSON("json/ninas-PxE-0a5.json", function (obj) {
                    dataPediatria["ninas-PxE-0a5"] = obj;
                })
            }
            else if (tipo_grafico == "pxe2") {
                tabla_base = dataPediatria["ninas-PxE-2a5-65a120"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([parseFloat($("#estatura").val()), null, null, null, null, null, parseFloat($("#peso").val())]);
                $.getJSON("json/ninas-PxE-2a5-65a120.json", function (obj) {
                    dataPediatria["ninas-PxE-2a5-65a120"] = obj;
                })
            }
            else if (tipo_grafico == "pxe" && (meses > 60 && meses <= 120)) {
                tabla_base = dataPediatria["ninas-PxE-5a10"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([meses, null, null, null, null, null, parseFloat($("#peso").val())]);
                $.getJSON("json/ninas-PxE-5a10.json", function (obj) {
                    dataPediatria["ninas-PxE-5a10"] = obj;
                })

            }
            else if (tipo_grafico == "pxl" && (meses >= 0 && meses <= 24)) {
                tabla_base = dataPediatria["ninas-PxL-0a2-45a110"];
                tabla_base.tabla.forEach(element => {
                    element.splice(1, 1);
                    element.splice(1, 1);
                    element.splice(1, 1);
                });
                tabla_base.tabla.push([parseFloat($("#estatura").val()), null, null, null, null, null, parseFloat($("#peso").val())]);
                $.getJSON("json/ninas-PxL-0a2-45a110.json", function (obj) {
                    dataPediatria["ninas-PxL-0a2-45a110"] = obj;
                })
            }
        }
        if (tabla_base.tabla !== undefined) {
            $("#curve_chart").empty();
            drawnChart = drawChart(tabla_base.tabla, tabla_base.titulo, idDraw);
            drawnChart.setSelection([{ row: tabla_base.tabla.length - 2, column: tabla_base.tabla[tabla_base.tabla.length - 1].length - 1 }]);
            google.charts.setOnLoadCallback(drawnChart);
        }
    }
});