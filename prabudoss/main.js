window.onload = () => {
    const selectElement = document.querySelector("#language");
    let lastValue = selectElement.nodeValue;
    selectElement.oninput = function() {
        let val= selectElement.value
        if (val !== lastValue) {
            let location_url =window.location.href;
            let index = location_url.lastIndexOf("/") + 1;
            let filename = location_url.substr(index);
            let base_url =  getBaseUrl();
            if(val=="english")
            {
                let str=base_url.toString();
                let res = str.replace("tamil/", "");
                return_url= res+filename;    
            }
            else
            { 
                return_url= base_url+"tamil/"+filename;
            }
            window.location.href=return_url;
        }
    }

}

function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    var base_url = re.exec(window.location.href);
    return base_url;
}

