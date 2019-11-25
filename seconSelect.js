function myFunction() {
  var x = document.getElementById("Myselect").value;
  var y = document.getElementById("qty").value;

  var z = Math.round((x * 1.13) * 100) / 100;

  var fianlResult = y * z;
  document.getElementById("result").innerHTML = fianlResult;

  return fianlResult;
}

function findTotal(){
    var arr = document.getElementsByName('Myselect');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }

     var arr1 = document.getElementsByName('qty');
    var tot1=0;
    for(var i=0;i<arr1.length;i++){
        if(parseInt(arr1[i].value))
            tot1 += parseInt(arr1[i].value);
    }
    document.getElementById('total').value = tot * tot1;
}

function gst(){

   var arr = document.getElementsByName('Myselect');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }

    document.getElementById('gst').value = Math.round((tot * 0.05)*100)/100;

}

function pst(){

   var arr = document.getElementsByName('Myselect');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }

    document.getElementById('pst').value = Math.round((tot * 0.07)*100)/100;

}

function subtotal(){
    var arr = document.getElementsByName('Myselect');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }

    var arr1 = document.getElementsByName('qty');
    var tot1=0;
    for(var i=0;i<arr1.length;i++){
        if(parseInt(arr1[i].value))
            tot1 += parseInt(arr1[i].value);
    }

    document.getElementById('Subtotal').value = Math.round((((tot)*1.13)*100)/100)*tot1;
}