import { Selector } from "testcafe";

fixture('Google home page').page('google.com');

test('should just load and test ', async (t)=>{
    let idExists = await Selector('#gws-output-pages-elements-homepage_additional_languages__als').exists;
    console.log('idExists:::',idExists);
    await t.expect(idExists).ok();
})