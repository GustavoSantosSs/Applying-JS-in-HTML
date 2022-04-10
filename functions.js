function media_total () {
    var n1 = parseInt(document.getElementById('no1').value);
    var n2 = parseInt(document.getElementById('no2').value);
    var n3 = parseInt(document.getElementById('no3').value);
    var pe1 = parseInt(document.getElementById('p1').value);
    var pe2 = parseInt(document.getElementById('p2').value);
    var pe3 = parseInt(document.getElementById('p3').value);
    var totaP = pe1+pe2+pe3
    var tot = (parseInt((n1*pe1+n2*pe2+n3*pe3)/totaP)).toFixed(1)
    document.getElementById('nf').value = tot;
}