//@ts-check
// This file is for seed data for products and database.
// Import this file to Serums page.

// Make a product array of objects.
const products = [
	{
		name: "Giraffelash Eyelash + Brow Growth",
		image: "/images/IMG_5190.jpg",
		category: "Serums",
		description: `No need to use lash extensions, falsies, or chemical-laden eyelash growth serums again!

		All-natural Giraffelash™ has been improved yet again and now works faster than ever! This unique blend of Vitamin A and E, castor seed oil, and carrot extracts stimulates hair follicles and is available in formulations to lengthen and thicken.  NOT FOR SENSITIVE EYES. 
		
		Extra Bonus: Giraffelash maintain the effects even after discontinuing use!

		You’ll see results in as little as 3 DAYS with twice daily application, or 1 week if used once, daily (Preferable option if you wear eye makeup during day). 
		Easy Application: Dip wand into bottle and blot. Apply ONLY TO TIPS of lashes to avoid getting in eyes. And dab a little bit on brow area. Done in a minute! 
		
		`,
		brand: " none",
		price: 60.0,
		countInStock: 7,
		rating: 5.0,
		numReviews: 7,
	},
	{
		name: "NOTOX",
		image: "/images/IMG_5156.jpg",
		category: "Serums",
		description: `Powerful Natural Solution for:
		*Unsightly Dark Spots and Hyperpigmentation
		*Wrinkles 
		*Scars
		*Stretch Marks

		You’ll develop a healthy glow with this serum packed with nutrients and enzymes from Vitamin A & C, carrot and papaya oils, and a special blend of essential oils.  Results start  within two weeks of regular use as directed. Only to be used at night. 

		Feel your skin tightening within minutes of first use. See results in as little as one week with regular use as directed. Look 10 years younger in one month! 2 month supply  is $65. 
		
		`,
		brand: " none",
		price: 65.0,
		countInStock: 7,
		rating: 5,
		numReviews: 2,
	},
	{
		name: "Magic Clay Mask + Cleaner",
		image: "/images/IMG_5180.jpg",
		category: "Serums",
		description: `Created from  silica compounds that create more oxygen flow to the skin while pulling out toxins buried into the skin. This results in softer, cleaner, and more beautiful skin. Mask is so gentle and can be used daily or once a week. 
		Directions: Apply a teaspoon into a bowl with a few drops of water until paste forms. Apply paste with a brush (Or hand) by patting into skin. Allow to dry for 10 minutes. Gently wash with warm and then cool water (To close pores). 
		I can guarantee you’ve never used a clay mask like this before! 
		`,
		brand: " none",
		price: 25.0,
		countInStock: 3,
		rating: 4.9,
		numReviews: 10,
	},
	{
		name: "Liquid Diamonds Facelift Spray",
		image: "/images/spray.jpg",
		category: "Serums",
		description: `Your friends may ask if you’ve gotten BOTOX!

		Infused with a plethora of anti-oxidants that’ll reduce wrinkles,  you’ll think of this skin changer as liquid diamonds for your skin! Liquid diamond is specifically formulated to increase collagen/elastin production in skin, which tights skin and softens wrinkles. You will have a more younger, radiant, glowing face starting in 3 days! 
		
		Directions: After cleansing, spray once on each part of face and neck and then pat into skin. After it’s dry, apply serum or moisturizer as normal. Recommended use is in evenings only. 
		`,
		brand: " none",
		price: 65.0,
		countInStock: 7,
		rating: 4.9,
		numReviews: 8,
	},

	{
		name: "Sleep Magic Serum",
		image: "/images/IMG_5180.jpg",
		category: "Serums",
		description: `SLEEP MAGIC contains chamomile extracts that help you rest
        soundly. Apply a thin layer of serum to eyelids 30 minutes
        before wanting to sleep and watch the magic happen!`,
		brand: " none",
		price: 25.0,
		countInStock: 7,
		rating: 4.9,
		numReviews: 10,
	},
	{
		name: "Ance, Blackhead, and Whiteheads NO MORE Serum",
		image: "/images/IMG_5172.jpg",
		category: "Serums",
		description: `Target your worst breakouts with this proprietary acne-fighting formula ideal for sensitive skin. Simply apply 1-2 drops on affected areas at night after cleansing face. Apply moisturizer afterwards if necessary.  Results start within 3 days. 
		`,
		brand: " none",
		price: 35.0,
		countInStock: 7,
		rating: 4.9,
		numReviews: 10,
	},
];

// ES6 Modules Version
export default products;

// Common JS Version
// module.exports = products;
