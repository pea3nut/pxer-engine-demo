import {PxerEngine} from "./src";

const pxer = new PxerEngine();
(<any>global).pxer = pxer;


pxer.exec('get_user_profile',{userId: 4754550}, function (data) {
    console.log(`end of`, data);
});
//
//
// pxer.exec('get_user_illustsData', {userId: 4754550, ids:[69189923,69689936,70561143]}, function (data) {
//     console.log(`end of`, data);
// });
//
//
// const ids = ["29760603","29817596","34540974","34642303","36805888","37502096","37726873","38270797","38678730","41479125","41850386","42166541","42404532","42450768","42667832","42829435","43001076","43293934","43364090","43497916","43873664","45077013","45325975","45453780","45705585","45915534","45974389","46105642","46234188","46488145","46723772","46873588","46896952","47013617","47223239","47286250","47337685","47603114","47709530","48035702","48149972","48205992","48695232","48965433","49258217","49301521","50158780","50507632","51661915","51662016","51921832","52404568","52645753","52801297","52835751","53121314","53149506","53388846","53578590","53691334","54103324","54356195","54468457","54534749","54703457","54788906","55901484","56177667","56229012","56343234","56464474","56669571","56852152","57050879","57135839","57250194","57420258","57436377","57540725","57638667","57793159","57959194","58251440","58368673","58804795","58938362","59016934","59134180","59199831","59241847","59468259","59664925","59769871","59888362","60095048","60254159","60405136","60478036","60576196","60749206","60940489","61111998","61438302","61477678","61621678","61829463","61930254","62033538","62141760","62204904","62320926","62529288","62778523","62974310","63321853","63401933","63471132","63708524","63737918","63916278","64152529","64206150","64261761","64301531","64653709","64930261","65304021","65309245","65405888","65592662","65706374","65852593","66081452","66332294","66431991","66458237","66788645","66889316","67085296","67148517","67259042","67672208","67820445","68064071","68214965","68455705","68599007","68808589","69028794","69189923","69526350","69587789","69689936","69830952","70076988","70093923","70290757","70561143","70804746","71006768","71258125"];
// pxer.exec('get_user_illustsData_all', {userId: 4754550, ids}, function (data) {
//     console.log(`end of`, data);
// });
//
//
// pxer.exec('get_user_works', {userId: 4754550}, function (data) {
//     console.log(`end of`, data);
// });


setInterval(()=>{}, 99999);