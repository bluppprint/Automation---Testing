 describe('eMag.ro',() => {


    it('should have the correct page title', async () => {
        await browser.url('http://emag.ro');
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');

    });

    it('should contain a cart button', async () => {
        const cartButton = await $('#my_cart');
        await expect(cartButton).toBeDisplayed();


    });

    it('it should open emag genius page', async () => {
        const geniusButton = await $('[title="Genius"]');
        await geniusButton.click();
        await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');

        
    })

    it('it should have a working search', async () => {
       const searchBar = await $('#searchboxTrigger');
       const searchButton = await $('.searchbox-submit-button');

       await searchBar.setValue('SodaStream');
       await searchButton.click();

       await expect(browser).toHaveTitle('Cauți SodaStream? Alege din oferta eMAG.ro');

        
    });


 });

