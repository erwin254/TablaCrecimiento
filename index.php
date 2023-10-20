<html>

  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
      #curve_chart {
        height: 700px;
      }
    </style>
  </head>

  <body>
    <div class="col-md-6 offset-md-3 mt-3">
      <div class="input-group mb-3">
        <select name="tipo_grafico" id="tipo_grafico" class="form-control">
          <option value="pxe">Peso por Edad</option>
          <option value="exe">Estatura por Edad</option>
          <option value="imc">IMC</option>
          <option value="pce">Perímetro de cintura por edad</option>
          <option value="pxe2">Peso por Estatura 65 a 120 cm</option>
          <option value="pxl"> Peso por longitud 45 a 110 cm</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <input class="form-control" type="date" id="fecha_nac" name="fecha_nac">
        <input type="hidden" id="meses" value="0">
      </div>
      <div id="edad_texto"></div>
      <div class="input-group mb-3">
        <input class="form-control" type="number" id="estatura" name="estatura" placeholder="Estatura en CM">
      </div>
      <div class="input-group mb-3">
        <input class="form-control" type="number" id="peso" name="peso" placeholder="Peso en KG">
      </div>
      <div class="input-group mb-3">

        <select name="sexo" id="sexo" class="form-control">
          <option value="m">Masculino</option>
          <option value="f">Femenino</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <input type="text" id="IMC" name="IMC" placeholder="IMC" class="form-control">
      </div>
      <div class="input-group mb-3">
        <buttom id="enviar_datos" class="btn btn-primary">Calcular</buttom>
      </div>
    </div>
    <select name="" id="tablas" hidden>
      <option value="ninas-ExE-0a5">ninas-ExE-0a5</option>
      <option value="ninas-ExE-5a19">ninas-ExE-5a19</option>
      <option value="ninas-IMC-5a19">ninas-IMC-5a19</option>
      <option value="ninas-PC-E-5a19">ninas-PC-E-5a19</option>
      <option value="ninas-PxE-0a5">ninas-PxE-0a5</option>
      <option value="ninas-PxE-2a5-65a120">ninas-PxE-2a5-65a120</option>
      <option value="ninas-PxE-5a10">ninas-PxE-5a10</option>
      <option value="ninas-PxL-0a2-45a110">ninas-PxL-0a2-45a110</option>
      <option value="ninos-ExE-0a5">ninos-ExE-0a5</option>
      <option value="ninos-ExE-5a19">ninos-ExE-5a19</option>
      <option value="ninos-IMC-5a19">ninos-IMC-5a19</option>
      <option value="ninos-PC-E-5a19">ninos-PC-E-5a19</option>
      <option value="ninos-PxE-0a5">ninos-PxE-0a5</option>
      <option value="ninos-PxE-2a5-65a120">ninos-PxE-2a5-65a120</option>
      <option value="ninos-PxE-5a10">ninos-PxE-5a10</option>
      <option value="ninos-PxL-0a2-45a110">ninos-PxL-0a2-45a110</option>
    </select>
    <div id="curve_chart"></div>
  </body>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script src="node_modules\moment\moment.js"></script>
  <script src="js/index.js?v=<?php echo rand(); ?>"></script>
</html>