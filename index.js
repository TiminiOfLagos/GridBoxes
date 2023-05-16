const body = document.body;

const main = document.createElement("main");
const div1 = document.createElement("div");
const div2 = document.createElement('div');
const div3 = document.createElement('div')
const div4 = document.createElement('div')
const div5 = document.createElement('div')
const div6 = document.createElement('div')
const div7 = document.createElement('div')
const div8 = document.createElement('div')

const section1 = document.createElement("section")
const section2 = document.createElement("section")
const section3 = document.createElement("section")
const section4 = document.createElement("section")
const section5 = document.createElement("section")
const section6 = document.createElement("section")
const section7 = document.createElement("section")
const section8 = document.createElement("section")


const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document.createElement('p')
const para4 = document.createElement('p')
const para5 = document.createElement('p')
const para6 = document.createElement('p')


body.append(main)

main.append(div1,div2,div3,div4,div5,div6,div7,div8)

div1.append(section1)
div2.append(section2)
div3.append(section3)
div4.append(section4)
div5.append(section5)
div6.append(section6)
div7.append(section7)
div8.append(section8)

section1.append(para1)
section2.append(para2)
section3.append(para3)
section4.append(para4)
section6.append(para5)
section7.append(para6)

para1.innerText = 'T'
para2.innerText = 'I'
para3.innerText = 'M'
para4.innerText = 'I'
para5.innerText = 'L'
para6.innerText = 'G'



