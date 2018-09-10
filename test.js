var gNames = ['alejandra','martina','josefa','renata','francis','mariana','flora','tatiana'];
var ages = [18,19,20,21,50,45,23,64];
var Career = ['graphic design','nursing','reporter','police officer','politician','curator','engineer','photographer'];
var salaries = [300,250,289,600,420,670,290,357];

function my_salary() {
    salaries.sort(function(a, b){return 0.5 - Math.random()});
}


/////////////////////d3 test//////////////





my_salary();

function Person(first, prof, age, salary) {
    this.name_p = first;
    this.prof_p = prof;
    this.age_p = age;
    this.salary_p = salary;
}
var woman = [];
function objectsInArray() {
    var j;
    for (j = 0; j < gNames.length; j++)
        woman.push(new Person(gNames[j], Career[j], ages[j], salaries[j]));
    console.log(woman + '\n');
}
objectsInArray();

function writeToDocumentTest() {
     var el = document.getElementById('test');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('test').innerHTML += '<p>' + item.salary_p + '</p>';
        });
}


/// working ///

function salaryGraph() {
    d3.select('body')
    .selectAll('#d3Test')
    .data(woman)
    .enter()
    .append('p')
        .text(woman.forEach(function (item) {
                document.getElementById('d3Test').innerHTML += item.salary_p +', ';
        }));
}


var datasetB = [1,2,3,4,5,6];

function graph1() {
    d3.select('#graph1')
        .select('p')
        .data(datasetB)
        .enter()
        .append('p')
        .text('D3 is awesome');
}


/////////////////////////////big test




    var h = 450;
    var w = 600;
    var barPadding = 2;
    var lenghtWoman = woman.length;
    console.log(lenghtWoman);
    var colWidth = w / woman.length; //gives the size the space divided by the number of objects
    var barwidth = colWidth - barPadding; //gives the total width for each bar
    var salaryValues = [];

    function salaryArray() {
        for(u = 0; u < lenghtWoman; u++)
            salaryValues[u] = woman[u].salary_p;
        console.log(salaryValues);
    }

    salaryArray();

function bigGraph() {
    var scale = d3.scale.linear()//we need to apply this function to some of the values
        /*.domain([0,600])*/
        .domain([0, d3.max(salaryValues)])//we can use a function to give the max value in the array
        .range([0,400]);

    var svg = d3.select('#draw-chart')
        .append('svg')
        .attr('height', h)
        .attr('width', w);
    svg.selectAll('rect')
        .data(salaryValues)
        .enter()
        .append('rect')
        .attr('x', function (d ,i) {
            return i*( w / lenghtWoman); //gives position the every element by multiplying the index
        })
        .attr('y', function (d) {
            return h- scale(d);
        })
        .attr('height', function (d) {
            return scale(d);
        })
        .attr('width', barwidth)
        .attr('fill', 'green');

    svg.selectAll('text')
        .data(salaryValues)
        .enter()
        .append('text')
        .text(function (d) {
            return  d;
        })
        .attr('text-anchor','middle')
        .attr('x', function (d,i) {
            return (i * colWidth) + barwidth / 2;
            //this function finds the exact middle point between position and width of the bar
            //multiplies the index by the total space of the column and sums the barwidth to find the exact middle point by dividing by 2
        })
        .attr('y', function (d) {
            return h - scale(d) + 14;
        })
        .attr('font-family','sans-serif')
        .attr('font-size', '11px')
        .attr('fill','white')

}