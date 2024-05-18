let image1 = document.getElementById('img1')
let image2 = document.getElementById('img2')
let image3 = document.getElementById('img3')
let image4 = document.getElementById('img4')
let image5 = document.getElementById('img5')
let image6 = document.getElementById('img6')
let mypara = document.getElementById('para')
let new_h1 = document.getElementsByClassName('myh1')

image1.addEventListener('click', function(){
    if(mypara.style.fontWeight !=='800'){
        mypara.style.fontWeight = '800'
    }
    else{
        mypara.style.fontWeight = '400'
    }

})
image2.addEventListener('click', function(){

    if(mypara.style.fontStyle !=='italic'){

        mypara.style.fontStyle = 'italic'
        new_h1.style.fontStyle = 'italic'
      
    }
    else{
        mypara.style.fontStyle = ''
    }

})
image3.addEventListener('click', function(){

    if(mypara.style.textDecoration !=='underline'){

        mypara.style.textDecoration = 'underline'
      
    }
    else{
        mypara.style.textDecoration = ''
    }

})
image4.addEventListener('click', function(){

    if(mypara.style.textAlign !=='left'){

        mypara.style.textAlign = 'left'
      
    }
    else{
        mypara.style.textAlign = 'center'
    }

})
image5.addEventListener('click', function(){

    if(mypara.style.textAlign !=='right'){

        mypara.style.textAlign = 'right'
      
    }
    else{
        mypara.style.textAlign = 'center'
    }

})
