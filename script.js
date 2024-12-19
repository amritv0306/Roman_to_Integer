// let text = document.querySelector("#text-box").value;
// let btn = document.getElementById("btn");

// btn.addEventListener("click", ()=>{
    //     // write the function
    // });
   

    
function convert() {
    let text = document.querySelector("#text-box").value;
    let section_1 = document.querySelector(".section-1");
    let section_2 = document.querySelector(".section-2");
    let h2ans = document.querySelector("#ans");

    let myData = new Map();

    myData.set("I", 1);
    myData.set("V", 5);
    myData.set("X", 10);
    myData.set("L", 50);
    myData.set("C", 100);
    myData.set("D", 500);
    myData.set("M", 1000);

    let finalAns = 0;

    // console.log(`Given text is: ${text}`);
    
    for(let i=0; i<text.length; i++){
        if (myData.has(text[i])){
            if (myData.get(`${text[i]}`) < myData.get(`${text[i+1]}`)){
                finalAns = finalAns - myData.get(`${text[i]}`);
                
            }
            else{
                finalAns = finalAns + myData.get(`${text[i]}`);
                
            }
        }
        else{
            finalAns = "Enter Valid Input";
        }

    }
    // console.log(finalAns);
    section_2.classList.remove("hide");
    h2ans.textContent = "Output:" + finalAns;
    section_1.classList.add("hide");

}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    location.reload();
})
