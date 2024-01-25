class Phone {
    constructor (
        // Defining parameters
        name,
        model,
        frontCameraPix,
        mainCameraPix,
        phoneCondition,
        phoneBatteryPercentage,        
    ) {
        // Defining phone properties
        this.name = name;
        this.model = model;
        this.cameras = {
            frontCamera : frontCameraPix,
            mainCamera : mainCameraPix,
        };
        this.phoneCondition = phoneCondition;
        this.phoneBatPercentage = phoneBatteryPercentage;
    }

    changeBatteryLife (batteryPercentage) {
        this.phoneBatPercentage = batteryPercentage
    };

    changeCondition (newCondition) {
        this.phoneCondition = newCondition
    };

    showBatteryLevel () {
        if (this.phoneBatPercentage == 100) {
            return "Battery Full."
        } else if (this.phoneBatPercentage <= 15) {
            return this.phoneBatPercentage + ", Battery Low!"
        } else {
            return this.phoneBatPercentage
        }
    };
}

export default Phone;