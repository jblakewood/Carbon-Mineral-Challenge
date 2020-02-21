(function(c) {
    c.fn.stupidtable = function(b) {
        return this.each(function() {
            var a = c(this);
            b = b || {};
            b = c.extend({}, c.fn.stupidtable.default_sort_fns, b);
            a.data("sortFns", b);
            a.on("click.stupidtable", "thead th", function() {
				//console.log("sort start");
                c(this).stupidsort()
            })
        })
    };
    c.fn.stupidsort = function(b) {
        var a = c(this), g = 0, f = c.fn.stupidtable.dir, e = a.closest("table"), k = a.data("sort") || null;
        if (null !== k) {
            a.parents("tr").find("th").slice(0, c(this).index()).each(function() {
                var a = c(this).attr("colspan") || 1;
                g += parseInt(a, 10)
            });
            var d;
            1 == arguments.length ?
            d = b : (d = b || a.data("sort-default") || f.ASC, a.data("sort-dir") && (d = a.data("sort-dir") === f.ASC ? f.DESC : f.ASC));
            e.trigger("beforetablesort", {
                column: g,
                direction: d
            });
            e.css("display");
            setTimeout(function() {
                var b = [], l = e.data("sortFns")[k], h = e.children("tbody").children("tr");
                h.each(function(a, e) {
                    var d = c(e).children().eq(g), f = d.data("sort-value");
                    "undefined" === typeof f && (f = d.text(), d.data("sort-value", f));
                    b.push([f, e])
                });
                b.sort(function(a, b) {
					//console.log("sort in function");
                    return l(a[0], b[0])
                });
                d != f.ASC && b.reverse();
                h = c.map(b, function(a) {
                    return a[1]
                });
                e.children("tbody").append(h);
                e.find("th").data("sort-dir", null).removeClass("sorting-desc sorting-asc");
                a.data("sort-dir", d).addClass("sorting-" + d);
                e.trigger("aftertablesort", {
                    column: g,
                    direction: d
                });
                e.css("display")
            }, 10);
            return a
        }
    };
    c.fn.updateSortVal = function(b) {
        var a = c(this);
        a.is("[data-sort-value]") && a.attr("data-sort-value", b);
        a.data("sort-value", b);
        return a
    };
    c.fn.stupidtable.dir = {
        ASC: "asc",
        DESC: "desc"
    };
    c.fn.stupidtable.default_sort_fns = {
        "int": function(b, a) {
            return parseInt(b, 10) - parseInt(a, 10)
        },
        "float": function(b, a) {
            return parseFloat(b) - parseFloat(a)
        },
        string: function(b, a) {
            return b.localeCompare(a)
        },
        "string-ins": function(b, a) {
            b = b.toLocaleLowerCase();
            a = a.toLocaleLowerCase();
            return b.localeCompare(a)
        }
    }
})(jQuery);


