var gNames = ['Alejandra','Martina','Josefa','Renata','Francis','Mariana','Flora','Tatiana'];
var ages = [18,19,20,21,50,45,23,64];
var Career = ['graphic design','nursing','reporter','police officer','politician','curator','engineer','photographer'];
var salaries = [300,250,289,600,420,670,290,357];
var cities = ['London', 'Liverpool','Manchester','London', 'London','Liverpool','Manchester','London'];



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

function Person(first, prof, age, salary, city) {
    this.name_p = first;
    this.prof_p = prof;
    this.age_p = age;
    this.salary_p = salary;
    this.town_p = city;
}

var woman = [];
function objectsInArray() {
    var j;
    for(j = 0; j < gNames.length; j++)
        woman.push(new Person(gNames[j],Career[j],ages[j],salaries[j],cities[j]));
        console.log(woman + '\n');
}

objectsInArray();

function writeToDocumentCities() {
     var el = document.getElementById('test1');
       // el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('test1').innerHTML += '<p>' + item.town_p + '</p>';
        });
}

function writeToDocumentNames() {
        var el = document.getElementById('test2');
        //
        woman.forEach(function (item) {
            document.getElementById('test2').innerHTML += '<p>' + item.name_p + '</p>';
        });
}

function writeToDocumentCareers() {
     var el = document.getElementById('test3');
       // el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('test3').innerHTML += '<p>' + item.prof_p + '</p>';
        });
}

function writeToDocumentAges() {
     var el = document.getElementById('test4');
        //el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('test4').innerHTML += '<p>' + item.age_p + '</p>';
        });
}

function writeToDocumentSalaries() {
     var el = document.getElementById('test5');
        //el.innerHTML = '';
        woman.forEach(function (item) {
            document.getElementById('test5').innerHTML += '<p>' + item.salary_p + '</p>';
        });
}