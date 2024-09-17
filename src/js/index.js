const numberInput = document.getElementById('number-question');
const textInput = document.getElementById('text-question')


numberInput.addEventListener('change', () =>{
    const inputValue = numberInput.value

    if(inputValue === '32'){
        alert('Parabéns, esse número pertence a sequência')
    } else {
        alert('Incorreto, tente novamente')
    }
})

// textInput.addEventListener('change', () => {
//     const letterAExist = textInput.value;
//     const letterA = 'a'
//     console.log(letterAExist)
// })