const Mongoose = require('mongoose');
const Schema= Mongoose.Schema;
const CountrySchema = new Schema({
  name:String,
  value:String
})

const CitySchema =  new Schema({
  name:String,
  value:String,
  country:String
})

const Country = Mongoose.model('Country', CountrySchema);
const City = Mongoose.model('City', CitySchema);

/*Country.create({name:'India',value:'India'},(err,doc) => {
  if(err)
    console.log(err);
  else
    console.log(doc);
})

City.create({name:'Mumbai',value:'Mumbai',country:'India'},(err,doc) => {
  if(err)
    console.log(err);
  else
    console.log(doc);
})
*/

module.exports = {
    findAllCountries: async (callback) => {
        try {
            const query =  Country.find(callback);
            return query;
        } catch (e) {
            console.log('country error :'+e);
            return [];
        }
    },
    findAllCitiesByCountry: async (country,callback) => {
        try {
            const query =  City.find({country:country},callback);
        } catch (e) {
          return [];
        }
    }
}
