function getDevice(){
    const dms = [
        ["window.innerHeight", window.innerHeight],
        ["window.innerWidth", window.innerWidth],
        ["screen.availHeight", screen.availHeight],
        ["screen.availWidth", screen.availWidth],
        ["screen.height",screen.height],
        ["screen.width",screen.width]
    ]
    let widths = "";
    dms.forEach(dm=>{
        widths += `<li><b><code>${dm[0]}</code></b> : ${dm[1]}</li>`;
    });
    
    console.log(widths)
    const el = document.getElementById("widths");
    el.innerHTML = widths;
}