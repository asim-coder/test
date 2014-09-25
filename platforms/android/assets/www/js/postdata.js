
            var frm = $('#form');
            frm.submit(function (ev) {
        ev.preventDefault();
                //alert("Hai" + frm.attr('method') +frm.attr('action') + frm.serialize());
                $.ajax({
                type: 'post',
                url: 'http://alrais.host22.com/index.php',
                data: frm.serialize(),
                success: function (data) {
                    alert('Download your agreement in pdf form at the end of the page.');
                }
                });
                document.getElementById("myDiv").innerHTML="<button onclick='downloadPDFFile();' class='topcoat-button'>Download PDF Agreement</button><a href = 'http://alrais.host22.com/agreement.pdf'>N</a>";
            });
