var height = width = 0;
var life = 1;
var pontos = 0;
var tempo = 10;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace( '?', '' );

if ( nivel === 'normal' )
{
    criaMosquitoTempo = 1500;
} else if ( nivel === 'dificil' )
{
    criaMosquitoTempo = 1000;
} else if ( nivel === 'chucknorris' )
{
    criaMosquitoTempo = 750;
}

var time = setInterval( randonPosition, 2000 );
var fly = document.getElementById( 'fly' );
var cronometro = setInterval( function ()
{
    document.getElementById( 'cronometro' ).innerHTML = tempo;
    tempo -= 1;
}, 1000 );
document.getElementById( 'cronometro' ).innerHTML = tempo;

function refreshWindowSize ()
{
    height = window.innerHeight;
    width = window.innerWidth;
}

function refreshPoint ()
{
    pontos++;
    if ( tempo <= 0 )
    {
        window.location.href = '/html/winner.html';
    }
    clearInteval();
}

function refreshHeart ()
{
    if ( life > 2 )
    {
        window.location.href = '../html/game-over.html';
    }
    document.getElementById( 'v' + life ).src = "images/coracao_vazio.png";
    life++;
    randonPosition();
}

function randonPosition ()
{
    var flyX = Math.floor( Math.random() * width ) - 200;
    var flyY = Math.floor( Math.random() * height ) - 200;
    flyX = flyX < 40 ? 50 : flyX;
    flyY = flyY < 40 ? 50 : flyY;
    fly.style.top = flyY + 'px';
    fly.style.left = flyX + 'px';
    flySize();
    interval();
}

function flySize ()
{
    var inverted = 0;
    var size = 0;
    var classe = Math.floor( Math.random() * 4 );
    switch ( classe )
    {
        case 0:
            inverted = 'rotateY(180deg)';
            size = '150px';
            break;
        case 1:
            inverted = 'rotateY(180deg)';
            size = '100px';
            break;
        case 2:
            inverted = 'rotateY(0deg)';
            size = '150px';
            break;
        case 3:
            inverted = 'rotateY(0deg)';
            size = '100px';
            break;
    }
    fly.style.transform = inverted;
    fly.style.width = size;
}

function interval ()
{
    clearInterval( time );
    time = setInterval( refreshHeart, criaMosquitoTempo );
}
function clearInteval ()
{
    clearInterval( time );
    randonPosition();
}
refreshWindowSize();
interval();

