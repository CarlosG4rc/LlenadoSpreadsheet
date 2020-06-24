function doGet() {
    var template =  HtmlService.createTemplateFromFile('index'); // Método para la creación del  template
    return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1.0'); // se evalua la metadata de la cabecera
}
function include (filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}
function completar(){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName('Grupos');
    var data = sheet.getRange(1,1).getDataRegion().getValues();
    var grupo = {};
    data.forEach(function(n){
        grupo[n[8]] = null;
        });
    return grupo;
}
function autocompletar(clase){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName(clase);
    var data = sheet.getRange(1,1).getDataRegion().getValues();
    var nombre = {};
    data.forEach(function(n){
        nombre[n[1]] = null;
        });
    return nombre;
}
function getfemail (alumno){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName(alumno.grupo);
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == alumno.nombre)
      {
        var femail = value[i] && value[i][4];
        i = lastrowbd + 1;
      }
    }
    return femail;
}
function enviarreporte(infReporte){
    var ssrep = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1-S-e9_uWrQlgPUdZ8BT6KBlsO78HXgh9EJNwPfLeKRE/edit#gid=0');
    var sheet = ssrep.getSheetByName('BDRep');
    var lastrow = sheet.getDataRange().getNumRows();
    sheet.getRange("A" + lastrow).setValue(infReporte.nombre);

}

