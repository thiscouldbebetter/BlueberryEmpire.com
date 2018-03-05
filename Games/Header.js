var d = document;

var divHeader = d.createElement("div");

var linkHome = d.createElement("a");
linkHome.href = "../../index.html";
linkHome.alt = "Home";

//var imgHome = d.createElement("img");
//imgHome.src = "Images/BlueberryEmpire.svg";
//imgHome.width = "20%";
//linkHome.appendChild(imgHome);
linkHome.innerHTML = "<img src='../../Images/BlueberryEmpire.svg' width='33%'></img>";

divHeader.appendChild(linkHome);

var divLinks = d.createElement("div");
var linkNames = [ "News", "Games", "Contact" ];
for (var i = 0; i < linkNames.length; i++)
{
	var linkName = linkNames[i];

	var link = d.createElement("a");
	link.href = "../../" + linkName + ".html";
	link.innerHTML = linkName;
	divLinks.appendChild(link);
	divLinks.innerHTML += "\t";
}

divHeader.appendChild(divLinks);

d.body.appendChild(divHeader);
