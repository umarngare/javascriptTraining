class Person {
    constructor (
        firstName,
        secondName,
        surname,
        age,
        gender,
        ) {
            this.name = {
                firstName : firstName,
                secondName : secondName,
                surname : surname,
            };
            this.age = age;
            this.gender = gender;
        };
    
    showGender = () => {
        alert(this.gender)
    };
}

export default Person;