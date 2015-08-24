  $.getJSON('/api/brewerydb/landing.json')
   .then(function(landing){

     $beername = $('#beername');
     $beername.text(landing.data.name);

     $abvvalue = $('#abvvalue');
     $abvvalue.text(landing.data.abv);

     $describe = $('#describe');
     $describe.text(landing.data.description);

     $catdes = $('#catdes');
     $catdes.text(landing.data.catdes);

     //$beerimage = $('img', '.beerimage');
    // $beerimage.attr('src', 'http://www.comradebrewing.com/wp-content/uploads/2013/08/craftbeer.jpg');

   });

$("#dropbox").change(function beerchange() {
  if ($('#dropbox').val()=="zombieK") {
    console.log(beerchange);

// Youtube JSON
$.getJSON('/api/youtube/b-nektar.json')
.then(function(bnektar){
  console.log(bnektar);

  $vidTitle = $('#vidTitle');
  $vidTitle.text(bnektar.title);

  $vidDescript = $('#vidDescript');
  $vidDescript.text(bnektar.description);

  $vidPlay = $('#vidPlay');
  $vidPlay.html(bnektar.html);

});

// Beer JSON
$.getJSON('/api/brewerydb/zombiekiller.json')
 .then(function(zombiekiller){
   console.log(zombiekiller);

   $beername = $('#beername');
   $beername.text(zombiekiller.data.name);

   $abvvalue = $('#abvvalue');
   $abvvalue.text(zombiekiller.data.abv);

   $describe = $('#describe');
   $describe.text(zombiekiller.data.description);

   $catdes = $('#catdes');
   $catdes.text(zombiekiller.data.style.description);

   $beerimage = $('img', '.beerimage');
   $beerimage.attr('src', zombiekiller.data.labels.medium);

 });

   }

 else if ($('#dropbox').val()=="kellerW"||"choose"){

 $.getJSON('/api/brewerydb/kellerweis.json')
  .then(function(kellerweis){
    console.log(kellerweis);

    $beername = $('#beername');
    $beername.text(kellerweis.data.name);

    $abvvalue = $('#abvvalue');
    $abvvalue.text(kellerweis.data.abv);

    $describe = $('#describe');
    $describe.text(kellerweis.data.description);

    $catdes = $('#catdes');
    $catdes.text(kellerweis.data.style.description);

    $beerimage = $('img', '.beerimage');
    $beerimage.attr('src', kellerweis.data.labels.medium);

  });
  // Youtube JSON
  $.getJSON('/api/youtube/mead.json')
  .then(function(meads){
    console.log(meads);

    $vidTitle = $('#vidTitle');
    $vidTitle.text(meads.title);

    $vidDescript = $('#vidDescript');
    $vidDescript.text(meads.description);

    $vidPlay = $('#vidPlay');
    $vidPlay.html(meads.html);

  });
}

else {
  $.getJSON('/api/brewerydb/landing.json')
   .then(function(landing){
     console.log(landing);

     $beername = $('#beername');
     $beername.text(landing.data.name);

     $abvvalue = $('#abvvalue');
     $abvvalue.text(landing.data.abv);

     $describe = $('#describe');
     $describe.text(landing.data.description);

     $catdes = $('#catdes');
     $catdes.text(landing.data.style.description);

     //$beerimage = $('img', '.beerimage');
    // $beerimage.attr('src', 'http://www.comradebrewing.com/wp-content/uploads/2013/08/craftbeer.jpg');

   });
}


});
