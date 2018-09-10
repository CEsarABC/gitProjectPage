/*



var item = items[Math.floor(Math.random()*items.length)];



var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i]+'\n';
}

console.log(text);

function myFunction() {
    var x = Math.floor((Math.random() * 100) + 1);
    console.log(x);
}

*/

var gNames = ['Alejandra','Martina','Josefa','Renata','Francis','Mariana','Flora','Tatiana','Marisol','Kim',
    'Alexa','Isabel','Cecilia','Aquila','Augusta','Aurelia','Flavia','Horatia'];
var ages = [18,19,20,21,50,45,23,64,23,34,65,78,55,33,21,20,24,29];
var Career = ['graphic design','nursing','reporter','police officer','politician','curator','engineer','photographer','receptionist',
    'lawyer','chef','secretary','athlete','tutor','driver','pilot','technician','governor'];
var salaries = [300,250,289,600,420,670,290,357,800,450,200,150,600,730,509,445,345,200];
var cities = ['London', 'Liverpool','Manchester','London', 'London','Liverpool','Manchester','London','London','Liverpool','Manchester',
'London','London','London','London','Liverpool','Manchester','Manchester'];
var date = [
    '01/04/1994',
  '06/09/1997',
  '12/12/1968',
  '13/09/1973',
  '22/05/1995',
  '05/03/2000',
  '08/10/1999',
  '21/07/1996',
  '12/07/1998',
  '13/04/1963',
  '19/09/1989',
  '28/02/1953',
  '12/07/1985',
  '03/12/1940',
  '13/09/1998',
  '14/01/1995',
  '02/09/1954',
  '10/06/1984'];

//using random to mix all info in arrays

function my_gNames() {
    gNames.sort(function(a, b){return 0.5 - Math.random()});
}

function my_ages() {
    ages.sort(function(a, b){return 0.5 - Math.random()});
}

function my_Career() {
    Career.sort(function(a, b){return 0.5 - Math.random()});
}

function my_salary() {
    salaries.sort(function(a, b){return 0.5 - Math.random()});
}

function my_cities() {
    cities.sort(function(a, b){return 0.5 - Math.random()});
}

my_gNames();
my_ages();
my_Career();
my_salary();
my_cities();

console.log(cities);

/*// -- not working mix is not an array
var i;
var mix=[];
function createMixArray() {
    for( i= 0; i < gNames.length; i++)
    mix[i] = (gNames[i]+ ' ' + ages[i]+ ' ' + Career[i]);
    console.log(mix);
}

//createMixArray();


//console.log(mix);


//var item = gNames[Math.floor(Math.random()*gNames.length)];

//console.log(item + '\n');

//console.log(gNames + '\n');

//console.log(ages[1]+'\n');

//sample of an object*/

/*const persona = {
  name: gNames[0],
  age: ages[0],
  prof: Career[0],
  salary: salaries[0],
    city: cities[0]
};

console.log(Object.values(persona)+'\n');
//console.log(persona.age + '\n');
//console.log(persona + '\n');*/

//*******************constructor for people******************

var birthYear = [];
var thisYear = 2018;
function makeBirthYear() {
    var j;
    for(j = 0; j < ages.length ; j++)
        birthYear.push(thisYear - ages[j]);
        console.log(birthYear);
}

makeBirthYear();


function Person(first, prof, age, salary, city, birth, date1) {
    this.name_p = first;
    this.prof_p = prof;
    this.age_p = age;
    this.salary_p = salary;
    this.town_p = city;
    this.birth_p  = birth;
    this.date_p = date1;

}

/*var me = new Person('cesar','bernal', 35,500,'London');

console.log(Object.values(me) + '\n');

// **************converting the object to JSON**************** //

var womanTest = new Person(gNames[0],Career[0],ages[0],salaries[0],cities[0]);
console.log(womanTest);
console.log('\n');
//var myJSON = JSON.stringify(womanTest);
//console.log(myJSON + '\n');*/

///////////////////the working instruction to create the objects array////////////

var woman = [];
function objectsInArray() {
    var j;
    for(j = 0; j < gNames.length; j++)
        woman.push(new Person(gNames[j],Career[j],ages[j],salaries[j],cities[j],birthYear[j], date[j]));
        console.log(woman + '\n');
        console.log(woman[3]);
}
//

objectsInArray();

console.log(woman[1].salary_p + ' this is the test');
console.log(woman[1].town_p + ' this is the test');
console.log(Object.values(woman[2])+'\n');

//function to unpack the objects
//Course Working With External Resources Data & The DOM Unpacking Our Data Onto The DOM
//second video

function writeToDocumentNames() {
        var el = document.getElementById('demo');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('demo').innerHTML += '<p>' + item.name_p + '</p>';
        });
}

function writeToDocumentCareers() {
     var el = document.getElementById('demo1');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('demo1').innerHTML += '<p>' + item.prof_p + '</p>';
        });
}

function writeToDocumentAges() {
     var el = document.getElementById('demo2');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('demo2').innerHTML += '<p>' + item.age_p + '</p>';
        });
}

function writeToDocumentSalaries() {
     var el = document.getElementById('demo3');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('demo3').innerHTML += '<p>' + item.salary_p + '</p>';
        });
}

function writeToDocumentTown() {
     var el = document.getElementById('demo4');
        el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('demo4').innerHTML += '<p>' + item.town_p + '</p>';
        });
}


// i need to print all objects, by now should be printing just the last one and not inside an array

//new idea ['name: '+ gNames[i] +', '+'prof: '+ prof[i] + ', '+ 'age: ' + ages[i]
//crates an array of strings
var superArray = [];

function newInArray() {
    var k;
    for(k = 0; k < gNames.length; k++)
        superArray[k] = [('name: '+ gNames[k] +', '+'prof: '+ Career[k] + ', '+ 'age: ' + ages[k] +', '+'salary: '+ salaries[k])]
        console.log(superArray);
    //document.getElementById("demo3").innerHTML = superArray[];
}

newInArray();


/////////////////////////////big test Salaries




    var h = 450;
    var w = 600;
    var barPadding = 2;
    var lenghtWoman = woman.length;
    console.log(lenghtWoman);
    var colWidth = w / woman.length; //gives the size the space divided by the number of objects
    var barwidth = colWidth - barPadding; //gives the total width for each bar
    var salaryValues = [];


///////////// Making a new array for on of the values/////////////
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

    var svgDefs = svg.append('defs');
        var mainGradient = svgDefs.append('linearGradient')
                .attr('id', 'mainGradient');
        mainGradient.append('stop')
                .attr('class', 'stop-left')
                .attr('offset', '0');

        mainGradient.append('stop')
                .attr('class', 'stop-right')
                .attr('offset', '1');

    svg.selectAll('rect')
        .data(salaryValues)
        .enter()
        .append('rect')
        .classed('filled',true)
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

/////////////////////////////////////

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

///////////////////////DC row and selector////////////////////

function makeGraphs() {
        var ndx = crossfilter(woman);

        var cityDim = ndx.dimension(dc.pluck('town_p'));

        var selectCity = dc.selectMenu('#store-selector');
        cityDim = ndx.dimension(dc.pluck('town_p'));
        selectCityGroup = cityDim.group();

        selectStore
            .dimension(storeDim)
            .group(selectCityGroup);


        var personDim = ndx.dimension(dc.pluck('name_p'));
        var spendByPerson = personDim.group().reduceSum(dc.pluck('salary_p'));
        dc.rowChart("#person-spend-chart")
            .width(600)
            .height(330)
            .dimension(personDim)
            .group(spendByPerson)
            .xAxis().ticks(4);

        dc.renderAll();
    };