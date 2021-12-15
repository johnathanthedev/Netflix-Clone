class GeneralObjectHelper {
  constructor(generalObj) {
    this.generalObj = generalObj;
  }

  randomPropertySelector() {
    const values = Object.values(this.generalObj);
    const selectedProperty = values[Math.floor(Math.random() * values.length)];
    return selectedProperty;
  }
}

export default GeneralObjectHelper;
