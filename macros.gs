/** @OnlyCurrentDoc */

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('ADRI Y JULIO | PROYECTO ARDUINO')
      .addItem('Dar formato y crear filtro', 'Todo')
      .addSeparator()
      .addItem('Restablecer hoja', 'Borrar')
      .addSeparator()
      .addItem('Borrar datos anteriores al día de hoy', 'Hoy')
      .addToUi();
}


function Todo() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().setName('DATOS');
  spreadsheet.duplicateActiveSheet();
  spreadsheet.getActiveSheet().setName('FORMAT');
  spreadsheet.getRange('F1').activate();
  spreadsheet.getCurrentCell().setFormula('=LEFT(E1;10)');
  spreadsheet.getRange('F:F').activate();
  spreadsheet.getRange('F1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getRange('G1').activate();
  spreadsheet.getCurrentCell().setFormula('=MID(E1;12;5)');
  spreadsheet.getRange('G:G').activate();
  spreadsheet.getRange('G1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getRange('H1').activate();
  spreadsheet.getCurrentCell().setFormula('=MID(E1;12;2)');
  spreadsheet.getRange('H:H').activate();
  spreadsheet.getRange('H1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);


  spreadsheet.getRange('I1').activate();
  spreadsheet.getCurrentCell().setFormula('=G1+"02:00:00"');
  spreadsheet.getRange('I:I').activate();
  spreadsheet.getRange('I1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getRange('I:I').activate();
  spreadsheet.getActiveRangeList().setNumberFormat('[h]:mm:ss');


  //spreadsheet.getRange('I1').activate();
  //spreadsheet.getCurrentCell().setFormula('=G1+"02:00:00"');
  //spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('I1:I1462'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  //spreadsheet.getRange('I:I').activate();
  //spreadsheet.getActiveRangeList().setNumberFormat('[h]:mm:ss');


  spreadsheet.getRange('J1').activate();
  spreadsheet.getCurrentCell().setFormula('=H1+2');
  spreadsheet.getRange('J:J').activate();
  spreadsheet.getRange('J1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);


  //spreadsheet.getRange('J1').activate();
  //spreadsheet.getCurrentCell().setFormula('=H1+2');
  //spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('J1:J1462'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);

  spreadsheet.getRange('K1').activate();
  spreadsheet.getCurrentCell().setFormula('=LEFT(I1;5)');
  spreadsheet.getRange('K:K').activate();
  spreadsheet.getRange('K1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);


  //spreadsheet.getRange('K1').activate();
  //spreadsheet.getCurrentCell().setFormula('=LEFT(I1;5)');
  //spreadsheet.getRange('K:K').activate();
  //spreadsheet.getRange('K1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);



  spreadsheet.getRange('G:I').activate();
  spreadsheet.getActiveSheet().hideColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('J:J').activate();
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveSheet().insertRowsBefore(spreadsheet.getActiveRange().getRow(), 1);
  spreadsheet.getActiveRange().offset(0, 0, 1, spreadsheet.getActiveRange().getNumColumns()).activate();
  spreadsheet.getActiveSheet().setColumnWidth(4, 207);
  spreadsheet.getActiveSheet().setColumnWidth(1, 184);
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Fecha Completa');
  spreadsheet.getRange('B1').activate();
  spreadsheet.getCurrentCell().setValue('Proyecto');
  spreadsheet.getRange('C1').activate();
  spreadsheet.getCurrentCell().setValue('Sensor');
  spreadsheet.getRange('D1').activate();
  spreadsheet.getCurrentCell().setValue('Valor Sensor');
  spreadsheet.getActiveRangeList().setHorizontalAlignment('left');
  spreadsheet.getRange('E1').activate();
  spreadsheet.getCurrentCell().setValue('Fecha y Hora');
  spreadsheet.getRange('F1').activate();
  spreadsheet.getCurrentCell().setValue('Fecha');
  spreadsheet.getRange('J1').activate();
  spreadsheet.getCurrentCell().setValue('Hora');
  spreadsheet.getRange('K1').activate();
  spreadsheet.getCurrentCell().setValue('Hora y Minuto');
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  spreadsheet.getRange('J:J').activate();
  spreadsheet.getActiveRangeList().setNumberFormat('0');
  spreadsheet.getRange('D:D').activate();
  spreadsheet.getActiveRangeList().setNumberFormat('0');
  spreadsheet.getRange('L1').activate()
  .setFormula('=IF(C1="pressure";LEFT(D1;3) & " Pa";IF(C1="temperature";LEFT(D1;2) & " ºC";LEFT(D1;2) & " %"))');
  spreadsheet.getRange('L:L').activate();
  spreadsheet.getRange('L1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getRange('L1').activate();
  spreadsheet.getCurrentCell().setValue('Valor Final');

//DIAS ANTERIORES
  spreadsheet.getRange('S1').activate()
  .setFormula('=IF(F:F=ARRAYFORMULA(LOOKUP(1;1/(F:F<>"");F:F));"hoy";"ayer")');
  spreadsheet.getRange('S:S').activate();
  spreadsheet.getRange('S1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);
  spreadsheet.getRange('S1').activate();
  spreadsheet.getCurrentCell().setValue('Hoy');



  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setHorizontalAlignment('center');


//FILTRO
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).createFilter();


//TITULO
  var spreadsheet = SpreadsheetApp.getActive();

  spreadsheet.getRange('T1').activate()
  .setFormula('=ARRAYFORMULA(LOOKUP(1;1/(F:F<>"");F:F))');

  var ui = SpreadsheetApp.getUi();
  var value = SpreadsheetApp.getActiveSheet().getRange('T1').getValue();

  
  spreadsheet.rename("REGISTRO DATOS | "+value);

  spreadsheet.getRange('A1').activate()


};

function Borrar() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveSheet().deleteRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
  spreadsheet.getRange('J:J').activate();
  spreadsheet.getActiveSheet().showColumns(6, 3);
  spreadsheet.getRange('F:L').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('D:D').activate();
  spreadsheet.getActiveRangeList().setNumberFormat('#,##0');
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('FORMAT'), true);
  spreadsheet.deleteActiveSheet();
  spreadsheet.getActiveSheet().setName('DATOS BORRADO');
};



function Hoy() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('S1').activate();
  var criteria = SpreadsheetApp.newFilterCriteria()
  .setHiddenValues(['hoy'])
  .build();
  spreadsheet.getActiveSheet().getFilter().setColumnFilterCriteria(19, criteria);
  spreadsheet.getRange('2:2').activate();
  spreadsheet.setCurrentCell(spreadsheet.getRange('C2'));
  var currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getActiveSheet().deleteRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
  spreadsheet.getRange('S1').activate();
  criteria = SpreadsheetApp.newFilterCriteria()
  .build();
  spreadsheet.getActiveSheet().getFilter().setColumnFilterCriteria(19, criteria);
  spreadsheet.getRange('A1').activate()
};