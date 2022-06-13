window.onscroll = () => {
    if (window.scrollY >= 550 && window.innerWidth > 756) {
        navbar.style.backgroundColor = 'rgb(255,255,255)';
        businessName.style.color = 'rgb(0,0,0)';
        link1.style.color = 'rgb(0,0,0)';
        link2.style.color = 'rgb(0,0,0)';
        link3.style.color = 'rgb(0,0,0)';
        link4.style.color = 'rgb(0,0,0)';
    } else if (window.scrollY >= 550 && window.innerWidth < 756) {
        navbar.style.backgroundColor = 'rgb(255,255,255)';
        businessName.style.color = 'rgb(0,0,0)';
    } else {
        navbar.style.backgroundColor = '#1A2D34';
        businessName.style.color = 'rgb(255,255,255)';
        link1.style.color = 'rgb(255,255,255)';
        link2.style.color = 'rgb(255,255,255)';
        link3.style.color = 'rgb(255,255,255)';
        link4.style.color = 'rgb(255,255,255)';
    }
}
middlePageLink1.onclick = () => {
    middlePageLink1.classList.add('linksActive', 'roundedBtn');
    middlePageLink1.classList.remove('links');
    middlePageLink2.classList.add('links');
    middlePageLink3.classList.add('links');
    middlePageLink2.classList.remove('linksActive', 'roundedBtn');
    middlePageLink3.classList.remove('linksActive', 'roundedBtn');
    if (window.innerWidth > 756) {
        middlePageLinksContent1.style.display = 'flex';
        middlePageLinksContent2.style.display = 'none';
        middlePageLinksContent3.style.display = 'none';
    } else {
        middlePageLinksContent1.style.display = 'grid';
        middlePageLinksContent2.style.display = 'none';
        middlePageLinksContent3.style.display = 'none';
    }

}
middlePageLink2.onclick = () => {
    middlePageLink2.classList.add('linksActive', 'roundedBtn');
    middlePageLink2.classList.remove('links');
    middlePageLink1.classList.remove('linksActive', 'roundedBtn');
    middlePageLink3.classList.remove('linksActive', 'roundedBtn');
    middlePageLink1.classList.add('links');
    middlePageLink3.classList.add('links');
    if (window.innerWidth > 756) {
        middlePageLinksContent1.style.display = 'none';
        middlePageLinksContent2.style.display = 'flex';
        middlePageLinksContent3.style.display = 'none';
    } else {
        middlePageLinksContent1.style.display = 'none';
        middlePageLinksContent2.style.display = 'grid';
        middlePageLinksContent3.style.display = 'none';
    }

}
middlePageLink3.onclick = () => {
    middlePageLink3.classList.add('linksActive', 'roundedBtn');
    middlePageLink3.classList.remove('links');
    middlePageLink2.classList.remove('linksActive', 'roundedBtn');
    middlePageLink1.classList.remove('linksActive', 'roundedBtn');
    middlePageLink2.classList.add('links');
    middlePageLink1.classList.add('links');
    if (window.innerWidth > 756) {
        middlePageLinksContent1.style.display = 'none';
        middlePageLinksContent2.style.display = 'none';
        middlePageLinksContent3.style.display = 'flex';
    } else {
        middlePageLinksContent1.style.display = 'none';
        middlePageLinksContent2.style.display = 'none';
        middlePageLinksContent3.style.display = 'grid';
    }

}