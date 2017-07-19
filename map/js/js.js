/*========================================On resize to change the header img====================================*/
$(document).ready(function() {
    let width = $(window).width();

    $(window).resize(function() {
        if (width > 1000) {
            $('#header-img-section img').attr('src', 'imgs/header-img1920.png');
        } else if (width >= 1000 && width <= 700) {
            $('#header-img-section img').attr('src', 'imgs/header-img1000.png');
        } else {
            $('#header-img-section img').attr('src', 'imgs/header-img700.png');
        }
    });
});

/*========================================Google map+JSON====================================*/
let map;
let officesArray = [];

function initMap() {
    let officesJSON = '{ "offices":[' +
        '{"name":"Sofia University", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.693508", "long":"23.334793"}, '+
        '{"name":"NDK", "address":"Sofia", "atm":"true", "extended":"false", "lat":"42.685857", "long":"23.317661"},'+
        '{"name":"Ivan Vazov", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.694380", "long":"23.326200"},'+
        '{"name":"Sveta Nedelq", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.696719", "long":"23.321429"},'+
        '{"name":"Palace of Justice", "address":"Sofia", "atm":"true", "extended":"false", "lat":"42.695419", "long":"23.320503"},'+
        '{"name":"Puppet Museum", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.693985", "long":"23.316956"},'+
        '{"name":"Church St. George Rotunda", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.696911", "long":"23.322902"},'+
        '{"name":"Cathedral Saint Alexandar Nevski", "address":"Sofia", "atm":"true", "extended":"false", "lat":"42.695811", "long":"23.332900"},'+
        '{"name":"Sveta Petka Church", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.697865", "long":"23.322187"},'+
        '{"name":"National Art Gallery", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.696323", "long":"23.327078"},'+
        '{"name":"Gallery Rimini", "address":"Sofia", "atm":"true", "extended":"false", "lat":"42.697321", "long":"23.328837"},'+
        '{"name":"Park Zaimov", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.697451", "long":"23.342342"},'+
        '{"name":"Hospital Tsaritsa Yoanna", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.700812", "long":"23.339113"},'+
        '{"name":"City Garden", "address":"Sofia", "atm":"true", "extended":"false", "lat":"42.695140", "long":"23.325375"},'+
        '{"name":"Krystal Garden", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.694536", "long":"23.329638"},'+
        '{"name":"National Stadium Vasil Levski", "address":"Sofia", "atm":"false", "extended":"true", "lat":"42.687588", "long":"23.335247"},'+
        '{"name":"Planet Club", "address":"Sofia", "atm":"true", "extended":"false", "lat":"42.682857", "long":"23.316854"} ]}';


    officesArray = JSON.parse(officesJSON);

    let locations = [
        [officesArray.offices[0].name + '<br>'+ officesArray.offices[0].address, officesArray.offices[0].lat, officesArray.offices[0].long, 0],
        [officesArray.offices[1].name + '<br>'+ officesArray.offices[1].address, officesArray.offices[1].lat, officesArray.offices[1].long, 1],
        [officesArray.offices[2].name + '<br>'+ officesArray.offices[2].address, officesArray.offices[2].lat, officesArray.offices[2].long, 2],
        [officesArray.offices[3].name + '<br>'+ officesArray.offices[3].address, officesArray.offices[3].lat, officesArray.offices[3].long, 3],
        [officesArray.offices[4].name + '<br>'+ officesArray.offices[4].address, officesArray.offices[4].lat, officesArray.offices[4].long, 4],
        [officesArray.offices[5].name + '<br>'+ officesArray.offices[5].address, officesArray.offices[5].lat, officesArray.offices[5].long, 5],
        [officesArray.offices[6].name + '<br>'+ officesArray.offices[6].address, officesArray.offices[6].lat, officesArray.offices[6].long, 6],
        [officesArray.offices[7].name + '<br>'+ officesArray.offices[7].address, officesArray.offices[7].lat, officesArray.offices[7].long, 7],
        [officesArray.offices[8].name + '<br>'+ officesArray.offices[8].address, officesArray.offices[8].lat, officesArray.offices[8].long, 8],
        [officesArray.offices[9].name + '<br>'+ officesArray.offices[9].address, officesArray.offices[9].lat, officesArray.offices[9].long, 9],
        [officesArray.offices[10].name + '<br>'+ officesArray.offices[10].address, officesArray.offices[10].lat, officesArray.offices[10].long, 10],
        [officesArray.offices[11].name + '<br>'+ officesArray.offices[11].address, officesArray.offices[11].lat, officesArray.offices[11].long, 11],
        [officesArray.offices[12].name + '<br>'+ officesArray.offices[12].address, officesArray.offices[12].lat, officesArray.offices[12].long, 12],
        [officesArray.offices[13].name + '<br>'+ officesArray.offices[13].address, officesArray.offices[13].lat, officesArray.offices[13].long, 13],
        [officesArray.offices[14].name + '<br>'+ officesArray.offices[14].address, officesArray.offices[14].lat, officesArray.offices[14].long, 14],
        [officesArray.offices[15].name + '<br>'+ officesArray.offices[15].address, officesArray.offices[15].lat, officesArray.offices[15].long, 15],
        [officesArray.offices[16].name + '<br>'+ officesArray.offices[16].address, officesArray.offices[16].lat, officesArray.offices[16].long, 16]
];



    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: new google.maps.LatLng(42.695419, 23.320503),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    let infowindow = new google.maps.InfoWindow({});

    let marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    //append the location name and address in div
    $(document).ready(function() {
        for (let i = 0; i < officesArray.offices.length; i++) {
        $('#location-items').append(
            officesArray.offices[i].name + '<br>' + officesArray.offices[i].address + '<hr>' + '<br>'
        )}
    });
}

/*========================================checkboxes====================================*/
$('#atm').change(function () {
   if($('#atm').is(':checked') && $('#work').is(':checked')){
       initMap();
   }else if($('#atm').is(':checked')){
       for (let i = 0; i < officesArray.offices.length; i++) {
           if(officesArray.offices[i].atm == "true") {
               //TODO
           }
       }
   }
});

$('#work').change(function () {
    if($('#work').is(':checked') && $('#atm').is(':checked')){
        initMap();
    }else if($('#work').is(':checked')){
        for (let i = 0; i < officesArray.offices.length; i++) {
            if(officesArray.offices[i].extended == "true") {
                //TODO
            }
        }
    }
});