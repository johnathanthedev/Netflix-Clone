class GeneralArrayHelper {
  constructor(generalArray) {
    this.generalArray = generalArray;
  }

  randomElementSelector() {
    return this.generalArray[
      Math.floor(Math.random() * this.generalArray.length)
    ];
  }
}

export default GeneralArrayHelper;
