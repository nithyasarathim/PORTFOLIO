
document.addEventListener("DOMContentLoaded", function () {
    const data = [{
        values: [40, 30, 20, 10],
        labels: ['C++', 'C', 'Java', 'Python'],
        type: 'pie'
    }];

    const layout = {
        title: 'Preferred Language for Problem Solving',
        height: 400,
        width: 500,
    };

    Plotly.newPlot('chart', data, layout);
});


