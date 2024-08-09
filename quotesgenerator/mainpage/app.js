const url =  'https://api.quotable.io/random'

getData = async(url)=>{
    const response = await fetch(url)
    const data = await response.json()
    document.querySelector('.card-container').innerHTML = data.content
    document.createElement('h3')
    document.querySelector('h3').innerHTML = `-${data.author}`
}

getData(url)
