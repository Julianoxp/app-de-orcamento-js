window.addEventListener('DOMContentLoaded',(event)=>{
   const labelx = document.getElementById('')
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
    for(i=0;i<4;i++)
    {
        if(data[i] == ''){
            alert('Dados incompletos!')
            return false
        }
    }
    for(i=ref;i<=ref;i++){
            var datameterHeight = document.getElementById('altura'+i).value
            var datameterWidth = document.getElementById('largura'+i).value
            if(datameterHeight == '' || datameterWidth == '')
            {
                alert('Dados incompletos!')
                return false
            }
    }
    document.getElementById('formdata').style.display = 'none'
    document.getElementById('result-view').style.backgroundSize = "7%"
    document.getElementById('result-view').style.backgroundImage = "url('_picture/load.gif')"
    
    setTimeout(()=>{
        resultdata()
    },4500)
}/*
function RemoveGlass(aidi)
{
    document.getElementById('idcontent'+aidi).remove()
    indice--
    ref--
}*/
function RemoveGlass()
{
    if(indice >=1)
    {
        document.getElementById('idcontent'+indice).remove()
        indice--
        ref--
    }
    if(indice == 0)
    {
        document.getElementById('btnconsult').style.display = "none"
    }
}
function newInputGlass(){
    ref = indice
    Query = true
    if(Query && indice <= 50)
    {
        indice++
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
                spanMeter = document.createElement('span')
                spanTint = document.createElement('span')
                spanResultValue = document.createElement('span')
                spanValue = document.createElement('span')
                spanBusiness = document.createElement('span')
                br1 = document.createElement('br')
                br2 = document.createElement('br')
                br3 = document.createElement('br')
                br4 = document.createElement('br')
                br5 = document.createElement('br')
               
                heightvalue = document.getElementById('altura'+i).value
                widthvalue = document.getElementById('largura'+i).value
                meter += heightvalue * widthvalue
                result = meter*valueRef
        
                i++
            }
           
            spanMeter.textContent = meter.toFixed(2) + ' m² metros quadrados'
            spanBusiness.textContent = 'Empresa :  ' + document.getElementById('name-business').value
            spanTint.textContent = 'Película : ' + document.getElementById('name-pelicula').value
            spanValue.textContent = 'Valor :' + valueRef.toFixed(2) + 'R$'
            spanResultValue.textContent = 'Cotação final : ' + result.toFixed(2) + ' R$' 
            html.appendChild(spanBusiness)
            html.appendChild(br1)
            html.appendChild(spanMeter)
            html.appendChild(br2)
            html.appendChild(spanTint)
            html.appendChild(br3)
            html.appendChild(spanValue)
            html.appendChild(br4)
            html.appendChild(br5)
            html.appendChild(spanResultValue)
            if(Window.innerWidth <= 1400){
                document.getElementById('formdata').style.display = 'none'
            }
            document.getElementById('icon-done').style.display = 'block'
            document.getElementById('btn-reload').style.display = 'block'
            
        }
    }
    else{
       if(Query && ref > 0){
        valueRef = parseFloat(document.getElementById('valor-de-cobranca').value)
        html = document.querySelector('.resultview')
        i=1
        let meter = 0
        while(i<=ref){
            spanMeter = document.createElement('span')
            spanTint = document.createElement('span')
            spanResultValue = document.createElement('span')
            spanValue = document.createElement('span')
            spanBusiness = document.createElement('span')
            br1 = document.createElement('br')
            br2 = document.createElement('br')
            br3 = document.createElement('br')
            br4 = document.createElement('br')
            br5 = document.createElement('br')
            heightvalue = document.getElementById('altura'+i).value
            meter = (meter + parseFloat(heightvalue))
            i++
        }
        result = meter*valueRef
        
        spanMeter.textContent = meter.toFixed(2) + ' metros de forma Linear'
        spanBusiness.textContent = 'Empresa :' + document.getElementById('name-business').value
        spanTint.textContent = 'Película : ' + document.getElementById('name-pelicula').value
        spanValue.textContent = 'Valor M/R$ :' + valueRef.toFixed(2) + 'R$'
        spanResultValue.textContent = 'Cotação final : ' + result.toFixed(2) + ' R$' 
        html.appendChild(spanBusiness)
        html.appendChild(br1)
        html.appendChild(spanMeter)
        html.appendChild(br2)
        html.appendChild(spanTint)
        html.appendChild(br3)
        html.appendChild(spanValue)
        html.appendChild(br4)
        html.appendChild(br5)
        html.appendChild(spanResultValue)
      
        document.getElementById('icon-done').style.display = 'block'
        document.getElementById('btn-reload').style.display = 'block'
        
       }
    }
    
}