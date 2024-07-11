class Bmi {
    dataBase = {}

    calculateAndSaveBmi() {

        let name = field_user_name.value;
        let height = field_height.value;
        let weight = field_weight.value;

        localStorage.setItem('user_name', name);
        localStorage.setItem('user_height', height);
        localStorage.setItem('user_weight', weight);

        let heightm = height / 100;
        let heightS = heightm ** 2

        if (name !== '' && height !== '' && weight !== '') {

            let cbmi = weight / heightS;
            let result = cbmi.toFixed(2)


            localStorage.setItem('user_bmi', result);



            console.log(result);


            window.location = "index3.html"

        } else {
            alert("please enter a value")
        }

    }

    loadValueFromDB() {

        const name = localStorage.getItem('user_name');
        const height = localStorage.getItem('user_height');
        const weight = localStorage.getItem('user_weight');
        const bmi = localStorage.getItem('user_bmi');

        return {
            name: name,
            height: height,
            weight: weight,
            bmi: bmi,
        }

    }

    findBmiCategory(bmi) {
        const bminumbervalue = +bmi;

        if (bminumbervalue< 18) {
            return ("under weight")
        } else if (bminumbervalue>= 18.5 && bmi <= 24.9) {
            return ("normal weight")


        } else if (bminumbervalue> 24.9 && bmi<=29.9) {
            return ("over weight" )
        }
        else if (bminumbervalue > 29.9) {
            return ("obese")
        } else {
            return "NA"
        }
    }
}

const obj = new Bmi()