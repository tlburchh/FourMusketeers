const mongoose = require("mongoose");
const db = require("../models");

// This file seeds our database

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wino", { useNewUrlParser: true });

const keywordsSeed = [
  {
    keyword: "tart"
  },
  {
    keyword: "flamboyant"
  },
  {
    keyword: "zesty"
  },
  {
    keyword: "austere"
  },
  {
    keyword: "barnyard"
  },
  {
    keyword: "big"
  },
  {
    keyword: "bright"
  },
  {
    keyword: "buttery"
  },
  {
    keyword: "chewy tannins"
  },
  {
    keyword: "crisp"
  },
  {
    keyword: "dense"
  },
  {
    keyword: "earthy"
  },
  {
    keyword: "elegant"
  },
  {
    keyword: "fat"
  },
  {
    keyword: "flabby"
  },
  {
    keyword: "fleshy"
  },
  {
    keyword: "jammy"
  },
  {
    keyword: "juicy"
  },
  {
    keyword: "oaked"
  },
  {
    keyword: "silky"
  },
  {
    keyword: "unctuous"
  }
];
const winesSeed = [
  {
    name: "Traditional Mead - Off Dry",
    color: ["blue", "#0000FF"],
    description: "Honey wine with just a hint of sweetness. Light floral notes with a slight citrus finish. Serve as you would a white wine, lightly chilled with Lemon Chicken, fish, or with spicy food! Silver Medal  - NC State Fair Wine Competition",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 1
  },
  {
    name: "Off-dry Blackberry Mead",
    color: ["purple", "#46053B"],
    description: "Our Blackberry Off-dry Mead is our honey homage to red wine. With a full berry nose, and a taste that is tart blackberry balanced with the warm flavors of oak and vanilla. Serve at cellar temerature with beef or pork, or chill slightly, if you prefer.",
    priceRegular: '26.00',
    isAvailable: true,
    orderNumber: 2
  },
  {
    name: "Traditional Mead - Semi-sweet",
    color: ["blue", "#0000FF"],
    description: "A sweeter honey wine. Fabulous floral honey nose (from the wild flower honey) and long lingering honey finish! Just what you would expect from mead! Fabulous with cheesecake! Best in Class/Double Gold Medal - American Wine Society",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 13
  },
  {
    name: "Traditional Mead - Gallberry Blossom",
    color: ["blue", "#0000FF"],
    description: "Limited Release. The fragrance of this mead is floral with a little apricot, while it has a sweet slightly fruity flavor with hints of dried manog. Pairs well with pineapple teriyaki or a medium rare burger. Serve lightly chilled. Bronze Medal - Finger Lakes Wine",
    priceRegular: '15.00',
    isAvailable: true,
    orderNumber: 14
  },
  {
    name: "Semi-sweet Blackberry Mead",
    color: ["purple", "#46053B"],
    description: "Our Blackberry Mead is sweet, tangy and bursting with flavor! Serve chilled with beef or pork. Try it with a lemon flavored dessert or as a reduction over ice cream! If you're looking for something lighter, try mixing with lemonade for a porch-sipper!",
    priceRegular: '24.00',
    isAvailable: true,
    orderNumber: 15
  },
  {
    name: "Pineapple Mead",
    color: ["yellow", "#ffff00"],
    description: "Honeyed Pineapple has great honey character and finishes leaving a nice pineapple flavor in your mouth. Pairs well with teriyaki chicken or just as a cold libation on a summer afternoon. Works well as a base for a tropical sangria!",
    priceRegular: '19.00',
    isAvailable: true,
    orderNumber: 16
  },
  {
    name: "Blueberry Mead",
    color: ["blue", "#0000FF"],
    description: "The luscious summer flavor of blueberries preserved with honey for any time of the year. Fruity, sweet, and jammy this mead is lovely on its own or paired with a summer salad or barbeque. Or make sangria with strawberries and blueberries.",
    priceRegular: '23.00',
    isAvailable: true,
    orderNumber: 17
  },
  {
    name: "Peach Mead",
    color: ["peach", "#ffe5b4"],
    description: "Sweet Peach Mead reminds us of ripe, juicy summer peaces, bursting with flavor. Serve this sweet wine chilled at a picnic or use it to brighten up your favorite pork or spicy chicken dish! Or use it to make a great Summer sangria or Mead-mosa!",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 18
  },
  {
    name: "Spiced Apple Mead",
    color: ["apple green", "#5caf4c"],
    description: "Apple pie in a glass! Wonderful apple flavor enhanced with spices of cinnamon, clove and nutmeg. Tasty chilled, room temperature, or warmed gently in the Crockpot! Great with turkey dinner, carrot cake, or spice cake! Silver Medal - American Wine Society",
    priceRegular: '20.00',
    isAvailable: true,
    orderNumber: 19
  },
  {
    name: "Pomegranate Pink Peppercorn",
    color: ["pink", "#CB4C78"],
    description: "Pomegranate Pink Peppercorn Mead has the lively zing of pomegranate and the fruity spice of pink peppercorns. Like all of the women fighting and surviving breast cancer, this mead is something special. We're donating $5 from each bottle to local cahrity.",
    priceRegular: '25.00',
    isAvailable: true,
    orderNumber: 3
  },
  {
    name: "Cranberry Orange Fall Seasonal",
    color: ["pink", "#CB4C78"],
    description: "A tart and tangy holiday mead, yet lightly honey sweetened! A perfect complement to all of your holiday meals, from turkey dinner to baked ham.",
    priceRegular: '19.00',
    isAvailable: true,
    orderNumber: 4
  },
  {
    name: "Honeyed Aromatic Roast",
    color: ["coffee", "#6f4e37"],
    description: "Unique blend of honey and cold-pressed Costa Rican coffee is perfect for brunch or late night relaxing. Silver Medal - American Wine Society.",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 5
  },
  {
    name: "Lavender",
    color: ["olive", "#bab86c"],
    description: "Lavender is known for its floral nose and relaxing benefits. Heady floral with a slight rose flavor.",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 6
  },
  {
    name: "Nordic Blend",
    color: ["olive", "#bab86c"],
    description: "Reminiscent of a well known Scandinavian drink, Aquavit. Infused with caraway, fennel and anise seed. Flavors of fennel and rye bread. Bronze medal - Finger Lakes",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 7
  },
  {
    name: "Sage Mead Fall Seasonal",
    color: ["olive", "#bab86c"],
    description: "Sage is best known as a culinary herb, but also boasts restorative properties. Earthy, savory flavorys with a light woodsy quality. Lightly sweetened.",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 8
  },
  {
    name: "Ginger",
    color: ["olive", "#bab86c"],
    description: "Ginger's warming properties have been recognized for years, especially in Asia. Light floral nose with intense ginger flavor, a slight burn sweetened with honey.",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 9
  },
  {
    name: "Ben's Special Ginger",
    color: ["olive", "#bab86c"],
    description: "Our regular Ginger with MORE ginger! Tangy and spicy for ginger lovers. Great on its own but also phenomenal as a mixer for a bloody Mary or mule!",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 10
  },
  {
    name: "Chai Tea",
    color: ["olive", "#bab86c"],
    description: "Chai tea spices of cardamom, ginger, and cinnamon have enchanted the senses for centuries. Reminiscent of a cup of exotic spiced tea with honey.",
    priceRegular: '18.00',
    isAvailable: true,
    orderNumber: 11
  },
  {
    name: "Kickin' Cranberry Orange Fall Seasonal",
    color: ["cranberry", "#CB4C78"],
    description: "Our mead with Peppers! This wine has the juicy flavors of Cranberry and Orange, kicked up a notch with local, hand smoked and dried jalapeno peppers. Serve slightly chilled with everything from chicken, to a BLT, to shrimp and grits.",
    priceRegular: '19.00',
    isAvailable: true,
    orderNumber: 12
  },
  {
    name: "Reserve Chocolate Orange Mead",
    color: ["coffee", "#6f4e37"],
    description: "Aged for a year on coca nibs, a very special chocolate and orange mead to share with your honey! 4.5 years old!",
    priceRegular: '45.00',
    isAvailable: false,
    orderNumber: 100
  },
  {
    name: "Reserve White Chocolate Raspberry Mead",
    color: ["purple", "#650a11"],
    description: "Crafted from tart raspberries and wild flower honey, sweetened with meadowfoam honey, and aged on cocoa butter.",
    priceRegular: '45.00',
    isAvailable: false,
    orderNumber: 101
  },
];
const ratingsSeed = [
  {
    numericalRating: 4
  },
  {
    numericalRating: 2
  },
  {
    numericalRating: 1
  },
  {
    numericalRating: 3
  }
];

// Seed initial data


db.Keywords.remove({}).then(
  db.Keywords.insertMany(keywordsSeed).then(resp => {
    console.log("Added keywords");
    db.Wines.remove({}).then((res, err) => {
      db.Wines.insertMany(winesSeed).then(resp => {
        console.log("Added wines");
        db.Rating.remove({}).then(
          db.Rating.insertMany(ratingsSeed).then(resp => {
            console.log("Added ratings");
            process.exit(0);
          }).catch(err => {
            console.log(`Error inserting ratings ${err}`);
          })
        );
      }).catch(err => {
        console.log(`Error inserting wines ${err}`);
      });
    });
  }).catch(err => {
    console.log(`Error inserting keywords ${err}`);
  })
);

