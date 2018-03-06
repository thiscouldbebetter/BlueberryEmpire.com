
var d = document;

var scriptHeader = d.getElementById("scriptHeader");
var scriptHeaderSrc = scriptHeader.getAttribute("src");
var scriptHeaderSrcSplit = scriptHeaderSrc.split("../");
scriptHeaderSrcSplit[scriptHeaderSrcSplit.length - 1] = "";
var rootPathRelative = scriptHeaderSrcSplit.join("../");

var divHeader = d.createElement("div");

var linkHome = d.createElement("a");
linkHome.href = "index.html";
linkHome.alt = "Home";

linkHome.innerHTML = 
	"<img src='" + rootPathRelative 
	+ "Images/BlueberryEmpire.svg' width='33%'></img>";

divHeader.appendChild(linkHome);

var divLinks = d.createElement("div");
var linkNames = [ "News", "Games", "Feedback", "About", "Development" ];
for (var i = 0; i < linkNames.length; i++)
{
	var linkName = linkNames[i];

	var link = d.createElement("a");
	link.href = rootPathRelative + linkName + ".html";
	link.innerHTML = linkName;
	divLinks.appendChild(link);
	divLinks.innerHTML += "\t";
}

divHeader.appendChild(divLinks);

d.body.appendChild(divHeader);
