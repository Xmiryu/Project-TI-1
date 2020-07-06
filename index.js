const parent = document.getElementsByClassName("solid_wrapper")[0];
const buttons = parent.childNodes;
buttons.forEach(btn => btn.addEventListener("click", showContent));

buttons.forEach(btn => btn.addEventListener("click", scrollWin_down));
document.getElementById("top").addEventListener("click", scrollWin_up);

function showContent(e) {
    try {
        const clicked = e.target.id;
        const contentID = clicked + "_section";
        if(document.getElementById(contentID).style.display == "block"){
            hideAllContent();
        }
        else{
            hideAllContent();
            document.getElementById(contentID).style.display = "block";
            //document.getElementById("content").scrollIntoView();
        }
    }
    catch (e) {
        //alert ("Wystąpił błąd!") ;
    }
}
function hideAllContent() {
    const all = document.getElementsByClassName("content")[0];
    const sections = all.children;
    Array.from(sections).forEach(sect => sect.style.display = "none");
}

function scrollWin_down() {
    window.scrollBy(0, 300);
}

function scrollWin_up() {
    window.scrollBy(0, -300);
}
