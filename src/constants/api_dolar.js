const makeApiUrl = (yyyy, mm , dd) => {

   /*
    const url_base_api = "https://api.sbif.cl";
    const api_key = "9c84db4d447c80c74961a72245371245cb7ac15f";
    const format = "json"
    const api_dolar = `${url_base_api}/api-sbifv3/recursos_api/dolar/posteriores/${yyyy}/${mm}/dias/${dd}?apikey=${api_key}&formato=${format}`; 
    return api_dolar; 
    */

    const url =  `/get_api_dolar.php?yyyy=${yyyy}&mm=${mm}&dd=${dd}`;
    return url;
}
export default makeApiUrl;
