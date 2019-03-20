function LoadArticle(FilePath){
	
	var NewEl = document.createElement('object');
	var position = document.getElementById("article_view");

	/* clear child nodes(s) */
	while (position.firstChild) 
	{
    	position.removeChild(position.firstChild);
    }

	NewEl.type = 'text/html';
	NewEl.data = FilePath;
	NewEl.class = 'post_content';
	NewEl.id = 'articlePanel';

	position.appendChild(NewEl);
	if (window.masterFilePath != FilePath) {
		window.masterFilePath = FilePath;
	}
};

window.onload = function(){
	if (window.masterFilePath) {
		LoadArticle(window.masterFilePath);
	}
}

window.onunload = function(){
	var position = document.getElementById("articlePanel");

	if (window.masterFilePath != position.data) {
		window.masterFilePath = position.data;
	}
}