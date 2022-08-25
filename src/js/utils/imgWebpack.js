export const createImg = (rootElem,image) =>
{

	const imgHtml = document.createElement( "img" );
	imgHtml.src = image;
	imgHtml.className = "webpack-img";
	rootElem.append( imgHtml );
}