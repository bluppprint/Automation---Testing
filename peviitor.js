describe('peviitor search function',  () => {

    it('should have correct page title', async () => {
        await browser.url('http://peviitor.ro');
        await expect(browser).toHaveTitle('peviitor | motor de căutare locuri de muncă');
    })

    it('should contain a search bar', async () => {
        const searchBar = await $('.input-container');
        await expect(searchBar).toBeDisplayed();
        
    });

    it('should have a working search bar', async () => {
        const inputField = await $('//*[@id="root"]/section/section/section[2]/main/section[2]/div/div[1]/input');
        const searchButton = await $('//*[@id="root"]/section/section/section[2]/main/section[2]/button');
    
        await inputField.setValue('Tester');
        await searchButton.click();

    
       
      });


      it('should have correct serp page title', async () => {

        await browser.url('https://peviitor.ro/rezultate?q=tester&country=Rom%C3%A2nia&page=1');
        await expect(browser).toHaveTitle('peviitor | motor de căutare locuri de muncă');
        
      });

      it('should contain locuri de munca text on SERP', async () => {

        const serpLocurideMunca = await $('//*[@id="root"]/section/section/div/section[1]/p');
        await expect(serpLocurideMunca).toBeDisplayed();

        
      });
    
      
});

