const lpStatsModule = (function () {    
    const url = "https://stats.landingi.com/visit/1736526";
    const data = {"lid":1736526,"luuid":"a430b106-84df-11ef-8b33-424eecebeaba","lhash":"0fd1a0f1cad1b5c07cf0","fid":1736526,"auuid":"a45aa9da-8411-11ef-b706-d6a1260f1cab","acid":326434,"agid":null,"tid":null,"hasAccessToEventTracker":false,"hasAccessToEventTrackerDev":false,"hasAccessToEventTrackerData":false,"hasAccessToVisitWithoutCookie":false,"hasAccessToVisitWithLocalStorage":false};
    const cookieName = "ls_sid_1736526";

    if (data.hasAccessToEventTrackerDev) { 
        console.log('Running runScript in dev mode')
        frodo.runScriptDev(cookieName, url, data)
    } else {
        frodo.runScript(cookieName, url, data)
    }

    return {
        getData: function() { return data; },
        cookieName: function() { return cookieName; },
        endpoint: function() { return url; },
        path: function() { return path; }
    };
})();