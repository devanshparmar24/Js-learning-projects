const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if(height=="" || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter valid height"
    }else if(weight=="" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please enter valid weight"
    }else{
        
        const bmi = (weight/(height/100)**2).toFixed(2)
        
        if(bmi<18.6){
            results.innerHTML = `bmi:{bmi}(You are underweight)`
        }else if(bmi>=18.6 && bmi<24.9){
            results.innerHTML = `bmi:${bmi}(You are in Normal range)`
        }else{
            results.innerHTML = `bmi:${bmi}(You are overweight)`
        }
    }

})
