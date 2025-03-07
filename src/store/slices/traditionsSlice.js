import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pages: [
        {
            id: 1,
            title: 'Austrian Cuisine Heritage',
            subtitle: 'A Taste of Tradition:\nExploring Austrian Cuisine',
            content: `Austrian cuisine is more than just food—it's a reflection of the country's rich history and diverse cultural influences. From the bustling cities to the serene countryside, Austrian food tells a story of centuries-old traditions.
      
One of the most iconic dishes you’ll encounter in Austria is the Wiener Schnitzel—a breaded veal or pork cutlet that’s crispy on the outside and tender on the inside. Often served with potato salad or lingonberry jam, this dish represents the hearty, comforting side of Austrian dining.
      
Another classic is Tafelspitz, boiled beef served with a rich broth and accompanied by horseradish and apple sauce. This dish is deeply rooted in Austrian royal history and is considered the national dish of Austria.
      
For those with a sweet tooth, Austrian desserts are simply irresistible. The Sachertorte—a rich chocolate cake with apricot jam—is world-famous, and the Apfelstrudel, a delicate pastry filled with spiced apples, is a must-try.
      
Whether it's the savory dishes or the indulgent desserts, Austrian cuisine has something to offer every palate. It's a perfect blend of simplicity, flavor, and history, with every bite telling the story of generations past.`,
        },
        {
            id: 2,
            title: 'Traditional Cooking Techniques',
            subtitle: 'Cooking Like a Local:\nTraditional Austrian Cooking Techniques',
            content: `One of the things that makes Austrian cuisine so unique is the way it's prepared. Traditional cooking techniques are central to the taste and authenticity of many iconic Austrian dishes.
For instance, the method of slow braising is widely used in dishes like Schweinsbraten (roast pork), where the meat is cooked slowly to become tender and juicy. This method helps enhance the flavor of the dish and is often accompanied by potatoes, sauerkraut, or dumplings.

Another important technique is roasting, which is especially prevalent in the preparation of Kaiserschmarrn, a sweet shredded pancake. Roasting gives the dish its crispy edges, which perfectly balance the fluffy texture inside.
      
Baking is also an essential part of Austrian culinary traditions, with Apfelstrudel being one of the most beloved baked goods. The dough is rolled thin, filled with spiced apples, and baked until golden brown, creating a dessert that is both warm and comforting.
      
What truly sets Austrian cuisine apart is the use of seasonal ingredients. From fresh herbs to wild mushrooms and game meats, these ingredients are incorporated into dishes depending on the time of year, ensuring that every meal is aligned with nature’s rhythms.
      
By preserving these cooking methods, Austrian chefs continue to honor the traditions that make their cuisine so special. It’s about respecting the process, understanding the ingredients, and crafting dishes that are simple yet full of rich flavors.`,
        },
        {
            id: 3,
            title: 'Regional Specialties of Velden',
            subtitle: 'Velden’s Culinary Delights:\nA Hidden Gem by the Lake',
            content: `Nestled by the beautiful Lake Faak, Velden offers more than just breathtaking views—it’s also home to some truly unique and delicious culinary traditions. Local specialties here reflect the flavors of the region, with an emphasis on fresh, seasonal ingredients.
      
Fischbrotsuppe (fish broth soup) is a local favorite, made with fresh fish from the lake and served in a savory broth. It’s a dish that celebrates the rich aquatic life in the region and offers a taste of Velden’s natural abundance.
      
Alpenkost, a regional cheese dish, is another must-try. Made with the finest cheeses from the surrounding alpine regions, it’s often paired with rustic bread and fresh herbs. This dish perfectly captures the essence of Velden’s location between the mountains and the lake.
      
Velden also boasts a rich array of fresh fish dishes, with local restaurants serving lake trout and whitefish as their specialty. These fish are caught from the crystal-clear waters of Lake Faak and prepared using time-honored methods.
      
The local food culture in Velden is influenced by the seasons. During the warmer months, fresh herbs, wild mushrooms, and seasonal vegetables are incorporated into many dishes. In the winter, heartier, warming foods like stews and casseroles take center stage.
      
If you find yourself in Velden, be sure to indulge in the local culinary delights that highlight the region’s unique flavors. It’s a destination where food and nature come together to create an unforgettable experience.`,
        },
    ],
};

const traditionsSlice = createSlice({
    name: 'traditions',
    initialState,
    reducers: {},
});

export default traditionsSlice.reducer;
