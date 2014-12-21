#!/bin/bash

source keys

ciudades[0]="Alava";
ciudades[1]="Albacete";
ciudades[2]="Alicante";
ciudades[3]="Almeria";
ciudades[4]="Asturias";
ciudades[5]="Avila";
ciudades[6]="Badajoz";
ciudades[7]="Barcelona";
ciudades[8]="Burgos";
ciudades[9]="Caceres";
ciudades[10]="Cadiz";
ciudades[11]="Cantabria";
ciudades[12]="Castellon";
ciudades[13]="Ciudad Real";
ciudades[14]="Cordoba";
ciudades[15]="Coruña";
ciudades[16]="Cuenca";
ciudades[17]="Gerona";
ciudades[18]="Granada";
ciudades[19]="Guadalajara";
ciudades[20]="Guipuzcoa";
ciudades[21]="Huelva";
ciudades[22]="Huesca";
ciudades[23]="Baleares";
ciudades[24]="Jaen";
ciudades[25]="Leon";
ciudades[26]="Lerida";
ciudades[27]="Lugo";
ciudades[28]="Madrid";
ciudades[29]="Malaga";
ciudades[30]="Murcia";
ciudades[31]="Navarra";
ciudades[32]="Orense";
ciudades[33]="Palencia";
ciudades[34]="Las Palmas";
ciudades[35]="Pontevedra";
ciudades[36]="Rioja";
ciudades[37]="Salamanca";
ciudades[38]="Tenerife";
ciudades[39]="Segovia";
ciudades[40]="Sevilla";
ciudades[41]="Soria";
ciudades[42]="Tarragona";
ciudades[43]="Teruel";
ciudades[44]="Toledo";
ciudades[45]="Valencia";
ciudades[46]="Valladolid";
ciudades[47]="Vizcaya";
ciudades[48]="Zamora";
ciudades[49]="Zaragoza";
ciudades[50]="Ceuta";
ciudades[51]="Melilla";


while true; do
  for i in "${ciudades[@]}"
  do
      echo $i;
      ./get-city.coffee $i;
      sleep 3m;
  done
  sleep 1m;
done
