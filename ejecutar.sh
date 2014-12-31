#!/bin/bash

source keys


ciudades[0]="Albacete";
ciudades[1]="Alicante";
ciudades[2]="Almería";
ciudades[3]="Ávila";
ciudades[4]="Badajoz";
ciudades[5]="Barcelona";
ciudades[6]="Bilbao";
ciudades[7]="Burgos";
ciudades[8]="Cáceres";
ciudades[9]="Cádiz";
ciudades[10]="Castellón";
ciudades[11]="Ciudad\ Real";
ciudades[12]="Córdoba";
ciudades[13]="Coruña";
ciudades[14]="Cuenca";
ciudades[15]="Donostia";
ciudades[16]="Gijón";
ciudades[17]="Girona";
ciudades[18]="Granada";
ciudades[19]="Guadalajara";
ciudades[20]="Huelva";
ciudades[21]="Huesca";
ciudades[22]="Baleares";
ciudades[23]="Jaén";
ciudades[24]="Jerez";
ciudades[25]="León";
ciudades[26]="Lleida";
ciudades[27]="Logroño";
ciudades[28]="Lugo";
ciudades[39]="Madrid";
ciudades[30]="Málaga";
ciudades[31]="Murcia";
ciudades[32]="Ourense";
ciudades[33]="Oviedo";
ciudades[34]="Pamplona";
ciudades[35]="Palencia";
ciudades[36]="Las\ Palmas";
ciudades[37]="Pontevedra";
ciudades[38]="Salamanca";
ciudades[39]="Tenerife";
ciudades[40]="Santander";
ciudades[41]="Segovia";
ciudades[42]="Sevilla";
ciudades[43]="Soria";
ciudades[44]="Tarragona";
ciudades[45]="Teruel";
ciudades[46]="Toledo";
ciudades[47]="Valencia";
ciudades[48]="Valladolid";
ciudades[49]="Vitoria";
ciudades[50]="Zamora";
ciudades[51]="Zaragoza";
ciudades[52]="Ceuta";
ciudades[53]="Melilla";


#while true; do
  for i in "${ciudades[@]}"
  do
      echo $i;
      ./get-city.coffee $i;
      sleep 3m;
  done
  sleep 1m;
#done;
