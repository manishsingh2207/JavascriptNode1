
var fs  = require("fs");
function plot1(total, ageGroup, totalLiteratePersons) {

    this.total = total;
    this.ageGroup = ageGroup;
    this.totalLiteratePersons = totalLiteratePersons;
};
var i=0;
var plotGraph1=[];
var filePath=['../CSV/India2011.csv','../CSV/IndiaSC2011.csv','../CSV/IndiaST2011.csv'];
function firstWrite(filePath){
  while(i<3){
fs.readFileSync(filePath[i]).toString().split('\n').forEach(function (line) {
    if(line!=null){
    var tempRow=line;
    var tempArray = tempRow.split(",");
    /*collect data from file*/
    if(tempArray[4]=="Total"){
      var tempPlot1=new plot1;
      tempPlot1.total=tempArray[4];
      tempPlot1.ageGroup=tempArray[5];
      tempPlot1.totalLiteratePersons=tempArray[12];
      plotGraph1.push(new plot1(tempPlot1.total,tempPlot1.ageGroup,tempPlot1.totalLiteratePersons));
}}
});
i++;
}
}
firstWrite(filePath);
fs.writeFile('./plot1.json', JSON.stringify(plotGraph1));
