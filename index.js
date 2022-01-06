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
    //@clean the null and undefined and etc value from array
    cleanArray(arr){
        let returnArray = null
        returnArray = arr.filter(x => x !== null);
        returnArray = arr.filter(x => x !== undefined);
        return returnArray;

    },
    //@find Property from obejct of array
    findProperty(obj, key, out){
      var i,
          proto = Object.prototype,
          ts = proto.toString,
          hasOwn = proto.hasOwnProperty.bind(obj);
  
      if ('[object Array]' !== ts.call(out)) out = [];
    
      for (i in obj) {
          if (hasOwn(i)) {
              if (i === key) {
                  out.push(obj);
              } else if ('[object Array]' === ts.call(obj[i]) || '[object Object]' === ts.call(obj[i])) {
                  findProp(obj[i], key, out);
              }
          }
      }
      return out;
    },
    //date formater
    dateHelper(dateString){
      const yr = dateString.substr(0,4)
      const mnth = dateString.substr(4,2)
      const day = dateString.substr(6,2)
      return `${yr}-${mnth}-${day}`
    },
    //@value split (, to " ")
    splitHelper(value){
      try {
        return value.split(',')[0].split(" ")[0].toLowerCase()
      } catch (error) {
        throw error;
      }
    }
  
}