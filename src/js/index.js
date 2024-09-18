const numberInput = document.getElementById('number-question');
const textInput = document.getElementById('text-question')
const text = document.getElementById('.responseText')


numberInput.addEventListener('change', () => {
    const inputValue = numberInput.value

    if (inputValue === '32') {
        alert('Parabéns, esse número pertence a sequência')
    } else {
        alert('Incorreto, tente novamente')
    }
})

textInput.addEventListener('change', () => {
    let word = textInput.value

    let amountA = (word.toLowerCase().match(/a/g) || []).length;

    responseText.innerHTML = 
    `
        <p class="response">A letra 'a' aparece ${amountA} vezes na palavra "${word}".</p>
    `
})