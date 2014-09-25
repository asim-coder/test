
function downloadPDFFile() {
    alert("called downloadPDFFile");
    var fileDownloadPDF = new FileTransfer();
    var uri = encodeURI('http://alrais.host22.com/agreement.pdf');
    var folder = '/sdcard/';
    var fileName = 'agreement.pdf';
    var pathToFile = folder + fileName;
    console.log("Hai")
    fileDownloadPDF.download(
                      uri,
                      pathToFile,
                      function(entry) {
                      console.log("download complete: " + entry.pathToFile);
                      alert("File Downloaded. Saved in your phone.");
                      window.plugins.pdfViewer.showPdf(pathToFile);
                      },
                      function(error) {
                      console.log("download error source " + error.source);
                      console.log("download error target " + error.target);
                      console.log("upload error code" + error.code);
                      alert("Download error!!.Please make sure you have working internet connection!")
                      }
                      );
}