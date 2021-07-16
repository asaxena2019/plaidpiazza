chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage()
{
	// example
	/*
	let questionText = document.getElementById("questionText");
	questionText.style['background-color'] = '#00CED1';
    questionText.style['color'] = '#fff';
	*/

	// addNewStyle('.questionText {background-color:rgb(0, 206, 209) !important;}')

	// colors
	let plaid = 'background-color: #bb0000 !important; background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 255, 255, 0.2) 35px, rgba(255, 255, 255, 0.2) 70px), repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,0.4) 35px, rgba(255,255,255,0.4) 70px) !important; background-attachment: fixed !important;'
	let redgradient = "background: #e6e1d3 !important;"

	//nav bar

	let topBar = document.getElementById("top_bar");
	topBar.setAttribute('style', 'background-color:red !important');


	let topBarin = document.getElementById("top_bar").getElementsByClassName('navbar-inner');

	for(elem of topBarin){
		elem.setAttribute('style', plaid);
	}

	//buttons

	document.getElementById("new_post_button").style.color = 'blue';

	let buttons = document.getElementsByClassName('btn-primary');

	for(elem of buttons){
		elem.setAttribute('style', redgradient);
	}

	let folders = document.getElementsByClassName('folder');

	for(elem of folders){
		elem.setAttribute('style', redgradient);
	}

	// link
	colorLinks("#bb0000");
}

function addNewStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}

function colorLinks(hex)
{
    var links = document.getElementById("page_main").getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;
        }
    }
}