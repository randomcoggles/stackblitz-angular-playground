var Converter = (function(){
    
    const Converter = function(converting, convertions){
        const convValues = converting.values.map(val =>{
            const conv = convertions.map(conv => {
                const v = (val * conv.value).toFixed(2);
                return (conv.symbol + '' + v)

            })
            return [converting.symbol+ val, ...conv];
         })

        console.log(convValues, values, convertions);
    }
    return Converter;
})();

new Converter(
    {name: 'euro', symbol:'€', values:[2500, 2700, 3000, 3500, 3800, 4000]}, 
    [
        {name: 'dolar', value:1.2035, symbol: '$'}, 
        {name: 'real', value:6.7036, symbol: 'R$'},
    ]
)