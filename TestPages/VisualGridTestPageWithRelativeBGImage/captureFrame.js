var u = new URL(document.location.href);
if (u.searchParams.get('change')) {
    document.documentElement.style.paddingLeft = "40px";
}