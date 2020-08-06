const buttonSend = document.querySelector('.btn1')
const buttonShow = document.querySelector('.btn2')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const paragraph = document.querySelector('p')

buttonSend.addEventListener('click', () => {
  const body = JSON.stringify({ input1: input1.value, input2: input2.value })
  console.log(input1.value, input2.value)
  fetch('http://localhost:4000/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  }) //Konfigurationsobjekt
    .then((asdf) => asdf.json())
    .then((data) => console.log(data))
})

buttonShow.addEventListener('click', () => {
  fetch('http://localhost:4000')
    .then((res) => res.json())
    .then((listFromServer) =>
      listFromServer.forEach((listItem) => {
        const el = document.createElement('p')
        paragraph.appendChild(el)
        el.innerText = listItem.input1 + listItem.input2
      })
    )
})
