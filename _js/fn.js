window.addEventListener('DOMContentLoaded',(event)=>{
    btclose = document.getElementById('btnclose')
    btclose.onclick = function(){
        if(indice >=1)
        {
            document.getElementById('idcontent'+indice).remove()
            indice--
            ref--
        }
        if(indice == 0)
        {
            document.getElementById('btnconsult').style.display = "none"
            document.getElementById('btnclose').style.display = 'none'
        }
    }
  
})
var indicedata = 1
var referencia = 5
var result = 0
var Query = false
var ref = 0
var valueRef = 0
var indice = 0
function validateForm()
{
    
    var data  = [document.getElementById('referencia-de-orçamento').value,
    document.getElementById('name-business').value,
    document.getElementById('name-pelicula').value,
    document.getElementById('valor-de-cobranca').value];
    
    regexH = /[0-9]{1,2}\.[0-9]{2}/g
    regexW = /[0-9]{1,2}\.[0-9]{2}/g
    for(i=0;i<4;i++)
    {
        if(data[i] == ''){
            alert('Dados incompletos!')
            return false
        }
         
    }
    for(i=ref;i<=ref;i++){
            meterHeight = document.getElementById('altura'+i).value
            meterWidth = document.getElementById('largura'+i).value
            if(meterHeight.length > 5 || meterWidth.length > 5){
                alert('Medidas +99 não são aceitas!')
                return false
            }
            if(meterHeight == '' || meterWidth == '')
            {
                alert('Dados incompletos!')
                return false
            }
            validateHeight = regexH.test(meterHeight)
            validateWidth = regexW.test(meterWidth)
            if(!validateHeight){
                alert('Insira dados de forma correta! Ex:\"22,55\"')
                return false
            }
            if(!validateWidth){
                alert('Insira dados de forma correta! Ex:\"22,55\"')
                return false
            }
    }
    
    document.getElementById('formdata').style.display = 'none'
    document.getElementById('result-view').style.backgroundSize = "7%"
    document.getElementById('result-view').style.backgroundImage = "url('_picture/load.gif')"
    
    setTimeout(()=>{
        resultdata()
    },4500)
} 
function nwpdf()
{
    const htmlResult = document.getElementById('card-result').innerHTML
    const win = window.open('','','height=700,width=700')

    style = "<style>"
    style +="body{background-color: white;font-size: 15pt;font-family: Arial, Helvetica, sans-serif;color: #545454;}"
    style +="span{margin:120px auto 120px auto;}label{margin:1200px auto 1200px auto;}"
    style += "</style>"
    
    win.document.write('<!DOCTYPE html><html lang="pt-br">')
    win.document.write('<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="shortcut icon" href="logoicon.png" type="image/x-icon">')
    win.document.write(style)
    win.document.write('<title>Consulte.Me</title></head>')
    win.document.write('<body>')
    win.document.write(htmlResult)
    win.document.write('</body>')
    win.document.write('</html>')
    
    win.print()
    
}


function newInputGlass(){
    document.getElementById('btnclose').style.display = 'inline'
    Query = true
    if(Query && indice <= 50)
    {
        indice++
        ref = indice
        var html = document.getElementById('viewform')

        content = document.createElement("div")
        idContent = document.createAttribute("id")
        idContent.value = "idcontent"+indice
        content.setAttributeNode(idContent)

       /* labelClose = document.createElement("label")
        idlabel = document.createAttribute("id")
        labelClose.classList.add("labelClose")
        idlabel.value = indice
        labelClose.setAttributeNode(idlabel)
        
        labelClose.textContent = "X"*/

        content.classList.add("glassContent")
        label = document.createElement("label")
        label.classList.add('labelContent')
        label.textContent =  indice +"º VIDRO "

        breakRow = document.createElement("br")

        inputHTMLwidth = document.createElement("input")
        inputHTMLheight = document.createElement("input")

        placeholderWidth = document.createAttribute("placeholder")
        placeholderHeight = document.createAttribute("placeholder")

        typeInputWidth = document.createAttribute("type")
        typeInputHeight = document.createAttribute("type")
        idWidth = document.createAttribute("id")
        idHeight = document.createAttribute("id")

        stepWidth = document.createAttribute("step")
        stepHeight = document.createAttribute("step")

        stepWidth.value = ".01"
        stepHeight.value = ".01"
        typeInputWidth.value = "number"
        typeInputHeight.value = "number"
        placeholderWidth.value = "Altura"
        placeholderHeight.value = "Largura"

        inputHTMLheight.setAttributeNode(stepWidth)
        inputHTMLwidth.setAttributeNode(stepHeight)

        inputHTMLheight.setAttributeNode(typeInputWidth)
        inputHTMLwidth.setAttributeNode(typeInputHeight)

        inputHTMLheight.setAttributeNode(placeholderWidth)
        inputHTMLwidth.setAttributeNode(placeholderHeight)

        idHeight.value = 'altura'+indice
        inputHTMLheight.setAttributeNode(idHeight)
        
        html.appendChild(content)
        content.appendChild(label)
       /* content.appendChild(labelClose)*/
        content.appendChild(breakRow)
        content.appendChild(inputHTMLheight)

        idWidth.value = 'largura'+indice
        inputHTMLwidth.setAttributeNode(idWidth)
        content.appendChild(inputHTMLwidth)

        content.appendChild(breakRow)
        /*labelClose.onclick = function(e){RemoveGlass(this.id)}*/
        
        
        document.getElementById('btnconsult').style.display = "block"
    }
    else alert('Operação em capacidade máxima!')
   
}
function resultdata()
{
    
    document.getElementById('result-view').style.backgroundImage = "none"
    refCalculo = document.getElementById('referencia-de-orçamento').value
    if(refCalculo == 'metro-quadrado')
    {
        i = 1
        if(Query && ref > 0)
        {
            valueRef = parseFloat(document.getElementById('valor-de-cobranca').value)
            html = document.querySelector('.resultview')
            let meter = 0
            while(i <= ref)
            {
                     
                heightvalue = document.getElementById('altura'+i).value
                widthvalue = document.getElementById('largura'+i).value
                meter += heightvalue * widthvalue
                result = meter*valueRef
        
                i++
            }
            document.getElementById('card-result').style.display = 'block'
            document.getElementById('icon-done').style.display = 'block'
            document.getElementById('btn-reload').style.display = 'inline'
            document.getElementById('btnpdf').style.display = 'inline' 

            document.getElementById('title-name-business').textContent = document.getElementById('name-business').value
            document.getElementById('title-name-business-span').textContent = document.getElementById('name-business').value
            document.getElementById('TOTglass').textContent = ref + ' vidro\'s '
            document.getElementById('meter').textContent = meter.toFixed(2) + ' m² metros quadrados'
            document.getElementById('tint').textContent = document.getElementById('name-pelicula').value
            document.getElementById('value-uni').textContent = valueRef.toLocaleString('pt-br', {style: "currency", currency: "BRL"}) + ' R$/metro(m²)'
            document.getElementById('resultTOT').textContent = result.toLocaleString('pt-br', {style: "currency", currency: "BRL"}) + ' R$'
        }
    }
    else{
       if(Query && ref > 0){
        valueRef = parseFloat(document.getElementById('valor-de-cobranca').value)
        html = document.querySelector('.resultview')
        i=1
        let meter = 0
        while(i<=ref){
     
            heightvalue = document.getElementById('altura'+i).value
            meter = (meter + parseFloat(heightvalue))
            i++
        }
        result = meter*valueRef
        document.getElementById('card-result').style.display = 'block'
        document.getElementById('icon-done').style.display = 'block'
        document.getElementById('btn-reload').style.display = 'inline'
        document.getElementById('btnpdf').style.display = 'inline' 

        document.getElementById('title-name-business').textContent = document.getElementById('name-business').value
        document.getElementById('title-name-business-span').textContent = document.getElementById('name-business').value
        document.getElementById('TOTglass').textContent = ref + ' vidro\'s '
        document.getElementById('meter').textContent = meter.toFixed(2) + ' metros de forma Linear'
        document.getElementById('tint').textContent = document.getElementById('name-pelicula').value
        document.getElementById('value-uni').textContent = valueRef.toLocaleString('pt-br', {style: "currency", currency: "BRL"}) + ' R$/metro'
        document.getElementById('resultTOT').textContent = result.toLocaleString('pt-br', {style: "currency", currency: "BRL"}) + ' R$'

         
       }
    }
    
}