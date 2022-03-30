

var textoFinal = "";

var cartas =  [];
cartas[0] = "Alossauro:	Besta Grande:	imparcial:	51:	6d10 + 18:	13:armadura natural:	12:	19:	13:	17:	2:	12:	5:	4:	1:	3:	-4:	1:	-3:	<b> Bote. </b> Se o alossauro se mover, pelo menos, 9 metros em linha reta em direção de uma criatura e atingi-la, no mesmo turno, o alvo deve ser bem sucedido num teste de resistência de Força CD 13 para não cair no chão. Se o alvo cair no chão, o alossauro pode realizar um ataque de mordida contra ele, com uma ação bônus.:	Percepção Passiva <b> 15 </b>:	-:	2:	450:	Manual dos Monstros 2.0: <b> Mordida. </b> Ataque Corpo-a-Corpo com Arma = +6 para atingir, alcance 1,5 m, um alvo. Acerto = 15 (2d10 + 4) de dano perfurante. </br> <b> Garra. </b> Ataque Corpo-a-Corpo com Arma = +6 para atingir, alcance 1,5 m, um alvo. Acerto = 8 (1d8 + 4) de dano cortante.,	Dinossauro";

var nome= [];
nome[0]= cartas[0].split(":");

  for(i=0;i<nome.length;i++)
  {
    textoFinal = textoFinal + ""
    +    " <!-- DIV CARTA --> "
    +    "  <div class='card' id='carta1'> "
    +    "     <!-- NOME CARTA -->"
    +    "    <p style='font-size: 20px; font-weight: 600;'> "
    +    "       " + nome[i][0] + ""
    +    "        <span style='font-size: 14px; font-weight: 200; font-style: italic;'> "
    +    "            "+nome[i][1] +", "+ nome[i][2]+""
    +    "        </span> "
    +    "        <a href=''> " 
    +    "            <img style='vertical-align: text-top; float:right; height:30px;' src='../icons/druidbook.png'></img> "
    +    "        </a> "
    +    "    </p> "
    +    "    <p> "
    +    "        <img src='../icons/hp.png' style='height: 15px; vertical-align: top;' ></img> <span style='vertical-align: top; font-size: 10px; font-weight: 300;'; > " + nome[i][3] + " (" + nome[i][4] + ")</span> "
    +    "        <img src='../icons/shield.png' style='height: 15px; vertical-align: top;' ></img> <span style='vertical-align: top; font-size: 10px; font-weight: 300;';> " + nome[i][5] + " (" + nome[i][6] + ")</span> "
    +    "        <img src='../icons/noun-running-1747729.svg' style='height: 15px;' ></img> <span style='vertical-align: top; font-size: 10px; font-weight: 300;';> "+nome[i][7]+" metros</span> "
    +    "    </p>"
    +    "    <hr size='1px' width='100%' color='black'></hr> "
    +    "    <!-- ATRIBUTOS --> "
    +    "    <p style='font-weight: 800; font-size: 24px;'> " 
    +    "        " + nome[i][8] + " &nbsp;&nbsp; " + nome[i][9] + " &nbsp;&nbsp; " + nome[i][10] + " &nbsp;&nbsp; " + nome[i][11] + " &nbsp;&nbsp; " + nome[i][12] + " &nbsp;&nbsp; " + nome[i][13] + " </br> "
    +    "        <span style='font-weight: 200; font-size: 11px; font-style: italic;''> "
    +    "            FOR("+nome[i][14]+") DEX("+nome[i][15]+") CON("+nome[i][16]+") INT("+nome[i][17]+") SAB("+nome[i][18]+") CAR("+nome[i][19]+") "
    +    "        </span> "
    +    "    </p>  "
    +    "    <hr size='1px' width='100%'' color='black'></hr> "
    +    "    <!-- INFORMAÇÕES --> "
    +    "    <p style='font-weight: 400; font-size: 14px;'> " 
    +    "        <span style='font-weight:200;'> Perícias </span></br> "+nome[i][20]+"</br> "
    +    "        <span style='font-weight:200;'> Sentidos </span></br> "+nome[i][21]+" </br> "
    +    "        <span style='font-weight:200;'> Idiomas </span></br> "+nome[i][22] +"</br> "
    +    "        <span style='font-weight:200;'> Nível de Desafio </span></br> <b> " + nome[i][23] + "</b> ( " + nome[i][24] + " xp ) "
    +    "    </p>   "
    +    "    <p style='font-weight: 600; font-size: 16px; vertical-align: bottom;'> "
    +    "        Ações "
    +    "    </p> "
    +    "   <hr size='1px' width='100%'' color='black'></hr> "
    +    "    <!-- AÇÕES --> "
    +    "    <p  style='font-weight: 400; font-size: 14px;'> "   
    +    "       "+nome[i][26]+"" 
    +    "    </p> "
    +    "    </br>"
    +    "    <p style='font-weight: 100; font-size: 12px; text-align: center;'> Origem: "+nome[i][25]+"</p> </br>"               
    +    "</div>         ";
  }

document.getElementById("cardSpace").innerHTML = textoFinal;