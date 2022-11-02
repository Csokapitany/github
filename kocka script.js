<script type="text/javascript">
  function Dobas() {
      var k = parseInt(document.getElementById("k").value.substr(1));
      var darab = parseInt(document.getElementById("darab").value);
      darab = darab || 1;
      var elojel = document.getElementById("elojel").value;
      var bonusz = parseInt(document.getElementById("bonusz").value);
      bonusz = bonusz || 0;
      var elozo = document.getElementById("elozo").value;
      var sum = 0;
      
      // Kockadobások kiszámítása
      for(var i = 0; i<darab; i++) {
          sum += parseInt(Math.floor(Math.random() * 999999) % k + 1);
      }
      
      // Megfelelő bónusz hozzáadása
      if(elojel == "+")
          sum += parseInt(bonusz);
      else
          sum -= parseInt(bonusz);
          
      document.getElementById("eredm").innerHTML = sum;
      document.getElementById("elozo").innerHTML = darab + "k" + k + " " + ((bonusz == 0) ? "" : (elojel + " " + bonusz)) + " = <b>" + sum + "</b><br />" + document.getElementById("elozo").innerHTML;
      
      var str = document.getElementById("elozo").innerHTML;
      var sorokSzama = 5;
      
      if(str.split('br').length-1 >= sorokSzama) {
          lastIndex = str.lastIndexOf("br");
          document.getElementById("elozo").innerHTML = str.substr(0, lastIndex-1);
      }
  }
  
  // Dobás egyedi oldalú kockával
  function egyedi_dobas() {

      var dobaskod = document.getElementById("dobaskod").value.replace(/\s/g, "").toLowerCase();
      
      // Helyes kódot adtak-e meg.
      if(!dobaskod.match("^[0-9]*k[0-9]+([+-]?[0-9]+)?$")) {
          document.getElementById("eredm").innerHTML = "?";
          return false;
      }
      
      var kocka_szam, kocka_oldal, bonusz = 0, sum = 0, elojel;
      var dobaskod_reszek = dobaskod.split('k');
          
      // Ha nincs megadva, hogy hány kockával dobtunk, feltételezzük, hogy eggyel
      if(dobaskod_reszek[0].length != 0)
          kocka_szam = parseInt(dobaskod_reszek[0]);
      else
          kocka_szam = 1;
      
      // Pozitív, negatív, vagy semmilyen bónusz kell
      if(dobaskod.indexOf("+") != -1) 
      {
          elojel = "+";
          dobaskod_reszek = dobaskod_reszek[1].split('+');
          kocka_oldal = parseInt(dobaskod_reszek[0]);
          bonusz = parseInt(dobaskod_reszek[1]);
      } 
      else if(dobaskod.indexOf("-") != -1) 
      {  
          elojel = "-"
          dobaskod_reszek = dobaskod_reszek[1].split('-');
          kocka_oldal = parseInt(dobaskod_reszek[0]);
          bonusz = parseInt(dobaskod_reszek[1]);
      } 
      else 
      {
          kocka_oldal = parseInt(dobaskod_reszek[1]);
      }

      sum = 0;
      // Kockadobások kiszámítása
      for(var i = 0; i<kocka_szam; i++) {
          if(kocka_oldal != 0)
              sum += parseInt(Math.floor(Math.random() * 999999) % kocka_oldal + 1);
      }
                  
      // Megfelelő bónusz hozzáadása
      if(elojel == "+")
          sum += parseInt(bonusz);
      else
          sum -= parseInt(bonusz);
      
      // Eredmény megjelenítése
      document.getElementById("eredm").innerHTML = sum;
      document.getElementById("elozo").innerHTML = kocka_szam + "k" + kocka_oldal + " " + ((bonusz == 0) ? "" : (elojel + " " + bonusz)) + " = <b>" + sum + "</b><br />" + document.getElementById("elozo").innerHTML;
      
      // A legutolsó 5 eredmény megtartása
      var str = document.getElementById("elozo").innerHTML;
      var sorokSzama = 5;
  
      if(str.split('br').length-1 >= sorokSzama) {
          lastIndex = str.lastIndexOf("br");
          document.getElementById("elozo").innerHTML = str.substr(0, lastIndex-1);
      }
  }
  
  </script>