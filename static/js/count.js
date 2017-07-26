$(document).ready(function() {
    pre_content = $("#jalpc_site_pv").html();
    $.ajax({
        type: "get",
        async: false,
        url: "https://api.jarrekk.com/api/v1.0/jalpc/pv_count",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "flightHandler",
        success: function(json) {
            var website_count = json.data;
            $("#jalpc_site_pv").html('<span class="navy">' + website_count + '</span>&nbsp;<span data-i18n="thanks.view">views</span>&nbsp;||&nbsp;' + pre_content);
        },
        error: function() {
            console.log('fail');
        }
    });
});
