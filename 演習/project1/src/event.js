import { add } from "./add";
import { minus } from "./minus";
import { multipication } from "./multipication";
import { division } from "./division";

const input1 = document.getElementById(input1)
const input2 = document.getElementById(input2)

const addBtn = document.getElementById(addButton)
const muinusBtn = document.getElementById(muinusButton)
const mulBtn = document.getElementById(multipicationButton)
const divBtn = document.getElementById(divisionButton)

addBtn.addEventListener("click",add)
muinusBtn.addEventListener("click",minus)
mulBtn.addEventListener("click",multipication)
divBtn.addEventListener("click",division)

