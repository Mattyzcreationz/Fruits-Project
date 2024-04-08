const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const Selected = document.querySelector('.SelectedList ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	let results = [];

    /*We have an originial array, of fruit. onces an input the str in filled
    Simply make a fortloop that will iteraite the list...
    Simplying using filter and includes. Filter inlcudes.*/
    
    //Create an iteration that we will be able to call through. in order to iterate throught the wactual string
     
    results = fruit.filter(fruitChar => fruitChar.includes(str));

	// TODO

	return results;
}
function searchHandler(e) {
    const inputVal = e.target.value.trim();
    const results = search(inputVal);
    suggestions.innerHTML = '';

    results.forEach((result) => {
        const menuOptions = document.createElement('li'); 
        menuOptions.textContent = result; // Use result, not results
        suggestions.appendChild(menuOptions);
    });

    suggestions.style.display = results.length > 0 ? 'block' : 'none';
}




function useSuggestion(e) {
//This Function is targeting the event and the Tag Name which will be choosen
/*While then the suggestion in theory will display none once the thing is complete. */

if(e.target.tagName === 'LI'){
    const selectedValue = input.value = e.target.textContent;
    input.value = selectedValue;
    suggestions.computedStyleMap.display = 'none'; 
}
}

//New Funtion type becasue it regarding a new type of funtion and button 
/*Purpose:
1. Submition button, once the button is used connected the current Search funtion this will develope the fruit selected and information connected to the frujit choosen
2. Frist shown will be an image, and an bout button in the top righ corner of the image.
3. Once click the about image then this will continue to display Information connected to the fruit name and image. */

//FruitSelected
class fruitResults{
    constructor(imagePath, caption, label){
        this.imagePath = imagePath;
        this.caption = caption;
        this.label = label
    }
}

function fruitDetails(search) {
const DataContainer = [
    //0 is Banana
    new fruitResults("https://th.bing.com/th/id/OIP.IXKCpF-CG8jGSmOdUoYKIQHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7", "Bananas have roots in Southeast Asia, spreading to Africa by 500 AD. In the 15th century, Portuguese explorers introduced them to the Americas. The fruit's convenience, sweetness, and high nutritional value quickly made it a global favorite.", "Banana"),
    new fruitResults("https://th.bing.com/th/id/OIP.oEPkG7oNAHwdP1Voh7tz-gHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7", "Coconuts have a tropical origin and are thought to have spread via ocean currents. Found in coastal regions worldwide, they've been utilized for food, water, and material for centuries. Known for their versatility, coconuts offer milk, oil, and flesh, becoming essential in many cuisines and industries.", "Coconut"),
    new fruitResults("https://th.bing.com/th/id/OIP.kc29cFsS5Yh1Q5yUWeAWjQHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7","Apples trace back to ancient times, with origins in Central Asia. Cultivated for millennia, they traveled through trade routes to Europe and eventually to North America. Their diverse varieties, rich symbolism, and nutritional value have made them a globally cherished fruit in various cultures.","apple"),
    new fruitResults("https://th.bing.com/th/id/OIP.kU2hvtfs5eMuqJdHdy10TgHaFj?w=272&h=204&c=7&r=0&o=5&pid=1.7","Strawberries have ancient roots in Europe and North America, enjoyed by ancient Romans and Native Americans. Cultivation methods advanced in the 18th century, leading to larger, sweeter varieties. Their popularity soared due to their juicy, versatile nature, becoming a global favorite in desserts and salads.","Strawberry"),
    new fruitResults("https://th.bing.com/th/id/OIP.iXdP6--FuEQIEcOEvmPjowHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7","Raspberries have ancient roots, with evidence of their consumption dating back to prehistoric times. Widely grown in Europe, they gained popularity in the 17th century. Their delicate, sweet-tart flavor and use in culinary creations and jams make them a beloved berry globally.","Raspberry"),
    new fruitResults("https://th.bing.com/th/id/OIP.qGneRr-eeq5vZ0GcabIzMgHaFC?w=264&h=180&c=7&r=0&o=5&pid=1.7","Kumquats have roots in China, historically cultivated for centuries. Introduced to Europe and the Americas in the 19th century, they're appreciated for their unique eating style—the sweet peel and tangy flesh are enjoyed together. These tiny citrus fruits gained popularity for their distinctive flavor and culinary versatility.","Kumquat"),
    new fruitResults("https://th.bing.com/th/id/OIP.JVu38CUH_gRuFpxQmX5bmQHaE8?w=276&h=184&c=7&r=0&o=5&pid=1.7", "Dates have ancient origins in the Middle East, cultivated for over 6,000 years. They were crucial in the diets of ancient civilizations. Initially grown in Iraq, they spread through North Africa and Spain. High in nutrients, dates are revered for their sweetness and are a cultural staple worldwide.","Date"),
    new fruitResults("https://th.bing.com/th/id/OIP.EPVnGwKiGJ0KL3K-lNjexAHaFA?w=268&h=181&c=7&r=0&o=5&pid=1.7", "Mangoes have a long history, originating in South Asia over 4,000 years ago. They spread to other tropical regions via trade routes. Revered for their deliciously sweet flavor and rich, creamy texture, mangoes are celebrated globally in various cuisines, desserts, and beverages.","Mango"),
    new fruitResults("https://th.bing.com/th/id/OIP.ETS_iygRLLF7XS1PJldNCwHaE8?w=276&h=184&c=7&r=0&o=5&pid=1.7","Dragon fruit, native to Central America, was historically cultivated by the Aztecs. Later, it spread to Southeast Asia. In the 19th century, it made its way to other tropical regions. Known for its vibrant appearance and mild taste, it's prized for its antioxidants and exotic appeal.","Dragonfruit"),
    new fruitResults("https://th.bing.com/th/id/OIP.5IEcMii2_3FWcYpzMNlmmgHaE8?w=276&h=184&c=7&r=0&o=5&pid=1.7", "Cranberries have a long history in North America, used by Native Americans for food and medicine. Pilgrims learned about them in the 17th century. Cultivation began in the 19th century, leading to their widespread use in sauces, juices, and various culinary delights.","Cranberry"),
    new fruitResults("https://th.bing.com/th/id/OIP.NiirvQXwmvpYkbtMp6CSJgHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7","Tangerines originated in Southeast Asia and were named after Tangier, Morocco, a port from where they were shipped to Europe in the 19th century. Renowned for their easy peeling and sweet flavor, they quickly became a beloved citrus fruit globally.","Tangerine"),
    new fruitResults("https://th.bing.com/th/id/OIP.iouw6ZDYF47iCtGoMPCjSAHaE8?w=284&h=189&c=7&r=0&o=5&pid=1.7","Cherries have ancient origins in Asia Minor and were enjoyed by the Greeks and Romans. They spread through Europe, and colonists introduced them to North America in the 17th century. Prized for their sweetness, cherries are celebrated in cuisines worldwide and are a symbol of summer.","Cherry"),
    new fruitResults("https://th.bing.com/th/id/OIP.ZR6lo78DWsjLee2IJE4AKgHaH0?w=186&h=196&c=7&r=0&o=5&pid=1.7", "The term `'berry'` is botanical and encompasses various small, pulpy fruits, including strawberries, raspberries, and blackberries. They've been consumed for centuries worldwide, prized for their sweetness, versatility, and health benefits, often used in desserts, jams, and as fresh snacks.","Berry"),
    new fruitResults("https://th.bing.com/th/id/OIP.xs8TzLWG1LRXltK7jLywdgHaGB?w=242&h=196&c=7&r=0&o=5&pid=1.7", " Indigenous to Europe, blackberries have a long history of medicinal use, dating back to ancient Greece. They were highly valued for their health benefits and rich flavor. Cultivation expanded in the 19th century, contributing to their widespread popularity today.","BlackBerry"),
    new fruitResults("https://th.bing.com/th/id/OIP.11RBhHU6lv5aVT3QhFB9TAHaGw?w=181&h=180&c=7&r=0&o=5&pid=1.7", "Native to North America, blueberries were a staple in Native American diets. Their cultivation grew in the early 20th century, leading to improved varieties and increased consumption due to their antioxidant-rich profile.", "BlueBerry"),
    new fruitResults("https://th.bing.com/th/id/OIP.9sbsOw9oIbLyPM6JMg-7YQHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7", "Historically used in Europe for medicinal purposes, bilberries were known for their potential benefits to eye health. They gained popularity in traditional medicine and folklore for their purported vision-enhancing properties.", "Bilberry"),
    new fruitResults("https://th.bing.com/th/id/OIP.evIZKR9l2CYNobkqFp9M4AHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7", "Tracing back to ancient China, oranges symbolized prosperity and were valued for their freshness. Their cultivation spread to the Mediterranean, where they became emblematic of health and abundance.", "Orange"),
    new fruitResults("https://th.bing.com/th/id/OIP.FGwkpZJh186PQI9htgoY_gHaE6?w=258&h=180&c=7&r=0&o=5&pid=1.7", "Native to China, peaches were associated with longevity and luck. They were revered for their delicate flavor and became a symbol of immortality and beauty in East Asian cultures.", "Peach"),
    new fruitResults("https://th.bing.com/th/id/OIP.MJAC2meBrTMnJG4KBNifYQHaIZ?w=146&h=180&c=7&r=0&o=5&pid=1.7", "Cultivated for millennia, pears symbolized immortality and beauty in East Asian cultures. Their cultivation methods evolved over time, resulting in various delicious and versatile pear varieties.", "Pear"),
    new fruitResults("https://th.bing.com/th/id/OIP.JknfHMn3hYqiaWnlRReVDwHaFW?w=255&h=184&c=7&r=0&o=5&pid=1.7", "A sacred fruit in Mediterranean cultures, olives symbolized peace and abundance. They were crucial in ancient Mediterranean civilizations and remain a culinary staple globally.", "Olive"),
    new fruitResults("https://th.bing.com/th/id/OIP.YJE2LKB-ukGSxp64J0xg-wHaF2?w=242&h=191&c=7&r=0&o=5&pid=1.7", "A hybrid of mandarin, clementines were discovered by a priest in Algeria and were named after him. They gained popularity for their sweet, easy-to-peel nature.", "Clementine"),
    new fruitResults("https://th.bing.com/th/id/OIP.3Isr01DIqf5pbazXuivNvwHaHa?w=211&h=211&c=7&r=0&o=5&pid=1.7","With ancient origins in China, mandarins symbolized good fortune and happiness. They've been cultivated for centuries and are appreciated for their sweet, citrusy taste.","Mandarine"),
    new fruitResults("https://th.bing.com/th/id/OIP.F_ROKMBNzYApfl4VIQXitAHaF7?w=246&h=197&c=7&r=0&o=5&pid=1.7", " Known since ancient times, mulberries were used to feed silkworms for silk production. They have a sweet-tart flavor and were historically valued for various medicinal properties.", "Mulberry"),
    new fruitResults("https://th.bing.com/th/id/OIP.RCEgAiLN6YV32lNvQmt9WgHaHa?w=156&h=180&c=7&r=0&o=5&pid=1.7", "Indigenous to West Africa, miracle fruit gained attention for its ability to alter taste perception, turning sour foods sweet. It has been used for centuries for this unique quality.", "Miracle fruit"),
    new fruitResults("https://th.bing.com/th/id/OIP.iow6j7fv5HXFIryKoW8mnwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7", "Developed in Oregon, marionberries are a hybrid of blackberry and raspberry, known for their unique tartness and exceptional flavor profile.", "MarionBerry"),
    new fruitResults("https://th.bing.com/th/id/OIP.qRe4V8fPm9dMU1U_eMmZowHaE8?w=275&h=183&c=7&r=0&o=5&pid=1.7", "Tracing back to ancient Egypt, melons were used in religious ceremonies and as currency. They gained popularity for their refreshing, sweet taste and hydrating qualities.", "Melon"),
    new fruitResults("https://th.bing.com/th/id/OIP.IzSKlQMolhnX6h--ryQQ-wHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7", "Hailing from Southeast Asia, mangosteens earned the title `queen of fruits` for their exquisite taste and reputed health benefits, gaining popularity globally.", "Mangosteen"),
    new fruitResults("https://th.bing.com/th/id/OIP.sfXLOjzeWecdHmWuVIIl-wHaFX?w=230&h=180&c=7&r=0&o=5&pid=1.7", "Originating from China, lychees have a long history, prized for their sweet, fragrant flesh, and are often enjoyed fresh or in desserts.", "Lychee"),
    new fruitResults("https://th.bing.com/th/id/OIP.YUtrIQpBX9TVyz2MC61ORAHaFg?w=198&h=180&c=7&r=0&o=5&pid=1.7", "With ancient roots in Asia, lemons are renowned for their tangy, acidic flavor, widely used in culinary dishes and beverages globally.", "Lemon"),
    new fruitResults("https://th.bing.com/th/id/OIP.glm8djGXktPeckLacH25BgHaGB?w=241&h=196&c=7&r=0&o=5&pid=1.7", "Originating from Southeast Asia, limes offer a zesty, citrusy taste, essential in various cuisines and popular in beverages like cocktails.", "Lime"),
    new fruitResults("https://th.bing.com/th/id/OIP.MSeLfJi5S2o0Z_xMkizQxAHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7", "Native to Asia, longans resemble lychees and are cherished for their succulent, sweet flesh, commonly consumed fresh or dried.", "Longan"),
    new fruitResults("https://th.bing.com/th/id/OIP.DeaWoLuZrk_wIcBbmz3IUQHaGR?w=236&h=200&c=7&r=0&o=5&pid=1.7", "Originating from China, kiwis feature tangy-sweet green flesh with edible seeds, valued for their unique taste and nutritional benefits.", "KiwiFruit"),
    new fruitResults("https://th.bing.com/th/id/OIP.RQ6qjOHaqGNTfmqTUpsP4QHaE7?w=277&h=184&c=7&r=0&o=5&pid=1.7", "Essential in gin production, juniper berries impart a distinct piney flavor to the spirit, prized for their aromatic qualities.", "JuniperBerry"),
    new fruitResults("https://th.bing.com/th/id/OIP.RL_zjOZCELa4SwTeD9ZzagHaFJ?w=232&h=180&c=7&r=0&o=5&pid=1.7"," Found in South Asia, jambuls, or Java plums, offer a mildly sweet taste and are enjoyed fresh or in culinary preparations.","Jambul"),
    new fruitResults("https://th.bing.com/th/id/OIP.KjiCkmtVk8-ZjMbQvGUFVwHaE6?w=259&h=180&c=7&r=0&o=5&pid=1.7", " Hailing from South Asia, jackfruits are large, sweet, and used in various savory and sweet dishes due to their unique flavor and texture.", "Jackfruit"),
    new fruitResults("https://th.bing.com/th/id/OIP.mjnjuBDqLZHs20UTF69VtAHaFj?w=224&h=180&c=7&r=0&o=5&pid=1.7", " Indigenous to Brazil, jabuticabas grow on tree trunks, featuring a tart, grape-like taste, often used in jellies or enjoyed fresh.", "Jabuticaba"),
    new fruitResults("https://th.bing.com/th/id/OIP.1tQl8ymSweoVBneeLqZNFQHaE8?w=284&h=189&c=7&r=0&o=5&pid=1.7", "Wild berries in North America, huckleberries have a sweet-tart flavor, prized in jams, pies, and desserts.", "Huckleberry"),
    new fruitResults("https://th.bing.com/th/id/OIP.NTo3xp5Zcb60SfK6JIq4WAHaFi?w=228&h=180&c=7&r=0&o=5&pid=1.7", "Originating from Central America, guavas have a tropical, sweet taste and are consumed fresh or used in various culinary applications.", "Guava"),
    new fruitResults("https://th.bing.com/th/id/OIP.VpuywCU9zgRE9nKIwIwQ5gHaHa?w=211&h=211&c=7&r=0&o=5&pid=1.7", "Native to cold regions, honeyberries have a sweet-tart taste, resembling elongated blueberries, enjoyed fresh or in preserves.", "HoneyBerry"),
    new fruitResults("https://th.bing.com/th/id/OIP.SWMd2SD5yOU9PmSQ9PUI7AHaGi?w=195&h=180&c=7&r=0&o=5&pid=1.7", "Cultivated for centuries, figs have a sweet, seedy interior, commonly eaten fresh or dried as a snack or in desserts.", "Fig"),
    new fruitResults("https://th.bing.com/th/id/OIP.g6z2JQeicvMqiWfBhosKWAHaHq?w=170&h=180&c=7&r=0&o=5&pid=1.7", " From South America, feijoas have an aromatic taste akin to a blend of pineapple and guava, used fresh or in jams and beverages.", "Fejioa"),
    new fruitResults("https://th.bing.com/th/id/OIP.yTURfpVvqY-IywzTyOQhHgHaFj?w=252&h=189&c=7&r=0&o=5&pid=1.7", "Indigenous to Europe, gooseberries have a tart taste and are often used in jams, pies, and desserts.", "Gooseberry"),
    new fruitResults("https://th.bing.com/th/id/OIP.EdbP3psVKVbB55sfeRsB2gHaE8?w=230&h=180&c=7&r=0&o=5&pid=1.7", " Cultivated since ancient times, grapes offer a wide array of flavors and are consumed fresh or used in winemaking and culinary dishes.", "Grape"),
    new fruitResults("https://th.bing.com/th/id/OIP.DKlBKQDBxwSm3pkH0n7NRQHaE7?w=282&h=187&c=7&r=0&o=5&pid=1.7", "Grapes dried naturally, enjoyed as a sweet snack or used in various culinary recipes for their concentrated flavor.", "Raisin"),
    new fruitResults("https://th.bing.com/th/id/OIP.d_bx14BtLjmAfWaeXn51TAHaFI?w=270&h=187&c=7&r=0&o=5&pid=1.7", "Citrus fruit known for its tangy-sweet taste, high vitamin content, and often eaten fresh or in juices.", "GrapeFruit"),
    new fruitResults("https://th.bing.com/th/id/OIP.qGfuoV4yZOSLi7Tn0fAj3AHaFj?w=259&h=194&c=7&r=0&o=5&pid=1.7", "Southeast Asian fruit with a pungent aroma and creamy texture; either loved or disliked for its strong smell and unique taste.", "Durain"),
    new fruitResults("https://th.bing.com/th/id/OIP.DVBUoOaNdgtTmXRLUKrslgHaFj?w=232&h=180&c=7&r=0&o=5&pid=1.7", "Small, dark berries rich in antioxidants, often used in jams, syrups, or wine due to their tart flavor.", "Elderberry"),
    new fruitResults("https://th.bing.com/th/id/OIP.VMa1vk8IV3EnaoOx5wdspgHaHa?w=201&h=202&c=7&r=0&o=5&pid=1.7", "Tropical fruit with sweet, creamy flesh often eaten fresh, recognized for its custard-like texture and flavor.", "Custard Apple"),
    new fruitResults("https://th.bing.com/th/id/OIP.H7j9G6aeIpPUbCjxdAfOugHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7", "Mild-flavored, watery fruit often used in salads, sandwiches, or enjoyed fresh as a hydrating snack.", "Cucumber"),
    new fruitResults("https://th.bing.com/th/id/OIP.DE7puBHCAhYpVTgkw2XldQHaFj?w=252&h=189&c=7&r=0&o=5&pid=1.7", "Small, tart berries used in jams, jellies, or baked goods for their vibrant flavor.", "Currant"),
    new fruitResults("https://th.bing.com/th/id/OIP.VvQDQ3XkCfY0xXRaa4gEJQHaJ4?w=126&h=180&c=7&r=0&o=5&pid=1.7", "Hybrid fruit combining raspberry, blackberry, and loganberry flavors; used in jams and desserts.", "Boysenberry"),
    new fruitResults("https://th.bing.com/th/id/OIP._pDNCjydULJVGHKJUq_wYQHaJC?w=145&h=180&c=7&r=0&o=5&pid=1.7", "Dark berries with a strong, tart taste often used in juices, jams, or desserts.", "Blackcurrant"),
    new fruitResults("https://th.bing.com/th/id/OIP.kghFUbk5JdEDu18DRX1oFAHaFS?w=217&h=180&c=7&r=0&o=5&pid=1.7", "Stone fruit with a sweet-tart taste, enjoyed fresh or dried as a snack, and used in various culinary dishes.", "Apricot"),
    new fruitResults("https://th.bing.com/th/id/OIP.dDmN4trODDpxfFPVJ4oUDQHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7", "Smooth-skinned variety of peach with sweet flesh, commonly eaten fresh or used in desserts.", "Nectarine"),
    new fruitResults("https://th.bing.com/th/id/OIP.iuMM-EYNqIs_NhJJFAhRcQHaFj?w=208&h=180&c=7&r=0&o=5&pid=1.7", " Small, tropical fruit with a tangy-sweet taste, often used in preserves or consumed fresh where available.", "Nance"),

]
const inputValue = input.value;
let findResults = DataContainer.find(fruit => fruit.label.toLowerCase() === inputValue.toLowerCase());

if (findResults !== undefined){
    const fruitImage = document.createElement('img');
    const fruitInformation  = document.createElement('li');
    const fruitLabel =  document.createElement('li');
    //fruitImage
    fruitImage.src = findResults.imagePath;
    fruitImage.id = 'specificImage';
//FruitInformation
    fruitInformation.textContent = findResults.caption;
    fruitInformation.id  = 'SpecificInfo';
//Fruitlabel 
    fruitLabel.textContent = findResults.label;
    fruitLabel.id = 'Label';

  Selected.innerHTML = '';
  Selected.appendChild(fruitImage);
  Selected.appendChild(fruitInformation);
  Selected.appendChild(fruitLabel);
  suggestions.style.display = 'none';
  input.text.display = 'none';
    //Give an what would happen if their was no input value that matched the main search.
} else {
    let errorMsg = 'There is no information regarding this fruit, their could be spell errors.';
    alert(errorMsg);
    }

}

const img = document.createElement('img');
img.src = 'Their is no fruit Selected';
suggestions.addEventListener('click', useSuggestion)
input.addEventListener('keyup', searchHandler)
Submit.addEventListener('click', fruitDetails) 

