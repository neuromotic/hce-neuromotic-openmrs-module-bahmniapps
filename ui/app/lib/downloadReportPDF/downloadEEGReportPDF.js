function downloadEEGReportPDF(text_lines) {

    var paper_width = 21.6;
    var paper_height = 27.9;
    var margin_left = 2.5;
    var margin_right = 2.5;
    var margin_top = 2;
    var margin_bottom = 2;
    // Position of the line for print text
    var line_position = margin_top;
    var interlining = 0.5;
    var max_text_width = paper_width - (margin_left + margin_right);
    var max_text_heigh = paper_height - margin_bottom;
    var font_size_small = 10;
    var font_size_normal = 11;
    var font_size_title = 14;
    var img_signature = 'data:image/png;base64,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';

    // Nuevo documento con orientación portrait (vertical), medidas en cm y tamaño carta.
    var doc = new jsPDF('p', 'cm', 'letter');

    /**
     * HEADER
     */
    doc.setFontSize(font_size_small);
    doc.setTextColor('darkorange');
    doc.text('DRA. MARÍA EUGENIA MIÑO ARANGO', margin_left, line_position);
    line_position+=interlining;
    doc.setTextColor('indigo');
    doc.text('Neuróloga Pediátrica', margin_left, line_position);
    line_position+=interlining;
    doc.text('Encefalografía', margin_left, line_position);
    line_position+=interlining;
    doc.text('Universidad Autónoma de Nuevo León', margin_left, line_position);
    line_position+=interlining;
    doc.text('Centro Neurológico para niños y adolescentes', margin_left, line_position);
    line_position+=interlining;
    doc.text('Monterrey - México', margin_left, line_position);
    line_position+=interlining;
    doc.text('Cels.: 317 220 3039 - 313 793 6585', margin_left, line_position);
    line_position+=(interlining*2);

    /**
     * TITLE
     */
    doc.setFontSize(font_size_title);
    doc.setFontType('bold');
    doc.setTextColor('darkorange');
    doc.text('REPORTE DE ELECTROENCEFALOGRAMA', margin_left, line_position);
    line_position+=(interlining*2);

    /**
     * CONTENT
     */
    /*var text_lines = [
        "PACIENTE:",
        String(patient),
        "ID:",
        "1002966019",
        "FECHA DE NACIMIENTO:",
        "31-5-2002",
        "SEXO:",
        "Masculino",
        "HISTORIA CLÍNICA:",
        String(obsValue),
        "TECNICA DEL EEG:",
        "estudio realizado con electroencefalógrafo, digital neurovirtual BWII 2010 utilizando el sistema internacional 10/20. Utilizando electrodos de superficie, se realizó el trazado EEG durante 30 minutos, se practicaron maniobras de activación.",
        "MEDICAMENTOS:",
        "No",
        "TRAZADO DE FONDO:",
        "EEG DE VIGILIA - En las regiones posteriores se registró una actividad Alfa de 8-10 CPS y de 40-80 Mv de Amplitud bien organizada y regulada, y reactiva a la apertura ocular. En las regiones anteriores se observa una actividad beta de 19-21 CPS y de 5-10 Mv de amplitud.",
        "ANORMALIDADES:",
        "Durante el trazado no se registró actividad paroxística, actividad focal ni asimetrías significativas.",
        "PROCEDIMIENTOS DE ACTIVACIÓN:",
        "La ELI se realizó con frecuencias progresivas entre 2-30 CPS sn desorganización de la actividad de fondo. Durante la estimulación sonora se observó buena respuesta. La hiperventilación desorganizó el trazado de fondo.",
        "CONCLUSIÓN:",
        "Electroencefalograma de vigilia normal para la edad del paciente."
    ];*/

    doc.setFontSize(font_size_normal);
    // First text_line is a label, so it must be bold type
    doc.setFontType('bold');
    doc.setTextColor('black');

    //var text_line = "";
    var paragraph;
    // Indicates whether text_line is content or label
    var is_content = false;
    var paragraph_bottom_position = 0;
    for (var text_line of text_lines) {
        paragraph = doc.splitTextToSize(text_line, max_text_width);
        paragraph_bottom_position = line_position + paragraph.length*interlining;
        if(paragraph_bottom_position >= max_text_heigh){
            doc.addPage();
            line_position = margin_top;
        }
        doc.text(margin_left, line_position, paragraph);
        line_position += (paragraph.length*interlining);
        if (is_content === true){
            line_position+=interlining;
            doc.setFontType('bold');
        } else {
            doc.setFontType('normal');
        }
        is_content = !is_content;
    }

    doc.setFontType('bold');
    doc.text('EEG REALIZADO POR:', margin_left, line_position);
    doc.addImage(img_signature, 'JPEG', margin_left, line_position);
    line_position+=(interlining*5);
    doc.text('MARÍA EUGENIA MIÑO ARANGO', margin_left, line_position);
    line_position+=interlining;
    doc.text('NEURÓLOGA PEDIATRA', margin_left, line_position);
    line_position+=interlining;
    doc.text('TP 12990 - CENNA (NUEVO LEÓN, MÉXICO)', margin_left, line_position);

    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();
    var dateTime = date+'-'+time;
    doc.save('ReporteEEG-'+dateTime+'.pdf');
}
