#!/bin/bash

source keys

ciudades[0]="Álava";
ciudades[1]="Albacete";
ciudades[2]="Alicante";
ciudades[3]="Almería";
ciudades[4]="Asturias";
ciudades[5]="Ávila";
ciudades[6]="Badajoz";
ciudades[7]="Barcelona";
ciudades[8]="Burgos";
ciudades[9]="Cáceres";
ciudades[10]="Cádiz";
ciudades[11]="Cantabria";
ciudades[12]="Castellón";
ciudades[13]="Ciudad\ Real";
ciudades[14]="Córdoba";
ciudades[15]="Coruña";
ciudades[16]="Cuenca";
ciudades[17]="Girona";
ciudades[18]="Granada";
ciudades[19]="Guadalajara";
ciudades[20]="Guipuzcoa";
ciudades[21]="Huelva";
ciudades[22]="Huesca";
ciudades[23]="Baleares";
ciudades[24]="Jaén";
ciudades[25]="León";
ciudades[26]="Lerida";
ciudades[27]="Lugo";
ciudades[28]="Madrid";
ciudades[29]="Málaga";
ciudades[30]="Murcia";
ciudades[31]="Navarra";
ciudades[32]="Orense";
ciudades[33]="Palencia";
ciudades[34]="Las\ Palmas";
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
      sleep 2m;
  done

  ##Madrid y Barcelona dan algunos problemas, al tener muchos. Así parece que se soluciona
  sleep 2m;
  ./get-city.coffee Barcelona;
  sleep 5m;
  ./get-city.coffee Madrid;
  sleep 1m;
done
