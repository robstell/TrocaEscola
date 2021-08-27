/**
 * Copyright (c) 2021
 *
 * Botão para facilitar troca de filiais do portal CNA Box
 *
 * @summary trocaEscola
 * @author Roberto Stelling <roberto.stelling@gmail.com>
 *
 * Created at     : 2021-03-19 23:37:00 
 */

const header = document.querySelector("#header")
const button1 = document.createElement("button")

button1.innerHTML = "CNA Bangu"
button1.classList.add("newButton")
button1.addEventListener("click",()=>{
    
    myWindow1 = window.open("https://www.cnabox.com.br/Account/ChangeLogin/68","_blank", "width=200, height=100")
                
    setTimeout(function() {
       myWindow2 = window.open("https://www.cnabox.com.br/#/Turma","_parent")
       location.reload()
       myWindow1.window.close()
                
    }, 2000)
})

header.appendChild(button1)


const button2 = document.createElement("button")
button2.innerHTML = "CNA Cascadura"
button2.classList.add("newButton")
button2.addEventListener("click",()=>{
    
    myWindow1 = window.open("https://www.cnabox.com.br/Account/ChangeLogin/73","_blank", "width=200, height=100")
                
    setTimeout(function() {
       myWindow2 = window.open("https://www.cnabox.com.br/#/Turma","_parent")
       location.reload()
       myWindow1.window.close()
                
    }, 2000)
})

header.appendChild(button2)


const button3 = document.createElement("button")
button3.innerHTML = "CNA Realengo"
button3.classList.add("newButton")
button3.addEventListener("click",()=>{
    
    myWindow1 = window.open("https://www.cnabox.com.br/Account/ChangeLogin/83","_blank", "width=200, height=100")
                
    setTimeout(function() {
       myWindow2 = window.open("https://www.cnabox.com.br/#/Turma","_parent")
       location.reload()
       myWindow1.window.close()
                
    }, 2000)
})

header.appendChild(button3)


const button4 = document.createElement("button")
button4.innerHTML = "CNA Valqueire"
button4.classList.add("newButton")
button4.addEventListener("click",()=>{
    
    myWindow1 = window.open("https://www.cnabox.com.br/Account/ChangeLogin/88","_blank", "width=200, height=100")
                
    setTimeout(function() {
       myWindow2 = window.open("https://www.cnabox.com.br/#/Turma","_parent")
       location.reload()
       myWindow1.window.close()
                
    }, 2000)
        
})

header.appendChild(button4)