chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);

	/*
	let questionText = document.getElementById("questionText");
	questionText.style['background-color'] = '#00CED1';
    questionText.style['color'] = '#fff';
	*/

	let plaid = 'background-color: #bb0000 !important; background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 255, 255, 0.2) 35px, rgba(255, 255, 255, 0.2) 70px), repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,0.4) 35px, rgba(255,255,255,0.4) 70px) !important; background-attachment: fixed !important;'

	/*
	let topBar = document.getElementById("top_bar");
	topBar.setAttribute('style', 'background-color:rgb(187, 0, 0) !important');
	*/

	let topBarin = document.getElementById("top_bar").getElementsByClassName('navbar-inner');

	console.log(topBarin);
	for(elem of topBarin){
		elem.setAttribute('style', plaid);
	}

	// addNewStyle('.questionText {background-color:rgb(0, 206, 209) !important;}')

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