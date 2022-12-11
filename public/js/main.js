
function onSubmit(e){
    e.preventDefault();
    document.querySelector('.msg').textContent="";
    document.querySelector('#image').src="";

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if(prompt===''){
        alert("Text is Needed to Generate and cannot be empty")
        return;
    }
    
    generateImage(prompt,size);
}

async function generateImage(prompt,size){
    try {
        showSpinner();

        const response = await fetch('./openai/generateimage',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                prompt,
                size
            })
        })

        if(!response.ok){
            removeSpinner();
            throw new Error("Sorry Could not Load the image");
        }

        const data = await response.json();
        // console.log(data);

        const imageUrl = data.data;

        document.querySelector('#image').src = imageUrl;

        removeSpinner();

    } catch (error) {
        document.querySelector(".msg").textContent= error;
    }
}

function showSpinner(){
    document.querySelector(".spinner").classList.add("show");
}

function removeSpinner(){
    document.querySelector(".spinner").classList.remove("show");
}

document.querySelector("#image-form").addEventListener('submit',onSubmit)