//// Zinsrechner

$(document).ready(function() {

  /// Variablen
  
  // Berechnen Button
  let Berechnen = $("#berechnen");
  
  // Output
  let kn_output = $("#endkapital");
  let z_output = $("#zinsen");
  let s_output = $("#steigung");
  
  /// Berechnung
  Berechnen.click(function() {
    
    // Input
    let k = parseFloat($("#startkapital").val());
    let p = parseFloat($("#zinssatz").val()) / 100;
    let e = $("#zeiteinheit").val();
    let i = parseFloat($("#laufzeit").val());
    let r = 0; //parseFloat($("#sparrate").val());

    let zinsansammlung = $("input[name='radio']:checked").val();
    let t;
    let zz;
    
    // Zeiteinheit
    if (e == "Jahre") {
      t = 1; 
    }
    else if (e == "Monate") {
      t = 12;
    }
    else if (e == "Tage") {
      t = 360;
    }
    else {
      console.error("Ungültige Eingabe");
    }
    
    // Berechnung
    if (zinsansammlung == "1" && e == "Jahre" || (zinsansammlung == "1" && e == "Tage" && i > 360) || (zinsansammlung == "1" && e == "Monate" && i > 12)) {
      zz = Math.pow(1 + p, i / t);
      sp = (12 * r) * i;

    }
    else if (zinsansammlung == "2" || (e == "Tage" && i <= 360) || (e == "Monate" && i <= 12)) {
      zz = (1 + p * i / t);
    }
    else {
      console.error("Ungültige Eingabe");
    }
    
    let kn = (k + sp) * zz; 
    let z = kn - k;
    let s = z / k;
    
    // Output
    kn_output.text(kn.toFixed(2));
    z_output.text(z.toFixed(2));
    s_output.text((s * 100).toFixed(1));
  });


});