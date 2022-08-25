export const createImg = (image) =>
{
	const rootHTML = document.getElementById( "root" );
	const imgHtml = document.createElement( "img" );
	imgHtml.src = image;
	imgHtml.className = "webpack-img";
	rootHTML.append( imgHtml );
}