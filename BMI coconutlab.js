// ==UserScript==
// @name         BMI coconutlab
// @namespace    https://www.coconutlab.co.kr/
// @version      2024-05-07
// @description  change BMI T-4 srcs to coconutlab stuff
// @author       YHJ3052
// @match        http://192.168.0.21:8080/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.21
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var loginlogo = document.getElementsByClassName("login-logo");
    console.log(loginlogo.length);
    if (loginlogo.length>0){
        loginlogo[0].src = "https://raw.githubusercontent.com/moonphase97/hwasung_args/master/coconutlab/white/coconutlab_CI_200.png";
    }
    var loginname = document.getElementsByClassName("login-logo-name")
    if (loginname.length>0){
        loginname[0].innerText = "코코넛랩";
    }

    var copyright = document.getElementsByClassName("common-copyright")
    if (copyright.length>0){
        copyright[0].innerText = "주식회사 코코넛랩 © 2024 CoconutLab Company. All rights reserved.";
    }

    var header = document.getElementsByClassName("config-header-img-title")
    if (header.length>0){
        header[0].src = "https://raw.githubusercontent.com/moonphase97/hwasung_args/master/coconutlab/color/coconutlab_CI_land.png";
    }
    //document.getElementByClass("common-copyright").
})();