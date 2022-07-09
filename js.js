$(document).ready(function() {
    let gun_ay = "<tr id='tr'><td><b>No</b></td>";
    for(var i=0;i<=23;i++){
      var tarih = new Date();
      tarih.setDate(tarih.getDate() + i);
      var gun = tarih.getDate();
      var ay  = tarih.getMonth() + 1;
      gun_ay += '<td>'+gun+'/'+ay+'</td>';
    }
    gun_ay +="</tr>";
    document.getElementById("takvim").innerHTML = gun_ay;
  });
  for(var i=1;i<=200;i++){
      arac_takvim(i); 
  }
  function arac_takvim(arac_adi){
    let gun_ay = "<tr><td class='plaka'>"+arac_adi+"</td>";
    for(var i=0;i<=23;i++){
      var tarih = new Date();
      tarih.setDate(tarih.getDate() + i);
      var gun = tarih.getDate();
      var ay  = tarih.getMonth() + 1;
      // gun_ay += '<td>'+gun+'/'+ay+'</td>';
      
      if(i%5){
        var durum="boş";
      }else {
        var durum="dolu";
      }
      gun_ay += '<td>'+durum+'</td>';
      
    }
    gun_ay +="</tr>";
    document.getElementById("table").innerHTML += gun_ay;
  }
  