// ToolTip/Popover init for Bootstrap 5 (with graceful fallback to jQuery plugin)
$(document).ready(function () {
    var initOptions = { trigger: 'hover', placement: 'top' };

    if (window.bootstrap && bootstrap.Popover) {
        var createPopover = function(el){
            var content = el.getAttribute('data-bs-content') || el.getAttribute('data-content') || '';
            var title = el.getAttribute('data-bs-title') || el.getAttribute('title') || '';
            try { new bootstrap.Popover(el, Object.assign({}, initOptions, { content: content, title: title })); } catch (e) {}
        };
        var popSel = document.querySelectorAll('[data-bs-toggle="popover"], [data-toggle="popover"]');
        Array.prototype.forEach.call(popSel, function (el) { createPopover(el); });

        var infoSel = document.querySelectorAll('[data-bs-toggle="popinfo"], [data-toggle="popinfo"]');
        Array.prototype.forEach.call(infoSel, function (el) { createPopover(el); });
    } else if ($.fn && $.fn.popover) {
        // Legacy BS4
        $('[data-toggle="popover"], [data-bs-toggle="popover"]').popover(initOptions);
        $('[data-toggle="popinfo"], [data-bs-toggle="popinfo"]').popover(initOptions);
    }
});

// Change date modal
function changeDate(date) {
    let previous_date = new Date(date);
    let dateToday = new Date();
    let upto = new Date();

    previous_date.setDate(previous_date.getDate() + 1);
    upto.setFullYear(dateToday.getFullYear() + 1);

    let counter = date.split(" ");
    const id = counter.slice(-1).pop();
    if (date[0] === 'P') {
        counter = '.pDate' + id
        $(counter).datepicker({
            changeMonth: true,
            changeYear: true,
            minDate: dateToday,
            maxDate: upto,
            dateFormat: "yy-mm-dd",
        });
        $(".ui-dialog-content").dialog("close");
        $('.myDialogP' + id).dialog();

    } else {
        counter = '.rDate' + id;
        $(counter).datepicker({
            changeMonth: true,
            changeYear: true,
            minDate: dateToday,
            maxDate: upto,
            dateFormat: "yy-mm-dd",
        });
        $(".ui-dialog-content").dialog("close");
        $('.myDialogR' + id).dialog();

    }
};