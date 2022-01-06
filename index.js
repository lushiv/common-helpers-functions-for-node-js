const commonHelper = {
    //@ts-check the lenght of list
    hasRecord: (list) => {
      return (list && (list.length > 0));
    },
    //@clean the null and undefined and etc value from objects
    cleanObj(obj) {
      for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined) {
          delete obj[propName];
        }
      }
      return obj;
    },
    //clean the null and undefined and etc value from array
    cleanArray(arr){
        let returnArray = null
        returnArray = arr.filter(x => x !== null);
        returnArray = arr.filter(x => x !== undefined);
        return returnArray;

    }
}