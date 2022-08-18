let timer = undefined

const onInput = (event) => {

    if(event.target.value.length == 1) {
        console.log(event.target.value)
        return
    }

    if(timer) {
        clearTimeout(timer)
    }

    timer = setTimeout(() => {
        console.log(event.target.value)
    }, 2000)
}


document.getElementsByTagName("input")[0].addEventListener("input", onInput)