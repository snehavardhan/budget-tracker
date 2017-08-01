var date;
var storeName;
var items;
var paymentOption;
var paymentType;
var cost;
var totalCost = 0;
var monthlyBudget = 800;
var newBal;
function addItemToList(){
  getItemValues();
  var table = document.getElementById("expenseTable");
  var newRow = document.createElement("tr");
  var cell1 = document.createElement("td");
  var cell1text = document.createTextNode(date);
  cell1.appendChild(cell1text);
  newRow.appendChild(cell1);
  var cell2 = document.createElement("td");
  var cell2text = document.createTextNode(storeName);
  cell2.appendChild(cell2text);
  newRow.appendChild(cell2);
  var cell3 = document.createElement("td");
  var cell3text = document.createTextNode(items);
  cell3.appendChild(cell3text);
  newRow.appendChild(cell3);
  var cell4 = document.createElement("td");
  var cell4text = document.createTextNode(paymentType);
  cell4.appendChild(cell4text);
  newRow.appendChild(cell4);
  var cell5 = document.createElement("td");
  var cell5text = document.createTextNode(cost);
  cell5.appendChild(cell5text);
  newRow.appendChild(cell5);
  var cell6 = document.createElement("td");
  var cell6text = document.createTextNode(calculateBalance());
  cell6.appendChild(cell6text);
  newRow.appendChild(cell6);
  table.appendChild(newRow);

  var as = document.getElementById("showSpent");
  as.innerText = totalCost;
  var bs = document.getElementById("showBalance");
  bs.innerText = newBal;

  //HIGHCHARTS START

  $(document).ready(function () {
      // Build the chart
      Highcharts.chart('container', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Spending and balance chart for August, 2017'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: false
                  },
                  showInLegend: true
              }
          },
          series: [{
              name: 'August Budget',
              colorByPoint: true,
              data: [{
                  name: 'Amount Spent',
                  y: totalCost,
                  sliced: true,
                  selected: true
              }, {
                  name: 'Remaining Balance',
                  y: newBal
              }, ]
          }]
      });
  });

    //HIGHCHARTS END
}

function calculateBalance(){
  totalCost = Number(totalCost) + Number(cost);
  newBal = monthlyBudget - totalCost;
  return newBal;
}

function getItemValues(){
  date = document.getElementById("date").value;
  storeName = document.getElementById("storeName").value;
  items = document.getElementById("items").value;
  paymentOption = document.getElementById("paymentOption");
  paymentType = paymentOption.options[paymentOption.selectedIndex].text;
  cost = document.getElementById("cost").value;
}
