
exports.seed = function(knex) {
  // Deletes ALL existing entries
  //return knex('menu').del()
    //.then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        //TEST LINE
        //{id: 888888, item: 'MENU2', price: '$7',type: 'cocktail',description: 'Bourbon, elderflower, lemon, ginger ale', restaurant_id:1},  
        ////SFORNO        
        {id:335, item:'Prosciutto di Parma', price:"",type:'food',description:'Salt cured pork', restaurant_id:27},
        {id:336, item:'Salami Felino', price:"",type:'food',description:'“King of Salami”', restaurant_id:27},
        {id:337, item:'Soppressato', price:"",type:'food',description:'Sweet cured pork sausage', restaurant_id:27},
        {id:338, item:'Speck', price:"",type:'food',description:'Smoked Prosciutto', restaurant_id:27},
        {id:339, item:'Prosciutto di Anatra', price:"",type:'food',description:'Duck Prosciutto', restaurant_id:27},
        {id:340, item:'Bresaola', price:"",type:'food',description:'Air-dried beef', restaurant_id:27},
        {id:341, item:'Avocado', price:"",type:'food',description:'Hass avocado, Haystack Mountain goat cheese, red onions, sweet chili sauce', restaurant_id:27},
        {id:342, item:'Pomodoro', price:"",type:'food',description:'Roma tomatoes, torn basil, garlic, Extra Virgin Olive Oil', restaurant_id:27},
        {id:343, item:'Pera', price:"",type:'food',description:'Stracchino cheese, bartlet pear, honey, walnuts, arugula', restaurant_id:27},
        {id:344, item:'Carote', price:"",type:'food',description:'Roasted baby carrots, pistachios', restaurant_id:27},
        {id:345, item:'Cavolini', price:"",type:'food',description:'Brussels sprouts, lardo, lemon', restaurant_id:27},
        {id:346, item:'Asparagi', price:"",type:'food',description:'Baked asparagus with prosciutto', restaurant_id:27},
        {id:347, item:'Scampetti Alla Romana', price:"$10",type:'food',description:'Grilled shrimp with an aromatic herb, lemon infusion', restaurant_id:27},
        {id:348, item:'Cozze', price:"$10",type:'food',description:'P.E.I. Mussels with peperonata, tomato, and crushed red pepper', restaurant_id:27},
        {id:349, item:'Calamari', price:"$12",type:'food',description:'Lightly fried calamari with spicy pomodoro sauce', restaurant_id:27},
        {id:350, item:'Margherita', price:"$13",type:'food',description:'Mozzarella, tomato sauce, fresh basil', restaurant_id:27},
        {id:351, item:'Salamino', price:"$14",type:'food',description:'Mozzarella, tomato sauce, spicy salami', restaurant_id:27},
        {id:352, item:'Pizza Boscaiola', price:"$15",type:'food',description:'Sausage, mushrooms, mozzarella, tomato sauce', restaurant_id:27},
        {id:353, item:'Carciofi', price:"$8",type:'food',description:'Fire roasted half artichoke with balsamic reduction, infused EVOO, roasted garlic aioli', restaurant_id:27},
        {id:354, item:'Funghi e Prosciutto', price:"$1",type:'food',description:'Wild mushrooms, Parma prosciutto, crème fraiche', restaurant_id:27},
        {id:355, item:'Mozzarella Caprese', price:"$10",type:'food',description:'Housemade fresh mozzarella, local tomatoes, basil, EVOO', restaurant_id:27},
        {id:356, item:'Polpette Alla Romana', price:"$9",type:'food',description:'Homemade meatballs with tomato basil sauce, topped with sheep’s milk ricotta, basil', restaurant_id:27},
        {id:357, item:'Carpaccio', price:"$10",type:'food',description:'Thinly sliced raw beef, with capers, baby artichokes, arugula, shaved parmesan, lemon oil infusion', restaurant_id:27},
        {id:358, item:'Fiore di Zucca', price:"$12",type:'food',description:'Tempura fried organic squash blossoms with spicy aioli', restaurant_id:27},
        {id:359, item:'Salsiccia', price:"$9",type:'food',description:'Homemade spicy Italian sausage grilled with broccolini', restaurant_id:27},
        {id:360, item:'House wines', price:"$7",type:'wine',description:'Pinot Grigio & Chianti', restaurant_id:27},
        {id:361, item:'Draft & Bottle Beer', price:"$1off",type:'beer',description:'', restaurant_id:27},
        {id:362, item:'Specialty Cocktails', price:"$9",type:'cocktail',description:'', restaurant_id:27},
        //FRANKS
        {id:363, item:"Chef's Ceviche", price:"$9",type:'food',description:'Fresh wild-caught white gulf shrimp and seasonal white fish, serrano pepper,avocado, lime, cilantro, warm tortilla chips (gf)', restaurant_id:28},
        {id:364, item:'Asian Baby Back Ribs', price:"$9",type:'food',description:'Miso soy glaze, Asian-style BBQ rub, Napa cabbage slaw (gf)', restaurant_id:28},
        {id:365, item:'Mussels Meuniere', price:"$9",type:'food',description:'Pan steamed, chardonnay, lemon garlic brodetto, rustic ciabatta', restaurant_id:28},
        {id:366, item:'Fried Grouper Sliders', price:"$9",type:'food',description:'Hand-breaded gulf grouper, house-made tartar sauce, cheddar cheese, shaved lettuce, soft rolls, criss-cut fries', restaurant_id:28},
        {id:367, item:'Crispy Calamari', price:"$9",type:'food',description:'Rings and tentacles, gluten free breading, sweet and hot chili sauce, sweet and crispy peppers (gf)', restaurant_id:28},
        {id:368, item:'Crispy Brussels Sprouts', price:"$6",type:'food',description:'Chile butter, applewood bacon', restaurant_id:28},
        {id:369, item:'Garlic Fries', price:"$6",type:'food',description:'Crispy criss-cut fries, fresh garlic, parsley, extra virgin olive oil (v) (gf)', restaurant_id:28},
        {id:370, item:'Quinoa Salad', price:"$9",type:'food',description:'Black beans, edamame, tomato, green onion, bell pepper, watercress, chèvre cheese, chipotle, grilled avocado, lime dressing (v) (gf)', restaurant_id:28},
        {id:371, item:'Chophouse Wedge Salad', price:"$9",type:'food',description:'Iceberg lettuce wedge, creamy herb dressing, Point Reyes blue cheese, applewood bacon, scallions, beefsteak tomatoes, fresh herbs (gf)', restaurant_id:28},
        {id:372, item:'Twin Twin Burger', price:"$9",type:'food',description:'Two smashed and griddled beef patties, cheddar cheese, pub sauce, lettuce, tomato, red onion, brioche bun, criss-cut fries', restaurant_id:28},
        {id:373, item:'French Onion Gratinee', price:"$6",type:'food',description:'Bone broth, dry sherry, sweet onions, Gruyere cheese, rustic croutons', restaurant_id:28},
        {id:374, item:'The District', price:"$6",type:'cocktails',description:'Tin Cup Straight Rye Whiskey, Domaine De Canton Ginger Liqueur, Angostura bitters', restaurant_id:28},
        {id:375, item:'Paloma', price:"$6",type:'cocktails',description:'Monte Alban Reposado Tequila, grapefruit juice, grapefruit soda, lime', restaurant_id:28},
        {id:376, item:'921 Gin & Tonic', price:"$6",type:'cocktails',description:'Tanqueray Rangpur Gin, orange, Q Spectacular Tonic Water', restaurant_id:28},
        {id:377, item:'Blackbird', price:"$6",type:'cocktails',description:'Bird Dog Blackberry Flavored Whiskey, Q Ginger Beer, blackberries, lemon, mint leaves', restaurant_id:28},
        {id:378, item:'Passion Tea', price:"$6",type:'cocktails',description:'Breckenridge Vodka, Cointreau, Giffard Fruit de La Passion Liqueur, black tea, lemon juice', restaurant_id:28},
        {id:379, item:'Negroni', price:"$6",type:'cocktails',description:'Breckenridge Gin, Carpano Antica Formula Vermouth, Campari', restaurant_id:28},
        {id:380, item:'Mojo', price:"$4",type:'beer',description:'Boulder Beer Co. / IPA / 7.2% ABV', restaurant_id:28},
        {id:381, item:'SKO Buffalo Gold', price:"$4",type:'beer',description:'Boulder Beer Co. / Golden Ale / 4.8% ABV', restaurant_id:28},
        {id:382, item:'White Rascal', price:"$4",type:'beer',description:'Avery Brewing Co. / Belgian-Style White Ale / 5.6% ABV', restaurant_id:28},
        {id:383, item:'90 Shilling', price:"$4",type:'beer',description:'Odell Brewing Co. / Amber Ale / 5.3% ABV', restaurant_id:28},
        {id:384, item:'Coors Light', price:"$4",type:'beer',description:'Coors Brewing Co. / Light Lager / 4.2% ABV', restaurant_id:28},
        {id:385, item:'Rotating Hard Seltzer', price:"$4",type:'beer',description:"Ask your server for today's rotating hard seltzer", restaurant_id:28},
        {id:386, item:'House Chardonnay', price:"$5",type:'wine',description:'', restaurant_id:28},
        {id:387, item:'Lafite Rothschild "Aussiéres" Chardonnay', price:"$8",type:'wine',description:'France', restaurant_id:28},
        {id:388, item:'Decoy by Duckhorn Chardonnay', price:"$10",type:'wine',description:'Sonoma County', restaurant_id:28},
        {id:389, item:'St Supéry Estates Sauvignon Blanc', price:"$7.5",type:'wine',description:'Napa Valley', restaurant_id:28},
        {id:390, item:'Kim Crawford Sauvignon Blanc', price:"$8.5",type:'wine',description:'Marlborough, NZ', restaurant_id:28},
        {id:391, item:'La Fiera Pinot Grigio', price:"$6",type:'wine',description:'Veneto', restaurant_id:28},
        {id:392, item:'Fabre en Provence Dry Rosé', price:"$7",type:'wine',description:'Côtes de Provence', restaurant_id:28},
        {id:393, item:'Stellina di Notte Prosecco', price:"$5.5",type:'wine',description:'Italy', restaurant_id:28},
        {id:394, item:'House Cabernet', price:"$5",type:'wine',description:'', restaurant_id:28},
        {id:395, item:'Benzinger Family Winery Cabernet Sauvignon', price:"$7",type:'wine',description:'Sonoma Valley', restaurant_id:28},
        {id:396, item:'BR Cohn Silver Label Cabernet Sauvignon', price:"$10",type:'wine',description:'North Coast', restaurant_id:28},
        {id:397, item:'La Crema Pinot Noir', price:"$9",type:'wine',description:'Monterey', restaurant_id:28},
        {id:398, item:'De Loach Vineyards "Heritage Reserve" Merlot', price:"$6.75",type:'wine',description:'California', restaurant_id:28},
        {id:399, item:'Piattelli Vineyards Reserve Malbec', price:"$7",type:'wine',description:'Lujan De Cuyo, Mendoza', restaurant_id:28},
        //SUSHI ZANMAI
        {id:400, item:'Sunomono Seafood Salad', price:"$8.5",type:'food',description:'', restaurant_id:21},
        {id:401, item:'Tuna Poki Salad', price:"$9",type:'food',description:'', restaurant_id:21},
        {id:402, item:'Tsukemono Platter', price:"$5",type:'food',description:'', restaurant_id:21},
        {id:403, item:'Tuna Carpaccio', price:"$18",type:'food',description:'', restaurant_id:21},
        {id:404, item:'Maguro', price:"$2.75 each",type:'food',description:'Tuna', restaurant_id:21},
        {id:405, item:'Hamachi', price:"$2.75 each",type:'food',description:'Yellowtail', restaurant_id:21},
        {id:406, item:'Bincho', price:"$2.75 each",type:'food',description:'Albacore', restaurant_id:21},
        {id:407, item:'Shake', price:"$2.75 each",type:'food',description:'Salmon', restaurant_id:21},
        {id:408, item:'Ebi', price:"$2.75 each",type:'food',description:'Shrimp', restaurant_id:21},
        {id:409, item:'Tako', price:"$2.75 each",type:'food',description:'Octopus', restaurant_id:21},
        {id:410, item:'Masago', price:"$2.75 each",type:'food',description:'Smelt Roe', restaurant_id:21},
        {id:411, item:'Kaibashira', price:"$2.75 each",type:'food',description:'Fresh Bay Scallop', restaurant_id:21},
        {id:412, item:'Hotate', price:"$2.75 each",type:'food',description:'Grilled Scallop', restaurant_id:21},
        {id:413, item:'Hokki Gai', price:"$2.75 each",type:'food',description:'Surf Clam', restaurant_id:21},
        {id:414, item:'Ika', price:"$2.75 each",type:'food',description:'Squid', restaurant_id:21},
        {id:415, item:'Saba', price:"$2.75 each",type:'food',description:'Mackerel', restaurant_id:21},
        {id:416, item:'Tamago', price:"$2.75 each",type:'food',description:'Egg Omelet', restaurant_id:21},
        {id:417, item:'Inari', price:"$2.75 each",type:'food',description:'Tofu Sushi', restaurant_id:21},
        {id:418, item:'Uzura', price:"$2.75 each",type:'food',description:'Quail Egg', restaurant_id:21},
        {id:419, item:'Maguro Tataki', price:"$3.5 each",type:'food',description:'Seared Tuna', restaurant_id:21},
        {id:420, item:'Buri', price:"$3.75 each",type:'food',description:'Fatty Yellowtail', restaurant_id:21},
        {id:421, item:'Sumoku Shake', price:"$3.5 each",type:'food',description:'Smoked Salmon ', restaurant_id:21},
        {id:422, item:'Tobiko', price:"$3.5 each",type:'food',description:'Flying Fish Roe', restaurant_id:21},
        {id:423, item:'Wasabi Tobiko', price:"$3.5 each",type:'food',description:'Wasabi Flying Fish Roe', restaurant_id:21},
        {id:424, item:'Ikura', price:"$4.75 each",type:'food',description:'Salmon Roe', restaurant_id:21},
        {id:425, item:'Uni', price:"$6 each",type:'food',description:'Sea Urchin', restaurant_id:21},
        {id:426, item:'Amaebi', price:"$6.5 each",type:'food',description:'Sweet Shrimp', restaurant_id:21},
        {id:427, item:'Unagi', price:"$3.5 each",type:'food',description:'Fresh Water Eel', restaurant_id:21},
        {id:428, item:'Kani', price:"$4.5 each",type:'food',description:'Crab Meat ', restaurant_id:21},
        {id:429, item:'Anago', price:"$4.5 each",type:'food',description:'Sea Eel', restaurant_id:21},
        {id:431, item:'Avocado HR', price:"$4.25 each",type:'food',description:'', restaurant_id:21},
        {id:432, item:'Cucumber HR', price:"$3.75 each",type:'food',description:'', restaurant_id:21},
        {id:433, item:'Shiso Plum HR', price:"$3.75 each",type:'food',description:'', restaurant_id:21},
        {id:434, item:'Pickled Garlic HR', price:"$4 each",type:'food',description:'', restaurant_id:21},
        {id:435, item:'Mushroom HR', price:"$3.75 each",type:'food',description:'', restaurant_id:21},
        {id:436, item:'Albacore HR', price:"$4.25 each",type:'food',description:'', restaurant_id:21},
        {id:437, item:'Yellowtail Scallion HR', price:"$4.5 each",type:'food',description:'', restaurant_id:21},
        {id:438, item:'Spicy Yellowtail HR', price:"$4.5 each",type:'food',description:'', restaurant_id:21},
        {id:439, item:'Spicy Fresh Salmon HR', price:"$4.5 each",type:'food',description:'', restaurant_id:21},
        {id:440, item:'Fresh Water Eel HR', price:"$5.5 each",type:'food',description:'', restaurant_id:21},
        {id:441, item:'Spicy Tuna Poki HR', price:"$5.5 each",type:'food',description:'', restaurant_id:21},
        {id:442, item:'Bay Scallop HR', price:"$4.5 each",type:'food',description:'', restaurant_id:21},
        {id:443, item:'Kobe Beef Yakiniku HR', price:"$6 each",type:'food',description:'', restaurant_id:21},
        {id:444, item:'Salmon Skin HR', price:"$4.5 each",type:'food',description:'', restaurant_id:21},
        {id:445, item:'Kappa Maki', price:"$ 4.5",type:'food',description:'Cucumber Roll 6pc', restaurant_id:21},
        {id:446, item:'Ume Shiso Maki', price:"$4.75",type:'food',description:'Plum paste, shiso and cucumber 6pc', restaurant_id:21},
        {id:447, item:'Kanpyo Maki', price:"$4.5",type:'food',description:'Marinated Gourd Roll 4pc', restaurant_id:21},
        {id:448, item:'Avacodo Maki', price:"$4.5",type:'food',description:'Avacodo Roll 6pc', restaurant_id:21},
        {id:449, item:'Shake Maki', price:"$5",type:'food',description:'Salmon with green onion 6pc', restaurant_id:21},
        {id:450, item:'Tekka Maki', price:"$5.25",type:'food',description:'Tuna Roll 6pc', restaurant_id:21},
        {id:451, item:'Negi Hama Maki', price:"$6.75",type:'food',description:'Yellowtail with green onion 6pc', restaurant_id:21},
        {id:452, item:'Tuna Poki', price:"$8.5",type:'food',description:'Spicy Tuna 6pc', restaurant_id:21},
        {id:453, item:'California', price:"$7.5",type:'food',description:'Imitation Crab Avocado 8pc', restaurant_id:21},
        {id:454, item:'Shake Avo', price:"$9.5",type:'food',description:'Salmon Avacodo 8pc', restaurant_id:21},
        {id:455, item:'Spider', price:"$9.5",type:'food',description:'Soft Shell Crab 6pc', restaurant_id:21},
        {id:456, item:'Colorado', price:"$11.5",type:'food',description:'Teriyaki Filet Mignon 8pc', restaurant_id:21},
        {id:457, item:'Kobe Beef Yakiniku', price:"$9.5",type:'food',description:'Kobe Beef grilled with spicy teriyaki sauce 5pc', restaurant_id:21},
        {id:458, item:'Buddha', price:"$9.5",type:'food',description:'Shrimp Tempura 6pc', restaurant_id:21},
        {id:459, item:'Boulder', price:"$9.5",type:'food',description:'Yellowtail, Tuna 6pc', restaurant_id:21},
        {id:460, item:'Philadelphia', price:"$9",type:'food',description:'Smoked Salmon, Cream Cheese 8pc', restaurant_id:21},
        {id:461, item:'Premium Fire Cracker', price:"$16",type:'food',description:'Tuna, Avo, Temp Bits, Spicy Mayo 8pc', restaurant_id:21},
        {id:462, item:'Smokey & The Bandit', price:"$9.5",type:'food',description:'Smoked Trout, Real Crab 8pc', restaurant_id:21},
        {id:463, item:'FutoMaki', price:"$9",type:'food',description:'Vegetable and Egg Omelet 5pc', restaurant_id:21},
        {id:464, item:'Death', price:"$9",type:'food',description:'Salmon Skin with habanero mayo 8pc', restaurant_id:21},
        {id:465, item:'Caterpillar', price:"$13",type:'food',description:'Eel and Avacado 8pc', restaurant_id:21},
        {id:466, item:'Rainbow', price:"$14",type:'food',description:'Crab with assorded fish 8pc', restaurant_id:21},
        {id:467, item:'Hama Chile', price:"$14",type:'food',description:'Yellowtail, Masago, Jalapeno 8pc', restaurant_id:21},
        {id:468, item:'Z-No. 6', price:"$11",type:'food',description:'Spicy Shrimp 8pc', restaurant_id:21},
        {id:469, item:'Lucky 7', price:"$15",type:'food',description:'Shrimp Tempura, Tuna, garlic 8pc', restaurant_id:21},
        {id:470, item:'Z-No 9', price:"$15",type:'food',description:'Shrimp Tempura, Salmon, Avacado 8pc', restaurant_id:21},
        {id:471, item:'Dragon-Z', price:"$15",type:'food',description:'Shrimp Tempura Salmon, Avacado', restaurant_id:21},
        {id:472, item:'Orange Sunshine', price:"$16",type:'food',description:'Salmon, Avo, Kaiware, Temp bits, Spicy mayo 8pc', restaurant_id:21},
        {id:473, item:'Stop Drop and Roll', price:"$15",type:'food',description:'Shrimp Tempura and spicy tuna', restaurant_id:21},
        {id:474, item:'Shredder', price:"$16",type:'food',description:'Crab, eel, cream cheese, Tempura fried 6pc', restaurant_id:21},
        {id:475, item:'Aloha', price:"$14",type:'food',description:'Tuna Poki, Tempura onions, Avacado 6pc', restaurant_id:21},
        {id:476, item:'Galaxy', price:"$14",type:'food',description:'Masago, Spicy Tuna and Eel 8pc', restaurant_id:21},
        {id:477, item:'Z-Fanta-Z', price:"",type:'food',description:'(Build your own)', restaurant_id:21},
        {id:478, item:'Combo 1', price:"$29",type:'food',description:'Tuna, Yellowtail, Salmon, Shrimp, 2 Pieces each nigiri, Spicy tuna roll, California Roll', restaurant_id:21},
        {id:479, item:'Combo 2', price:"$32",type:'food',description:'Tuna, Yellowtail, Salmon, Shrimp, Freshwater eel, 2 pieces each nigiri, Spicy tuna roll, Salmon avacado roll', restaurant_id:21},
        {id:480, item:'Veggie Combo', price:"$23",type:'food',description:'All Vegetable (2 Roll and 7pc)', restaurant_id:21},
        {id:481, item:'Appetizer Sashimi', price:"$16",type:'food',description:'5 pieces of one kind, Tuna, Yellowtail, Salmon', restaurant_id:21},
        {id:482, item:'Combination Sashimi', price:"$28",type:'food',description:'Regular', restaurant_id:21},
        {id:483, item:'Combination Sashimi', price:"$32",type:'food',description:'Deluxe', restaurant_id:21},
      ]);
    //});
};
