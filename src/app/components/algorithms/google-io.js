// What’s new in JavaScript (Google I/O ’19)
// https://youtu.be/c0oy0vQKEZE
var intl = ((config = {lang: 'pt'})=>{
    const object = {x:21, y: 33};
    const entries = Object.entries(object);
    for(const [key, value] of entries){
        console.log('key, value ', key, value);
    }
    const map = new Map(entries);
    console.log('Map: ', map)
    // const secondMap = new Map({x: 22, y:44}) // Ilegal!! Object is not an iterable
    // console.log(secondMap);

    

    const relatiTimeFormat = new Intl.RelativeTimeFormat(config.lang, {numeric: 'auto'});
    console.log( relatiTimeFormat.format(-1, 'day'));
    console.log( relatiTimeFormat.format(0, 'day'));
    console.log( relatiTimeFormat.format(1, 'day'));
    console.log( relatiTimeFormat.format(-1, 'week'));
    console.log( relatiTimeFormat.format(0, 'week'));
    console.log( relatiTimeFormat.format(1, 'week'));

    const listFormatAnd = new Intl.ListFormat(config.lang);
    console.log(listFormatAnd.format(['John', 'Ada', 'Michael']));

    const listFormatOr = new Intl.ListFormat(config.lang, {type: 'disjunction'});
    console.log(listFormatOr.format(['John', 'Ada', 'Michael']))

    return {
      relatiTimeFormat,
      listFormatAnd,
      listFormatOr //available in chrome and Node
      
    }

})()