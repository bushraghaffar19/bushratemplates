var btnpdf=document.getElementById("pdf");

async function generatepdf(){

    var downloading=document.getElementById("ad");
    var divHeight = $('#ad').height();
    var divWidth = $('#ad').width();
    var ratio = divHeight / divWidth;
    var doc=new jsPDF();
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    height = ratio * width;
    await html2canvas(downloading,{
        allowTaint:true,
        useCORS:true,
        width:divWidth+100,
        height:divHeight+100

    }).then((canvas)=>{
        //canvas convert to png
        doc.addImage(canvas.toDataURL("image/png"),'PNG',5,30,width+20,height+50);

    })
    doc.save("cv.pdf");

}
btnpdf.addEventListener("click",generatepdf());
