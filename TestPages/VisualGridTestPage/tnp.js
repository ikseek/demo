const aa = (cb, stop) => {
    if (stop()) {
        return
    }
    cb();
    setTimeout(() => aa(cb, stop), 1000);
};



const scroll = async (height, vpHeight) => {
    const psetTimeout = timeout => (new Promise(r => {setTimeout(r, timeout)}))
    for (let i = 0; i <= height / vpHeight; i++) {
        window.scrollTo(window.scrollX, i * vpHeight)
        await psetTimeout(5000)
    }
}



var badIframeEval = document.evaluate (
    "//body/center/center/table",
    document.documentElement,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
);

if (badIframeEval  &&  badIframeEval.singleNodeValue) {
    var badIframe  = badIframeEval.singleNodeValue;
    badIframe.parentNode.removeChild (badIframe);
}