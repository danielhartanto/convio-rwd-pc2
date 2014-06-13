function getInternetExplorerVersion() {
    var e = -1;
    if (navigator.appName == "Microsoft Internet Explorer") {
        var t = navigator.userAgent;
        var n = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        if (n.exec(t) != null) e = parseFloat(RegExp.$1)
    }
    return e
}

function customMenu() {
    var e = [{
        label: "Fundraising Tools",
        sid: "0",
        viewName: "fundraising",
        subViewName: "tools"
    }, {
        label: "Training",
        sid: "1",
        viewName: "training",
        subViewName: "tools"
    }];
    for (var t = 0; t < e.length; t++) {
        createCustomView(e[t])
    }
}

function ReCheckAllLoaded() {
    if (jQuery("#CWHiddenTRDataContainer").length != 0) {
        if (YAHOO.util.Dom.get("hd-nav")) {
            var e = document.getElementById("hd-nav");
            var t = document.createElement("li");
            t.id = "tools-hdnav";
            t.className = "";
            t.innerHTML = '<a id="custom-tools-link" href="#pc2=custom-tools">Tools</a><ul id="submenu_cstm_tools"><li id="fundraising-tools-hdnav"><a id="custom-fundraising-tools-link" href="#pc2=fundraising-tools" onclick="YAHOO.Convio.PC2.Utils.loadView(\'fundraising\',\'tools\');return false;">Fundraising Tools</a></li><li id="training-tools-hdnav"><a id="custom-training-tools-link" href="#pc2=training-tools" onclick="YAHOO.Convio.PC2.Utils.loadView(\'training\',\'tools\');return false;">Training Tools</a></li></ul>';
            e.appendChild(t);
            jQuery("#hd-nav").append('<li id="logout-nav-link"><a id="custom-logout-nav-link" href="../site/UserLogin?logout=true&NEXTURL=http://tour.diabetes.org/">Logout</a></li>')
        }
        customMenu();
        fillGreeting();
        checkRedRider();
        fillHelpShare();
        taskRotator();
        fillFooter();
        renameMenu();
        regRotatorClicker();
        respRotatorClicker();
        jQuery("#msg_cat_personal_page_content_preview_desc").html("<span>The Preview will open in a new window, but will not save your changes.</span>");
        jQuery("#msg_cat_team_page_preview_desc").html("<span>The Preview will open in a new window, but will not save your changes.</span>");
        if (jQuery("#isCapt").text() === "y") {
            jQuery("#msg_cat_captains_message_header").text("Post a Message for Your Team Members!")
        }
        jQuery("#msg_cat_media_link_label").text("Upload Your Photo/Video");
        jQuery("#msg_cat_media_link_label").addClass("todoBtn");
        fillUpCompanyPageName();
        var n = YAHOO.Convio.PC2.Data.TeamraiserConfig;
        if (n.eventManageUrl != null) {
            YAHOO.util.Dom.get("manage-event-listitem").href = n.eventManageUrl;
            YAHOO.util.Dom.setStyle("manage-event-listitem", "display", "block")
        }
        jQuery(".popup-youtube").magnificPopup({
            disableOn: 0,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        relevantVideos();
        jQuery("#addressbookimport-sidebar").insertAfter("#msg_cat_addressbookimport_header");
        jQuery("#add-contact-selectsource").insertAfter("#contacts-actions");
        jQuery("#address_book_add").insertAfter("#add-contact-selectsource");
        jQuery("#teampage-sidebar").insertAfter("#teampage-status");
        commonListener();
        clearInterval(adaLoadChecker)
    }
}

function fillUpCompanyPageName() {
    jQuery("#companypage_save_page_button").click(function () {
        var e = jQuery("#whatCompanyName").text();
        jQuery("#company_page_title").val(e)
    });
    jQuery("#msg_cat_nav_company_page").click(function () {
        setTimeout(function () {
            jQuery("#companypage_save_page_button").click()
        }, 1e3)
    })
}

function relevantVideos() {
    setInterval(function () {
        var e = document.URL;
        var t = e.split("pc2=");
        switch (t[1]) {
        case "email-compose":
            jQuery("#moreVideos").show();
            jQuery("#sovmore2").show();
            jQuery("#sovmore1").hide();
            jQuery("#custompc2heading").hide();
            jQuery("#custompc2heading2").hide();
            break;
        case "personalpage-compose":
            jQuery("#updateall-nav-link").addClass("selected");
            jQuery("#moreVideos").show();
            jQuery("#custompc2heading").show();
            jQuery("#custompc2heading2").hide();
            jQuery("#sovmore1").show();
            jQuery("#sovmore2").hide();
            break;
        case "teampage-compose":
            jQuery("#updateall-nav-link").addClass("selected");
            jQuery("#moreVideos").hide();
            jQuery("#custompc2heading").hide();
            jQuery("#custompc2heading2").show();
            break;
        case "fundraising-tools":
            jQuery("#tools-hdnav").addClass("selected");
            jQuery("#moreVideos").hide();
            jQuery("#custompc2heading").hide();
            jQuery("#custompc2heading2").hide();
            break;
        case "training-tools":
            jQuery("#tools-hdnav").addClass("selected");
            jQuery("#moreVideos").hide();
            jQuery("#custompc2heading").hide();
            jQuery("#custompc2heading2").hide();
            break;
        default:
            jQuery("#moreVideos").hide();
            jQuery("#custompc2heading").hide();
            jQuery("#custompc2heading2").hide()
        }
    }, 1e3)
}

function commonListener() {
    jQuery("#myDivIframeAlt").load("../site/STR?pg=informational&fr_id=" + jQuery("#myTRID").text() + "&type=fr_informational&sid=16070&pgwrap=n");
    jQuery("#msg_cat_email_compose_use_template_label").click(function () {
        oriETlabel = jQuery("#email-template-radio-recruit-label").text();
        revETlabel = oriETlabel.replace("Recruiting", "For Team Captains");
        jQuery("#email-template-radio-recruit-label").text(revETlabel);
        oriETlabel2 = jQuery("#email-template-radio-solicit-label").text();
        revETlabel2 = oriETlabel2.replace("Solicitation", "Donation Asks");
        jQuery("#email-template-radio-solicit-label").text(revETlabel2);
        oriETlabel3 = jQuery("#email-template-radio-other-label").text();
        revETlabel3 = oriETlabel3.replace("Other", "Ride With Me");
        jQuery("#email-template-radio-other-label").text(revETlabel3)
    });
    var e = getInternetExplorerVersion();
    jQuery("#CWMENUTOGGLE").click(function (e) {
        jQuery("#hd-nav").slideToggle("fast")
    });
    jQuery("#hd-nav li a").click(function (e) {
        if (jQuery(window).width() < 980) {
            jQuery("#hd-nav").slideUp("fast")
        }
    });
    jQuery("#msg_cat_nav_overview").click(function () {
        if (jQuery(window).width() > 767) {
            jQuery("#mySlideTask").css("height", "197px")
        }
    });
    if (e == 8) {
        document.body.onresize = function () {
            if (jQuery(window).width() > 979) {
                jQuery("#hd-nav").css("display", "block");
                jQuery("#SOADASidebar").insertBefore("#yui-main")
            } else {
                jQuery("#hd-nav").css("display", "none");
                jQuery("#SOADASidebar").insertAfter("#yui-main")
            } if (jQuery(window).width() > 767) {
                jQuery("#mySlideTask").css("height", "197px")
            }
        }
    } else {
        jQuery(window).resize(function () {
            if (jQuery(window).width() > 979) {
                jQuery("#hd-nav").css("display", "block");
                jQuery("#SOADASidebar").insertBefore("#yui-main")
            } else {
                jQuery("#hd-nav").css("display", "none");
                jQuery("#SOADASidebar").insertAfter("#yui-main")
            } if (jQuery(window).width() > 767) {
                jQuery("#mySlideTask").css("height", "197px")
            }
        })
    } if (jQuery(window).width() < 979) {
        jQuery("#SOADASidebar").insertAfter("#yui-main")
    }
    jQuery(".todoBtn").click(function () {
        window.scrollTo(0, 0)
    });
    jQuery("#hd-nav > li").click(function () {
        jQuery("#hd-nav").find("li").each(function () {
            if (jQuery(this).hasClass("selected")) {
                jQuery(this).removeClass("selected")
            }
        });
        jQuery(this).addClass("selected")
    });
    if (getURLParameter("typop") == "y") {
        jQuery.magnificPopup.open({
            items: {
                src: "#tyRegPop"
            },
            type: "inline"
        });
        jQuery("#valT").text(getURLParameter("totalamt"));
        jQuery("#valM").text(getURLParameter("mrkt"));
        jQuery("#valD").text(getURLParameter("dedct"))
    } else {
        if (/iPhone/i.test(navigator.userAgent)) {
            if (jQuery.cookie("soappvisited") != "y") {
                jQuery.magnificPopup.open({
                    items: {
                        src: "#iphoneApp"
                    },
                    type: "inline"
                });
                jQuery.cookie("soappvisited", "y")
            }
        }
        if (/Android/i.test(navigator.userAgent)) {
            if (jQuery.cookie("soappvisited") != "y") {
                jQuery.magnificPopup.open({
                    items: {
                        src: "#droidApp"
                    },
                    type: "inline"
                });
                jQuery.cookie("soappvisited", "y")
            }
        }
    }
    jQuery("#fbshr").hover(function () {
        jQuery(this).attr("src", "images/custom/fb_hover.gif")
    }, function () {
        jQuery(this).attr("src", "images/custom/fb.png")
    });
    jQuery("#twshr").hover(function () {
        jQuery(this).attr("src", "images/custom/twitter_hover.gif")
    }, function () {
        jQuery(this).attr("src", "images/custom/twitter.png")
    })
}

function fillGreeting() {
    jQuery("#myfname").append(jQuery("#usrFname").html());
    jQuery("#myfnamemob").append(jQuery("#usrFname").html());
    jQuery("#CWWELCOMEUSR").append('<h1><span style="color:#C41230;">Welcome,</span><span id="userfirst">' + jQuery("#usrFname").html() + "</span></h1>");
    jQuery("#CWWELCOMEUSR").append(jQuery("#evtNameDateFull").html())
}

function fillHelpShare() {
    jQuery("#SOEventBox").append(jQuery("#evtNameDate").html());
    jQuery("#SOADASidebar").append(jQuery("#walkManager").html());
    jQuery("#SOADASidebar").append(jQuery("#hlpContact").html());
    jQuery("#SOADASidebar").append(jQuery("#SObadges").html());
    jQuery("#SOADASidebar").append(jQuery("#shareFP").html());
    jQuery("#SOADASidebar").append(jQuery("#captainsMessage"))
}

function fillFooter() {
    jQuery("#CWFOOTER").append(jQuery("#cwFooterContent").html())
}

function taskRotator() {
    jQuery(".taskNavItem").click(function () {
        var e = parseInt(jQuery(".taskNavNum", this).text());
        if (e == 3) {
            window.open("../site/TR/StepOut/StepOutContent?pg=entry&fr_id=" + jQuery("#myTRID").text())
        } else {
            for (var t = 1; t <= 3; t++) {
                if (t == e) {
                    jQuery("#wnTaskNav" + t).addClass("tnnactive");
                    jQuery("#task" + t + "Content").show()
                } else {
                    jQuery("#wnTaskNav" + t).removeClass("tnnactive");
                    jQuery("#task" + t + "Content").hide()
                }
            }
        }
    });
    jQuery(".todoHeader").click(function () {
        var e = jQuery(this).prop("id");
        var t = parseInt(e.substr(e.length - 1));
        for (var n = 1; n <= 6; n++) {
            if (n == t) {
                jQuery("#todoimg" + n).attr("src", "images/custom/chevron_todo_dn.png");
                jQuery("#todo" + n + "content").show()
            } else {
                jQuery("#todoimg" + n).attr("src", "images/custom/chevron_todo.png");
                jQuery("#todo" + n + "content").hide()
            }
        }
    });
    jQuery("#videoRotator").change(function () {
        var e = parseInt(jQuery("#videoRotator").find("option:selected").attr("value"));
        switch (e) {
        case 0:
            jQuery("#vyf1").hide();
            jQuery("#vyf1").attr("src", "../ws/blank.html");
            break;
        case 1:
            jQuery("#vyf1").show();
            jQuery("#vyf1").attr("src", "//www.youtube.com/embed/6kaNlXNX2W8");
            break;
        case 4:
            jQuery("#vyf1").show();
            jQuery("#vyf1").attr("src", "//www.youtube.com/embed/D61TmM4xJWI");
            break;
        case 6:
            jQuery("#vyf1").show();
            jQuery("#vyf1").attr("src", "//www.youtube.com/embed/UbjAtlAGaqs");
            break
        }
        for (b = 0; b <= 7; b++) {
            if (b == e) {
                jQuery("#viddesc" + b).show()
            } else {
                jQuery("#viddesc" + b).hide()
            }
        }
    })
}

function renameMenu() {
    jQuery("#msg_cat_company_page_content_label").html('Edit Your <span class="page-content-type">Event Page</span>');
    jQuery("#msg_cat_company_page_shortcut_view").text("View Event Page");
    jQuery("#msg_cat_company_page_permalink").text("Event Page URL:")
}

function respRotatorClicker() {
    jQuery(".rtsubheadm").css("cursor", "pointer");
    jQuery("#rtsc2").hide();
    jQuery("#rtsc3").hide();
    jQuery("#rtsc4").hide();
    jQuery("#rtsc5").hide();
    jQuery("#rtsc1").show();
    jQuery("#rtsh1").click(function () {
        jQuery("#rtsc1").show();
        jQuery("#rtsc2").hide();
        jQuery("#rtsc3").hide();
        jQuery("#rtsc4").hide();
        jQuery("#rtsc5").hide()
    });
    jQuery("#rtsh2").click(function () {
        jQuery("#rtsc1").hide();
        jQuery("#rtsc2").show();
        jQuery("#rtsc3").hide();
        jQuery("#rtsc4").hide();
        jQuery("#rtsc5").hide()
    });
    jQuery("#rtsh3").click(function () {
        jQuery("#rtsc1").hide();
        jQuery("#rtsc3").show();
        jQuery("#rtsc2").hide();
        jQuery("#rtsc4").hide();
        jQuery("#rtsc5").hide()
    });
    jQuery("#rtsh4").click(function () {
        jQuery("#rtsc1").hide();
        jQuery("#rtsc4").show();
        jQuery("#rtsc3").hide();
        jQuery("#rtsc2").hide();
        jQuery("#rtsc5").hide()
    });
    jQuery("#rtsh5").click(function () {
        jQuery("#rtsc1").hide();
        jQuery("#rtsc5").show();
        jQuery("#rtsc3").hide();
        jQuery("#rtsc4").hide();
        jQuery("#rtsc2").hide()
    })
}

function regRotatorClicker() {
    jQuery("#rtL1").css("cursor", "pointer");
    jQuery("#rtL2").css("cursor", "pointer");
    jQuery("#rtL3").css("cursor", "pointer");
    jQuery("#rtL4").css("cursor", "pointer");
    jQuery("#rtL5").css("cursor", "pointer");
    jQuery("#rtL1").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat");
    if (jQuery.trim(jQuery("#isSD:first").text()) === "T") {
        jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_1_true_bg.jpg') no-repeat")
    } else {
        jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_1_false_bg.jpg') no-repeat")
    }
    hideAllTaskContent();
    jQuery("#task1content").show();
    jQuery("#rtL1").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat");
    activeRT = 1;
    cleanArrowBG("n", activeRT);
    jQuery("#rtL1").mouseover(function () {
        cleanArrowBG("n", activeRT);
        jQuery("#rtL1").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat")
    });
    jQuery("#rtL1").mouseout(function () {
        cleanArrowBG("n", activeRT)
    });
    jQuery("#rtL2").mouseover(function () {
        cleanArrowBG("n", activeRT);
        jQuery("#rtL2").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat")
    });
    jQuery("#rtL2").mouseout(function () {
        cleanArrowBG("n", activeRT)
    });
    jQuery("#rtL3").mouseover(function () {
        cleanArrowBG("n", activeRT);
        jQuery("#rtL3").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat")
    });
    jQuery("#rtL3").mouseout(function () {
        cleanArrowBG("n", activeRT)
    });
    jQuery("#rtL4").mouseover(function () {
        cleanArrowBG("n", activeRT);
        jQuery("#rtL4").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat")
    });
    jQuery("#rtL4").mouseout(function () {
        cleanArrowBG("n", activeRT)
    });
    jQuery("#rtL5").mouseover(function () {
        cleanArrowBG("n", activeRT);
        jQuery("#rtL5").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat")
    });
    jQuery("#rtL5").mouseout(function () {
        cleanArrowBG("n", activeRT)
    });
    jQuery("#rtL1").click(function () {
        cleanArrowBG("y");
        jQuery("#rtL1").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat");
        activeRT = 1;
        if (jQuery.trim(jQuery("#isSD:first").text()) === "T") {
            jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_1_true_bg.jpg') no-repeat")
        } else {
            jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_1_false_bg.jpg') no-repeat")
        }
        hideAllTaskContent();
        jQuery("#task1content").show()
    });
    jQuery("#rtL2").click(function () {
        cleanArrowBG("y");
        jQuery("#rtL2").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat");
        activeRT = 2;
        if (jQuery.trim(jQuery("#isPU:first").text()) === "TRUE") {
            jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_2_true_bg.jpg') no-repeat")
        } else {
            jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_2_false_bg.jpg') no-repeat")
        }
        hideAllTaskContent();
        jQuery("#task2content").show()
    });
    jQuery("#rtL3").click(function () {
        cleanArrowBG("y");
        jQuery("#rtL3").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat");
        activeRT = 3;
        if (jQuery.trim(jQuery("#isEmail:first").text()) === "y") {
            jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_3_true_bg.jpg') no-repeat")
        } else {
            jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_3_false_bg.jpg') no-repeat")
        }
        hideAllTaskContent();
        jQuery("#task3content").show()
    });
    jQuery("#rtL4").click(function () {
        cleanArrowBG("y");
        jQuery("#rtL4").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat");
        activeRT = 4;
        if (jQuery.trim(jQuery("#isFB:first").text()) === "TRUE") {
            jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_4_true_bg.jpg') no-repeat")
        } else {
            jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_4_false_bg.jpg') no-repeat")
        }
        hideAllTaskContent();
        jQuery("#task4content").show()
    });
    jQuery("#rtL5").click(function () {
        cleanArrowBG("y");
        jQuery("#rtL5").css("background", "url('../../ws/tr/tr2014/img/pc2/taskArrow.png') no-repeat");
        activeRT = 5;
        jQuery("#taskBox").css("background", "url('../../ws/tr/tr2014/img/pc2/task_5_bg.jpg') no-repeat");
        hideAllTaskContent();
        jQuery("#task5content").show()
    })
}

function cleanArrowBG(e, t) {
    switch (e) {
    case "n":
        for (var n = 1; n <= 5; n++) {
            if (n != t) {
                jQuery("#rtL" + n).css("background", "none")
            }
        }
        break;
    case "y":
        jQuery("#rtL1").css("background", "none");
        jQuery("#rtL2").css("background", "none");
        jQuery("#rtL3").css("background", "none");
        jQuery("#rtL4").css("background", "none");
        jQuery("#rtL5").css("background", "none");
        break
    }
}

function hideAllTaskContent() {
    jQuery("#task1content").hide();
    jQuery("#task2content").hide();
    jQuery("#task3content").hide();
    jQuery("#task4content").hide();
    jQuery("#task5content").hide()
}

function checkRedRider() {
    var e = jQuery("#rrptype").text();
    var t = e.toLowerCase();
    if (t.indexOf("red rider") > -1 && jQuery("#isCapt").text() === "y") {
        jQuery("#RRTC").show();
        jQuery("#RR").hide();
        jQuery("#RRTM").hide();
        jQuery("#NRR").hide();
        jQuery("#NRRTC").hide();
        jQuery("#NRRTM").hide()
    } else if (t.indexOf("red rider") > -1 && jQuery("#isTeamMember").text() === "y" && jQuery("#isCapt").text() === "n") {
        jQuery("#RRTC").hide();
        jQuery("#RR").hide();
        jQuery("#RRTM").show();
        jQuery("#NRR").hide();
        jQuery("#NRRTC").hide();
        jQuery("#NRRTM").hide()
    } else if (t.indexOf("red rider") > -1 && jQuery("#isTeamMember").text() === "n" && jQuery("#isCapt").text() === "n") {
        jQuery("#RRTC").hide();
        jQuery("#RR").show();
        jQuery("#RRTM").hide();
        jQuery("#NRR").hide();
        jQuery("#NRRTC").hide();
        jQuery("#NRRTM").hide()
    } else if (t.indexOf("red rider") == -1 && jQuery("#isCapt").text() === "y") {
        jQuery("#RRTC").hide();
        jQuery("#RR").hide();
        jQuery("#RRTM").hide();
        jQuery("#NRR").hide();
        jQuery("#NRRTC").show();
        jQuery("#NRRTM").hide()
    } else if (t.indexOf("red rider") == -1 && jQuery("#isTeamMember").text() === "y" && jQuery("#isCapt").text() === "n") {
        jQuery("#RRTC").hide();
        jQuery("#RR").hide();
        jQuery("#RRTM").hide();
        jQuery("#NRR").hide();
        jQuery("#NRRTC").hide();
        jQuery("#NRRTM").show()
    } else if (t.indexOf("red rider") == -1 && jQuery("#isTeamMember").text() === "n" && jQuery("#isCapt").text() === "n") {
        jQuery("#RRTC").hide();
        jQuery("#RR").hide();
        jQuery("#RRTM").hide();
        jQuery("#NRR").show();
        jQuery("#NRRTC").hide();
        jQuery("#NRRTM").hide()
    } else {
        jQuery("#RRTC").hide();
        jQuery("#RR").hide();
        jQuery("#RRTM").hide();
        jQuery("#NRR").hide();
        jQuery("#NRRTC").hide();
        jQuery("#NRRTM").hide()
    }
}

function getURLParameter(e) {
    return decodeURI((RegExp(e + "=" + "(.+?)(&|$)").exec(location.search) || [, null])[1])
}

function createCustomView(e) {
    YAHOO.Convio.PC2.Views.load[e.viewName] = function (t) {
        var n = YAHOO.Convio.PC2.Views.current;
        YAHOO.util.Dom.addClass(YAHOO.Convio.PC2.Views.current + "-content", "hidden-form");
        YAHOO.util.Dom.addClass(YAHOO.Convio.PC2.Views.current + "-sidebar", "hidden-form");
        YAHOO.util.Dom.addClass("dashboard-content", "hidden-form");
        YAHOO.util.Dom.addClass("dashboard-sidebar", "hidden-form");
        YAHOO.util.Dom.removeClass(e.viewName + "-content", "hidden-form");
        YAHOO.util.Dom.removeClass(e.viewName + "-" + t + "-content", "hidden-form");
        if (t == e.subViewName) {
            var r = YAHOO.util.Dom.get(e.viewName + "-content");
            if (r.childNodes.length < 3) {
                if (parent.document.getElementById("s51-" + e.viewName + "-" + e.subViewName)) {
                    r.innerHTML = parent.document.getElementById("s51-" + e.viewName + "-" + e.subViewName).innerHTML
                } else {
                    Y.use("io", function (t) {
                        function n(e, t, n) {
                            var i = document.body.appendChild(document.createElement("div"));
                            i.style.display = "none";
                            i.innerHTML = t.responseText.replace(/<base href="http:\/\/main\.diabetes\.org\/site\/" \/>/, "");
                            r.innerHTML = document.getElementById("FrNews_ArticlePage").innerHTML;
                            i.parentNode.removeChild(i)
                        }
                        t.io.header("X-Requested-With");
                        var i = YAHOO.util.Cookie.get("JServSessionIdr004");
                        var s = "../site/AjaxProxy?auth=" + YAHOO.Convio.PC2.Config.getAuth() + "&cnv_url=http%3A%2F%2Fmain.diabetes.org%2Fsite%2FTR%3Fpgwrap%3Dn%26type%3Dfr_informational%26pg%3Dinformational%26fr_id%3D" + YAHOO.Convio.PC2.Config.Teamraiser.getFrId() + "%26sid%3D" + e.sid + "%26JServSessionIdr004%3D" + i;
                        var o = t.io(s, {
                            on: {
                                complete: n
                            }
                        })
                    })
                }
            }
        }
    };
    Y.use("node", function (t) {
        t.one("#content").append('<div id="' + e.viewName + '-content" class="hidden-form">' + '<h1 id="' + e.viewName + '_view_header">' + e.label + "</h1>" + '<div id="' + e.viewName + '-list-container" class="ux-block2">' + "</div>" + "</div>");
        t.one("#sidebar").append('<div id="' + e.viewName + '-sidebar" class="hidden-form"></div>')
    })
}
jQuery.noConflict();
var adaLoadChecker;
var oriETlabel;
var oriETlabel2;
var oriETlabel3;
var revETlabel;
var revETlabel2;
var revETlabel3;
var loadCustomHandlers = function () {};
var loadOverrides = function (e, t) {};
var loadCustom = function () {
    YAHOO.Convio.PC2.Utils.require("pc2:registrationLoaded", "pc2:constituentLoaded", "pc2:configurationLoaded", "pc2:wrapperLoaded", function () {
        adaLoadChecker = setInterval(function () {
            ReCheckAllLoaded()
        }, 2e3)
    })
};
WebFontConfig = {
    google: {
        families: ["Montserrat::latin"]
    }
};
(function () {
    var e = document.createElement("script");
    e.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    e.type = "text/javascript";
    e.async = "true";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
})()
