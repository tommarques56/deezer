(function() {
    chrome.runtime.onMessage.addListener(function(e, n, r) {
        if (e.type == "notifyRecaptchaPrecacheDebugPage") {
            var t = e.dataType;
            var o = e.postData;
            console.log("dataType = ", t);
            console.log("postData = ", o);
            l = o;
            var i = document.getElementById("allTheData");
            i.innerHTML = "";
            if (t == "precachedSolutions") {
                i.appendChild(a(o))
            }
        }
    });
    var s = 110;

    function d(e) {
        var n = document.createElement("table");
        n.border = 1;
        n.createCaption().innerHTML = "Tasks";
        var r = n.insertRow();
        for (var t in e) {
            var o = n.insertRow();
            for (var i in e[t]) {
                if (t == 0) {
                    var a = document.createElement("th");
                    a.innerHTML = i;
                    r.appendChild(a);
                    if (i == "endTime") {
                        var a = document.createElement("th");
                        a.innerHTML = "solvingTime";
                        a.style.color = "gray";
                        r.appendChild(a);
                        var a = document.createElement("th");
                        a.innerHTML = "feelsLikeSolvingTime";
                        a.style.color = "gray";
                        r.appendChild(a);
                        var a = document.createElement("th");
                        a.innerHTML = "expirationCountdown";
                        a.style.color = "gray";
                        r.appendChild(a)
                    } else if (1) {}
                }
                if (i == "taskData") {
                    o.insertCell().innerHTML = "<b>hostname:</b> " + e[t][i].hostname + ";<br /> <b>sitekey:</b> " + e[t][i].siteKey
                } else if (i == "solution") {
                    o.insertCell().innerHTML = typeof e[t][i] == "string" ? e[t][i].substring(0, 50) + "..." : e[t][i]
                } else if (i == "expired") {
                    o.insertCell().innerHTML = '<span style="color: ' + (e[t][i] ? "Crimson" : "ForestGreen") + ';">' + e[t][i] + "</span>"
                } else if (i == "taskProcessingToContentScriptTime") {
                    o.insertCell().innerHTML = '<span style="color: ' + (e[t][i] ? "ForestGreen" : "Crimson") + ';">' + e[t][i] + "</span>"
                } else if (i == "error") {
                    o.insertCell().innerHTML = e[t][i] ? '<span style="color: Crimson;">' + e[t][i] + "</span>" : ""
                } else if (i == "endTime") {
                    o.insertCell().innerHTML = e[t][i];
                    o.insertCell().innerHTML = (e[t][i] ? e[t][i] : p()) - e[t]["startTime"];
                    o.insertCell().innerHTML = e[t]["taskProcessingToContentScriptTime"] ? e[t]["taskProcessingToContentScriptTime"] - e[t]["requestTime"] : "";
                    var l = e[t][i] ? s - (p() - e[t][i]) : 0;
                    o.insertCell().innerHTML = l ? '<span style="color: ' + (l > 0 ? "ForestGreen" : "Crimson") + ';">' + l + "</span>" : ""
                } else {
                    o.insertCell().innerHTML = e[t][i]
                }
            }
        }
        return n
    }

    function a(e, n) {
        var r = document.createElement("div");
        for (var t in e) {
            var o = document.createElement("table");
            o.border = 1;
            o.createCaption().innerHTML = t;
            r.appendChild(o);
            var i = o.insertRow();
            var a = o.insertRow();
            for (var l in e[t]) {
                if (l == "tasks") {
                    r.appendChild(d(e[t][l]))
                } else {
                    var s = a.insertCell();
                    var c = document.createElement("th");
                    c.innerHTML = l;
                    i.appendChild(c);
                    if (l == "noCacheRequestsSinceLastSolutionExpiration") {
                        s.innerHTML = '<span style="color: ' + (e[t][l] ? "Crimson" : "ForestGreen") + ';">' + e[t][l] + "</span>"
                    } else {
                        s.innerHTML = e[t][l]
                    }
                }
            }
        }
        return r
    }
    var l;

    function c(e, n) {
        console.log("CreateTableFromJSON");
        console.log("data = ", e);
        console.log("k = ", n);
        if (n > 0) {
            console.log("ZAEBAL!!!");
            return document.createTextNode("zaebal!")
        }
        var r = [];
        for (var t in e) {
            for (var o in e[t]) {
                if (r.indexOf(o) === -1) {
                    r.push(o)
                }
            }
        }
        var i = document.createElement("table");
        i.border = 1;
        var a = i.insertRow(-1);
        for (var t = 0; t < r.length; t++) {
            var l = document.createElement("th");
            l.innerHTML = r[t];
            a.appendChild(l)
        }
        a = i.insertRow(-1);
        for (var t in e) {
            var s = a.insertCell(-1);
            console.log("data[i][col[j]] = ", e[t]);
            console.log("typeof data[i][col[j]] = ", typeof e[t]);
            if (typeof e[t] === "object" && e[t]) {
                s.appendChild(c(e[t], n + 1))
            } else {
                s.innerHTML = e[t]
            }
        }
        return i
    }

    function p() {
        return Math.floor(Date.now() / 1e3)
    }
})();