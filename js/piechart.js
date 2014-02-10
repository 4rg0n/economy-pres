nv.addGraph(function() {
    var chart = nv.models.pieChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .showLabels(true);

    d3.select("#chart svg")
        .datum(exampleData())
        .transition().duration(500)
        .call(chart);

    return chart;
});

function exampleData() {
    return  [
        {
            "label": "Wladimir Potanin",
            "value" : 2.2
        } ,
        {
            "label": "Oleg Deripaska",
            "value" : 1.2
        } ,
        {
            "label": "Viktor Wekelsberg",
            "value" : 0.35
        } ,
        {
            "label": " Gazprom",
            "value" : 3.3
        } ,
        {
            "label": "Sberbank",
            "value" : 1.7
        } ,
        {
            "label": "Olimpstroj",
            "value" : 6
        }
    ];
}