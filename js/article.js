function LoadArticle(FilePath){
	
	var NewHTML = '<object type="text/html" data="' + FilePath + '" ></object>';
	document.getElementById("article_view").innerHTML=NewHTML;

	/*
	$('#article_view').load(FilePath);
	*/
};
