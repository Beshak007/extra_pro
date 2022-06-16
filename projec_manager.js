function main(arg){


//first button //
if(arg==2){
    document.querySelector('.first').classList.toggle('hov')
    document.querySelector('.inner_first').classList.remove('hov')
    document.querySelector('.inner_first2').classList.remove('hov')
    document.querySelector('.second').classList.remove('hov')
    document.querySelector('.third').classList.remove('hov')
}
if(arg==3){
    document.querySelector('.inner_first').classList.toggle('hov')
    document.querySelector('.inner_first2').classList.remove('hov')
}
if(arg==4){
    document.querySelector('.inner_first2').classList.toggle('hov')
    document.querySelector('.inner_first').classList.remove('hov')
}

//second button //
if(arg==5){
    document.querySelector('.second').classList.toggle('hov')
    document.querySelector('.third').classList.remove('hov')
    document.querySelector('.first').classList.remove('hov')
    document.querySelector('.inner_second').classList.remove('hov')
    document.querySelector('.inner_second2').classList.remove('hov')
}
if(arg==6){
    document.querySelector('.inner_second').classList.toggle('hov')
    document.querySelector('.inner_second2').classList.remove('hov')


}

if(arg==7){
    document.querySelector('.inner_second2').classList.toggle('hov')
    document.querySelector('.inner_second').classList.remove('hov')
}












//third button //
if(arg==8){
    document.querySelector('.third').classList.toggle('hov')
    document.querySelector('.second').classList.remove('hov')
    document.querySelector('.first').classList.remove('hov')
    document.querySelector('.inner_third').classList.remove('hov')
    document.querySelector('.inner_third2').classList.remove('hov')


}
if(arg==9){
    document.querySelector('.inner_third').classList.toggle('hov')
    document.querySelector('.inner_third2').classList.remove('hov')

}
if(arg==10){
    document.querySelector('.inner_third2').classList.toggle('hov')
    document.querySelector('.inner_third').classList.remove('hov')

}



}
